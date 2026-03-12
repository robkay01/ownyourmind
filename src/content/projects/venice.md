---
title: "Venice"
description: "Private, uncensored AI inference with no logs and no content filtering. Freedom Score, Returns Score, tokenomics breakdown and honest assessment."
category: "inference"
token: "VVV"
status: "active"
freedomScore: 6
returnsScore: 6.6
returnsScoreBreakdown:
  tokenUtility: 16
  valueAccrual: 11
  supplyDynamics: 15
  revenueSustainability: 12
  liquidityAccess: 12
returnsScoreEvidence:
  tokenUtility: "Staking for yield + pro access. Lock staked VVV to mint DIEM, stake DIEM for inference. Multi-step utility loop."
  valueAccrual: "Monthly revenue buyback burns purchasing VVV on open market since November 2025. Growing user base drives demand. Magnitude unclear without disclosed revenue."
  supplyDynamics: "Uncapped supply with emissions minus burns. 42.8% of genesis supply burned. Five emission reductions in 13 months (14M → 10M → 8M → 6M/yr). Buyback burns active. Strong deflationary trajectory."
  revenueSustainability: "Privacy-focused inference with real users. Revenue model emerging."
  liquidityAccess: "Good liquidity on Base and major CEX. $50M+ daily volume."
publishDate: 2025-03-01
updatedDate: 2026-03-12
draft: false
coingeckoId: "venice-token"
launchType: "airdrop"
chain: "Base"
supplyType: "uncapped"
maxSupply: "100M genesis (no hard cap, inflationary via emissions minus burns)"
verdict: "Best privacy-focused inference platform available. Centralised company but aligned incentives."
oymHolds: true
podcastUrl: "/podcast/Own-Your-Mind-004-Venice.mp3"
---

## What it does

Venice is a private AI inference platform. You send prompts, Venice routes them through a centralised proxy to distributed GPU providers, and the response comes back without your prompts or outputs being stored anywhere. No logs. No conversation history on their servers. Everything stays in your browser's local storage.

The architecture works like this: your request hits a Venice-controlled proxy server that strips identifying information, then forwards the raw prompt to GPU providers sourced from [Akash Network](/projects/akash/), Hyperbolic and Prime Intellect. The providers see individual prompts but not who sent them or the broader conversation. Responses stream back through the proxy, all data purged immediately.

Founded by Erik Voorhees, the serial crypto entrepreneur behind SatoshiDice and ShapeShift. Venice launched in May 2024 with a team of roughly six people. The operation runs out of a Wyoming shell registration, with Voorhees based in Panama. Teana Baker-Taylor, formerly VP of Policy at Circle and UK Director at Binance, serves as co-founder and COO.

This is not a protocol. It is a company that runs a proxy server. The distinction matters for everything that follows.

## Why Venice AI is uncensored — and what that actually means

"Uncensored AI" is a loaded term, so let me be specific about what Venice does and does not do.

Venice serves open-weight models — DeepSeek, Llama, Qwen, Mistral and others — without corporate content policies layered on top. When you send a prompt to ChatGPT, OpenAI's safety layer decides whether to answer. When you send the same prompt to Claude, Anthropic's content policy makes the call. These are editorial decisions by private companies about what their AI is allowed to discuss.

Venice removes that layer. The models respond based on their training, not a corporation's content policy. Pro subscribers can disable Safe Mode entirely, which removes even the model's built-in guardrails where the model architecture permits it.

In practice, this means Venice handles prompts that centralised providers refuse. Security researchers can discuss vulnerabilities without triggering refusal responses. Creative writers are not blocked from mature themes. Medical researchers get direct answers about drug interactions rather than "please consult a healthcare professional." I have had Claude refuse to help with completely legitimate research questions about smart contract exploits — Venice handles these without friction.

What Venice does not do is serve illegal content. CSAM, direct instructions for mass violence, and other clearly illegal material are blocked at the platform level. "Uncensored" means no corporate content policy, not no rules at all. The distinction matters because critics conflate the two.

