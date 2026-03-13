#!/usr/bin/env python3
"""
Extract the longest sent emails from PST files for voice analysis.

Usage:
    python3 tools/extract-voice-samples.py /path/to/pst/files/ [--top 50] [--min-words 100]

Workflow:
    1. Finds all .pst files in the given directory
    2. Extracts them to mbox format using readpst (from libpst)
    3. Parses all emails, filters to sent items
    4. Strips quoted replies, signatures, and attachment references
    5. Ranks by body text word count (not message size)
    6. Exports top N to individual .txt files in 0xBobski_research/voice-samples/
"""

import argparse
import email
import mailbox
import os
import re
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from pathlib import Path


@dataclass
class EmailSample:
    subject: str
    date: str
    to: str
    word_count: int
    body: str
    source_file: str


def check_readpst():
    """Verify readpst is installed."""
    try:
        subprocess.run(["readpst", "-V"], capture_output=True, check=True)
        return True
    except (FileNotFoundError, subprocess.CalledProcessError):
        print("ERROR: readpst not found. Install with: brew install libpst")
        sys.exit(1)


def extract_pst_to_mbox(pst_path: str, output_dir: str) -> list[str]:
    """Extract PST file to mbox format using readpst. Returns list of mbox file paths."""
    pst_name = Path(pst_path).stem
    pst_output = os.path.join(output_dir, pst_name)
    os.makedirs(pst_output, exist_ok=True)

    print(f"  Extracting: {Path(pst_path).name} ...")
    try:
        # -M = mbox output, -r = recursive folders, -q = quiet
        subprocess.run(
            ["readpst", "-M", "-r", "-q", "-o", pst_output, pst_path],
            capture_output=True,
            text=True,
            check=True,
        )
    except subprocess.CalledProcessError as e:
        print(f"  WARNING: readpst error on {pst_path}: {e.stderr[:200]}")
        # Try without -q to see what happened
        subprocess.run(
            ["readpst", "-M", "-r", "-o", pst_output, pst_path],
            capture_output=True,
            text=True,
        )

    # Find all mbox files created
    mbox_files = []
    for root, dirs, files in os.walk(pst_output):
        for f in files:
            fpath = os.path.join(root, f)
            # readpst creates files without extensions for mbox format
            # Also look for files in "Sent" folders specifically
            mbox_files.append(fpath)

    print(f"  Found {len(mbox_files)} folders/files in {pst_name}")
    return mbox_files


def strip_quoted_text(body: str) -> str:
    """Remove quoted replies and forwarded content."""
    lines = body.split("\n")
    clean_lines = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        # Stop at common reply/forward markers
        if stripped.startswith("On ") and stripped.endswith("wrote:"):
            break
        if stripped == "-----Original Message-----":
            break
        if stripped.startswith("________"):
            break
        if stripped.startswith(">"):
            continue
        # Outlook forward/reply headers: "From: X" followed by "Sent:" or "Date:" within a few lines
        if stripped.startswith("From:") and i + 1 < len(lines):
            lookahead = "\n".join(lines[i : i + 5])
            if any(marker in lookahead for marker in ["Sent:", "Date:", "Subject:"]):
                break
        clean_lines.append(line)
    return "\n".join(clean_lines)


def strip_signature(body: str) -> str:
    """Remove email signatures."""
    # Common signature separators
    patterns = [
        r"\n--\s*\n",  # Standard sig separator
        r"\nRegards,?\s*\n",
        r"\nKind [Rr]egards,?\s*\n",
        r"\nBest [Rr]egards,?\s*\n",
        r"\nCheers,?\s*\n",
        r"\nThanks,?\s*\n",
        r"\nSent from my ",
        r"\nGet Outlook for ",
        r"\nRob Kay\n",  # Name-based signature start
        r"\nRobert Kay\n",
    ]
    for pattern in patterns:
        match = re.search(pattern, body)
        if match:
            # Only strip if the remaining text is short (likely a sig)
            remaining = body[match.start() :]
            if len(remaining.split()) < 100:
                body = body[: match.start()]
    return body


