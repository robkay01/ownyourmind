---
title: "Render Network"
description: "Decentralised GPU rendering and compute. Connects GPU providers with creators and AI developers who need rendering and inference capacity."
category: "compute"
token: "RENDER"
status: "active"
freedomScore: 3
returnsScore: 7.0
returnsScoreBreakdown:
  tokenUtility: 12
  valueAccrual: 14
  supplyDynamics: 12
  revenueSustainability: 20
  liquidityAccess: 12
returnsScoreEvidence:
  tokenUtility: "Payment for render services. No native staking. Holders earn nothing by simply holding. Limited governance role."
  valueAccrual: "Burn mechanism for services. Real Hollywood customers. Proven demand."
  supplyDynamics: "Capped but foundation holds significant tokens. Inflation through rewards."
  revenueSustainability: "Real revenue from real customers. Product-market fit demonstrated."
  liquidityAccess: "Major CEX listings. Good DEX liquidity. $50M+ daily volume."
publishDate: 2025-03-01
draft: false
coingeckoId: "render-token"
launchType: "ico"
chain: "Solana"
supplyType: "capped"
maxSupply: "644M (536.9M original + 107.4M BME inflation pool, governance-approved)"
verdict: "Real rendering demand with Hollywood customers. But permissioned network, proprietary core, and OTOY controls everything."
oymHolds: false
---

## What it does

Render is a GPU rendering marketplace built on Solana. Creators and studios submit rendering or AI compute jobs through the Render Portal or integrated tools (OctaneRender, Blender Cycles, Redshift). Jobs get encrypted, hashed and matched to node operators based on OctaneBench scores and reputation. Output is validated through "Proof of Render" (automated quality checks plus manual creator confirmation). Payment sits in on-chain escrow until the creator approves the output.

The critical context: Render is built by OTOY Inc., a Los Angeles-based company founded by Jules Urbach in 2008. OTOY created OctaneRender, a widely used GPU rendering engine with native integrations into Blender and Cinema 4D. The Render Network is OTOY's distributed compute layer. The Render Network Foundation, spun out in January 2023 and registered in the Cayman Islands, handles governance. Urbach's COO sits on the Foundation board.

The network dashboard shows roughly 15,670 registered node operators (approximately 5,600 since inception, suggesting the dashboard counts registrations rather than concurrent active nodes). It is explicitly permissioned. Operators must be approved by the Foundation. This is the opposite of how [Akash](/projects/akash/) operates, where anyone with qualifying hardware joins without permission. Dispersed.com, an AI compute subnet, launched in December 2025 with 600-plus AI models at $1.75/hour, but adoption metrics are not yet available.

The team is roughly 99 people. Advisory board includes J.J. Abrams, Ari Emanuel (Endeavor/WME CEO), Beeple and Brendan Eich (Brave founder). The Hollywood connections are real.

## Value proposition

Render's moat is OctaneRender. If you are a 3D artist or VFX studio already using OctaneRender, the Render Network is a natural extension: submit your OctaneRender jobs to distributed GPUs instead of buying your own render farm or paying AWS rates. Fifty to eighty percent cheaper than centralised cloud rendering.

The production credits are real. Beeple, Apple Vision Pro integration, Stability AI partnership. These are not speculative use cases. Sixty-nine million cumulative frames have been rendered, with roughly 35% of all-time volume in 2025 alone (approximately 1.5 million frames per month). The rendering demand is genuine.

The counter-narrative is harder. Render is, functionally, OTOY's service with a token. OTOY controls the core rendering engine (proprietary, closed source). OTOY receives a hardcoded 5% service fee on all jobs. The Foundation's governance operates within boundaries that OTOY defines. The permissioned operator model means the Foundation, not the market, decides who provides compute.

For the sovereignty thesis, Render presents a problem. Real demand, real product, real customers, but the decentralisation layer is thin. The token enables a distributed GPU supply side, which is genuinely useful. But the supply side is the only meaningfully decentralised component. Everything else, the rendering engine, the job orchestration, the operator approval, the AI compute layer, is controlled by OTOY or the Foundation it created.

## Tokenomics

RENDER (originally RNDR on Ethereum, migrated to Solana SPL via Wormhole in November 2023) launched through an ICO in October 2017 at $0.25 per token. The ICO had a $134 million hard cap but raised only $1.16 million publicly. A private sale in January 2018 raised roughly $4 million. A $30 million strategic round in December 2021, led by Multicoin Capital with participation from Alameda Research, Solana Foundation and Sfermion, significantly changed the investor profile.

