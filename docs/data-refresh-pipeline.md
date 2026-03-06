# Data Refresh Pipeline

How project data stays fresh on OwnYourMind.

## Overview

| System | What it refreshes | Schedule | Trigger |
|--------|-------------------|----------|---------|
| Live market data | Price, market cap, FDV, 24h/7d change, sparklines | Every build | `npm run build` (30-min cache) |
| GitHub metrics | Stars, forks, contributors, commits, weekly commit activity | Weekly (Mon 08:00 UTC) | GitHub Actions or `npm run refresh:github` |
| Community metrics | Telegram members, Discord members | Weekly (Mon 08:00 UTC) | GitHub Actions or `npm run refresh:community` |
| Staleness checker | Flags stale/incomplete research records | Weekly (Mon 08:00 UTC) | GitHub Actions or `npm run check:staleness` |
| Returns consistency | Validates score breakdowns, grades, evidence | Manual | `npm run check:returns` |
| Historical backfill | 52 weeks of commit activity (one-time) | One-time | `npm run backfill:github` |

## How it works

### 1. Live Market Data (build-time)

**File:** `src/data/fetch-market-data.ts`

At build time, Astro calls the CoinGecko `/coins/markets` API for all projects with a `coingeckoId` in their frontmatter. Results are cached to `src/data/market-data.json` for 30 minutes. If CoinGecko returns an error, cached data is used as fallback.

Data displayed: price, market cap, FDV, 24h change, 7d sparkline.

No API key required. Free tier rate limits apply (~30 calls/minute).

### 2. GitHub Metrics Refresh (weekly)

**Script:** `scripts/refresh-github-metrics.ts`
**Command:** `npm run refresh:github`

For each project JSON in `src/data/projects/` with `meta.refresh_config.github_org` and `github_primary_repo`:

1. Fetches repo metadata (stars, forks, open issues, last push date)
2. Counts contributors via Link header pagination
3. Counts total commits via Link header pagination
4. Counts org repos via Link header pagination
5. Fetches 52-week commit activity via `/repos/{org}/{repo}/stats/commit_activity`

Updates:
- `technical.github_metrics.*` fields in the research JSON
- `community.github_contributors`
- Appends a `MetricsSnapshot` to `metrics_history[]`
- Logs changes to `meta.auto_refresh_log` (capped at 12 entries)

**Auth:** Uses `GITHUB_TOKEN` env var. Without it: 60 req/hr. With it: 5,000 req/hr. The GitHub Actions workflow uses the automatic `GITHUB_TOKEN` (1,000 req/hr for public repos).

**Rate limiting:** Aborts if remaining requests drop below 20.

### 3. Community Metrics Refresh (weekly)

**Script:** `scripts/refresh-community-metrics.ts`
**Command:** `npm run refresh:community`

For each project JSON with `meta.refresh_config.discord_server_id` or `telegram_username`:

- **Discord:** `GET https://discord.com/api/v9/invites/{id}?with_counts=true` — returns `approximate_member_count`. No auth needed for public invites.
- **Telegram:** Scrapes `https://t.me/{username}` and parses the member count from the `tgme_page_extra` div. Handles space-separated thousands and K/M suffixes. This is fragile — Telegram can change their markup.
- **X/Twitter:** Not automated. Requires OAuth 2.0 + paid API tier ($100/month). Updated manually during quarterly reviews.

Updates `community.discord_members` and `community.telegram_members`, appends a `MetricsSnapshot`, and logs changes.

### 4. Staleness Checker

**Script:** `scripts/flag-stale-records.ts`
**Command:** `npm run check:staleness`

