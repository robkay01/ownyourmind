# Self-Hosted Podcast Production System

> Replace ElevenLabs with a fully local, $0/month pipeline running on Apple Silicon.

## Current Assets

| Asset | Details |
|-------|---------|
| Published audio | ~5.8 hours across 45 episodes (324 MB) |
| Bobski voice segments | ~3+ hours (isolated turns in `podcast-audio/*/turns/turn-*-bobski.mp3`) |
| Original voice recordings | ~1 hour uploaded to ElevenLabs for cloning |
| ElevenLabs credits | 244k remaining (Pro plan, cancel after Phase 1) |
| Turn-by-turn segments | Individual clip files in `podcast-audio/*/turns/` |
| Scripts | 49 turn-by-turn markdown scripts in `podcast-scripts/` |

---

## The Open-Source Landscape (2026)

XTTS v2 (Coqui) — originally planned — is effectively dead. Coqui AI shut down December 2025 and the community fork is frozen. Several much better options have emerged.

### Voice Cloning Models

| Model | Licence | Voice Cloning | Apple Silicon | Training Data Needed |
|-------|---------|---------------|---------------|---------------------|
| **Chatterbox** (Resemble AI) | MIT | Zero-shot from 10s | Yes (mlx-audio) | None (zero-shot) |
| **Qwen3-TTS** (Alibaba) | Apache 2.0 | Zero-shot from 3s | Yes (mlx-audio) | None (zero-shot) |
| **F5-TTS** | CC-BY-NC-SA | Zero-shot + fine-tune | Yes (MPS) | Optional: 1-3 hrs for fine-tune |
| **GPT-SoVITS** | MIT | Fine-tune from 1 min | No (NVIDIA only) | 1-30 minutes |
| **Kokoro** | Apache 2.0 | Stock voices only (54+) | Yes (mlx-audio) | N/A |

**Key insight:** Zero-shot cloning now rivals ElevenLabs quality. Chatterbox and Qwen3-TTS can clone from seconds of reference audio with no training. Fine-tuning may not be necessary.

### Model Detail

**Chatterbox Turbo (Resemble AI)** — Best all-rounder
- 350M parameters, MIT licence (fully commercial)
- Zero-shot from ~10 seconds of reference audio
- Emotion exaggeration control, paralinguistic prompting
- Benchmarked against ElevenLabs — consistently preferred in side-by-side tests
- Sub-200ms latency (Turbo variant)
- Apple Silicon via mlx-audio and community port
- GitHub: `resemble-ai/chatterbox`

**Qwen3-TTS (Alibaba)** — Strongest benchmarks
- 0.6B (fast) and 1.7B (best quality), Apache 2.0
- Zero-shot from 3 seconds of reference audio
- Voice design via natural language description ("a warm male voice with Australian directness")
- 1.835% average WER across 10 languages, 0.789 speaker similarity score
- Streaming with 97ms first-packet latency, long-form consistency (10+ min without drift)
- Native Apple Silicon via mlx-audio and dedicated qwen3-tts-apple-silicon wrapper
- Caveat: English voices have a subtle "anime-like" quality noted by some users — needs hands-on testing
- GitHub: `QwenLM/Qwen3-TTS`

**F5-TTS** — Best fine-tuning option
- 335M parameters, Diffusion Transformer with ConvNeXt V2
- Zero-shot from a few seconds of reference, real-time factor of 0.15
- Fine-tuning: 10GB VRAM minimum, 24GB ideal. 100k-150k steps from pre-trained base
- Inference on as little as 4GB VRAM, supports Apple Silicon MPS backend
- Caveat: CC-BY-NC-SA licence on model weights (non-commercial)
- GitHub: `SWivid/F5-TTS`

**Kokoro** — Best for Rachel replacement
- 82M parameters (based on StyleTTS 2), Apache 2.0
- 54+ pre-built voice presets across 9 languages (Nicole, Heart, Bella for female voices)
- Outperforms models 5-15x its size in naturalness benchmarks
- Extremely lightweight, instant inference on Apple Silicon via mlx-audio
- Not designed for custom voice cloning — stock voices only
- HuggingFace: `hexgrad/Kokoro-82M`

**GPT-SoVITS** — Lowest data requirement
- Fine-tune from as little as 1 minute of audio
- WebUI interface with "One-Click Triple Action" automation
- Requires NVIDIA GPU (6GB+ VRAM minimum, 12GB+ recommended)
- Community primarily Chinese-language
- GitHub: `RVC-Boss/GPT-SoVITS`

---

## Phase 1: Maximise ElevenLabs Before Cancelling

**Duration:** 1-2 days | **Cost:** $0 (existing credits)

### 1a. Download original voice samples

