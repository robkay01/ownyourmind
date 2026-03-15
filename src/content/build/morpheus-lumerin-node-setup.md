---
title: "Morpheus Lumerin Node: How to Provide AI Compute for MOR"
description: "How to set up a Morpheus Lumerin node and earn MOR by serving AI inference. Proxy-router setup, model hosting, on-chain registration, hardware builds, and the honest economics of compute provision."
difficulty: "intermediate"
category: "walkthrough"
publishDate: 2026-03-10
draft: false
---

## What you are building

A Morpheus Lumerin node turns your hardware into a decentralised AI inference provider. You host an AI model, register on-chain, and serve prompts to consumers who pay in MOR. The proxy-router handles encrypted P2P routing between you and consumers. Prompts and responses never touch the blockchain or any centralised relay.

The same software serves both providers and consumers. Any user can be a provider. The difference is whether you attach a GPU and a model.

For the full project assessment, see our [Morpheus review](/projects/morpheus/).

## How the system works

The architecture has four moving parts:

1. **Your AI model server.** llama.cpp, vLLM, or any OpenAI-compatible API running on your hardware.
2. **The proxy-router.** A Go process that monitors the BASE blockchain, manages encrypted sessions between you and consumers, and routes inference traffic P2P.
3. **The Diamond smart contract on BASE.** An on-chain marketplace where providers register, post bids, and consumers purchase sessions.
4. **MOR token.** Payment and staking medium for the entire system.

When a consumer wants AI inference, they browse available bids on-chain, purchase a session by staking MOR, and their proxy-router establishes a direct encrypted connection to your proxy-router. Traffic flows P2P. The blockchain only handles discovery and settlement.

The node also bundles a desktop UI (Electron), a CLI client, and IPFS (Kubo) for model storage. You do not need the UI to run as a provider.

## What you earn

24% of all MOR emissions go to compute providers. The daily emission started at 14,400 MOR/day in February 2024 and decreases by approximately 2.47 MOR per day. By mid-March 2026 (~day 766), that is roughly 12,511 MOR/day total, with approximately 3,003 MOR/day allocated to the compute pool.

At current MOR price (~$1.40), the entire compute pool is worth roughly $4,204/day (~$126,000/month) across all providers. MOR is down 99% from its all-time high of $139 (May 2024). Individual earnings depend on how many providers are active and how much consumer demand exists.

The honest problem: there is no public dashboard showing active provider count, demand volume, or reward distribution. You can query the Diamond contract's `getProviderIds()` function on BaseScan to get the registered provider count, or ask in the Discord #compute-providers channel. But the network does not surface this data in any accessible way, which is a significant gap.

### The Yellowstone reward model

Rewards are not distributed equally among all providers. The Yellowstone model (designed by Erik Voorhees) works like this:

1. **Consumers hold MOR** and receive a daily compute budget proportional to their balance. No per-inference payment from consumers.
2. **Providers post bids** on the marketplace specifying their price per second for each model they serve.
3. **The Router matches consumers to the cheapest qualifying provider.** If your bid is competitive and your uptime is good, you get selected more often.
4. **You earn MOR from the compute pool only when you actually serve inference** and the consumer reports a Pass result. No inference served, no reward.
5. **The daily compute budget is 1% of the accumulated compute contract balance** -- asymptotic, never runs out.

This means rewards are proportional to inference actually delivered, not proportional to stake. Staking determines eligibility and reputation ranking, but the work earns the MOR.

### Power Factor

The Power Factor applies to compute providers. Staking MOR for longer periods increases your reputation multiplier:

| Staking period | Power Factor |
|---|---|
| 0-6 months | 1x |
| 1 year | ~2x |
| 6 years | 10.7x (maximum) |

The Power Factor does not increase your per-inference rate -- it increases your ranking in the Router's selection algorithm, making you more likely to be matched with consumers. Higher ranking means more sessions, which means more earnings.

Your staked MOR also caps your maximum reward. Stake 100 MOR, earn up to 100 MOR during that staking period. The staking period can be increased but never decreased. Rewards cannot be withdrawn until the period ends.

### Bootstrapping incentive

During the first year after the capital contract bootstrapping period, the top 100 compute providers may receive a pro-rata 2.4% of MOR emissions (one-tenth of the compute bucket). The capital contract bootstrapping period was 90 days from February 2024, so this incentive window likely closed around August 2025. Whether it was extended is not documented. Check the Discord #compute-providers channel for current status.

### Staking requirements

The barrier to entry is low in MOR terms:

| Action | Minimum stake |
|---|---|
| Register as provider | 0.2 MOR (~$0.28) |
| Register a model | 0.1 MOR (~$0.14) |
| Post a bid | 0.3 MOR (~$0.42) |
| **Total to start** | **0.6 MOR (~$0.84)** |

