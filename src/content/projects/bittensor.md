---
title: "Bittensor"
description: "Bittensor review — the largest decentralised AI network by market cap. TAO tokenomics, dTAO subnet economics, halving schedule, Freedom Score and honest assessment."
category: "platform"
token: "TAO"
status: "active"
freedomScore: 6
returnsScore: 6.3
returnsScoreBreakdown:
  tokenUtility: 17
  valueAccrual: 11
  supplyDynamics: 15
  revenueSustainability: 6
  liquidityAccess: 14
returnsScoreEvidence:
  tokenUtility: "Staking required for participation. Burn for registration. Governance. Essential."
  valueAccrual: "Stake to participate. No direct fee distribution. dTAO creates market-based allocation."
  supplyDynamics: "21M hard cap with halving complete. No ICO, no pre-mine, no VC allocation. But early mining concentration is extreme (Gini 0.98) with limited initial participants."
  revenueSustainability: "No external revenue. Entirely emission-driven. Subnets compete for emissions."
  liquidityAccess: "Binance, Coinbase, Kraken. $100M+ daily volume. Highly liquid."
publishDate: 2025-03-02
draft: false
coingeckoId: "bittensor"
launchType: "mining"
chain: "Bittensor L1"
supplyType: "capped"
maxSupply: "21M"
verdict: "Largest DeAI network with real workloads. PoA block production and governance far more centralised than marketed. No security audit."
oymHolds: false
podcastUrl: "/podcast/Own-Your-Mind-001-Bittensor.mp3"
---

## What it does

Bittensor is an incentivised network for AI. The architecture is built around subnets, each one a specialised marketplace for a specific type of AI task. One subnet handles text generation. Another handles image generation. Others handle translation, code review, data scraping, embeddings, or any other AI workload someone decides to build a subnet for.

Each subnet has miners (who perform the work) and validators (who assess the quality). Miners compete to produce the best outputs. Validators score the miners and distribute TAO rewards accordingly. The system creates a Darwinian selection pressure where the best-performing miners earn the most and underperforming ones get pushed out.

There are currently 128+ active subnets. Anyone can create a new one by registering it on the network and attracting miners and validators. Leading subnets include Chutes (serverless inference, processing billions of tokens daily), Gradients (model training, cheaper than Google Cloud), and Nineteen (inference speed records). All three are built by Rayon Labs.

## Value proposition

Bittensor's core argument: the market is better at producing intelligence than any single company. By creating an open, incentivised system where anyone can contribute AI capabilities and earn for it, you get a network that is more diverse, more resilient and more innovative than a centralised alternative.

For miners, the value is direct. Run AI models, produce good outputs, earn TAO. The better your outputs relative to competitors, the more you earn.

For validators, the value is curation. Assess quality, allocate rewards, shape which miners succeed. Validators earn TAO for maintaining network quality.

For token holders, the value is ownership of the network's productive capacity. As demand for AI workloads grows and flows through Bittensor subnets, the network becomes more valuable.

For developers, the value is infrastructure. Build a subnet for any AI task, attract miners and validators, and create a decentralised marketplace without building the underlying incentive and consensus layer yourself.

## Tokenomics

TAO has a fixed supply cap of 21 million, mirroring Bitcoin's design. The first halving completed on 14 December 2025, cutting emissions from 1 TAO/block (~7,200/day) to 0.5 TAO/block (~3,600/day). Current inflation is approximately 12-13% annually. Circulating supply is ~10.7M TAO (~51% of max).

Dynamic TAO (dTAO), launched February 2025, replaced the Root Network validator oligarchy with market-driven emission allocation. Each subnet now has its own alpha token traded against TAO in an on-chain AMM. Stakers vote with their TAO by depositing into subnets they believe produce value. Emission allocation follows an 86.8-day EMA of net staking flows.

The emission split is fixed at 41/41/18 between miners, validators and subnet owners.

- **Miners** earn TAO for producing high-quality outputs within their subnet
- **Validators** earn TAO for accurately assessing miner quality via Yuma Consensus
- **Subnet owners** earn 18% of their subnet's emissions for defining the incentive mechanism

The critical economic dynamic is competition within subnets. Miners with better hardware, better models and better optimisation earn disproportionately more. Academic analysis (arXiv, 2025) found that stake weight is the primary driver of rewards (0.50-0.80 correlation), not AI output quality (0.10-0.30 correlation). The protocol rewards capital concentration more than quality contributions.

