---
title: "Phala Network"
description: "A confidential computing cloud using hardware TEEs. Your data stays private even from the infrastructure provider. Real tech, but the 'decentralised' label needs heavy qualification."
category: "compute"
token: "PHA"
status: "active"
freedomScore: 6
returnsScore: 5.0
returnsScoreBreakdown:
  tokenUtility: 14
  valueAccrual: 8
  supplyDynamics: 10
  revenueSustainability: 10
  liquidityAccess: 8
returnsScoreEvidence:
  tokenUtility: "Payment for confidential compute. Staking. Worker bonding."
  valueAccrual: "Fee mechanism exists but centralized service dominates."
  supplyDynamics: "1B cap. Inflationary via staking rewards. Moderate allocation."
  revenueSustainability: "Real product. Growing enterprise interest. Early stage."
  liquidityAccess: "Tier-1 CEX listings: Binance, Coinbase, OKX, Kraken, Bybit. 97% below ATH dampens volume and sentiment."
publishDate: 2025-03-05
draft: false
coingeckoId: "pha"
launchType: "ico"
chain: "Ethereum L2"
supplyType: "capped"
maxSupply: "1,000,000,000 PHA"
verdict: "Genuine confidential computing tech with enterprise compliance credentials. The privacy works. The decentralisation does not – yet."
oymHolds: false
podcastUrl: "/podcast/Own-Your-Mind-018-Phala.mp3"
---

## What it does

Phala runs a cloud computing service where your data stays private even from the people running the servers. It does this using Trusted Execution Environments (TEEs) – hardware-enforced sealed environments on the processor itself. You submit a workload (typically AI inference or an autonomous agent), the TEE processes it in an enclave that nobody can peek into, and cryptographic attestation proves the code ran correctly without tampering.

In practical terms, you deploy Docker containers that run as confidential VMs on NVIDIA H100, H200 or B200 GPUs paired with Intel TDX processors. The managed service (Phala Cloud) charges $3.50/hr for an H200, with $20 free credits for new users. For developers who want to self-host, the open-source dstack SDK converts standard containers into confidential VMs. dstack has been donated to the Linux Foundation's Confidential Computing Consortium, which is a meaningful credibility signal – open-source donations to established foundations are harder to fake than partnerships.

Founded in 2018 by Marvin Tong (ex-Tencent, ex-Didi), Hang Yin (ex-Google, Bitcoin Gold co-founder) and Zhe Wang (serial entrepreneur, 20+ patents). The team is roughly 25 people. Entity structure is Hashforest Technology Pte. Ltd. in Singapore with a subsidiary in California. Originally a Polkadot parachain (since 2022), Phala migrated to an Ethereum L2 (Op-Succinct rollup via Conduit) in November 2025 and rebranded from phala.network to phala.com in September 2025.

The project sits in the DeAI-adjacent category. Phala is general-purpose confidential computing that has pivoted toward AI as its primary use case. The TEE technology is horizontal – it runs trading bots, healthcare analytics and LLM inference on the same infrastructure. AI is the highest-demand workload, not the founding thesis.

## Value proposition

Privacy at the computation layer is the core differentiator. Most "privacy" projects protect data at rest or in transit. Phala protects data during processing. The TEE ensures that even the infrastructure operator cannot observe what is happening inside the enclave. Remote attestation provides cryptographic proof that specific code ran on genuine, unmodified hardware.

SOC 2 Type I and HIPAA compliance certifications open doors that most crypto projects cannot reach. Healthcare, finance and enterprise clients need these compliance boxes ticked before any conversation about adoption begins. Phala is the only TEE cloud in the decentralised space with both certifications.

The ElizaOS V2 integration means AI agent swarms can run on Phala Cloud with TEE security out of the box. The NEAR partnership provides another concrete usage channel. These are real integrations generating actual usage, not vaporware announcements.

398 paid users and a claimed $2M+ annual recurring revenue represent early commercial traction. That is more than most DePIN projects can demonstrate. But context matters: the "$2M ARR" is partially verified – treasury spending in 2024 was $2.1M but Phala Cloud revenue is not separately disclosed. And 398 paid users, while real, is a very small base for a cloud infrastructure business.

