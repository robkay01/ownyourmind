# Bittensor Subnet Economics: How dTAO Actually Works
## Turn-by-Turn Production Script

Each turn is a single dialogue exchange. Generate one clip per turn.
Clips concatenate in order with pauses to produce the final episode.

---

## TURN 01 — BOBSKI
```
Welcome back to the Own Your Mind podcast. I'm Bobski, and today we're going deep on dee-TAO -- that's Bit-tensor's Dynamic TAO system. It replaced political voting with market-driven emissions. Alpha tokens, AMM pools, flow-based allocation -- it's the biggest structural change to how Bit-tensor works. Rachel, start with the problem dee-TAO was solving.
```

## TURN 02 — RACHEL
```
And I'm Rachel. Before February 2025, a small group of root validators decided which subnets received TAO emissions. They set weights based on their judgement, and those stake-weighted votes determined each subnet's share. It was political. If you knew the right validators, your subnet ate well. If you didn't, good luck.

Dee-TAO replaced this with markets. Each subnet now has its own token, its own AMM pool, and its own price signal. Capital flows determine who gets emissions, not committee votes. It went live on mainnet around the 6th of February 2025.
```

## TURN 03 — BOBSKI
```
And then it changed again in November?
```

## TURN 04 — RACHEL
```
Yes. The original price-based allocation was being gamed. Projects would inflate their alpha token price using TAO treasuries, collect outsized emissions during the slow price decline, and repeat. The replacement is flow-based -- emissions track net capital movement into each subnet, smoothed over an 87-day window. Gaming a flow signal is harder than gaming a price.

Two fundamental changes in under a year. If you're holding TAO, the mechanics matter because they keep evolving.
```

## TURN 05 — BOBSKI
```
Let's break down alpha tokens. What are they exactly?
```

## TURN 06 — RACHEL
```
Every subnet has its own alpha token. These are real on-chain tokens, not internal accounting. They live in a constant-product AMM pool paired with TAO.

When you stake TAO into a subnet, your TAO enters the reserve pool and the AMM calculates the equivalent alpha at the current exchange rate. When you unstake, it reverses -- alpha returns to the pool, TAO exits to your wallet. Minimum stake is 0.1 TAO.

Slippage is real and often significant. The docs give an example -- a pool with 100 alpha and 10 TAO in reserves. Stake 5 TAO and you receive 33 alpha, not 50. That's 33 percent slippage. Larger stakes relative to pool size get worse. Entering or exiting smaller subnets carries meaningful cost.
```

## TURN 07 — BOBSKI
```
So this isn't like buying a token on an exchange. The pool mechanics really matter.
```

## TURN 08 — RACHEL
```
They matter enormously. There's also a concentrated liquidity layer -- Uniswap V3 style -- where liquidity providers can specify price ranges. That adds flexibility but also complexity. You need to manage price ranges, impermanent loss, fee collection. Not for beginners.

Each subnet's alpha emission starts at 1 per block and follows its own independent halving schedule from the subnet's creation date. That creates an asymmetry I'll come back to.
```

## TURN 09 — BOBSKI
```
How do emissions actually flow through the system?
```

## TURN 10 — RACHEL
```
The network emits 0.5 TAO per block -- that's 3,600 TAO per day after the halving. It reaches subnets in two stages.

First, injection -- every block. The system calculates net TAO flow into each subnet, smooths it with an 87-day exponential moving average, applies an offset so the worst-performing subnets receive zero, and distributes proportionally. Subnets with sustained negative flows get nothing.

Second, distribution -- every tempo, roughly 72 minutes. Each subnet's emissions split 18 percent to the subnet owner, 41 percent to miners, and 41 percent to validators and stakers. The key insight -- emissions track where capital is actually flowing. Sustained investment earns emissions. Sustained withdrawals earn nothing.
```

## TURN 11 — BOBSKI
```
What happens when a subnet's flows go negative?
```

