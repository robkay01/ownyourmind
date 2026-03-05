---
title: "Autonolas"
description: "An autonomous agent protocol for building, deploying, and co-owning AI agents across nine blockchains. Real on-chain usage (14.5M transactions, 542 daily active agents) but 99.6% token decline, tiny marketplace economics, and 42.65% insider allocation with no enforced vesting."
category: "agent"
token: "OLAS"
status: "active"
freedomScore: 6
returnsScore: 3.5
returnsScoreBreakdown:
  tokenUtility: 14
  valueAccrual: 6
  supplyDynamics: 4
  revenueSustainability: 4
  liquidityAccess: 7
returnsScoreEvidence:
  tokenUtility: "Staking for agent rewards, bonding, governance. Real utility exists."
  valueAccrual: "$89K marketplace turnover. 99.6% token decline. Mechanics not working."
  supplyDynamics: "1B cap with 42.65% insider allocation. No enforced vesting."
  revenueSustainability: "Tiny marketplace volume. Emission-dependent entirely."
  liquidityAccess: "Thin liquidity. Daily volume <$1M. 99% drawdown hurts."
publishDate: 2025-03-02
draft: false
coingeckoId: "autonolas"
launchType: "ico"
chain: "Ethereum / Gnosis Chain"
supplyType: "capped"
maxSupply: "1B OLAS (10-year cap)"
verdict: "Genuine on-chain agent usage and strong open-source credentials, but the economics are not working. $89K marketplace turnover, 99.6% token decline, and 42.65% insider allocation with no enforced vesting. A technically credible protocol that has not yet solved its tokenomics."
oymHolds: false
---

## What it does

Olas (formerly Autonolas) is a protocol for building and running autonomous AI agents on-chain. You build an agent, register it as an NFT on the Olas registry, and deploy it to do useful work. If other people use your agent code, you earn rewards. If you stake OLAS and run an agent, you earn rewards based on what that agent actually does. The protocol calls this Proof-of-Active-Agent.

The architecture has three layers. The on-chain registry is an NFT-based system for components, agents, and services, enabling composable software reuse and tracking who built what. The tokenomics layer coordinates incentives through bonding (protocol-owned liquidity modelled on Olympus DAO), developer staking (code top-ups for used components), and Proof-of-Active-Agent staking emissions. The governance layer uses veOLAS (vote-escrowed OLAS, locked for up to four years) for Snapshot and on-chain voting.

The execution layer is where it gets interesting. Agent services run off-chain as multi-agent systems using Tendermint for consensus between agent instances, while being crypto-economically secured on public blockchains via Safe multisig wallets. The protocol is deployed across nine chains: Ethereum, Gnosis Chain, Polygon, Solana, Arbitrum, Optimism, Base, Celo, and Mode.

Three products drive usage. Pearl is a consumer app (macOS only) that lets non-technical users own and operate autonomous agents with one-click staking. The Mech Marketplace enables agent-to-agent transactions, where agents hire other agents for specialised tasks. Olas Predict runs autonomous prediction market trading agents on Gnosis Chain and Polymarket.

The project was built by Valory AG, a Zug-based company co-founded in mid-2021 by David Minarsch (PhD in Applied Game Theory from Cambridge, former Head of Multi-Agent Systems at [Fetch.ai](/projects/fetch-asi/) where he created the original AEA framework), David Galindo (former Associate Professor of Computer Security at University of Birmingham, 2,625 academic citations), and Oaksprout the Tan (pseudonymous DeFi community contributor). Team size is approximately 30. Ellie Hirschhorn (ex-CoinDesk COO, Harvard MBA) serves as Chief Growth Officer.

Funding totals $18.35 million: a $4 million seed round (October 2022, led by True Ventures), a $547,580 Liquidity Bootstrapping Pool on Fjord Foundry (July 2023, 149 holders), and a $13.8 million OTC round (February 2025, led by 1kx). Other backers include Zee Prime Capital, Borderless Capital, and Signature Ventures.

## Value proposition

The pitch is "co-own AI." Build agents, register them on-chain, earn rewards when they do useful work. The protocol's Proof-of-Active-Agent staking rewards actual agent activity, not passive token lockup. This is a meaningful distinction. Most staking mechanisms reward you for doing nothing. Olas rewards you for running agents that meet performance targets.

The on-chain usage is genuine. 14.5 million total transactions. 542 daily active agents across nine chains. 11.1 million agent-to-agent transactions through the Mech Marketplace. On Gnosis Chain specifically, Olas agents are responsible for over 35% of all Safe transactions, with 300-plus daily active agents and 340,000-plus monthly transactions. The Olas Predict agents achieve 79% prediction accuracy. These are not testnet numbers or inflated metrics. This is real, on-chain, verifiable activity.

