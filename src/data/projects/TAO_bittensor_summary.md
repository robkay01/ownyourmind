# Bittensor (TAO) -- Research Summary

## Research Meta
- **Researcher:** Claude (OYM Research Agent)
- **Date:** 2026-03-02
- **Version:** 1
- **Status:** Draft

## Executive Summary

Bittensor is the largest decentralised AI network by market cap (~$1.9B), built as a Substrate-based Layer 1 blockchain coordinating 128+ competitive AI subnets. The architecture is genuinely innovative: permissionless marketplaces where miners produce AI work, validators score quality via Yuma Consensus, and emissions flow to the best-performing participants. The Bitcoin-modelled tokenomics (21M cap, halving schedule, fair launch) give it a credible scarcity narrative that has attracted serious institutional capital -- Polychain Capital, DCG (which launched a dedicated subsidiary, Yuma), and Grayscale (which filed for a spot ETF).

The key finding: Bittensor's decentralisation narrative significantly overstates its operational reality. The Opentensor Foundation validates all blocks (Proof of Authority), can halt the entire network (demonstrated July 2024), and controls governance proposals through a 3-person Triumvirate. The "fair launch" is technically clean -- no ICO, no pre-mine -- but 5.38M TAO were mined during 2021-2023 with very limited participants and no public accounting. Academic analysis shows the top 1% of wallets control approximately 90% of stake (Gini coefficient ~0.98). A $28-30M insider hack by former OTF employees in mid-2024 exposed real security failures, and no third-party security audit has been publicly disclosed for the core protocol.

Dynamic TAO (launched February 2025) was a meaningful improvement, replacing the Root Network validator oligarchy with market-driven emission allocation via per-subnet alpha tokens. The first halving (December 2025) introduced real supply scarcity. Whether external demand for subnet services materialises at scale is the fundamental open question.

## What It Actually Does

Bittensor is a network of 128+ subnets, each a competitive marketplace for a specific AI workload. One subnet handles text inference. Another handles model training. Others handle prediction markets, computer vision, storage, drug discovery, weather forecasting, or any other AI task someone builds a subnet for.

Each subnet has three participant types: miners (who perform AI work), validators (who score miner quality), and a subnet owner (who defines the incentive mechanism and earns 18% of emissions). The 41/41/18 emission split between miners, validators, and subnet owners is fixed.

Miners compete to produce the best outputs. Validators assess quality using Yuma Consensus and distribute TAO emissions accordingly. Underperforming miners earn nothing. Underperforming subnets get deregistered.

The leading subnets by emission share include Chutes (SN64, serverless AI inference -- processes billions of tokens daily via OpenRouter), Nineteen (SN19, holds inference speed records), Gradients (SN56, model training -- cheaper than Google Cloud), and Templar (SN3, distributed training targeting 70B+ parameter models). All three of Chutes, Gradients, and Nineteen are built by Rayon Labs.

## How It Works (Technical)

Bittensor's blockchain (Subtensor) is a Substrate/FRAME-based Layer 1 written in Rust. It is a standalone chain -- originally intended as a Polkadot parachain but pivoted to independence. Block time is 12 seconds. Block production uses Aura for authoring and GRANDPA for finality. Critically, block production currently runs as Proof of Authority controlled by the Opentensor Foundation.

The chain handles: TAO transfers, staking/delegation, subnet and neuron registration, validator weight submissions, Yuma Consensus execution, alpha token AMMs (dTAO), and emission distribution. AI computation (inference, training, scoring) happens off-chain on miner and validator hardware.

**Dynamic TAO (dTAO)** launched February 2025 and fundamentally changed the economics. Each subnet now has its own alpha token traded against TAO in an on-chain Constant Product AMM. Stakers "vote with their TAO" by depositing into subnets they believe produce value. Emission allocation to subnets is determined by an 86.8-day EMA of net TAO staking flows. This replaced the previous system where 64 Root Network validators (an oligarchic committee) voted on emission allocation.

**Yuma Consensus** runs every 360 blocks (~72 minutes). Validators submit weight vectors scoring miners. Weights are stake-weighted and clipped against a consensus benchmark to prevent collusive overvaluation. Miners and validators who align with consensus earn more; those who deviate build weaker bonds and earn less.