## TURN 12 — RACHEL
```
This is the death spiral by design. When a subnet enters sustained net outflows, it receives zero TAO and zero alpha emissions. The pool stagnates. Slippage increases. Higher slippage encourages more outflows. More outflows ensure continued zero emissions.

Currently 10 subnets sit on the deregistration list. When a subnet is deregistered, alpha holders can suffer up to 96.875 percent loss in value through adverse AMM conversion rates.

This is the risk most dee-TAO explainers skip. Alpha tokens are not stablecoins. They're not even typical altcoins with independent markets. They're AMM-denominated exposure to a specific subnet's economic viability. If the subnet fails, your alpha is worth close to nothing.
```

## TURN 13 — BOBSKI
```
That's serious downside risk. Now you mentioned an asymmetric halving problem. What is that?
```

## TURN 14 — RACHEL
```
Each subnet's alpha emission starts at 1 per block and halves on its own independent schedule from its creation date. But TAO emission is network-wide and has already halved to 0.5 per block.

So older subnets have lower alpha emissions because their halving is further along, while newer subnets start with full alpha emission. But the TAO available to all subnets is already halved at the network level.

Early subnets benefited from full TAO emission rates when they were young. Late subnets start with full alpha but compete for a smaller TAO pie. This has been flagged on GitHub as issue 1975 since August 2025 but hasn't been resolved. It's a structural unfairness between early and late participants.
```

## TURN 15 — BOBSKI
```
What does all this mean for someone who holds TAO right now?
```

## TURN 16 — RACHEL
```
If you hold TAO and are not staking into subnets, you're earning nothing and being diluted by 3,600 TAO per day. The system is designed to reward active participation, not passive holding.

Your options -- stake into Subnet 0, that's Root. Simplest path, no subnet-specific risk beyond TAO price. Lower returns but lower risk.

Stake into individual subnets. Higher potential returns if you pick subnets with strong net inflows. Higher risk if the subnet enters a death spiral. Your alpha tokens carry subnet-specific risk on top of TAO price risk.

Provide concentrated liquidity. Highest complexity. Earn swap fees within a specified price range. Requires active management.

Or run a subnet -- if you have about 145 thousand dollars in TAO and a genuine AI workload.
```

## TURN 17 — BOBSKI
```
145 thousand dollars just to create a subnet. That's not casual.
```

## TURN 18 — RACHEL
```
It's dynamic -- lowers gradually over time and doubles every time a new subnet is created. Rate-limited to one creation per four days. At current prices, subnet creation is restricted to well-funded teams. If TAO appreciates, the dollar cost rises further. This could become a barrier to the subnet diversity the system needs.
```

## TURN 19 — BOBSKI
```
What's the honest assessment of dee-TAO?
```

## TURN 20 — RACHEL
```
It's genuinely well-designed. Replacing political allocation with market signals is the right direction. The flow-based model replacing the original price-based model within nine months shows the team iterates when gaming is identified. The 87-day EMA window, the zero-emission floor for negative subnets, the per-subnet halving schedules -- these are thoughtful mechanisms.

But the complexity is real. Understanding alpha tokens, AMM slippage, concentrated liquidity, flow-based emissions, and subnet-specific halving schedules requires more economic literacy than most crypto participants have. The gap between "buy TAO on an exchange" and "make informed subnet staking decisions" is wide.

And the biggest risk is opacity. Whether the current 129 subnets are mostly useful or mostly speculative is hard to assess from public data. That difficulty in evaluating individual subnet utility is the biggest risk for anyone staking beyond Subnet 0.
```

## TURN 21 — BOBSKI
```
So dee-TAO solved the political allocation problem but replaced it with a complexity problem. Markets are better than committees, but these markets require serious homework.

For the full breakdown with the emission flow diagrams and subnet data, head to ownyourmind.ai/tokenomics/bittensor-dtao-subnet-economics. Subscribe wherever you get your podcasts, and we'll keep tracking how this system evolves.
```

## TURN 22 — RACHEL
```
This podcast is for informational purposes only and is not financial advice. We may hold positions in tokens discussed -- disclosures are on ownyourmind.ai. Do your own research.
```
