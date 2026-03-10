#!/bin/bash
#
# Generate podcast episode audio from a turn-by-turn script.
# Produces individual clips per dialogue turn, then assembles into a single MP3.
#
# Prerequisites:
#   1. Set ELEVENLABS_API_KEY, ELEVENLABS_BOBSKI_VOICE_ID, ELEVENLABS_RACHEL_VOICE_ID in .env
#   2. ffmpeg installed (brew install ffmpeg)
#   3. chmod +x podcast-scripts/generate-episode-v2.sh
#
# Usage:
#   ./podcast-scripts/generate-episode-v2.sh podcast-scripts/bittensor-episode-001-turns.md
#
# Output:
#   podcast-audio/bittensor-episode-001/turns/turn-01-bobski.mp3 (etc.)
#   podcast-audio/bittensor-episode-001/Own-Your-Mind-001-Bittensor.mp3 (final assembled episode)

set -euo pipefail

# Load environment variables
if [ -f .env ]; then
  export ELEVENLABS_API_KEY=$(grep ELEVENLABS_API_KEY .env | cut -d= -f2 | tr -d '[:space:]')
  export ELEVENLABS_BOBSKI_VOICE_ID=$(grep ELEVENLABS_BOBSKI_VOICE_ID .env | cut -d= -f2 | tr -d '[:space:]')
  export ELEVENLABS_RACHEL_VOICE_ID=$(grep ELEVENLABS_RACHEL_VOICE_ID .env | cut -d= -f2 | tr -d '[:space:]')
fi

if [ -z "${ELEVENLABS_API_KEY:-}" ] || [ -z "${ELEVENLABS_BOBSKI_VOICE_ID:-}" ] || [ -z "${ELEVENLABS_RACHEL_VOICE_ID:-}" ]; then
  echo "ERROR: Missing environment variables. Add to .env:"
  echo "  ELEVENLABS_API_KEY=your_key"
  echo "  ELEVENLABS_BOBSKI_VOICE_ID=your_cloned_voice_id"
  echo "  ELEVENLABS_RACHEL_VOICE_ID=rachel_voice_id"
  exit 1
fi

# Check ffmpeg
if ! command -v ffmpeg &> /dev/null; then
  echo "ERROR: ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

SCRIPT_FILE="${1:?Usage: $0 <turns-script.md>}"
EPISODE_NAME=$(basename "$SCRIPT_FILE" .md | sed 's/-turns$//')
OUTPUT_DIR="podcast-audio/$EPISODE_NAME"
TURNS_DIR="$OUTPUT_DIR/turns"
PAUSE_FILE="$OUTPUT_DIR/pause.mp3"

mkdir -p "$TURNS_DIR"

API_URL="https://api.elevenlabs.io/v1/text-to-speech"
MODEL="eleven_multilingual_v2"
FORMAT="mp3_44100_128"

# Generate a 0.7-second silence file for pauses between speakers
if [ ! -f "$PAUSE_FILE" ]; then
  ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 0.7 -q:a 9 "$PAUSE_FILE" -y 2>/dev/null
fi

generate_clip() {
  local voice_id="$1"
  local output_file="$2"
  local text="$3"

  if [ -f "$output_file" ] && [ "$(wc -c < "$output_file")" -gt 100 ]; then
    echo "  SKIP (already exists): $(basename "$output_file")"
    return
  fi

  echo "  Generating: $(basename "$output_file")"

  local json_text
  json_text=$(printf '%s' "$text" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')

  curl -s -X POST "${API_URL}/${voice_id}?output_format=${FORMAT}" \
    -H "xi-api-key: ${ELEVENLABS_API_KEY}" \
    -H "Content-Type: application/json" \
    -d "{
      \"text\": ${json_text},
      \"model_id\": \"${MODEL}\",
      \"voice_settings\": {
        \"stability\": 0.5,
        \"similarity_boost\": 0.75,
        \"style\": 0.2,
        \"use_speaker_boost\": true
      }
    }" \
    --output "$output_file"

  # Check if output is valid audio
  if [ "$(wc -c < "$output_file")" -lt 100 ]; then
    echo "  ERROR: File too small, likely API error:"
    cat "$output_file"
    rm -f "$output_file"
    return 1
  fi

  echo "  Done: $(basename "$output_file") ($(du -h "$output_file" | cut -f1))"
  sleep 1
}

echo "=== Generating Episode: $EPISODE_NAME (turn-by-turn) ==="
echo ""

# Parse turns from the script
TURN_NUM=""
VOICE=""
TEXT=""
TURN_COUNT=0

process_turn() {
  if [ -z "$TURN_NUM" ] || [ -z "$VOICE" ] || [ -z "$TEXT" ]; then
    return
  fi

  local voice_id
  if [ "$VOICE" = "BOBSKI" ]; then
    voice_id="$ELEVENLABS_BOBSKI_VOICE_ID"
  else
    voice_id="$ELEVENLABS_RACHEL_VOICE_ID"
  fi

  local voice_lower
  voice_lower=$(echo "$VOICE" | tr '[:upper:]' '[:lower:]')
  local filename="turn-${TURN_NUM}-${voice_lower}.mp3"

  echo "Turn $TURN_NUM ($VOICE):"
  generate_clip "$voice_id" "$TURNS_DIR/$filename" "$TEXT"
  echo ""
  TURN_COUNT=$((TURN_COUNT + 1))
}