def strip_mime_boundaries(body: str) -> str:
    """Remove MIME boundary sections and base64-encoded attachment data."""
    lines = body.split("\n")
    clean_lines = []
    in_boundary = False
    for line in lines:
        stripped = line.strip()
        # Detect MIME boundary markers
        if stripped.startswith("----boundary-LibPST") or stripped.startswith("--boundary-LibPST"):
            in_boundary = True
            continue
        if in_boundary:
            # Skip Content-Disposition, Content-Type, filename lines
            if stripped.startswith(("Content-", "filename")):
                continue
            # Skip base64-encoded data (long strings of alphanumeric + /+=)
            if len(stripped) > 60 and re.match(r"^[A-Za-z0-9+/=\s]+$", stripped):
                continue
            # Skip RTF data
            if stripped.startswith(("e1xydGYx", "{\\rtf")):
                continue
            # Empty line after boundary metadata — back to content
            if not stripped:
                in_boundary = False
                continue
            # If we hit what looks like normal text, end boundary mode
            if len(stripped) < 200 and " " in stripped:
                in_boundary = False
                clean_lines.append(line)
                continue
        else:
            # Also skip standalone base64 lines (no boundary marker needed)
            if len(stripped) > 60 and re.match(r"^[A-Za-z0-9+/=]+$", stripped):
                continue
            clean_lines.append(line)
    return "\n".join(clean_lines)


def strip_email_headers(body: str) -> str:
    """Remove embedded email headers (Received:, ARC-*, DKIM-*, etc.) from body."""
    lines = body.split("\n")
    clean_lines = []
    skip_header = False
    header_patterns = (
        "Received:", "ARC-", "DKIM-", "Authentication-Results",
        "Received-SPF:", "MIME-Version:",
        "Message-ID:", "In-Reply-To:", "References:", "Thread-",
        "Return-Path:", "Delivered-To:",
        "Content-Type:", "Content-Transfer-Encoding:",
        # Catch all X- headers (spam filters, tracking, org metadata)
        "X-",
    )
    for line in lines:
        stripped = line.strip()
        # Detect header lines (key: value at start of line, or continuation with whitespace)
        if any(stripped.startswith(p) for p in header_patterns):
            skip_header = True
            continue
        # Header continuation lines start with whitespace
        if skip_header and line and line[0] in (" ", "\t"):
            continue
        # Non-header line
        skip_header = False
        clean_lines.append(line)
    return "\n".join(clean_lines)


def is_prose(body: str) -> bool:
    """Heuristic: is this mostly natural language, not data/tables/code?"""
    lines = body.strip().split("\n")
    if not lines:
        return False

    # Count lines with tab-separated data (schedules, exports, CSV-like)
    tab_lines = sum(1 for line in lines if line.count("\t") >= 3)
    if tab_lines > len(lines) * 0.3:
        return False

    # Count lines starting with %R, %T, %F (Primavera P6 export format)
    p6_lines = sum(1 for line in lines if line.strip().startswith(("%R", "%T", "%F")))
    if p6_lines > 5:
        return False

    # Check for HTML-heavy content (forwarded HTML that wasn't stripped)
    html_tags = body.count("<") + body.count("</")
    if html_tags > 50:
        return False

    # Check ratio of short lines (likely tables/lists) vs prose paragraphs
    short_lines = sum(1 for line in lines if 0 < len(line.strip()) < 15)
    if len(lines) > 20 and short_lines > len(lines) * 0.6:
        return False

    return True


def html_to_text(html: str) -> str:
    """Simple HTML to plain text conversion."""
    # Remove style and script blocks
    html = re.sub(r"<style[^>]*>.*?</style>", "", html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r"<script[^>]*>.*?</script>", "", html, flags=re.DOTALL | re.IGNORECASE)
    # Convert <br> and <p> to newlines
    html = re.sub(r"<br\s*/?>", "\n", html, flags=re.IGNORECASE)
    html = re.sub(r"</?p[^>]*>", "\n", html, flags=re.IGNORECASE)
    html = re.sub(r"</?div[^>]*>", "\n", html, flags=re.IGNORECASE)
    html = re.sub(r"</?tr[^>]*>", "\n", html, flags=re.IGNORECASE)
    html = re.sub(r"</?li[^>]*>", "\n- ", html, flags=re.IGNORECASE)
    # Remove all remaining tags
    html = re.sub(r"<[^>]+>", "", html)
    # Decode HTML entities
    html = html.replace("&nbsp;", " ").replace("&amp;", "&")
    html = html.replace("&lt;", "<").replace("&gt;", ">")
    html = html.replace("&quot;", '"').replace("&#39;", "'")
    html = re.sub(r"&#\d+;", "", html)
    html = re.sub(r"&\w+;", "", html)
    # Collapse multiple newlines/spaces
    html = re.sub(r"\n{3,}", "\n\n", html)
    html = re.sub(r" {2,}", " ", html)
    return html.strip()