Registration on popular subnets requires burning TAO. This creates a cost barrier that prevents spam but also means you need capital to participate as a miner or validator. TAO spent on registration is recycled back to the unissued emission pool; it is not a permanent burn.

## How to participate

**Mine a subnet.** Choose a subnet, set up the required hardware and software, register, and start producing outputs. Earnings depend on your performance relative to other miners. Popular subnets are competitive and require significant hardware. Newer subnets offer better entry points.

**Validate.** Run a validator on one or more subnets. Requires staking TAO and running validation infrastructure. Validators earn emissions for accurately scoring miners.

**Stake TAO.** Delegate to validators on specific subnets or the Root Network. Root staking returns ~14-20% APY nominal. Subnet staking converts TAO to alpha tokens with higher potential returns (80%+) but alpha price risk. Minimum 0.1 TAO. No hard lock-up but unstaking involves AMM conversion at market rate.

**Build a subnet.** Create a new subnet for an AI workload that does not exist on the network yet. This is the most ambitious path and requires both technical capability and the ability to attract miners and validators.

## Honest assessment

**What works.** Bittensor is the largest decentralised AI network by market cap (~$1.9B), with 128+ subnets and 8,000+ reported GPU nodes. The subnet architecture is genuinely innovative. dTAO was a meaningful improvement over the Root Network oligarchy. The Bitcoin-modelled tokenomics (21M cap, halving schedule, fair launch) give it the cleanest scarcity narrative in the space. Institutional adoption is real: Grayscale filed for a spot ETF, DCG launched a dedicated subsidiary (Yuma), and it has listings on Binance, Coinbase and Kraken.

**What does not work yet.** The barrier to entry for mining is high and getting higher. Competitive subnets require serious hardware investment with no guarantee of returns. Most subnets have not demonstrated output quality exceeding centralised alternatives. Academic analysis shows stake weight drives rewards more than AI output quality.

**The concern.** Bittensor's decentralisation narrative significantly overstates its operational reality. The Opentensor Foundation validates all blocks (Proof of Authority), can halt the entire network (demonstrated July 2024), and controls governance proposals through a 3-person Triumvirate. No timeline for PoS transition has been published. A $28-30M insider hack by former OTF employees in mid-2024 exposed real security failures. No third-party security audit has been publicly disclosed for the core protocol. The top 1% of wallets control approximately 90% of stake (Gini coefficient ~0.98).

**The fair launch question.** Technically clean: no ICO, no pre-mine, no VC allocation. But 5.38M TAO were mined between January 2021 and October 2023 with very limited participants and no public accounting of where those tokens went. Polychain Capital and DCG accumulated significant positions, likely through early mining or OTC.

**The competitive dynamic.** Mining Bittensor is closer to competitive gaming than passive yield farming. You need to constantly optimise, upgrade hardware and adapt to changing subnet dynamics. If you are looking for passive income, this is not it. If you enjoy the technical challenge and have the hardware, it can be rewarding.

**My experience.** I have explored Bittensor mining and found the barrier to entry on established subnets too high for my hardware. Newer subnets offer better opportunities but come with the risk of lower and more volatile emissions. I hold TAO as a network exposure position but do not actively mine.

## Freedom score: 56/100

Bittensor scores 56/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (12/20):** 128 subnets, 8,000+ reported GPU nodes, permissionless mining. But OTF validates all blocks (PoA) and can halt the network. No PoS timeline published.

**Governance decentralisation (9/20):** Triumvirate (3 OTF employees) plus Senate (top validators). dTAO improved emission allocation. But OTF controls proposals, intervened in SN28, and top 1% hold ~90% of stake.

**Token distribution (8/15):** Fair launch technically (no ICO, no pre-mine). But 5.38M TAO mined 2021-2023 with limited participants. Gini ~0.98.

**Censorship resistance (8/15):** Permissionless subnets. No content policy. But OTF controls block production, halted the network in July 2024, and intervened in SN28.

**Data sovereignty (10/15):** Local miner execution, self-custodial wallets, no platform surveillance. But coldkey exposure on every operation, no ZK on inference.

**Open source transparency (9/15):** MIT licence, 64 public repos, active development. But no security audit, no bug bounty, opaque early distribution, OTF finances undisclosed.

