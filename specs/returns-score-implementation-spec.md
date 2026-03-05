# Returns Score Implementation Spec

## Overview

Add Returns Score as a complementary metric to Freedom Score across the site.

**Core Concept:** Freedom AND Returns = Two independent scores measuring different things.

| Score | Measures | For Whom |
|-------|----------|----------|
| Freedom Score | Decentralization | Sovereignty seekers |
| Returns Score | Token value capture | Investors, participants |

---

## 1. Schema Updates

### File: `src/content.config.ts`

Add to the `projects` schema:

```typescript
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    // ... existing fields ...
    freedomScore: z.number().min(1).max(10),
    
    // ADD THESE NEW FIELDS:
    returnsScore: z.number().min(1).max(10).optional(),
    returnsScoreBreakdown: z.object({
      tokenUtility: z.number().min(0).max(20).optional(),
      valueAccrual: z.number().min(0).max(25).optional(),
      supplyDynamics: z.number().min(0).max(20).optional(),
      revenueSustainability: z.number().min(0).max(20).optional(),
      liquidityAccess: z.number().min(0).max(15).optional(),
    }).optional(),
  }),
});
```

---

## 2. Project Frontmatter Updates

Each project file in `src/content/projects/` needs these additions:

```yaml
---
# ... existing fields ...
freedomScore: 8

# NEW RETURNS SCORE FIELDS:
returnsScore: 6.2
returnsScoreBreakdown:
  tokenUtility: 18      # /20
  valueAccrual: 14      # /25
  supplyDynamics: 16    # /20
  revenueSustainability: 6  # /20
  liquidityAccess: 8    # /15
# Total: 62/100 = 6.2/10
---
```

---

## 3. Dashboard Updates

### Projects Table (`src/pages/projects/index.astro` or equivalent)

Add Returns Score column:

```html
<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>Category</th>
      <th>Freedom ▼</th>
      <th>Returns</th>  <!-- NEW -->
      <th>Status</th>
      <!-- ... -->
    </tr>
  </thead>
  <tbody>
    {projects.map(project => (
      <tr>
        <td>{project.title}</td>
        <td>{project.category}</td>
        <td>{project.freedomScore}/10</td>
        <td>{project.returnsScore?.toFixed(1) || 'N/A'}/10</td>  <!-- NEW -->
        <!-- ... -->
      </tr>
    ))}
  </tbody>
</table>
```

### Add Sorting

Allow sorting by either Freedom or Returns score.

---

## 4. Project Page Updates

### Add Returns Score Section

After the Freedom Score section, add:

```html
## Returns score: {returnsScore}/10

{Ticker} scores {returnsScoreRaw}/100 ({grade} grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token Utility ({tokenUtility}/20):** [Evidence from research]

**Value Accrual ({valueAccrual}/25):** [Evidence from research]

**Supply Dynamics ({supplyDynamics}/20):** [Evidence from research]

**Revenue Sustainability ({revenueSustainability}/20):** [Evidence from research]

**Liquidity & Access ({liquidityAccess}/15):** [Evidence from research]

### Path to improvement

[1-3 specific improvements that would increase the returns score]
```

---

## 5. Homepage Updates

### Top-Rated Projects Section

Update to show both scores:

```html
{topProjects.map(project => (
  <div class="project-card">
    <img src={project.logo} alt={project.title} />
    <h3>{project.title}</h3>
    <div class="scores">
      <span class="freedom">Freedom {project.freedomScore}/10</span>
      <span class="returns">Returns {project.returnsScore}/10</span>
    </div>
    <p>{project.verdict}</p>
  </div>
))}
```

---

## 6. New Resources Page

Create `src/content/resources/returns-score-methodology.md`:

Copy from `returns-score-methodology.md` in project root.

---

## 7. Quadrant Visualization (Optional Enhancement)

Add a 2x2 matrix visualization:

```
                HIGH RETURNS
                     │
       C             │           A
  (low freedom,      │    (high freedom,
   high returns)     │     high returns)
                     │
  LOW FREEDOM ───────┼────────── HIGH FREEDOM
                     │
       D             │           B
  (low freedom,      │    (high freedom,
   low returns)      │     low returns)
                     │
                LOW RETURNS
```

Place projects in quadrants based on:
- Freedom Score >= 6 = High Freedom
- Returns Score >= 6 = High Returns

---

## 8. Grade Bands

Convert raw score (0-100) to grade:

| Score Range | Grade |
|-------------|-------|
| 90-100 | A |
| 75-89 | B |
| 60-74 | C |
| 45-59 | D |
| 0-44 | F |

Display grade alongside score.

---

## 9. Data File

Agent Zero will provide `content/project-returns-scores.json` with scores for all 17 projects.

Use this to update each project's frontmatter.

---

## Implementation Order

1. Update schema in `src/content.config.ts`
2. Create `returns-score-methodology.md` in resources
3. Update dashboard to show Returns Score column
4. Update project pages with Returns Score sections
5. Update homepage to show both scores
6. Add project scores to frontmatter (from JSON file)
7. (Optional) Add quadrant visualization

---

## Files to Modify

- `src/content.config.ts` - Add schema fields
- `src/content/projects/*.md` - Add frontmatter
- `src/pages/projects/index.astro` (or equivalent) - Add column
- `src/pages/index.astro` (or equivalent) - Update homepage
- `src/content/resources/` - Add methodology page

---

*Spec created by Agent Zero - March 2026*
