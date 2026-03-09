#!/bin/bash
#
# Fetch on-chain metrics for DeAI projects via public RPC endpoints.
# Outputs JSON to src/data/onchain-metrics.json for use in project pages.
#
# Usage: ./scripts/fetch-onchain-metrics.sh
# Add to package.json: "refresh:onchain": "bash scripts/fetch-onchain-metrics.sh"
#
# No API keys required — queries public RPC endpoints directly.

set -euo pipefail

OUTPUT_FILE="src/data/onchain-metrics.json"
BASE_RPC="https://mainnet.base.org"

# --- Helper functions ---

query_balance() {
  local rpc="$1" token="$2" holder="$3"
  local padded_holder
  padded_holder=$(echo "$holder" | sed 's/0x//' | tr '[:upper:]' '[:lower:]')
  local data="0x70a08231000000000000000000000000${padded_holder}"
  curl -s -X POST "$rpc" \
    -H "Content-Type: application/json" \
    -d "{\"jsonrpc\":\"2.0\",\"method\":\"eth_call\",\"params\":[{\"to\":\"$token\",\"data\":\"$data\"},\"latest\"],\"id\":1}" | python3 -c "
import sys, json
data = json.load(sys.stdin)
print(int(data.get('result', '0x0'), 16))
"
}

query_supply() {
  local rpc="$1" token="$2"
  curl -s -X POST "$rpc" \
    -H "Content-Type: application/json" \
    -d "{\"jsonrpc\":\"2.0\",\"method\":\"eth_call\",\"params\":[{\"to\":\"$token\",\"data\":\"0x18160ddd\"},\"latest\"],\"id\":1}" | python3 -c "
import sys, json
data = json.load(sys.stdin)
print(int(data.get('result', '0x0'), 16))
"
}

echo "=== Fetching on-chain metrics ==="

# --- Venice (VVV / DIEM) on Base ---
echo "  Venice (VVV)..."
VVV_TOKEN="0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf"
VVV_STAKING="0x321b7ff75154472B18EDb199033fF4D116F340Ff"
DIEM_TOKEN="0xf4d97f2da56e8c3098f3a8d538db630a2606a024"

VVV_SUPPLY_RAW=$(query_supply "$BASE_RPC" "$VVV_TOKEN")
VVV_STAKED_RAW=$(query_balance "$BASE_RPC" "$VVV_TOKEN" "$VVV_STAKING")
DIEM_SUPPLY_RAW=$(query_supply "$BASE_RPC" "$DIEM_TOKEN")

# --- Build JSON output ---
python3 -c "
import json, time

vvv_supply = $VVV_SUPPLY_RAW / 1e18
vvv_staked = $VVV_STAKED_RAW / 1e18
diem_supply = $DIEM_SUPPLY_RAW / 1e18
staking_ratio = (vvv_staked / vvv_supply * 100) if vvv_supply > 0 else 0

metrics = {
    'timestamp': int(time.time()),
    'date': time.strftime('%Y-%m-%d'),
    'venice': {
        'vvv_total_supply': round(vvv_supply),
        'vvv_staked': round(vvv_staked),
        'vvv_staking_ratio': round(staking_ratio, 1),
        'diem_total_supply': round(diem_supply, 2),
        'contracts': {
            'vvv_token': '$VVV_TOKEN',
            'vvv_staking': '$VVV_STAKING',
            'diem_token': '$DIEM_TOKEN',
            'chain': 'base'
        }
    }
}

with open('$OUTPUT_FILE', 'w') as f:
    json.dump(metrics, f, indent=2)

print(f'  VVV Supply: {vvv_supply:,.0f}')
print(f'  VVV Staked: {vvv_staked:,.0f} ({staking_ratio:.1f}%)')
print(f'  DIEM Supply: {diem_supply:,.2f}')
print(f'')
print(f'=== Written to $OUTPUT_FILE ===')
"
