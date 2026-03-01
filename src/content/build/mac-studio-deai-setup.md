---
title: "Mac Studio DeAI Setup Guide"
description: "Step-by-step guide to turning a Mac Studio into a decentralised AI node. Run inference, earn compute rewards, and maintain sovereignty over your hardware."
difficulty: "intermediate"
category: "hardware"
publishDate: 2025-03-01
draft: false
---

## Why Mac Studio

The Mac Studio with M2 Ultra (or M4 Max) is one of the best consumer-grade machines for running AI inference. With 192GB unified memory, you can load models that would require multiple GPUs on x86 hardware. It's silent, power-efficient, and sits on your desk — perfect for a sovereignty-first setup.

## What you'll need

- Mac Studio (M2 Ultra or M4 Max recommended)
- 64GB RAM minimum, 192GB ideal
- macOS Sonoma or later
- Homebrew installed
- Basic terminal familiarity

## Step 1: Install dependencies

Open Terminal and install the core tools:

```bash
# Install Homebrew if you haven't
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python and core tools
brew install python@3.11 cmake git wget

# Install llama.cpp for local inference
brew install llama.cpp
```

## Step 2: Download a model

For a good starting point, grab a quantised version of a capable open model:

```bash
# Create a models directory
mkdir -p ~/models

# Download (example — substitute your preferred model)
cd ~/models
wget https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q5_K_M.gguf
```

## Step 3: Test local inference

Verify everything works before connecting to any network:

```bash
llama-cli -m ~/models/mistral-7b-instruct-v0.2.Q5_K_M.gguf \
  -p "Explain decentralised AI in one paragraph." \
  -n 256
```

You should see output streaming in your terminal. If the Mac Studio's unified memory is working correctly, even larger models will load without issues.

## Step 4: Connect to a compute network

Once local inference works, you can contribute your compute to a decentralised network. The specific setup depends on which network you choose — Morpheus, Akash, or others each have their own node software.

The key principle: you're running the software on your own hardware, earning tokens for contributing compute, and maintaining full control over what runs on your machine.

## Next steps

- Scale up to larger models (70B parameter models work well on 192GB)
- Set up monitoring and auto-restart scripts
- Join the network's community channels for support
- Track your earnings and optimise your setup

This is sovereignty in practice — your hardware, your models, your earnings.
