---
title: "MOR vs TAO vs FET: Token Models Compared"
description: "Three different approaches to tokenising decentralised AI. How MOR, TAO and FET/ASI work, what drives their value, and which model aligns best with actual decentralisation."
publishDate: 2025-03-02
updatedDate: 2026-03-07
draft: false
---

## Why this comparison matters

MOR (Morpheus), TAO (Bittensor) and FET (Fetch.ai / ASI Alliance) represent three fundamentally different approaches to tokenising AI infrastructure. They look similar from the outside. All three are "AI tokens." In practice, their economic models, incentive structures and decentralisation properties are different enough that comparing them reveals what actually matters in DeAI tokenomics.

## The three models at a glance

| | MOR (Morpheus) | TAO (Bittensor) | FET (ASI Alliance) |
|---|---|---|---|
| **Supply cap** | 42 million | 21 million | ~2.72 billion |
| **Launch** | Fair launch, no pre-mine | Mining launch, early concentration | IEO + seed + private + institutional raises |
| **Insider allocation** | 0% | None formal, but early mining heavily concentrated | ~50% to founders, foundation and advisors |
| **Earning mechanism** | Stake stETH, provide compute, contribute code | Mine, validate, stake into subnets (dTAO) | Stake FET, run agents |
| **Value driver** | Compute access demand + PoL burn | Subnet quality + staking flows + alpha tokens | Agent adoption + staking |
| **Lock-ups** | 7-day on deposits; Power Factor lock voluntary (up to 6 yrs) | None (liquid on receipt, alpha conversion risk) | 21-day fixed unbonding period |

## MOR: the fair-launch compute token

**Model.** Participants contribute capital (stETH, USDC, USDT or WBTC), compute, code or community effort. In return they receive daily MOR emissions proportional to their contribution. Users hold MOR to access compute on the network via an inference-per-second (IPS) quota – the more MOR held, the more compute available. Separate from usage, 50% of MOR from protocol-owned liquidity generation is permanently burned (MRC43).

**What drives value.** Compute access demand and structural burn. MOR must be held to access inference on the network, creating persistent demand proportional to usage. The PoL burn mechanism reduces supply independently of compute queries. If demand for holding MOR grows while burns reduce supply, the token appreciates.

**Strengths.** Zero insider allocation means no unlock-driven selling pressure. The emission model is transparent and predictable. All four contributor groups are incentivised. The Power Factor multiplier (up to ~10.7x for a 6-year lock) rewards long-term conviction. Capital deposits are withdrawable after just 7 days, and earned MOR has no vesting or lock – the Power Factor lock is entirely voluntary. Protocol-owned liquidity deepens every day capital is staked.

**Weaknesses.** The network is still young, so compute demand has not yet reached the levels needed for significant burn pressure. Capital provider returns depend heavily on MOR price, which is volatile. Liquidity is thin (primarily DEX with ~$30K daily volume), making meaningful positions difficult to enter or exit.

**Alignment score.** High. The tokenomics directly incentivise the behaviours the network needs: compute provision, code contribution, capital commitment and community growth. No misalignment between token holders and network operators.

## TAO: the competitive intelligence token

**Model.** Miners compete within subnets to produce the highest-quality AI outputs. Validators assess quality and allocate rewards. Since dTAO (February 2025), emission allocation across subnets is determined by staking flows rather than the Root Network. Staking into a subnet converts TAO to that subnet's alpha token via an AMM, creating per-subnet price discovery. Emissions split 41% to miners, 41% to validators and 18% to subnet owners.

**What drives value.** Subnet quality, staking flows and alpha token dynamics. As subnets attract more stake, they earn more emissions. Registration burns (recycled to the emission pool, not permanently destroyed) create friction that regulates network growth. The first halving completed in December 2025, reducing emissions from ~7,200 TAO/day to ~3,600 TAO/day and strengthening the scarcity narrative.

**Strengths.** The competitive mechanism is genuinely innovative. It creates selection pressure that drives improvement. The 21 million cap with Bitcoin-style halving creates a strong scarcity narrative. The subnet architecture allows the network to expand into any AI domain. dTAO moved emission allocation from a centralised Root Network to a market-driven staking mechanism.

**Weaknesses.** Early mining concentration is severe – academic analysis shows a Gini coefficient of 0.9825 for stake, with the top 1% of wallets controlling ~90% of stake across most subnets. No formal insider allocation, but 5.38M TAO were mined between January 2021 and October 2023 with very limited participants. Polychain Capital incubated the project; DCG and dao5 accumulated large positions early. Governance is still concentrated – the Triumvirate (3 Opentensor Foundation employees) proposes and executes governance actions, with a Senate of top validators providing approval. The competitive dynamic favours participants with the most capital and best hardware, driving centralisation within the network.

**Alignment score.** Moderate. The competitive mechanism drives quality but also drives concentration. dTAO improved emission allocation, but stake concentration means the same wealthy participants control most of the economic power. The most successful miners are those with the most resources, which works against the decentralisation thesis over time.

## FET: the enterprise-pivot token

