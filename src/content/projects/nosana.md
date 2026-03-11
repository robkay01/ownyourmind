---
title: "Nosana"
description: "Decentralised GPU marketplace on Solana for AI inference workloads. Working mainnet, Render integration, 2M+ deployments. Zero public revenue, thin liquidity, 45% insider allocation."
category: "compute"
token: "NOS"
status: "active"
freedomScore: 6
returnsScore: 4.6
returnsScoreBreakdown:
  tokenUtility: 14
  valueAccrual: 11
  supplyDynamics: 14
  revenueSustainability: 3
  liquidityAccess: 4
returnsScoreEvidence:
  tokenUtility: "Required for GPU job payments, xNOS staking for fee share, governance voting, buyback-and-burn. Structurally embedded but throughput unverified."
  valueAccrual: "20% of protocol profits buy and burn NOS. Fees distributed to stakers via xNOS. Good mechanisms, zero data on actual burns or profits. 9,102 stakers."
  supplyDynamics: "100M max supply, 83.4% circulating. All vesting complete. FDV/MCap 1.2x. NNP-0001 may introduce emissions beyond 100M cap."
  revenueSustainability: "No public revenue figures despite 2M+ deployments. Not on DeFiLlama. Competing against Aethir ($147M ARR) with zero disclosed revenue."
  liquidityAccess: "Gate.io, MEXC, Raydium. No Tier 1 CEX. $494K daily volume. Sub-$300K DEX liquidity. Dangerously thin for a $14M market cap."
publishDate: 2025-03-06
draft: false
coingeckoId: "nosana"
launchType: "ico"
chain: "Solana"
supplyType: "capped"
maxSupply: "100,000,000 NOS"
verdict: "Working inference marketplace with real deployments and Render integration. Zero revenue visibility and thin liquidity make it a conviction bet on the inference thesis."
oymHolds: false
podcastUrl: "/podcast/Own-Your-Mind-013-Nosana.mp3"
---

## What it does

Nosana is a decentralised GPU marketplace on Solana, focused specifically on AI inference workloads. GPU owners – consumers, miners, data centres – monetise idle hardware by running Nosana Nodes. Developers and AI companies submit containerised inference jobs which are matched to suitable GPUs via Solana smart contracts.

Founded in Amsterdam in June 2021 by **Jesse Eisses** (MSc Artificial Intelligence, University of Amsterdam; former ML Platform Architect at Intel) and **Sjoerd Dijkstra** (Senior DevOps Engineer at Zivver, University of Amsterdam). The project originally launched as a decentralised CI/CD platform for CPU computations and pivoted to GPU-based AI inference in October 2023.

Jobs are submitted via API, CLI, SDK, or web dashboard. The Nosana Grid matches supply with demand through on-chain smart contracts. The platform supports Docker containers, HuggingFace model loading, S3 resources, health checks, and confidential execution. Solana's sub-second finality enables micro-payments and rapid job allocation.

Supported workloads include LLM inference (DeepSeek, TinyLlama, Ollama), Stable Diffusion image generation, LMDeploy and VLLM inference engines, Whisper speech-to-text, Jupyter notebooks, and arbitrary Docker containers.

Token launched 10 January 2022 via IDO on Solanium at $0.10, followed by an IEO on Gate.io Startup. A private round raised $1.36M at $0.08 per token. Total funding: $1.74M – making this one of the most modestly funded projects in the DeAI space. Mainnet launched 14 January 2025 after a year-long closed beta.

## Value proposition

Inference-specific GPU compute at up to 6x cost savings versus AWS, Azure, and GCP. That is the pitch, and it addresses a real market gap.

Most decentralised compute projects try to be everything – training, inference, rendering, general compute. Nosana narrows the focus to inference only, which is the workload that scales with AI adoption. Every chatbot query, image generation, and voice transcription is an inference job. As AI moves from research to production, inference demand grows exponentially while training remains periodic.

The network has real traction. Over 2 million deployments reached by August 2025 – a 150% increase from 800,000 in Q1 2025. 50,000 registered GPU hosts across 60+ countries, with approximately 4,200 active nodes and 600 daily active nodes. The Render Network integration (RNP-008, approved January 2025) allows Render nodes to execute Nosana jobs, expanding supply access. 14 named partnerships including PiKNiK (enterprise Nvidia A5000 infrastructure), Matrix One (AI avatars), Sogni.AI (Stable Diffusion), and Theoriq (AI agents).