Distribution tells the story:

- **Escrow for partners:** 26.6% (three tranches, cliff vesting extending to 2051)
- **OTOY treasury:** 23.3% (company-controlled, no vesting)
- **Public and private sale:** 18.29%
- **BME inflation pool:** 16.67% (governance-approved expansion)
- **Reserve:** 8.61%
- **Subsequent distribution:** 6.52%

Combined insider allocation is approximately 50% (OTOY Treasury plus Partner Escrow alone). This is one of the most insider-heavy distributions in the DeAI space. Whale concentration is extreme: 91% of supply is held by approximately 902 addresses. In the 11 weeks leading up to March 2026, large wallets accumulated 20.5 million tokens (3.7% of supply). The OTOY treasury alone (23.3%) represents company-controlled supply with no vesting schedule.

The Burn-and-Mint Equilibrium (BME) works like this: 95% of USD-equivalent job payments get converted to RENDER and burned. 5% goes to OTOY as a service fee. Node operators receive newly minted RENDER from the emission pool. Year one emissions: 9.13 million RENDER. Year two: 5.91 million (35% reduction).

The maths does not work yet. January to September 2025 saw 530,171 RENDER burned (up 279% year-over-year), but monthly emissions of roughly 500,000 RENDER outpace monthly burns of roughly 50,000 RENDER by a factor of ten. BME is net inflationary at current usage. Against a $701 million market cap, the price-to-revenue ratio remains extreme. For comparison, Akash trades at roughly 28x.

There is no native staking. RENDER holders earn nothing by simply holding. The token's primary function, beyond rendering settlement, is speculation.

The Alameda connection deserves attention. Alameda Research participated in the $30 million round. NCRI research documented coordinated Twitter bot manipulation that pumped RNDR price by 11-30% on four separate occasions. Roughly half of all Twitter posts about RNDR during those manipulation windows were inauthentic. After FTX collapsed, 972,073 RNDR tokens were transferred from the bankruptcy estate to exchanges.

Market snapshot: RENDER trades at $1.35 with a $701 million market cap and $882 million FDV. That is roughly 90% below the all-time high of $13.59 from March 2024. Listed on Binance, Coinbase, Kraken, OKX, Bybit and others. The Binance listing gives Render significantly more liquidity than Akash, which matters for retail discovery.

## How to participate

**Provide GPUs (if approved).** Apply to become a node operator. The Foundation reviews applications. Minimum hardware: NVIDIA GPU with CUDA 10.1+, 6GB+ VRAM (8GB+ preferred), 32GB+ RAM, 100GB disk, 100/75 Mbps internet. Rewards weighted by compute (25%), bandwidth (35%), GPU model (20%) and uptime (20%). The permissioned approval process is the main barrier.

**Create and render.** Submit rendering jobs through OctaneRender, Blender Cycles or the Render Portal. Pay in RENDER or Render Credits (stablecoin-equivalent). Fifty to eighty percent cheaper than centralised alternatives. This is the primary use case and the reason the network exists.

**Governance.** Participate in Render Network Proposals (RNPs) through Nation.io. Four-phase process: Draft, Initial Vote (72 hours, no quorum), Final Vote (6 days, 15% quorum of total supply), Implementation. Token-weighted. Be aware that 91% whale concentration heavily influences outcomes. Active participation is extremely low: in RNP-022, only 0.5% of supply actively voted for or against (91.3 million tokens abstained out of 93.9 million participating). Twenty-two RNPs submitted to date.

**Note: there is no staking.** Unlike most DePIN tokens, RENDER offers no staking mechanism. Holding RENDER earns nothing. The only way to earn RENDER is to operate approved GPU nodes.

## Honest assessment

**What works.** The rendering demand is real and growing. Sixty-nine million frames rendered. Roughly 35% of all-time volume in 2025 alone. Enterprise and Hollywood-grade adoption, including Beeple and Apple Vision Pro integration. Burns growing 279% year-over-year is an organic demand signal, even if still small relative to emissions. OctaneRender integration provides a genuine moat: it is a widely used rendering engine and the network is its natural distributed backend. The Solana migration completed successfully. Strong exchange coverage including Binance. The advisory board has genuine industry credibility.

