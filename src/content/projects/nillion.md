---
title: "Nillion"
description: "Blind computation network using MPC, homomorphic encryption, and TEEs for private data storage, computation, and AI inference. Strong thesis, pre-revenue. Migrating from Cosmos to Ethereum amid market maker scandal."
category: "data"
token: "NIL"
status: "active"
freedomScore: 5
returnsScore: 4.2
returnsScoreBreakdown:
  tokenUtility: 14
  valueAccrual: 8
  supplyDynamics: 5
  revenueSustainability: 7
  liquidityAccess: 8
returnsScoreEvidence:
  tokenUtility: "Payment for blind compute, staking, governance. Token structurally required for network operation. Multiple genuine utilities."
  valueAccrual: "Staking rewards from inflation (~1%), not revenue. No fee distribution, no burn. Value accrual indirect via compute payment demand."
  supplyDynamics: "No max supply. 31.45% circulating. 41% insider allocation. Unauthorised market maker dumped 65M tokens in Nov 2025, buyback recovered only 1.1M. Down 94% from ATH. No burn mechanism."
  revenueSustainability: "Zero demonstrated revenue. Alpha mainnet since March 2025. Applications exist but no usage metrics published. Pre-revenue."
  liquidityAccess: "Binance, Coinbase, Bybit, Gate.io, MEXC, HTX, Bitget. $3.3M daily volume. Chain migration from Cosmos to Ethereum ERC-20 creates bridge friction and temporary liquidity fragmentation."
publishDate: 2025-03-06
updatedDate: 2026-03-12
draft: false
coingeckoId: "nillion"
launchType: "ico"
chain: "Ethereum (ERC-20) — migrated from nilChain (Cosmos), halting March 2026"
supplyType: "uncapped"
maxSupply: "No max supply (governance-controlled inflation ~1%/year)"
verdict: "The right thesis – AI needs privacy-preserving computation – but battered by a market maker scandal, chain migration chaos, and zero commercial validation. World-class team, genuine technology, serious trust damage."
oymHolds: false
podcastUrl: "/podcast/Own-Your-Mind-023-Nillion.mp3"
---

## What it does

Nillion calls itself "humanity's first blind computer." The core idea: computation on data without anyone – including the nodes processing it – ever seeing the data. This is not encryption-at-rest or data masking. It is computation on encrypted data using a combination of multi-party computation (MPC), homomorphic encryption (HE), and trusted execution environments (TEEs).

The network originally had a dual-layer architecture: **nilChain** (a Cosmos-based coordination layer for payments, staking, and governance) and **Petnet** (the orchestration layer performing blind computation). As of March 2026, nilChain is sunsetting — the chain halts ~23 March 2026 and NIL migrates to Ethereum as an ERC-20 token. The "Nillion 2.0" transition, announced October 2025, moves the network towards a permissionless, community-operated model. The blind computation modules remain:

- **nilDB** – Encrypted data storage with permissioned access controls
- **nilVM** – Blind computation using MPC and homomorphic encryption. Data is split across nodes so no single node sees the complete dataset
- **nilAI** – Private LLM inference inside TEEs. Run AI models on your data without the model or infrastructure seeing it

Founded by Alex Page (CEO, ex-Goldman Sachs), Andrew Masanto (CSO, co-founded Hedera Hashgraph, ex-Linklaters and Rothschild), Conrad Whelan (CTO, founding engineer at Uber), Slava Rubin (CBO, founder of Indiegogo), Dr. Miguel de Vega (Chief Scientist, 30+ patents in cryptography), and Mark McDermott (COO, ex-Nike). This is an unusually credentialled team for a crypto project.

Token launched 24 March 2025 via CoinList sale ($0.40 per NIL) and Binance Launchpool. Alpha mainnet went live the same day.

## Value proposition

Privacy-preserving AI computation. That is the pitch, and it is timely.

Every major AI model today requires your data in plaintext to process it. ChatGPT reads your prompts. Cloud GPU providers see your training data. Enterprise AI deployments require trusting the infrastructure with sensitive information. Nillion's thesis is that this is fundamentally broken and that blind computation – where the infrastructure processes data it cannot see – is the solution.