**Model.** FET originated as the Fetch.ai token for autonomous economic agents. In 2024 it merged into the ASI (Artificial Superintelligence) Alliance with SingularityNET (AGIX), Ocean Protocol (OCEAN) and later CUDOS. The token still trades under the FET ticker – the planned migration to an ASI ticker has not completed. In October 2025, Ocean Protocol withdrew from the alliance entirely, and Fetch.ai subsequently sued Ocean (case 1:25-cv-9210) alleging Ocean converted and dumped ~263M FET (~10% of circulating supply) on the open market. The alliance is now effectively Fetch.ai + SingularityNET + CUDOS.

**What drives value.** Agent adoption, staking demand and AI services. FET is staked on the Cosmos-based Fetchhub-4 chain for network security (~5-10% APY) with a 21-day unbonding period. The uAgents framework and Agentverse platform enable autonomous agent development. SingularityNET contributes an AI marketplace, and CUDOS provides compute infrastructure (ASI Cloud).

**Strengths.** Broad ecosystem spanning agents, AI marketplace and compute under one token. Strong marketing and institutional partnerships. High liquidity and exchange availability – the most accessible DeAI position for institutional investors. The Fetch.ai chain (Cosmos SDK) is technically sound.

**Weaknesses.** Insider allocations are among the highest in DeAI – roughly 50% of the original FET supply went to founders (20%), foundation (20%) and advisors (10%). The merger added complexity without clear integration of the underlying technology stacks. As of March 2026, Fetch.ai's Cosmos chain, SingularityNET's Ethereum/Cardano marketplace and CUDOS compute still operate as distinct platforms. The planned ASI Chain (a new blockDAG L1) is in DevNet but not yet on mainnet. The "superintelligence" branding is aspirational rather than descriptive. Ocean's departure and lawsuit exposed governance fractures and the risks of centralised alliance management. The validator set is capped at 70 – very small for a major network.

**Alignment score.** Low. The token economics are closer to a traditional VC-backed crypto project than a community-owned network. Insider allocations and foundation holdings create structural selling pressure. The governance model concentrates power in the Alliance leadership (Superintelligence Alliance Ltd, a Singapore-registered company). Ocean's exit demonstrated that "decentralised alliance" governance can fracture when corporate interests diverge.

## The comparison that matters

### Insider allocation risk

This is the single most important factor in evaluating DeAI token models. When insiders hold significant supply, their incentives diverge from other participants. They are incentivised to pump narratives to create exit liquidity, not to build sustainable infrastructure.

- **MOR:** 0% insider allocation. No insider selling pressure.
- **TAO:** No formal insider allocation, but early mining was concentrated among a small group including Polychain, DCG and dao5. Academic analysis shows the top 1% of wallets control ~90% of stake. The effect is similar to insider allocation.
- **FET/ASI:** ~50% of original FET supply to founders, foundation and advisors. Multiple institutional raises totalling ~$83M. Ocean's alleged dump of ~263M FET demonstrates the ongoing selling pressure risk from large holders.

### Value accrual mechanism

Where does value flow when the network grows?

- **MOR:** Directly to participants through emissions and Power Factor multiplied rewards. Indirectly to all holders through PoL burn-driven scarcity and growing protocol-owned liquidity.
- **TAO:** To the most competitive miners and validators. Post-dTAO, stakers earn through alpha token dynamics. Holders benefit from scarcity but passive holding without staking earns nothing.
- **FET/ASI:** To stakers through staking yields. To the foundation through network fees. To insiders through appreciation of their holdings.

### Practical decentralisation

How decentralised is the network in practice, not marketing?

- **MOR:** High. Four independent contributor groups. No single entity controls emissions or governance in the long term. Bootstrap-phase controls are the main caveat.
- **TAO:** Moderate. dTAO improved emission allocation by replacing the centralised Root Network with market-driven staking. But governance remains concentrated – Triumvirate of 3 OTF employees, Senate of top validators, and extreme stake concentration (Gini 0.9825).
- **FET/ASI:** Low. Superintelligence Alliance Ltd is a Singapore-registered company with a formal board. Validator set capped at 70. Ocean's departure exposed that alliance governance is corporate, not community-driven. Tech stacks remain separate platforms despite the merged token.

## Which to hold

This is not financial advice. It is my framework for thinking about these positions.

**MOR** if you believe in the compute network thesis and want exposure to a genuinely fair-launched project. Highest alignment between tokenomics and decentralisation goals. Highest risk because the network is youngest.

**TAO** if you want exposure to the largest decentralised AI network and believe the competitive subnet model will drive value. Accept the governance centralisation risk and the early-holder concentration.

**FET/ASI** if you want the most liquid, most institutionally accessible DeAI position and are less concerned about actual decentralisation. Be aware that the alliance has fractured (Ocean's exit and lawsuit) and the technology integration remains incomplete. The token will likely trade on narrative and partnerships more than on-chain fundamentals.

I hold positions in MOR and TAO. I do not hold FET. These positions reflect my assessment that tokenomic alignment with actual decentralisation matters more than branding and institutional backing.
