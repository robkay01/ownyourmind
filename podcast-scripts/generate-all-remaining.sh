#!/bin/bash
set -euo pipefail
cd /Users/robka/Developer/OwnYourMind

SCRIPTS=(
  podcast-scripts/grass-episode-006-turns.md
  podcast-scripts/peaq-episode-007-turns.md
  podcast-scripts/fetch-asi-episode-009-turns.md
  podcast-scripts/ionet-episode-010-turns.md
  podcast-scripts/golem-episode-011-turns.md
  podcast-scripts/aethir-episode-012-turns.md
  podcast-scripts/nosana-episode-013-turns.md
  podcast-scripts/gensyn-episode-014-turns.md
  podcast-scripts/elizaos-episode-015-turns.md
  podcast-scripts/virtuals-episode-016-turns.md
  podcast-scripts/ocean-episode-017-turns.md
  podcast-scripts/phala-episode-018-turns.md
  podcast-scripts/oasis-episode-019-turns.md
  podcast-scripts/near-episode-020-turns.md
  podcast-scripts/theta-episode-021-turns.md
  podcast-scripts/vana-episode-022-turns.md
  podcast-scripts/nillion-episode-023-turns.md
  podcast-scripts/origintrail-episode-024-turns.md
  podcast-scripts/allora-episode-025-turns.md
  podcast-scripts/cookie-dao-episode-026-turns.md
  podcast-scripts/flock-episode-027-turns.md
  podcast-scripts/iotex-episode-028-turns.md
  podcast-scripts/intelligent-internet-episode-029-turns.md
  podcast-scripts/ora-episode-030-turns.md
  podcast-scripts/sentient-episode-031-turns.md
  podcast-scripts/warden-episode-032-turns.md
  podcast-scripts/autonolas-episode-033-turns.md
  podcast-scripts/sahara-episode-034-turns.md
  podcast-scripts/why-deai-centralised-vs-decentralised-turns.md
  podcast-scripts/why-deai-crypto-ai-converge-turns.md
  podcast-scripts/why-deai-how-deai-competes-turns.md
  podcast-scripts/why-deai-privacy-killer-app-turns.md
  podcast-scripts/why-deai-sovereignty-stack-turns.md
  podcast-scripts/why-deai-what-counts-turns.md
  podcast-scripts/tokenomics-how-mor-works-turns.md
  podcast-scripts/tokenomics-mor-vs-tao-vs-fet-turns.md
  podcast-scripts/tokenomics-render-vs-akash-vs-ionet-turns.md
  podcast-scripts/tokenomics-akt-bme-turns.md
  podcast-scripts/tokenomics-asi-alliance-turns.md
  podcast-scripts/tokenomics-bittensor-halving-turns.md
  podcast-scripts/tokenomics-dtao-subnet-turns.md
)

TOTAL=${#SCRIPTS[@]}
COUNT=0
FAILED=()

for script in "${SCRIPTS[@]}"; do
  COUNT=$((COUNT + 1))
  echo ""
  echo "=========================================="
  echo "[$COUNT/$TOTAL] Processing: $script"
  echo "=========================================="
  if ./podcast-scripts/generate-episode-v2.sh "$script"; then
    echo "SUCCESS: $script"
  else
    echo "FAILED: $script"
    FAILED+=("$script")
  fi
done

echo ""
echo "=========================================="
echo "BATCH COMPLETE: $COUNT/$TOTAL processed"
if [ ${#FAILED[@]} -gt 0 ]; then
  echo "FAILURES: ${FAILED[*]}"
else
  echo "All episodes generated successfully!"
fi
echo "=========================================="
