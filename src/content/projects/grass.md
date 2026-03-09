---
title: "Grass"
description: "Grass review — bandwidth-sharing DePIN network with 8.3M monthly active nodes. How to earn GRASS, tokenomics, and why 190-country scale doesn't mean decentralised."
category: "data"
token: "GRASS"
status: "active"
freedomScore: 4
returnsScore: 5.5
returnsScoreBreakdown:
  tokenUtility: 12
  valueAccrual: 8
  supplyDynamics: 8
  revenueSustainability: 15
  liquidityAccess: 12
returnsScoreEvidence:
  tokenUtility: "Token used for enterprise LCR product. Users earn via bandwidth sharing."
  valueAccrual: "Enterprise demand buys tokens. But foundation controls revenue flows opaquely."
  supplyDynamics: "1B cap. Team/investor allocation significant. Wide airdrop but insider heavy."
  revenueSustainability: "Real enterprise customers (AI companies). Growing revenue."
  liquidityAccess: "Listed on Bybit, Gate.io, KuCoin, Kraken, Bitget, Bithumb. Daily volume approximately $49M. Strong retail access."
publishDate: 2025-03-03
draft: false
coingeckoId: "grass"
launchType: "airdrop"
chain: "Solana"
supplyType: "capped"
maxSupply: "1B GRASS"
verdict: "Impressive scale and real enterprise traction, but this is a centralised data business with a token incentive layer. Code is entirely closed-source, governance exists only in documentation, users contribute bandwidth without any sovereignty over the data produced, and all revenue flows through an opaque Foundation. The widest airdrop in Solana history does not make a network decentralised."
oymHolds: false
---

## What it does

Grass is a bandwidth-sharing network on Solana where users install a browser extension, desktop app, or Android app that contributes unused internet bandwidth to scrape public web data for AI training. The pitch is simple: you have spare bandwidth, AI companies need web data, Grass connects the two and you earn tokens. 8.3 million monthly active nodes across 190 countries are doing this right now, retrieving 3 petabytes of data per day.

The architecture has five layers. Grass Nodes are lightweight clients that relay web traffic using residential IP addresses. Routers are intermediary infrastructure connecting nodes to validators and managing network accountability. Validators process and verify web transactions, generating zero-knowledge proofs to checkpoint session data on-chain. A ZK Processor batches these proofs and submits them to Solana. Edge Embedding Models convert the raw scraped data into structured formats suitable for AI training. A Sovereign Data Rollup on Solana is planned to provide verified data with full provenance tracking, though its operational status remains unclear despite being described as "launching soon" throughout 2024 and 2025.

Live Context Retrieval (LCR) is the enterprise product. When an AI model receives a prompt, Grass retrieves relevant current information from the web to supplement the prompt before it reaches the model. Every LCR call requires GRASS tokens; fiat payments are converted to GRASS.

The project was founded by Andrej Radonjic (CEO) and Chris Nguyen (CTO). Radonjic holds a Master's in Mathematics and Statistics from York University and a Bachelor's in Engineering Physics from McMaster. He was pursuing a PhD in computational physics before founding Wynd Labs during the pandemic. Nguyen is identified through a Backblaze case study and Wellfound but maintains a limited public profile. Radonjic is the only publicly doxxed team member. The operating entities are Wynd Labs (headquartered in Toronto, Canada; incorporation jurisdiction not publicly disclosed) and the Grass Foundation (a separate entity managing token contracts and revenue). Team size is undisclosed.

The GRASS token launched on 28 October 2024 via Airdrop One, distributing 100 million tokens (10% of supply) to 2.8 million eligible wallets. No ICO or IDO was held.

## Value proposition

The pitch is that AI companies need vast quantities of web data, and millions of residential internet connections can provide it at scale, with better coverage and lower detection rates than data centre scraping. This is genuinely true. Residential IPs bypass bot detection and geo-restrictions that block data centre connections, giving Grass a structural advantage in data collection.

The scale is real. 8.3 million monthly active nodes with 1 million concurrent connections, retrieving 3 petabytes daily. Approximately 20 enterprise customers, described as including "the largest AI labs," with "seven-figure revenue clients." The VALID dataset, a collaboration with LAION and Ontocord, produced 14 terabytes of multimodal data from 720,000 CC-BY YouTube videos (30 million audio snippets, 15 million images). ClipTagger-12b, a 12-billion parameter vision-language model built with Inference.net, reportedly benchmarks favourably against GPT-4.1 and Claude 4 Sonnet at 15x lower cost. These are tangible outputs.

