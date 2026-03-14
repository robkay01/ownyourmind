---
title: "How to Build an AI Agent with ElizaOS"
description: "Step-by-step guide to building an autonomous AI agent with ElizaOS. Character files, model backends (Venice, OpenAI, Ollama), Twitter integration, blockchain actions, and realistic cost expectations."
difficulty: "intermediate"
category: "walkthrough"
publishDate: 2026-03-10
draft: false
---

## What ElizaOS is

ElizaOS is an open-source TypeScript framework for building autonomous AI agents. It has 17,700+ GitHub stars, 5,500+ forks, and is the most popular AI agent framework in web3. It is MIT licensed and free to use — no token required.

Your agent can post on Twitter, respond in Discord, execute blockchain transactions, maintain persistent memory, and operate 24/7 without intervention. The framework handles the plumbing. You define the personality and capabilities.

For the full project assessment, see our [ElizaOS review](/projects/elizaos/).

**Version note:** This guide covers ElizaOS v1.x (latest stable: v1.7.2). ElizaOS v2 is in alpha (v2.0.0-alpha) with changes to the plugin namespace and an event-driven architecture. When v2 reaches stable release, this guide will be updated. The core concepts (character files, plugin system, model backends) carry over.

## What you need

- **Node.js v23+** — specifically v23 or later, not v20 or v22. This is the most common source of errors.
- **Bun** runtime (from bun.sh)
- **Git**
- **At least one AI model provider:** OpenAI API key, Anthropic API key, Venice API key, or Ollama installed locally
- Terminal familiarity

Windows users: use WSL2 or Git Bash. PowerShell and CMD are not supported.

## Step 1: Install prerequisites

```bash
# Install nvm (skip if you have it)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js v23
nvm install 23
nvm use 23

# Verify
node --version  # Must be v23+

# Install Bun
curl -fsSL https://bun.sh/install | bash

# If 'elizaos' command not found after install:
export PATH="$HOME/.bun/bin:$PATH"
```

## Step 2: Create your agent

The CLI method is the fastest path:

```bash
# Install CLI
bun i -g @elizaos/cli

# Create project (interactive — prompts for DB and model provider)
elizaos create my-agent

# Start
cd my-agent
elizaos start
```

During creation, you choose a database (pglite for development) and model provider (OpenAI or Anthropic). Enter your API key when prompted.

For more control, clone the repo directly:

```bash
git clone https://github.com/elizaOS/eliza
cd eliza
npm install -g pnpm
pnpm install --no-frozen-lockfile
cp .env.example .env
# Edit .env with your API keys
pnpm build
pnpm start --characters="characters/your-character.character.json"
```

## Step 3: Define the character

Character files are JSON configs that define everything about your agent's personality and capabilities. This is where you spend the most time.

A minimal character file:

```json
{
  "name": "MyAgent",
  "bio": "A straightforward AI that analyses DeAI projects.",
  "plugins": ["@elizaos/plugin-openai"]
}
```

A more complete one:

```json
{
  "name": "DeAIBot",
  "bio": [
    "An AI analyst covering decentralised AI infrastructure.",
    "Values data over narrative. Calls out hype."
  ],
  "lore": [
    "Has tracked DeAI since 2024.",
    "Believes sovereignty matters more than convenience."
  ],
  "knowledge": [
    "Bittensor uses a 21M TAO cap with halving schedule.",
    "Venice offers private inference with no content filtering."
  ],
  "topics": ["deai", "tokenomics", "gpu compute", "privacy"],
  "adjectives": ["direct", "analytical", "sceptical"],
  "style": {
    "all": ["concise", "uses specific numbers"],
    "post": ["under 280 characters", "asks questions"],
    "chat": ["helpful but honest about limitations"]
  },
  "modelProvider": "venice",
  "clients": ["twitter"],
  "plugins": ["@elizaos/plugin-venice", "@elizaos/plugin-twitter"]
}
```

Key fields:
- **bio** — can be a string or array (arrays get randomised for variation)
- **lore** — extended backstory and beliefs
- **knowledge** — facts fed into RAG retrieval
- **messageExamples** — sample conversations for tone calibration
- **postExamples** — example social media posts
- **style** — writing rules per context (all, chat, post)
- **modelProvider** — which LLM backend ("openai", "anthropic", "venice", "ollama")

ElizaOS includes tools for generating character files from existing data: `tweets2character` (from your tweets), `folder2knowledge` (from documents), and `chats2character` (from chat logs).

## Choosing a model backend

| Provider | Plugin | Cost | Privacy | Best for |
|---|---|---|---|---|
| **OpenAI** | `@elizaos/plugin-openai` | ~$5-30/month | Data sent to OpenAI | Highest capability |
| **Anthropic** | `@elizaos/plugin-anthropic` | ~$5-30/month | Data sent to Anthropic | Strong reasoning |
| **Venice** | `@elizaos/plugin-venice` | VVV staking or Pro sub | Private inference, no logs | Sovereignty-focused |
| **Ollama** | `@elizaos/plugin-llama` | Free (hardware cost) | Fully local | Maximum privacy |

For Venice, set these environment variables:

```bash
VENICE_API_KEY=your_key
VENICE_SMALL_MODEL=llama-3.3-70b
VENICE_LARGE_MODEL=llama-3.1-405b
VENICE_IMAGE_MODEL=fluently-xl
VENICE_EMBEDDING_MODEL=text-embedding-bge-m3
```