def get_text_body(msg) -> str:
    """Extract plain text body from email message. Falls back to HTML if no plain text."""
    plain_body = ""
    html_body = ""

    if msg.is_multipart():
        for part in msg.walk():
            content_type = part.get_content_type()
            try:
                payload = part.get_payload(decode=True)
                if not payload:
                    continue
                charset = part.get_content_charset() or "utf-8"
                try:
                    text = payload.decode(charset, errors="replace")
                except (LookupError, UnicodeDecodeError):
                    text = payload.decode("utf-8", errors="replace")

                if content_type == "text/plain" and not plain_body:
                    plain_body = text
                elif content_type == "text/html" and not html_body:
                    html_body = text
            except Exception:
                continue
    else:
        try:
            payload = msg.get_payload(decode=True)
            if payload:
                charset = msg.get_content_charset() or "utf-8"
                try:
                    text = payload.decode(charset, errors="replace")
                except (LookupError, UnicodeDecodeError):
                    text = payload.decode("utf-8", errors="replace")

                if msg.get_content_type() == "text/html":
                    html_body = text
                else:
                    plain_body = text
        except Exception:
            pass

    # Prefer plain text, fall back to HTML
    if plain_body:
        return plain_body
    if html_body:
        return html_to_text(html_body)
    return ""


def is_sent_email(msg, mbox_path: str, assume_sent: bool = False) -> bool:
    """Heuristic: is this from a Sent Items folder or sent by the user?"""
    if assume_sent:
        return True

    # Check folder path
    path_lower = mbox_path.lower()
    if any(s in path_lower for s in ["sent", "outbox", "drafts"]):
        return True

    # Check From header for common user patterns
    from_addr = str(msg.get("From", "")).lower()
    if any(
        name in from_addr for name in ["robka", "rob kay", "robert kay", "r.kay", "rkay"]
    ):
        return True

    return False


def process_mbox_file(mbox_path: str, min_words: int, assume_sent: bool = False) -> list[EmailSample]:
    """Parse an mbox file and extract email samples."""
    samples = []
    try:
        mbox = mailbox.mbox(mbox_path)
    except Exception as e:
        # Might not be a valid mbox file
        return samples

    for msg in mbox:
        try:
            if not is_sent_email(msg, mbox_path, assume_sent=assume_sent):
                continue

            body = get_text_body(msg)
            if not body:
                continue

            # Clean the body
            body = strip_mime_boundaries(body)
            body = strip_email_headers(body)
            body = strip_quoted_text(body)
            body = strip_signature(body)
            body = body.strip()

            # Skip data dumps and non-prose content
            if not is_prose(body):
                continue

            word_count = len(body.split())
            if word_count < min_words:
                continue

            # Cap at 5000 words — anything longer is almost certainly
            # a forwarded chain or data that slipped through filters
            if word_count > 5000:
                continue

            subject = str(msg.get("Subject", "(no subject)"))
            date = str(msg.get("Date", "unknown"))
            to = str(msg.get("To", "unknown"))

            samples.append(
                EmailSample(
                    subject=subject,
                    date=date,
                    to=to,
                    word_count=word_count,
                    body=body,
                    source_file=Path(mbox_path).name,
                )
            )
        except Exception:
            continue

    mbox.close()
    return samples