The Solana Foundation backing adds credibility, and the team has relevant AI/ML backgrounds – Eisses's Intel ML platform experience is directly applicable.

The counter-narrative is blunt: **zero public revenue data.** Two million deployments sounds impressive, but without any disclosure of revenue per deployment, total fees generated, or protocol profits, it is impossible to assess whether Nosana has found product-market fit or is giving away compute at unsustainable prices. The claim of 6x cost savings implies low pricing per job. At what volume does that become a viable business?

The 50,000 registered hosts versus 600 daily active nodes is a 98.8% idle rate. Most of that hardware is sitting unused. Whether that represents supply readiness (bullish – capacity is available when demand arrives) or ghost registrations (bearish – actual usable supply is much smaller) depends on your interpretation.

Liquidity is dangerously thin. Sub-$300K in Raydium DEX pools. No Tier 1 CEX listings. Any significant position entry or exit will cause material slippage. For a token with a $14M market cap, this limits who can participate.

For the sovereignty thesis, Nosana offers permissionless GPU hosting – anyone can contribute hardware without KYC. Jobs are matched via smart contracts rather than centralised orchestration. Confidential execution is listed as a feature, though implementation details are sparse. The Solana dependency is a single-chain risk.

## Tokenomics

NOS has a maximum supply of 100 million tokens with 83.4 million circulating (83.4%). All original vesting schedules completed in 2025 – there is no ongoing unlock pressure from insiders.

Distribution was heavily insider-weighted: Team (20%) + Company (25%) = 45% insider allocation. Backers received 17% with 10% TGE and 9-month linear vesting. Mining allocation was 20% over 24 months. Liquidity received 10% at TGE. Only 3% was sold in the public IDO/IEO and 5% via airdrop – just 8% initial public distribution.

The private round raised $1.36M at $0.08 per NOS (17M tokens). The IDO raised $300K at $0.10 (3M tokens on Solanium). The IEO raised $80K at $0.10 (800K tokens on Gate.io Startup). Total raised: $1.74M. All investors are currently deeply underwater – the token peaked at $7.83 in March 2024 and trades at approximately $0.17, down 85% from ATH.

NOS is used for GPU compute job payments, staking (xNOS score determines fee share), governance voting via NNP proposals, and a buyback-and-burn mechanism where 20% of protocol profits are used to repurchase and permanently remove NOS from circulation.

FDV-to-market-cap ratio is approximately 1.2x – healthy, meaning nearly fully diluted. However, NNP-0001 (voted November 2025) proposes shifting rewards from passive yield to usage-based emissions tied to network activity. If implemented, this could introduce inflation beyond the original 100M cap – fundamentally changing supply dynamics.

NOS trades at approximately $0.17 with a market cap around $14M. Daily volume approximately $494K. Listed on Gate.io, MEXC, Raydium, and Jupiter. No Binance, Coinbase, or Kraken.

Staking: 9,102 stakers with approximately $4.86M staked. APY has been halved since May 2024 and is not publicly disclosed.

## How to participate

**Run a Nosana Node.** Contribute your GPU to the network. No KYC required. Install Nosana software, configure your hardware, start hosting inference jobs. Earn NOS from compute fees. Consumer and enterprise GPUs accepted. Technical skill: intermediate.

**Stake NOS.** Stake to earn xNOS score, which determines your share of transaction fees. Higher xNOS = larger fee portion. Technical skill: basic.

**Deploy AI workloads.** Submit inference jobs via API, CLI, SDK, or web dashboard. Load HuggingFace models directly. Docker container support. Technical skill: intermediate to advanced.

## Honest assessment

### Freedom Score: 60/100 (C)

Nosana has genuine permissionless infrastructure with real geographic distribution, but governance centralisation and audit gaps exist.

**Infrastructure Decentralisation: 14/20.** 4,200+ nodes across 60+ countries with permissionless GPU hosting. 50,000 registered hosts but only ~600 daily active nodes. Consumer and enterprise GPUs accepted. PiKNiK provides enterprise Nvidia A5000 infrastructure. Solana dependency inherits its centralisation risks. Job orchestration details unclear – how much control does the team retain over routing?

**Governance Decentralisation: 8/20.** NNP governance framework exists with a 7-stage lifecycle. vote.nosana.com is operational. However, only ONE proposal (NNP-0001) has ever been submitted in 4+ years. Proposals require team review before community vote – team gatekeeping. No Nosana Foundation established yet. Signal votes only – the team implements outcomes.