The technical approach combines three privacy-enhancing technologies (PETs):

1. **MPC** splits data across multiple nodes. Each node holds a fragment that is meaningless alone. Computation happens collaboratively without reassembling the data.
2. **Homomorphic encryption** enables mathematical operations on encrypted data, producing encrypted results that only the data owner can decrypt.
3. **TEEs** provide hardware-isolated enclaves where code runs in a protected environment that even the hardware operator cannot inspect.

Using all three is the defence-in-depth argument – if one technique has a vulnerability, the others compensate.

The counter-narrative is practical: **blind computation is slow, expensive, and unproven at scale.** MPC requires multiple rounds of communication between nodes. Homomorphic encryption adds orders-of-magnitude computational overhead. TEEs depend on hardware vendor trust (Intel SGX has had side-channel attacks; NVIDIA TEE attestation is new). The question is not whether privacy-preserving computation is desirable – it obviously is. The question is whether Nillion can make it fast and cheap enough for production AI workloads.

As of March 2026, the network is in alpha mainnet and mid-migration. Applications exist – nilGPT (private AI chatbot), LouisAI, Tickr, MonadicDNA, and Stadium Science are building on the platform. But no usage metrics are published. No revenue figures are available. The technology is real, but commercial validation is absent. Meanwhile, the project is juggling a chain migration (Cosmos to Ethereum), a market maker scandal, and a full architectural rebrand under "Nillion 2.0." That is a lot of moving parts for a team that has not yet demonstrated product-market fit.

For the sovereignty thesis, Nillion is architecturally one of the strongest projects we have reviewed. Data sovereignty is the entire product – not a feature, but the foundation. If the technology works at production scale, this is exactly what "own your mind" means in practice.

## Tokenomics

NIL launched via CoinList ICO in June 2024, raising $20 million at $0.40 per token (50 million tokens sold). A Binance Launchpool distributed 35 million tokens for free. Total funding across all rounds is approximately $65 million, including a $25 million seed round (December 2022) and a $25 million Series A (October 2024) led by Hack VC and Distributed Global, with participation from HashKey Capital, Arthur Hayes, and Meltem Demirors.

Total initial supply is 1 billion NIL. There is **no maximum supply** – the token is inflationary by design, with an estimated ~1% annual inflation rate controlled by governance. Distribution:

- **Ecosystem & R&D:** 26.5% – validator incentives, developer rewards, network expansion
- **Early Backers:** 21% – seed, pre-seed, and 2024 funding round participants
- **Core Contributors:** 20% – team and advisors
- **Community:** 16.5% – airdrops, grants, incentive programmes
- **Protocol Development:** 10% – ongoing research and development
- **Public Sale (CoinList):** 5% – $0.40 per NIL
- **Binance Launchpool:** 3.5% – free distribution
- **Liquidity:** 2.5% – market making

Circulating supply is 314.5 million NIL (31.45%). A major unlock of 114.5 million tokens was scheduled for 24 March 2026, coinciding with the nilChain halt and Ethereum migration.

**The market maker incident.** In November 2025, an unauthorised market maker dumped approximately 65 million NIL tokens onto the open market, triggering a roughly 50% price crash. Nillion launched a buyback programme in response, but by 28 November had repurchased only 1.1 million of the 65 million tokens sold — less than 2% of the damage. The token hit an all-time low of $0.039 in February 2026. This was not a hack or exploit. It was a failure of counterparty controls — the team allocated tokens for market making and lost control of how they were used.

NIL trades at approximately $0.05 (March 2026) with a market cap around $15.5 million and FDV of $50 million. The FDV is below the $65 million total raised, meaning investors are collectively underwater. The token is down 88% from its $0.40 ICO price and 94.5% from its all-time high of $0.90 at launch.

