---
title: "Oasis Network"
description: "Privacy-first Layer 1 with confidential smart contracts via TEE-powered ParaTimes. ROFL mainnet live, institutional pilot with Franklin Templeton — but TVL still under $1M after five years."
category: "data"
token: "ROSE"
status: "active"
freedomScore: 6
returnsScore: 4.6
returnsScoreBreakdown:
  tokenUtility: 13
  valueAccrual: 7
  supplyDynamics: 14
  revenueSustainability: 5
  liquidityAccess: 7
returnsScoreEvidence:
  tokenUtility: "Gas fees across ParaTimes, PoS staking (min 100 ROSE), governance. ROFL mainnet adds off-chain compute utility. Accumulated Finance liquid staking (stROSE) creates additional token utility."
  valueAccrual: "Transaction fees to validators still negligible. Staking rewards from inflation, not revenue. No burn. TVL improved to ~$700K on Sapphire via Accumulated Finance but still generates minimal fees."
  supplyDynamics: "10B fixed cap, 75% circulating. FDV/mcap 1.33x – best in DeAI. Most insider vesting near completion. Mature supply profile."
  revenueSustainability: "Still near-zero protocol revenue. TVL peaked at $7.5M (Apr 2025) but fell back to under $1M. SemiLiquid/Franklin Templeton institutional pilot is promising but pre-revenue. Product-market fit still unproven."
  liquidityAccess: "Binance, Coinbase, KuCoin, Bybit, MEXC, Gate.io. ~$6M daily volume. Good exchange coverage, moderate depth."
publishDate: 2025-03-06
updatedDate: 2026-03-12
draft: false
coingeckoId: "oasis-network"
launchType: "ico"
chain: "Oasis Network (own L1)"
supplyType: "capped"
maxSupply: "10,000,000,000 ROSE"
verdict: "The technology works and is finally shipping product — ROFL mainnet, institutional pilots, liquid staking. But TVL peaked at $7.5M then crashed back under $1M. Promising direction, unproven traction."
oymHolds: false
podcastUrl: "/podcast/Own-Your-Mind-019-Oasis.mp3"
---

## What it does

Oasis Network is a Layer 1 blockchain designed from the ground up for confidential computing. Smart contracts on Oasis can process data that stays encrypted even from the nodes running them. Not "privacy optional" or "privacy coming soon" – confidential execution is the core architecture.

The network uses a two-layer design. The **Consensus Layer** runs CometBFT (formerly Tendermint) proof-of-stake with 120 validator slots. The **ParaTime Layer** runs multiple parallel execution environments concurrently, each with its own compute characteristics:

- **Sapphire** – The flagship confidential EVM-compatible ParaTime. Runs Solidity contracts inside Intel SGX trusted execution environments. Data enters encrypted, is decrypted only inside the hardware enclave, processed, and re-encrypted before output. 6-second finality. 99%+ lower fees than Ethereum. The only production confidential EVM in crypto.
- **Cipher** – Wasm-based confidential ParaTime (also using SGX). Supports Rust smart contracts with full confidentiality.
- **Emerald** – Standard non-confidential EVM ParaTime for applications that do not need privacy.

The separation of consensus from execution is the architectural differentiator. Each ParaTime operates independently – Sapphire can be confidential while Emerald runs standard EVM, all sharing the same consensus layer. This is more modular than most L1 designs.

**ROFL (Runtime Off-chain Logic)** launched on mainnet on 2 July 2025, enabling off-chain computation inside TEEs with on-chain attestation. Positioned as a "Trustless AWS," ROFL supports AI inference, oracle feeds, game hosting, and autonomous agents. Early projects include Zeph (privacy-first AI companion) and WT3 (autonomous trading agent, $100K seed from the Foundation). This moves Oasis beyond smart contracts into general-purpose confidential compute.

Founded in 2018 by **Dawn Song** (CEO), who is the Forrest G. Hamrick Professor of Engineering at UC Berkeley, a MacArthur Fellow (2010), a Guggenheim Fellow, and the most-cited scholar in computer security per AMiner. She co-invented Flash OFDM, the technology underlying 4G mobile networks. This is arguably the most credentialled founder in all of crypto.

Other co-founders include Bobby Jaros (COO), Noah Johnson (CPO), and Raymond Cheng (CTO). The entity is Oasis Labs Inc., based in Berkeley, California, with a separate Oasis Foundation governing the network.

Mainnet launched 18 November 2020.

## Value proposition

Confidential computing that actually works in production. Oasis has been running confidential smart contracts since 2020 – not as a testnet, not as a roadmap item, but as a functioning network processing 25,000-31,000 daily transactions on Sapphire. If you need EVM-compatible privacy today, Sapphire is one of the only production options. Since July 2025, ROFL extends this to off-chain compute — AI inference, oracles, and autonomous agents running inside TEEs with on-chain attestation.

The technical approach uses Intel SGX trusted execution environments. Data is encrypted at rest and in transit, and only decrypted inside the hardware enclave. Even the node operators cannot see the data they are processing. Sapphire adds confidential state (the contract's storage is encrypted), end-to-end encryption (data is encrypted from the user's browser to the enclave), and confidential randomness.