The counter-narrative is the gap between the privacy promise and the decentralisation reality. The L2 is Stage 0 on L2Beat – centralised sequencer, permissioned proposer, instantly upgradable contracts. The team can change the rules at any time with no exit window for users. You are trusting the operator, which is exactly what decentralisation is supposed to eliminate. The TEE privacy guarantee applies within the enclave but the network itself is centralised.

## Tokenomics

PHA launched via private sale and airdrop in 2020. Total raise across all rounds: approximately $11.43M ($10M strategic led by IOSG Ventures, $1.4M and $28K in private rounds, plus an undisclosed amount from DWF Labs in January 2024). Notable backers include IOSG Ventures, SNZ Holding, Waterdrip Capital and DWF Labs. Alameda Research (defunct) was also an early backer.

Total supply is fixed at 1 billion PHA. Long-term distribution:

- **Mining / compute rewards:** 70%
- **Private sale:** 15% (zero lock-up – 100% at TGE)
- **Airdrop:** 9%
- **Team and founding devs:** 5%
- **Other rewards:** 1%

The 70% allocation to mining rewards is genuinely generous, and 5% team allocation is notably low by industry standards. The knock is the zero lock-up on the 15% private sale – early investors could sell immediately at TGE. All investor vesting is now fully complete. 83.1% of supply is circulating.

Emission model is disinflationary, with a 25% reduction every 180 days. Current daily emission is approximately 135,000 PHA. Annual inflation runs at roughly 5%.

Staking converts PHA to vPHA on Ethereum. Nominal APY sits at approximately 8.31%, but real yield after inflation is roughly 3.3%. Unstaking requires a 21-day waiting period. Gatekeepers can be slashed; GPU workers are removed for non-compliance.

DWF Labs serves as both investor and market maker. DWF's reputation for market manipulation is well-documented in the industry. Their dual role warrants scrutiny of trading patterns.

Market snapshot: PHA trades at approximately $0.044 with a $36.4M market cap ($51.5M FDV). That is 97% below the all-time high of $1.41 from May 2021. Listed on Binance, Kraken, OKX, Coinbase and Bybit – strong liquidity coverage across major exchanges.

## How to participate

**Stake PHA.** Convert PHA to vPHA via liquid staking on Ethereum. Earn approximately 8.31% nominal APY (roughly 3.3% real after inflation). The 21-day unstaking period is the main friction. Available through the Phala staking interface.

**Run a GPU worker.** Requires an NVIDIA H100, H200 or B200 GPU with an Intel TDX-capable CPU. Collateral: 1,250–2,250 vPHA per GPU. Hardware costs $25,000–40,000 per GPU, and onboarding requires email registration – this is not self-service. The technical barrier and capital requirement make this a serious commitment.

**Build on Phala Cloud.** Deploy Docker containers with $20 free credits. The @phala/cloud npm package provides 60+ methods for programmatic access. Documentation is comprehensive (100+ pages). A legacy Builders Program offered grants up to $50K, though its status post-L2 migration is unclear. Monthly Builders Challenges offer $2,500 prizes.

**Use as a consumer.** API access for confidential AI inference at $3.50/hr for H200 on-demand. No staking or hardware required.

## Honest assessment

**What works.** TEE confidential computing is real and differentiated. This is not a whitepaper promise – hardware enclaves exist, remote attestation works, and the technology genuinely prevents infrastructure providers from seeing user data. SOC 2 Type I and HIPAA compliance position the project for enterprise adoption that most crypto projects cannot access. The ElizaOS V2 integration and NEAR partnership provide concrete usage channels. dstack in the Linux Foundation is a genuine credibility signal. The WireTap security response was competent – when academic researchers demonstrated an SGX key extraction attack, the team shut down all SGX workers and migrated to Intel TDX. Transparent handling of a real vulnerability.

**What does not work yet.** 398 paid users is early commercial traction, not product-market fit. The L2 has $633K in total value secured – near-zero economic activity on the actual chain. Legacy metrics do heavy lifting in Phala's marketing: "758,000 daily agent executions" were on the now-retired Polkadot parachain, not the current infrastructure. "35,000+ workers" are mostly decommissioned SGX miners. "42,900 DAU" are on-chain addresses including worker nodes, not distinct human users. The governance model downgraded from Polkadot's on-chain referenda to Snapshot voting plus a Safe multisig – that is a step backwards, not forwards. No HuggingFace presence is notable for a project positioning itself in AI infrastructure.