IN_CODE_BLOCK=false

while IFS= read -r line; do
  # Detect turn headers: ## TURN 01 — ROB
  if [[ "$line" =~ ^##[[:space:]]TURN[[:space:]]([0-9]+)[[:space:]]—[[:space:]](BOBSKI|RACHEL) ]]; then
    # Process previous turn if exists
    process_turn

    TURN_NUM="${BASH_REMATCH[1]}"
    VOICE="${BASH_REMATCH[2]}"
    TEXT=""
    continue
  fi

  # Track code blocks
  if [[ "$line" == '```' ]]; then
    if $IN_CODE_BLOCK; then
      IN_CODE_BLOCK=false
    else
      IN_CODE_BLOCK=true
    fi
    continue
  fi

  # Accumulate text inside code blocks
  if $IN_CODE_BLOCK; then
    if [ -n "$TEXT" ]; then
      TEXT="${TEXT} ${line}"
    else
      TEXT="$line"
    fi
  fi

done < "$SCRIPT_FILE"

# Process the last turn
process_turn

echo "=== Generated $TURN_COUNT turns ==="
echo ""

# Assemble final episode with ffmpeg
echo "=== Assembling final episode ==="

# Build ffmpeg concat list
CONCAT_FILE="$OUTPUT_DIR/concat.txt"
> "$CONCAT_FILE"

for turn_file in $(ls "$TURNS_DIR"/turn-*.mp3 2>/dev/null | sort); do
  echo "file '$(cd "$OUTPUT_DIR" && realpath --relative-to=. "$turn_file" 2>/dev/null || echo "../$turn_file")'" >> "$CONCAT_FILE"
  echo "file '$(cd "$OUTPUT_DIR" && realpath --relative-to=. "$PAUSE_FILE" 2>/dev/null || echo "../$PAUSE_FILE")'" >> "$CONCAT_FILE"
done

# Remove trailing pause
if [ -s "$CONCAT_FILE" ]; then
  # Use a temp file approach compatible with macOS sed
  head -n -1 "$CONCAT_FILE" > "$CONCAT_FILE.tmp" && mv "$CONCAT_FILE.tmp" "$CONCAT_FILE"
fi

# Determine episode number from filename
EP_NUM=$(echo "$EPISODE_NAME" | grep -o '[0-9]*$' || echo "001")
PROJECT_NAME=$(echo "$EPISODE_NAME" | sed 's/-episode-[0-9]*//' | sed 's/^./\U&/' | sed 's/-/ /g')

FINAL_FILE="$OUTPUT_DIR/Own-Your-Mind-${EP_NUM}-$(echo "$EPISODE_NAME" | sed 's/-episode-[0-9]*//' | sed 's/\b./\U&/g' | sed 's/-//g').mp3"

# Use absolute paths in concat file for reliability
CONCAT_FILE_ABS="$OUTPUT_DIR/concat-abs.txt"
> "$CONCAT_FILE_ABS"

for turn_file in $(ls "$TURNS_DIR"/turn-*.mp3 2>/dev/null | sort); do
  ABS_TURN=$(cd /Users/robka/Developer/OwnYourMind && realpath "$turn_file")
  ABS_PAUSE=$(cd /Users/robka/Developer/OwnYourMind && realpath "$PAUSE_FILE")
  echo "file '$ABS_TURN'" >> "$CONCAT_FILE_ABS"
  echo "file '$ABS_PAUSE'" >> "$CONCAT_FILE_ABS"
done

# Remove trailing pause line
python3 -c "
lines = open('$CONCAT_FILE_ABS').readlines()
if lines: lines = lines[:-1]
open('$CONCAT_FILE_ABS','w').writelines(lines)
"

# Derive project name from episode folder name (e.g. bittensor-episode-001 → Bittensor)
PROJECT_LABEL=$(echo "$EPISODE_NAME" | sed 's/-episode-[0-9]*//' | python3 -c "import sys; print(sys.stdin.read().strip().replace('-',' ').title().replace(' ',''))")
FINAL_RAW="$OUTPUT_DIR/raw-concat.mp3"
FINAL_FILE="$OUTPUT_DIR/Own-Your-Mind-${EP_NUM}-${PROJECT_LABEL}.mp3"

echo "Concatenating $(grep -c 'file' "$CONCAT_FILE_ABS") segments..."
ffmpeg -f concat -safe 0 -i "$CONCAT_FILE_ABS" -c copy "$FINAL_RAW" -y 2>/dev/null

# Normalise volume levels across all clips (fixes Rachel volume variation)
echo "Normalising audio levels..."
ffmpeg -i "$FINAL_RAW" -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 44100 -ab 128k "$FINAL_FILE" -y 2>/dev/null
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
rm -f "$CONCAT_FILE" "$CONCAT_FILE_ABS"