The counter-narrative used to write itself as "$288K TVL after five years." That number has moved — Sapphire TVL peaked at $7.5M in April 2025, driven largely by Accumulated Finance's liquid staking protocol (stROSE), which locked 12M+ ROSE. But the peak did not hold. By early 2026, Sapphire TVL had fallen back to around $700K. The trajectory shows the ecosystem can attract capital, but not retain it. Still less TVL than a mid-tier Uniswap pool, though no longer an embarrassment.

The ICO was in July 2018 at $0.02 per ROSE. The token hit $0.60 in January 2022. It now trades at ~$0.012. ICO investors who held through are at negative 40% ROI after seven years. The token is down 98% from its all-time high.

Two developments shift the picture. First, **ROFL mainnet** (July 2025) moves Oasis from "privacy L1" to "confidential compute platform" — off-chain AI inference, oracles, and autonomous agents running inside TEEs with on-chain verification. This is the right product for the AI-privacy moment, if they can attract builders. Second, the **SemiLiquid institutional pilot** (December 2025) with Franklin Templeton, Zodia Custody, M11Credit, and Presto Labs demonstrated tokenised money-market fund shares used as collateral, with the credit workflow running on Oasis's confidential infrastructure. Oasis's strategic investment arm backed SemiLiquid as its first venture.

The privacy compute market may simply not be ready yet. Or Oasis may have failed to capture it despite being first. The ROFL launch and institutional pilot suggest the team has shifted strategy from "build it and they will come" to actively pursuing AI and institutional use cases. The TVL spike-and-crash shows demand exists but retention does not. Whether ROFL and institutional partnerships change this trajectory is the question for 2026.

For the sovereignty thesis, Oasis is architecturally one of the strongest projects reviewed. Confidential smart contracts where node operators cannot see the data they process is exactly what data sovereignty means in practice. Sapphire's confidential EVM is a real, usable tool for privacy-preserving applications today.

## Tokenomics

ROSE has a fixed maximum supply of 10 billion tokens – no inflation beyond the staking reward allocation. Distribution:

- **Staking Rewards:** 23.5% – distributed over time to validators and delegators, declining over the first 4 years
- **Backers:** 23% – a16z, Polychain, Pantera, Binance Labs, Accel, Foundation Capital. Vesting extends to ~2030.
- **Core Contributors:** 20% – team and early contributors. Vesting extends to ~2030.
- **Community & Ecosystem:** 18.5% – grants, ecosystem fund ($235M assembled from additional backers including Dragonfly, Electric Capital, Jump Capital)
- **Foundation Endowment:** 10% – Oasis Foundation operations
- **Strategic Partners & Reserve:** 4.7%
- **Lockdrops:** 0.3% – completed

$46 million was raised in a private sale (July 2018) led by Andreessen Horowitz at $0.02 per token. This was the only fundraising round – no public sale, no ICO, no follow-on raises. All subsequent ecosystem funding was for grants, not equity or tokens.

Circulating supply is approximately 7.5 billion ROSE (75%). The FDV-to-market-cap ratio of 1.33x is the best in DeAI – meaning minimal remaining dilution. Most insider vesting is near or past completion. This is the most mature supply profile we have reviewed.

ROSE trades at approximately $0.012 with a market cap around $89 million and FDV of ~$120 million. Daily volume approximately $6 million. Listed on Binance, Coinbase, KuCoin, Bybit, MEXC, and Gate.io.

Staking is available with a minimum of 100 ROSE (~$1.20). APY approximately 5% (declining over time). 14-day unbonding period. Slashing only for double-signing with a minimum 100 ROSE penalty – one of the most lenient slashing regimes in PoS.

## How to participate

**Stake ROSE.** Delegate to validators. Minimum 100 ROSE (~$1.20 at current prices). ~5% APY. 14-day unbonding. Slashing only for double-signing. Must sign 75%+ of blocks per epoch to receive rewards. Technical skill: basic.

**Liquid stake via Accumulated Finance.** Stake ROSE and receive stROSE, which can be used as collateral or in DeFi while earning staking yield. Runs on Sapphire with confidentiality guarantees. Technical skill: basic.

**Run a validator.** Compete for one of 120 validator slots. Intel SGX hardware required for confidential ParaTime compute nodes. Technical skill: advanced. Validator commission plus staking rewards.

**Build on Sapphire.** Deploy confidential EVM dApps. Full Solidity compatibility with added privacy features (confidential state, encrypted inputs/outputs, confidential randomness). Ecosystem grants available from $235M fund. Technical skill: intermediate (if you know Solidity, you can build on Sapphire).

**Build a ROFL app.** Deploy off-chain compute inside TEEs with on-chain verification. Suited to AI inference, oracles, trading agents, and data processing that requires privacy. Foundation seed funding available for promising projects. Technical skill: advanced.

## Honest assessment

### Freedom Score: 60/100 (C)

Oasis has genuine production-ready confidential computing with strong open-source development, but practical limitations exist.

