# Article Research & Drafting Process

**Purpose:** Document the methodology for researching and drafting Why DeAI thesis articles, with continuous improvement notes.

**Last Updated:** 2026-03-05

---

## Article Types

| Type | Description | Target Length | Source Count |
|------|-------------|---------------|--------------|
| **Thesis Essay** | Foundational arguments for why DeAI matters | 3,000-5,000 words | 15-25 sources |
| **Comparison** | Side-by-side analysis of projects/concepts | 2,000-3,000 words | 10-20 sources |
| **Framework** | Conceptual model with practical application | 2,500-4,000 words | 10-15 sources |

---

## Phase 1: Pre-Research Setup

### 1.1 Review Editorial Plan
- [ ] Extract existing research notes from `editorial-plan.md`
- [ ] Identify key beats defined for the article
- [ ] Note any specific sources mentioned
- [ ] Identify research gaps

### 1.2 Review Existing Content
- [ ] Cross-reference with published Why DeAI articles for consistency
- [ ] Cross-reference with project reviews for real examples
- [ ] Check for claims that need updating

### 1.3 Define Research Questions
- [ ] Write 3-5 specific questions the article must answer
- [ ] Identify what evidence is needed for each claim
- [ ] Determine what data would make the argument stronger

---

## Phase 2: Primary Research

### 2.1 Source Hierarchy

| Tier | Type | Examples | Use For |
|------|------|----------|---------|
| **1** | Primary sources | Official docs, whitepapers, GitHub, on-chain data, smart contracts | Core factual claims, technical details |
| **2** | Authoritative third-party | Messari, Delphi Digital, DeFiLlama, CoinGecko, audit reports, academic papers | Verification, metrics, benchmarks |
| **3** | Informed commentary | 0xJeff, reputable analysts, founder interviews, community forums | Context, sentiment, nuanced views |
| **4** | Avoid | Paid promotions, anon forums, price predictions, content farms | — |

### 2.2 Research Execution

**Search Protocol:**
1. Official sources first (project docs, whitepapers, GitHub repos)
2. Data aggregators second (CoinGecko, DeFiLlama, Messari)
3. Analyst content third (newsletters, research reports, threads)
4. Cross-verify all significant claims across 2+ sources

**Data Points to Capture:**
- Specific metrics with dates (e.g., "758k daily AI agent executions, March 2026")
- Pricing comparisons (e.g., "Venice private inference: $0.002/1K tokens vs OpenAI: $0.002/1K tokens")
- Technical specifications (e.g., "FHE overhead: 100-1000x compute")
- Adoption signals (users, transactions, revenue)
- Competitive positioning

### 2.3 Practitioner Perspective

**Ground every theoretical claim in operational reality:**
- What does this actually cost to run?
- What breaks in practice?
- What's the real user experience?
- What are the hidden gotchas?

**Sources for practitioner data:**
- Personal experience (if applicable)
- Node operator guides and forums
- Cost calculators and benchmarks
- GitHub issues and Discord support channels

---

## Phase 3: Structuring

### 3.1 Outline Template

```
## [Title]

[Hook - why this matters, 1-2 paragraphs]

### Section 1: The Problem
- What's wrong with current state
- Why it matters
- Evidence and examples

### Section 2: The Argument
- Core thesis
- Supporting evidence
- Counterevidence (honest)

### Section 3: The Framework/Implications
- Practical framework or model
- How to apply
- What changes as a result

### Section 4: Takeaways
- Key points summary
- Actionable next steps
- Open questions
```

### 3.2 Key Beats Checklist

For each article, ensure these are addressed:
- [ ] Clear problem statement
- [ ] Evidence from multiple sources
- [ ] Honest assessment of limitations/gaps
- [ ] Practical framework or actionable insight
- [ ] Connection to broader DeAI thesis
- [ ] At least one memorable quotable line

---

## Phase 4: Drafting

### 4.1 Voice Guidelines

**Do:**
- Write from experience, not speculation
- Use concrete examples over abstractions
- Acknowledge weaknesses honestly
- Cite sources inline with links
- Technical but accessible
- Short paragraphs, clear subheadings

**Don't:**
- Marketing speak or hype language
- Unsupported claims
- Generic advice
- Hedge excessively ("might", "could", "possibly")
- Use emoji in headings

### 4.2 Citation Format

```markdown
[Link text](URL) for inline citations

For data: "758,000 daily AI agent executions" (Phala, March 2026)
```

### 4.3 Component Usage

Available MDX components:
- `<PullQuote>` - Highlight key quotes
- `<DeaiSpectrum />` - DeAI classification visualization

---

## Phase 5: Quality Review

### 5.1 Self-Review Checklist

- [ ] Every significant claim has a source
- [ ] Sources are Tier 1 or Tier 2 where possible
- [ ] No contradictions with published project reviews
- [ ] Voice matches site tone (practitioner-led, honest, no hype)
- [ ] Technical accuracy verified
- [ ] At least one "pull quote" worthy line
- [ ] Word count in target range
- [ ] Spell-check complete
- [ ] Links all working

### 5.2 Frontmatter Verification

```yaml
---
title: "Article Title"
description: "Compelling one-line description for SEO and previews"
publishDate: 2026-03-05
draft: false
---
```

---

## Phase 6: Post-Publication

### 6.1 Update Protocol

- Update `updatedDate` when making material changes
- Note changes in commit message
- Schedule quarterly review for data-heavy articles

### 6.2 Feedback Integration

- Track reader feedback for improvement opportunities
- Note any factual corrections needed
- Update this process document with learnings

---

## Improvement Log

### 2026-03-05: Initial Process
- Created baseline process document
- Established source tier hierarchy
- Defined research protocol for thesis articles
