---
title: "Gensyn"
description: "A decentralised ML training compute protocol built on a custom Ethereum L2 rollup. Pre-mainnet with genuine research depth (7 arXiv papers, Verde verification), a16z-backed, but fully team-controlled with 54.6% insider token allocation."
category: "compute"
token: "AI"
status: "upcoming"
freedomScore: 5
returnsScore: 4.0
returnsScoreBreakdown:
  tokenUtility: 10
  valueAccrual: 8
  supplyDynamics: 6
  revenueSustainability: 2
  liquidityAccess: 14
returnsScoreEvidence:
  tokenUtility: "Pre-token. Intended for compute payment and staking."
  valueAccrual: "Pre-mainnet. Mechanism designed but unproven."
  supplyDynamics: "10B cap with 54.6% insider allocation. Heavy dilution."
  revenueSustainability: "Pre-mainnet. No revenue yet."
  liquidityAccess: "Not yet tradeable. Score based on VC backing and expected listing."
publishDate: 2025-03-02
draft: false
coingeckoId: "gensyn"
launchType: "pre-token"
chain: "Ethereum L2 (Custom Rollup)"
supplyType: "capped"
maxSupply: "10B AI"
verdict: "Genuine ML research and strong open-source credentials, but pre-mainnet, pre-token, fully team-controlled governance, and 54.6% insider allocation. A credible research bet, not a working infrastructure play."
oymHolds: false
---

## What it does

Gensyn is a compute protocol designed specifically for machine learning training. Not general compute, not rendering, not storage. ML training, with a verification layer to prove the work was done correctly.

The architecture has four layers. At the bottom, the SAPO algorithm ensures ML computations produce identical results across different hardware, whether that is an NVIDIA A100, an RTX 4090, or an Apple M-series chip. Above that, the Verde verification system uses Reproducible Operators (RepOps) for bitwise-identical ML outputs, with a two-level bisection game for dispute resolution. The peer-to-peer layer handles gradient sharing without centralised coordinators (NoLoCo for gossip-based gradient averaging, CheckFree for fault-tolerant recovery, SkipPipe for efficient gradient sharing). The coordination layer is a custom Ethereum L2 rollup that handles participant registration, task submission, proof verification, and payment settlement.

Four roles operate the network: Submitters (who create training tasks), Solvers (who provide compute), Verifiers (who check the work), and Whistleblowers (who challenge incorrect verifications). The actual ML training happens off-chain. The proofs, payments, and dispute resolution happen on-chain.

The project was co-founded in May 2020 by Ben Fielding (PhD in AI/ML from Northumbria, research in evolutionary neural architecture search) and Harry Grieve (MA Economics from Aberdeen, Master of Public Affairs from Brown, former Director of Data Research at Cytora). They met through Entrepreneur First's London cohort. The company, Gensyn Limited, is registered at Companies House (#12601008) in London. Team size is 44 with 20-plus open roles.

Funding totals $66.74 million across four rounds: pre-seed ($1.1M, January 2021), seed ($6.5M, March 2022, led by Eden Block), Series A ($43M, June 2023, led by a16z crypto), and a public token sale ($16.14M, December 2025 via English auction on Sonar, clearing at $473M FDV). Other backers include CoinFund, Protocol Labs, Canonical Crypto, Maven 11 Capital, and Galaxy.

Current status: testnet (Phase 0, launched March 2025). The $AI token generation event is planned for April 2026. No mainnet date has been announced.

## Value proposition

The pitch is simple. ML training is expensive, GPU supply is constrained, and most of the world's compute sits idle. Gensyn connects underutilised hardware into a unified training network with cryptographic verification that the work was done correctly.

What makes Gensyn genuinely interesting, and different from the dozen other "decentralised GPU" projects, is the research depth. Seven papers published on arXiv: Verde (verification), NoLoCo (gradient averaging), CheckFree (fault tolerance), SkipPipe (gradient sharing), SAPO (deterministic execution), and two more on reinforcement learning swarms and diverse network ensembles. This is not a team that forked someone else's code and added a token. The Verde system, which enables bitwise-reproducible ML across heterogeneous hardware, is a novel contribution to the field. a16z's investment thesis called them "nobody better" at combining AI and crypto.

The testnet shows real traction. 165,000-plus users, two million models trained, 90 million transactions. RL Swarm lets anyone with a GPU or 32GB of RAM run a node and participate in collaborative reinforcement learning training. The barrier to entry is genuinely low.

Three products are live or in active use. Delphi is a prediction market where users stake on which AI models will perform best on benchmarks. CodeAssist trains coding models locally on your own edits. BlockAssist does the same for blockchain queries. All three demonstrate practical applications of the core protocol.

