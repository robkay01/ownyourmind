#!/bin/bash
#
# Fetch on-chain metrics for DeAI projects via public RPC endpoints.
# Outputs JSON to src/data/onchain-metrics.json for use in project pages.
#
# Usage: ./scripts/fetch-onchain-metrics.sh
#        npm run refresh:onchain
#
# No API keys required — queries public RPC endpoints directly.

set -euo pipefail

OUTPUT_FILE="src/data/onchain-metrics.json"

# --- RPC endpoints (public, no key required) ---
ETH_RPC="https://ethereum.publicnode.com"
BASE_RPC="https://mainnet.base.org"
ARB_RPC="https://arb1.arbitrum.io/rpc"

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

# =============================================
# Venice (VVV / DIEM) — Base
# =============================================
echo "  Venice (VVV)..."
VVV_TOKEN="0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf"
VVV_STAKING="0x321b7ff75154472B18EDb199033fF4D116F340Ff"
DIEM_TOKEN="0xf4d97f2da56e8c3098f3a8d538db630a2606a024"

VVV_SUPPLY_RAW=$(query_supply "$BASE_RPC" "$VVV_TOKEN")
VVV_STAKED_RAW=$(query_balance "$BASE_RPC" "$VVV_TOKEN" "$VVV_STAKING")
DIEM_SUPPLY_RAW=$(query_supply "$BASE_RPC" "$DIEM_TOKEN")

# =============================================
# Morpheus (MOR) — Arbitrum
# =============================================
echo "  Morpheus (MOR)..."
MOR_TOKEN="0x092baadb7def4c3981454dd9c0a0d7ff07bcfc86"
MOR_SUPPLY_RAW=$(query_supply "$ARB_RPC" "$MOR_TOKEN")

# Also check MOR on Ethereum (L1)
MOR_ETH_TOKEN="0xcbb8f1bda10b9696c57e13bc128fe674769dcec0"
MOR_ETH_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$MOR_ETH_TOKEN")

# =============================================
# Virtuals (VIRTUAL) — Base
# =============================================
echo "  Virtuals (VIRTUAL)..."
VIRTUAL_TOKEN="0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b"
VIRTUAL_SUPPLY_RAW=$(query_supply "$BASE_RPC" "$VIRTUAL_TOKEN")

# =============================================
# FLock (FLOCK) — Base
# =============================================
echo "  FLock (FLOCK)..."
FLOCK_TOKEN="0x5ab3d4c385b400f3abb49e80de2faf6a88a7b691"
FLOCK_SUPPLY_RAW=$(query_supply "$BASE_RPC" "$FLOCK_TOKEN")

# =============================================
# Golem (GLM) — Ethereum
# =============================================
echo "  Golem (GLM)..."
GLM_TOKEN="0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429"
GLM_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$GLM_TOKEN")

# =============================================
# Autonolas (OLAS) — Ethereum
# =============================================
echo "  Autonolas (OLAS)..."
OLAS_TOKEN="0x0001a500a6b18995b03f44bb040a5ffc28e45cb0"
OLAS_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$OLAS_TOKEN")

# =============================================
# Fetch/ASI (FET) — Ethereum
# =============================================
echo "  Fetch/ASI (FET)..."
FET_TOKEN="0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85"
FET_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$FET_TOKEN")

# =============================================
# Ocean (OCEAN) — Ethereum
# =============================================
echo "  Ocean (OCEAN)..."
OCEAN_TOKEN="0x967da4048cd07ab37855c090aaf366e4ce1b9f48"
OCEAN_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$OCEAN_TOKEN")

# =============================================
# Phala (PHA) — Ethereum
# =============================================
echo "  Phala (PHA)..."
PHA_TOKEN="0x6c5ba91642f10282b576d91922ae6448c9d52f4e"
PHA_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$PHA_TOKEN")

# =============================================
# ORA — Ethereum
# =============================================
echo "  ORA..."
ORA_TOKEN="0x33333333FEde34409Fb7f67c6585047E1F653333"
ORA_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$ORA_TOKEN")

