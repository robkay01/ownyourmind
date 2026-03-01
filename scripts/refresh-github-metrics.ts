#!/usr/bin/env tsx
// ============================================
// Monthly GitHub Metrics Refresh
//
// Reads all project research JSONs, fetches current
// GitHub metrics via the API, and updates the files.
//
// Usage:
//   npm run refresh:github
//   DRY_RUN=true npm run refresh:github
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
const MAX_LOG_ENTRIES = 12;

interface GitHubUpdate {
  stars: number;
  forks: number;
  open_issues: number;
  last_commit_date: string;
  contributors: number;
  total_commits: number;
  total_repos: number;
}

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

async function fetchGitHubMetrics(org: string, repo: string): Promise<GitHubUpdate> {
  // 1. Repo metadata: stars, forks, open_issues, pushed_at
  const repoRes = await githubFetch(`https://api.github.com/repos/${org}/${repo}`);
  if (!repoRes.ok) {
    throw new Error(`Failed to fetch repo ${org}/${repo}: ${repoRes.status} ${repoRes.statusText}`);
  }
  const repoData = await repoRes.json();

  // 2. Contributor count via Link header
  const contribRes = await githubFetch(
    `https://api.github.com/repos/${org}/${repo}/contributors?per_page=1&anon=false`
  );
  let contributors = 0;
  if (contribRes.ok) {
    const lastPage = parseLastPage(contribRes.headers.get('Link'));
    contributors = lastPage ?? 1;
  }

  // 3. Commit count via Link header
  const commitsRes = await githubFetch(
    `https://api.github.com/repos/${org}/${repo}/commits?per_page=1`
  );
  let totalCommits = 0;
  if (commitsRes.ok) {
    const lastPage = parseLastPage(commitsRes.headers.get('Link'));
    totalCommits = lastPage ?? 1;
  }

  // 4. Org repo count
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
    last_commit_date: repoData.pushed_at ? repoData.pushed_at.split('T')[0] : '',
    contributors,
    total_commits: totalCommits,
    total_repos: totalRepos,
  };
}

function today(): string {
  return new Date().toISOString().split('T')[0];
}

function buildSnapshot(metrics: GitHubUpdate, data: Record<string, any>): Record<string, unknown> {
  return {
    date: today(),
    source: 'github-refresh',
    stars: metrics.stars,
    forks: metrics.forks,
    open_issues: metrics.open_issues,
    contributors: metrics.contributors,
    total_commits: metrics.total_commits,
    total_repos: metrics.total_repos,
    discord_members: data.community?.discord_members ?? null,
    telegram_members: data.community?.telegram_members ?? null,
    x_followers: data.community?.x_followers ?? null,
  };
}

