---
title: "RENDER vs AKT vs IO: The Revenue Question"
description: "Three decentralised compute networks, three different revenue models. What Render gets right on returns, what Akash gets right on freedom, and why the trade-off matters."
publishDate: 2026-03-07
draft: false
---

## Why revenue is the question that matters

Most DeAI tokens have no revenue. Their value comes entirely from emissions – participants earn tokens funded by inflation, trade them for dollars, and the system works until it does not. The few projects that have figured out how to generate real revenue from real customers are worth studying closely, because revenue is what separates infrastructure from speculation.

Render, Akash and io.net are the three largest decentralised compute networks by market cap. All three connect GPU providers with customers who need compute. All three have tokens. But their revenue models, their customer bases and their relationship with decentralisation are fundamentally different. Those differences explain why Render scores highest on returns (72/100) despite scoring lowest on freedom (32/100) in our dual-score system.

## The three models at a glance

| | RENDER | AKT (Akash) | IO (io.net) |
|---|---|---|---|
| **Market cap** | $696M | $100M | ~$34M |
| **Revenue model** | Burn-Mint Equilibrium (BME) | Take fee on deployment spend | Incentive Dynamic Engine (IDE) |
| **2025 revenue** | ~$1M (burn-derived) | $3.15M (on-chain verified) | ~$18M ARR (self-reported) |
| **Revenue verifiable?** | Partially (burns on-chain, USD revenue not disclosed) | Yes (Cosmos transactions, Messari reports) | No (self-reported only) |
| **P/Revenue** | ~696x | ~32x | ~1.9x |
| **Supply cap** | 644M (hard) | No cap (8% inflation) | 800M (hard) |
| **Network model** | Permissioned | Permissionless | Permissionless portal |
| **Core software** | Proprietary (OTOY) | Open source (Apache 2.0) | Partially open |
| **Freedom score** | 32/100 (F) | 66/100 (C) | 40/100 (D) |
| **Returns score** | 72/100 (B) | 62/100 (C) | 49/100 (D) |

## Render: centralisation as a product strategy

Render's revenue story starts with OctaneRender. OTOY built one of the most widely used GPU rendering engines in the creative industry, with native integrations into Blender and Cinema 4D. The Render Network is OctaneRender's distributed backend – studios submit rendering jobs to a network of GPU operators instead of buying their own render farms.

The burn mechanism is straightforward. When a creator pays for a rendering job, 95% of the RENDER spent is permanently burned. 5% goes to OTOY as a service fee. Node operators receive newly minted RENDER from an emission pool. If burns exceed emissions, the token becomes deflationary.

Burns grew 279% year-over-year through 2025. Monthly burns increased from roughly 20,000 RENDER in January to 121,000 in September. Sixty-nine million frames have been rendered, with 35% of all-time volume in 2025 alone. The trajectory is real.

The problem: monthly emissions of roughly 492,000 RENDER still outpace monthly burns of roughly 59,000 RENDER by a factor of eight. BME is net inflationary today. The system needs approximately 8x more rendering demand before it flips deflationary. That is a lot of rendering.

**Why it scores highest on returns.** Render has something most DeAI projects do not: a moat. OctaneRender is proprietary software with genuine Hollywood adoption – Beeple, Apple Vision Pro, Stability AI. Studios already using OctaneRender have a natural path to the network. The burn mechanism directly ties usage to token scarcity. The 644M hard cap with declining emissions gives a clear path to deflation at scale. And major exchange listings (Binance, Coinbase, Kraken, OKX) provide institutional-grade liquidity.

**Why it scores lowest on freedom.** Render is, functionally, OTOY's product with a token attached. The network is permissioned – operators must be approved by the Foundation. The rendering engine, node client, job routing and allocation algorithm are all proprietary closed-source software. Nine public GitHub repos contain essentially zero operational code. OTOY's treasury holds 23.3% of supply with no vesting. If OTOY disappeared, the network would likely cease to function.

**The uncomfortable truth.** Render's returns score is high precisely because it is centralised. The proprietary rendering engine is the moat. The permissioned network ensures quality. The Foundation controls who participates. This produces a better product, which drives adoption, which drives burns, which drives token value. Decentralisation would likely reduce output quality and weaken the revenue model.

## Akash: freedom as infrastructure

Akash takes the opposite approach. Anyone with qualifying hardware can become a provider – no application, no approval, no permission required. The entire stack is open source under Apache 2.0. On-chain governance has processed 300+ proposals with 42% voter turnout. The token is both the staking asset (securing the Cosmos chain) and the payment currency for compute.

Revenue is modest but verifiable. Akash generated $3.15M in on-chain revenue in 2025, growing 128% year-over-year. Messari publishes quarterly reports that anyone can audit. Unlike Render, where USD revenue is not disclosed, every dollar of Akash revenue is a Cosmos transaction you can trace.

The customer base is crypto-native but growing. Venice.ai processes billions of inference tokens through Akash. ElizaOS uses AkashChat as its default inference API. Morpheus has a one-click Console template. Gensyn runs H100 nodes for reinforcement learning. Average lease value doubled year-over-year to $25.03, indicating higher-value workloads replacing the low-value spam that plagued the network in early 2025.

Akash's pricing advantage is real: 70-85% cheaper than AWS SageMaker for equivalent GPU workloads. AkashML offers inference at $2-4 per million tokens versus OpenAI's $15.