The counter-narrative is equally clear. This is a testnet. The models being trained are 0.5B to 1.5B parameter Qwen variants, not frontier-scale workloads. The litepaper projected V100-equivalent pricing at $0.40/hour (80% cheaper than AWS), but no real pricing exists because there is no mainnet. The $473M FDV from the public sale prices a project with no revenue, no mainnet, and no live token. Competitors like [Akash](/projects/akash/) and [io.net](/projects/io-net/) have production networks handling real workloads today. Gensyn is still proving that its verification system works at scale.

The ML-specific focus is both a strength and a limitation. General compute networks can serve ML workloads plus everything else. Gensyn is ML-only. If the verification layer and distributed training primitives work at production scale, the specialisation is a moat. If not, it is a constraint.

## Tokenomics

$AI is an ERC-20 token on the Gensyn L2. Total supply: 10 billion. The token has not yet launched; TGE is planned for April 2026.

Distribution:

- **Community Treasury:** 40.4% (20% unlocked at TGE, remainder linear over 36 months). Funds ecosystem development, grants, and programmes. Controlled by the Gensyn Foundation.
- **Investors:** 29.6% (12-month cliff, then 24-month linear unlock). Pre-seed, seed, and Series A investors. Cannot stake during lockup.
- **Team:** 25.0% (12-month cliff, then 24-month linear unlock). Cannot stake during lockup.
- **Community Sale:** 3.0% (immediate unlock for non-US buyers; 12-month lockup for US buyers and those opting for 10% bonus multiplier). 300 million tokens sold via English auction at $0.0473 per token.
- **Testnet Rewards:** 2.0% (distributed based on testnet participation level and sale bid amount).

The insider allocation is 54.6% (investors plus team). That is high. The 12-month cliff and 24-month linear unlock provide meaningful protection, and locked tokens cannot be staked. But once the cliff expires (approximately April 2027), 24 months of continuous insider selling pressure begins.

The community's direct access is limited: 3% public sale plus 2% testnet rewards equals 5% of total supply. The remaining 40.4% community treasury sounds generous but is controlled by the Foundation, which is initially team-aligned.

Token utility spans five functions: compute payments, verification staking, Delphi prediction market stakes, governance voting, and a programmatic buy-and-burn mechanism from transaction fees. The buy-and-burn only works if there is revenue to burn, which requires mainnet and real usage.

The public sale used a transparent English auction on Sonar, clearing at $473M FDV ($0.0473 per token). No token is trading on any exchange. No market data exists.

## How to participate

**Run an RL Swarm node.** The lowest barrier entry point. Install Docker, Python 3.10-plus, and Node.js 22.x. GPU option: NVIDIA RTX 3090, 4090, 5090, A100, or H100 with 12GB-plus VRAM and CUDA 12.4-plus. CPU option: ARM64 or x86 with 32GB-plus RAM (slower but functional). Nodes train Qwen2.5 models (0.5B to 1.5B parameters) as part of a distributed reinforcement learning swarm. Trained models are published to your HuggingFace account. Testnet rewards come from the 2% allocation.

**Predict on Delphi.** The prediction market lets you stake on which AI models will outperform on benchmarks. Markets run in rounds (four completed December 2024 to February 2025, next scheduled March 2026). Stake on expected winners, earn rewards when markets settle.

**Build.** Contribute to open-source repos (rl-swarm, codeassist, blockassist, rl-swarm-contracts). All MIT licensed. Deploy custom swarms. Publish models to HuggingFace. The documentation is solid, covering protocol design, testnet setup, and product guides. Seven arXiv papers provide deep technical context.

**Wait for mainnet.** Beyond testnet participation, there is no way to earn real economic returns from Gensyn today. No staking, no mainnet compute fees, no token to trade. This is a wait-and-build phase.

## Honest assessment

**What works.** The research is real. Seven arXiv papers from a team that includes academic researchers and cryptographers is exceptional for a crypto project. Verde verification (bitwise-reproducible ML across heterogeneous hardware) is a genuine technical contribution that no competitor has replicated. The founding team is credible: Fielding's PhD work directly feeds into the protocol design, and Grieve brings quantitative finance expertise. Both are doxxed, verified through Companies House, and have been building since May 2020.

The testnet engagement is meaningful. 165,000-plus users and two million models trained suggests genuine grassroots interest, even accounting for airdrop farming. The RL Swarm framework lets you actually run distributed reinforcement learning on consumer hardware today. That is tangible, not vapourware.

