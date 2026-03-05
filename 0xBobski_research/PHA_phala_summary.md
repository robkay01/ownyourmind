# Phala Network (PHA) — Research Summary

## Research Meta
- **Researcher:** Claude Code (orchestrated by Rob Kay / @0xBobski)
- **Date:** 2026-03-05
- **Version:** 1
- **Status:** draft

---

## Executive Summary

Phala Network is a decentralised confidential computing cloud that uses hardware Trusted Execution Environments (TEEs) to run AI workloads privately. The core value proposition is straightforward: even the infrastructure provider cannot see your data during computation. Originally a Polkadot parachain (since 2022), Phala migrated to an Ethereum L2 (Op-Succinct rollup via Conduit) in November 2025 and rebranded from phala.network to phala.com in September 2025.

The project has genuine technical differentiation — TEE-based confidential computing is real, not vapourware — and has achieved early commercial traction with 398 paid cloud users and a claimed $2M+ ARR. SOC 2 Type I and HIPAA compliance, plus the donation of its dstack SDK to the Linux Foundation, signal serious enterprise ambitions. The ElizaOS V2 integration and NEAR partnership provide concrete usage channels beyond speculative positioning.

However, the "decentralised" label needs heavy qualification. The L2 is Stage 0 on L2Beat with a centralised sequencer, permissioned proposer, and instantly upgradable contracts — meaning the team retains full control. Governance downgraded from Polkadot's on-chain system to Snapshot + Safe multisig. Legacy metrics (758K daily agent executions, 35K workers) derive from the retired parachain, not the current infrastructure. The freedom score lands at 55/100 (C) — competent technology wrapped in centralised infrastructure.

---

## What It Actually Does

Phala runs a cloud computing service where your data stays private even from the people running the servers. It does this using TEEs — hardware-enforced sealed environments on the processor itself. You submit a workload (typically AI inference or an autonomous agent), the TEE processes it in an enclave that nobody can peek into, and cryptographic attestation proves the code ran correctly without tampering.

In practical terms, you can:
- Deploy Docker containers that run as confidential VMs on GPU hardware (H100/H200/B200)
- Run AI agents with guaranteed privacy (the "AI coprocessor" pitch)
- Get remote attestation certificates proving your computation was genuinely private

The managed service (Phala Cloud) offers on-demand pricing at $3.50/hr for an H200, with $20 free credits for new users. For developers who want to self-host, the open-source dstack SDK converts standard Docker containers into confidential VMs.

---

## How It Works (Technical)

Phala operates a three-layer architecture:

**Layer 1 — Ethereum L2 (Settlement)**
An Op-Succinct rollup with SP1 zero-knowledge proofs, deployed via Conduit. This handles token transfers, staking, governance, and worker registration. It settles to Ethereum mainnet but is currently Stage 0 — the team controls the sequencer and can upgrade contracts instantly.

**Layer 2 — TEE Compute**
The actual workload layer. Uses dstack Confidential VMs running on Intel TDX processors paired with NVIDIA GPUs (H100/H200/B200 with Confidential Computing enabled). When you deploy a workload, it runs inside a hardware enclave. The TEE generates a remote attestation — a cryptographic proof that specific code ran on genuine, unmodified hardware. This is the part that actually delivers on the privacy promise.

**Layer 3 — Decentralised Key Management**
A peer-to-peer network using multi-party computation (MPC) for key sharing. This manages the encryption keys that protect data entering and leaving TEE enclaves, preventing any single node from holding complete keys.

The dstack SDK (donated to the Linux Foundation under the Confidential Computing Consortium) is the bridge between standard containerised applications and confidential execution. Developers write normal Docker applications; dstack handles the TEE wrapping.

---

## Tokenomics

| Parameter | Value |
|---|---|
| Token | PHA (ERC-20) |
| Total Supply | 1,000,000,000 (fixed) |
| Circulating | ~831M (83.1%) |
| Price | ~$0.044 |
| Market Cap | ~$36.4M |
| FDV | ~$51.5M |
| ATH / ATL | $1.41 (May 2021) / $0.021 (Feb 2026) |

**Allocation:** 70% mining/compute rewards, 15% private sale, 9% airdrop, 5% team, 1% other rewards.

The 70% allocation to mining rewards is unusually generous by industry standards, and 5% team allocation is notably low. The private sale portion (15%) had zero lock-up, which is a concern — early investors could (and likely did) sell immediately.

**Emission model:** Disinflationary, with a 25% reduction every 180 days. Current daily emission is approximately 135K PHA/day.

