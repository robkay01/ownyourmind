---
title: "Mac Studio DeAI Setup Guide"
description: "How I set up a Mac Studio M4 Max as a decentralised AI workstation. Local inference, compute contribution and sovereign AI from your desk."
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

My Mac Studio handles three workloads:

1. **Local inference.** Running open-weight models via Ollama for daily work: drafting, code review, data processing, research. This is my primary use case. No API calls, no data leaving my machine, no ongoing costs after the hardware investment.

2. **Decentralised compute.** Contributing inference capacity to the Morpheus compute network. The Mac Studio serves requests and earns MOR tokens.

3. **Experimentation.** Testing new models as they release, benchmarking quantisation levels, evaluating DeAI tools before writing about them.

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

# Pull a model (Mistral 7B is a good starting point)
ollama pull mistral

# Test it
ollama run mistral "Explain decentralised AI in two sentences."
```

For a 64GB machine, these models run well:

| Model | Size | Speed | Good for |
|-------|------|-------|----------|
| Mistral 7B | ~4GB | Fast | General tasks, drafting |
| Llama 3 8B | ~5GB | Fast | Code, reasoning |
| Qwen 2.5 32B | ~20GB | Moderate | Complex analysis |
| Llama 3 70B (Q4) | ~40GB | Slow | Best quality, long context |
| DeepSeek Coder 33B | ~20GB | Moderate | Code generation |

With 64GB you can run anything up to about 40GB model size with reasonable performance. The 70B quantised models work but response times are noticeably slower.

## Step 3: Install llama.cpp (optional, more control)

Ollama uses llama.cpp under the hood. If you want more control over inference parameters, quantisation and batching, install it directly.

```bash
brew install llama.cpp

# Download a GGUF model manually
mkdir -p ~/models
cd ~/models
wget https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q5_K_M.gguf

# Run with specific parameters
llama-cli -m ~/models/mistral-7b-instruct-v0.2.Q5_K_M.gguf \
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
    "model": "mistral",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

This is the foundation for connecting local models to agents, automation tools and custom applications without any external API dependency.

## Step 5: Connect to a compute network

Once local inference works, you can contribute compute to a decentralised network and earn for it.

For Morpheus, the compute node software connects your machine to the network and routes inference requests to your Ollama instance. You earn MOR tokens proportional to the compute you serve.

The specific setup instructions vary by network and change as node software updates. Check the current documentation for whichever network you choose:

- Morpheus: [mor.org](https://mor.org) for compute node setup
- Akash: [akash.network](https://akash.network) for provider setup

The principle is the same across all of them. Your hardware, your models, your earnings. The network handles discovery, routing and payment.

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
