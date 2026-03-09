---
title: "Golem Network"
description: "Golem Network review — the original decentralised compute network (2016). Permissionless P2P marketplace, 82% ICO distribution, zero protocol revenue. Freedom Score and honest assessment."
category: "compute"
token: "GLM"
status: "active"
freedomScore: 7
returnsScore: 4.6
returnsScoreBreakdown:
  tokenUtility: 10
  valueAccrual: 6
  supplyDynamics: 14
  revenueSustainability: 5
  liquidityAccess: 11
returnsScoreEvidence:
  tokenUtility: "Sole payment currency for compute. Deposit mechanism for pre-payment. Arkiv data writes. No staking, no governance weight. Pure medium of exchange."
  valueAccrual: "No burn, no staking, no protocol fee capture, no revenue sharing. High token velocity – providers sell immediately. 0% commission on all compute."
  supplyDynamics: "Fixed 1B supply, 100% circulating. No inflation, no unlocks. FDV = market cap. Clean structure but no deflationary mechanism."
  revenueSustainability: "0% commission – protocol captures zero revenue. Pricing at $0.001-$0.01/core-hour. Salad.com partnership is engineering test only. Sustainability depends on treasury."
  liquidityAccess: "Binance, Coinbase, OKX, KuCoin, Upbit, Gate.io. $5-9M daily volume. 44 exchanges. Good coverage for $133M market cap."
publishDate: 2025-03-06
draft: false
coingeckoId: "golem"
launchType: "ico"
chain: "Ethereum / Polygon"
supplyType: "capped"
maxSupply: "1,000,000,000 GLM"
verdict: "The OG decentralised compute network with one of crypto's fairest token distributions. Ten years of building with zero protocol revenue and a token that captures no value from usage."
oymHolds: false
---

## What it does

Golem Network is a peer-to-peer marketplace for computing power – one of the oldest decentralised compute projects in existence. Conceived in 2014, presented at DEVCON0, and funded via a legendary 2016 ICO that raised 820,000 ETH (~$8.6M) in under an hour, Golem connects **Providers** (who share spare CPU/GPU resources) with **Requestors** (who consume compute) using the GLM token as the payment medium.

The core software is **Yagna**, an open-source Rust framework that handles task negotiation, execution, and payment. Providers run Yagna on their own hardware – there are no centralised data centres. Requestors submit jobs which are split into subtasks and distributed across provider nodes for parallel processing.

Supported workloads include 3D rendering/CGI (the original use case), AI model inference, scientific simulations, zero-knowledge proof generation (via Satori integration), and general-purpose batch compute. Pricing runs approximately $0.001/core-hour for CPU and $0.01/core-hour for GPU – claimed to be 70-90% below AWS equivalent.

Payments operate on Ethereum mainnet and Polygon L2 (added 2021). Yagna v0.16.0 (August 2024) introduced a smart contract deposit mechanism allowing end-users to pre-pay for compute through a lock contract.

Founded by **Julian Zawistowski**, **Piotr Janiuk**, **Aleksandra Skrzypczak**, and **Andrzej Regulski**. The entity is **Golem Factory GmbH**, registered in Zug, Switzerland. In 2019, Zawistowski and Regulski departed to establish the **Golem Foundation**, a separate non-profit entity pursuing "riskier" research. Over $40M in ETH and GNT was transferred from Factory to Foundation – a significant leadership and treasury split.

Current leadership: Piotr Janiuk (CEO, co-founder, mathematics/CS, University of Warsaw), Przemyslaw Rekucki (CTO), Pawel Burgchardt (CPO), Arkadiusz Cybulski (Head of AI/GPU).

**Brass Golem** (2018) was one of the first Ethereum mainnet applications. The token migrated from GNT to GLM (ERC-20, 1:1 swap, no deadline) in 2020.

## Value proposition

The OG decentralised compute network with ten years of continuous development. Golem's value proposition is simple: permissionless, censorship-resistant computing power at 70-90% below cloud provider pricing.

The most commercially significant recent development is the **Salad.com partnership** (January 2026). Salad is a $200M+ revenue GPU cloud platform, and the engineering test mirrors Salad's commercial workloads (AI inference, 3D rendering, drug discovery simulations) onto Golem's permissionless execution layer. If this progresses beyond testing, it represents Golem's first real commercial integration at scale.

