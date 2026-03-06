#!/usr/bin/env tsx
// ============================================
// Backfill GitHub History
//
// Fetches historical commit activity (52 weeks) for all
// projects and populates metrics_history[] with a single
// backfill snapshot including current repo metrics.
//
// Usage:
//   npm run backfill:github
//   DRY_RUN=true npm run backfill:github
//
// Environment:
//   GITHUB_TOKEN  -- optional (60 req/hr without, 5,000/hr with)
//   DRY_RUN=true  -- print changes without writing
// ============================================

import fs from 'node:fs';
import path from 'node:path';

const PROJECTS_DIR = path.join(process.cwd(), 'src/data/projects');
const DRY_RUN = process.env.DRY_RUN === 'true';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const RATE_LIMIT_FLOOR = 20;

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'OwnYourMind-Research-Bot',
  'X-GitHub-Api-Version': '2022-11-28',
};

if (GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
}

async function githubFetch(url: string): Promise<Response> {
  const res = await fetch(url, { headers });

  const remaining = res.headers.get('X-RateLimit-Remaining');
  if (remaining !== null && parseInt(remaining, 10) < RATE_LIMIT_FLOOR) {
    const resetAt = res.headers.get('X-RateLimit-Reset');
    const resetDate = resetAt ? new Date(parseInt(resetAt, 10) * 1000).toISOString() : 'unknown';
    throw new Error(`GitHub API rate limit low (${remaining} remaining). Resets at ${resetDate}. Aborting.`);
  }

  return res;
}

function parseLastPage(linkHeader: string | null): number | null {
  if (!linkHeader) return null;
  const match = linkHeader.match(/&page=(\d+)>;\s*rel="last"/);
  if (!match) return null;
  return parseInt(match[1], 10);
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

async function fetchWeeklyCommits(org: string, repo: string): Promise<number[] | null> {
  // GitHub stats/commit_activity returns 52 weeks of data
  // Each entry: { days: number[], total: number, week: number (unix timestamp) }
  // Sorted oldest to newest by default
  const res = await githubFetch(`https://api.github.com/repos/${org}/${repo}/stats/commit_activity`);

  if (res.status === 202) {
    // GitHub is computing stats — wait and retry once
    console.log('    Stats being computed, waiting 3s and retrying...');
    await new Promise((r) => setTimeout(r, 3000));
    const retry = await githubFetch(`https://api.github.com/repos/${org}/${repo}/stats/commit_activity`);
    if (!retry.ok) return null;
    const data = await retry.json();
    if (!Array.isArray(data)) return null;
    return data.map((w: { total: number }) => w.total);
  }

  if (!res.ok) return null;
  const data = await res.json();
  if (!Array.isArray(data)) return null;
  return data.map((w: { total: number }) => w.total);
}

async function fetchRepoMetrics(org: string, repo: string) {
  // Repo metadata
  const repoRes = await githubFetch(`https://api.github.com/repos/${org}/${repo}`);
  if (!repoRes.ok) {
    throw new Error(`Failed to fetch repo ${org}/${repo}: ${repoRes.status} ${repoRes.statusText}`);
  }
  const repoData = await repoRes.json();

  // Contributor count via Link header
  const contribRes = await githubFetch(
    `https://api.github.com/repos/${org}/${repo}/contributors?per_page=1&anon=false`
  );
  let contributors = 0;
  if (contribRes.ok) {
    const lastPage = parseLastPage(contribRes.headers.get('Link'));
    contributors = lastPage ?? 1;
  }

  // Commit count via Link header
  const commitsRes = await githubFetch(
    `https://api.github.com/repos/${org}/${repo}/commits?per_page=1`
  );
  let totalCommits = 0;
  if (commitsRes.ok) {
    const lastPage = parseLastPage(commitsRes.headers.get('Link'));
    totalCommits = lastPage ?? 1;
  }

  // Org repo count
  const orgRes = await githubFetch(`https://api.github.com/orgs/${org}/repos?per_page=1`);
  let totalRepos = 0;
  if (orgRes.ok) {
    const lastPage = parseLastPage(orgRes.headers.get('Link'));
    totalRepos = lastPage ?? 1;
  }

  return {
    stars: repoData.stargazers_count ?? 0,
    forks: repoData.forks_count ?? 0,
    open_issues: repoData.open_issues_count ?? 0,
    contributors,
    total_commits: totalCommits,
    total_repos: totalRepos,
  };
}

async function main() {
  console.log(`GitHub History Backfill${DRY_RUN ? ' (DRY RUN)' : ''}`);
  console.log(`Token: ${GITHUB_TOKEN ? 'provided' : 'not set (60 req/hr limit)'}`);
  console.log('---');

  const files = fs.readdirSync(PROJECTS_DIR).filter(
    (f) => f.endsWith('.json') && !f.startsWith('_')
  );

  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(PROJECTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    let data: Record<string, any>;

    try {
      data = JSON.parse(raw);
    } catch {
      console.log(`  SKIP ${file}: invalid JSON`);
      skipped++;
      continue;
    }

    const config = data.meta?.refresh_config;
    if (!config?.github_org || !config?.github_primary_repo) {
      console.log(`  SKIP ${file}: no github_org/github_primary_repo in refresh_config`);
      skipped++;
      continue;
    }

    const org = config.github_org;
    const repo = config.github_primary_repo;
    console.log(`\n  ${file}: fetching ${org}/${repo}...`);

    try {
      // Fetch weekly commit activity
      const weeklyCommits = await fetchWeeklyCommits(org, repo);
      if (weeklyCommits) {
        const total = weeklyCommits.reduce((a, b) => a + b, 0);
        console.log(`    Weekly commits: ${weeklyCommits.length} weeks, ${total} total commits in past year`);
      } else {
        console.log('    Weekly commits: unavailable');
      }

      // Fetch current repo metrics
      const metrics = await fetchRepoMetrics(org, repo);
      console.log(`    Stars: ${metrics.stars}, Forks: ${metrics.forks}, Contributors: ${metrics.contributors}`);

      // Build backfill snapshot
      const snapshot: Record<string, unknown> = {
        date: today(),
        source: 'backfill',
        stars: metrics.stars,
        forks: metrics.forks,
        open_issues: metrics.open_issues,
        contributors: metrics.contributors,
        total_commits: metrics.total_commits,
        total_repos: metrics.total_repos,
        discord_members: data.community?.discord_members ?? null,
        telegram_members: data.community?.telegram_members ?? null,
        x_followers: data.community?.x_followers ?? null,
        weekly_commits: weeklyCommits ?? null,
      };

      if (DRY_RUN) {
        console.log(`    Would write backfill snapshot to metrics_history`);
        processed++;
        continue;
      }

      // Write snapshot
      if (!data.metrics_history) data.metrics_history = [];
      data.metrics_history.push(snapshot);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
      console.log(`    Backfill snapshot written`);
      processed++;
    } catch (err) {
      console.error(`  ERROR ${file}: ${(err as Error).message}`);
      skipped++;
    }
  }

  console.log(`\n---\n${processed} file(s) ${DRY_RUN ? 'would be ' : ''}backfilled, ${skipped} skipped.`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
