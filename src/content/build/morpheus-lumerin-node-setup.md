---
title: "Morpheus Lumerin Node: How to Provide AI Compute for MOR"
description: "How to set up a Morpheus Lumerin node and earn MOR by serving AI inference. Proxy-router setup, model hosting, on-chain registration, hardware builds, and the honest economics of compute provision."
difficulty: "intermediate"
category: "walkthrough"
publishDate: 2026-03-10
draft: true
---

## What you are building

A Morpheus Lumerin node turns your hardware into a decentralised AI inference provider. You host an AI model, register on-chain, and serve prompts to consumers who pay in MOR. The proxy-router handles encrypted P2P routing between you and consumers — prompts and responses never touch the blockchain or any centralised relay.

The same software serves both providers and consumers. Any user can be a provider. The difference is whether you attach a GPU and a model.

For the full project assessment, see our [Morpheus review](/projects/morpheus/).

## How the system works

The architecture has four moving parts:

1. **Your AI model server** — llama.cpp, vLLM, or any OpenAI-compatible API running on your hardware
2. **The proxy-router** — a Go process that monitors the BASE blockchain, manages encrypted sessions between you and consumers, and routes inference traffic P2P
3. **The Diamond smart contract on BASE** — an on-chain marketplace where providers register, post bids, and consumers purchase sessions
4. **MOR token** — payment and staking medium for the entire system

When a consumer wants AI inference, they browse available bids on-chain, purchase a session by staking MOR, and their proxy-router establishes a direct encrypted connection to your proxy-router. Traffic flows P2P. The blockchain only handles discovery and settlement.

The node also bundles a desktop UI (Electron), a CLI client, and IPFS (Kubo) for model storage. You do not need the UI to run as a provider.

## What you earn

24% of all MOR emissions go to compute providers. The daily emission started at 14,400 MOR/day in February 2024 and decreases by approximately 2.47 MOR per day. By March 2026, that is roughly 12,500 MOR/day total, with approximately 3,000 MOR/day allocated to the compute pool.

At current MOR price (~$3.30), the entire compute pool is worth roughly $10,000/day across all providers. Individual earnings depend on how many providers are active and how much consumer demand exists.

The honest problem: there is no public dashboard showing active provider count, demand volume, or reward distribution. You cannot assess the competitive landscape before committing hardware. This is the biggest gap in the current system.

### Staking requirements

The barrier to entry is low in MOR terms:

| Action | Minimum stake |
|---|---|
| Register as provider | 0.2 MOR (~$0.66) |
| Register a model | 0.1 MOR (~$0.33) |
| Post a bid | 0.3 MOR (~$0.99) |
| **Total to start** | **0.6 MOR (~$1.98)** |

Staking above the minimum increases your reputation weight in the marketplace. To register as a subnet operator, you need 10,000 MOR (~$33,000).

## Hardware for a provider node

The official docs include a sample build optimised for cost while meeting requirements for an 8B-parameter model. Delivers roughly 80 tokens per second on 8B models.

| Component | Spec | Notes |
|---|---|---|
| CPU | Intel i7-13700K | Or equivalent AMD |
| RAM | 64 GB DDR5-6000 | |
| GPU | 2x NVIDIA RTX 3090 (24 GB VRAM each) | Docs recommend 3090s over 4090s for price efficiency |
| Storage | 1 TB NVMe SSD | |
| PSU | 1000W minimum | 1200-1500W with dual GPU under load |
| OS | Ubuntu (latest) + NVIDIA CUDA toolkit | |

Estimated cost: approximately $4,500 USD new. The docs note they run open-case for thermal management — dual 3090s generate serious heat.

If you already have a single RTX 3090 or 4090, you can start with one GPU and smaller models. Dual GPU enables larger models or more parallel prompts.

Consumer nodes need minimal hardware — any modern desktop or laptop runs the proxy-router and UI.

### Network requirements

Your proxy-router must have a **publicly accessible endpoint** (IP:port or domain:port). Two ports need to be open:
- **3333** — proxy/routing (TCP)
- **8082** — Swagger API/management

The docs recommend running behind a proxy, load balancer, or VPN for IP obfuscation. Your endpoint is visible on-chain, so anyone can see your provider address.

## Setting up the model server

Before touching the proxy-router, get your AI model serving.

### Install llama.cpp with CUDA

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make -j 8 LLAMA_CUDA=1
```

### Download a model

Any GGUF-format model from HuggingFace works. The Hermes-3-Llama-3.1-8B is a good starting point — capable enough to be useful, small enough for a single GPU.

### Start the model server

```bash
./llama-server \
  -m models/your-model.gguf \
  --host 127.0.0.1 \
  --port 8080 \
  --n-gpu-layers 99 \
  --ctx-size 8192 \
  --threads 8
