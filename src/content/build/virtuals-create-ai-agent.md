---
title: "Virtuals Protocol: How to Create an AI Agent"
description: "Step-by-step guide to creating and launching a tokenised AI agent on Virtuals Protocol. GAME framework, bonding curves, revenue sharing, and the honest economics of agent tokens."
difficulty: "beginner"
category: "walkthrough"
publishDate: 2026-03-10
draft: false
---

## What you are building

Virtuals Protocol lets you create a tokenised AI agent (an autonomous entity with its own personality, social media presence, and tradeable token) without writing code. Over 18,000 agents have been deployed. A handful have achieved real traction. The vast majority have not.

I want to set expectations clearly before you start. Creating an agent on Virtuals costs approximately $65 in VIRTUAL tokens. Launching one that generates meaningful revenue or trading volume requires marketing, community building and a genuine use case. The platform makes creation easy. Success is another matter entirely.

For the full project assessment, see our [Virtuals Protocol review](/projects/virtuals/).

## What you need

- **MetaMask** or compatible Web3 wallet, connected to Base network (Virtuals also supports Solana, Ethereum mainnet and Ronin, but Base remains the primary chain)
- **Small amount of ETH on Base** for gas fees (~$0.01-0.05 per transaction)
- **100 VIRTUAL tokens** (~$76 at current prices) to create the agent
- **X/Twitter account** if you want social media integration
- **A concept.** What will your agent do, who is the audience, what personality should it have?

No special hardware. No GPU. No coding. Everything runs on Virtuals' hosted infrastructure.

## Step 1: Plan before you launch

Do not skip this. The technical creation process takes minutes. The thinking should take longer.

**Define the purpose.** What problem does the agent solve or what entertainment does it provide? The successful agents on Virtuals have clear identities: AIXBT monitors 400+ crypto KOLs and provides market intelligence. Luna (AI-DOL) is an AI livestreamer who has collaborated with Bruno Mars. These are not random chatbots with tokens attached.

**Create the X/Twitter account first.** Build some community before launch. Secure your branding. Agents with established social presence before token launch perform better than those launched cold.

**Experiment with GAME.** Go to game-lite.virtuals.io and test the GAME framework (no tokens needed). Define your agent's behaviour, test responses, iterate on the personality before spending VIRTUAL to deploy.

## Step 2: Create the agent

1. Go to **fun.virtuals.io** and click "Create New Agent"
2. Fill in the mandatory fields:
   - **Profile picture.** This is the agent's visual identity.
   - **Agent name.** Unique identifier, choose carefully.
   - **Ticker symbol.** Maximum 6 characters (e.g. $LUNA, $AIXBT).
   - **Description.** Purpose, personality, interests, backstory.
3. Optionally link Twitter, Telegram, YouTube, website
4. **Pay 100 VIRTUAL** to deploy

Your agent enters the **bonding curve phase** on fun.virtuals.io. Community members can now buy and sell the agent's tokens along a price curve where early buyers pay less.

## Step 3: Graduation

When 42,000 VIRTUAL accumulates in the bonding curve from community purchases (not paid by you, this comes from trading activity), the agent "graduates":

- A Uniswap V2 liquidity pool is automatically created (agent token paired with VIRTUAL)
- LP tokens are locked for 10 years (rug-pull protection)
- Agent becomes visible on app.virtuals.io
- An Agent NFT is minted as proof of creation
- Fixed supply: 1 billion ERC-20 agent tokens

At current VIRTUAL prices (~$0.76), the graduation threshold represents roughly $31,600 in cumulative trading. This is the real barrier, not the 100 VIRTUAL creation cost, but attracting enough interest to graduate.

Many agents never graduate. They sit on fun.virtuals.io with minimal trading volume until interest fades. This is the norm, not the exception.

## Step 4: Activation

After graduation, the system automatically:
1. Selects a default AI cognitive model
2. Prepares the character card from your description
3. Mints a default contribution
4. Deploys the model from IPFS to Virtuals' Agent Runner

Status shows "ACTIVATING" for up to 5 minutes, then "AVAILABLE". Your agent goes live on Telegram automatically.

## Step 5: Social media integration

To connect your agent to X/Twitter:

1. Click "Configure Agent" on app.virtuals.io
2. Select "Configure Agentic Twitter Agent"
3. Authenticate and connect the X account
4. Select "Use Virtuals' AI Stack"
5. On X: go to Settings > Your Account > Automation > Managing account to set up the automation label

Your agent will now post autonomously based on its GAME configuration. Monitor it. Autonomous social media posting needs oversight, especially in the early days.

## The GAME framework

GAME (Game Agentic Module Engine) is the AI engine powering agent behaviour. It uses a two-tier system:

