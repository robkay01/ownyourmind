#!/bin/bash
#
# Generate podcast episode audio from a production script.
#
# Prerequisites:
#   1. Set ELEVENLABS_API_KEY in .env
#   2. Set ELEVENLABS_ROB_VOICE_ID in .env (your cloned voice)
#   3. Set ELEVENLABS_RACHEL_VOICE_ID in .env (library voice — Adam, Daniel, etc.)
#   4. Run: chmod +x podcast-scripts/generate-episode.sh
#
# Usage:
#   ./podcast-scripts/generate-episode.sh podcast-scripts/bittensor-episode-001-production.md
#
# Output:
#   podcast-audio/bittensor-episode-001/01-intro-rob.mp3
#   podcast-audio/bittensor-episode-001/02-intro-alex.mp3
#   ...etc
#
# After generating, combine clips in an audio editor (Audacity, CapCut, DaVinci Resolve).

set -euo pipefail

# Load environment variables
if [ -f .env ]; then
  export ELEVENLABS_API_KEY=$(grep ELEVENLABS_API_KEY .env | cut -d= -f2 | tr -d '[:space:]')
  export ELEVENLABS_ROB_VOICE_ID=$(grep ELEVENLABS_ROB_VOICE_ID .env | cut -d= -f2 | tr -d '[:space:]')
  export ELEVENLABS_RACHEL_VOICE_ID=$(grep ELEVENLABS_RACHEL_VOICE_ID .env | cut -d= -f2 | tr -d '[:space:]')
fi

if [ -z "${ELEVENLABS_API_KEY:-}" ] || [ -z "${ELEVENLABS_ROB_VOICE_ID:-}" ] || [ -z "${ELEVENLABS_RACHEL_VOICE_ID:-}" ]; then
  echo "ERROR: Missing environment variables. Add to .env:"
  echo "  ELEVENLABS_API_KEY=your_key"
  echo "  ELEVENLABS_ROB_VOICE_ID=your_cloned_voice_id"
  echo "  ELEVENLABS_RACHEL_VOICE_ID=library_voice_id"
  echo ""
  echo "To find voice IDs, run:"
  echo "  curl -s -H 'xi-api-key:YOUR_KEY' https://api.elevenlabs.io/v2/voices | python3 -m json.tool | grep -E '\"voice_id\"|\"name\"'"
  exit 1
fi

SCRIPT_FILE="${1:?Usage: $0 <production-script.md>}"
EPISODE_NAME=$(basename "$SCRIPT_FILE" .md | sed 's/-production$//')
OUTPUT_DIR="podcast-audio/$EPISODE_NAME"

mkdir -p "$OUTPUT_DIR"

API_URL="https://api.elevenlabs.io/v1/text-to-speech"
MODEL="eleven_multilingual_v2"
FORMAT="mp3_44100_128"

generate_clip() {
  local voice_id="$1"
  local output_file="$2"
  local text="$3"

  if [ -f "$output_file" ]; then
    echo "  SKIP (already exists): $output_file"
    return
  fi

  echo "  Generating: $output_file"

  # Escape text for JSON
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
        \"style\": 0.0,
        \"use_speaker_boost\": true
      }
    }" \
    --output "$output_file"

  # Check if output is valid (not an error JSON response)
  if file "$output_file" | grep -q "text"; then
    echo "  ERROR: API returned error for $output_file:"
    cat "$output_file"
    rm "$output_file"
    return 1
  fi

  echo "  Done: $output_file ($(du -h "$output_file" | cut -f1))"
  # Brief pause to stay within rate limits
  sleep 1
}

echo "=== Generating Episode: $EPISODE_NAME ==="
echo "Output directory: $OUTPUT_DIR"
echo ""

# Parse the production script and extract text blocks between ``` markers
# Each section is identified by ### ROB or ### RACHEL headers

SECTION_NUM=0
CURRENT_SECTION=""
CURRENT_VOICE=""
IN_CODE_BLOCK=false
ACCUMULATED_TEXT=""

while IFS= read -r line; do
  # Detect section headers
  if [[ "$line" =~ ^##[[:space:]]SECTION[[:space:]]([0-9]+) ]]; then
    SECTION_NUM="${BASH_REMATCH[1]}"
    # Extract section name
    CURRENT_SECTION=$(echo "$line" | sed 's/^## SECTION [0-9]*: //' | sed 's/ \[.*$//' | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    continue
  fi

  # Detect voice headers
  if [[ "$line" =~ ^###[[:space:]](ROB|RACHEL) ]]; then
    # If we have accumulated text from a previous block, generate it
    if [ -n "$ACCUMULATED_TEXT" ] && [ -n "$CURRENT_VOICE" ]; then
      PADDED_NUM=$(printf "%02d" "$SECTION_NUM")
      VOICE_LOWER=$(echo "$CURRENT_VOICE" | tr '[:upper:]' '[:lower:]')
      VOICE_ID_VAR="ELEVENLABS_${CURRENT_VOICE}_VOICE_ID"
      FILENAME="${PADDED_NUM}-${CURRENT_SECTION}-${VOICE_LOWER}.mp3"
      echo "Section $SECTION_NUM ($CURRENT_SECTION) — $CURRENT_VOICE:"
      generate_clip "${!VOICE_ID_VAR}" "$OUTPUT_DIR/$FILENAME" "$ACCUMULATED_TEXT"
      echo ""
    fi
    CURRENT_VOICE="${BASH_REMATCH[1]}"
    ACCUMULATED_TEXT=""
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
    if [ -n "$ACCUMULATED_TEXT" ]; then
      ACCUMULATED_TEXT="${ACCUMULATED_TEXT} ${line}"
    else
      ACCUMULATED_TEXT="$line"
    fi
  fi

done < "$SCRIPT_FILE"

# Generate the last block
if [ -n "$ACCUMULATED_TEXT" ] && [ -n "$CURRENT_VOICE" ]; then
  PADDED_NUM=$(printf "%02d" "$SECTION_NUM")
  VOICE_LOWER=$(echo "$CURRENT_VOICE" | tr '[:upper:]' '[:lower:]')
  VOICE_ID_VAR="ELEVENLABS_${CURRENT_VOICE}_VOICE_ID"
  FILENAME="${PADDED_NUM}-${CURRENT_SECTION}-${VOICE_LOWER}.mp3"
  echo "Section $SECTION_NUM ($CURRENT_SECTION) — $CURRENT_VOICE:"
  generate_clip "${!VOICE_ID_VAR}" "$OUTPUT_DIR/$FILENAME" "$ACCUMULATED_TEXT"
  echo ""
fi

echo "=== Generation Complete ==="
echo ""
echo "Clips saved to: $OUTPUT_DIR/"
echo ""
echo "Next steps:"
echo "  1. Listen to each clip and check quality"
echo "  2. Open your audio editor (Audacity / CapCut / DaVinci Resolve)"
echo "  3. Import clips in order, interleave Rob/Rachel per the splicing guide"
echo "  4. Add intro/outro music bed (optional)"
echo "  5. Export as: Own-Your-Mind-001-Bittensor.mp3"
ls -la "$OUTPUT_DIR/"