The airdrop was genuinely wide. 2.8 million recipients received 10% of supply with no lockup. 88.36% was claimed by 2.06 million wallets. For context, most Solana airdrops reach a few hundred thousand addresses. Grass reached 2.8 million. The minimum threshold of 500 points (roughly 100 hours of uptime) was accessible to anyone with an internet connection.

The counter-narrative is straightforward. "Decentralised data layer for AI" is the tagline, but the data layer is centralised. Wynd Labs and the Grass Foundation control all enterprise relationships, data storage (centralised on Backblaze B2, 2-3 petabytes uploaded daily), validation (transitioning from a single centralised validator), and revenue (all flows to the Foundation with no public reporting). Users contribute bandwidth but have zero control over what is scraped, who buys the data, pricing, or protocol direction. This is bandwidth rental, not data ownership.

The code is entirely closed-source. Wynd-Network's GitHub organisation has zero public repositories. GrassFoundation has one repository (GrassDownload, an HTML page). Node software, router software, validator software, and the ZK processor are all proprietary. You cannot independently verify claims about zero-knowledge proofs, data handling, or network architecture.

## Tokenomics

GRASS is an SPL token on Solana (contract: Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs). Fixed supply: 1 billion. Total supply: 1 billion. Circulating supply: 542.2 million (54.22%) as of March 2026.

Distribution:

- **Early Investors:** 25.2% (252M GRASS; 1-year cliff reached October 2025, then linear over 12 months; approximately 39% unlocked as of March 2026)
- **Foundation and Ecosystem Growth:** 22.8% (228M GRASS; cliff period then linear over 60 months; managed by Grass Foundation; approximately 37% unlocked)
- **Contributors (Team):** 22% (220M GRASS; 1-year cliff reached October 2025, then linear over 36 months; approximately 14% unlocked)
- **Future Incentives:** 17% (170M GRASS; linear over 36 months, no cliff; allocated for Season 2 airdrop and ongoing rewards; approximately 68% unlocked)
- **Airdrop One:** 10% (100M GRASS; 100% unlocked at TGE; distributed to 2.8M wallets; 88.36% claimed)
- **Router Rewards:** 3% (30M GRASS; linear over 30 months; approximately 55% unlocked)

The insider allocation is 47.2% (25.2% investors plus 22% team). The Foundation controls an additional 22.8%. Community allocation is 30% (10% Airdrop One plus 17% Future Incentives plus 3% Router Rewards). The October 2025 cliff released approximately 181 million investor tokens (50% of the investor allocation). Monthly linear unlocks continue across all categories through 2028-2029.

No burn mechanism exists. Staking yields approximately 7.49% APR via delegation to routers, with a 7-day unstaking period. Slashing is planned but not currently implemented; when it arrives, it will be manual and multisig-controlled.

Funding totals $14.5 million across four rounds: $1 million pre-seed (No Limit Holdings, July 2023), $3.5 million seed (Polychain Capital and Tribe Capital co-leads, December 2023), undisclosed Series A (HackVC lead, with Delphi, Brevan Howard Digital, Lattice, September 2024), and $10 million bridge/token purchase (Polychain and Tribe Capital, October 2025). Polychain Capital invested three times.

Market snapshot: GRASS trades at $0.30 with a $163 million market cap and $300 million FDV. Listed on Bybit, Gate.io, KuCoin, Kraken, Bitget, and Bithumb. Daily volume is approximately $49 million. The ATH of $3.89 was hit on 8 November 2024, just eleven days after launch. The token is currently 92% below that peak.

## How to participate

**Run a Grass node.** The most accessible entry point. Install the browser extension, desktop app, or Android app. The node passively shares unused bandwidth to scrape public web data. No hardware purchases, no staking, no technical knowledge. Earn Grass Points based on bandwidth contribution, uptime, and location. Points convert to GRASS tokens during airdrop distributions. Requires a residential IP (data centre IPs are not eligible).

**Stake GRASS.** Delegate tokens to router operators via grassfoundation.io/stake. Routers with more delegated stake receive more network traffic, generating higher rewards. Approximately 7.49% APR. No minimum stake. 7-day unstaking period.

