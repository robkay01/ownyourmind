#!/usr/bin/env python3
"""
Generate all podcast turn clips from a turns-script markdown file.
Loads the TTS model and whisper transcriber once, then generates all turns
in a single session — avoids ~5s model reload overhead per turn.

Usage:
    python3 generate-turns.py <turns-script.md> <output-dir> <bobski-ref> <rachel-ref> [model]
"""

import os
import re
import sys

import mlx.core as mx
import numpy as np
import soundfile as sf

from mlx_audio.tts.generate import generate_audio
from mlx_audio.tts.utils import load_model
from mlx_audio.utils import load_audio  # used for whisper transcription


def parse_turns(script_path):
    """Parse turn-by-turn markdown script into list of (turn_num, voice, text)."""
    turns = []
    turn_num = None
    voice = None
    text = ""
    in_code_block = False

    with open(script_path) as f:
        for line in f:
            line = line.rstrip("\n")

            m = re.match(r"^##\s+TURN\s+(\d+)\s+—\s+(BOBSKI|RACHEL)", line)
            if m:
                if turn_num and text.strip():
                    turns.append((turn_num, voice, text.strip()))
                turn_num = m.group(1)
                voice = m.group(2)
                text = ""
                continue

            if line.strip() == "```":
                in_code_block = not in_code_block
                continue

            if in_code_block:
                text = f"{text} {line}" if text else line

    if turn_num and text.strip():
        turns.append((turn_num, voice, text.strip()))

    return turns


def trim_bleed(output_path):
    """Remove reference audio bleed from start of clip.

    Qwen3 ICL prepends reference audio (one or more bursts), then silence,
    then speech. Find the LONGEST silence gap in the first 3s — that's the
    bleed-to-speech boundary.
    """
    wav, sr = sf.read(output_path)
    window = int(sr * 0.01)  # 10ms windows
    threshold = 0.005

    scan = min(len(wav), int(sr * 3))
    rms = [
        np.sqrt(np.mean(wav[i : i + window] ** 2))
        for i in range(0, scan - window, window)
    ]

    # Find all silent runs
    silent_runs = []
    run_start = None
    for i, r in enumerate(rms):
        if r < threshold:
            if run_start is None:
                run_start = i
        else:
            if run_start is not None:
                silent_runs.append((run_start, i, i - run_start))
                run_start = None
    if run_start is not None:
        silent_runs.append((run_start, len(rms), len(rms) - run_start))

    # Only consider runs that come after some audio (skip leading silence)
    has_audio = False
    candidate_runs = []
    for start, end, length in silent_runs:
        if not has_audio:
            if start > 0 and any(r > 0.008 for r in rms[:start]):
                has_audio = True
        if has_audio and length >= 3:  # at least 30ms
            candidate_runs.append((start, end, length))

    if candidate_runs:
        best = max(candidate_runs, key=lambda x: x[2])
        trim_sample = best[1] * window
        if trim_sample > int(sr * 0.1):
            sf.write(output_path, wav[trim_sample:], sr)


def main():
    if len(sys.argv) < 5:
        print(
            "Usage: generate-turns.py <script.md> <output-dir> <bobski-ref> <rachel-ref> [model]"
        )
        sys.exit(1)

    script_path = sys.argv[1]
    output_dir = sys.argv[2]
    bobski_ref = sys.argv[3]
    rachel_ref = sys.argv[4]
    model_name = (
        sys.argv[5]
        if len(sys.argv) > 5
        else "mlx-community/Qwen3-TTS-12Hz-0.6B-Base-bf16"
    )

    os.makedirs(output_dir, exist_ok=True)

    turns = parse_turns(script_path)
    if not turns:
        print("ERROR: No turns found in script")
        sys.exit(1)

    print(f"Parsed {len(turns)} turns from {os.path.basename(script_path)}")

    # Load model ONCE
    print(f"Loading model: {model_name}")
    model = load_model(model_path=model_name)
    print("Model loaded.")

    # Transcribe reference audio ONCE per voice (avoids re-transcribing each turn)
    refs = {}
    from mlx_audio.stt import load as load_stt_model

    print("Loading whisper for reference transcription...")
    stt_model = load_stt_model("mlx-community/whisper-large-v3-turbo-asr-fp16")

    for voice_name, ref_path in [("BOBSKI", bobski_ref), ("RACHEL", rachel_ref)]:
        print(f"Transcribing {voice_name} reference: {os.path.basename(ref_path)}")
        ref_audio = load_audio(ref_path, sample_rate=model.sample_rate)
        ref_text = stt_model.generate(ref_audio).text
        print(f"  Ref text: {ref_text[:80]}...")
        refs[voice_name] = {"path": ref_path, "text": ref_text}

    # Free STT model
    del stt_model
    mx.clear_cache()

    print("")

    # Generate all turns
    generated = 0
    for turn_num, voice, text in turns:
        voice_lower = voice.lower()
        filename = f"turn-{turn_num}-{voice_lower}.wav"
        output_path = os.path.join(output_dir, filename)

        # Skip if already exists
        if os.path.exists(output_path) and os.path.getsize(output_path) > 1000:
            print(f"Turn {turn_num} ({voice}): SKIP (already exists)")
            continue

        print(f"Turn {turn_num} ({voice}): generating...")

        ref = refs[voice]
        file_prefix = os.path.join(output_dir, f"turn-{turn_num}-{voice_lower}")

        generate_audio(
            model=model,
            text=text,
            ref_audio=ref["path"],
            ref_text=ref["text"],
            stt_model=None,
            output_path=None,
            file_prefix=file_prefix,
            audio_format="wav",
            verbose=False,
        )

        # mlx-audio appends _000
        generated_path = f"{file_prefix}_000.wav"
        if os.path.exists(generated_path):
            os.rename(generated_path, output_path)

        if not os.path.exists(output_path) or os.path.getsize(output_path) < 1000:
            print(f"  ERROR: Generation failed for {filename}")
            continue

        # Trim reference bleed
        trim_bleed(output_path)

        wav, sr = sf.read(output_path)
        dur = len(wav) / sr
        size_kb = os.path.getsize(output_path) / 1024
        print(f"  Done: {filename} ({dur:.0f}s, {size_kb:.0f}K)")
        generated += 1

    print(f"\n=== Generated {generated} turns ===")


if __name__ == "__main__":
    main()