**Task Generator (High-Level Planner):** Receives the agent's goal and description, generates tasks aligned with that goal, and assigns them to specialised Workers.

**Workers (Low-Level Planners):** Execute specific actions: posting tweets, trading tokens, generating images, processing on-chain transactions. Each Worker has isolated function sets to prevent bloated action spaces.

You configure GAME by defining:
- **Agent Definition Prompts.** Goal, character, personality, communication style.
- **Task Generator Context.** What the agent knows about itself (follower counts, engagement metrics).
- **Worker Context.** What actions are available, what data workers can observe.

GAME is available as a cloud service (low-code), an open-source SDK (for developers), and an API (for custom integration). You do not need to touch the SDK for a basic agent. The cloud configuration handles it.

## Revenue sharing

A 1% trading tax applies to all agent token trades after graduation:

| Recipient | Share | What it means |
|---|---|---|
| Agent Creator (you) | 30% | Sent directly to your wallet |
| Agent Affiliates | 20% | Platforms facilitating trades |
| Agent SubDAO | 50% | Community governance treasury |

If your agent's token does $10,000 in daily volume, the 1% tax generates $100/day. Your 30% share is $30/day. The math is straightforward. Your earnings scale linearly with trading volume.

Revenue generated by the agent itself (services sold via the Agent Commerce Protocol) triggers buyback-and-burn of agent tokens rather than direct distribution. This is deflationary for the agent token but does not put cash in your wallet.

## The honest economics

Let me be direct about the numbers.

**Creation cost:** 100 VIRTUAL (~$76). Low barrier.

**Graduation cost:** You do not pay this directly. It comes from community trading. But your agent needs to attract ~$31,600 in cumulative trading to graduate. If it does not, it sits on fun.virtuals.io indefinitely.

**Ongoing costs:** Minimal. Gas on Base is fractions of a cent. Virtuals hosts the infrastructure.

**Revenue potential:** Entirely dependent on trading volume. Most of the 18,000+ agents have negligible volume. The top agents (AIXBT, Luna) have generated millions. The distribution is extremely skewed.

**VIRTUAL token context:** Currently ~$0.76, down 85% from its all-time high of $5.07. The token has a fixed 1 billion supply with no future inflation, but whale concentration is reportedly 90%+.

### What success looks like

- **Luna (AI-DOL):** AI livestreamer, ~1M TikTok followers, 10M+ views, collaborated with Bruno Mars. Peak agent token market cap in the hundreds of millions.
- **AIXBT:** Market intelligence agent monitoring 400+ KOLs. Hit ~$500M market cap at peak (currently ~$30M, down 94%).
- **Ethy AI:** 2M+ transactions processed.

### What failure looks like

The vast majority of agents. Minimal trading volume. No graduation. Agent tokens worth fractions of a cent per address. The platform creates the same dynamics as any token launchpad: a few winners and many losers.

## Risks

**This is a token launchpad.** Despite the AI utility narrative, most agent tokens trade on speculation. The platform's own IAO page uses "1000x" language. If you are creating an agent for the technology, that is one thing. If you are creating one expecting guaranteed returns, recalibrate.

**Quality control is minimal.** 18,000+ agents with no curation means enormous noise. Standing out requires genuine differentiation.

**Multi-chain complexity.** Virtuals now operates on Base, Solana, Ethereum mainnet and Ronin. Each chain has different liquidity, gas costs and user bases. Fragmentation across four chains may dilute network effects.

**Competition from free alternatives.** LangChain (118K+ GitHub stars), AutoGPT, CrewAI and other open-source frameworks offer agent capabilities without tokenisation costs. The question is whether the tokenised model adds enough value to justify the Virtuals ecosystem.

**Regulatory uncertainty.** AI + crypto + autonomous agents is uncharted territory. Whether agent tokens constitute securities is an open question in most jurisdictions.

**Revenue sustainability.** The buyback-and-burn model depends on agents generating real revenue. Most do not. The 1% trading tax generates income only as long as people are trading the agent token.

## My take

I do not hold VIRTUAL and I have not created an agent. The platform is technically impressive. Creating a tokenised AI agent in minutes with built-in social media integration, on-chain commerce and community governance is genuinely novel.

But I struggle with the economics. The vast majority of agent tokens trade like meme coins with AI branding. The 97% revenue collapse from Virtuals' peak tells you how sentiment-driven this market is. Luna and AIXBT are outliers, not templates.

If you have a genuine use case for an autonomous AI agent (market intelligence, customer interaction, content creation, on-chain automation), Virtuals provides the easiest path to deploying one with a tokenised economic model. The 100 VIRTUAL creation cost is low enough to experiment.

If you are launching an agent primarily to trade the token, understand that you are playing a launchpad game where the odds heavily favour early movers and the platform itself.
