# SEO Phase 1, Task 2: Venice AI Review Optimisation

## Target
`/projects/venice/` (file: `src/content/projects/venice.md`)

## Why
- "venice ai review" — 5,000 monthly searches, Low competition
- "venice ai uncensored" — 500 monthly searches, Low competition
- "venice ai private ai" — 50 monthly searches, Low competition

Combined: 5,550 searches/month. The page exists and already ranks but doesn't target these queries explicitly.

## Current state
- **Title:** "Venice AI" — missing "Review" keyword
- **Description:** "Venice AI review — private, uncensored AI inference with no logs and no content filtering. Freedom Score, Returns Score, tokenomics breakdown and honest assessment." (already strong, mentions "uncensored" and "private")
- **H2s:** What it does → Value proposition → Tokenomics → How to participate → Honest assessment → Freedom score: 57/100 → Returns score: 64/100
- **Word count:** ~2,721 words
- **Scores:** Freedom 57/100 (C), Returns 64/100 (C)
- **Key topics already covered:** VVV/DIEM staking mechanics, private inference, zero-knowledge proofs, tokenomics breakdown

## What A0 needs to produce

### 1. Title update
Change from "Venice AI" to "Venice AI Review"

### 2. New H2 section: "Why Venice AI is uncensored — and what that actually means" (~400-500 words)
Insert after "## What it does"

Cover:
- What "uncensored" means in practice: no content filters on user prompts, no refusal to discuss topics
- How this differs from OpenAI/Anthropic/Google content policies (specific examples of things those APIs refuse that Venice handles)
- The technical mechanism: open-weight models (DeepSeek, Llama) served through Venice's GPU fleet
- Honest caveat: "uncensored" still has legal limits (CSAM, direct violence instructions). Venice blocks illegal content — it just doesn't impose corporate content policies.
- Why this matters for researchers, developers, and creatives who need unfiltered model access
- Reference Rob's experience: "I've had Claude refuse to help with completely legitimate research questions about security vulnerabilities..."

### 3. New H2 section: "Private AI inference: what Venice actually protects" (~300-400 words)
Insert after the uncensored section

Cover:
- Zero-knowledge proof of inference (what it means technically, in plain English)
- No logging of prompts or responses — verified, not just claimed
- Comparison with centralised alternatives: OpenAI logs everything, Anthropic trains on conversations (opt-out available), Google feeds data into advertising pipeline
- VPN-style privacy for AI: your employer, ISP, or government cannot see what you're asking the model
- Who this matters for: journalists, lawyers, healthcare, anyone in regulated industries, anyone in jurisdictions with speech restrictions
- Link to Privacy Is the Killer App article (`/why-deai/privacy-is-the-killer-app/`)

### 4. Existing section enrichment: add to "## How to participate"
Add a brief tutorial subsection (~200 words) covering:
- How to access Venice (web app vs API)
- Pricing: free tier vs Pro ($9.99/month) vs API pricing
- What you get: which models are available (list top 3-4)
- Link forward to future Build tutorial when it exists

### Total new content: ~900-1,100 words

## Constraints

- UK English
- Do NOT change existing content or scores
- Do NOT rewrite existing sections — add new ones
- Write in Rob's voice: practitioner, direct, personal experience where relevant
- Scores are 57/100 Freedom, 64/100 Returns — do NOT suggest changes
- The uncensored/privacy sections should be factual and balanced, not marketing copy for Venice
- Reference recent DIEM mechanics correctly: stake VVV → lock sVVV → mint DIEM → stake DIEM for inference (not "stake VVV for inference")

## Output format

Provide new sections as markdown blocks with insertion points:
```
<!-- TITLE CHANGE -->
Old: "Venice AI"
New: "Venice AI Review"

<!-- INSERT AFTER: ## What it does [existing section content] -->
[new uncensored section]

<!-- INSERT AFTER: [uncensored section] -->
[new privacy section]

<!-- APPEND TO: ## How to participate -->
[tutorial subsection]
```
