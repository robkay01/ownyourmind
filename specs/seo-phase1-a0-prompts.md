# Agent Zero Prompts — SEO Phase 1

Copy-paste these prompts into the Agent Zero UI to kick off each task. Each prompt references a spec file that A0 should read for full context.

---

## Task 1: Sovereign AI Page Expansion

```
Read the spec file at /specs/seo-phase1-sovereign-ai.md and the existing page at /src/content/why-deai/the-case-for-sovereign-ai.mdx.

Also read /rob-profile.md for writing voice guidance.

Your task: expand the Sovereign AI page from 937 words to ~2,000-2,400 words by adding 5 new sections that target "sovereign ai" (5,000 monthly searches) and "what is sovereign ai" (500 monthly searches).

The spec has full details on each section needed:
1. "What is sovereign AI?" definition box (featured snippet target)
2. "Sovereign AI vs centralised AI" comparison
3. "Who needs sovereign AI?" audience segments
4. "The cost of sovereignty" honest tradeoffs
5. FAQ section (5 questions for rich snippets)

Do NOT rewrite existing content. Write new sections that slot in between existing H2s. Use Rob's practitioner voice — UK English, direct, no marketing speak. Every claim must be verifiable.

Output each section as a markdown block with clear insertion point markers (<!-- INSERT BEFORE/AFTER: ## heading name -->).
```

---

## Task 2: Venice AI Review Optimisation

```
Read the spec file at /specs/seo-phase1-venice.md and the existing page at /src/content/projects/venice.md.

Also read /rob-profile.md for writing voice guidance.

Your task: optimise the Venice AI review to target "venice ai review" (5,000 monthly searches), "venice ai uncensored" (500 searches), and "venice ai private ai" (50 searches).

The spec has full details. Key deliverables:
1. Title change: "Venice AI" → "Venice AI Review"
2. New section: "Why Venice AI is uncensored — and what that actually means" (~400-500 words)
3. New section: "Private AI inference: what Venice actually protects" (~300-400 words)
4. Enrichment to "How to participate" with tutorial subsection (~200 words)

Research Venice's current offerings: pricing tiers, available models, ZK proof mechanism, API access. Reference the recent DIEM mechanics correctly: stake VVV → lock sVVV → mint DIEM → stake DIEM for inference.

Do NOT rewrite existing content or change scores (Freedom 57/100, Returns 64/100). Write in Rob's voice — he uses Venice daily. UK English, practitioner perspective, balanced (not marketing copy for Venice).

Output each section as a markdown block with clear insertion point markers.
```

---

## Task 3: peaq Review Optimisation

```
Read the spec file at /specs/seo-phase1-peaq.md and the existing page at /src/content/projects/peaq.md.

Also read /rob-profile.md for writing voice guidance.

Your task: optimise the peaq review to target "peaq review" (5,000 monthly searches). peaq is always lowercase.

The spec has full details. Key deliverables:
1. Title change: "peaq" → "peaq Review"
2. New section: "peaq's DePIN positioning: why 60+ projects chose this chain" (~400-500 words)
3. New section: "How peaq compares to other DePIN infrastructure" (~300-400 words)
4. Score heading fix: H3 → H2 for Freedom and Returns scores

Research peaq's current state: verify the 60+ DePINs claim, check which enterprise partnerships are production vs PoC, confirm the machine identity (peaq IDs), payment (peaq Pay), and governance (peaq Control) features. Compare with IoTeX and Solana DePIN ecosystem.

The honest angle: $163K annualised revenue on a chain with Bosch, Airbus, and NTT partnerships is a pipeline problem, not a technology problem. Be balanced.

Do NOT change scores (Freedom 50/100, Returns 47/100). UK English, Rob's construction PM voice.

Output each section as a markdown block with clear insertion point markers.
```

---

## Task 4: Flux Review Optimisation

```
Read the spec file at /specs/seo-phase1-flux.md and the existing page at /src/content/projects/flux.md.

Also read /rob-profile.md for writing voice guidance.

Your task: optimise the Flux review to target "flux review" (500 monthly searches) and "flux gpu mining" (50 monthly searches).

The spec has full details. Key deliverables:
1. Title change: "Flux" → "Flux Review"
2. New section: "Flux GPU mining: how it works and what you can earn" (~500-600 words)
3. Enrichment to "How to participate" (~200 words)
4. Score heading fix: H3 → H2 for Freedom and Returns scores

Research Flux's current mining economics: verify FluxNode tiers (Cumulus/Nimbus/Stratus) and collateral requirements, check current block reward split, approximate daily earnings per tier at current FLUX price. Check GPU requirements and parallel mining capability.

Flux's fair launch (no premine, no ICO, no VC) is a key differentiator — the GPU mining section should reinforce this. Be honest about profitability: "Before you buy a GPU rig, work the numbers backwards from current FLUX price and your electricity rate."

Do NOT change scores (Freedom 80/100, Returns 57/100). UK English, Rob's practitioner voice.

Output each section as a markdown block with clear insertion point markers.
```

---

## Task 5: Morpheus Review Expansion

```
Read the spec file at /specs/seo-phase1-morpheus.md and the existing page at /src/content/projects/morpheus.md.

Also read /rob-profile.md for writing voice guidance.

Your task: expand the Morpheus review to target "morpheus review" (500 monthly searches) and "how does morpheus work" (50 monthly searches).

The spec has full details. Key deliverables:
1. Title change: "Morpheus" → "Morpheus Review"
2. New section: "How Morpheus works: the four-provider model" (~400-500 words)
3. New section: "Staking MOR: step-by-step guide" (~300-400 words)

Research Morpheus' current state: verify the four provider types and emission splits, check current Power Factor mechanics and multipliers, confirm staking contract is on Arbitrum, get approximate MOR earnings per stETH. Rob is an actual Morpheus capital provider — write from that perspective.

Cross-link to the existing tokenomics article at /tokenomics/how-mor-actually-works/ where appropriate. Don't duplicate the Power Factor deep-dive — reference it.

Do NOT change scores (Freedom 76/100, Returns 57/100). UK English, Rob's practitioner voice — he has actual staking experience with Morpheus.

Output each section as a markdown block with clear insertion point markers.
```

---

## After A0 completes each task

1. Review the output for voice consistency and factual accuracy
2. Hand to Claude Code for implementation (slotting sections into existing files)
3. Claude Code will also handle:
   - FAQ schema markup (structured data) for sovereign AI and "what is deai" pages
   - Minor H1/title tweaks: Golem (already "Golem Network" ✓), Render (already "Render Network" ✓), Grass (add tokenomics section)
   - H2/H3 score heading consistency fixes
4. Run `npm run check:returns` before committing
5. Build and deploy
