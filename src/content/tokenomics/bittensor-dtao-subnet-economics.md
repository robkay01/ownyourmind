---
title: "Bittensor Subnet Economics: How dTAO Actually Works"
description: "Dynamic TAO replaced political voting with market-driven emissions. Alpha tokens, AMM pools, flow-based allocation, and what subnet economics mean for TAO holders and operators."
publishDate: 2026-03-10
draft: true
---

## The old system was political

Before February 2025, a small group of root validators decided which subnets received TAO emissions. They set weights across subnets based on their judgement, and those stake-weighted votes determined each subnet's share. It was a delegated, political process. If you knew the right validators, your subnet ate well. If you did not, good luck.

Dynamic TAO (dTAO) replaced this with markets. Each subnet now has its own token, its own AMM pool, and its own price signal. Capital flows -- not committee votes -- determine who gets emissions. The system went live on mainnet around 6 February 2025.

Then in November 2025, the emission model changed again. The original price-based allocation was being gamed. Projects would inflate their alpha token price using TAO treasuries, collect outsized emissions during the slow price decline, and repeat. The replacement is flow-based: emissions track net capital movement into each subnet, smoothed over an 87-day window. Gaming a flow signal is harder than gaming a price.

Two fundamental changes in under a year. If you are holding TAO or considering subnet participation, the mechanics matter.

## Alpha tokens

Every subnet has its own alpha token. These are real on-chain tokens, not internal accounting. They live in a constant-product AMM pool paired with TAO.

When you stake TAO into a subnet, your TAO enters the reserve pool and the AMM calculates the equivalent alpha at the current exchange rate. When you unstake, it reverses -- alpha returns to the pool, TAO exits to your wallet. Minimum stake is 0.1 TAO.

Slippage is real. The docs give a worked example: a pool with 100 alpha and 10 TAO in reserves. Stake 5 TAO and you receive 33.33 alpha, not 50. That is 33% slippage. Larger stakes relative to pool size get worse. This is standard constant-product AMM behaviour, but it means entering or exiting smaller subnets carries meaningful cost.

There is also a concentrated liquidity layer (Uniswap V3 style) where liquidity providers can specify price ranges for capital efficiency. This adds flexibility but also complexity -- you need to manage price ranges, impermanent loss, and fee collection. Not for beginners.

Each subnet's alpha emission starts at 1 per block and follows its own independent halving schedule from the subnet's creation date. This creates an asymmetry I will return to.

## How emissions flow

The network currently emits 0.5 TAO per block (12-second blocks, so 3,600 TAO per day). The first halving has already occurred -- original rate was 1 TAO per block.

Emissions reach subnets in two stages.

**Stage 1: Injection (every block).** The system calculates net TAO flow into each subnet (staked minus unstaked), smooths it with an 87-day exponential moving average with a 30-day half-life, applies an offset so the worst-performing subnets receive zero, and distributes proportionally. Subnets with sustained negative flows get nothing.

**Stage 2: Distribution (every tempo, roughly 72 minutes).** Each subnet's emissions split:

| Recipient | Share |
|---|---|
| Subnet owner | 18% |
| Miners | 41% |
| Validators and stakers | 41% |