Read-only. Inspects all research JSONs and flags:
- `meta.last_updated` older than 90 days (WARN) or 180 days (CRITICAL)
- Last GitHub refresh older than 35 days
- Usage metrics older than 90 days
- Prose fields with embedded numeric figures (can't be auto-refreshed)
- Missing security audits on non-draft projects
- Research gaps
- Active/pending security incidents

### 5. Historical Backfill (one-time)

**Script:** `scripts/backfill-github-history.ts`
**Command:** `npm run backfill:github`

One-time script to populate `metrics_history[]` with 52 weeks of commit activity data and current repo metrics. Run once on 2026-03-06 for all 29 projects with GitHub config.

Only needed again if new projects are added and you want historical data before the weekly refresh accumulates enough snapshots.

## GitHub Actions Workflow

**File:** `.github/workflows/monthly-refresh.yml` (name: "Weekly Research Data Refresh")

**Schedule:** Every Monday at 08:00 UTC (`0 8 * * 1`)

**Steps:**
1. Checkout repo
2. Install dependencies (`npm ci`)
3. Run `npm run refresh:github`
4. Run `npm run refresh:community`
5. Run `npm run check:staleness` (non-failing, summary only)
6. If any files changed, create a PR via `peter-evans/create-pull-request`

**PR branch:** `auto/weekly-metrics-refresh`
**Labels:** `data`, `automated`

**Required repo setting:** "Allow GitHub Actions to create and approve pull requests" must be enabled in Settings > Actions > General.

**Auth:** Uses the automatic `GITHUB_TOKEN` provided by GitHub Actions. No personal access token needed for public repos.

## Metrics History and Visualization

Each research JSON has a `metrics_history` array of `MetricsSnapshot` objects:

```typescript
interface MetricsSnapshot {
  date: string;                    // YYYY-MM-DD
  source: 'github-refresh' | 'community-refresh' | 'backfill' | 'manual-quarterly' | 'manual';
  stars?: number | null;
  forks?: number | null;
  open_issues?: number | null;
  contributors?: number | null;
  total_commits?: number | null;
  total_repos?: number | null;
  discord_members?: number | null;
  telegram_members?: number | null;
  x_followers?: number | null;
  weekly_commits?: number[] | null; // 52 weekly totals, oldest first
}
```

The `ActivityPanel` component (`src/components/ActivityPanel.astro`) reads this data and renders:
- **Area chart** of weekly commits (from the latest snapshot's `weekly_commits[]`)
- **Sparklines** on metric cards (from the trend across multiple snapshots)
- **Community metrics** with sparklines

As weekly refreshes accumulate, the sparklines will show trends over time.

## What's NOT automated

| Data | Why | Updated when |
|------|-----|--------------|
| X/Twitter followers | Paid API ($100/month) | Quarterly manual review |
| TVL (DeFiLlama) | No automated pipeline yet | Quarterly manual review |
| On-chain revenue | Project-specific data sources | Quarterly manual review |
| Usage metrics (DAU, txns) | Project-specific dashboards | Quarterly manual review |
| Freedom/Returns scores | Editorial judgement required | Quarterly manual review |
| Prose content | Human-written analysis | When material changes occur |

## Running locally

```bash
# GitHub refresh (set token for higher rate limits)
GITHUB_TOKEN=$(gh auth token) npm run refresh:github

# Community metrics
npm run refresh:community

# Historical backfill (one-time for new projects)
GITHUB_TOKEN=$(gh auth token) npm run backfill:github

# Dry run (any script)
DRY_RUN=true npm run refresh:github

# Staleness report
npm run check:staleness

# Returns consistency check
npm run check:returns
```

## Troubleshooting

**Workflow fails at "Create pull request"**
Enable "Allow GitHub Actions to create and approve pull requests" in repo Settings > Actions > General.

**Rate limit errors**
The scripts abort if remaining requests drop below 20. Use a personal access token for 5,000 req/hr: `GITHUB_TOKEN=ghp_xxx npm run refresh:github`

**Telegram parsing returns wrong numbers**
The scraper parses `tgme_page_extra` div content. If Telegram changes their markup, update the regex in `scripts/refresh-community-metrics.ts`.

**GitHub returns 202 for stats**
GitHub computes statistics lazily. The scripts retry once after 3 seconds. If stats are still unavailable, `weekly_commits` will be null. The next weekly run usually succeeds.

**Some projects skipped**
Projects without `github_org`/`github_primary_repo` in their `refresh_config` are skipped by the GitHub scripts. Projects without `discord_server_id`/`telegram_username` are skipped by the community script. Add these identifiers to the research JSON to include them.