**What does not work.** The decentralisation narrative does not hold up. Render is a permissioned network controlled by OTOY through multiple vectors: proprietary rendering engine, hardcoded 5% fee, Foundation board representation, operator approval, closed-source orchestration layer. The Foundation is a governance facade. Core rendering software, job orchestration, node operator client and Solana smart contracts are all closed source. Nine public GitHub repositories contain essentially zero operational code, only governance proposals and legacy token utilities. Six contributors total. This is not open source with some proprietary elements. It is proprietary with some open governance.

**The risk.** Jules Urbach is an extreme key person risk. Single founder controlling both OTOY (the company) and Render (the token network) with no visible succession plan. The 91% whale concentration (roughly 902 addresses) means governance is effectively controlled by a small number of large holders, and active voting participation of just 0.5% of supply means outcomes are easily influenced. No verifiable audit of current Solana infrastructure exists. The only confirmed audit (OpenZeppelin, September 2017) covered deprecated Ethereum crowdsale contracts. The Alameda investment and documented bot manipulation add a credibility stain that does not wash off easily.

The AI compute pivot through Dispersed is late. Akash launched GPU compute in September 2023 and has a multi-year head start with a permissionless model. io.net entered the space with a similar timeline. Render entering AI compute in December 2025 with a permissioned approach faces established competition and no obvious structural advantage beyond the OTOY brand.

Solana single-chain dependency means its seven separate outage incidents (with a declining validator count and 78% client homogeneity via Jito-Solana) can halt settlement. There is no fallback chain.

**My position.** I do not hold RENDER. The permissioned network model and proprietary core are fundamentally incompatible with the sovereignty thesis that drives this site's editorial position. Render is a good product. It may be a reasonable investment on the rendering demand thesis. But it is not decentralised infrastructure in any meaningful sense, and calling it such is misleading.

## Freedom score: 32/100

