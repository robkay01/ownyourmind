---
title: "Venice AI"
description: "Private, uncensored AI inference platform. No logs, no content filtering, API access to open-weight models with a privacy-first architecture."
category: "inference"
token: "VVV"
status: "active"
freedomScore: 6
publishDate: 2025-03-01
draft: false
coingeckoId: "venice-token"
launchType: "airdrop"
chain: "Base"
supplyType: "uncapped"
maxSupply: "100M genesis (no hard cap, inflationary via emissions minus burns)"
verdict: "Best privacy-focused inference platform available. Centralised company but aligned incentives."
oymHolds: true
---

## What it does

Venice is a private AI inference platform. You send prompts, Venice routes them through a centralised proxy to distributed GPU providers, and the response comes back without your prompts or outputs being stored anywhere. No logs. No conversation history on their servers. Everything stays in your browser's local storage.

The architecture works like this: your request hits a Venice-controlled proxy server that strips identifying information, then forwards the raw prompt to GPU providers sourced from [Akash Network](/projects/akash/), Hyperbolic and Prime Intellect. The providers see individual prompts but not who sent them or the broader conversation. Responses stream back through the proxy, all data purged immediately.

Founded by Erik Voorhees, the serial crypto entrepreneur behind SatoshiDice and ShapeShift. Venice launched in May 2024 with a team of roughly six people. The operation runs out of a Wyoming shell registration, with Voorhees based in Panama. Teana Baker-Taylor, formerly VP of Policy at Circle and UK Director at Binance, serves as co-founder and COO.

This is not a protocol. It is a company that runs a proxy server. The distinction matters for everything that follows.

## Value proposition

Venice sells privacy without friction. You open a browser, type a prompt, and get an uncensored response from open-source models (DeepSeek, Llama, Qwen, Mistral, FLUX and others) without creating an account, providing an email, or agreeing to content restrictions. Pro subscribers can disable Safe Mode entirely. The free tier gives you 10 text prompts and 15 image generations per day.

The API is OpenAI-compatible. If you have existing code calling OpenAI, you change one base URL and your prompts now route through Venice's privacy proxy instead. For developers, this is the killer feature. I use it daily.

Pro-rata staking adds a DeFi angle. Stake VVV tokens and you receive a proportional share of daily inference capacity at zero marginal cost. The more you stake relative to the total staked pool, the more compute you can access. DIEM, a derivative token, takes this further: each DIEM represents $1/day of perpetual API credit, minted by locking staked VVV and redeemable by burning the DIEM to unlock your stake.

The competitive position is clear. If you want private AI inference that actually works today, Venice is the only consumer product delivering it at scale. 1.3 million registered users and 45 billion LLM tokens processed daily are not vanity metrics. Those are real workloads. Warden Protocol alone drives roughly 1.5 million daily chats through the Venice backend. The product ships fast: text, image, video, audio, music, code, web search, voice mode and Memoria (local vector memory) all launched within 18 months.

## Tokenomics

VVV launched via airdrop in January 2025. No presale. No ICO. No private round. No VC allocation. Voorhees self-funded the entire operation. Genesis supply was 100 million VVV, distributed as follows:

- **Airdrop to Venice users:** 25% (100,000+ eligible wallets, 45-day claim window)
- **Airdrop to crypto AI communities:** 25% (Virtuals, Aero, Degen, aixbt, Morpheus and others)
- **Company operations:** 25% (no published vesting schedule)
- **Team:** 10% (25% unlocked at launch, remainder vesting over 24 months)
- **Incentive fund:** 10% (developer grants of $5,000-$100,000)
- **Liquidity:** 5% (deployed to Aerodrome DEX on Base)

The airdrop distribution was genuinely generous. When 32.6 million tokens went unclaimed after the 45-day window, Venice burned them rather than reclaiming them. That burn, valued at roughly $100 million at the time, removed about a third of genesis supply permanently. Combined with subsequent burns, 42.8% of genesis supply has been destroyed.

Emissions have been cut aggressively: four reductions in 13 months brought annual emissions from 14 million down to 6 million VVV. Monthly revenue buyback burns have been active since December 2025. Current daily emissions sit at roughly 16,400 VVV with an annual inflation rate of 7.6%.

The launch was not clean. On day one, two Aerodrome contributors purchased VVV before public announcements, turning $50,000 into over $1 million within an hour. Aerodrome flagged the trades within 30 minutes and suspended both individuals within three hours. VVV dropped 50% on the allegations. The insider trading was external to Venice, but the damage to launch credibility was real.

Market snapshot: VVV trades at $5.65 with a $250 million market cap. That is 75% below the all-time high of $22.58, reached one day after launch. Listed on Coinbase, Kraken, KuCoin, Bybit, Gate.io, OKX and Binance futures.

## How to participate

**Use the platform.** The simplest entry point. Free tier requires no account. Pro subscription runs $18/month or $149/year for unlimited text, 1,000 daily image generations, advanced model access (including Claude and GPT-5.x), voice mode and Memoria (local vector memory).

**Stake VVV.** Pro-rata staking gives you inference capacity proportional to your share of the staked pool. Seven-day unstaking cooldown. Nominal APY ranges from 20-72% depending on the period, but this yield comes from newly minted VVV, not protocol revenue. Real yield depends on whether VVV holds value against the inflation.

