---
title: "How to Earn with Grass: Passive Income from Bandwidth"
description: "How Grass turns your idle bandwidth into GRASS tokens. Setup guide, realistic earnings, airdrop mechanics, and why 'passive income' needs honest qualification."
difficulty: "beginner"
category: "walkthrough"
publishDate: 2026-03-10
draft: false
---

## What Grass actually does

Grass is a bandwidth-sharing network built on Solana. You run an app on your computer or phone. It uses a small fraction of your idle internet bandwidth to route web scraping requests from AI companies through your residential IP address. In return, you earn points that convert to GRASS tokens via seasonal airdrops.

In plain terms: it is a residential proxy network with a token incentive layer. AI companies need to scrape the public web from diverse geographic locations. Your home internet provides those locations. Grass claims to use approximately 0.3% of your total bandwidth and routes traffic that is "completely separate" from your personal browsing.

For the full project assessment, see our [Grass review](/projects/grass/).

## The honest earnings picture

Before I walk through the setup, you need to understand what "passive income" means here.

Grass does not pay you a fixed rate. You earn points based on uptime and bandwidth contribution. Those points convert to GRASS tokens through seasonal airdrops — not continuous payments. The conversion rate is not fixed and depends on how many people are participating and how many tokens are allocated to each season.

Season 1 distributed 100 million GRASS (10% of supply) to approximately 2 million users in October 2024. If you started early and ran consistently, you might have received 2,000-3,000 GRASS tokens worth $500-800 at listing. At current prices (~$0.37), those same tokens are worth $740-1,110.

Season 2 will distribute 170 million GRASS — nearly double Season 1 — expected in H1 2026 but not yet distributed. With 8.5+ million monthly active nodes now competing for that allocation across 190+ countries, individual shares may not increase proportionally despite the larger pool.

This is beer money for most participants. The setup takes five minutes and runs in the background, so the effort-to-reward ratio is reasonable. But do not expect meaningful income.

## Setup guide

### What you need

- A computer (Windows, Mac, or Linux) or Android phone
- An internet connection — no minimum speed specified
- A Solana wallet (Phantom or Solflare) for token claims
- Five minutes

### Step 1: Register

Go to grass.io and create an account with your email or Google. You must be 18 or older.

### Step 2: Download the Desktop Node

Go to grass.io/download and install the Desktop Node for your operating system. The Desktop Node is strongly recommended over the browser extension — it handles 10x more bandwidth and earns at **2x the rate**.

The browser extension (Chrome/Edge) still works but is being phased out. If you are starting fresh, go straight to the Desktop Node.

### Step 3: Run it

Launch the app. It operates in the background. No configuration needed. It will start earning points immediately based on your uptime and the network's bandwidth demand.

### Step 4: Connect your wallet

Go to app.grass.io and connect a Solana wallet. You will need this to claim tokens when airdrops distribute. If you do not have a Solana wallet, install Phantom from phantom.app.

### Step 5: Monitor

The Rewards Dashboard at app.grass.io shows your accumulated points. There are two types since Epoch 11:

- **Uptime Points** — earned for maintaining a connection, plus referral bonuses
- **Network Points** — from a fixed daily pool of 1,000,000 points distributed proportionally based on actual bandwidth used

## Multiple devices

You can run Grass on more than one device, but there is a catch. If multiple devices share the same public IP address (same Wi-Fi network), your total earnings stay the same — they are split across devices, not multiplied.

To actually increase earnings, run devices on **different public IP addresses**: home broadband, mobile data, office network. Desktop at home plus the Android app on mobile data is the optimal multi-device setup.

One account per person. Running multiple accounts on the same device or network will get you flagged and your earnings reset to zero.

## How points become tokens

Grass uses a seasonal airdrop model:

1. You earn points continuously based on uptime and bandwidth
2. Time is divided into Epochs. Each epoch has a token allocation.
3. Within each epoch, users are ranked into 9 tiers based on points earned
4. Higher tier = larger share of that epoch's airdrop
5. **Minimum threshold: 500 Grass Points in any epoch** to be eligible

