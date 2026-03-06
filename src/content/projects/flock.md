---
title: "FLock.io"
description: "Decentralised AI training via federated learning on Base. NeurIPS-awarded, EF-granted. $2.7M protocol revenue in 10 months from 16 training tasks. Academic rigour meets early-stage commercial traction."
category: "compute"
token: "FLOCK"
status: "active"
freedomScore: 6
returnsScore: 5.8
returnsScoreBreakdown:
  tokenUtility: 14
  valueAccrual: 13
  supplyDynamics: 14
  revenueSustainability: 9
  liquidityAccess: 8
returnsScoreEvidence:
  tokenUtility: "Required for staking as trainer, validator, or delegator. gmFLOCK lock-up mechanism (up to 365 days). Slashing for malicious behaviour. No burn mechanism."
  valueAccrual: "11.9M FLOCK ($2.7M) protocol fee revenue in 10 months — real revenue. API Platform revenue sharing. Elite Trainer 50% revenue share. Fee flow to holders vs treasury unclear."
  supplyDynamics: "1B fixed supply. Community tokens over 60 months with decay. 25% of circulating locked via gmFLOCK (avg 265 days). 68.5% still locked — significant future dilution."
  revenueSustainability: "$2.7M fees from only 16 training tasks — promising per-task economics but tiny volume. Task creation still centralised. Partnerships at MoU stage."
  liquidityAccess: "Gate.io, Bybit, KuCoin, MEXC, Bitget. $1.6M daily volume. $18M market cap. No Binance or Coinbase. Base chain only."
publishDate: 2025-03-06
draft: false
coingeckoId: "flock-2"
launchType: "airdrop"
chain: "Base (Ethereum L2)"
supplyType: "capped"
maxSupply: "1,000,000,000 FLOCK"
verdict: "NeurIPS-awarded federated learning meets blockchain. Real protocol revenue ($2.7M) from a small number of tasks. The academic credentials are genuine; the question is whether 16 training tasks in 10 months becomes 1,600."
oymHolds: false
---

## What it does

FLock.io is a decentralised AI model training and validation platform that combines federated learning with blockchain. The core promise: train AI models collaboratively without sharing raw data. Only model updates (gradients) are transmitted — the training data never leaves the participant's device.

The architecture has three layers:

- **AI Arena** (train.flock.io) — the live training platform on Base. Training Nodes submit models, Validators evaluate them via comparative scoring, and Delegators stake tokens to nodes and validators. On-chain smart contracts handle rewards and slashing.
- **FL Alliance** — the federated learning layer where participants fine-tune consensus models using their private local datasets. Still in testnet as of mid-2025. This is the privacy-preserving component that makes FLock genuinely different.
- **Moonbase / API Platform** — deployment layer launched September 2025. An OpenAI SDK-compatible API for deploying and monetising trained models, with revenue sharing for contributors.

The technical innovation is **FLoRA** — using Low-Rank Adaptation (LoRA) for efficient fine-tuning with minimal compute overhead, replacing central aggregator servers with blockchain-based peer review. FLock achieved the first empirical validation of fine-tuning a 70B LLM in a decentralised multi-domain setting.

Founded by **Jiahao Sun** (MSc Computer Science, Oxford; Honorary Research Fellow, Imperial College London; former Director of AI at RBC Wealth Management). **Zehua Cheng** (Chief AI Scientist, DPhil candidate at Oxford) and **Dr. Zhipeng Wang** (Lead Blockchain Researcher, leading Ethereum Foundation-funded research) round out the technical leadership.