### Path to improvement

Three changes would materially increase Bittensor's score:

1. **Transition from Proof of Authority to Proof of Stake.** OTF validating all blocks is the single largest centralisation vector. The network cannot credibly claim decentralisation while one foundation controls block production and has demonstrated willingness to halt the chain. Publishing a concrete PoS transition timeline with milestones would be the highest-impact action available.
2. **Commission a third-party security audit.** A network with a $1.9 billion market cap and a history of a $28-30 million insider hack has no disclosed security audit. This is indefensible. An audit of the core protocol, consensus mechanism and smart contracts by a credible firm would address the most obvious gap.
3. **Reform governance beyond the Triumvirate.** Three OTF employees controlling governance proposals for a network of this scale is not decentralised governance. Expanding proposal rights to the broader validator set or implementing a community proposal mechanism would distribute decision-making power meaningfully.

## Returns score: 63/100

TAO scores 63/100 (C grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (17/20):** TAO is structurally essential to every layer of the network. Miners and validators must stake TAO to participate. Registering on popular subnets requires burning TAO, creating a direct cost barrier that ties network growth to token demand. dTAO alpha tokens create a market-based allocation mechanism where stakers vote with capital on which subnets deserve emissions. Governance participation requires stake. The token is not an optional add-on – without TAO, the entire incentive architecture collapses.

**Value accrual (14/25):** Staking TAO earns emissions from the subnets you back, and dTAO creates market-driven pricing for subnet access. Root staking yields 14-20% nominal APY; subnet staking can exceed 80% but carries alpha token price risk. The weakness is that there is no direct fee distribution mechanism. No compute fees, no inference fees, no protocol revenue flows back to holders. Value accrual is entirely through emissions and subnet alpha token appreciation. Academic research showing stake weight (0.50-0.80 correlation) drives rewards more than output quality (0.10-0.30) suggests the system rewards capital concentration over productive contribution.

**Supply dynamics (18/20):** This is TAO's standout dimension. The Bitcoin-modelled tokenomics – 21 million hard cap, halving completed in December 2025, fair launch with no ICO or pre-mine – give it the cleanest scarcity narrative in the DeAI space. Post-halving emissions of approximately 3,600 TAO per day represent roughly 12-13% annual inflation against circulating supply, which is moderate and declining. Registration burns recycle TAO back to the emission pool rather than destroying it permanently, so the burn is not deflationary in the traditional sense, but it does create friction that regulates network growth.

**Revenue sustainability (5/20):** This is the critical gap. Bittensor generates zero external revenue. The entire economic model runs on emissions. Subnets compete for a share of daily TAO emissions, not for customer payments. Chutes processes billions of tokens daily and Gradients claims to be cheaper than Google Cloud, but neither generates revenue that flows back to the protocol. Until subnets develop independent revenue streams that supplement or replace emissions, TAO's economic model is a closed loop where miners and validators earn tokens funded by inflation, not by external demand for AI services.

**Liquidity and access (14/15):** TAO has the deepest liquidity in the DeAI space. Listed on Binance, Coinbase, Kraken and other major exchanges, with daily volume consistently exceeding $100 million. A Grayscale spot ETF filing and DCG's dedicated Yuma subsidiary add institutional-grade access. You can enter or exit a substantial position without moving the market. For a sector plagued by thin liquidity, this is a genuine competitive advantage.

### Path to improvement

Three changes would materially increase Bittensor's returns score:

1. **Develop subnet revenue mechanisms.** The zero external revenue score is the biggest drag on TAO's returns profile. Enabling subnets to charge for inference, compute or data services – with a protocol-level fee that accrues to TAO stakers – would transform the economic model from emission-dependent to revenue-generating.
2. **Implement protocol-level fee distribution.** Even a small take rate on subnet activity, distributed to TAO stakers, would create real yield backed by productive output rather than inflation. This would give TAO a value accrual mechanism comparable to Ethereum's fee burn or Cosmos hub fees.
3. **Reduce the stake-weight dominance in reward allocation.** Academic analysis shows stake weight drives rewards far more than AI output quality. Rebalancing the Yuma Consensus to reward productive contribution more heavily would improve the system's economic efficiency and reduce the perception that Bittensor is a capital game dressed in AI clothing.