The open-source credentials are strong. MIT licence across core repos. 1,699 stars and 639 forks on rl-swarm. Six models published on HuggingFace. The research-to-product pipeline is visible: academic papers become protocol components become testnet features.

**What does not work.** No mainnet. No live token. No revenue. No security audits. The project has raised $66.74 million and has been building for nearly six years. At some point, "still on testnet" stops being patience and starts being a red flag. The TGE is planned for April 2026 and mainnet has no confirmed date.

The token distribution is insider-heavy. 54.6% to team and investors is above average for the space. The 40.4% community treasury is controlled by the Foundation, whose council is "initially mapped to core team members." In practice, the team controls the vast majority of tokens at launch.

Governance does not exist. No DAO, no on-chain voting, no governance forum. The Foundation describes "progressive decentralisation" as a plan, not a feature. Two directors (Fielding and Grieve) make all decisions. For a project raising from the public via token sales, the absence of any community governance mechanism is a notable gap.

The testnet trains small models. Qwen 0.5B to 1.5B parameters is useful for reinforcement learning research but nowhere near the frontier-scale training (70B-plus parameters) that would justify the "network for machine intelligence" branding. Scaling from testnet to production is an unproven leap.

**The risk.** Execution risk dominates. Transitioning from a testnet training small RL models to a mainnet handling real economic value and production-grade ML workloads is a massive engineering challenge. The Verde verification system adds computational overhead to training; at production scale, this overhead needs to be manageable.

The competitive window is narrowing. [Akash](/projects/akash/) has had a production compute marketplace since 2020. [io.net](/projects/io-net/) is delivering millions of compute hours. Even within the ML-specific niche, Bittensor subnets compete for the same workloads. Gensyn's verification moat only matters if they ship mainnet before the market decides the problem is solved.

Regulatory risk is real. A UK-registered company conducting a public token sale with US buyer restrictions faces securities classification risk in multiple jurisdictions. The 12-month US buyer lockup suggests the team is aware of this risk.

The $473M FDV prices perfection. The public sale clearing at this valuation means investors are paying for a fully functioning mainnet, real adoption, and sustained revenue. None of these exist yet. If mainnet slips or adoption is slow, the valuation repricing will be painful.

No security audits have been published for the smart contracts or protocol, despite $66.74 million in funding and a testnet processing 90 million transactions.

**My position.** I do not hold $AI tokens. The project has not launched a token for public trading. The research depth and technical differentiation are genuine, and I will re-evaluate once mainnet launches and real usage data is available. For now, this is a credible research bet with significant execution, competition, and regulatory risk. Running an RL Swarm node is interesting from a practitioner perspective; economic exposure requires a high tolerance for uncertainty.

## Freedom score: 50/100