**Key technical concern:** Academic analysis (arXiv, 2025) found that stake weight, not AI output quality, is the primary driver of rewards. Miner performance-to-reward correlation is only 0.10-0.30, while stake-to-reward correlation reaches 0.50-0.80. The protocol rewards capital concentration more than quality contributions.

## Tokenomics

**Token:** TAO -- native coin of the Bittensor L1. Not a smart contract token.
**Max supply:** 21,000,000 (mirrors Bitcoin exactly)
**Circulating supply:** ~10,719,000 (~51% of max, as of March 2026)

**Emission schedule:** Bitcoin-modelled disinflationary. The first halving occurred December 14, 2025, cutting emissions from 1 TAO/block (~7,200/day) to 0.5 TAO/block (~3,600/day). Halvings are triggered by supply milestones (50% of remaining unmined supply), not block height. Next halving projected ~2029 at 15.75M TAO.

**Recycling mechanism:** TAO spent on subnet registration, miner registration, and transaction fees is removed from circulation but returned to the unissued emission pool. This does not reduce the 21M cap but delays halvings. It is NOT a permanent burn.

**Distribution:** 100% through mining/validation. No ICO, no pre-mine, no VC allocation, no token sale. However, 5.38M TAO were mined between January 2021 and October 2023 with limited participants. The destination of these early-mined tokens is undocumented publicly. Polychain Capital and DCG accumulated significant positions (likely through early mining or OTC).

**Current inflation:** ~12-13% annually (post-halving). Will decline further with each subsequent halving.

**Staking:** Delegated staking with two options post-dTAO. Root staking (TAO-to-TAO, ~14-20% APY nominal, lower risk) or subnet staking (TAO converted to alpha tokens, potentially 80%+ APY but with alpha price risk). Minimum stake: 0.1 TAO. No hard lock-up but unstaking involves AMM conversion at market rate.

**Market data (March 2026):**
- Price: ~$178
- Market cap: ~$1.9B
- FDV: ~$3.73B
- 24h volume: ~$118M
- ATH: $757.60 (April 2024)
- ATL: $30.83 (May 2023)
- Listed on Binance, Coinbase, Kraken, KuCoin, MEXC, Gate.io, Crypto.com, Bitget (23+ exchanges)

## How To Participate

