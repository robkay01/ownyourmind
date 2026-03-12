#!/bin/bash
#
# Generate podcast episode audio locally using Qwen3-TTS (no ElevenLabs).
# Produces individual clips per dialogue turn, then assembles into a single MP3.
#
# Prerequisites:
#   1. Python 3.13 venv at voice-training/.venv13 with mlx-audio installed
#   2. Reference audio files:
#      - voice-training/bobski-ref-30s-v2.wav (Bobski voice reference)
#      - voice-training/rachel-ref-30s.wav (Rachel voice reference)
#   3. ffmpeg installed (brew install ffmpeg)
#   4. chmod +x podcast-scripts/generate-episode-local.sh
#
# Usage:
#   ./podcast-scripts/generate-episode-local.sh podcast-scripts/bittensor-episode-001-turns.md
#
# Output:
#   podcast-audio/bittensor-episode-001/turns/turn-01-bobski.wav (etc.)
#   podcast-audio/bittensor-episode-001/Own-Your-Mind-001-Bittensor.mp3 (final assembled episode)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
VENV_DIR="$SCRIPT_DIR/voice-training/.venv13"
BOBSKI_REF="$SCRIPT_DIR/voice-training/bobski-ref-30s-v2.wav"
RACHEL_REF="$SCRIPT_DIR/voice-training/rachel-ref-30s.wav"
MODEL="mlx-community/Qwen3-TTS-12Hz-0.6B-Base-bf16"

# Activate venv
if [ ! -d "$VENV_DIR" ]; then
  echo "ERROR: Python venv not found at $VENV_DIR"
  echo "Run: python3.13 -m venv voice-training/.venv13 && source voice-training/.venv13/bin/activate && pip install mlx-audio"
  exit 1
fi
source "$VENV_DIR/bin/activate"

# Check reference audio
for ref in "$BOBSKI_REF" "$RACHEL_REF"; do
  if [ ! -f "$ref" ]; then
    echo "ERROR: Reference audio not found: $ref"
    exit 1
  fi
done

# Check ffmpeg
if ! command -v ffmpeg &> /dev/null; then
  echo "ERROR: ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

SCRIPT_FILE="${1:?Usage: $0 <turns-script.md>}"
EPISODE_NAME=$(basename "$SCRIPT_FILE" .md | sed 's/-turns$//')
OUTPUT_DIR="podcast-audio/$EPISODE_NAME"
TURNS_DIR="$OUTPUT_DIR/turns"
PAUSE_FILE="$OUTPUT_DIR/pause.wav"

mkdir -p "$TURNS_DIR"

# Generate a 0.4-second silence file for tighter conversational pauses
if [ ! -f "$PAUSE_FILE" ]; then
  ffmpeg -f lavfi -i anullsrc=r=24000:cl=mono -t 0.4 "$PAUSE_FILE" -y 2>/dev/null
fi

echo "=== Generating Episode: $EPISODE_NAME (local Qwen3-TTS) ==="
echo "Model: $MODEL"
echo ""

# Generate all turns in a single Python session (model loads once)
python3 "$SCRIPT_DIR/podcast-scripts/generate-turns.py" \
  "$SCRIPT_FILE" "$TURNS_DIR" "$BOBSKI_REF" "$RACHEL_REF" "$MODEL"

echo ""

# Assemble final episode with ffmpeg
echo "=== Assembling final episode ==="

# Build ffmpeg concat list with absolute paths
CONCAT_FILE="$OUTPUT_DIR/concat-abs.txt"
> "$CONCAT_FILE"

for turn_file in $(ls "$TURNS_DIR"/turn-*.wav 2>/dev/null | sort); do
  ABS_TURN=$(cd "$SCRIPT_DIR" && realpath "$turn_file")
  ABS_PAUSE=$(cd "$SCRIPT_DIR" && realpath "$PAUSE_FILE")
  echo "file '$ABS_TURN'" >> "$CONCAT_FILE"
  echo "file '$ABS_PAUSE'" >> "$CONCAT_FILE"
done

# Remove trailing pause line
python3 -c "
lines = open('$CONCAT_FILE').readlines()
if lines: lines = lines[:-1]
open('$CONCAT_FILE','w').writelines(lines)
"

# Derive episode naming
EP_NUM=$(echo "$EPISODE_NAME" | grep -o '[0-9]*$' || echo "001")
PROJECT_LABEL=$(echo "$EPISODE_NAME" | sed 's/-episode-[0-9]*//' | python3 -c "import sys; print(sys.stdin.read().strip().replace('-',' ').title().replace(' ',''))")
FINAL_RAW="$OUTPUT_DIR/raw-concat.wav"
FINAL_FILE="$OUTPUT_DIR/Own-Your-Mind-${EP_NUM}-${PROJECT_LABEL}.mp3"

echo "Concatenating $(grep -c 'file' "$CONCAT_FILE") segments..."
ffmpeg -f concat -safe 0 -i "$CONCAT_FILE" -c copy "$FINAL_RAW" -y 2>/dev/null

# Post-processing: shared room sound, EQ, normalisation
FINAL_PROCESSED="$OUTPUT_DIR/processed.mp3"

echo "Applying shared room tone, reverb, and EQ..."
ffmpeg -i "$FINAL_RAW" \
  -f lavfi -i "anoisesrc=d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$FINAL_RAW"):c=pink:r=24000:a=0.003" \
  -filter_complex "
    [0:a]highpass=f=80,lowshelf=f=200:g=-2,equalizer=f=3000:t=q:w=1.5:g=2[voice];
    [voice]aecho=0.8:0.7:15|25:0.15|0.1[reverbed];
    [1:a]volume=-45dB[roomtone];
    [reverbed][roomtone]amix=inputs=2:duration=first:weights=1 0.3[mixed];
    [mixed]loudnorm=I=-16:TP=-1.5:LRA=11[out]
  " \
  -map "[out]" -ar 44100 -ab 128k "$FINAL_PROCESSED" -y 2>/dev/null

if [ -f "$FINAL_PROCESSED" ] && [ "$(wc -c < "$FINAL_PROCESSED")" -gt 1000 ]; then
  mv "$FINAL_PROCESSED" "$FINAL_FILE"
else
  echo "  Post-processing failed, falling back to normalisation only..."
  ffmpeg -i "$FINAL_RAW" -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 44100 -ab 128k "$FINAL_FILE" -y 2>/dev/null
fi
rm -f "$FINAL_RAW"

if [ -f "$FINAL_FILE" ]; then
  DURATION=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$FINAL_FILE" 2>/dev/null | cut -d. -f1)
  MINS=$((DURATION / 60))
  SECS=$((DURATION % 60))
  SIZE=$(du -h "$FINAL_FILE" | cut -f1)
  echo ""
  echo "=== Episode Complete ==="
  echo "File: $FINAL_FILE"
  echo "Duration: ${MINS}m ${SECS}s"
  echo "Size: $SIZE"
else
  echo "ERROR: Failed to assemble final episode"
  echo "Individual clips are still available in $TURNS_DIR/"
fi

# Clean up
rm -f "$CONCAT_FILE"