The ~1 hour of original recordings uploaded to ElevenLabs is the most valuable asset — clean, real voice, no synthesis artefacts. Download from the ElevenLabs voice cloning dashboard before cancelling.

### Training data already collected

- **Original recordings:** 65 minutes across 20 files in `voice-training/original-recordings/`
- **Generated Bobski turns:** 3+ hours already in `podcast-audio/*/turns/turn-*-bobski.mp3` (no need to copy — reference in place)

### 1b. Keep remaining credits as safety net

244k credits available if zero-shot testing (Phase 2) doesn't meet quality bar, or to generate new episode content before cancelling.

---

## Phase 2: Test Zero-Shot Voice Cloning on Mac

**Duration:** 1-2 days | **Cost:** $0 (local)

### 2a. Install mlx-audio

```bash
pip install mlx-audio
```

Unified Apple Silicon inference library supporting Chatterbox, Qwen3-TTS, and Kokoro natively.

### 2b. Test Chatterbox (MIT, best all-rounder)

- Feed 30-60 seconds of best original recording as reference
- Generate a sample paragraph from an existing podcast script
- Compare side-by-side with ElevenLabs version
- Test emotion exaggeration parameter

### 2c. Test Qwen3-TTS (Apache 2.0, strongest benchmarks)

- Same test with 30s reference audio
- Test voice design via natural language description
- Check "anime quality" caveat — may not suit Australian directness
- 0.6B model for speed, 1.7B for quality (needs 16GB+ unified memory)

### 2d. Test Kokoro for Rachel replacement

- Browse 54+ stock voices — Nicole, Heart, Bella are female presets
- Find one matching Rachel's professional, warm tone
- 82M parameters = instant inference on Apple Silicon

### 2e. Score each option

| Criteria | Weight | Chatterbox | Qwen3-TTS | ElevenLabs (baseline) |
|----------|--------|-----------|-----------|----------------------|
| Voice match to Bobski | 30% | | | 100% |
| Natural prosody | 25% | | | 100% |
| Pronunciation accuracy | 20% | | | 100% |
| Inference speed | 15% | | | 100% |
| Licence flexibility | 10% | MIT | Apache 2.0 | Proprietary |

**Decision gate:** If any zero-shot model scores 80%+ against ElevenLabs, skip Phase 3 and go straight to Phase 4.

---

## Phase 3: Fine-Tune (Only If Zero-Shot Falls Short)

**Duration:** 1 day | **Cost:** $5-10 one-off (cloud GPU)

### 3a. Prepare training data

```bash
# Convert Bobski turns to training format
for f in voice-training/bobski-turns/*.mp3; do
  ffmpeg -i "$f" -ac 1 -ar 22050 -sample_fmt s16 "${f%.mp3}.wav"
done

# Transcribe and align with WhisperX
whisperx voice-training/bobski-turns/*.wav \
  --model large-v3 \
  --align_model WAV2VEC2_ASR \
  --output_dir voice-training/aligned/
```

**Preprocessing pipeline:**
1. Format: WAV, mono, 22050 Hz, 16-bit PCM
2. Denoise: Facebook Demucs for neural source separation (if needed)
3. Segment: Split on silence into 5-15 second clips (pydub or GPT-SoVITS WebUI slicer)
4. Align: WhisperX for word-level timestamps and phoneme alignment
5. Filter: Remove clips with background noise, laughter, or unclear speech
6. Target: 1-3 hours of clean, aligned audio + transcripts

### 3b. Fine-tune on cloud GPU

| Provider | RTX 4090 (24GB) | A100 (80GB) | Notes |
|----------|-----------------|-------------|-------|
| **Vast.ai** | ~$0.30-0.50/hr | ~$0.67/hr | Cheapest, less polished UX |
| **RunPod** | ~$0.69/hr | ~$0.79-1.74/hr | Better UX, reliable |
| **Lambda** | ~$0.75/hr | ~$1.10/hr | Research-focused |

- Model: F5-TTS (best fine-tuning support) or GPT-SoVITS (lowest data requirement)
- Duration: 4-12 hours of GPU time
- Total cost: $3-10 one-time

### 3c. Export and run locally

- Download fine-tuned model weights to Mac
- Run inference via mlx-audio (F5-TTS) or local server
- Validate against ElevenLabs output with A/B listening test

---

## Phase 4: Build the Production Pipeline

**Duration:** 2-3 days | **Cost:** $0 (local)

### 4a. Local generation script

Create `podcast-scripts/generate-episode-local.sh` (or Python equivalent) replacing ElevenLabs API calls:

1. Parse turn-by-turn script (same markdown format as existing scripts)
2. Generate Bobski turns via chosen model (Chatterbox/Qwen3-TTS/F5-TTS)
3. Generate Rachel turns via Kokoro stock voice
4. Apply identical post-processing (room tone, reverb, EQ, loudnorm)
5. Assemble final episode