1. **Stake TAO** -- delegate to validators on specific subnets or Root Network. Lowest barrier. Need a Bittensor wallet (Talisman or btcli) and TAO. Root staking for conservative yield (~14-20% APY). Subnet staking for higher risk/reward (alpha token exposure). Skill: basic. [Guide](https://docs.learnbittensor.org/staking-and-delegation/delegation)

2. **Mine a subnet** -- run AI models competing for quality-based emissions. Requires GPU hardware (RTX 4090 minimum, A100/H100 for competitive subnets), 256GB RAM, NVMe SSD, 10Gbps bandwidth. TAO burn for registration. Continuous optimisation required. Skill: advanced. [Guide](https://docs.learnbittensor.org/miners)

3. **Run a validator** -- score miner outputs, earn 41% of subnet emissions (shared by stake weight). Minimum 1,000 TAO stake per subnet. Top 64 positions only. Requires high-end hardware. Skill: expert. [Guide](https://docs.learnbittensor.org/validators)

4. **Build a subnet** -- create a new AI marketplace. Define the incentive mechanism, attract miners and validators. Earn 18% of subnet emissions as owner. Dynamic TAO burn cost for registration. No formal grants programme -- protocol emissions are the funding mechanism. Skill: expert. [Guide](https://docs.learnbittensor.org/subnets/create-a-subnet)

## Freedom Score: 56/100 (Grade: C)

Bittensor scores a C, reflecting genuine decentralisation at the compute layer undermined by significant centralisation at the chain and governance layer.

| Dimension | Score | Key Evidence |
|-----------|-------|-------------|
| Infrastructure decentralisation | 12/20 | 128 subnets, 8,000+ GPU nodes, permissionless mining. BUT: OTF validates all blocks (PoA), can halt network. No PoS timeline. |
| Governance decentralisation | 9/20 | Triumvirate (3 OTF employees) + Senate (top validators). dTAO improved emission allocation. BUT: OTF controls proposals, intervened in SN28, top 1% hold ~90% of stake. |
| Token distribution fairness | 8/15 | Fair launch technically (no ICO, no pre-mine). BUT: 5.38M TAO mined 2021-2023 with limited participants. Largest wallet ~20% of supply. Gini ~0.98. |
| Censorship resistance | 8/15 | Permissionless subnets. No content policy. BUT: OTF controls block production, halted network, intervened in SN28. TAO burn barrier. |
| Data sovereignty | 10/15 | Local miner execution, self-custodial wallets. No platform surveillance. BUT: coldkey exposure on every operation, no ZK on inference. |
| Open source transparency | 9/15 | MIT license, 64 public repos, active development. BUT: no security audit, no SECURITY.md, no bug bounty, opaque early distribution, OTF finances undisclosed. |

**Standout:** Infrastructure at the subnet/compute layer (12/20) reflects genuinely permissionless participation across 128+ independent AI marketplaces.

**Weaknesses:** Governance (9/20) and token distribution (8/15) are the critical concerns. The Opentensor Foundation retains far more control than the "decentralised" branding suggests.

## Honest Assessment

### What Works Today
- Largest DeAI network: 128 subnets, 8,000+ GPU nodes, $1.9B market cap
- Bitcoin-modelled tokenomics with genuine fair launch -- cleanest narrative in the space
- dTAO replaced validator oligarchy with market-driven allocation -- real improvement
- Institutional adoption: Grayscale ETF filing, DCG/Yuma subsidiary, Binance/Coinbase listings
- Leading subnets producing real outputs: Chutes handling significant inference volume, Gradients cheaper than Google Cloud
- First halving completed -- disinflationary pressure active

### What's Hype
- "Decentralised" while OTF validates all blocks and can halt the network
- Fair launch narrative ignores 5.38M TAO accumulated by insiders/early participants pre-subnet era
- Miner quality claims -- academic analysis shows stake weight drives rewards (0.50-0.80 correlation), not AI output quality (0.10-0.30)
- Most subnets have not demonstrated output quality exceeding centralised alternatives
- dTAO susceptible to gaming and speculation (SN28 meme coin exploit)
- "8,000+ GPU nodes" not independently verifiable

### Key Risks
- OTF validates ALL blocks (PoA) -- most critical centralisation vector
- $28-30M insider hack by former employees; lawsuit ongoing
- No third-party security audit for core protocol
- Top 1% control ~90% of stake (Gini ~0.98)
- Post-halving inflation still ~12% -- sell pressure if external demand doesn't materialise
- PyPI supply chain attacked twice -- fundamental tooling vulnerability
- Co-founder Ala Shaabana partially departed to Crucible Labs
- Competition from centralised AI providers is orders of magnitude ahead on UX

## Key Data Points

| Metric | Value |
|--------|-------|
| Max supply | 21,000,000 TAO |
| Circulating supply | ~10,719,000 TAO (51%) |
| Price | ~$178 |
| Market cap | ~$1.9B |
| FDV | ~$3.73B |
| ATH | $757.60 (April 2024) |
| Current daily emissions | ~3,600 TAO/day (post-halving) |
| Current inflation | ~12-13% annually |
| Active subnets | 128 |
| GPU nodes | 8,000+ (reported) |
| Wallet addresses | 102,000+ |
| Discord members | ~45,500 |
| GitHub repos | 64 (MIT licensed) |
| GitHub contributors (core) | 171 |
| Security audits | None disclosed |
| Security incidents | $28-30M insider hack (2024) |
| Stake concentration | Top 1% control ~90% (Gini ~0.98) |
| Freedom Score | 56/100 (Grade C) |
| Launch type | Fair launch (mining) |
| Token type | Utility + governance (native coin) |

## Research Gaps

1. **Destination of 5.38M early-mined TAO** -- no public accounting exists
2. **Active compute node count** -- 8,000+ figure from aggregator, not verifiable on-chain
3. **Polychain incubation terms** -- never publicly disclosed
4. **Total developer count across subnets** -- not centrally tracked
5. **OTF's PoS transition timeline** -- not published
6. **Real yield calculations** -- require subnet-specific data not available in aggregate
7. **OTF financials** -- not publicly reported beyond $1.8M revenue estimate
8. **Insider lawsuit outcome** -- JustM2J LLC v Brewer et al proceeding to discovery
9. **Matthew McAteer** -- third whitepaper co-author with no post-publication project presence
10. **Exact validator count** -- not reported in aggregate across all subnets
11. **Protection Fund or Treasury** -- not documented
12. **Subnet revenue from external demand vs emission farming** -- no public breakdown

## Sources Consulted

1. [S001] Bittensor Official Documentation -- https://docs.learnbittensor.org/
2. [S002] Bittensor Whitepaper -- https://bittensor.com/whitepaper
3. [S003] opentensor/bittensor GitHub -- https://github.com/opentensor/bittensor
4. [S004] opentensor/subtensor GitHub -- https://github.com/opentensor/subtensor
5. [S005] CoinGecko -- Bittensor -- https://www.coingecko.com/en/coins/bittensor
6. [S006] CoinMarketCap -- Bittensor -- https://coinmarketcap.com/currencies/bittensor/
7. [S007] Taostats -- Bittensor Analytics -- https://taostats.io/
8. [S008] arXiv -- Bittensor Protocol Critical Analysis -- https://arxiv.org/html/2507.02951v1
9. [S009] Fortune -- VCs Pouring Hundreds of Millions into Bittensor -- https://fortune.com/crypto/2024/04/15/bittensor-tao-polychain-digital-currency-group-dao5-ai-bitcoin/
10. [S010] Bittensor Governance Documentation -- https://docs.learnbittensor.org/governance
11. [S011] Halborn -- Explained: Bittensor Hack July 2024 -- https://www.halborn.com/blog/post/explained-the-bittensor-hack-july-2024
12. [S012] OTF Community Update July 3 2024 -- https://opentensor.medium.com/bittnesor-community-update-july-3-2024-45661b1d542d
13. [S013] BlockTribune -- Lawsuit Against Former OTF Employees -- https://blocktribune.com/lawsuit-alleges-former-opentensor-employees-orchestrated-28m-crypto-heist/
14. [S014] The Block -- DCG Launches Yuma -- https://www.theblock.co/post/327428/dcg-launches-new-bittensor-focused-subsidiary-yuma-doubling-down-on-decentralized-ai-investments
15. [S015] Grayscale Research -- Bittensor Halving -- https://research.grayscale.com/reports/bittensor-on-the-eve-of-the-first-halving
16. [S016] CoinDesk -- Grayscale Files for Bittensor ETP -- https://www.coindesk.com/business/2025/12/30/grayscale-files-for-first-u-s-bittensor-etp-as-decentralized-ai-gains-momentum
17. [S017] PANews -- Why Bittensor is a Scam -- https://www.panewslab.com/en/articles/rrxcps1r
18. [S018] Bittensor Halving Countdown -- https://bittensorhalving.com/
19. [S019] Bittensor Emissions Documentation -- https://docs.learnbittensor.org/learn/emissions
20. [S020] 0xJeff -- Beginner's Guide to Bittensor -- https://defi0xjeff.substack.com/p/beginners-guide-to-bittensor-tao
21. [S021] 0xJeff -- Into the Bittensor Ecosystem -- https://defi0xjeff.substack.com/p/into-the-bittensor-ecosystem
22. [S022] IQ.wiki -- Jacob Robert Steeves -- https://iq.wiki/wiki/jacob-robert-steeves
23. [S023] IQ.wiki -- Ala Shaabana -- https://iq.wiki/wiki/ala-shaabana
24. [S024] Federal Corporation Canada -- Opentensor Foundation -- https://opengovca.com/corporation/13026531
25. [S025] Rekt News -- Bittensor Rekt -- https://rekt.news/bittensor-rekt
26. [S026] A Bittensor Journey -- 2025 End of Year Report Card -- https://www.abittensorjourney.com/p/bittensor-2025-end-of-year-report
27. [S027] Gate.io -- Bittensor Community Activity -- https://www.gate.com/crypto-wiki/article/how-active-is-the-bittensor-tao-community-and-ecosystem-in-2025
28. [S028] Blocmates -- What is Bittensor -- https://www.blocmates.com/blocmates-101/what-is-bittensor-tao