**Where it falls short on returns.** No supply cap – 8% annual inflation dilutes holders. Staking yields roughly 7.3% nominal, which nets -0.7% real yield after inflation. The approved BME mechanism (AEP-76) has not yet activated – when it does, tenants will burn AKT to mint compute credits, creating deflationary pressure. But until it activates, AKT's value accrual is weak. Liquidity is thinner than Render – no Binance listing, $1-5M daily volume versus Render's $41M.

**Where it wins on freedom.** Permissionless participation, open-source everything, on-chain governance, verifiable revenue. If Overclock Labs disappeared tomorrow, the network would continue operating. That is the test of decentralisation, and Akash passes it.

The P/Revenue ratio tells a story. At roughly 32x, Akash is priced like an early-stage SaaS company with real revenue. Render at 696x is priced on narrative. The market is paying a 20x premium for Render's brand, liquidity and Hollywood associations.

## io.net: the unverifiable claim

io.net is the most aggressive of the three. It claims $18.4M in annualised revenue, 327,000 verified GPUs, and partnerships with Dell Technologies. Named enterprise customers include Leonardo.Ai (19M users, 50% GPU cost reduction), Wondera ($2.48M savings versus AWS) and UC Berkeley's RAIL Lab (92.8% cost savings).

The problem: none of this is independently verifiable. io.net's revenue figures are self-reported. There is no on-chain revenue dashboard, no Messari report, no way to audit the claims. The market has noticed – io.net's $34M market cap pricing it at 1.9x claimed revenue is the market saying "we do not believe these numbers."

The Incentive Dynamic Engine burns at least 50% of post-supplier revenue by purchasing and burning IO tokens. In theory, this creates strong deflationary pressure. In practice, with unverifiable revenue, the burn mechanism is unverifiable too.

io.net launched in June 2024 and is down 98% from its all-time high. The token still has significant unlocks through 2030. The core platform is proprietary with no on-chain governance. The enterprise case studies are compelling if true, but "if true" is doing a lot of work in that sentence.

**The lesson.** Revenue claims without verifiability are worth nothing. Akash's $3.15M of on-chain revenue is more valuable as an investment signal than io.net's $18M of self-reported revenue, because you can prove one exists and you cannot prove the other.

## The revenue comparison that matters

Strip away the marketing and look at what each token actually does with revenue:

| Mechanism | RENDER | AKT | IO |
|-----------|--------|-----|-----|
| **Does revenue burn tokens?** | Yes – 95% of job spend burned | Not yet (BME approved, not active) | Claimed – 50%+ of post-supplier revenue |
| **Does revenue flow to holders?** | No – no staking, no fee distribution | Partially – staking yields include small fee component | Not clearly documented |
| **Is revenue verifiable?** | Partially – burns on-chain, USD not disclosed | Yes – fully on-chain | No |
| **Is the system deflationary?** | Not yet (8x gap) | Not yet (inflationary by design) | Unknown |
| **Revenue growth rate** | +279% YoY burns | +128% YoY spend | N/A (too new) |

Render has the best-designed value capture mechanism (BME). Akash has the most trustworthy revenue data. io.net has the best enterprise story if you trust the numbers.

## The freedom-returns trade-off

This is the core question for practitioners. Does centralisation produce better returns?

The data says yes, for now. Render's proprietary engine, permissioned network and curated operator base produce a higher-quality product that attracts higher-value customers. The Hollywood partnerships are real. The OctaneRender integration is a genuine moat. And the market rewards this with a $696M valuation.

Akash's open, permissionless model produces a more ideologically pure product but a messier one. The spam attack in early 2025 exposed the costs of permissionless access. Provider count has declined from a peak to 69 active providers. The customer base is crypto-native rather than Hollywood-grade. And the market prices this at $100M – one-seventh of Render's valuation.

But markets are not always right about time horizons. Akash has three structural advantages that may matter more over the long term:

1. **Verifiable revenue builds trust.** As institutional capital enters DeAI, auditable on-chain revenue will be a prerequisite for serious allocation. Render's opaque revenue reporting will become a liability.

2. **Permissionless scales differently.** Render's permissioned model requires Foundation approval for every new operator. Akash's permissionless model lets anyone with hardware join. At scale, the permissionless model adds supply faster.

3. **BME activation could be catalytic.** When Akash activates its burn mechanism, it will have both verifiable revenue and a deflationary token mechanic. That combination, with a 32x P/Revenue versus Render's 696x, could make AKT the more attractive risk-adjusted position.

## My framework

I hold both RENDER and AKT. Different positions for different theses.

**RENDER** is a bet on rendering demand and the OctaneRender moat. I accept the centralisation. I am not buying it for the sovereignty thesis. I am buying it because 69 million rendered frames and 279% burn growth suggest real product-market fit, and the BME mechanism will reward that adoption if it continues.

**AKT** is a bet on permissionless compute becoming the default. The revenue is smaller but growing, verifiable and diversifying beyond crypto-native customers. The BME activation is a catalyst that the market has not yet priced. At 32x P/Revenue with 128% growth, the valuation is reasonable if the growth trajectory holds.

I do not hold **IO**. Unverifiable revenue, 98% drawdown from ATH, ongoing token unlocks and no on-chain governance make it too opaque for my risk tolerance. The enterprise partnerships may be real. If io.net publishes verifiable on-chain revenue, I will reassess.

The broader lesson: freedom and returns are genuinely in tension for compute networks today. Render proves that centralisation can produce better short-term returns. Akash bets that freedom produces more durable infrastructure. Both can be right on different timescales. The question is which timescale you are investing for.