Pearl makes agent ownership accessible. Install the app, stake OLAS, launch an agent. Agents like Polystrat (Polymarket trading), Omenstrat (Omen prediction markets), and BabyDegen (DeFi) run autonomously and earn rewards based on performance. The "own, don't rent" philosophy is aligned with the sovereignty thesis.

The counter-narrative is straightforward. The marketplace turnover is $89,000 total. Not per day. Total. The agent economy generates impressive transaction volume but negligible economic value. Reports of 138% staking APY are meaningless when the token has declined 99.6% from its all-time high. You can earn high nominal yields on an asset that has lost nearly all its value.

The [Fetch.ai](/projects/fetch-asi/) connection is notable. Minarsch built the original Autonomous Economic Agent framework at Fetch.ai, then left and forked it as Open AEA, removing Fetch.ai's centralised registry dependencies. Olas is, in a meaningful sense, the decentralised successor to what Minarsch originally built at Fetch.ai. Whether that is an advantage (deep domain expertise, years of iteration) or a limitation (same fundamental approach, different token) depends on your perspective.

## Tokenomics

OLAS is an ERC-20 on Ethereum. Maximum supply: 1 billion over the first 10 years via an S-shaped emission curve, then capped at 2% annual inflation. Current total supply: 527.9 million. Circulating supply: 236.2 million (44.75%) as of March 2026.

Distribution:

- **Developer Incentives and Bonders:** 47.35% (distributed autonomously by the protocol over 10 years via bonding discounts and developer code top-ups)
- **DAO Founding Members:** 32.65% (buOLAS tokens with annual release events through July 2026; no mandatory vesting enforced by smart contract)
- **Valory AG (Core Contributor):** 10.0% (no locking or vesting requirements)
- **DAO Treasury:** 10.0% (controlled by DAO governance; mostly untouched)

The insider allocation is 42.65% (founding members plus Valory). The critical detail: neither the founding member allocation nor Valory's allocation has enforced vesting. The founding members' buOLAS tokens have annual unlock events, but these are not smart contract-enforced lockups. Valory's 10% has no lock-up at all. For a protocol marketing decentralisation and community ownership, this is a significant trust gap.

The developer incentive pool (47.35%) is the largest allocation and the most interesting. It is programmatically distributed to developers whose code is actually used by active agent services. You build a component, register it as an NFT, and earn ETH donations plus OLAS top-ups when your code runs in production. This aligns builders with ecosystem growth in a way most protocols do not.

The LBP raised only $547,580, making this one of the smaller public launches in the space. Only about 1.5% of supply went to public buyers. The recent $13.8 million OTC round (February 2025, led by 1kx) was at the Valory company level.

A 77.9 million OLAS token burn in early 2025 was notable. The Mech Marketplace also burns fees, and a buyback-and-burn mechanism operates from protocol-owned liquidity.

Market snapshot: OLAS trades at $0.036 with an $8.5 million market cap and $19.8 million FDV. That is 99.6% below the all-time high of $8.47, set on 3 January 2024. The all-time low of $0.015 was hit in February 2026. Listed on Uniswap V2, MEXC, and a few smaller exchanges. Daily volume is approximately $228,000.

## How to participate

**Run agents via Pearl.** Install Pearl (macOS only), stake OLAS, and launch an autonomous agent. Options include Polystrat (Polymarket trading), Omenstrat (Omen predictions), BabyDegen (DeFi), and Optimus (multi-strategy). Rewards depend on agent performance meeting KPI targets. No GPU required.

**Governance.** Lock OLAS for veOLAS to vote on staking emissions, protocol parameters, and treasury allocation. Longer lock periods yield more voting power (maximum four years). Vote via Snapshot (off-chain) or on-chain proposals. No direct yield from governance locking.

**Build agents.** The most technically demanding participation mode. Use the Open Autonomy Framework (Python, Docker, Tendermint) to build agent services. Register components and agents as NFTs on the on-chain registry. Earn ETH donations and OLAS top-ups when your code is used. Apply to the Olas Accelerator for up to $1 million plus developer rewards. Documentation is solid at stack.olas.network.

**Use the marketplace.** Hire AI agents for tasks via the Mech Marketplace, or offer your own agents' services for crypto payments. Currently early-stage with limited turnover.

## Honest assessment

**What works.** The on-chain usage is real and verifiable. 14.5 million transactions, 542 daily active agents, and dominance of Gnosis Chain prediction markets (35% of all Safe transactions, 79% prediction accuracy) are genuine metrics that most AI/crypto projects cannot match. Olas has been on mainnet since July 2023. This is not vapourware.