**Arkiv** extends Golem's reach – a decentralised database and data availability layer operating as an L2 on Ethereum with L3 DB-Chains, using GLM for data writes. This is a meaningful extension of GLM utility beyond compute.

The **Ecosystem Fund** has supported six projects including Web3 Pi (Ethereum nodes on Raspberry Pi), Satori Network (ZK proving, mainnet integration July 2025), and Keccak Optimization (ZK proof research).

The counter-narrative is severe: **Golem has zero protocol revenue.** The protocol charges 0% commission on provider earnings. GLM earned by providers is sold immediately – high token velocity with no value capture. After ten years of building, the protocol has no sustainable revenue model. The team's financial sustainability depends on treasury assets and the Foundation's holdings – neither of which is transparently disclosed.

Development velocity has slowed. The yagna core repo shows no commits since October 2025. Modelserve AI (the key AI product) has been temporarily suspended. Blog frequency dropped to roughly one post per quarter. Meanwhile, Akash, Render, and io.net have all gained more market traction in the AI compute narrative.

The 2019 leadership split is concerning. Two entities (Factory and Foundation) with shared token but divergent strategies and separate treasuries. The Factory builds the protocol; the Foundation pursues research. Coordination between them is unclear.

For the sovereignty thesis, Golem scores well. The network is explicitly designed as censorship-resistant computing. Anyone can join without permission or KYC. All core code is GPL-3.0 licensed with 76+ contributors. The 82% ICO distribution is one of the fairest in crypto history. The architecture is genuinely permissionless and decentralised.

## Tokenomics

GLM has a fixed supply of 1 billion tokens – **100% circulating.** No inflation, no future emissions, no remaining unlocks, no vesting. FDV equals market cap. This is about as clean as token supply gets.

The 2016 ICO distributed 82% of tokens to participants – extraordinary by any standard. Golem Factory received 12%, and the team received 6%. All tokens were immediately liquid.

GLM is used for compute payment (sole currency between requestors and providers), smart contract deposits for pre-payment (v0.16), and Arkiv data writes. There is no staking mechanism, no burn mechanism, no governance token weighting, and no fee-sharing. The protocol charges 0% commission.

The token velocity problem is structural. Providers earn GLM for compute and sell it for operating costs. Without staking lock-ups, burn mechanics, or protocol fee capture, there are no supply-side sinks. Token value depends entirely on compute demand exceeding sell pressure from providers.

GLM trades at approximately $0.13 with a market cap around $133M. Daily volume approximately $5-9M. Listed on 44 exchanges including Binance, Coinbase, OKX, KuCoin, and Upbit. 19,813 holders on Ethereum – remarkably low for a 2016-vintage token.

## How to participate

**Become a Provider.** Share spare CPU/GPU resources. Install Yagna, configure hardware, earn GLM from requestors. Permissionless, no KYC. Technical skill: intermediate.

**Submit Compute Jobs.** Use the Yagna SDK (Python, TypeScript) or CLI to distribute tasks across the network. Pay in GLM. Pricing ~$0.001/core-hour CPU, ~$0.01/core-hour GPU. Technical skill: intermediate to advanced.

**Build on Arkiv.** Use the L2/L3 data availability layer for decentralised database applications. GLM used for data writes. Technical skill: advanced.

## Honest assessment

### Freedom Score: 70/100 (C)

Golem is one of the most genuinely permissionless and open-source compute networks in crypto, with an unusually fair token distribution.

**Infrastructure Decentralisation: 14/20.** Permissionless P2P network – anyone can join as provider or requestor without permission. Providers run their own hardware. Payments on Ethereum and Polygon. Relay infrastructure and task matching involve some centralised coordination points. Provider count is modest compared to competitors like Akash or io.net.

**Governance Decentralisation: 10/20.** GAPs (Golem Amendment Proposals) exist as a governance mechanism since 2020. In practice, Golem Factory GmbH retains control over protocol development, roadmap, and treasury. The 2019 split created two entities which distributes power somewhat, but neither is community-governed. No formal DAO. Ecosystem Fund allocation is team-directed.