Season 1 covered Epochs 1-7 and distributed 100 million GRASS. Season 2 covers subsequent epochs and will distribute 170 million GRASS. The tokens are distributed in bulk at the end of each season, not continuously.

## The GRASS token

| Metric | Value |
|---|---|
| Total supply | 1 billion GRASS (fixed) |
| Circulating | ~542M |
| Price | ~$0.37 (down ~90% from ATH of $3.89) |
| Chain | Solana |
| Exchanges | Bybit, Binance, KuCoin, Kraken, Coinbase, Gate.io |

GRASS staking is available at grassfoundation.io/stake — delegate to routers, rewards distributed every second, 7-day unbonding period. APY is not publicly disclosed.

The tokenomics allocation is worth noting: 25.2% to early investors (1-year cliff + 1-year vest), 22% to contributors (1-year cliff + 3-year vest), 22.8% to foundation/ecosystem. Nearly half the supply is allocated to insiders. A 55 million token ecosystem contributor unlock completed on 28 February 2026, increasing circulating supply by roughly 13%.

## Live Context Retrieval (LCR)

LCR is the product that gives Grass a potential revenue model beyond token emissions. It is an engine that gives AI models real-time access to public web data, solving the stale-data problem of models trained on static datasets.

The network currently processes over 100 terabytes of data daily, with a target of 1+ petabyte per day as part of the Phase 2 Sion upgrade. With 8.5+ million monthly active nodes, Grass claims it can scrape enough data to train a GPT-3.5-class model from scratch. Enterprise customers pay in GRASS tokens to access this data via APIs.

Whether LCR generates significant revenue remains to be seen. No named enterprise customers or revenue figures have been publicly disclosed.

## Referral programme

Three tiers, all based on Uptime Points:

| Tier | Relationship | Bonus |
|---|---|---|
| 1 | Direct referral | 20% of their Uptime Points |
| 2 | Referral's referral | 10% |
| 3 | Third-level | 5% |

No cap on referrals. Bonuses are ongoing as long as the referred user stays active. When a direct referral hits 100 hours uptime, they get 5,000 bonus points and you get 2,500.

## Risks and downsides

**Your IP is exposed.** Grass routes web requests through your residential IP. While they claim no personal data is accessed, any app routing traffic through your connection introduces theoretical risk. You cannot use a VPN — it is explicitly prohibited and will reduce your earnings.

**Centralisation.** Grass scores 4/10 on our Freedom Score. Wynd Labs (the company behind Grass) controls which "verified institutions" use the network. The verification process is opaque. Code is entirely closed-source. Governance exists only in documentation.

**Earnings are unpredictable.** There is no fixed conversion rate from points to tokens. Seasonal airdrops mean you wait months to receive anything. The token is down 90% from its all-time high.

**Geographic restrictions.** US and Canada users can run Grass and earn points but face **delayed token payouts** with no confirmed timeline. Sanctioned countries are fully excluded.

**The proxy question.** Residential proxy networks have historically been associated with questionable operators. Grass claims its institutional clients are verified and only scrape public data. AppEsteem certification provides some assurance. But you are trusting Grass's claims about who uses your bandwidth and for what purpose.

## My assessment

Grass is the lowest-effort earning opportunity in the DeAI space. Install an app, let it run, occasionally check your points. The bandwidth impact is genuinely minimal in my experience.

But I rate it as a speculative bonus, not income. The token is down 90% from its peak. Earnings depend on seasonal airdrops with uncertain conversion rates. The network is centralised despite the DePIN branding. And the fundamental value proposition — sharing your bandwidth as a residential proxy — requires trust in a company whose verification processes are opaque.

I run it on my Mac Studio because the marginal cost is zero. If Season 2 delivers a meaningful airdrop, great. If not, I have lost nothing but a fraction of bandwidth I was not using anyway. That is the right way to think about Grass — a free option on potential future value, not an income stream.