The real question is whether uncensored inference is a feature or a risk. For Venice, it is both. Security publications have flagged Venice as a tool for generating malware. If a credible real-world crime is traced to Venice-generated content, the regulatory response could be severe. The UK free tier is already blocked under FSMA. Voorhees is betting that the market for uncensored AI is large enough and legitimate enough to outweigh the regulatory risk. So far, that bet is paying off — 1.3 million registered users suggests real demand.

## Private AI inference: what Venice actually protects

Privacy is Venice's other core feature, and it works differently from what most people expect.

When you send a prompt to Venice, it hits a centralised proxy server that strips identifying information — your IP address, session data, anything that ties the prompt to you personally. The raw prompt then routes to GPU providers sourced from [Akash Network](/projects/akash/), Hyperbolic and Prime Intellect. Those providers see individual prompts but not who sent them or the broader conversation context. Responses stream back through the proxy, and all data is purged immediately. Nothing is stored server-side.

Compare this with centralised alternatives. OpenAI retains conversations and trains on them by default (you can opt out, but the default is collection). Anthropic retains conversations for safety research and model improvement. Google processes prompts through infrastructure that feeds into its broader advertising and data ecosystem. With Venice, there is no conversation history on their servers. Everything stays in your browser's local storage.

The limitation is honest: this is trust-based privacy, not cryptographically provable privacy. The proxy is closed-source. No independent privacy audit has been completed despite being the third-most-requested feature from users (334 votes on Featurebase). Venice claims zero-knowledge inference, but until the architecture is independently verified, users are trusting Voorhees and a roughly six-person team to honour that promise.

For many use cases, trust-based privacy is sufficient. If you are a journalist, lawyer, healthcare professional, or simply someone who does not want a corporation indexing your AI interactions, Venice delivers materially more privacy than any mainstream alternative. But if you need cryptographic guarantees — verifiable proof that no one saw your prompt — you are looking at projects like [Phala](/projects/phala/) or Nillion, which are building that layer but are not yet consumer-ready.

Who benefits most: anyone in regulated industries handling sensitive data, anyone in jurisdictions with speech restrictions, developers building products that handle user data, and anyone who considers their AI interactions to be private by default. For a deeper look at why privacy matters for AI specifically, see [Privacy Is the Killer App](/why-deai/privacy-is-the-killer-app/).

## Value proposition

Venice sells privacy without friction. You open a browser, type a prompt, and get an uncensored response from open-source models (DeepSeek, Llama, Qwen, Mistral, FLUX and others) without creating an account, providing an email, or agreeing to content restrictions. Pro subscribers can disable Safe Mode entirely. The free tier gives you 10 text prompts and 15 image generations per day.

The API is OpenAI-compatible. If you have existing code calling OpenAI, you change one base URL and your prompts now route through Venice's privacy proxy instead. For developers, this is the killer feature. I use it daily.

The token mechanics add a DeFi angle. Stake VVV to earn emissions-based yield. To access inference via tokens, you lock staked VVV (sVVV) to mint DIEM — each DIEM represents $1/day of perpetual, renewing API credit against any model on Venice (including Claude, GPT-5, Gemini and all open-source models). The mint rate follows an exponential curve: as DIEM supply approaches the target, it costs progressively more VVV to mint each DIEM. Burning DIEM unlocks your original sVVV. While locked, you still earn 80% of standard staking yields. Over 6.3 million VVV is currently locked for DIEM, nearly 10% of total supply. Minimum threshold is 0.1 DIEM to activate API credits.

A significant capacity optimisation changed DIEM allocation from dividing across all stakers to dividing among active API users only (those who made an API call in the last seven days). The result: a 14x increase in DIEM capacity per token for actual users. This rewards genuine usage rather than passive staking.

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

Emissions have been cut aggressively through five reductions in 13 months: 14 million → 10 million → 8 million (October 2025) → 6 million VVV annually (February 2026). That is a 57% reduction from the original rate. With the DIEM restructure, stakers now receive 100% of emissions (80% when sVVV is locked for DIEM). Monthly revenue buyback burns have been active since November 2025.

