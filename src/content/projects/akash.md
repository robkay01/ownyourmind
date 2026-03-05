---
title: "Akash Network"
description: "A decentralised cloud computing marketplace. Providers list spare capacity, tenants deploy containers at a fraction of centralised cloud costs."
category: "compute"
token: "AKT"
status: "active"
freedomScore: 7
returnsScore: 6.6
returnsScoreBreakdown:
  tokenUtility: 16
  valueAccrual: 10
  supplyDynamics: 12
  revenueSustainability: 18
  liquidityAccess: 10
returnsScoreEvidence:
  tokenUtility: "Payment for compute, staking for governance/security, validator requirement."
  valueAccrual: "Take rate on compute fees. Staking rewards from inflation + fees. But take rate is small."
  supplyDynamics: "Uncapped supply with inflation. BME burn not yet active. Moderate dilution."
  revenueSustainability: "Real customers using decentralized cloud. Revenue growing, still emission-heavy."
  liquidityAccess: "Tier-2 CEX listings. Moderate DEX liquidity. $1-5M daily volume."
publishDate: 2025-03-01
draft: false
coingeckoId: "akash-network"
launchType: "ico"
chain: "Cosmos"
supplyType: "uncapped"
maxSupply: "388.5M genesis cap (inflationary via staking rewards, BME burn mechanism not yet active)"
verdict: "The most credible decentralised cloud marketplace operating today. Real revenue, real customers, but chain migration looming."
oymHolds: false
---

## What it does

Akash is a decentralised cloud computing marketplace built on a Cosmos SDK appchain. Providers list spare GPU, CPU, memory and storage capacity. Tenants describe workloads in SDL (a YAML-based Stack Definition Language), submit deployment orders on-chain, and providers bid via reverse auction. Lowest qualifying bid wins. Workloads run in Kubernetes containers on provider hardware.

The chain handles order matching, escrow payments and provider attestation. Actual compute happens off-chain. GPU marketplace launched in September 2023 with NVIDIA support. AkashML managed inference service followed, simplifying AI model deployment for tenants who do not want to wrangle Kubernetes themselves.

Founded by Greg Osuri and Adam Bozanich through Overclock Labs, a Delaware-incorporated company (June 2015). Osuri founded AngelHack, the world's largest hackathon organisation (100,000-plus developers across 50 cities), and has over 10,000 GitHub contributions. He testified before the US Congress House Committee on AI energy in May 2025, the first decentralised cloud founder to do so. The team has grown to roughly 115 people. Mainnet has been running since September 2020, making Akash the longest-running decentralised cloud marketplace in the space.

## Value proposition

Cost. Akash compute runs 50-85% cheaper than AWS, GCP and Azure for comparable workloads. The reverse auction model drives prices down because providers compete for your deployment rather than you accepting a posted rate.

Permissionless supply is the structural differentiator. Anyone with qualifying hardware can become a provider. No approval process, no relationship required, no geographic restrictions. This is the opposite of how [Render](/projects/render/) operates, where node operators need Foundation approval.

For the sovereignty thesis, the value is straightforward: you deploy containerised workloads on infrastructure that no single entity controls, pay with a self-custodial wallet, and no platform collects data about what you are running. [Venice](/projects/venice/) uses Akash GPUs for its inference workloads. [Morpheus](/projects/morpheus/) routes compute through Akash providers. ElizaOS runs AI agents on the network. These are real customers generating real revenue, not testnet experiments.

The counter-narrative is scale. Akash has roughly 69 active providers with 700-1,000 GPUs. AWS has millions. The "decentralised AWS" framing is aspirational. The reality is a functional but small marketplace that serves a specific niche: developers and projects that value permissionless deployment over managed services. GPU utilisation sits at roughly 60% (self-reported), which suggests genuine demand but the absolute base is tiny. Provider count actually declined through 2025, despite usage growth. Homenode, launched in beta in February 2026, aims to reverse this by letting consumer hardware (RTX 4090/5090 minimum in Phase 1) participate, but adoption metrics are not yet available.

## Tokenomics