**Operate a router.** Advanced participation. Routers relay bandwidth between nodes and validators. Earn rewards from the 30 million Router Rewards allocation plus commission on delegator rewards. Hardware requirements not publicly specified. Details limited.

**Enterprise access.** AI companies access Grass data through the Foundation. Approximately 20 current customers. Vetting process and service agreement required. Pricing not publicly disclosed.

## Honest assessment

**What works.** The scale is genuinely impressive. 8.3 million monthly active nodes across 190 countries makes Grass one of the largest DePIN networks by participant count, full stop. That is not an inflated claim; CoinGecko, Nansen, and the project's own metrics align on this figure. The 3 petabytes per day of data retrieval is driven by actual customer demand, not testnet simulation.

The enterprise traction is real. Approximately 20 paying companies with "seven-figure revenue clients." The VALID dataset collaboration with LAION and Ontocord produced a 14-terabyte open dataset (CC-BY) that demonstrates the data pipeline converts bandwidth into usable AI assets. ClipTagger-12b is a published model with Apache-2.0 licensing. These are verifiable outputs, not promises.

The airdrop model deserves credit. 2.8 million recipients receiving 10% of supply with no lockup is one of the widest distributions in Solana history. The 500-point minimum threshold meant anyone who ran the extension for roughly 100 hours could qualify. This created a genuine base of millions of token holders, even if many were airdrop farmers.

The barrier to entry is essentially zero. Install an extension, earn tokens. No hardware investment, no staking minimum, no technical skills. This is how you get 8.3 million participants. The Android app (launched July 2025) extended access further.

AppEsteem cybersecurity certification with continuous monitoring by Avast, Microsoft Defender, and McAfee provides third-party validation that the software is not malware, addressing the most obvious concern about bandwidth-sharing applications.

**What does not work.** The code is entirely closed-source. Wynd-Network's GitHub has zero public repositories. You cannot read the node code, the router code, the validator code, or the ZK processor code. Every technical claim, the zero-knowledge proofs, the data provenance, the separation of personal browsing from network traffic, is unverifiable. For a project describing itself as a decentralised data layer, this is the most fundamental credibility gap possible.

Governance is non-functional. The documentation references DAO governance and 22.8% of supply allocated to Foundation and Ecosystem Growth "managed by DAO governance." In practice, no governance proposals have been submitted, no votes have occurred, no governance forum exists. All decisions are made by Wynd Labs and the Grass Foundation. The 22.8% Foundation allocation is team-controlled spending dressed in DAO language.

Users have no data sovereignty. You contribute bandwidth; the Grass Foundation captures all value from the resulting data. You have no control over what is scraped through your connection, no visibility into who buys the data, no say in pricing, and no share of enterprise revenue beyond token rewards. Your residential IP address is used as an exit node for web scraping. If a client scrapes restricted or copyrighted content through your connection, the legal exposure sits with you, not the Foundation. Web scraping legality varies by jurisdiction and is actively contested under GDPR, CFAA, and the EU Digital Services Act.

Validation is centralised. The documentation describes transitioning from a single centralised validator to a decentralised validator committee, but the current state is unclear. If one entity validates all data provenance claims, those claims rest on trust, not cryptographic verification.

Revenue is opaque. "Seven-figure clients" and "the largest AI labs" are referenced but no revenue figures, client names, or financial reporting are published. All revenue flows to the Grass Foundation. There is no on-chain transparency into how these funds are used.

**The risk.** Exit node liability is the defining risk for participants. Your IP address is being used to scrape the web on behalf of unknown third parties. Despite client vetting and activity monitoring, the legal landscape for web scraping is shifting rapidly. The EU Digital Services Act, GDPR enforcement, and US CFAA precedents are creating a more restrictive environment. If regulators decide that bandwidth contributors are facilitating unauthorised data collection, millions of users face potential exposure.

The insider token concentration creates sustained sell pressure. 47.2% to investors and team, with the October 2025 cliff having released approximately 181 million tokens. Monthly unlocks continue through 2028-2029. At 92% below ATH, the token has already absorbed significant selling, but hundreds of millions of tokens remain locked.

Single-team dependency is acute. Wynd Labs controls all development, infrastructure, and client relationships. One publicly doxxed team member. If the team disappears or pivots, the network has no fallback. There is no open-source code to fork, no community governance to redirect, and no decentralised infrastructure to persist independently.