**Note:** Venice is retiring `llama-3.1-405b` from its web app on 30 May 2026. The API equivalent is `hermes-3-llama-3.1-405b`. After that date, requests will auto-route to a model of similar capability. Check Venice's model list for current options.

For Ollama (local inference):
```bash
# Install Ollama first (brew install ollama on Mac)
ollama serve &
ollama pull mistral
# Set in .env:
OLLAMA_MODEL=mistral
```

I would use Venice for a sovereignty-first agent — your prompts and responses stay private, you get access to uncensored open-weight models, and the API is OpenAI-compatible. See our [Venice review](/projects/venice/) for details on the privacy model.

## Step 4: Add Twitter integration

This is the most common use case — an agent that posts autonomously on X/Twitter.

Install the plugin:
```bash
elizaos plugins add @elizaos/plugin-twitter
```

Set environment variables. The recommended authentication method is **OAuth 1.0a** (not OAuth 2.0):

```bash
# OAuth 1.0a auth (recommended)
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET_KEY=your_api_secret_key
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret

# Behaviour controls
TWITTER_DRY_RUN=true          # Start with this ON
TWITTER_ENABLE_POST=true
TWITTER_ENABLE_REPLIES=true
TWITTER_ENABLE_ACTIONS=true
POST_INTERVAL_MIN=90          # Minutes between posts
POST_INTERVAL_MAX=180
```

You will need a Twitter Developer account with OAuth 1.0a credentials. The older username/password authentication still exists as a legacy option but is not recommended.

Add `"clients": ["twitter"]` to your character file and launch.

**Always start with `TWITTER_DRY_RUN=true`.** Review the output before letting your agent post live. Autonomous social media posting without supervision is how agents embarrass their creators.

X/Twitter aggressively rate-limits API calls. Start with conservative posting intervals (90-180 minutes) and increase only once you confirm your account is not getting flagged.

## Step 5: Add blockchain capabilities

ElizaOS has 23+ blockchain plugins covering most major chains.

```bash
# Solana — transfers, Jupiter swaps, NFTs
elizaos plugins add @elizaos/plugin-solana

# EVM — Ethereum, Base, Arbitrum transfers and swaps
elizaos plugins add @elizaos/plugin-evm
```

Set your private key in `.env`:
```bash
SOLANA_PRIVATE_KEY=your_key
# or
EVM_PRIVATE_KEY=your_key
```

Configure chains in the character file:
```json
"settings": {
  "chains": {
    "evm": ["base", "arbitrum"]
  }
}
```

Once configured, you can tell the agent "Transfer 0.01 ETH to 0xABC... on Base" via natural language. **Always specify the chain explicitly** — without it, the agent may default to mainnet and execute real transactions when you meant to test.

## Memory system

ElizaOS maintains persistent memory across conversations using vector embeddings and semantic search. Three database options:

- **PGLite** — embedded PostgreSQL (3MB WASM), good for development
- **SQLite** — file-based, lightweight
- **PostgreSQL** — full Postgres with pgvector, recommended for production

The memory system automatically extracts facts from conversations, stores them as embeddings, and retrieves relevant context for future interactions. Your agent remembers what it has been told and builds on it.

## Running costs

ElizaOS itself is free. Costs come from the AI model provider:

| Setup | Estimated monthly cost |
|---|---|
| Ollama (local, 7B model) | $0 (electricity only) |
| Venice Pro | $18/month (unlimited text) |
| OpenAI GPT-4o (moderate use) | $5-30/month |
| Anthropic Claude (moderate use) | $5-30/month |
| VPS hosting (if not running locally) | $5-50/month |

A moderately active Twitter agent making 8-16 posts per day with reply handling will use roughly 500K-2M tokens per day depending on the model and conversation volume. At OpenAI rates, that is $1-5/day.

## Common pitfalls

1. **Wrong Node.js version.** Must be v23+, not v20 or v22. Check with `node --version`.
2. **Bun not in PATH.** Add `export PATH="$HOME/.bun/bin:$PATH"` to your shell profile after installing Bun.
3. **Plugin install failures.** If auto-install fails, manually install: `bun add @elizaos/plugin-name`.
4. **Mainnet transactions by accident.** Always specify the target chain when using blockchain plugins. Test on testnets first.
5. **Twitter rate limits.** Space out posts. Start conservative.
6. **`.env` committed to Git.** Never commit API keys. Ensure `.env` is in `.gitignore`.
7. **Windows without WSL.** PowerShell and CMD do not work. Use WSL2 or Git Bash.

## The token question

The $elizaOS token exists but is **not required to build or run agents**. The framework is fully open-source under MIT licence. You can build, deploy and operate agents without holding a single token.

The token is for the broader DAO ecosystem — cross-chain agent coordination, governance. The framework-to-token connection is loose, which is why our [review](/projects/elizaos/) gives ElizaOS a returns score of 2.7/10 despite the framework being genuinely good.

## My assessment

ElizaOS is the best open-source AI agent framework available today. The plugin ecosystem is extensive (90+ plugins), the character file system makes personality definition straightforward, and the community is active.

The honest qualification: building an agent that does something useful takes more than five minutes. The framework handles the plumbing well, but defining a compelling character, tuning behaviour, and maintaining the agent requires ongoing attention. The agents that succeed on Twitter are the ones with genuine personality and purpose, not just technical deployment.

I would start with a Venice-powered agent running locally on my Mac Studio. Define a focused character, connect Twitter with dry-run enabled, iterate on the personality until the output is consistently good, then go live. The total cost: a Venice Pro subscription ($18/month) or free if using Ollama locally.