The owner share is fixed globally at 18%. Miners are allocated via Yuma Consensus (the subnet's internal ranking mechanism). Validators and stakers receive proportional to their stake.

The critical insight: emissions are no longer about which subnet has the highest alpha price or the most politically connected validators. They track where capital is actually flowing. Sustained investment earns emissions. Sustained withdrawals earn nothing.

## The zero-emission death spiral

This is by design, but worth understanding. When a subnet enters sustained net outflows, it receives zero TAO and zero alpha emissions. The pool stagnates. Slippage increases. Higher slippage encourages more outflows. More outflows ensure continued zero emissions.

It is a deliberate selection mechanism. Subnets that cannot attract and retain capital die. The network does not subsidise failure. Currently 10 subnets sit on the deregistration list. When a subnet is deregistered, alpha holders can suffer up to 96.875% loss in value through adverse AMM conversion rates.

This is the risk that most dTAO explainers skip. Alpha tokens are not stablecoins. They are not even typical altcoins with independent markets. They are AMM-denominated exposure to a specific subnet's economic viability. If the subnet fails, your alpha is worth close to nothing.

## The network today

| Metric | Value |
|---|---|
| Active subnets | 129 |
| TAO price | ~$195 |
| Circulating supply | ~9.6M TAO |
| Max supply | 21M TAO |
| Daily emission | 3,600 TAO (~$702,000) |
| Subnet registration cost | ~746 TAO (~$145,000) |
| Block time | 12 seconds |
| Tempo | ~72 minutes (360 blocks) |

The registration cost is dynamic -- it lowers gradually over time and doubles every time a new subnet is created. At $145,000, creating a subnet is not casual. Rate-limited to one creation per four days.

Each subnet supports up to 256 neurons and 64 validators.

## Notable subnets

| ID | Name | What it does |
|---|---|---|
| 0 | Root | Subnet-agnostic TAO staking (special subnet, no miners) |
| 1 | Apex (Macrocosm OS) | Open competitions for algorithmic and agentic optimisation |
| 8 | Vanta (Taoshi) | Decentralised execution engine for prop trading |
| 9 | IOTA (Macrocosmos) | Distributed AI model pretraining |

Others include Compute Horde (distributed GPU compute), Data Universe (web data collection), and TAOHash (Bitcoin mining coordination). The ecosystem is broad but most subnets are early-stage.

I could not verify top subnets by stake ranking -- taostats.io loads this data via authenticated API. This is a transparency gap. For a network that prides itself on market-driven allocation, the emission leaderboard should be publicly readable without authentication.

## The asymmetric halving problem

This is a structural issue that has been flagged in GitHub (issue #1975, August 2025) but not resolved.

Alpha emission starts at 1 per block for every new subnet, following an independent halving schedule from the subnet's creation date. But TAO emission is network-wide and has already halved to 0.5 per block.

This means older subnets have lower alpha emissions (their alpha halving is further along) while newer subnets start with full alpha emission. But the TAO injection available to all subnets is already halved at the network level.

The result: early subnets and late subnets face structurally different economics. Early subnets benefited from full TAO emission rates when they were young. Late subnets start with full alpha emission but compete for a smaller TAO pie. Whether this matters in practice depends on pool dynamics, but it is an asymmetry worth understanding if you are evaluating subnet participation timing.

## What this means for TAO holders

If you hold TAO and are not staking into subnets, you are earning nothing and being diluted by 3,600 TAO per day in new emissions. The system is designed to reward active participation, not passive holding.

Your options:

**Stake into Subnet 0 (Root).** The simplest path. No subnet-specific risk beyond TAO price. You earn a share of the 41% validator/staker allocation from Root's emissions. Lower returns than successful individual subnets, but lower risk.

**Stake into individual subnets.** Higher potential returns if you pick subnets with strong net inflows. Higher risk if the subnet enters a death spiral. Your alpha tokens carry subnet-specific risk on top of TAO price risk. Due diligence on subnet utility, team, and flow trends matters.

**Provide concentrated liquidity.** Highest complexity. Earn swap fees within your specified price range. Requires active management and understanding of impermanent loss dynamics. Not recommended unless you are experienced with DeFi liquidity provision.

**Run a subnet.** If you have $145,000 in TAO and a genuine AI workload, you can create a subnet and earn the 18% owner share. The bar is high but the economics for successful subnets are compelling -- 18% of daily emissions directed to your subnet is meaningful revenue if you can sustain positive net flows.

## What I am watching

**1. Flow concentration.** How many subnets capture the majority of emissions? If 10 subnets capture 80% of flows, the long tail of 119 subnets is fighting over scraps. The emission distribution curve matters more than the total number of subnets.

**2. Deregistration rate.** 10 subnets currently on the deregistration list out of 129 active. If this accelerates, it validates the selection mechanism but also means more alpha holders taking losses. The rate of subnet failure is a health indicator in both directions.

**3. The asymmetric halving resolution.** GitHub issue #1975 has been open since August 2025. How the team addresses (or does not address) this structural unfairness between early and late subnets will signal how seriously they take long-term economic design.

**4. Real utility metrics.** Which subnets are producing useful AI output versus which are pure staking plays? Compute Horde, Data Universe, and the pretraining subnets should have measurable throughput. If they do, publish it. If they do not, the subnet economy is speculation on speculation.

**5. Registration cost trajectory.** At $145,000, subnet creation is restricted to well-funded teams. If TAO appreciates, the dollar cost rises further. This could become a barrier to the subnet diversity the system needs.

## The honest assessment

dTAO is genuinely well-designed. Replacing political allocation with market signals is the right direction. The flow-based model (replacing the original price-based model within nine months) shows the team iterates when gaming is identified. The 87-day EMA window, the zero-emission floor for net-negative subnets, the per-subnet halving schedules -- these are thoughtful mechanisms.

But the complexity is real. Understanding alpha tokens, AMM slippage, concentrated liquidity, flow-based emissions, and subnet-specific halving schedules requires more economic literacy than most crypto participants have. The gap between "buy TAO on an exchange" and "make informed subnet staking decisions" is wide.

The system works as designed: capital flows to useful subnets, useless subnets die, and emissions reward genuine investment. Whether the current 129 subnets are mostly useful or mostly speculative is the question I cannot answer from public data. That opacity -- the difficulty of assessing individual subnet utility -- is the biggest risk for anyone staking beyond Subnet 0.

For our full assessment of Bittensor including the halving analysis, see the [Bittensor halving piece](/tokenomics/bittensor-halving-what-tao-holders-need-to-know/) and our [Bittensor review](/projects/bittensor/).
