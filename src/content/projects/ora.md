---
title: "Ora Protocol"
description: "Verifiable AI oracle bringing inference on-chain via opML. Co-authored ERC-7641 and ERC-7007. Genuine tech from ex-Google/EF team but token down 99.85%, effectively illiquid, and key information undisclosed."
category: "other"
token: "ORA"
status: "active"
freedomScore: 5
returnsScore: 4.2
returnsScoreBreakdown:
  tokenUtility: 12
  valueAccrual: 8
  supplyDynamics: 10
  revenueSustainability: 8
  liquidityAccess: 4
returnsScoreEvidence:
  tokenUtility: "Node staking, IMO participation, agent creation (Pump.ai), inference fees. Multiple uses but mostly transactional. Staking programme already concluded."
  valueAccrual: "OAO charges fees but flow to ORA holders unclear. ERC-7641 revenue sharing is for IMO tokens (OLM), not ORA. No buy-back or burn for ORA documented."
  supplyDynamics: "Fixed 333.3M supply. Only 16.9% circulating – massive unlock risk. Vesting schedule undisclosed. Down 99.85% from ATH. FDV/MCap ratio 5.2x."
  revenueSustainability: "180K inference calls and 20+ projects show real usage. But $300/day volume and ~$500K market cap suggest negligible revenue. Revenue model exists at tiny scale."
  liquidityAccess: "Only Uniswap V3 and PancakeSwap. No CEX listings. Daily volume $128-305. Effectively illiquid."
publishDate: 2025-03-06
draft: false
coingeckoId: "ora-coin"
launchType: "fair-launch"
chain: "Ethereum, Optimism, Base, Arbitrum, Solana"
supplyType: "capped"
maxSupply: "333,333,333 ORA"
verdict: "Genuine technical innovation in verifiable AI inference with ERC standards contributions. But the token is down 99.85%, effectively illiquid, and 83% of supply is locked with undisclosed allocation."
oymHolds: false
---

## What it does

Ora Protocol (formerly HyperOracle) is a verifiable oracle protocol that brings AI inference on-chain. It enables smart contracts to access AI models – LLaMA, Stable Diffusion, DeepSeek, Mistral, and others – with cryptographic verification that the inference was computed correctly.

The core innovation is **opML (optimistic machine learning)** – an approach that runs ML inference off-chain and posts results on-chain with fraud-proof verification. Think optimistic rollups but for AI computation:

- Inference runs off-chain for speed and cost efficiency.
- Results are posted on-chain with an optimistic assumption – correct unless challenged.
- If challenged, an interactive dispute game uses bisection to pinpoint the disagreement.
- A Fraud Proof Virtual Machine (FPVM) resolves the single disputed step on-chain.
- **AnyTrust security**: the system is secure with just one honest validator.

This is substantially cheaper and faster than zkML (zero-knowledge machine learning), which requires generating a ZK proof for every computation. opML only invokes the verification mechanism when someone disputes a result.

The product suite includes:

- **OAO (Onchain AI Oracle)** – the core verifiable inference service. Developers integrate via Solidity contracts importing the IAIOracle interface.
- **IMO (Initial Model Offering)** – tokenises AI models via ERC-7641 (Intrinsic RevShare Token), enabling revenue sharing from on-chain inference fees. The first IMO was $OLM (OpenLM).
- **RMS (Resilient Model Services)** – decentralised, verifiable API for AI models (DeepSeek, Meta-Llama, Google, Mistral, Qwen). Stage 1 live since January 2025.
- **opAgent** – on-chain perpetual agent framework. AI agents with smart contract wallets, no private key dependency.
- **Pump.ai** – permissionless on-chain agent creation, starting at 1 ORA token.

The team co-authored three Ethereum standards: **ERC-7641** (Intrinsic RevShare Token), **ERC-7007** (Verifiable AI-Generated Content Token), and **ERC-6150** (Hierarchical NFT). That is meaningful Ethereum ecosystem contribution.

