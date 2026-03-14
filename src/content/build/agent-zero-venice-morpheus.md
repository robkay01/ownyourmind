---
title: "Agent Zero + Venice + Morpheus: A Walkthrough"
description: "How to set up Agent Zero with Venice AI for inference and Morpheus for decentralised compute. A fully sovereign AI agent stack, step by step."
difficulty: "intermediate"
category: "walkthrough"
publishDate: 2025-03-02
draft: false
---

## What we are building

Agent Zero is an open-source AI agent framework. Venice is a privacy-focused AI inference provider. Morpheus provides decentralised compute infrastructure. Combining them gives you an autonomous AI agent running on infrastructure you control, with no centralised intermediary seeing your prompts or data.

This is what a sovereign AI agent stack looks like in practice.

## Prerequisites

- A VPS or local machine with Docker installed
- A Venice AI API key (from venice.ai)
- Basic terminal and Docker familiarity
- Approximately 30 minutes

I run this on both a RackNerd VPS in Texas and locally on my Mac Studio. The VPS gives me 24/7 uptime for persistent tasks. Local gives me faster iteration and full sovereignty over the inference layer when I point it at Ollama. You can start with either — or run both.

## Step 1: Set up the VPS (if using one)

If running locally, skip to Step 2.

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Install Docker if not present
curl -fsSL https://get.docker.com | sh

# Verify
docker --version
```

A basic VPS with 4GB RAM is sufficient for Agent Zero. You do not need GPU. The inference happens on Venice's API or your local Ollama instance; the agent itself is lightweight.

## Step 2: Clone and configure Agent Zero

```bash
# Clone the repository
git clone https://github.com/frdel/agent-zero.git
cd agent-zero

# Copy the example environment file
cp example.env .env
```

Edit the `.env` file to configure your API endpoints:

```bash
# Open the config
nano .env
```

Set the following variables:

```
# Use Venice AI for inference
CHAT_API_BASE=https://api.venice.ai/api/v1
CHAT_API_KEY=your-venice-api-key
CHAT_MODEL=llama-3.3-70b

# Or use local Ollama
# CHAT_API_BASE=http://host.docker.internal:11434/v1
# CHAT_API_KEY=not-needed
# CHAT_MODEL=mistral
```

Venice provides access to uncensored open-weight models via API. The inference happens on Venice's infrastructure. If you want full sovereignty over the inference layer as well, point the API base to your local Ollama instance instead.

## Step 3: Run Agent Zero with Docker

```bash
# Build and start the container
docker compose up -d

# Check it is running
docker ps

# View logs
docker logs agent-zero -f
```

Agent Zero exposes a web interface on port 50001 by default. Access it at `http://your-vps-ip:50001` or `http://localhost:50001` if running locally.

## Step 4: Test the agent

Open the web interface and give the agent a task:

```
Research the current MOR token price and calculate my daily earnings
if I have 50 stETH staked in the Morpheus capital contract.
```

The agent will:
1. Search for current MOR price data
2. Look up total stETH staked in Morpheus
3. Calculate the proportional daily emissions
4. Return a formatted answer

This is a simple example. Agent Zero can handle multi-step tasks including web research, file operations, code execution and API calls. The key difference from a centralised agent: your prompts go through Venice (encrypted, no logging) or your own Ollama instance, not through OpenAI or Anthropic.

## Step 5: Connect to Morpheus compute (optional)

Instead of using Venice's hosted API, you can route inference through the Morpheus compute network. This means your agent's inference requests are served by decentralised compute providers earning MOR tokens.

The Morpheus compute endpoint works as an OpenAI-compatible API. Update your `.env`:

```
CHAT_API_BASE=https://compute.mor.org/v1
CHAT_API_KEY=your-morpheus-api-key
CHAT_MODEL=llama-3.1-70b
```

This adds latency compared to Venice or local Ollama. The trade-off is that you are using genuinely decentralised infrastructure and contributing to network demand that drives MOR token value.

## Step 6: Make it persistent

For a VPS deployment, ensure the agent restarts automatically:

```bash
# Docker compose already handles restart policy
# Verify in docker-compose.yml:
# restart: unless-stopped

# To update Agent Zero later
cd agent-zero
git pull
docker compose down
docker compose up -d --build
```

## The three inference options compared

| Option | Privacy | Speed | Cost | Sovereignty |
|--------|---------|-------|------|-------------|
| Local Ollama | Full | Fast | Free (after hardware) | Complete |
| Venice AI | High (encrypted, no logging) | Fast | Per-token pricing | High |
| Morpheus compute | High | Moderate | MOR per request | Complete |

I use all three depending on the task. Local Ollama on my Mac Studio for sensitive work and rapid iteration — the prompt never leaves my machine. Venice for tasks that need larger models than my hardware supports, or when I want uncensored output. Morpheus compute when I want to test the network and contribute to demand. Running Agent Zero on both a VPS and locally means I can keep persistent agents running remotely while experimenting freely on my local instance.

## What the agent can do

With the sovereign stack running, your Agent Zero instance can:

- Research topics and synthesise information from the web
- Execute code (Python, shell) to process data
- Interact with files on the host system
- Call external APIs on your behalf
- Chain multiple steps together autonomously
- Operate 24/7 without supervision

What it cannot do yet: interact with DeFi protocols directly, manage wallets or execute on-chain transactions. These capabilities are on the Morpheus roadmap but are not production-ready in Agent Zero today. If someone tells you their agent is autonomously trading on your behalf via decentralised infrastructure, verify that claim carefully.

## Troubleshooting

**Agent not responding.** Check Docker logs: `docker logs agent-zero`. The most common issue is an incorrect API key or unreachable API endpoint.

**Slow responses.** If using Morpheus compute, expect higher latency than centralised APIs. If using local Ollama, check that your model fits in available memory.

**Container not starting.** Ensure Docker is running and the port is not in use: `docker ps` and `lsof -i :50001`.

**Venice API errors.** Verify your API key is active and has credits. Check Venice's status page for outages.