The ffmpeg post-processing pipeline stays identical — only the TTS source changes.

### 4b. Python inference wrapper

```python
from mlx_audio import generate_speech

def generate_turn(text: str, voice: str = "bobski", output_path: str = "turn.mp3"):
    if voice == "bobski":
        # Chatterbox/Qwen3-TTS with reference audio
        generate_speech(
            text,
            reference="voice-training/bobski-reference.wav",
            output=output_path
        )
    else:
        # Kokoro stock voice for Rachel
        generate_speech(
            text,
            voice_preset="nicole",  # or whichever preset wins testing
            output=output_path
        )
```

### 4c. Video production pipeline

NotebookLM-style podcast videos with OYM branding:

```
podcast-scripts/generate-video.py
├── Input: finished MP3 + script markdown
├── Step 1: Generate branded slide images (Pillow)
│   ├── Title card (OYM branding, episode number, project name)
│   ├── Topic slides (key points from script sections)
│   ├── Quote cards (pull quotes highlighted)
│   └── Outro card (subscribe CTA, site URL)
├── Step 2: Generate waveform overlay (optional)
├── Step 3: Composite slides + audio (FFmpeg)
│   ├── Crossfade transitions between slides
│   ├── Speaker indicator (Bobski/Rachel name + avatar)
│   └── Subtle animated waveform at bottom
└── Output: MP4 (1920x1080, YouTube-ready)
```

**Tech stack:** Python + Pillow for image generation, FFmpeg for video assembly. Remotion available later if animated elements are needed.

---

## Phase 5: Content & Distribution

### Podcast RSS feed

Continue drip-feeding 2 episodes/week to the RSS feed as planned. Generation method doesn't change distribution strategy.

### YouTube channel

Upload video versions of each episode. Same 2/week cadence synced with podcast releases.

### Build article

Write "How to Run Your Own AI Podcast Without Subscriptions" for the build collection:
- Document the full pipeline from script to published episode
- Compare open-source vs ElevenLabs quality (with audio samples)
- Include cost breakdown ($0/month vs $99/month)
- Cover voice cloning, post-processing, video generation
- Perfect sovereignty-stack content for OYM's thesis

---

## Timeline & Costs

| Phase | Duration | Cost |
|-------|----------|------|
| 1. Maximise ElevenLabs | 1-2 days | $0 (existing credits) |
| 2. Test zero-shot | 1-2 days | $0 (local Mac) |
| 3. Fine-tune (if needed) | 1 day | $5-10 (cloud GPU) |
| 4. Build pipeline | 2-3 days | $0 (local) |
| 5. Video + distribution | 1-2 days | $0 (local) |
| **Total** | **~1 week** | **$0-10 one-off** |

**Ongoing cost after cancelling ElevenLabs: $0/month.** Everything runs locally on Apple Silicon.

---

## Execution Checklist

- [ ] Download original voice samples from ElevenLabs dashboard
- [ ] Collect all Bobski turn files into `voice-training/bobski-turns/`
- [ ] Install mlx-audio (`pip install mlx-audio`)
- [ ] Test Chatterbox zero-shot with 30-60s Bobski reference
- [ ] Test Qwen3-TTS zero-shot with 30-60s Bobski reference
- [ ] Test Kokoro stock voices for Rachel replacement
- [ ] **Decision gate:** zero-shot good enough? → Skip fine-tuning
- [ ] If needed: prepare training data (WhisperX alignment, denoising)
- [ ] If needed: fine-tune on RunPod/Vast.ai ($5-10)
- [ ] Build `generate-episode-local.sh` replacing ElevenLabs API
- [ ] Build `generate-video.py` for YouTube-ready MP4s
- [ ] Generate test episode end-to-end, A/B test against ElevenLabs
- [ ] Cancel ElevenLabs subscription
- [ ] Write build article: "How to Run Your Own AI Podcast Without Subscriptions"

---

## Key Resources

| Resource | URL |
|----------|-----|
| Chatterbox | `github.com/resemble-ai/chatterbox` |
| Qwen3-TTS | `github.com/QwenLM/Qwen3-TTS` |
| F5-TTS | `github.com/SWivid/F5-TTS` |
| GPT-SoVITS | `github.com/RVC-Boss/GPT-SoVITS` |
| Kokoro | `huggingface.co/hexgrad/Kokoro-82M` |
| mlx-audio | `github.com/Blaizzy/mlx-audio` |
| WhisperX | `github.com/m-bain/whisperX` |
| Facebook Demucs | `github.com/facebookresearch/demucs` |
| Remotion (video) | `github.com/remotion-dev/remotion` |

---

*Created March 2026 — Own Your Mind sovereignty-first podcast infrastructure*