Founded by **Kartin Wong** (BS University of Arizona; former software engineer at Google in cryptography and AI, and at TikTok; started crypto ~2011), **Norman Von** (CTO; supercomputer architecture background, whitehat hacker, authored the ERC standards), and **Suede Kam**. **Cathie So** (Chief Scientist) joined from the Ethereum Foundation's PSE Team.

Total funding: $23M – pre-seed ($3M led by HongShan/ex-Sequoia China and dao5, January 2023) and Series A ($20M led by Polychain Capital and HashKey Capital, June 2024).

## Value proposition

Ora's opML approach solves a genuine problem: how do you verify that an AI model produced a specific output without re-running the entire computation on-chain? The optimistic verification model – only verify when disputed – is an elegant engineering choice that makes on-chain AI economically viable.

180,000+ AI inference calls have been processed across Ethereum, Optimism, Base, Arbitrum, and other chains. 500+ nodes run the Tora client. 20+ projects are building on the platform. Trusted by Compound, Ethereum Foundation, Uniswap, and Optimism.

The IMO concept is novel – tokenising open-source AI models so that inference usage generates revenue that flows back to model contributors via ERC-7641. This could create genuine economic incentives for open-source AI development.

The counter-narrative is severe. The ORA token has lost **99.85% from its ATH** ($5.38 on TGE day to ~$0.009). Market cap is approximately $500K against $23M in VC funding. Daily trading volume is $128-305 – this token is effectively **illiquid**. You cannot meaningfully buy or sell ORA without moving the price dramatically.

Critical information is missing:

- **83% of supply is locked with no publicly disclosed allocation.** The TGE was community-first (100% of initial float to community), which sounds good – but only 16.9% of total supply is circulating. Where are the other 277 million tokens? Who holds them? What is the vesting schedule? None of this is publicly documented.
- **No audits.** A $23M-funded protocol with live inference contracts on multiple chains has no publicly available security audit.
- **No governance.** Token has governance utility per docs, but no DAO, no proposals, no voting history exists.

The technology is real and innovative. The transparency around everything else is not.

## Tokenomics

ORA has a fixed supply of 333,333,333 tokens with approximately 56.3 million circulating (16.9%). Contract address: 0x33333333FEde34409Fb7f67c6585047E1F653333.

TGE was November 19, 2024 on Uniswap V3. 100% of the initial float was made available for community purchase – no insider allocation at TGE, inspired by Vitalik's DAICO model. This is laudable in principle but obscured by the fact that 83% of total supply remains locked with undisclosed allocation.

Known allocation: 10% to ORA Points Programme. The remaining 90% is not formally documented in public sources. $23M was raised from institutional investors (Polychain, HashKey, HongShan, dao5, SevenX, Foresight Ventures) – their token allocation and vesting terms are not disclosed.

Token utility includes node staking (validators and submitters), IMO participation, protocol governance, agent creation on Pump.ai (1 ORA minimum), and OAO inference fees. The staking programme has already concluded – users can withdraw via Etherscan.

ORA trades at approximately $0.009 with a market cap of ~$500K and FDV of ~$2.6M. FDV/MCap ratio of 5.2x signals significant dilution ahead. Listed only on Uniswap V3 and PancakeSwap – no CEX listings. Daily volume $128-305. ATH was $5.38 on TGE day.

## How to participate

**Run a Tora Node.** Perform AI inference and submit results for verification. Stake ORA as validator or submitter. GPU hardware required. Technical skill: advanced.

**Build with OAO.** Integrate verifiable AI inference into smart contracts. Import the IAIOracle Solidity interface. Models available: LLaMA, Stable Diffusion, DeepSeek, Mistral. Technical skill: advanced.

**Create AI Agents.** Use Pump.ai for permissionless on-chain agent creation. 1 ORA minimum. Technical skill: basic.

## Honest assessment

### Freedom Score: 50/100 (D)

Ora has genuine technical contributions to Ethereum but falls short on transparency, governance, and token distribution disclosure.