**Lock for DIEM.** For heavier API users: lock staked VVV to mint DIEM tokens, each worth $1/day of perpetual API credit. You get your VVV back by burning the DIEM. This is the mechanism that creates long-term lock-up demand for VVV.

**Build on the API.** The OpenAI-compatible API is the developer on-ramp. The $27 million incentive fund has run two cohorts (110+ applications in Cohort 1, roughly 30 semifinalists in Cohort 2). Grants range from $5,000 to $100,000 in VVV.

## Honest assessment

**What works.** Venice is the best consumer-facing private AI inference product available today. That is not a high bar, but Venice clears it convincingly. The privacy architecture is genuinely thoughtful. The staking model creates real utility demand. The no-VC funding model means no unlock schedule looming over the token. Product velocity has been impressive: text, image, video, audio, music, code, web search, voice mode and Memoria all shipped within 18 months of launch. The aggressive supply tightening (42.8% burned, emissions slashed, revenue buybacks active) shows a team that understands tokenomics.

**What does not work yet.** Governance. Venice describes token-weighted governance but has not deployed any voting interface. No Snapshot. No Tally. No on-chain governance contracts. Every significant decision, including four emission reductions and the DIEM launch, has been made unilaterally by the team. There is a Featurebase upvote system for feature requests, but that is not governance. Venice is transparent about being a company rather than a DAO, which is honest, but it means VVV holders have no actual decision-making power.

**The risk.** Voorhees is the single point of failure. Sole funder, CEO, primary public face of a roughly six-person company. No succession plan. No external investors. No board. Two SEC settlements on his record (SatoshiDice in 2014, ShapeShift in 2024). The ShapeShift precedent is instructive: Voorhees built a centralised crypto exchange, hit regulatory walls, then pivoted to a DAO structure. Venice's trajectory could follow a similar path.

The cybersecurity angle is the less obvious risk. Security publications (Certo, CyberPress, CPO Magazine, Infosecurity Magazine) have flagged Venice as a tool for generating malware. One real-world crime credibly traced to Venice-generated content could trigger a regulatory crisis. The UK free tier is already blocked under FSMA. Other jurisdictions will follow.

The closed-source proxy is both the product and the vulnerability. If it goes down, the entire service stops. If it is compromised, every prompt is exposed. No independent privacy audit has been completed despite being the third-most-requested feature from users (334 votes on Featurebase). The core privacy claim is trust-based, not cryptographically provable.

**My position.** I hold VVV and DIEM. I stake VVV for API access and use Venice daily for both the web interface and API calls. I find the product genuinely useful. I also recognise that I am trusting a roughly six-person company with my inference privacy, and that trust is not the same as a cryptographic guarantee.

## Freedom score: 6/10

Venice scores 57/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (9/20):** GPU compute sourced from [Akash](/projects/akash/), Hyperbolic and Prime Intellect, which is permissionless at the provider level. But Venice runs a centralised, closed-source proxy that routes all requests. Single point of control and failure. Users cannot choose their GPU provider. Roughly six employees operate everything.

**Governance decentralisation (5/20):** Token governance described but not deployed. No voting interface, no proposal system, no quorum mechanism. Voorhees is sole funder, CEO and primary decision-maker. Four emission reductions and the DIEM launch were unilateral team decisions. Venice is transparent about being a company, not a DAO, which is at least honest.

**Token distribution fairness (11/15):** No presale, no ICO, no VC allocation. Self-funded. 50% of genesis airdropped. 32.6 million unclaimed tokens burned rather than retained. Team allocation 10% with 24-month vesting. The insider trading incident was external (Aerodrome contributors, not Venice team). Company operations allocation (25%) has no published vesting schedule, which is a gap.

**Censorship resistance (11/15):** The strongest censorship resistance of any consumer AI product today. Pro subscribers can disable all content filtering. Open-source models that cannot be centrally recalled. But Venice controls the proxy and can theoretically block users, models or content types. Free tier already blocked in the UK. The resistance is a business decision, not an architectural guarantee.

**Data sovereignty (12/15):** No server-side storage of prompts or responses. Conversation history in local browser storage only. Proxy strips identifying information before forwarding to GPUs. Crypto payment option available. But GPU providers must see plaintext prompts (no homomorphic encryption), and no independent privacy audit has been completed. Competitors like Nillion, Phala and Secret Network offer stronger cryptographic guarantees.

**Open source and transparency (9/15):** Uses open-source AI models. Smart contracts verified on BaseScan. CLI and agent runtime are open source. But the core inference engine, proxy layer and platform code are all closed source. Privacy claims cannot be independently verified without an audit.

### Path to improvement

Three changes would materially increase Venice's score:

1. **Commission an independent privacy audit.** The single highest-impact action available. Users are trusting a privacy claim they cannot verify. An audit by a credible firm would either validate the architecture or expose gaps. Either outcome serves users better than the current trust-me position.
2. **Open-source the proxy layer.** The centralised, closed-source proxy is the primary freedom score deduction. Open-sourcing it would not eliminate the centralisation (Venice would still operate the instance), but it would allow independent verification and, eventually, self-hosted alternatives.
3. **Deploy governance.** Ship a token-weighted voting interface, even for non-binding signal votes. Venice describes governance as a feature of VVV but has not built any of the tooling. Deploying Snapshot or an equivalent would convert a marketing claim into a functional mechanism.