The launch was not clean. On day one, two Aerodrome contributors purchased VVV before public announcements, turning $50,000 into over $1 million within an hour. Aerodrome flagged the trades within 30 minutes and suspended both individuals within three hours. VVV dropped 50% on the allegations. The insider trading was external to Venice, but the damage to launch credibility was real.

Market snapshot: VVV trades at $5.65 with a $250 million market cap. That is 75% below the all-time high of $22.58, reached one day after launch. Listed on Coinbase, Kraken, KuCoin, Bybit, Gate.io, OKX and Binance futures.

## How to participate

**Use the platform.** The simplest entry point. Free tier requires no account. Pro subscription runs $18/month or $149/year for unlimited text, 1,000 daily image generations, advanced model access (including Claude and GPT-5.x), voice mode and Memoria (local vector memory).

**Stake VVV.** Staking VVV earns emissions-based yield (nominal APY ranges from 20-72% depending on the period), but this yield comes from newly minted VVV, not protocol revenue. Real yield depends on whether VVV holds value against the inflation. Staking alone does not give you inference access. Seven-day unstaking cooldown.

**Lock and mint DIEM.** To access inference via tokens, lock your staked VVV (sVVV) to mint DIEM on the Venice token dashboard. Each DIEM represents $1/day of perpetual, renewing API credit — stake DIEM (minimum 0.1) to activate access to all models on Venice including Claude, GPT-5 and Gemini. The mint rate rises exponentially as DIEM supply approaches the target supply set by Venice, so early minters get more DIEM per VVV locked. While your sVVV is locked, you still earn 80% of standard staking yields. To exit, burn the same amount of DIEM you minted to unlock your original sVVV (partial unlocks permitted). DIEM also trades on Aerodrome and Coinbase — you can buy it directly instead of minting. Over 6.3 million VVV is currently locked for DIEM, nearly 10% of total supply. A recent capacity optimisation means DIEM allocation is now divided among active API users (those with an API call in the last seven days) rather than all stakers, resulting in a 14x capacity increase per token for active users.

**Getting started.** The fastest path to Venice is the web app at venice.ai — no account required for the free tier (10 text prompts, 15 images per day). Pro subscription at $18/month (or $149/year) unlocks unlimited text with advanced models including Claude, GPT-5, and Gemini, plus 1,000 daily image generations, voice mode, and Memoria (local vector memory). For developers, the API is OpenAI-compatible: change one base URL in your existing code and your prompts route through Venice instead. Available models include DeepSeek V3, Llama 4 Maverick, Qwen 3.5 and others across text, image, code, and audio.

**Build on the API.** The OpenAI-compatible API is the developer on-ramp. The $27 million incentive fund has run two cohorts (110+ applications in Cohort 1, roughly 30 semifinalists in Cohort 2). Grants range from $5,000 to $100,000 in VVV.

## Honest assessment

**What works.** Venice is the best consumer-facing private AI inference product available today. That is not a high bar, but Venice clears it convincingly. The privacy architecture is genuinely thoughtful. The staking model creates real utility demand. The no-VC funding model means no unlock schedule looming over the token. Product velocity has been impressive: text, image, video, audio, music, code, web search, voice mode and Memoria all shipped within 18 months of launch. The aggressive supply tightening (42.8% burned, emissions cut 57% from 14M to 6M annually, revenue buybacks active since November 2025) shows a team that understands tokenomics.

**What does not work yet.** Governance. Venice describes token-weighted governance but has not deployed any voting interface. No Snapshot. No Tally. No on-chain governance contracts. Every significant decision, including five emission reductions and the DIEM launch, has been made unilaterally by the team. There is a Featurebase upvote system for feature requests, but that is not governance. Venice is transparent about being a company rather than a DAO, which is honest, but it means VVV holders have no actual decision-making power.