AKT launched via IEO on BitMax (now AscendEX) in October 2020 at $0.38-$0.77 per token. Total raise across all rounds: $4.1 million ($1.31 million seed from CrunchFund in 2017, $2 million private sale in 2019, roughly $800,000 IEO). By crypto standards, this is tiny, and that matters. Low funding means less VC overhang, less misaligned incentive, and less pressure to juice metrics for investor returns.

Genesis supply was 100 million AKT. Long-term distribution of max supply:

- **Mining (block rewards):** 70.94%
- **Investors:** 10.03% (1-year lock, graded release, fully unlocked)
- **Team and advisors:** 7.85% (1-year lock, graduated release, fully unlocked)
- **Foundation:** 5.72% (fully unlocked)
- **Ecosystem:** 2.32%
- **Testnets:** 1.45%
- **Vendors and marketing:** 1.16%
- **Public sale (IEO):** 0.52%

Current supply sits at roughly 290 million AKT against a genesis cap of 388.5 million. Circulating supply is 283 million (74% of cap). All initial allocations are now fully vested and unlocked. Inflation runs at a maximum of 8% annually (reduced from the original schedule by Proposal 283 in March 2025), with a 50% community pool tax meaning half of all inflation goes to community-directed spending.

The tokenomics thesis hinges on BME (Burn-Mint Equilibrium). When activated, AKT spent on compute gets burned and new AKT minted to providers. If compute spend exceeds inflation, the token becomes deflationary. The code is complete. Activation target is early-mid 2026. But at $3.15 million annual revenue against an $88 million market cap, BME alone cannot drive meaningful deflation yet. The gap between the deflationary narrative and the inflationary reality is the core investment question.

Staking yields roughly 7.3% APY nominal, which is approximately -0.7% to 0% real yield after accounting for 8% inflation and the 50% community pool tax. The 21-day unbonding period locks capital during volatile markets. Slashing risk exists: 5% for double-signing, 0.01% for prolonged downtime.

Starbonds, a $75 million securities offering (Reg A+ filing) announced in 2025, is the elephant in the room. This is a corporate fundraise by Overclock Labs. Terms are not yet fully public. Whatever the structure, it represents significant new capital flowing into the entity that controls the development roadmap, and introduces an opaque financial dimension alongside the transparent on-chain economics.

Market snapshot: AKT trades at $0.30 with an $88 million market cap. That is 96% below the all-time high of $8.08 from April 2021. Listed on Coinbase, Kraken and KuCoin but notably absent from Binance, which limits Asian market liquidity and retail discovery. Grayscale added AKT to its AI Tools and Resources sector index in May 2025, and Coinbase included AKT in the Coinbase 50 Index in June 2025.

## How to participate

**Stake AKT.** Delegate to validators on the Akash chain. Earn inflation rewards (~7.3% APY nominal, near zero real yield after inflation and community pool tax). Vote on governance proposals through your validator or directly. Requires a Cosmos wallet (Keplr). Minimum stake is negligible. The main consideration is the 21-day unbonding period.

**Provide compute.** Run a provider node and list spare capacity on the marketplace. Permissionless, anyone with qualifying hardware can join. Requires server-grade hardware, Kubernetes administration skills, NVIDIA GPUs for GPU workloads, and reliable internet. This is the more interesting participation mode if you have idle hardware, but the technical barrier is real.

**Deploy workloads.** Use Akash as a tenant. Describe your workload in SDL, submit to the marketplace, and providers bid. Typically 50-85% cheaper than centralised cloud. Requires Docker/container knowledge and an AKT deposit for escrow. No managed services (databases, load balancers, CDN), just raw compute.

**Build.** Four funding mechanisms: Community Pool (on-chain treasury), Akash Accelerate (grants programme), Akash Bounties Board and AkashML partnerships. Go and Kubernetes expertise preferred.

## Honest assessment