The open-source output is substantial. 146 repositories, 13,698 commits on the primary repo, 15,162 commits on Open AEA. All core code is Apache-2.0 or MIT licensed. Two Code4rena audits completed (December 2023 and January 2026) plus an Immunefi bug bounty. The developer incentive model, where protocol-level rewards flow to builders whose code is actually used in production, is structurally sound.

The founding team combines genuine academic expertise with practical experience. Minarsch's Cambridge PhD in game theory applied to multi-agent systems and his years building AEA at Fetch.ai give him domain credibility. Galindo brings cryptography and security research from Birmingham. Pearl demonstrates consumer product ambition, making agent ownership accessible beyond developers.

**What does not work.** The economics are broken. $89,000 total marketplace turnover. An $8.5 million market cap. 99.6% token decline from ATH. The agent economy generates impressive transaction volume (14.5 million) but almost no economic value. This is the core problem: Olas has found product-market fit in one vertical (prediction market bots on Gnosis Chain) but has not translated that into sustainable token demand or revenue.

The insider allocation is a structural concern. 42.65% to founding members and Valory with no enforced vesting. The FAQ explicitly states Valory's allocation has "no locking or vesting requirements." For a project built on the thesis of community ownership, this contradicts the narrative.

Pearl is macOS-only, excluding the majority of potential users. The framework complexity (Python, Docker, Tendermint, multi-agent systems) limits developer adoption compared to simpler alternatives. The Gnosis Chain concentration creates single-chain dependency risk.

The first Code4rena audit found five high-risk vulnerabilities, including a permanent DoS vector and a governance bypass. These have been addressed, but they demonstrate the smart contract complexity and associated risks.

**The risk.** The token price collapse is the defining risk. At $0.036 (99.6% below ATH), the incentive model that rewards developers and agent operators in OLAS is severely weakened. If the token stays at these levels, the 47.35% developer incentive pool is worth approximately $9 million over 10 years. That is not enough to build a thriving developer ecosystem.

The prediction market concentration is fragile. If Gnosis Chain loses relevance, or prediction market demand contracts, Olas loses its primary use case and most of its activity metrics. Diversification into DeFi, social, and enterprise agent use cases is essential but unproven.

Low liquidity ($228,000 daily volume, primarily DEX) creates execution risk for anyone taking a meaningful position. No major CEX listing beyond MEXC limits retail access.

**My position.** I do not hold OLAS. The genuine on-chain usage is worth monitoring, and the protocol architecture is technically credible. But the 99.6% price decline, the no-vesting insider allocation, and the $89,000 total marketplace turnover tell a story of a project that has solved the technical problem but not the economic one. I would reconsider if the token stabilises, Pearl launches on Windows/Linux, and marketplace turnover reaches meaningful levels.

## Freedom score: 62/100

Olas scores 62/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (12/20):** Agents run on a permissionless multi-agent framework across nine chains. Agent services use Tendermint for off-chain coordination with on-chain settlement via Safe multisigs. Anyone can register components, deploy agents, and run services without permission. However, Valory operates key infrastructure, the Open Autonomy framework has a single primary maintainer, and the vast majority of agent activity is concentrated on Gnosis Chain. Cross-chain governance bridges add complexity and potential failure points.

**Governance decentralisation (10/20):** veOLAS governance is functional with both off-chain (Snapshot) and on-chain voting. The DAO was founded in 2022 with approximately 50 participants. VoteWeighting allows veOLAS holders to direct staking emissions. Cross-chain governance bridges extend voting to six chains. However, 42.65% insider tokens (founding members plus Valory) with no enforced vesting create significant governance concentration. Governance participation rate is not publicly reported.

**Token distribution fairness (7/15):** 42.65% insider allocation with no enforced lock-up or vesting is a significant concern. Only approximately 1.5% went to the public LBP, raising $547,580. The 47.35% developer incentive pool is the largest allocation but is protocol-controlled, not directly community-held. The 77.9 million token burn in early 2025 was positive. The LBP mechanism was transparent and fair. No traditional VC round for the protocol itself.

**Censorship resistance (10/15):** Agent services are permissionless to deploy and operate. The on-chain registry is open and uncensored. Multi-chain deployment provides redundancy. Safe multisigs provide censorship-resistant agent wallets. However, Valory controls the framework and could influence agent package availability. Gnosis Chain concentration means most activity depends on one chain's liveness.

