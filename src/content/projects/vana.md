---
title: "Vana"
description: "A decentralised data ownership network where users export personal data, contribute it to DataDAOs, and earn proportional rewards for AI training. Strong data sovereignty architecture and 1.3M+ users, but permissioned validators, 95% price decline from ATH, and a progressive decentralisation roadmap that has not yet delivered on its promises."
category: "data"
token: "VANA"
status: "active"
freedomScore: 6
returnsScore: 5.5
returnsScoreBreakdown:
  tokenUtility: 14
  valueAccrual: 12
  supplyDynamics: 8
  revenueSustainability: 10
  liquidityAccess: 11
publishDate: 2025-03-03
draft: false
coingeckoId: "vana"
launchType: "airdrop"
chain: "Vana L1 (EVM-compatible)"
supplyType: "capped"
maxSupply: "120M VANA"
verdict: "The most technically complete data sovereignty protocol in crypto, with genuine user adoption and strong backing. But permissioned validators, Foundation-controlled treasury, and a 95% price decline tell you the market is not yet convinced that 'own your data' translates to token value."
oymHolds: false
---

## What it does

Vana is a purpose-built L1 blockchain for user-owned data. You export your personal data from platforms like Reddit, Twitter, ChatGPT, LinkedIn, and Amazon using the Data Connect desktop app, contribute it to a DataDAO (a decentralised pool of similar data), and earn proportional rewards when AI companies use that data for training. The core idea: your data has value, you should own it, and you should get paid when it trains AI models.

The architecture has two layers. The Data Liquidity Layer handles data validation, tokenisation, and trading through DataDAOs. Each DataDAO implements its own Proof-of-Contribution function, tailored to its data type, that validates authenticity, ownership, quality, and uniqueness. These validations run inside Trusted Execution Environments (Intel TDX hardware) on the Satya network, so even the validators processing your data cannot see the plaintext. The Data Portability Layer manages cross-application data sharing through Personal Servers, user-controlled nodes that store your plaintext data and serve it to authorised parties through grant-enforced APIs.

The encryption model is genuinely strong. Users control their own keys (OpenPGP with HKDF-SHA256 key derivation). Permission grants are recorded on-chain. Nobody, including Vana core contributors, can modify data permissions; only the data owner controls access. Three hosting options for Personal Servers: bundled with the desktop app, ODL Cloud (Vana-operated MicroVMs), or self-hosted Docker containers.