**The risk.** The L2 is Stage 0 – instantly upgradable contracts with no exit window. This is the single largest centralisation risk. The dstack codebase has 87.4% commit concentration in a single developer (kvinwang). If that person leaves, the core SDK is at serious risk. The entire security model depends on Intel TDX and NVIDIA Confidential Computing remaining trustworthy – two hardware vendors hold the keys to Phala's privacy guarantee. Multiple simultaneous migrations (Polkadot to Ethereum, SGX to TDX, Phat Contracts to dstack, phala.network to phala.com) compound execution risk. The California subsidiary means US regulatory exposure through Hashforest Technology LLC.

**My position.** I do not hold PHA. I covered Phala extensively in [What Counts as Decentralised AI?](/why-deai/what-counts-as-decentralised-ai/) as a DeAI-adjacent project – genuine technology serving AI workloads from a general-purpose privacy infrastructure base. The TEE technology is credible. The decentralisation is not. At current prices ($0.044, 97% below ATH), the market has already expressed scepticism. Whether Phala converts its enterprise compliance positioning into meaningful adoption beyond 398 paid users is the core investment question.

## Freedom score: 57/100

Phala scores 57/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (8/20).** The L2 is Stage 0 on L2Beat – centralised sequencer, permissioned proposer, instantly upgradable contracts with no exit window. GPU worker registration requires emailing the team (not self-service). 87.4% single-developer concentration on the dstack codebase is an extreme bus factor. 29,478 active devices provides hardware distribution, but chain-level infrastructure is heavily centralised. The migration from Polkadot removed the shared security of a decentralised relay chain.

**Governance decentralisation (7/20).** Governance downgraded during the L2 migration. Polkadot-era on-chain governance (referenda, council) was replaced with Snapshot voting plus a Safe multisig controlled by the team. Snapshot votes are non-binding signals; the multisig executes. The forum has 617+ topics, but decision-making is team-led. No evidence of community override ability. This is a material regression from the previous governance model.

**Token distribution fairness (10/15).** The 70/15/9/5/1 split is genuinely favourable – 70% to mining rewards and only 5% to the team is rare. All investor vesting is fully complete. 83.1% circulating. Total funding of approximately $11.43M is modest, suggesting limited VC overhang. The knock is the zero lock-up on the 15% private sale allocation. DWF Labs serving as both investor and market maker is a concern.

**Censorship resistance (8/15).** TEE computation-level privacy is the real deal – data genuinely cannot be observed during processing. However, the centralised sequencer can censor L2 transactions. GPU worker onboarding is gated (email-based registration). California terms of service apply via the US subsidiary. The privacy guarantee applies within the enclave but not at the network access layer.

**Data sovereignty (13/15).** The strongest dimension and one of the highest data sovereignty scores in our review set. This is confidentiality, not just anonymisation: TEE enclaves are hardware-enforced, meaning the compute provider provably cannot read data during processing — a fundamentally different guarantee from policy-based "we don't store your data" claims. Remote attestation provides cryptographic proof of computation integrity that consumers can verify before sending sensitive data. The self-hosted dstack option means you can run the entire stack without relying on Phala's managed service — that is genuine sovereignty. SOC 2 Type I and HIPAA compliance add institutional credibility that most crypto projects cannot match. Gaps: sequencer has metadata visibility (knows who is transacting, if not what), and Phala Cloud registration requires account creation.

**Open source and transparency (11/15).** Apache-2.0 licensed across core repositories. dstack donated to the Linux Foundation for neutral governance. Two professional audits completed (zkSecurity for dstack, Code4rena for Phat Contract runtime) plus an EtherAuthority token contract audit. Annual transparency reports published. The gap is the instantly upgradable L2 contracts – regardless of how transparent the code is, contracts that can change without notice undermine the "don't trust, verify" principle.

### Path to improvement

Three changes would materially increase Phala's score:

1. **Progress the L2 beyond Stage 0.** Add a timelock to contract upgrades. Introduce a permissionless proposer. Decentralise the sequencer. Every Stage 0 L2 claims it will decentralise eventually. The ones that earn trust do it on a published timeline with measurable milestones.
2. **Reduce dstack bus-factor risk.** 87.4% commit concentration in one developer is untenable for infrastructure that enterprises are supposed to trust. The Linux Foundation donation is a governance fix, not a contributor fix. The project needs more core contributors to dstack, urgently.
3. **Separate Cloud revenue from treasury spending.** If Phala is claiming $2M+ ARR, publish the breakdown. External customer revenue and treasury-funded spending are fundamentally different metrics. Transparency here would strengthen the commercial traction narrative considerably.

## Returns score: 50/100

PHA scores 50/100 (D grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (14/20):** PHA has genuine, multi-layered utility. It serves as payment for confidential compute on Phala Cloud, staking collateral for validators (converted to vPHA), and bonding collateral for GPU workers (1,250-2,250 vPHA per GPU). The staking-to-vPHA conversion with a 21-day unstaking period creates meaningful lock-up dynamics. These are real demand sinks tied to actual infrastructure operation, not speculative governance-only utility. The deduction comes from the narrow user base – 398 paid users means the demand generated by these utility functions is still modest in absolute terms.

**Value accrual (10/25):** A fee mechanism exists. Phala Cloud charges $3.50/hr for H200 on-demand compute, and protocol fees flow through the token economy. The claimed $2M+ ARR represents early commercial traction. However, the centralised Phala Cloud service dominates revenue generation, and the relationship between Cloud revenue and on-chain token value is not transparently documented. Treasury spending of $2.1M in 2024 muddies the picture further – it is unclear how much revenue comes from genuine external customers versus ecosystem-subsidised activity. The value accrual mechanism works in principle but lacks the transparency and scale to score higher.

**Supply dynamics (10/20):** One billion PHA with a fixed cap and disinflationary emission (25% reduction every 180 days) is a reasonable supply model. Current daily emission of approximately 135,000 PHA produces roughly 5% annual inflation, which is manageable. The 83.1% circulating supply means most unlock events are behind us – no looming cliff to worry about. The 70% mining allocation and 5% team allocation are notably fair. The knock is the zero lock-up on the original 15% private sale, and DWF Labs serving as both investor and market maker introduces price manipulation risk that is well-documented in the industry.

**Revenue sustainability (8/20):** The product is real. Confidential computing with TEE hardware, SOC 2 Type I and HIPAA compliance, and enterprise-grade certifications create a genuine addressable market. The ElizaOS V2 integration and NEAR partnership are concrete usage channels. But 398 paid users and partially verified $2M+ ARR is early-stage traction, not product-market fit. The legacy metrics doing heavy lifting in marketing (758,000 daily agent executions on the retired Polkadot parachain, 35,000+ mostly decommissioned SGX workers) undermine confidence in the growth narrative. Revenue exists but is not yet at a scale that supports the token valuation sustainably.

**Liquidity and access (8/15):** PHA is listed on Binance, Kraken, OKX, Coinbase, and Bybit – strong exchange coverage for a project of this size. However, the $36.4M market cap with approximately $0.044 price (97% below ATH) and moderate daily volume suggests thin effective liquidity despite the tier-1 listings. DWF Labs as market maker adds a layer of uncertainty about organic versus manufactured liquidity. The 97% decline from ATH means any new position is buying into a deeply distressed asset with unclear catalysts for recovery.

### Path to improvement

Three changes would materially increase Phala's returns score:

1. **Scale paid users beyond 398.** The SOC 2 and HIPAA compliance credentials open enterprise doors that competitors cannot access. Converting that compliance advantage into meaningful customer growth (thousands, not hundreds) would validate the revenue model and create genuine token demand through compute payments. The product works; the distribution does not yet.
2. **Publish transparent revenue breakdowns.** Separating external customer revenue from treasury-subsidised activity and ecosystem grants would let investors assess whether the business model is self-sustaining. The current opacity around the $2M+ ARR claim invites scepticism that transparency would resolve.
3. **Reduce DWF Labs dependency.** Having the same entity serve as investor, market maker, and liquidity provider creates conflicts of interest that are well-documented across DWF's portfolio. Transitioning to an independent market maker or transparent on-chain liquidity provisioning would improve market confidence in PHA's price discovery.