async function main() {
  console.log(`GitHub Metrics Refresh${DRY_RUN ? ' (DRY RUN)' : ''}`);
  console.log(`Token: ${GITHUB_TOKEN ? 'provided' : 'not set (60 req/hr limit)'}`);
  console.log('---');

  const files = fs.readdirSync(PROJECTS_DIR).filter(
    (f) => f.endsWith('.json') && !f.startsWith('_')
  );

  let updated = 0;

  for (const file of files) {
    const filePath = path.join(PROJECTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    let data: Record<string, any>;

    try {
      data = JSON.parse(raw);
    } catch {
      console.log(`  SKIP ${file}: invalid JSON`);
      continue;
    }

    const config = data.meta?.refresh_config;
    if (!config?.github_org || !config?.github_primary_repo) {
      console.log(`  SKIP ${file}: no github_org/github_primary_repo in refresh_config`);
      continue;
    }

    const org = config.github_org;
    const repo = config.github_primary_repo;
    console.log(`\n  ${file}: fetching ${org}/${repo}...`);

    let metrics: GitHubUpdate;
    try {
      metrics = await fetchGitHubMetrics(org, repo);
    } catch (err) {
      console.error(`  ERROR ${file}: ${(err as Error).message}`);
      continue;
    }

    // Build diff of changed fields
    const ghm = data.technical?.github_metrics ?? {};
    const previousValues: Record<string, unknown> = {};
    const newValues: Record<string, unknown> = {};
    const fieldsUpdated: string[] = [];

    const fieldMap: [string, string, unknown][] = [
      ['technical.github_metrics.stars', 'stars', metrics.stars],
      ['technical.github_metrics.forks', 'forks', metrics.forks],
      ['technical.github_metrics.open_issues', 'open_issues', metrics.open_issues],
      ['technical.github_metrics.last_commit_date', 'last_commit_date', metrics.last_commit_date],
      ['technical.github_metrics.contributors', 'contributors', metrics.contributors],
      ['technical.github_metrics.total_commits', 'total_commits', metrics.total_commits],
      ['technical.github_metrics.total_repos', 'total_repos', metrics.total_repos],
    ];

    for (const [dotPath, key, newVal] of fieldMap) {
      const oldVal = ghm[key] ?? null;
      if (oldVal !== newVal) {
        fieldsUpdated.push(dotPath);
        previousValues[dotPath] = oldVal;
        newValues[dotPath] = newVal;
      }
    }

    // Sync community.github_contributors
    const oldCommunityContrib = data.community?.github_contributors ?? null;
    if (oldCommunityContrib !== metrics.contributors) {
      fieldsUpdated.push('community.github_contributors');
      previousValues['community.github_contributors'] = oldCommunityContrib;
      newValues['community.github_contributors'] = metrics.contributors;
    }

    if (fieldsUpdated.length === 0) {
      console.log(`  ${file}: no changes`);
      if (!DRY_RUN) {
        if (!data.metrics_history) data.metrics_history = [];
        data.metrics_history.push(buildSnapshot(metrics, data));
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
        console.log(`  ${file}: snapshot appended`);
      }
      continue;
    }

    console.log(`  ${file}: ${fieldsUpdated.length} field(s) changed:`);
    for (const f of fieldsUpdated) {
      console.log(`    ${f}: ${JSON.stringify(previousValues[f])} → ${JSON.stringify(newValues[f])}`);
    }

    if (DRY_RUN) {
      updated++;
      continue;
    }

    // Apply updates
    if (!data.technical) data.technical = {};
    if (!data.technical.github_metrics) data.technical.github_metrics = {};
    data.technical.github_metrics.stars = metrics.stars;
    data.technical.github_metrics.forks = metrics.forks;
    data.technical.github_metrics.open_issues = metrics.open_issues;
    data.technical.github_metrics.last_commit_date = metrics.last_commit_date;
    data.technical.github_metrics.contributors = metrics.contributors;
    data.technical.github_metrics.total_commits = metrics.total_commits;
    data.technical.github_metrics.total_repos = metrics.total_repos;

    if (!data.community) data.community = {};
    data.community.github_contributors = metrics.contributors;

    // Append metrics snapshot
    if (!data.metrics_history) data.metrics_history = [];
    data.metrics_history.push(buildSnapshot(metrics, data));

    // Increment version and update date
    data.meta.version = (data.meta.version ?? 0) + 1;
    data.meta.last_updated = today();

    // Append to auto_refresh_log (capped at MAX_LOG_ENTRIES)
    if (!data.meta.auto_refresh_log) data.meta.auto_refresh_log = [];
    data.meta.auto_refresh_log.push({
      run_date: today(),
      fields_updated: fieldsUpdated,
      previous_values: previousValues,
      new_values: newValues,
      run_by: 'github-actions',
    });
    if (data.meta.auto_refresh_log.length > MAX_LOG_ENTRIES) {
      data.meta.auto_refresh_log = data.meta.auto_refresh_log.slice(-MAX_LOG_ENTRIES);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`  ${file}: written`);
    updated++;
  }

  console.log(`\n---\n${updated} file(s) ${DRY_RUN ? 'would be ' : ''}updated.`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