**What works.** Akash is the most credible decentralised cloud marketplace operating today. That is a factual statement, not an endorsement. $3.15 million annual revenue (up 128% year-over-year) from real customers, with 3.1 million deployments created in 2025 (466% growth). Venice, ElizaOS, Morpheus and Gensyn are verifiable, named customers deploying real workloads. The permissionless provider model is structurally sound. Fully open source under Apache 2.0 across 65 repositories with 350-plus contributors. Osuri's background (AngelHack founder, congressional testimony on AI energy) provides genuine credibility. Listed on Coinbase and Kraken. Cosmos-based on-chain governance with active community participation: 300-plus proposals, and the community rejected Proposal #302 for transparency concerns, showing governance has real teeth. Homenode (beta February 2026) could expand the provider base by making consumer hardware eligible.

**What does not work yet.** Roughly 69 active providers is not a cloud marketplace. It is a pilot programme, and the provider count actually declined through 2025. Provider concentration means a handful of large operators serve the majority of capacity. No managed services limits enterprise adoption to teams comfortable with raw compute. Revenue growth of 128% sounds impressive until you realise it went from $1.4 million to $3.15 million, which is not meaningful at infrastructure scale. GPU utilisation at 60% reflects genuine demand but across only 700-1,000 GPUs, which is a rounding error against hyperscaler capacity.

**The risk.** Chain deprecation is the single highest-impact risk. Akash plans to deprecate its Cosmos chain in late 2026 and migrate to a new chain, with Solana mentioned as a "strong contender" but no governance vote conducted. Migrating an entire blockchain and marketplace is technically complex, operationally disruptive, and could fracture the community. There is no published technical specification. This is not an upgrade. It is a rebuild.

No formal protocol-level security audit has been disclosed despite the network operating since 2020. That is five-plus years of production infrastructure without a commissioned security review. The ChainLight authentication bypass vulnerability discovered in May 2024 demonstrates the attack surface is real. A spam attack in March 2025 caused degraded performance, though the network recovered.

Overclock Labs is a US-incorporated entity (Delaware), exposing the project to SEC, CFTC and compute export regulations. Osuri is the key person risk. He is the public face, strategic driver and open-source credibility anchor. The Starbonds offering introduces new dilution and regulatory dimensions that are not yet fully transparent.

**My position.** I do not hold AKT. I have indirect exposure through Venice (which uses Akash GPUs) and Morpheus (which routes compute through Akash providers). I find the project technically credible but the chain migration introduces too much uncertainty for a direct position at current prices.

## Freedom score: 66/100

Akash scores 66/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (12/20):** 99 active validators (top 100 control 63.2% of voting power). ~69 active providers with permissionless onboarding. ~700-1,000 GPUs across independent providers. Geographic distribution is real. But 69 providers is objectively thin, and the count declined through 2025. Starcluster/Starbonds introduces centralisation via enterprise datacentres with "vetted Nodekeepers". Homenode (Feb 2026 beta) is a decentralising force but very early.

**Governance decentralisation (13/20):** 300+ on-chain governance proposals with active participation. Proposal #308 had 42.31% turnout, exceeding 33.4% quorum. Community rejected Proposal #302 for lack of transparency, which shows governance has real teeth. 50% community pool tax funds community-directed spending. But Overclock Labs drives the strategic roadmap. Chain migration was announced by the founder, not governance-voted.

**Token distribution fairness (8/15):** Genesis was insider-heavy (34.5% investors, 27% team) but long-term allocation is better: 70.94% of max supply goes to mining/block rewards. All tokens now fully vested and unlocked. Total raise was very modest ($4.1M). Not a fair launch, but the small raise and majority mining allocation are above average.

**Censorship resistance (10/15):** Permissionless provider and tenant participation. No KYC required. Reverse auction is on-chain and transparent. But Starcluster introduces "vetted Nodekeepers" as a potential censorship vector. Overclock Labs is US-incorporated (Delaware) and subject to regulatory pressure. Spam attack (March 2025) demonstrated temporary disruption was possible.

**Data sovereignty (10/15):** Tenants fully control deployment configurations and data. Self-custodial Cosmos wallets. No central data collection by the protocol. Homenode lets users control their own hardware. But providers physically host workloads and could theoretically inspect containers. No encryption at the compute layer. ChainLight vulnerability (patched) showed potential for unauthorised deployment access.