The entity is **FLOCK.IO LTD**, registered in London (Companies House #14039622, incorporated April 2022). Total funding: ~$9M — seed ($6M led by Lightspeed Faction and Tagus Capital, with DCG, OKX Ventures, Volt Capital) and strategic ($3M from Animoca Brands).

The academic credentials are strong: NeurIPS 2022 Best Paper Runner-up, NeurIPS 2023 Best Technical Demo, IEEE GBC 2025 Best Application Award, sole AI infrastructure recipient of an Ethereum Foundation Academic Grant (2024), and CB Insights AI 100 (2025).

## Value proposition

FLock addresses a real problem. Most AI training requires centralising data — a privacy, sovereignty, and regulatory nightmare. Federated learning trains models where the data lives. FLock adds blockchain incentives (staking, slashing, rewards) to make this economically viable and verifiable.

The usage metrics from the first 10 months tell a nuanced story:

- **Protocol fee revenue: 11.9M FLOCK (~$2.7M).** Real money from on-chain activity.
- **784,137 validation submissions** vs 9,062 training submissions — genuine validator activity.
- **196 training nodes** including 6 top-50 Kagglers — quality signal.
- **262 validators** and **1,416 delegators** — meaningful participation.
- **55,928 token holders.**

But: only **16 training tasks completed** in that period. The per-task economics are impressive ($169K revenue per task) but the volume is tiny. And task creation is still centralised — the FLock team decides what gets trained. Community task creation is planned but not shipped.

The gmFLOCK staking mechanism (Tokenomics v2, launched April 2025) is well-designed. Stake FLOCK to receive non-transferable gmFLOCK, required for AI Arena participation. Lock up to 365 days — longer lock means more gmFLOCK. 25% of circulating supply is voluntarily locked at an average of 265 days. That is genuine long-term alignment.

The healthcare use case — cross-continental hospital collaboration for blood glucose prediction without sharing patient data — demonstrates the real-world applicability of the approach.

The counter-narrative: FL Alliance, the core privacy-preserving federated learning layer, is still in testnet. The API Platform launched only in September 2025. Core platform code is partially closed-source. No smart contract audit has been published. And 68.5% of token supply is still locked — significant future dilution ahead.

Partnerships with Qwen (Alibaba Cloud) and Animoca Brands are at the MoU stage, not revenue-generating agreements.

## Tokenomics

FLOCK has a fixed supply of 1 billion tokens with approximately 315 million circulating (31.5%). TGE was December 31, 2024 on Base.

Distribution: community incentives 47%, team & shareholders 22.5%, treasury/ecosystem 18%, community airdrop 12.5%. The 66.7% community vs 33.3% insider split is better than most. Team and investor tokens have a 1-year cliff + 2-year linear vesting. Community tokens mint over 60 months with 1% monthly decay.

The gmFLOCK mechanism creates genuine lock-up: stake FLOCK to receive non-transferable gmFLOCK (required for participation). Base lock of 30 days (1:1 ratio), scaling up with longer commitments (+0.006 per additional day). 25% of circulating supply is voluntarily locked at an average of 265 days.

No burn mechanism exists. Value accrual comes through protocol fee revenue ($2.7M in 10 months) and planned revenue sharing via the API Platform. How fees flow to token holders vs the protocol treasury is not explicitly documented.

FLOCK trades at approximately $0.058 with a market cap of ~$18.4M and FDV of ~$58.2M. FDV/MCap ratio of 3.16x signals meaningful future dilution. Listed on Gate.io, Bybit, KuCoin, MEXC, Bitget, and CoinEx. Daily volume ~$1.6M. ATH was $0.667 (September 2025). Next unlock: 31 March 2026 — 16.34M FLOCK (~$944K, 1.6% of supply).

## How to participate

**Run a Training Node.** Submit AI models to training tasks. Stake FLOCK via gmFLOCK. Includes top-50 Kagglers among current participants. ML expertise required. Technical skill: advanced.

**Stake as Validator or Delegator.** Validators evaluate training submissions. Delegators stake to trusted nodes and validators. Lock FLOCK via gmFLOCK for up to 365 days. Technical skill: intermediate.

**Deploy Models.** Use the API Platform (Moonbase) to deploy trained models. Revenue sharing for contributors. Elite Trainer Programme offers 50% revenue share. Technical skill: intermediate.

## Honest assessment

### Freedom Score: 60/100 (C)

FLock has a federated learning architecture inherently designed for data privacy, strong academic credentials, and decent community token distribution. But task creation is centralised, core code is partially closed, and governance is aspirational.

**Infrastructure Decentralisation: 11/20.** 196 training nodes and 262 validators — genuine multi-party training. Task creation remains centralised to the FLock team. FL Alliance (the privacy-preserving federated learning layer) still in testnet. Smart contracts on Base inherit Ethereum security.

**Governance Decentralisation: 9/20.** DAO governance described in docs with weighted/quadratic voting. In practice, team controls task creation, protocol upgrades, and treasury. A decentralisation plan was due Q2 2025 — no evidence it was published. Governance is more described than demonstrated.

**Token Distribution Fairness: 10/15.** 66.7% community vs 33.3% team/investors — good ratio. 1-year cliff + 2-year linear vest for team. Community tokens minted over 60 months with decay. 5% airdrop to testnet participants. ~31.5% circulating after 14 months is a moderate unlock pace.

**Censorship Resistance: 8/15.** Federated learning means data never leaves participants' devices — strong privacy architecture by design. Base L2 contracts are immutable once deployed. However, task creation is centralised and the API Platform is team-operated — single points of control for what gets trained and served.

**Data Sovereignty: 10/15.** Core value proposition is data staying with owners. FL Alliance designed for privacy-preserving training without data movement. Healthcare demo validated cross-continental collaboration without data sharing. FL Alliance still in testnet — the full vision is not yet delivered.

**Open Source Transparency: 7/15.** 34 GitHub repos with some actively maintained. Training node quickstart and validator code are open source. Main FLock repo is essentially empty (README + LICENSE only). Core platform code and smart contracts not fully public. Academic papers peer-reviewed at NeurIPS and IEEE add credibility.

### Returns Score: 58/100 (D)

**Token Utility: 14/20.** FLOCK required for staking as trainer, validator, or delegator. gmFLOCK mechanism adds meaningful lock-up incentive (up to 365 days, 25% of supply voluntarily locked). Governance voting requires staking. Slashing for malicious behaviour creates genuine skin-in-the-game. Task creation will require tokens (planned). No burn mechanism.

**Value Accrual: 13/20.** Protocol generated 11.9M FLOCK ($2.7M) in fee revenue in the first 10 months — real on-chain revenue, not inflationary rewards. API Platform has revenue sharing for model contributors. Elite Trainer Programme offers 50% revenue share. Unclear how fees flow to token holders vs protocol treasury. No explicit buyback or burn.

**Supply Dynamics: 14/20.** 1B fixed supply with no additional inflation. Community tokens minted over 60 months with 1% monthly decay — controlled emission. 25% of circulating voluntarily locked via gmFLOCK (average 265 days). Team/investor cliff-locked for 1 year + 2-year linear vest. However, 68.5% of supply still locked — significant future dilution pressure.

**Revenue Sustainability: 9/25.** $2.7M protocol fees in 10 months is promising, but from only 16 training tasks — small volume. Task creation still centralised, limiting organic demand. Partnerships (Animoca, Qwen) at MoU stage. API Platform launched September 2025 — too early for revenue assessment. Revenue depends heavily on team-created tasks; community task creation not yet live.

**Liquidity & Access: 8/15.** Listed on Gate.io, Bybit, KuCoin, MEXC, CoinEx, Bitget — decent CEX coverage for a $18M project. DEX liquidity on Uniswap Base and Aerodrome. $1.6M daily volume — adequate but not deep. No Binance or Coinbase listing. Base chain only — no multi-chain deployment.

### Quadrant: B (High Freedom, Low Returns)

FLock sits in Quadrant B — genuine data sovereignty innovation with early commercial traction, but too small and too early to demonstrate sustainable returns.

### Key risks

- **16 training tasks in 10 months.** Revenue per task is strong ($169K) but the volume is tiny. Can it scale 100x?
- **Centralised task creation.** The team decides what gets trained. Community task creation is planned but not shipped.
- **68.5% of supply locked.** Significant future dilution as team, investor, and community tokens unlock over the next 3+ years.
- **FL Alliance still in testnet.** The core privacy-preserving federated learning layer — the key differentiator — is not yet in production.
- **Core platform partially closed-source.** Smart contracts and platform logic not fully public despite open source claims.
- **No smart contract audit.** A protocol handling staking and slashing with no published security audit is a concern.
- **Small market cap ($18M).** Vulnerable to large sells. $1.6M daily volume means limited exit liquidity.
- **Competition.** Bittensor, Gensyn, and others compete for decentralised AI training. FLock's federated learning approach is differentiated but unproven at scale.
- **Partnership execution.** Qwen and Animoca partnerships at MoU stage — not revenue-generating.