**The risk.** Voorhees is the single point of failure. Sole funder, CEO, primary public face of a roughly six-person company. No succession plan. No external investors. No board. Two SEC settlements on his record (SatoshiDice in 2014, ShapeShift in 2024). The ShapeShift precedent is instructive: Voorhees built a centralised crypto exchange, hit regulatory walls, then pivoted to a DAO structure. Venice's trajectory could follow a similar path.

The cybersecurity angle is the less obvious risk. Security publications (Certo, CyberPress, CPO Magazine, Infosecurity Magazine) have flagged Venice as a tool for generating malware. One real-world crime credibly traced to Venice-generated content could trigger a regulatory crisis. The UK free tier is already blocked under FSMA. Other jurisdictions will follow.

The closed-source proxy is both the product and the vulnerability. If it goes down, the entire service stops. If it is compromised, every prompt is exposed. No independent privacy audit has been completed despite being the third-most-requested feature from users (334 votes on Featurebase). The core privacy claim is trust-based, not cryptographically provable.

**My position.** I hold VVV and DIEM. I stake VVV for API access and use Venice daily for both the web interface and API calls. I find the product genuinely useful. I also recognise that I am trusting a roughly six-person company with my inference privacy, and that trust is not the same as a cryptographic guarantee.

## Freedom score: 57/100

Venice scores 57/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (9/20):** GPU compute sourced from [Akash](/projects/akash/), Hyperbolic and Prime Intellect, which is permissionless at the provider level. But Venice runs a centralised, closed-source proxy that routes all requests. Single point of control and failure. Users cannot choose their GPU provider. Roughly six employees operate everything.

**Governance decentralisation (5/20):** Token governance described but not deployed. No voting interface, no proposal system, no quorum mechanism. Voorhees is sole funder, CEO and primary decision-maker. Five emission reductions and the DIEM launch were unilateral team decisions. Venice is transparent about being a company, not a DAO, which is at least honest.

**Token distribution fairness (11/15):** No presale, no ICO, no VC allocation. Self-funded. 50% of genesis airdropped. 32.6 million unclaimed tokens burned rather than retained. Team allocation 10% with 24-month vesting. The insider trading incident was external (Aerodrome contributors, not Venice team). Company operations allocation (25%) has no published vesting schedule, which is a gap.

**Censorship resistance (11/15):** The strongest censorship resistance of any consumer AI product today. Pro subscribers can disable all content filtering. Open-source models that cannot be centrally recalled. But Venice controls the proxy and can theoretically block users, models or content types. Free tier already blocked in the UK. The resistance is a business decision, not an architectural guarantee.

**Data sovereignty (12/15):** No server-side storage of prompts or responses. Conversation history in local browser storage only. Proxy strips identifying information before forwarding to GPUs. Crypto payment option available. But GPU providers must see plaintext prompts (no homomorphic encryption), and no independent privacy audit has been completed. Competitors like Nillion, Phala and Secret Network offer stronger cryptographic guarantees.

**Open source and transparency (9/15):** Uses open-source AI models. Smart contracts verified on BaseScan. CLI and agent runtime are open source. But the core inference engine, proxy layer and platform code are all closed source. Privacy claims cannot be independently verified without an audit.

### Path to improvement

Three changes would materially increase Venice's score:

1. **Commission an independent privacy audit.** The single highest-impact action available. Users are trusting a privacy claim they cannot verify. An audit by a credible firm would either validate the architecture or expose gaps. Either outcome serves users better than the current trust-me position.
2. **Open-source the proxy layer.** The centralised, closed-source proxy is the primary freedom score deduction. Open-sourcing it would not eliminate the centralisation (Venice would still operate the instance), but it would allow independent verification and, eventually, self-hosted alternatives.
3. **Deploy governance.** Ship a token-weighted voting interface, even for non-binding signal votes. Venice describes governance as a feature of VVV but has not built any of the tooling. Deploying Snapshot or an equivalent would convert a marketing claim into a functional mechanism.

## Returns score: 66/100