# =============================================
# Vana (VANA) — Ethereum (bridged amount only)
# =============================================
echo "  Vana (VANA)..."
VANA_TOKEN="0x7ff7fa94b8b66ef313f7970d4eebd2cb3103a2c0"
VANA_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$VANA_TOKEN")

# =============================================
# Sahara (SAHARA) — Ethereum
# =============================================
echo "  Sahara (SAHARA)..."
SAHARA_TOKEN="0xFDFfB411C4A70AA7C95D5C981a6Fb4Da867e1111"
SAHARA_SUPPLY_RAW=$(query_supply "$ETH_RPC" "$SAHARA_TOKEN")

# =============================================
# Build JSON output
# =============================================
python3 -c "
import json, time

def fmt(raw, decimals=18):
    return round(raw / (10 ** decimals))

metrics = {
    'timestamp': int(time.time()),
    'date': time.strftime('%Y-%m-%d'),
    'venice': {
        'token_supply': fmt($VVV_SUPPLY_RAW),
        'staked': fmt($VVV_STAKED_RAW),
        'staking_ratio': round(fmt($VVV_STAKED_RAW) / fmt($VVV_SUPPLY_RAW) * 100, 1) if fmt($VVV_SUPPLY_RAW) > 0 else 0,
        'diem_supply': round($DIEM_SUPPLY_RAW / 1e18, 2),
        'chain': 'base',
        'contracts': {
            'token': '$VVV_TOKEN',
            'staking': '$VVV_STAKING',
            'diem': '$DIEM_TOKEN'
        }
    },
    'morpheus': {
        'token_supply_arbitrum': fmt($MOR_SUPPLY_RAW),
        'token_supply_ethereum': fmt($MOR_ETH_SUPPLY_RAW),
        'chain': 'arbitrum',
        'contracts': {
            'token_arbitrum': '$MOR_TOKEN',
            'token_ethereum': '$MOR_ETH_TOKEN'
        }
    },
    'virtuals': {
        'token_supply': fmt($VIRTUAL_SUPPLY_RAW),
        'chain': 'base',
        'contracts': { 'token': '$VIRTUAL_TOKEN' }
    },
    'flock': {
        'token_supply': fmt($FLOCK_SUPPLY_RAW),
        'chain': 'base',
        'contracts': { 'token': '$FLOCK_TOKEN' }
    },
    'golem': {
        'token_supply': fmt($GLM_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$GLM_TOKEN' }
    },
    'autonolas': {
        'token_supply': fmt($OLAS_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$OLAS_TOKEN' }
    },
    'fetch-asi': {
        'token_supply': fmt($FET_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$FET_TOKEN' }
    },
    'ocean': {
        'token_supply': fmt($OCEAN_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$OCEAN_TOKEN' }
    },
    'phala': {
        'token_supply': fmt($PHA_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$PHA_TOKEN' }
    },
    'ora': {
        'token_supply': fmt($ORA_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$ORA_TOKEN' }
    },
    'vana': {
        'token_supply_ethereum': fmt($VANA_SUPPLY_RAW),
        'chain': 'ethereum (bridged)',
        'contracts': { 'token': '$VANA_TOKEN' }
    },
    'sahara': {
        'token_supply': fmt($SAHARA_SUPPLY_RAW),
        'chain': 'ethereum',
        'contracts': { 'token': '$SAHARA_TOKEN' }
    }
}

with open('$OUTPUT_FILE', 'w') as f:
    json.dump(metrics, f, indent=2)

print('')
print('=== Results ===')
for name, data in metrics.items():
    if name in ('timestamp', 'date'):
        continue
    supply = data.get('token_supply', data.get('token_supply_arbitrum', 0))
    staked = data.get('staked')
    extra = ''
    if staked:
        extra = f' | Staked: {staked:,} ({data.get(\"staking_ratio\", 0)}%)'
    diem = data.get('diem_supply')
    if diem:
        extra += f' | DIEM: {diem:,.0f}'
    print(f'  {name:15s} Supply: {supply:>15,}{extra}')

print(f'')
print(f'=== Written to $OUTPUT_FILE ===')
"