**Infrastructure Decentralisation: 10/20.** 500+ nodes running Tora client for inference. opML uses optimistic verification with AnyTrust assumption – one honest validator sufficient. Inference runs off-chain. No evidence of node diversity or geography. Validator set composition unknown.

**Governance Decentralisation: 5/20.** Token has governance utility per docs but no evidence of an active DAO, governance proposals, or on-chain voting. Team retains significant control. No governance forum found.

**Token Distribution Fairness: 7/15.** TGE was community-first (100% float to community). But only 16.9% circulating. Full allocation for remaining 83% not disclosed. $23M raised from VCs with undisclosed token terms.

**Censorship Resistance: 9/15.** opML AnyTrust model provides reasonable censorship resistance – one honest validator is sufficient. On-chain fraud proofs. However, off-chain inference means computation itself could be censored. Model selection currently limited.

**Data Sovereignty: 7/15.** AI inference inputs and outputs are on-chain and verifiable. ERC-7007 enables content provenance. Models themselves run off-chain. No user data ownership mechanisms beyond standard blockchain transparency.

**Open Source Transparency: 10/15.** 44 public repos. Core opml repo MIT licensed (315 stars). ERC standards publicly authored. Whitepaper and 15+ research papers published. Some repos lack licences. No audits found despite $23M funding.

### Returns Score: 42/100 (D)

**Token Utility: 12/20.** Multiple use cases: node staking, IMO participation, agent creation (Pump.ai), governance, inference fees. Token velocity problem – most uses are transactional rather than lock-up. ORA points system adds engagement but dilutes direct token demand. Staking programme already concluded.

**Value Accrual: 8/20.** OAO charges fees (Model Fee + Callback Fee + Network Fee) but fee flow to ORA token holders is unclear. ERC-7641 revenue sharing exists for IMO tokens (OLM), not for ORA itself. No buy-back or burn mechanism for ORA documented. Revenue exists in theory but accrual to ORA holders is unproven.

**Supply Dynamics: 10/20.** Fixed supply of 333.3M. Only 16.9% circulating – massive unlock risk with 83% of supply in unrevealed hands. Full vesting schedule not publicly disclosed. Token down 99.85% from ATH. No burn mechanism. FDV/MCap ratio 5.2x signals significant future dilution.

**Revenue Sustainability: 8/25.** 180,000 inference calls and 20+ projects show real usage. RMS offers competitive AI model pricing. Pump.ai enables agent creation. But $300/day trading volume and ~$500K market cap suggest negligible actual revenue. Staking programme already ended. Revenue model exists at tiny scale.

**Liquidity & Access: 4/15.** Only available on Uniswap V3 and PancakeSwap. No major CEX listings. Daily volume $128-305 – effectively illiquid. Token available on Ethereum, Base, Solana, Hyperliquid but thinly traded everywhere. Cannot meaningfully trade without moving the price.

### Quadrant: B (Moderate Freedom, Low Returns)

Ora sits in Quadrant B – genuine technical innovation with near-zero commercial traction and an effectively untradeable token.

### Key risks

- **99.85% from ATH.** $5.38 to ~$0.009. Among the worst price performances in the research universe.
- **Effectively illiquid.** $128-305 daily volume. No CEX listings. Cannot trade without dramatic price impact.
- **83% of supply undisclosed.** Only 16.9% circulating. Full allocation and vesting for the remaining 277M tokens not publicly documented.
- **No audits.** A $23M-funded protocol with live inference contracts on multiple chains has no published security audit.
- **No governance.** Governance is claimed but no proposals, votes, or DAO infrastructure exists.
- **$500K market cap vs $23M raised.** The gap between funding and valuation suggests either catastrophic value destruction or a slow rug by insiders.
- **Core repo activity slowing.** opml repo last pushed December 2024 – several months of apparent inactivity on the primary research output.
- **opML verification untested at scale.** AnyTrust model is theoretically sound but has not been tested under adversarial conditions at meaningful scale.
- **Competition.** Chainlink Functions, Ritual, and other AI oracle approaches compete for the verifiable inference market.