VVV scores 66/100 (C grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (16/20):** VVV has a well-designed utility loop. Staking VVV earns emissions-based yield, and holding sufficient staked VVV grants pro account access. To get inference from tokens, you lock staked VVV to mint DIEM, then stake DIEM — your inference capacity is proportional to your share of staked DIEM. Each DIEM represents $1/day of perpetual API credit against any model. This creates genuine lock-up demand from heavy API users. The utility is practical and directly tied to product usage rather than abstract governance rights that nobody exercises.

**Value accrual (11/20):** Venice runs monthly revenue buyback burns since November 2025, purchasing VVV on the open market and destroying it. Combined with aggressive supply tightening — 42.8% of genesis supply burned, five emission reductions in 13 months from 14M to 6M annually — the direction of travel is clearly deflationary. The limitation is scale: Venice has not disclosed revenue figures, so the actual magnitude of buyback burns relative to remaining emissions is unclear. The mechanism is right, but without revenue transparency, holders are trusting the team's claims rather than verifiable numbers. Growing the user base from 1.3 million registered users to meaningful recurring revenue is the key variable.

**Supply dynamics (15/20):** Genesis supply was 100 million VVV with no presale or VC allocation, which is a strong starting point. The 32.6 million unclaimed airdrop tokens were burned rather than reclaimed — a credibility-building move worth approximately $100 million at the time. Emissions have been cut five times in 13 months: from 14 million down to 6 million VVV annually (October 2025: 10M → 8M; February 2026: 8M → 6M), a 57% total reduction. Monthly revenue buyback burns have been active since November 2025, creating a genuine two-sided tightening: less new supply entering, existing supply being permanently removed. The problem remains the company operations allocation: 25% of genesis supply with no published vesting schedule. Voorhees self-funded the project, which means no VC overhang, but the company can sell its allocation at any time without constraint. Annual inflation is now approximately 7.6% at the reduced 6M rate, moderate but not negligible against a $250 million market cap.

**Revenue sustainability (12/25):** Venice has 1.3 million registered users and processes 45 billion LLM tokens daily, which represents real product usage at meaningful scale. Warden Protocol alone drives 1.5 million daily chats. The subscription model ($18/month or $149/year) provides predictable revenue, and the API is seeing developer adoption. The concern is that Venice has not disclosed any revenue figures. "Real users" and "growing revenue" are qualitative claims without quantitative backing. The privacy inference market is genuine and growing, but Venice faces competition from emerging alternatives and the sustainability of a roughly six-person operation running infrastructure of this scale is an open question.

**Liquidity and access (12/15):** VVV is well-covered for a token of its market cap. Listed on Coinbase, Kraken, KuCoin, Bybit, Gate.io, OKX and Binance futures, with daily volume exceeding $50 million. The Base-native DEX liquidity through Aerodrome provides a solid decentralised trading option. You can enter and exit positions of reasonable size without difficulty. The Aerodrome insider trading incident on launch day was a credibility hit but did not structurally impair liquidity. Exchange coverage is strong relative to comparable DeAI tokens.

### Path to improvement

Three changes would materially increase Venice's returns score:

1. **Publish revenue figures.** The buyback burn mechanism only matters if holders can verify the numbers. Quarterly revenue disclosure – even aggregate figures without client-level detail – would let the market price VVV on fundamentals rather than trust. Every other dimension of the token economy is transparent; revenue is the conspicuous gap.
2. **Publish the company operations vesting schedule.** The 25% company allocation with no vesting constraint is the largest unresolved supply risk. A time-locked, on-chain vesting schedule would remove ambiguity and align the company's token management with holder interests.
3. **Grow the DIEM adoption base.** DIEM is the most elegant lock-up mechanism in the DeAI space – it converts VVV staking into perpetual API credit. But adoption depends on API usage growth. Expanding the developer ecosystem, running more grant cohorts, and building integrations that drive sustained API demand would increase DIEM minting, which locks VVV and tightens effective supply.