The project started as an MIT Media Lab class project in 2021. Co-founders Anna Kazlauskas (MIT '19, ex-Celo engineer) and Art Abal (Harvard, ex-Appen data collection lead) built the initial prototype in an "Emergent Ventures" course taught by Ramesh Raskar. The operating entity is Corsali Inc dba Open Data Labs (San Francisco), with protocol stewardship by the Vana Foundation (Cayman Islands). Team size is approximately 14. Stephen Boske (ex-Coinbase Associate General Counsel) serves as Head of Legal.

Mainnet launched on 16 December 2024 via Binance Launchpool.

## Value proposition

The pitch is "own your data." Every day, you generate data that trains AI models worth billions. You get nothing. Vana lets you contribute that data to DataDAOs, earn proportional rewards, and maintain genuine ownership through on-chain consent enforcement.

The adoption numbers are real. 1.3 million users, 300-plus DataDAOs, 12 million-plus data points onboarded, and 140,000 Reddit users in r/datadao. The Binance Launchpool listing and CZ joining as advisor (via YZi Labs' strategic investment in February 2025) gave the project significant distribution. These are not testnet-only metrics; the mainnet is live and processing data.

The VRC-20 token standard, introduced in April 2025, creates data-backed tokens with on-chain liquidity. Think of them as ERC-20 tokens but representing verified, privacy-preserving datasets. This is a novel financial primitive. Whether it creates sustainable value remains to be seen.

The counter-narrative is equally clear. VANA traded at $35.23 at launch, briefly becoming one of the highest-profile Binance listings. The current price is $1.45. That is a 95% decline in roughly 14 months. The market is saying that owning your data is a good idea, but the VANA token has not demonstrated why it should capture that value.

DataDex, the DEX on Vana's chain, has $984,000 in TVL. For a chain with 1.3 million users, that is remarkably thin DeFi activity. The 1.7 million daily transactions claimed in May 2025 cannot be independently verified from the block explorer (JavaScript-rendered, no static data). Individual data contribution returns are likely modest; the value of a single person's Reddit history to an AI model is extremely low.

## Tokenomics

VANA is the native token of the Vana L1 chain. Fixed supply: 120 million. Total supply: 119.88 million. Circulating supply: 30.8 million (25.67%) as of March 2026.

Distribution:

- **Community:** 44.0% (20.3% unlocked at TGE, remainder over 36 months; includes Binance Launchpool 4% and airdrops)
- **Ecosystem:** 22.9% (4.8% at TGE, remainder over 48 months; grants and network growth)
- **Core Contributors:** 18.8% (0% at TGE; 13-month cliff then 4-year linear vesting)
- **Investors:** 14.2% (0% at TGE; 13-month cliff then 3-year linear vesting)

The distribution tells a reasonable story. Community plus ecosystem totals 66.9%, the highest community allocation among the data projects I have reviewed. No insider tokens unlocked at TGE. Contributors and investors face genuine vesting with real cliffs. This is structurally better than many projects in the space.

The problem is what happens next. Only 25.67% of supply is currently circulating. 59.81% remains locked. The investor cliff (13 months from December 2024) begins unlocking around January 2026, with three years of linear selling pressure to follow. Contributor unlocks follow a similar pattern over five years. At current prices, this represents significant potential dilution.

Funding totals $25 million across four rounds: $2 million seed (Polychain Capital, December 2021), $18 million Series A (Paradigm, December 2022), $5 million strategic (Coinbase Ventures, September 2024), and an undisclosed strategic from YZi Labs with CZ as advisor (February 2025).

Market snapshot: VANA trades at $1.45 with a $44.68 million market cap and $174.09 million FDV. Listed on Binance, Coinbase, Bybit, KuCoin, Gate.io, Bitget, MEXC, and CoinEx. Daily volume is approximately $2.61 million. The ATH of $35.23 was hit on 17 December 2024, the day after launch.

## How to participate

**Contribute data.** The lowest barrier entry. Install the Data Connect desktop app, connect your accounts (Reddit, Twitter, ChatGPT, LinkedIn, Amazon, Spotify, health platforms), and export your data to a DataDAO. No capital required. Your data is validated via Proof-of-Contribution in TEEs, and you earn proportional rewards based on contribution quality and volume.

**Stake VANA.** Stake tokens via stake.vana.org for approximately 6.18% APY. Non-rebasing position model where rewards compound automatically. Web-based, no hardware required.

**Run a validator.** Two types. L1 validators produce blocks and require 35,000 VANA (~$50,750 at current prices), 8-core CPU, 32 GB RAM, and 1.2 TB SSD. Currently permissioned (PoSA); you need to be selected. Satya validators run TEE-based data validation on Intel TDX hardware. Both require advanced technical skill.

**Build on Vana.** Use the Vana Connect SDK, Personal Server APIs, or deploy DataDAOs. Grants programme available. Documentation at docs.vana.org is solid.

**Governance.** Vote on protocol proposals via Tally (on-chain) and Snapshot (off-chain). Hold VANA tokens to participate. Full community governance via Vana DAO is planned for Phase 3 (12-18 months post-launch).

## Honest assessment

**What works.** The data sovereignty architecture is the strongest I have seen in the DeAI space. On-chain consent enforcement, user-derived encryption keys, Personal Servers where users control their plaintext data, and TEE-based validation that prevents even validators from seeing raw data. This is not marketing. The protocol specification is published, the smart contracts are audited (nine audits across Hashlock and Nethermind, all Hashlock audits rated "Secure"), and the encryption model uses established standards (OpenPGP, HKDF-SHA256).

The user adoption is genuine. 1.3 million users and 300-plus DataDAOs represent meaningful traction, particularly the 140,000 r/datadao community which formed organically. The founding team brings relevant credentials: Kazlauskas from Celo (blockchain infrastructure), Abal from Appen (data collection at scale), and Boske from Coinbase (crypto legal). Strong investor backing (Paradigm, Coinbase Ventures, Polychain, CZ) provides both runway and credibility.

The open-source footprint is substantial: 83 repositories on GitHub, multiple repos updated within days of research, and MIT/Apache-2.0 licensing throughout. The published protocol specification gives developers genuine visibility into how the system works.

**What does not work.** The chain currently runs under Proof-of-Staked-Authority where validators are selected by the team. For a project built on the thesis of user ownership and decentralisation, permissioned validators are a fundamental contradiction. The "progressive decentralisation" roadmap promises a transition to permissionless validation, but without specific timelines or milestones, this remains a promise rather than a plan.

The Vana Foundation controls the treasury and retains significant influence over protocol direction. Governance tools exist (Tally, Snapshot) but I found no evidence of active on-chain governance votes or meaningful participation metrics during research. For a project that has been on mainnet for 14 months, this gap between governance infrastructure and governance activity is notable.

The economics of individual data contribution are challenging. Your Reddit post history, your Spotify listening data, your ChatGPT conversations; each of these is worth fractions of a cent to an AI model trainer. Meaningful returns require massive collective action through DataDAOs, and the gap between 300-plus DataDAOs established and 16 in active incubation suggests most DataDAOs are dormant or experimental.

**The risk.** Intel TDX dependency for Satya validators creates both supply chain risk and a geographic bottleneck. If Intel changes TDX availability or pricing, the entire data validation layer is affected.

Regulatory exposure is real. Collecting, tokenising, and trading user data crosses into GDPR and similar data protection regimes in multiple jurisdictions. The Cayman Islands Foundation structure with a US operating entity creates complex jurisdictional dynamics.

The low circulating supply (25.67%) with 59.81% locked means significant unlock-driven selling pressure over the next three to four years. At current prices ($1.45, 95% below ATH), the staking incentives denominated in VANA are worth very little in dollar terms.

The competitive landscape includes [Ocean Protocol](/projects/ocean/) (established data marketplace), Sahara AI (AI data platform with strong VC backing), and centralised incumbents like Scale AI and Appen with existing enterprise relationships.

**My position.** I do not hold VANA. The data sovereignty architecture is genuinely impressive, and I respect the user adoption metrics. But permissioned validators, Foundation-controlled governance, and a 95% price decline tell me the project has not yet delivered on its decentralisation thesis. I would reconsider if the validator set becomes permissionless, if governance participation materialises, and if DataDAO economics demonstrate sustainable returns for contributors.

## Freedom score: 6/10

Vana scores 59/100 (C grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (8/20):** The Vana L1 chain currently operates under Proof-of-Staked-Authority with validators run by professional node operators selected by the team. This is permissioned infrastructure with a stated plan to transition to permissionless validation. Satya validators (TEE nodes) require specialised Intel TDX hardware, creating a hardware dependency bottleneck. Personal Servers offer three hosting options including self-hosted, but the default is ODL Cloud (Vana-operated MicroVMs). Data storage backends include centralised options (Google Drive, Dropbox) alongside IPFS. Cross-chain bridging relies on Stargate and Hyperlane.

**Governance decentralisation (8/20):** Governance infrastructure exists (Tally on-chain, Snapshot off-chain) but the Vana Foundation currently stewards the token and treasury. Progressive decentralisation is planned with Phase 3 (12-18 months post-launch) targeting community governance via Vana DAO. The Foundation is a Cayman Islands entity that explicitly states it does not control the decentralised network, but at this stage team influence over protocol direction remains significant. No evidence of active on-chain governance votes or participation metrics found during research.

**Token distribution fairness (8/15):** Community plus ecosystem allocation totals 66.9% of supply, which is a strong community-weighted distribution. Core contributors receive 18.8% with 5-year vesting (1-year cliff). Investors receive 14.2% with 4-year vesting (1-year cliff). No tokens unlocked for insiders at TGE. However, only 25.67% of supply is currently circulating, meaning most community tokens are still locked. The 95% price decline from ATH suggests early Binance Launchpool participants had significant advantage.

**Censorship resistance (9/15):** The protocol design enforces that nobody, including Vana core contributors, can modify data permissions; only the data owner controls access. Permission grants are recorded on-chain and cannot be tampered with. Data revocation takes immediate effect. However, the permissioned validator set means the Foundation could theoretically influence transaction inclusion. Personal Server hosting via ODL Cloud creates a censorship vector for users who do not self-host.

**Data sovereignty (13/15):** Data sovereignty is Vana's core value proposition and strongest dimension. Users control their data through EVM wallet keys. Data is encrypted with user-derived keys before upload; Vana infrastructure never sees plaintext. Personal Servers are the only protocol component that sees plaintext data, and users can self-host them. Three-layer security: blockchain (permission grants), server (signature validation), and encryption (user-derived keys). TEE validation means even data validators process data inside secure enclaves.

**Open source and transparency (13/15):** 83 repositories in the vana-com GitHub organisation under Apache-2.0 and MIT licences. Key repos actively maintained: personal-server (113 stars, 196 commits), vana-smart-contracts (19 stars, 98 commits), data-connect (18 stars, 646 commits). Smart contracts audited by both Hashlock (3 audits, all rated "Secure") and Nethermind (6 audits). Full protocol specification published. Contract addresses published for mainnet and testnet. Responsible disclosure programme active.

### Path to improvement

Three changes would materially increase Vana's score:

1. **Transition to permissionless validators.** The PoSA validator model is the single biggest credibility gap. Publishing a concrete timeline with testable milestones for the transition to permissionless block production would demonstrate genuine commitment to decentralisation. Until then, the team controls who runs the chain.
2. **Activate governance.** Governance tools exist but are not being used. Running the first binding on-chain votes, publishing participation metrics, and demonstrating that the Foundation is ceding decision-making authority to token holders would transform governance from infrastructure to practice.
3. **Demonstrate data economics.** The "own your data" thesis is compelling in theory. Publishing anonymised data on per-user earnings across DataDAOs, total data access fee revenue, and enterprise buyer adoption would prove that contributing personal data generates meaningful returns. Without this, the value proposition remains aspirational.

## Returns score: 6/10

VANA scores 55/100 (D grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (14/20):** VANA has well-structured multi-layered utility. Data DAO staking aligns participants with data pool quality. Governance voting gives token holders protocol influence. Data contribution rewards create a direct link between productive activity and token demand. The staking mechanism (approximately 6.18% APY, non-rebasing) provides a baseline yield for passive holders. The 35,000 VANA requirement for L1 validators creates meaningful demand at the infrastructure level. These are real, functioning utility vectors on a live mainnet — not whitepaper promises. The deduction reflects the fact that individual data contribution rewards are likely modest, and the gap between 300+ DataDAOs established and 16 in active incubation suggests most of the ecosystem is dormant.

**Value accrual (12/25):** The core mechanism is straightforward: users contribute data, DataDAOs aggregate it, AI companies pay for access, and contributors earn proportional rewards. This is a genuine value creation loop that does not exist in most token economies. The VRC-20 standard creates data-backed tokens with on-chain liquidity, which is a novel financial primitive. However, the model is unproven at scale. DataDex has just $984K in TVL for a chain with 1.3 million users — that is remarkably thin economic activity. The value of any individual's Reddit history or Spotify listening data to an AI model trainer is fractions of a cent. Meaningful value accrual requires massive collective action, and the evidence that this is happening at scale is not yet convincing.

**Supply dynamics (8/20):** The Foundation controls the treasury and retains significant influence over protocol direction. Only 25.67% of supply is currently circulating, with 59.81% locked — meaning substantial dilution lies ahead as contributor and investor unlocks proceed over the next three to four years. The 95% price decline from ATH ($35.23 to $1.45) means staking rewards denominated in VANA are worth very little in dollar terms. Validators are permissioned under PoSA, so the Foundation effectively controls who participates in block production. The community-plus-ecosystem allocation of 66.9% is strong on paper, but with most of it still locked and Foundation-directed, the practical supply dynamics favour insiders.

**Revenue sustainability (10/20):** The user adoption is real. 1.3 million users, 300+ DataDAOs, and 12 million+ data points onboarded represent genuine traction that most data projects cannot match. The CZ advisory role and YZi Labs strategic investment provide credibility and distribution. The data contribution model creates organic, non-speculative activity — people are actually exporting their personal data and contributing it to pools. The concern is whether this activity generates sustainable revenue. The economics of personal data are challenging: individual contributions have minimal value, and the enterprise buyer side of the marketplace (AI companies paying for aggregated data) has not been demonstrated publicly. Early traction is real; revenue sustainability at scale is unproven.

**Liquidity and access (11/15):** VANA is listed on Binance, Coinbase, Bybit, KuCoin, Gate.io, Bitget, MEXC, and CoinEx — comprehensive exchange coverage across tier-1 and tier-2 venues. The Binance Launchpool listing provided strong initial distribution. Daily volume of approximately $2.61M is adequate for the market cap. The 95% decline from ATH is brutal but the exchange infrastructure means anyone who wants to enter or exit can do so without significant slippage at current volumes. The declining volume trend is the main concern — falling trading interest often precedes further price deterioration.

### Path to improvement

Three changes would materially increase Vana's returns score:

1. **Demonstrate enterprise data buyer demand.** The supply side (1.3M users contributing data) is proven. The demand side (AI companies paying for that data) is not. Publishing anonymised data on enterprise buyers, access fee revenue, and per-DataDAO economics would validate the entire value accrual thesis. Without demand-side evidence, the token economy is a one-sided marketplace.
2. **Transition validators to permissionless.** The PoSA model means the Foundation controls block production, which creates both centralisation risk and a cap on staking participation. Permissionless validators would increase staking demand for VANA, improve supply lock-up dynamics, and address the most obvious decentralisation gap simultaneously.
3. **Increase circulating supply transparency.** With 59.81% of supply locked and unlock schedules spanning years, publishing a real-time dashboard showing upcoming unlocks, Foundation treasury movements, and ecosystem grant disbursements would let holders assess dilution risk accurately. The current opacity around locked supply movements is a material information gap.
