---
title: "Mac Studio DeAI Setup Guide"
description: "How I set up a Mac Studio M4 Max as a decentralised AI workstation. Local inference, sovereign AI from your desk."
difficulty: "intermediate"
category: "hardware"
publishDate: 2025-03-01
draft: false
---

## Why Mac Studio

I bought a Mac Studio M4 Max with 64GB unified memory in early 2026. It replaced a Dell laptop that could barely run a 7B model. The difference is not marginal. It is transformational.

Apple Silicon's unified memory architecture means the CPU and GPU share the same memory pool. A 64GB Mac Studio can load and run models that would require a dedicated GPU with 64GB VRAM on x86 hardware. That kind of GPU costs more than the entire Mac Studio.

The M4 Max is silent at load, draws around 60W, sits on your desk and runs 24/7 without complaint. For a sovereignty-first setup where you want to own the hardware running your AI, it is the best value proposition available to consumers right now.

## What I am running

My Mac Studio handles two workloads:

1. **Local inference.** Running open-weight models via Ollama for daily work: drafting, code review, data processing, research. This is my primary use case. No API calls, no data leaving my machine, no ongoing costs after the hardware investment.

2. **Experimentation.** Testing new models as they release, benchmarking quantisation levels, evaluating DeAI tools before writing about them.

## What you need

- Mac Studio M4 Max or M2 Ultra (64GB minimum, 128GB or 192GB better)
- macOS Sequoia or later
- Homebrew
- Terminal familiarity

A Mac Mini M4 Pro with 48GB works for smaller models at lower throughput. An M2 Ultra with 192GB is ideal if budget allows; it loads 70B models comfortably. The M4 Max with 64GB is the sweet spot for price and capability.

## Step 1: Install the basics

```bash
# Homebrew (skip if already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Core dependencies
brew install python@3.11 cmake git wget curl jq
```

## Step 2: Install Ollama

Ollama is the easiest way to run models locally on Mac. It handles model downloads, quantisation and serving with a clean interface.

```bash
brew install ollama

# Start the Ollama service
ollama serve &

# Pull a model (Llama 3.3 is a good starting point)
ollama pull llama3.3

# Test it
ollama run llama3.3 "Explain decentralised AI in two sentences."
```

For a 64GB machine, these models run well as of March 2026:

| Model | Size | Speed | Good for |
|-------|------|-------|----------|
| Gemma 3 12B | ~8GB | Fast | General tasks, multilingual |
| Llama 3.3 70B (Q4) | ~40GB | Moderate | Best all-round, my daily driver |
| Qwen 3 32B | ~20GB | Moderate | Complex reasoning, strong at code |
| DeepSeek-R1 14B | ~9GB | Fast | Reasoning tasks, chain-of-thought |
| Mistral Small 24B | ~14GB | Fast | Concise output, function calling |
| Codestral 22B | ~13GB | Fast | Code generation and review |

With 64GB you can run anything up to about 40GB model size with reasonable performance. Llama 3.3 70B at Q4 quantisation is the sweet spot. It fits in memory with room to spare and handles most tasks as well as cloud APIs. For faster responses on lighter tasks, Gemma 3 12B or DeepSeek-R1 14B are excellent.

## Step 3: Install llama.cpp (optional, more control)

Ollama uses llama.cpp under the hood. If you want more control over inference parameters, quantisation and batching, install it directly.

```bash
brew install llama.cpp

# Download a GGUF model manually
mkdir -p ~/models
cd ~/models
# Example: Qwen 3 32B at Q4_K_M quantisation
wget https://huggingface.co/bartowski/Qwen3-32B-GGUF/resolve/main/Qwen3-32B-Q4_K_M.gguf

# Run with specific parameters
llama-cli -m ~/models/Qwen3-32B-Q4_K_M.gguf \
  -p "Explain decentralised compute in one paragraph." \
  -n 256 \
  --temp 0.7
```

The `Q5_K_M` quantisation level is a good balance between quality and performance. `Q4_K_M` is faster but slightly lower quality. `Q8_0` is near-full precision but uses more memory.

## Step 4: Set up the Ollama API for local applications

Ollama exposes an OpenAI-compatible API on `localhost:11434`. This means any tool that works with the OpenAI API can point to your local Ollama instance instead.

```bash
# Verify the API is running
curl http://localhost:11434/api/tags

# Test a completion
curl http://localhost:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3.3",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

This is the foundation for connecting local models to agents, automation tools and custom applications without any external API dependency. See our [Agent Zero + Venice + Morpheus walkthrough](/build/agent-zero-venice-morpheus/) for a full setup guide connecting an AI agent to your local Ollama instance.

## Step 5: Connect to a compute network (optional)

Once local inference works, you have the option to contribute compute to a decentralised network and earn tokens for it.

Morpheus, Akash and others each have their own node software that connects your machine to the network and routes inference requests to your local models. The specific setup instructions vary by network and change frequently. Check the current documentation:

- Morpheus: [mor.org](https://mor.org) for compute node setup
- Akash: [akash.network](https://akash.network) for provider setup

I have not done this step myself yet. The Mac Studio earns its keep through local inference alone. Contributing to a compute network is on my list to explore but it is not required to get value from this setup.

## Step 6: Monitoring and maintenance

Run these on a schedule or as a launchd service:

```bash
# Check Ollama is running
curl -s http://localhost:11434/api/tags > /dev/null && echo "Ollama: running" || echo "Ollama: down"

# Check disk space (models are large)
df -h ~/models

# Check memory usage
memory_pressure
```

For anything running 24/7, set up a simple monitoring script that alerts you if a service goes down. I use a cron job that checks every 5 minutes and sends a notification via a webhook if something stops responding.

## Cost analysis

| Item | Cost |
|------|------|
| Mac Studio M4 Max 64GB | ~A$4,500 |
| Electricity (~60W, 24/7, A$0.30/kWh) | ~A$160/year |
| Internet (existing connection) | A$0 additional |
| Software | A$0 (all open source) |
| **Total year 1** | **~A$4,660** |
| **Ongoing annual cost** | **~A$160** |

Compare this to API costs for equivalent inference volume. At moderate daily usage (100+ queries across different models), you would spend A$50-200/month on API calls. The hardware pays for itself within 2-3 years on inference savings alone, before accounting for any compute network earnings.

## What I would do differently

If I were buying again today, I would get the 128GB configuration. 64GB is enough for most models but the headroom makes a real difference when you want to run larger models or multiple models simultaneously. The price difference is significant but the utility gain is proportional.

The M2 Ultra with 192GB remains the best option if budget is not the primary constraint. It loads 70B parameter models in full precision, which is not possible on the 64GB machine.