**Data sovereignty (10/15):** Agent operators maintain sovereignty over their instances and Safe wallets. Pearl enables users to own agents locally. Agent code is open-source and can be self-hosted. Component and agent NFTs are owned by their creators. However, agents depend on external protocol data (Omen, Polymarket), and the Mech Marketplace creates infrastructure dependencies.

**Open source and transparency (13/15):** All core repositories are open source under Apache-2.0 or MIT. 146 repos, 13,698 commits on the primary repo, 15,162 on Open AEA. Smart contracts verified on Etherscan. Two Code4rena audits completed. Immunefi bug bounty programme. Quarterly blog reports with transparent metrics. Minor deductions for infrastructure code opacity and unpublished 2026 audit results.

### Path to improvement

Three changes would materially increase Olas's score:

1. **Enforce vesting on insider tokens.** 42.65% insider allocation with no smart contract-enforced vesting is the single biggest credibility gap. Implementing on-chain lock-ups for the remaining founding member and Valory allocations would demonstrate genuine commitment to long-term alignment. The buOLAS annual release schedule is insufficient because it is not enforced by smart contracts.
2. **Diversify beyond Gnosis Chain prediction markets.** Over 35% of Safe transactions on Gnosis Chain is impressive but creates dangerous concentration. Demonstrating real agent activity across multiple verticals (DeFi, social, enterprise) and chains would reduce single-point-of-failure risk and broaden the protocol's value proposition.
3. **Grow marketplace economics.** $89,000 total marketplace turnover is not a functioning economy. The transaction volume (14.5 million) proves the infrastructure works. The next step is translating that volume into meaningful economic value through higher-value agent services, enterprise use cases, and broader marketplace adoption.

## Returns score: 35/100

OLAS scores 35/100 (F grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (14/20):** Credit where it is due — OLAS has more token utility than most agent protocols. Staking earns rewards tied to actual agent activity via Proof-of-Active-Agent, not just passive lockup. Bonding provides protocol-owned liquidity. veOLAS governance gives holders voting weight on emissions and protocol direction. The utility mechanisms are well-designed on paper. The problem is not the design; it is the scale at which they operate.

**Value accrual (6/25):** The marketplace has turned over $89,000. Total. Not per day, not per month — total lifetime turnover. The Mech Marketplace has processed 11.1 million agent-to-agent transactions, but the economic value flowing through those transactions is negligible. The 99.6% token decline from ATH tells you the market's verdict on the value accrual mechanics. Bonding modelled on Olympus DAO has not created meaningful protocol-owned liquidity at these volumes. The architecture for value capture exists; the value itself does not.

**Supply dynamics (4/20):** One billion token cap with 42.65% allocated to insiders — founding members and Valory — with no smart contract-enforced vesting. That is the single most damaging fact in the entire tokenomics. The buOLAS annual release schedule is a promise, not a lock. The 77.9 million token burn in early 2025 was a positive signal, but it does not offset the structural overhang of nearly half the supply sitting with insiders who can sell at any time without on-chain constraints.

**Revenue sustainability (4/20):** The protocol is almost entirely emission-dependent. Agent rewards come from token emissions, not from external revenue. The marketplace generates trivial fees. Pearl is free. There is no subscription model, no enterprise licensing, no compute fees flowing back to the protocol. If emissions stopped tomorrow, the economic incentive to run agents would collapse. This is the fundamental challenge: impressive transaction volume built on a subsidy, not on sustainable economics.

**Liquidity and access (7/15):** Daily trading volume under $1 million, primarily on DEXs. No major CEX listing beyond MEXC. The 99.6% drawdown from ATH means any holder who bought above $0.50 is sitting on catastrophic losses, which suppresses new buyer confidence. Thin liquidity creates severe slippage risk — even a $50,000 market sell would move the price meaningfully. For a protocol with genuine technical merit, the market access is remarkably poor.

### Path to improvement

Three changes would materially increase Olas's returns score:

1. **Generate real marketplace revenue.** The protocol needs transactions that produce fees, not just agent-to-agent messages. Higher-value agent services — enterprise automation, cross-chain DeFi strategies, data analysis — priced in meaningful amounts would create the fee base that makes the tokenomics work. $89,000 lifetime turnover is a prototype, not an economy.
2. **Enforce insider vesting on-chain.** Convert the buOLAS annual release schedule into smart contract-enforced vesting with transparent unlock dates. This single change would eliminate the largest source of structural sell pressure uncertainty and signal genuine long-term alignment from the founding team.
3. **Secure a Tier-1 CEX listing.** Thin DEX liquidity and sub-$1 million daily volume make OLAS practically uninvestable for anyone beyond small retail positions. A Binance or Coinbase listing would dramatically improve price discovery, reduce slippage, and broaden the holder base beyond the current niche audience.