**Chain migration.** nilChain (Cosmos) is halting around 23 March 2026. NIL migrates to Ethereum as an ERC-20 token (contract: 0x7Cf9a80db3B29eE8efE3710AadB7b95270572d47, audited by Quantstamp). The migration is 1:1 via a Merkle proof claim process. As of March 2026, approximately 843 million of 1 billion tokens have already been bridged to Ethereum, with 961 on-chain holders. The migration portal is live at migrate.nillion.com. Cosmos-based staking is ending with the nilChain halt — the Nillion 2.0 tokenomics review is evaluating new staking architecture on Ethereum.

Listed on Binance, Coinbase, Bybit, Gate.io, MEXC, HTX, and Bitget. Daily volume around $3.3 million. These are unusually strong exchange listings for a project with this market cap — most $15 million market cap tokens are on DEXs and minor CEXs only.

## How to participate

**Migrate your NIL.** If you hold NIL on nilChain (Cosmos), you need to migrate to Ethereum before the chain halts (~23 March 2026). Use the official migration portal at migrate.nillion.com. You will need your Cosmos private key to sign a claim, and an Ethereum wallet to receive the ERC-20 tokens. 1:1 swap. Do not delay — nilChain is shutting down.

**Hold NIL on Ethereum.** Post-migration, NIL is a standard ERC-20 token. No staking is currently available on Ethereum — the Nillion 2.0 tokenomics review is evaluating new staking mechanisms. For now, participation is limited to holding and governance (details TBC).

**Build on Nillion.** Use SDKs (Python, TypeScript, Rust) to build privacy-preserving applications. nilDB for encrypted storage, nilVM for blind computation, nilAI for private AI inference. Developer documentation is actively maintained with 102 public GitHub repositories. Technical skill: advanced. Ecosystem grants available. Note: the compute layer operates independently of the chain migration — builders are not affected by the Cosmos-to-Ethereum switch.

## Honest assessment

### Freedom Score: 50/100 (D)

Nillion's architecture is fundamentally designed for data sovereignty – this is not a feature bolted on, but the core product. However, the network is mid-migration, governance controls failed to prevent a market maker scandal, and real-world decentralisation is unproven.

**Infrastructure Decentralisation: 10/20.** Dual-layer architecture with Petnet compute nodes and a coordination layer now migrating from Cosmos to Ethereum. The Petnet layer's actual node distribution and decentralisation remains unclear in alpha phase. TEE-based nilAI creates hardware vendor dependency (Intel/NVIDIA). The "Nillion 2.0" vision promises permissionless node operation but details are still in design. Score reduced from prior review — the mid-migration state means the coordination layer is effectively centralised during the transition.

**Governance Decentralisation: 8/20.** Cosmos governance module is being retired with nilChain. Ethereum-based governance mechanisms are under design as part of the Nillion 2.0 tokenomics review — meaning there is currently no functioning on-chain governance. The market maker incident exposed a governance failure — the team allocated 2.5% of supply (25M tokens allocated, 65M apparently accessible) to a market maker without adequate controls, and that entity dumped the lot. 41% insider allocation still concentrates power.

**Token Distribution Fairness: 4/15.** 41% to insiders was already heavy. The market maker incident made it worse — 65 million tokens dumped onto retail holders, with the buyback recovering less than 2%. Public sale investors are down 88% from ICO price. The team's inability to control allocated tokens is a distribution fairness failure, not just a market event.

**Censorship Resistance: 10/15.** MPC-based blind computation is inherently censorship-resistant – nodes cannot inspect or selectively refuse data they cannot see. The cryptographic architecture is one of the strongest censorship-resistance designs in DeAI. Limited by TEE hardware vendor trust and unproven production-scale decentralisation.

**Data Sovereignty: 11/15.** This is Nillion's strongest dimension. MPC ensures no single node sees complete data. Homomorphic encryption enables computation on encrypted data. nilDB provides encrypted storage with permissioned access. nilAI runs LLM inference inside TEEs. One of the best data sovereignty architectures reviewed. Score reduced slightly — production-scale privacy guarantees are not independently verified, and the chain migration means the data coordination layer is in flux.

**Open Source Transparency: 7/15.** 102 public GitHub repos with ~1,141 total stars. Key repos (nilchain, nilAI, nildb) are public. Active development with recent commits. The ERC-20 contract was audited by Quantstamp — the first recognised security audit for any Nillion component. Core cryptographic components may not be fully open-sourced.