**Staking:** PHA converts to vPHA for staking. Nominal APY sits at ~8.31%, but real yield after inflation is roughly 3.3%. Unstaking requires a 21-day waiting period.

**Exchange listings:** Binance, Kraken, OKX, Coinbase, Bybit — solid liquidity coverage.

---

## How To Participate

**Stake PHA (Low barrier)**
Convert PHA to vPHA and earn ~8.31% nominal APY (~3.3% real). The 21-day unstaking period is the main friction. Available through the Phala staking interface.

**Run a GPU Worker (High barrier)**
Requires an H100, H200, or B200 GPU with Intel TDX-capable CPU. Collateral: 1,250–2,250 vPHA per GPU. Hardware costs $25–40K, and onboarding requires email registration (permissioned). This is not a casual entry point.

**Build on Phala Cloud (Moderate barrier)**
Deploy Docker containers with $20 free credits. The @phala/cloud SDK provides programmatic access. Suitable for developers wanting confidential AI inference or agent hosting.

**Use as a Consumer (Low barrier)**
API access for confidential AI inference, pay per hour. No staking or hardware required.

---

## Freedom Score: 55/100 (Grade: C)

### Infrastructure Decentralisation — 8/20

The L2 is Stage 0 on L2Beat. The sequencer is centralised, the proposer is permissioned, and smart contracts are instantly upgradable by the team with no exit window for users. The dstack codebase has 87.4% commit concentration in a single developer — a bus-factor risk. While 29,478 devices are registered, the number of active TDX workers (post-SGX deprecation) is unknown. The migration from Polkadot removed the shared security of a decentralised relay chain.

### Governance Decentralisation — 7/20

Governance downgraded significantly during the L2 migration. Polkadot-era on-chain governance (referenda, council) was replaced with Snapshot voting plus a Safe multisig controlled by the team. This is a material step backwards. Snapshot votes are non-binding signals; the multisig executes. Effectively team-governed with community consultation.

### Token Distribution Fairness — 10/15

The 70/15/9/5/1 split is genuinely favourable compared to most projects — 70% to mining rewards and only 5% to the team is rare. The knock is the zero lock-up on the private sale allocation. At 83.1% circulating, most unlocks are behind us. Total funding of ~$11.43M is modest, suggesting limited VC overhang.

### Censorship Resistance — 8/15

TEE computation-level privacy is the real deal — data genuinely cannot be observed during processing. However, the centralised sequencer can censor transactions, GPU worker onboarding is gated (email registration required), and the terms of service are governed by California law. The privacy guarantee applies within the enclave but not at the network access layer.

### Data Sovereignty — 11/15

The strongest dimension. Zero-knowledge properties within TEEs are hardware-enforced, not just promised. Remote attestation provides cryptographic proof of computation integrity. The self-hosted dstack option means you can run the entire stack yourself without relying on Phala's managed service. The gaps come from sequencer-level metadata exposure and Phala Cloud registration requirements.

### Open Source & Transparency — 11/15

Apache-2.0 licensing across core repositories. dstack donated to the Linux Foundation's Confidential Computing Consortium — a meaningful credibility signal. Two completed audits (Code4rena and EtherAuthority). Annual transparency reports published. The gap is the instantly upgradable L2 contracts, which undermine the "don't trust, verify" principle regardless of how transparent the code is.

---

## Honest Assessment

### What Works Today

1. **TEE confidential computing is real and differentiated.** This is not a whitepaper promise — the hardware enclaves exist, remote attestation works, and the technology genuinely prevents infrastructure providers from seeing user data.
2. **SOC 2 Type I and HIPAA compliance** open doors to enterprise and healthcare use cases that most crypto projects cannot touch.
3. **ElizaOS V2 integration and NEAR partnership** provide concrete usage channels with existing developer ecosystems.
4. **398 paid users and claimed $2M+ ARR** represent early but real commercial traction — more than most DePIN projects can demonstrate.
5. **dstack in the Linux Foundation** is a genuine credibility signal. Open-source donations to established foundations are harder to fake than partnerships.
6. **Competent WireTap security response** — when a vulnerability was disclosed, the team handled it transparently and migrated from deprecated SGX to TDX.

### What's Hype

1. **758K daily agent executions** were on the retired Polkadot parachain, not the current L2. Legacy metrics presented as current performance.
2. **35K workers** are mostly decommissioned SGX miners from the previous architecture. Active TDX worker count is unknown.
3. **$2M ARR is partially verified** — some portion appears to be treasury spending rather than confirmed external revenue.
4. **"Decentralised" cloud is Stage 0** with centralised sequencer, permissioned proposer, and instant upgrade capability. The word "decentralised" is doing heavy lifting.
5. **42,900 DAU are on-chain addresses** (including worker nodes), not distinct human users.