**Token Distribution Fairness: 7/15.** Team (20%) + Company (25%) = 45% insider allocation. Only 3% public sale + 5% airdrop = 8% initial public distribution. All vesting complete by 2025, which removes ongoing unlock pressure but does not change the initially concentrated distribution.

**Censorship Resistance: 11/15.** Permissionless node participation – anyone with a GPU can host without KYC. Docker-based job execution provides isolation. Jobs matched via smart contracts. However, the team controls protocol upgrades and could theoretically blacklist nodes or jobs. No explicit anti-censorship guarantees.

**Data Sovereignty: 9/15.** Documentation mentions confidential execution as a job configuration option. Docker containerisation provides process isolation. Distributed execution across independent hosts. However, TEE implementation details unclear. Data-in-transit protections not detailed. Privacy features appear early-stage.

**Open Source Transparency: 9/15.** 34 public GitHub repos under nosana-ci. MIT licence on smart contracts. 1,171 commits on nosana-programs. Active development through March 2026. However, only staking contract audited (2022, by lesser-known Op Codes). README explicitly warns "most code is unaudited."

### Returns Score: 46/100 (D)

**Token Utility: 14/20.** NOS is required to pay for GPU compute jobs – structurally embedded in the marketplace. Staking via xNOS determines fee share. Governance voting via NNP proposals. Buyback-and-burn creates demand from protocol revenue. Clear utility design, but actual network throughput and fee generation are unverified. The token has genuine use cases but the network's economic activity is a black box.

**Value Accrual: 11/20.** Buyback-and-burn mechanism: 20% of protocol profits buy and burn NOS. Transaction fees partially distributed to stakers based on xNOS score. These are good mechanisms on paper – direct protocol revenue flowing to token holders and supply reduction. However, no data exists on how much NOS has actually been burned, what protocol profits have been, or what staker yields look like in practice. 9,102 stakers with $4.86M staked suggests modest engagement. Unproven at scale.

**Supply Dynamics: 14/20.** 100M max supply with 83.4% circulating. All original vesting complete – no insider unlock pressure. FDV/MCap ratio of 1.2x is healthy. Burn mechanism is deflationary in theory. However, NNP-0001 proposes usage-based emissions that may introduce inflation beyond the 100M cap. If approved and implemented, this fundamentally changes the supply dynamics profile.

**Revenue Sustainability: 3/25.** This is the weakest dimension. No public protocol revenue figures exist despite 2M+ deployments. DeFiLlama has no data. 985,000 jobs completed in 2024 but no revenue per job disclosed. The 6x cost savings claim implies low pricing, which may limit revenue per job. Competing against Aethir ($147M ARR) and Render (publicly tracked fees) with zero disclosed revenue. Only $1.74M raised against well-capitalised competitors. Sustainability is entirely unverifiable.

**Liquidity & Access: 4/15.** Gate.io, MEXC, Raydium, Jupiter. No Tier 1 CEX listings (no Binance, Coinbase, Kraken). Daily volume approximately $494K. Raydium NOS/USDC pool has just $279K liquidity. Any significant buy or sell causes major slippage. For a $14M market cap token, this is dangerously thin. Position sizing must be very small.

### Quadrant: B (High Freedom, Low Returns)

Nosana sits in Quadrant B – a sovereignty play with unproven economics. Genuine decentralised inference infrastructure with working technology, but zero revenue visibility and thin liquidity make returns speculative.

### Key risks

- **Zero public revenue.** Two million deployments with no disclosed revenue. Cannot assess whether the business model works.
- **Dangerously thin liquidity.** Sub-$300K DEX pools. No Tier 1 CEX. Any meaningful trade moves the price.
- **Most code unaudited.** Only staking audited (2022, lesser-known firm). README warns "most code is unaudited."
- **45% insider allocation.** Team + Company held 45% at launch. All vested, but concentrated distribution.
- **98.8% hosts inactive.** 600 daily active nodes versus 50,000 registered. Most hardware sits idle.
- **NNP-0001 inflation risk.** Proposal may introduce emissions beyond the 100M cap, diluting existing holders.
- **All investors underwater.** Private round investors at -94%, public at -98% from ATH. Exhausted patience.
- **$1.74M total funding.** Competing against Aethir ($158M), Render, and io.net with minimal resources.
- **Single-chain dependency.** Solana-only creates concentration risk. Solana downtime affects Nosana.