**Infrastructure Decentralisation: 13/20.** 120 validator slots with 114 active validators. Multiple ParaTimes running in parallel. CometBFT PoS consensus. However, Intel SGX dependency creates hardware vendor centralisation. Sapphire has only 34 compute nodes. ParaTime separation provides architectural resilience but SGX requirement limits who can run compute nodes.

**Governance Decentralisation: 8/20.** PoS-based validator governance. Oasis Foundation controls protocol upgrades. No documented community governance mechanism beyond validator voting. Development direction controlled by Oasis Labs and the Foundation.

**Token Distribution Fairness: 7/15.** 43% insider allocation (Backers 23% + Core Contributors 20%) was high at launch. However, 75% is now circulating after 5+ years – most vesting is near completion. No public sale. FDV/mcap ratio of 1.33x is among the best in DeAI.

**Censorship Resistance: 11/15.** Confidential smart contracts mean data is encrypted even from node operators – strong censorship resistance by design. Sapphire is the only production confidential EVM. However, Intel SGX has known side-channel vulnerabilities. 120 validator cap limits resistance versus uncapped sets.

**Data Sovereignty: 12/15.** Confidential computing is the core product. End-to-end encryption, confidential state, confidential randomness. One of the strongest production data sovereignty implementations in crypto. Score limited by SGX vulnerability surface and minimal adoption after 5+ years.

**Open Source Transparency: 11/15.** 80+ repos, 10,228 commits, 57 contributors. Core, SDK, wallet, CLI all open source. Active development through March 2026. However, no publicly verifiable core protocol audit from top-tier firms.

### Returns Score: 46/100 (D)

**Token Utility: 13/20.** ROSE is used for gas fees across all ParaTimes, PoS staking (minimum 100 ROSE), and governance. ROFL mainnet (July 2025) adds off-chain compute utility — ROFL apps pay gas and attestation fees in ROSE. Accumulated Finance's liquid staking creates additional utility via stROSE. Utility is broadening but ROFL adoption is early-stage.

**Value Accrual: 7/20.** Transaction fees accrue to validators but remain low. Staking rewards come from the 23.5% staking allocation, not protocol revenue. No fee distribution to non-staking holders. No burn mechanism. TVL improved to ~$700K on Sapphire (from $288K) and peaked at $7.5M, but fee generation remains negligible. SemiLiquid institutional pilot could drive institutional transaction volume, but is pre-revenue. Marginal improvement.

**Supply Dynamics: 14/20.** 10B fixed max supply with 75% circulating – the most mature supply profile in DeAI. FDV/mcap ratio of 1.33x means minimal remaining dilution. Most insider vesting near completion. No burn but also no meaningful inflation beyond declining staking emissions. Strong supply dynamics in a project with limited adoption.

**Revenue Sustainability: 5/25.** Still near-zero protocol revenue after 5+ years of mainnet operation. TVL peaked at $7.5M (April 2025) via Accumulated Finance liquid staking but fell back to under $1M. The SemiLiquid pilot with Franklin Templeton and Zodia Custody demonstrates institutional interest in confidential infrastructure for RWA collateral — a plausible revenue pathway. ROFL positions Oasis for the AI-privacy compute market. Score raised from 3 to reflect genuine strategic progress, but revenue remains aspirational.

**Liquidity & Access: 7/15.** Listed on Binance, Coinbase, KuCoin, Bybit, MEXC, Gate.io. Daily volume ~$6M. Good exchange coverage for tier-1 and tier-2 CEXs. Volume has declined from prior levels; market cap (~$89M) is low relative to these listings.

### Quadrant: B (High Freedom, Low Returns)

Oasis sits in Quadrant B – a sovereignty play with unproven economics. The confidential computing architecture is one of the strongest in crypto, but the market has not rewarded it.

### Key risks

- **TVL spike-and-crash.** Sapphire TVL peaked at $7.5M (April 2025) then fell back under $1M. The ecosystem can attract capital but has not demonstrated retention. Improved from $288K but still negligible for a funded L1.
- **98% from ATH.** Negative ICO ROI after 7+ years. ROSE at ~$0.012. Investor patience is exhausted.
- **Intel SGX dependency.** Known side-channel vulnerabilities. Hardware vendor centralisation. SGX deprecation risk. ROFL adds Intel TDX support but same vendor.
- **ROFL adoption is unproven.** Mainnet launched July 2025 but only two early projects (Zeph, WT3). The "Trustless AWS" positioning needs builders to materialise.
- **Institutional pilot ≠ institutional adoption.** The SemiLiquid/Franklin Templeton pilot is promising but pilots often do not convert to production deployments. No revenue yet.
- **Possible team downsizing.** Third-party estimates suggest the team may have shrunk significantly. Unverified but concerning.
- **No published core protocol audits.** Private bug bounty exists but is not a substitute for published audit reports from recognised firms.
- **Privacy L1 competition.** Nillion (MPC/HE), Secret Network (SGX like Oasis), Phala (TEE compute) all compete for the same market.