### Key Risks

1. **L2 Stage 0** — Contracts are instantly upgradable with no exit window. The team can change the rules at any time. This is the single largest centralisation risk.
2. **87.4% dstack commit concentration** in one developer. If that person leaves, the core SDK is at serious risk.
3. **Intel TDX + NVIDIA CC hardware dependency** — The entire security model rests on two companies' hardware remaining trustworthy and available.
4. **$633K L2 TVL** — Near-zero economic activity on the actual chain. The L2 is live but largely empty.
5. **Multiple simultaneous migrations** (Polkadot to Ethereum, SGX to TDX, phala.network to phala.com) create compounding execution risk.
6. **DWF Labs as investor and market maker** — DWF's reputation for market manipulation is well-documented. Their involvement warrants scrutiny of trading patterns.

---

## Key Data Points

| Metric | Value |
|---|---|
| Token Price | ~$0.044 |
| Market Cap | ~$36.4M |
| FDV | ~$51.5M |
| Circulating Supply | 831M / 1B (83.1%) |
| Staking APY | ~8.31% nominal, ~3.3% real |
| L2 TVL | $633K |
| Active Devices (registered) | 29,478 |
| Phala Cloud Paid Users | 398 |
| Cloud Total Users | 10,004 |
| Daily Agent Executions (peak) | 758,270 (Dec 2024, legacy chain) |
| Freedom Score | 55/100 (C) |
| Team Size | ~23–28 |
| Total Funding | ~$11.43M |
| GPU Worker Collateral | 1,250–2,250 vPHA per GPU |
| Unstaking Period | 21 days |
| Cloud Pricing (H200) | $3.50/hr on-demand |

---

## Research Gaps

1. Current daily mining emission rate (exact figure post-halvings)
2. Exact Snapshot governance space URL
3. DWF Labs investment amount (undisclosed)
4. L2 rollup contract audit status
5. Phala Cloud revenue vs treasury spending breakdown
6. Number of active TDX workers (post-SGX deprecation)
7. HuggingFace presence (none found — unexpected for an AI infrastructure project)
8. Active grants programme status post-L2 migration
9. ACRA registration details for Singapore entity
10. Real yield calculation methodology

---

## Sources Consulted

1. [Phala Network — Official Site](https://phala.com)
2. [Phala Documentation](https://docs.phala.com)
3. [Phala GitHub Organisation](https://github.com/Phala-Network)
4. [PHA Token — Etherscan](https://etherscan.io)
5. [Phala L2 — L2Beat](https://l2beat.com/scaling/projects/phala)
6. [Phala Staking — StakingRewards](https://stakingrewards.com)
7. [Phala ICO Data — CryptoRank](https://cryptorank.io/ico/phala)
8. [Phala ICO Data — ICO Drops](https://icodrops.com/phala-network)
9. [Phala Project Data — ChainBroker](https://chainbroker.io/projects/phala)
10. [Phala Market Data — CoinCarp](https://coincarp.com)
11. [Code4rena Phala Audit Report](https://code4rena.com/reports/2024-03-phala-network)
12. [dstack Security Audit — PDF](https://phala.com/dstack/dstack-audit.pdf)
13. [Phala on DePINscan](https://depinscan.io/projects/phala)
14. [Phala Community Forum](https://forum.phala.network)
15. [Phala 2025 Annual Report](https://phala.com/posts/phala-2025-report)
16. [Phala 2024 Year in Review](https://phala.com/posts/phala-network-2024-year-in-review)
17. [WireTap Response & SGX Deprecation](https://phala.com/posts/response-to-wiretap-sgx-deprecation)
18. [ElizaOS V2 Beta Launch on Phala Cloud](https://phala.com/posts/launch-eliza-v2-beta-agent-swarms-with-tee-security-on-phala-cloud)
19. [Phala SOC 2 Type 1 Announcement](https://phala.com/posts/phala-soc-2-type-1)
20. [WireTap Vulnerability Disclosure](https://wiretap.fail)
21. [Phala Partnerships Page](https://phala.com/partnerships)
22. [Phala Cloud Launch Post](https://phala.com/posts/phala-cloud-the-next-chapter-in-decentralized-confidential-computing)
23. [Governance Vote Coverage — Cryptopolitan](https://cryptopolitan.com)
24. [EtherAuthority Audit Report](https://etherauthority.io)