Gensyn scores 52/100 (D grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (10/20):** The testnet is permissionless. Anyone with qualifying hardware (GPU or 32GB-plus RAM CPU) can run an RL Swarm node. The network supports heterogeneous hardware from gaming GPUs to data centre A100/H100s. The Verde verification system enables trustless work verification without centralised intermediaries. However, the coordination layer runs on a custom Ethereum rollup whose sequencer and operator details are not disclosed. Testnet infrastructure relies on Alchemy for authentication. Current status is testnet only, with no mainnet or live economic security.

**Governance decentralisation (5/20):** Governance is fully centralised. Gensyn Limited (Companies House #12601008) controls all protocol decisions. Two directors (Fielding and Grieve) are the sole decision-makers. Post-TGE plans include an elected council "initially mapped to core team members" with on-chain proposals. This is a stated intention, not a delivered feature. No DAO, no community voting, no governance forum.

**Token distribution fairness (6/15):** Insider allocation is 54.6% (29.6% investors plus 25% team). Vesting mitigates concentration risk: 12-month cliff plus 24-month linear unlock, and locked tokens cannot be staked. The community's direct access is 5% (3% public sale plus 2% testnet rewards). The 40.4% community treasury is controlled by the Foundation, which is initially team-aligned. The public sale used a transparent English auction. Not a fair launch.

**Censorship resistance (8/15):** The protocol design is permissionless. Any device can contribute compute. Verde verification removes the need to trust individual providers. The Ethereum rollup inherits some censorship resistance from L1 settlement. However, the rollup sequencer is undocumented, creating a potential censorship vector. The team could theoretically upgrade or pause contracts. No censorship incidents on testnet.

**Data sovereignty (10/15):** The architecture provides meaningful user control. CodeAssist trains models locally on user machines. RL Swarm nodes train local models with results published to user-owned HuggingFace accounts. The litepaper describes optional functional encryption for training on encrypted data. The peer-to-peer architecture avoids centralised data aggregation. Only proofs are submitted on-chain, not raw training data or model weights.

**Open source and transparency (13/15):** Core repositories are MIT licensed: rl-swarm (1,699 stars), codeassist (699 stars), rl-swarm-contracts, blockassist. Seven academic papers on arXiv with full methodology. Six models published on HuggingFace. Smart contract code is publicly auditable. The research-to-product pipeline is transparent. Deductions: no published security audits, rollup infrastructure code is not visibly open-sourced, and the litepaper is explicitly outdated with no comprehensive replacement.

### Path to improvement

Three changes would materially increase Gensyn's score:

1. **Launch mainnet with transparent metrics.** The testnet has been running for a year. Mainnet launch with a public, real-time dashboard showing active nodes, compute hours delivered, revenue, and verification metrics would be the single biggest credibility signal. Self-reported testnet figures from press releases are not enough.
2. **Implement governance before or at TGE.** Token holders spending real money on $AI tokens should have governance rights from day one. An elected council "initially mapped to core team members" is not decentralisation. Deploying on-chain governance with community-elected council members, proposal submission, and transparent voting before TGE would demonstrate genuine commitment to decentralisation.
3. **Publish security audits.** $66.74 million in funding, 90 million testnet transactions, and a public token sale, yet no published audit from a recognised firm. Before mainnet handles real economic value, smart contract and protocol audits are essential. This is a straightforward gap to close with available resources.

## Returns score: 40/100

AI scores 40/100 (D grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (10/20):** There is no live token. The $AI token is planned for April 2026 with intended use cases spanning compute payments, verification staking, Delphi prediction market stakes, governance voting, and a programmatic buy-and-burn mechanism. These are reasonable utility vectors on paper, but none of them can be evaluated in practice because the token does not exist yet. Scoring generously for design intent, but design intent is not utility.

**Value accrual (8/25):** The buy-and-burn mechanism from transaction fees is the primary value accrual path, and it is a sensible design — protocol revenue destroys token supply, creating deflationary pressure proportional to network usage. The problem is obvious: there is no mainnet, no transactions, and therefore no revenue to burn. The mechanism is designed but entirely unproven. Until real compute workloads generate real fees on a live network, this is a whiteboard exercise priced at $473M FDV.

**Supply dynamics (6/20):** Ten billion tokens with 54.6% allocated to insiders (29.6% investors plus 25% team). The 12-month cliff and 24-month linear unlock provide meaningful short-term protection, and locked tokens cannot be staked, which prevents insiders from compounding their position during the lockup. But once the cliff expires around April 2027, two years of continuous insider selling pressure begins. The community's direct access is just 5% of total supply. The 40.4% community treasury sounds generous until you realise the Foundation, which is initially team-aligned, controls it.

**Revenue sustainability (2/20):** Zero revenue. Zero mainnet. Zero live token. The litepaper projected V100-equivalent pricing at $0.40 per hour (80% cheaper than AWS), which would be compelling if it existed. The testnet has trained two million models, but those are 0.5B-1.5B parameter Qwen variants on a free network — not paying customers. Revenue sustainability cannot be assessed for a project that has generated precisely no revenue in nearly six years of existence.

**Liquidity and access (14/15):** This scores high not because liquidity exists — there is no tradeable token — but because the setup for future liquidity is strong. a16z-led Series A, $66.74M total funding, public sale on Sonar clearing at $473M FDV, and the calibre of backers (CoinFund, Protocol Labs, Galaxy) virtually guarantees tier-1 exchange listings at TGE. The 3% public sale via transparent English auction was a fair mechanism for the tokens it covered. When the token launches, access will not be the problem. Whether the price justifies the entry will be.

### Path to improvement

Three changes would materially increase Gensyn's returns score:

1. **Launch mainnet and generate real revenue.** The entire returns case hinges on the buy-and-burn mechanism working with actual transaction fees. Until compute workloads generate revenue on a live network, every tokenomics projection is theoretical. Revenue is the single metric that would transform this score.
2. **Reduce the insider allocation or increase community access.** 54.6% insider allocation with only 5% direct community access is poor by any standard. Increasing the testnet rewards allocation, adding a broader public sale tranche, or committing to community-directed treasury governance would improve the supply dynamics score materially.
3. **Demonstrate pricing competitiveness at scale.** The $0.40/hour V100-equivalent claim needs real-world validation. Publishing transparent pricing benchmarks against AWS, Lambda Labs, and competing decentralised compute networks once mainnet launches would establish whether the economic model actually delivers value to compute buyers.
