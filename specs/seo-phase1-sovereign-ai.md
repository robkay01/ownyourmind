# SEO Phase 1, Task 1: Sovereign AI Page Expansion

## Target
`/why-deai/the-case-for-sovereign-ai/` (file: `src/content/why-deai/the-case-for-sovereign-ai.mdx`)

## Why
"Sovereign AI" has 5,000 monthly searches with Low competition and $3-$11 CPC (highest commercial intent in our keyword set). "What is sovereign AI" adds another 500. This is our #1 SEO opportunity. The current page is only 937 words — far too thin for a 5,000-search query that Google takes seriously.

## Current state
- **Title:** "Sovereign AI: What It Is and Why It Matters" (good, keep)
- **Description:** "What is sovereign AI? A first-principles look at why decentralised AI matters, how the sovereignty stack works, and why the window to build it is closing." (good, keep)
- **H2s:** The problem → What decentralised AI actually means → Why this is also a financial opportunity → The sovereignty stack → Why now
- **Word count:** 937 words
- **Tone:** Strong editorial voice, practitioner lens, concise

## What A0 needs to produce

Expand the page to ~2,000-2,500 words by adding new sections. Do NOT rewrite existing sections — add new ones that slot in naturally.

### Required new sections

1. **"What is sovereign AI?" definition box** (insert before "The problem")
   - Clear, quotable definition (2-3 sentences) that Google can pull as a featured snippet
   - Format as a callout/blockquote
   - Must include the phrase "sovereign AI" and "what is sovereign AI" naturally
   - ~100 words

2. **"Sovereign AI vs centralised AI"** (insert after "What decentralised AI actually means")
   - Practical comparison table: what you control, what you don't
   - Not ideological — concrete differences (data ownership, model access, censorship, cost, uptime)
   - Reference real examples (OpenAI API revocations, Google Gemini content filters, Claude usage policies)
   - ~300-400 words

3. **"Who needs sovereign AI?"** (insert after the comparison)
   - Audience segments: developers, businesses, researchers, privacy-conscious individuals, jurisdictions
   - Each with a 1-2 sentence practical use case
   - Construction PM angle: "If you're building a product on someone else's API, you have a single-supplier risk"
   - ~200-300 words

4. **"The cost of sovereignty"** (insert before "Why now")
   - Honest about the tradeoffs: harder to set up, less polished, models smaller than frontier
   - But: costs are dropping, open models are catching up, inference hardware is consumer-grade now
   - Reference Mac Studio setup, Venice.ai pricing, Akash vs AWS costs
   - ~200-300 words

5. **FAQ section** (append at end, before the closing line)
   - 4-5 questions in Q&A format that Google can use for rich snippets
   - Questions must include target keywords naturally:
     - "What is sovereign AI?"
     - "Is sovereign AI the same as decentralised AI?"
     - "Can I run sovereign AI at home?"
     - "What are the best sovereign AI projects?"
     - "How much does sovereign AI cost?"
   - Answers: 2-3 sentences each, factual, link to relevant site pages where appropriate
   - ~300-400 words

### Total new content: ~1,100-1,500 words (bringing page to ~2,000-2,400 total)

## Constraints

- UK English
- Do NOT change existing content
- Do NOT change scores (this page has no scores)
- Write in Rob's voice (see `rob-profile.md`): practitioner, direct, no marketing speak
- Every claim must be verifiable or clearly flagged as opinion
- Link to existing OYM pages where relevant (project reviews, sovereignty stack article, etc.)
- Use `<PullQuote>` component for any standout quotes (already imported in the file)
- The file is .mdx — Astro MDX format with component imports

## Output format

Provide the new sections as markdown blocks with clear insertion points marked:
```
<!-- INSERT BEFORE: ## The problem -->
[new content]

<!-- INSERT AFTER: ## What decentralised AI actually means -->
[new content]
```

This allows Claude Code to slot them into the existing file without full rewrite.