```

For dual GPU with larger context:
```bash
./llama-server \
  -m models/your-model.gguf \
  --host 127.0.0.1 \
  --port 8080 \
  --n-gpu-layers 99 \
  --ctx-size 98304 \
  --parallel 16 \
  --flash-attn
```

Verify it is running at `http://127.0.0.1:8080`. You should see the llama.cpp API interface.

## Setting up the proxy-router

### Option 1: Binary (simplest)

Download the latest release for your platform from the [Lumerin-protocol GitHub releases](https://github.com/Lumerin-protocol/Morpheus-Lumerin-Node/releases). As of March 2026, that is v5.14.0, with binaries for Windows x64, macOS (ARM and Intel), and Linux (x86_64 and ARM64).

On macOS, you may need to remove the quarantine flag:
```bash
xattr -c proxy-router
```

### Option 2: Docker

```bash
docker run -d \
  --env-file proxy-router.env \
  -v /path/to/local/data:/app/data \
  -p 3333:3333 \
  -p 8082:8082 \
  ghcr.io/morpheusais/morpheus-lumerin-node:v5.14.0
```

### Option 3: Akash

An SDL template (`02.2-proxy-router-akash.yml`) is available for fully decentralised hosting of the proxy-router on the Akash Network. This means your compute provision can itself be decentralised — model on your GPU, routing on Akash.

### Configure the environment

Copy `env.example` to `.env` and set:

```bash
# Your wallet private key (funded with MOR + ETH on BASE)
WALLET_PRIVATE_KEY=your_private_key_here

# BASE mainnet
ETH_NODE_CHAIN_ID=8453

# Smart contracts
DIAMOND_CONTRACT_ADDRESS=0x6aBE1d282f72B474E54527D93b979A4f64d3030a
MOR_TOKEN_ADDRESS=0x7431aDa8a591C955a994a21710752EF9b882b8e3

# Optional: custom RPC endpoint (Alchemy or Infura recommended)
ETH_NODE_ADDRESS=wss://your-rpc-endpoint
```

Edit `models-config.json` to point at your model server endpoint. Set `apiType` to `openai` for llama.cpp.

**The wallet key concern.** Your private key sits in a plaintext `.env` file or system keychain. If your server is compromised, that wallet is compromised. Use a dedicated wallet with only the MOR and ETH needed for operation. Do not use your main wallet.

### Start and verify

```bash
./proxy-router
```

Check the logs for:
- `HTTP http server is listening: 0.0.0.0:8082`
- `TCP tcp server is listening: 0.0.0.0:3333`

Access the Swagger API at `http://localhost:8082/swagger/index.html`. This is your management interface for all on-chain operations.

## Register on-chain

All registration happens through the Swagger API. You do not need to interact with the smart contracts directly.

### 1. Approve the Diamond contract

POST to `/blockchain/approve` with at least `600000000000000000` (0.6 MOR in wei) to cover all registration fees.

### 2. Register as a provider

POST to `/blockchain/providers` with:
- `addStake`: minimum `200000000000000000` (0.2 MOR)
- `endpoint`: your publicly accessible endpoint (e.g. `mycoolnode.domain.com:3333`)

### 3. Upload your model to IPFS

POST to `/ipfs/add` with your model file, then pin it. The returned CID is used in the model registration.

### 4. Register the model

POST to `/blockchain/models` with model name, IPFS CID, fee, stake (minimum 0.1 MOR), and tags.

Update your `models-config.json` with the returned composite model ID and restart the proxy-router.

### 5. Create a bid

POST to `/blockchain/bids` with your model ID and `pricePerSecond`. Minimum price is `10000000000` (0.00000001 MOR/sec). This is what consumers see when browsing the marketplace.

Your node is now live. Consumers can discover your bid, purchase a session, and your proxy-router handles the rest.

## Supported model backends

The proxy-router is model-agnostic. You can route to anything with an API:

| Backend | apiType | Notes |
|---|---|---|
| llama.cpp / vLLM | `openai` | Self-hosted, any GGUF model |
| OpenAI | `openai` | Forwarding to GPT models (you pay OpenAI API costs) |
| Anthropic Claude | `claudeai` | Forwarding to Claude (you pay Anthropic costs) |
| Prodia | `prodia-v2` | Image generation |
| Hyperbolic | `hyperbolic-sd` | Image generation |

The self-hosted llama.cpp path is the most aligned with the sovereignty thesis — you control the model, the hardware, and the data. Forwarding to OpenAI or Anthropic works but adds centralised dependency and API costs.

## The honest economics

Let me work the numbers at current prices.

**Hardware:** ~$4,500 for the recommended dual RTX 3090 build.

**Electricity:** Dual 3090s under load draw 700W+. Running 24/7 in Western Australia at roughly $0.30/kWh, that is $5-6/day in electricity alone. Add the rest of the system and you are looking at $6-7/day.

**Staking:** 0.6 MOR (~$2). Negligible.

**Earnings:** The entire compute pool receives approximately 3,000 MOR/day (~$10,000/day). If there are 50 active providers sharing equally, each earns ~$200/day. If there are 500, each earns ~$20/day. If there are 5,000, each earns ~$2/day.

The problem is that second number — active provider count — is not public. You cannot calculate expected ROI without it. This is not unique to Morpheus (most early networks have this gap), but it matters when you are committing $4,500 in hardware.

**Break-even scenarios (excluding electricity):**
- 50 providers: ~23 days
- 200 providers: ~90 days
- 500 providers: ~225 days

Add electricity at $6-7/day and the break-even extends significantly for the higher provider counts.

**The real thesis:** If you already have GPU hardware sitting idle, the marginal cost is electricity and setup time. The 0.6 MOR staking requirement is trivial. In that case, running a Morpheus node is a low-cost way to earn MOR emissions while the network is young and provider count is low. If you are buying hardware specifically for this, the economics are speculative at current MOR prices.

## Monitoring and maintenance

The proxy-router logs to stdout. For production, pipe to a log file or monitoring service.

Key things to watch:
- **Session creation failures** — v5.14.0 fixed an integer overflow that caused these, but monitor for new issues
- **Model server uptime** — if llama.cpp crashes, your provider stops earning
- **Wallet balance** — you need ETH on BASE for gas. Keep a buffer.
- **Software updates** — the node is actively developed. Check releases regularly.

There is no slashing in the current system — if your node goes offline, you stop earning but do not lose stake. This may change as the verification system (Pretty Good Verification) matures.

## Common issues

1. **"No provider accepting session"** — known issue under load. Ensure your endpoint is publicly accessible and your model server is running.
2. **macOS quarantine** — run `xattr -c proxy-router` after downloading.
3. **RPC rate limits** — if using a free Alchemy/Infura tier, you may hit rate limits during high blockchain activity. Consider a paid plan.
4. **Port forwarding** — if behind a home router, you need to forward ports 3333 and 8082 to your machine. UPnP may handle this, but manual configuration is more reliable.
5. **Model too large for VRAM** — if your model does not fit in GPU memory, llama.cpp will offload layers to CPU, destroying performance. Use a model that fits entirely in your GPU's VRAM.

## Testnet first

BASE Sepolia testnet (Chain ID 84532) is available. Use it. The setup is identical except you use testnet contract addresses and free testnet tokens. Get comfortable with the full flow — model hosting, proxy-router configuration, on-chain registration, bid creation — before committing real MOR.

The testnet environment variables are in the `env.example` file.

## Resources

- **Node releases:** [Lumerin-protocol/Morpheus-Lumerin-Node](https://github.com/Lumerin-protocol/Morpheus-Lumerin-Node/releases)
- **Source code:** [MorpheusAIs/Morpheus-Lumerin-Node](https://github.com/MorpheusAIs/Morpheus-Lumerin-Node)
- **Lumerin docs:** gitbook.mor.lumerin.io
- **Morpheus compute page:** mor.org/morpheus-compute
- **Discord:** #compute-providers channel for support
- **Smart contracts on BASE:** MOR token `0x7431...b8e3`, Diamond `0x6aBE...030a`

## My assessment

Morpheus is doing something genuinely different from the other compute networks I have reviewed. Akash, Render, and io.net are general-purpose compute marketplaces. Morpheus is specifically an AI inference routing network with P2P privacy by design. Prompts never touch a centralised server. That matters.

The 0.6 MOR entry cost is the lowest barrier of any node I have set up for this site. The proxy-router installation is straightforward. The on-chain registration via Swagger API is well-designed — no raw contract interaction needed.

The gaps are real though. No public dashboard for network statistics. Two key documentation pages are stubs. The verification system is at proposal stage. And the compute pool economics depend entirely on a provider-to-demand ratio that nobody can currently measure.

If you have idle GPU hardware, the risk is low and the potential upside in early MOR emissions is genuine. If you are buying hardware for this, wait until there is more visibility on demand and provider count. The network needs to prove consumer traction before a $4,500 hardware investment makes sense at $3.30 MOR.