The Sovereign Data Rollup has been "launching soon" for over a year. Without it, the ZK proof claims are marketing rather than verifiable technology. Shipping the rollup with open-source code would address the two largest credibility gaps simultaneously.

**My position.** I do not hold GRASS. The scale is genuine and the enterprise traction is real; those are not in dispute. But I cannot hold a token where the code is entirely closed-source, governance does not exist in practice, users have no sovereignty over the data their bandwidth produces, and all revenue flows through an opaque Foundation. I would reconsider if the core code is open-sourced, if governance materialises with real proposals and votes, if the Sovereign Data Rollup ships with verifiable ZK proofs, and if revenue transparency improves. The business works; the decentralisation does not.

## Freedom score: 37/100

Grass scores 37/100 (F grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (10/20):** 8.3 million monthly active nodes across 190 countries is genuinely distributed infrastructure at the edge. Nodes are permissionless; anyone with a residential IP can participate. However, validation is currently transitioning from a single centralised validator with the end state unclear. Routers are operated by approved infrastructure providers, not permissionlessly. Data storage is centralised on Backblaze B2 (2-3 petabytes daily). The Sovereign Data Rollup is planned but not confirmed live. Core scraping coordination, client management, and data delivery are controlled by Wynd Labs and the Grass Foundation. Permissionless at the edge, centralised at the core.

**Governance decentralisation (4/20):** DAO governance is referenced in documentation with 22.8% of supply allocated to Foundation and Ecosystem Growth "managed by DAO governance." In practice, no governance proposals have been submitted, no voting has occurred, and no governance forum exists. All decisions are made by Wynd Labs and the Grass Foundation. The 47.2% insider allocation (investors plus team) and Foundation-controlled 22.8% concentrate power. No evidence of meaningful community governance.

**Token distribution fairness (7/15):** Airdrop One (10% of supply to 2.8 million recipients with no lockup) was one of the widest distributions in crypto history. Future Incentives (17%) and Router Rewards (3%) provide ongoing community allocation totalling 30%. However, insider allocation is 47.2% (25.2% early investors plus 22% team). The 22.8% Foundation allocation is team-controlled. No public sale was held; funding came exclusively from VC rounds. The wide airdrop partially offsets the heavy insider concentration.

**Censorship resistance (6/15):** Nodes are permissionless and can contribute bandwidth from any residential connection. However, enterprise clients must go through a vetting process with service agreements; the Foundation controls all data access. Clients can be "immediately banned for activity deemed sketchy." Staking contracts include manual multisig-controlled slashing capability. Certain jurisdictions are excluded from token eligibility. The browser extension and apps can be removed from app stores. Permissionless contribution, controlled consumption.

**Data sovereignty (5/15):** Users contribute bandwidth but do not own or control the scraped data. The Grass Foundation captures all value from data and sells it to enterprise clients. Contributors have no control over what is scraped through their connection. Users act as exit nodes with their residential IP addresses used for third-party scraping. ZK proofs create data provenance records, but these are unverifiable with closed-source code. The Foundation has full visibility into all scraped data. Despite privacy safeguards and minimal personal data collection, the fundamental model is: users provide the resource, the Foundation captures the asset.

**Open source and transparency (5/15):** Wynd-Network GitHub has zero public repositories. GrassFoundation has one repository (GrassDownload, HTML). Node software, router software, validator software, and ZK processor are all proprietary. The Cantina security competition (June-July 2024, $15,000 prize pool, 116 findings) reviewed three Solana programmes but these are not publicly accessible. On the positive side, the VALID dataset is CC-BY, ClipTagger-12b is Apache-2.0, AppEsteem certification provides third-party security monitoring, and the token contract is on-chain and verifiable. Financial transparency is limited with no revenue disclosure.

### Path to improvement

Three changes would materially increase Grass's score:

1. **Open-source the core code.** Zero public repositories is the single biggest credibility gap. Open-sourcing the node software, router software, and ZK processor would allow independent verification of every technical claim: the zero-knowledge proofs, the traffic separation, the data provenance. It would also enable community contributions and reduce single-team dependency. This is the highest-leverage change Grass could make.
2. **Ship functional governance.** Launch a governance forum, publish the first proposals, run the first votes. The documentation already describes DAO governance; deliver it. Even modest governance, letting token holders vote on Foundation spending priorities or router selection criteria, would demonstrate the project is serious about decentralisation. Currently it is pure narrative.
3. **Publish revenue and data transparency.** Disclose aggregate revenue figures, number of enterprise clients, and how Foundation funds are allocated. If GRASS is "the primary vehicle for value accrual" as stated, token holders deserve visibility into what value is being accrued and where it flows. Quarterly transparency reports would be table stakes for a project claiming to be community-owned.

## Returns score: 55/100

GRASS scores 55/100 (C grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (12/20):** GRASS is required for Live Context Retrieval (LCR), the enterprise product where AI models pull real-time web data to supplement prompts. Fiat payments from enterprise clients convert to GRASS, creating buy pressure proportional to usage. Users earn GRASS through bandwidth sharing. Staking to routers yields approximately 7.49% APR. The utility exists but is narrow – the token serves as a settlement layer for data access and a reward mechanism for bandwidth contribution. There is no governance utility in practice (despite documentation claiming it), and the staking mechanism lacks slashing enforcement, which reduces its economic credibility.

**Value accrual (10/25):** The thesis is that enterprise demand for AI training data drives GRASS purchases. Approximately 20 enterprise customers, including "the largest AI labs" and "seven-figure revenue clients," theoretically create demand-side pressure. The fundamental problem is that all revenue flows through the Grass Foundation with zero transparency. No revenue figures are published. No client names disclosed. No on-chain verification of enterprise payments. Token holders are asked to trust that value accrues to the token, but the mechanism by which Foundation revenue translates to GRASS demand is entirely opaque. There is no burn mechanism, no fee distribution, and no verifiable buyback programme.

**Supply dynamics (8/20):** GRASS has a 1 billion hard cap, which provides a ceiling, but the distribution beneath it is heavily insider-weighted. Investors hold 25.2% and team 22%, for a combined 47.2% insider allocation. The Foundation controls an additional 22.8%. The October 2025 cliff released approximately 181 million investor tokens, and monthly linear unlocks continue through 2028-2029. Hundreds of millions of tokens remain locked. The wide airdrop to 2.8 million wallets was genuinely impressive, but 10% community distribution does not offset 47.2% insider concentration. At 92% below ATH, much of the selling may be absorbed, but the overhang from ongoing unlocks creates sustained downward pressure.

**Revenue sustainability (12/20):** The enterprise traction is the strongest element of Grass's returns case. Real AI companies paying for real data derived from 3 petabytes of daily web scraping is a legitimate business. The VALID dataset (14 terabytes, CC-BY) and ClipTagger-12b (Apache-2.0) are verifiable outputs that demonstrate the data pipeline works. Revenue is described as growing with "seven-figure clients." The concern is that sustainability depends entirely on Wynd Labs and the Grass Foundation maintaining enterprise relationships – if the team disappears, the revenue disappears, because there is no open-source code to fork and no decentralised infrastructure to persist independently.

**Liquidity and access (10/15):** GRASS is listed on Bybit, Gate.io, KuCoin, Kraken, Bitget and Bithumb, with daily volume of approximately $49 million. The Binance listing provides the deepest liquidity pool. For a token at $0.30 with a $163 million market cap, the exchange coverage is solid and allows moderate position sizes without excessive slippage. The 2.8 million airdrop recipients created a wide holder base, though many are likely inactive. DEX liquidity on Solana supplements the centralised exchange coverage.

### Path to improvement

Three changes would materially increase Grass's returns score:

1. **Publish revenue figures and Foundation financials.** The complete opacity around revenue is the single biggest drag on the returns case. Enterprise customers exist, but without published revenue, token holders cannot assess whether GRASS is fairly valued, overvalued, or undervalued. Quarterly revenue disclosure and Foundation spending reports would transform the investment thesis from trust-based to evidence-based.
2. **Implement a verifiable token burn or buyback mechanism.** There is currently no mechanism linking enterprise revenue to token value. A burn on LCR payments, an on-chain buyback programme, or a fee distribution to stakers would create a direct, verifiable connection between network usage and token economics. Without this, GRASS is a reward token with no reflexive demand loop.
3. **Reduce insider unlock pressure.** The 47.2% insider allocation with ongoing linear unlocks through 2028-2029 creates years of sustained sell pressure. Extending vesting schedules, implementing performance-based unlock milestones, or converting a portion to staking-locked tokens would signal long-term alignment and reduce the overhang that weighs on price discovery.