**Token Distribution Fairness: 11/15.** 82% of tokens went to ICO participants – one of the fairest distributions in crypto history for a 2016 project. Only 18% to team/company. Fully circulated with no remaining unlocks. The $40M+ transfer to Foundation concentrates significant resources, but the initial distribution was exemplary.

**Censorship Resistance: 11/15.** Explicitly designed as censorship-resistant computing. Permissionless participation without KYC. Supports arbitrary workloads. However, providers choose which tasks to accept, and the network's small scale means coordinated disruption is feasible. No specific anti-censorship technology like encrypted task delegation.

**Data Sovereignty: 10/15.** Requestors send tasks to providers – data leaves the requestor's machine. Plans for VPN capabilities and SGX exist but are not in production. No TEE or confidential computing currently deployed. Arkiv extends data sovereignty concepts. Current data privacy during compute is limited.

**Open Source Transparency: 13/15.** All core code GPL-3.0 licensed. 100+ repos, 76+ contributors on yagna. OpenZeppelin audited the token contract with "very good" rating. Team is identifiable and public-facing. Development cadence has slowed (5-month gap on yagna repo). Foundation activities are less transparent than Factory's.

### Returns Score: 46/100 (D)

**Token Utility: 10/20.** GLM functions solely as a payment medium – requestors pay providers in GLM. The deposit mechanism adds smart contract locking for pre-payment. Arkiv extends utility to data writes. However, there is no staking requirement, no governance voting weight, no fee-sharing mechanism. The token is a pure medium of exchange – relatively thin utility compared to tokens with staking, governance, and burn mechanics.

**Value Accrual: 6/20.** GLM has no burn mechanism, no staking rewards, no protocol fee capture, and no revenue sharing. The token's value depends entirely on demand for compute priced in GLM. With no supply-side sinks, token velocity is high – providers earn and sell immediately. The deposit mechanism creates temporary lock-up but not permanent value accrual. FDV = market cap (no dilution), which is the sole positive.

**Supply Dynamics: 14/20.** Strong fundamentals: fixed 1B supply, no inflation, no future emissions, no remaining unlocks. FDV = market cap. 82% distributed to public. All vesting complete (there never was any). Clean structure. Deducted for: no deflationary mechanism, no staking lock-up, and ~20% held by team/foundation entities.

**Revenue Sustainability: 5/25.** Golem charges 0% commission on provider earnings – the protocol captures zero revenue from usage. Pricing at $0.001-$0.01/core-hour is extremely low. The Ecosystem Fund finances development but its size and runway are not disclosed. The Foundation holds significant assets but this is a separate entity. Salad partnership is an engineering test, not a revenue contract. Without protocol-level revenue capture, sustainability depends on treasury management.

**Liquidity & Access: 11/15.** Listed on 44 exchanges including Binance, Coinbase, OKX, KuCoin, and Upbit – excellent coverage. $5-9M daily volume provides adequate liquidity. Available on Uniswap for decentralised access. Polygon bridge available. Volume at ~4% of market cap is moderate.

### Quadrant: B (High Freedom, Low Returns)

Golem sits firmly in Quadrant B – one of the strongest sovereignty plays in decentralised compute with genuine permissionless infrastructure and an exemplary token distribution, but fundamentally weak value capture that limits investment returns.

### Key risks

- **Zero protocol revenue.** 0% commission means the protocol captures no value from ten years of network usage. Structurally unsustainable without treasury subsidies.
- **Token velocity problem.** No staking, no burn, no lock-up incentives. GLM earned by providers is sold immediately, creating persistent sell pressure.
- **Development stagnation.** Yagna core repo shows no commits since October 2025. Modelserve AI suspended. Blog frequency dropped to quarterly.
- **Leadership fragmentation.** The 2019 split divided resources, talent, and $40M+ in treasury between Factory and Foundation. Coordination unclear.
- **Competitive erosion.** Akash, Render, and io.net have all gained more traction in the AI compute narrative despite Golem's 10-year head start.
- **Low holder count.** 19,813 holders for a 2016-vintage token suggests limited and declining retail interest.
- **Salad dependency.** The most promising commercial development is currently only an engineering test – not a committed production deployment.
- **84% from ATH.** Token peaked at $0.86 in November 2021 and has been in steady decline.