That is under a dollar to register. Additional stake above the minimum increases your reputation weight and your earning cap. To register as a subnet operator, you need 10,000 MOR (~$14,200).

### No slashing

There is no slashing mechanism in the current contracts. If your node goes offline, you stop earning but do not lose stake. Failed inference results mean no payment -- that is the economic penalty. The Provider Registry has an `unregisterProvider` function that returns your stake voluntarily. This may evolve as Pretty Good Verification matures.

## Hardware for a provider node

The official docs recommend a dual RTX 3090 build (~$4,500 USD new). But you do not need to start there. A single-GPU budget build is enough to serve 8B and 13B models and start earning.

### Budget build: single RTX 3090 (~A$2,100-2,200)

| Component | Pick | Price (AUD) |
|---|---|---|
| GPU | Used RTX 3090 24GB (eBay/Gumtree) | ~$1,450 |
| CPU | Intel i5-12400F | $209 |
| Motherboard | B660M mATX DDR4 | $139 |
| RAM | 32GB DDR4-3200 | $107 |
| PSU | 850W 80+ Gold | $123 |
| SSD | 500GB NVMe | $49 |
| Case | Mid-tower ATX | ~$70 |

The CPU barely matters for inference -- it just feeds data to the GPU. The money goes on the card. Check Gumtree and Facebook Marketplace first; they typically run 10-20% cheaper than eBay ($1,200-1,500 range for a working 3090).

This build delivers roughly 80-90 tokens per second on 8B models and 45-55 tok/s on 13B. That is competitive for Morpheus marketplace bids.

### Official recommended build: dual RTX 3090 (~A$4,000-4,200)

Adds a second 3090, 1200W PSU, motherboard with two PCIe x16 slots, and a larger case. The dual setup gives 48GB combined VRAM -- enough to run 70B Q4 models across both cards. The docs note they run open-case for thermal management. Dual 3090s generate serious heat.

Only worth the extra cost if you need 70B model capability or want to serve more parallel requests. Start with one card and upgrade if the economics justify it.

### Why RTX 3090 specifically

The RTX 4090 is roughly 1.6x faster on inference but costs roughly 2x more used in Australia ($2,500-3,500 vs $1,400-1,800). Same 24GB VRAM. Performance per dollar favours the 3090 clearly. The RTX 3080 12GB is false economy -- 12GB VRAM limits you to 8B models only, and TDP is nearly the same as the 3090.

Consumer nodes need minimal hardware -- any modern desktop or laptop runs the proxy-router and UI.

### Network requirements

Your proxy-router must have a **publicly accessible endpoint** (IP:port or domain:port). Two ports need to be open:
- **3333** for proxy/routing (TCP)
- **8082** for Swagger API/management

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

Any GGUF-format model from HuggingFace works. The Hermes-3-Llama-3.1-8B is a good starting point, capable enough to be useful and small enough for a single GPU.

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

An SDL template (`02.2-proxy-router-akash.yml`) is available for fully decentralised hosting of the proxy-router on the Akash Network. This means your compute provision can itself be decentralised: model on your GPU, routing on Akash.

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

The self-hosted llama.cpp path is the most aligned with the sovereignty thesis. You control the model, the hardware, and the data. Forwarding to OpenAI or Anthropic works but adds centralised dependency and API costs.

## The honest economics

Let me work the numbers at current prices for the budget single-GPU build.

**Hardware:** ~A$2,200 for a single RTX 3090 build.

**Electricity:** A single 3090 under inference load draws roughly 200-280W. With the rest of the system, call it 330W sustained. Running 24/7 in Western Australia at Synergy's current rate of $0.3237/kWh, that is approximately $2.56/day or $77/month. At 60% average utilisation (mix of active inference and idle), expect $50-60/month.

**Staking:** 0.6 MOR (~$0.85). Negligible.

**Earnings:** The entire compute pool receives approximately 3,003 MOR/day (~$4,204/day at $1.40/MOR). Under the Yellowstone model, rewards are not split equally -- they go to providers who win bids and serve inference. But as a rough guide:

| Providers sharing pool | Your monthly share | Monthly AUD (approx.) | Break-even |
|---|---|---|---|
| 25 | ~3,604 MOR | ~$7,240 | < 1 month |
| 50 | ~1,802 MOR | ~$3,620 | ~1 month |
| 100 | ~901 MOR | ~$1,810 | ~2 months |
| 250 | ~360 MOR | ~$724 | ~4 months |
| 500 | ~180 MOR | ~$362 | ~8 months |

These assume equal sharing, which the Yellowstone model does not guarantee -- competitive pricing and uptime determine your actual share. Subtract $50-60/month in electricity from each scenario.

The provider count is the variable that makes or breaks this. At 100 providers, you break even in two months on a budget build. At 500, it takes eight months. The network launched compute on mainnet in November 2024, which is early enough that the lower end of that range is plausible.