def export_samples(samples: list[EmailSample], output_dir: str):
    """Write samples to individual text files."""
    os.makedirs(output_dir, exist_ok=True)

    for i, sample in enumerate(samples, 1):
        # Sanitise subject for filename
        safe_subject = re.sub(r"[^\w\s-]", "", sample.subject)[:60].strip()
        safe_subject = re.sub(r"\s+", "-", safe_subject)
        filename = f"{i:03d}_{sample.word_count}w_{safe_subject}.txt"

        filepath = os.path.join(output_dir, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"Subject: {sample.subject}\n")
            f.write(f"Date: {sample.date}\n")
            f.write(f"To: {sample.to}\n")
            f.write(f"Words: {sample.word_count}\n")
            f.write(f"Source: {sample.source_file}\n")
            f.write(f"{'=' * 60}\n\n")
            f.write(sample.body)

        print(f"  [{i:3d}] {sample.word_count:5d} words | {sample.subject[:60]}")


def main():
    parser = argparse.ArgumentParser(
        description="Extract longest sent emails from PST files for voice analysis"
    )
    parser.add_argument("pst_dir", help="Directory containing .pst files")
    parser.add_argument(
        "--top", type=int, default=50, help="Number of emails to export (default: 50)"
    )
    parser.add_argument(
        "--min-words",
        type=int,
        default=100,
        help="Minimum word count after stripping quotes (default: 100)",
    )
    parser.add_argument(
        "--output",
        default="0xBobski_research/voice-samples",
        help="Output directory (default: 0xBobski_research/voice-samples/)",
    )
    parser.add_argument(
        "--keep-mbox",
        action="store_true",
        help="Keep extracted mbox files (default: delete after processing)",
    )
    parser.add_argument(
        "--assume-sent",
        action="store_true",
        help="Treat all emails as sent by user (use when PST files are pre-filtered sent-only)",
    )
    args = parser.parse_args()

    check_readpst()

    # Find PST files
    pst_dir = Path(args.pst_dir).expanduser().resolve()
    pst_files = sorted(pst_dir.glob("*.pst")) + sorted(pst_dir.glob("*.PST"))

    # If --assume-sent, filter to files with "sent" in the name to avoid processing inbox files
    if args.assume_sent:
        sent_files = [f for f in pst_files if "sent" in f.name.lower()]
        if sent_files:
            pst_files = sent_files
            print(f"Filtered to {len(pst_files)} sent-only PST file(s)")

    if not pst_files:
        print(f"No .pst files found in {pst_dir}")
        sys.exit(1)

    print(f"Found {len(pst_files)} PST file(s) in {pst_dir}")
    total_size = sum(f.stat().st_size for f in pst_files)
    print(f"Total size: {total_size / (1024**3):.1f} GB")
    print()

    # Extract PSTs to mbox in a temp directory
    with tempfile.TemporaryDirectory(prefix="oym-voice-") as tmp_dir:
        all_mbox_files = []
        for pst_file in pst_files:
            mbox_files = extract_pst_to_mbox(str(pst_file), tmp_dir)
            all_mbox_files.extend(mbox_files)

        print(f"\nProcessing {len(all_mbox_files)} mbox files...")

        # Parse all mbox files
        all_samples = []
        for mbox_path in all_mbox_files:
            samples = process_mbox_file(mbox_path, args.min_words, assume_sent=args.assume_sent)
            if samples:
                all_samples.extend(samples)
                print(f"  {Path(mbox_path).name}: {len(samples)} qualifying emails")

        if not all_samples:
            print("\nNo qualifying emails found.")
            print("Tips:")
            print("  - Check the PST files contain Sent Items")
            print("  - Try --min-words 50 for a lower threshold")
            print("  - The sender name filter may need adjusting (edit is_sent_email())")
            sys.exit(1)

        # Sort by word count descending
        all_samples.sort(key=lambda s: s.word_count, reverse=True)

        # Take top N
        top_samples = all_samples[: args.top]

        print(f"\nFound {len(all_samples)} qualifying emails total")
        print(f"Exporting top {len(top_samples)} by word count:\n")

        # Export
        output_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))), args.output
        )
        export_samples(top_samples, output_path)

        print(f"\nDone. {len(top_samples)} files written to {output_path}/")
        print(f"Word count range: {top_samples[-1].word_count} – {top_samples[0].word_count}")

        if args.keep_mbox:
            print(f"Mbox files kept at: {tmp_dir}")
            # Prevent cleanup
            import shutil

            keep_dir = os.path.join(str(pst_dir), "mbox_extract")
            shutil.copytree(tmp_dir, keep_dir)
            print(f"Copied to: {keep_dir}")


if __name__ == "__main__":
    main()