**Open source and transparency (13/15):** Fully open source under Apache 2.0 across 65 repositories. Active development with real commits (Mainnet 14 was a major Cosmos SDK migration). All governance proposals public on GitHub. Quarterly Messari reports and internal blog provide regular transparency. Near-exemplary. But no formal security audit despite five-plus years of operation. Overclock Labs' corporate financials not public. Starbonds introduces an opaque financial dimension.

### Path to improvement

Three changes would materially increase Akash's score:

1. **Commission a formal security audit.** Five years of production infrastructure without a third-party security review is indefensible. The ChainLight vulnerability proved the attack surface exists. An audit by a credible firm would address the most obvious gap in Akash's otherwise strong transparency position.
2. **Execute the chain migration transparently.** Publish a technical specification. Run a governance vote on the destination chain. Provide a detailed migration timeline with milestones. The current state, aspirational timelines with no published roadmap, creates justified uncertainty.
3. **Grow the provider count.** Roughly 69 providers, declining through 2025, is not decentralised cloud. Homenode is a step in the right direction. The target should be hundreds of active providers across multiple geographies before claiming the "decentralised AWS" positioning with a straight face.

## Returns score: 66/100

AKT scores 66/100 (C grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (16/20):** AKT serves three clear functions: payment for compute on the marketplace, staking for validator security and governance, and a requirement for running validator infrastructure. Tenants pay in AKT (or USDC, with AKT settlement), and validators must bond AKT to participate. The utility is genuine and structurally necessary — the network cannot function without the token. The gap to a perfect score is the lack of a broader demand sink beyond compute settlement and staking.

**Value accrual (13/25):** The protocol takes a cut on compute fees, and staking rewards come from a combination of inflation and transaction fees. The problem is that the take rate on a $3.15 million annual revenue base generates negligible fee income relative to the token's $88 million market cap. Staking yields roughly 7.3% nominal, but after 8% inflation and the 50% community pool tax, real yield is approximately zero. You are running to stand still. BME activation would change this equation, but it has been "coming soon" for a while.

**Supply dynamics (12/20):** AKT has no hard cap and runs 8% maximum annual inflation. The BME mechanism — which would burn AKT spent on compute and mint new AKT to providers — is code-complete but not yet active. Until it activates, the token is straightforwardly inflationary. All initial investor and team allocations are fully vested, which removes cliff-dump risk, but the ongoing dilution from staking rewards is real. The 50% community pool tax redirects half of inflation to community spending, which is good governance but does not reduce supply pressure.

**Revenue sustainability (14/20):** This is Akash's strongest returns dimension relative to the field. $3.15 million in annual revenue from real customers — Venice, ElizaOS, Morpheus, Gensyn — running real workloads is more than most DeAI projects can claim. Revenue grew 128% year-over-year. The marketplace has genuine product-market fit for permissionless cloud compute at discount prices. The concern is absolute scale: $3.15 million would not register as a rounding error at AWS. The revenue is real but tiny, and the gap between "working product" and "sustainable economy" remains wide.

**Liquidity and access (10/15):** AKT is listed on Coinbase and Kraken, which provides reasonable access for Western retail and institutional buyers. Daily volume runs $1-5 million, which is adequate for moderate position sizes without excessive slippage. The notable absence is Binance — the largest exchange by volume — which limits Asian market discovery and liquidity depth. DEX liquidity on Osmosis is moderate. Not thin enough to be a problem, not deep enough to be a strength.

### Path to improvement

Three changes would materially increase Akash's returns score:

1. **Activate BME.** The burn-and-mint mechanism is the single most impactful change for AKT's economic model. Converting compute fees into token burns would create a direct link between network usage and token value. Every month it remains inactive is a month where inflation dilutes holders with no offsetting mechanism.
2. **Secure a Binance listing.** The absence from the world's largest exchange is a concrete liquidity constraint. Binance coverage would meaningfully increase daily volume, improve price discovery, and expand Akash's visibility in Asian markets where much of the retail crypto activity occurs.
3. **Scale revenue by an order of magnitude.** $3.15 million annual revenue against an $88 million market cap gives a price-to-revenue ratio of roughly 28x. That is better than most DeAI tokens but still stretched. Growing revenue toward $30 million would make the BME burn mechanism economically meaningful and support a credible value accrual narrative.