Render scores 32/100 (F grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (6/20):** ~15,670 registered node operators, but the network is explicitly permissioned. Foundation approves all operators. All core infrastructure is proprietary OTOY software: node client, job routing, allocation algorithm, reputation system. Foundation controls who participates and can remove operators. Rendering is off-chain and not verifiable by external parties. Compare with [Akash's](/projects/akash/) permissionless model where anyone with hardware joins without approval.

**Governance decentralisation (8/20):** 22 Render Network Proposals with voting on Nation.io. 15% quorum requirement met (18% participation in RNP-022). But actual active voting is extremely low: only ~0.5% of supply voted for/against in RNP-022 (91.3M tokens abstained vs 2.6M voted). RNPs are primarily authored by the Foundation. OTOY Treasury (23.3%) gives insiders significant voting weight. No evidence of proposals contradicting Foundation wishes being passed.

**Token distribution fairness (5/15):** OTOY Treasury (23.3%) plus Partner Escrow (26.6%) equals ~50% insider-controlled supply. Public and private sale combined only 18.29%. 91% of supply held by ~902 addresses. The $30 million 2021 round from Multicoin and Alameda further increased institutional concentration. ICO was small ($1.16 million) but the overwhelming insider allocation dominates the picture.

**Censorship resistance (5/15):** Permissioned operator model means the Foundation can approve or deny GPU providers. Proprietary node client means Foundation could push updates that censor. Job allocation algorithm is opaque. No documented content-neutral policy. Solana dependency adds chain-level risk (7 outage incidents, declining validator count, 78% client homogeneity).

**Data sovereignty (6/15):** Creators upload rendering assets to the network for processing on node operator hardware. Encrypted transport claimed but not independently verifiable (proprietary). Token holdings are self-custodial on Solana. But the Foundation knows all participants (permissioned) and rendering data passes through opaque proprietary infrastructure with no independent verification of privacy guarantees.

**Open source and transparency (2/15):** The overwhelming majority of the codebase is proprietary to OTOY Inc.: OctaneRender engine (commercial, EUR 23.95/month), node client, job routing, allocation algorithm, reputation system, network backend. Public GitHub repos contain only governance proposals (Markdown), legacy token contracts (last updated 2021), and one plugin binary. 9 total repos across two orgs. 6 contributors. No reproducible builds. No independent code review possible. If OTOY ceased operations, the network would likely become non-functional.

### Path to improvement

Three changes would materially increase Render's score:

1. **Open-source the orchestration layer.** The rendering engine itself has legitimate IP protection arguments. But the job orchestration, node operator client and Solana programmes could be open-sourced without compromising OctaneRender's proprietary position. This would be the single biggest signal that Render takes decentralisation seriously rather than using it as marketing language.
2. **Move to permissionless operator onboarding.** The permissioned model is the clearest centralisation vector. Akash proves that permissionless compute marketplaces work. The Foundation's approval process serves OTOY's quality control interests, not decentralisation. A reputation and staking-based operator model would distribute control away from the Foundation.
3. **Commission a current security audit.** The only verified audit covers deprecated 2017 Ethereum contracts. The current Solana infrastructure, including BME emission contracts, escrow mechanisms and the SPL token programme, has no publicly verifiable audit. For a network handling enterprise production workloads and a $701 million market cap, this is a significant gap.

## Returns score: 70/100

RENDER scores 70/100 (B grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (14/20):** RENDER is the settlement currency for rendering jobs and, increasingly, AI compute through the Dispersed subnet. Creators pay in RENDER or Render Credits for GPU rendering, and node operators receive newly minted RENDER as compensation. The utility is clear but narrow — there is no meaningful staking mechanism, no governance weight tied to holdings, and no additional demand sink beyond job settlement. Unlike most DePIN tokens, simply holding RENDER earns you nothing. The token exists to settle transactions, full stop.

**Value accrual (18/25):** This is Render's strongest returns dimension. The Burn-and-Mint Equilibrium converts 95% of USD-equivalent job payments to RENDER and burns it, with OTOY taking a hardcoded 5% service fee. Real Hollywood customers — Beeple, Apple Vision Pro integration, Stability AI — drive genuine burn demand. Burns grew 279% year-over-year through 2025. The mechanism directly ties network usage to token scarcity. The caveat: monthly emissions still outpace monthly burns by roughly 10x at current usage levels. BME is net inflationary today, but the trajectory is moving in the right direction with verified demand growth.

**Supply dynamics (12/20):** RENDER has a cap of 644 million tokens (536.9 million original plus 107.4 million governance-approved BME inflation pool). The structural concern is concentration: the OTOY treasury holds 23.3% with no vesting schedule, partner escrow accounts for 26.6% with cliff vesting extending to 2051, and 91% of supply sits in roughly 902 addresses. In the 11 weeks to March 2026, large wallets accumulated 20.5 million tokens (3.7% of supply). The Alameda connection — documented bot manipulation that pumped prices 11-30% on four occasions — adds a credibility stain to the distribution history. Whale concentration of this magnitude means a small number of actors can move the market at will.

**Revenue sustainability (16/20):** Render has demonstrated genuine product-market fit. Sixty-nine million cumulative frames rendered, with roughly 35% of all-time volume occurring in 2025 alone. The OctaneRender integration provides a genuine moat — studios already using OctaneRender have a natural path to the distributed rendering network. Enterprise and Hollywood-grade customers create demand that is not speculative or crypto-native. The AI compute pivot through Dispersed is late relative to Akash and io.net, but the existing rendering revenue base provides a foundation that pure-play AI compute networks lack.

**Liquidity and access (12/15):** RENDER is listed on Binance, Coinbase, Kraken, OKX, Bybit and other major exchanges, with daily volume consistently exceeding $50 million. The Binance listing in particular gives Render significantly deeper liquidity than most DeAI competitors. You can trade meaningful positions without excessive slippage. The Solana migration completed cleanly, and SPL token liquidity on decentralised venues supplements the centralised exchange coverage. This is a well-distributed token from a trading accessibility standpoint, even if the holder concentration is extreme.

### Path to improvement

Three changes would materially increase Render's returns score:

1. **Introduce a staking mechanism with fee distribution.** RENDER holders currently earn nothing by holding. A staking system that distributes a portion of rendering fees or BME proceeds to stakers would create a demand sink, reduce circulating supply and give holders an economic reason to stay beyond price speculation.
2. **Close the burn-to-emission gap.** Monthly burns of approximately 50,000 RENDER against emissions of roughly 500,000 RENDER means BME is net inflationary by a factor of ten. Growing rendering and AI compute volume to narrow this gap is the most direct path to making the deflationary narrative match reality.
3. **Publish the OTOY treasury vesting schedule.** The 23.3% treasury allocation with no published vesting creates uncertainty for holders. A transparent, time-locked vesting schedule — ideally enforced on-chain — would reduce the overhang risk and signal alignment between OTOY's interests and token holders.