**What happens if MOR price moves:**

| MOR price | Daily pool value | Monthly pool value |
|---|---|---|
| $0.50 (further decline) | $1,502 | $45,045 |
| $1.40 (current) | $4,204 | $126,000 |
| $5.00 (recovery) | $15,025 | $450,750 |
| $10.00 (modest recovery) | $30,050 | $901,500 |

MOR only needs to recover to $5-10 (still 93-97% below ATH) for the compute pool to become very attractive even with hundreds of providers.

**The real thesis:** The asymmetry is interesting. Downside is A$2,200 in hardware that retains resale value (3090s hold their price) plus $50-60/month electricity. Upside is early entry to a compute pool where the provider count is unknown but likely small, earning a token that is 99% off its high. If you already have GPU hardware sitting idle, the marginal cost is just electricity and the 0.6 MOR stake.

## Monitoring and maintenance

The proxy-router logs to stdout. For production, pipe to a log file or monitoring service.

Key things to watch:
- **Session creation failures.** v5.14.0 fixed an integer overflow that caused these, but monitor for new issues.
- **Model server uptime.** If llama.cpp crashes, your provider stops earning.
- **Wallet balance.** You need ETH on BASE for gas. Keep a buffer.
- **Software updates.** The node is actively developed. Check releases regularly.

## Common issues

1. **"No provider accepting session".** Known issue under load. Ensure your endpoint is publicly accessible and your model server is running.
2. **macOS quarantine.** Run `xattr -c proxy-router` after downloading.
3. **RPC rate limits.** If using a free Alchemy/Infura tier, you may hit rate limits during high blockchain activity. Consider a paid plan.
4. **Port forwarding.** If behind a home router, you need to forward ports 3333 and 8082 to your machine. UPnP may handle this, but manual configuration is more reliable.
5. **Model too large for VRAM.** If your model does not fit in GPU memory, llama.cpp will offload layers to CPU, destroying performance. Use a model that fits entirely in your GPU's VRAM.

## Testnet first

BASE Sepolia testnet (Chain ID 84532) is available. Use it. The setup is identical except you use testnet contract addresses and free testnet tokens. Get comfortable with the full flow (model hosting, proxy-router configuration, on-chain registration, bid creation) before committing real MOR.

The testnet environment variables are in the `env.example` file.

## Resources

- **Node releases:** [Lumerin-protocol/Morpheus-Lumerin-Node](https://github.com/Lumerin-protocol/Morpheus-Lumerin-Node/releases)
- **Source code:** [MorpheusAIs/Morpheus-Lumerin-Node](https://github.com/MorpheusAIs/Morpheus-Lumerin-Node)
- **Lumerin docs:** gitbook.mor.lumerin.io
- **Morpheus compute page:** mor.org/morpheus-compute
- **Discord:** #compute-providers channel for support
- **Smart contracts on BASE:** MOR token `0x7431...b8e3`, Diamond `0x6aBE...030a`

## How other compute networks looked at this stage

Every successful compute network went through the same pattern. Akash, Render, and Flux all used emission subsidies to attract early providers before organic demand existed. Provider economics were negative without those subsidies in year one and two. The demand-supply paradox -- needing providers to attract users, needing users to justify provider costs -- took years to resolve.

Render had the advantage of existing demand from 3D artists. Akash found traction in 2023-2024 when AI workloads exploded. Flux maintained a large node network through the bear market on conviction.

Morpheus is approximately 16 months into its compute mainnet. That is early by comparison. Render took two-plus years from public launch to meaningful organic demand. The question is whether decentralised AI inference follows the same adoption curve or a faster one, given the current AI demand environment.

## My assessment

Morpheus is doing something genuinely different from the other compute networks I have reviewed. Akash, Render, and io.net are general-purpose compute marketplaces. Morpheus is specifically an AI inference routing network with P2P privacy by design. Prompts never touch a centralised server. That matters.

The 0.6 MOR entry cost is the lowest barrier of any node I have set up for this site. The proxy-router installation is straightforward. The on-chain registration via Swagger API is well-designed -- no raw contract interaction needed. The Yellowstone reward model is genuinely well-thought-out: competitive bidding, demand-driven allocation, and a Power Factor that rewards commitment over speculation.

The gaps are real though. No public dashboard for network statistics. Two key documentation pages are stubs. The verification system (Pretty Good Verification) is at proposal stage. Consumer demand signals are thin. And MOR is trading at 99% below its all-time high, which either means the market has given up or the opportunity is priced at its most asymmetric.

For a budget build at A$2,200, the downside is capped (hardware retains resale value) and the upside scales with both MOR price recovery and early-mover advantage in a small provider pool. That is a better risk/reward profile than most node opportunities I have reviewed. The Aethir Edge's 47-year break-even and Flux Cumulus earning cents per day do not compare.