### Returns Score: 42/100 (D)

**Token Utility: 14/20.** NIL is used for blind compute payments and governance. With nilChain sunsetting, Cosmos PoS staking utility is ending — the Nillion 2.0 tokenomics review is designing replacement staking mechanics on Ethereum. The token remains structurally required for compute payments. Score unchanged because the utility design is sound even as the chain migrates; actual usage volume remains minimal.

**Value Accrual: 8/20.** Staking rewards from Cosmos inflation are ending. No fee distribution to token holders. No buy-and-burn mechanism. The Nillion 2.0 tokenomics review mentions evaluating burn mechanisms and new staking architecture, but nothing is implemented. Value accrual remains indirect and aspirational.

**Supply Dynamics: 5/20.** No max supply. 31.45% circulating with large unlocks. An unauthorised market maker dumped 65 million tokens in November 2025, crashing the price ~50%. The buyback programme recovered only 1.1 million tokens — 1.7% of what was dumped. That is not a recovery; it is a gesture. No burn mechanism. Token down 94.5% from ATH, 88% from ICO price. FDV ($50M) still below total raised ($65M). The market maker incident demonstrated that token allocation controls were inadequate.

**Revenue Sustainability: 7/25.** Zero demonstrated protocol revenue. Alpha mainnet since March 2025 — nearly a year with no published usage metrics or revenue figures. Applications exist (nilGPT, LouisAI, Tickr) but the blind compute market is nascent. No DeFiLlama or Token Terminal presence. Score reflects functional infrastructure with zero revenue evidence.

**Liquidity & Access: 8/15.** Listed on Binance, Coinbase, Bybit, Gate.io, MEXC, HTX, and Bitget — strong exchange coverage. Daily volume dropped to ~$3.3M. The chain migration from Cosmos to Ethereum creates temporary friction: users must bridge tokens, some may lose access if they miss the nilChain halt deadline. Liquidity will likely consolidate on Ethereum post-migration, but the transition period introduces risk.

### Quadrant: D (Low Freedom, Low Returns)

Nillion has dropped from Quadrant B to Quadrant D. The privacy architecture remains strong in theory, but the market maker scandal damaged trust, governance controls proved inadequate, and the token economics are in disarray. The chain migration adds execution risk. This is a project with a genuine thesis buried under operational failures.

### Key risks

- **Market maker scandal.** An unauthorised market maker dumped 65 million NIL tokens in November 2025, crashing the price ~50%. The buyback programme recovered 1.1 million tokens — less than 2% of the damage. This was a failure of counterparty controls, not a hack. It raises serious questions about team oversight of token allocations.
- **Chain migration risk.** nilChain (Cosmos) is halting ~23 March 2026. All NIL must be migrated to Ethereum via a Merkle proof claim process. Users who miss the deadline risk losing access to their tokens. Staking is ending with no confirmed replacement mechanism.
- **Zero revenue.** The entire investment case rests on future adoption of blind computation at scale. No paying customers demonstrated after nearly a year of alpha mainnet.
- **Token in freefall.** Down 88% from ICO price ($0.40 to ~$0.05) and 94.5% from ATH. Hit all-time low of $0.039 in February 2026. Investors who bought the CoinList sale are deeply underwater.
- **Insider overhang.** 41% allocated to Core Contributors and Early Backers. 114.5M token unlock coinciding with the chain migration in March 2026.
- **"Nillion 2.0" is a rebrand with no deliverables.** The October 2025 announcement promised permissionless nodes, new tokenomics, burn mechanisms, and community governance. As of March 2026, none of this is implemented. The tokenomics review is still in progress.
- **Blind compute is unproven at scale.** MPC is slow. Homomorphic encryption is computationally expensive. Whether these technologies can support production AI workloads at competitive prices is the open question.
- **TEE vendor dependency.** nilAI relies on Intel/NVIDIA TEE hardware attestation. Hardware side-channel attacks are a known attack surface.
- **Competition.** Phala Network, Oasis Network, and Secret Network are all in the privacy compute space with more mature networks.
