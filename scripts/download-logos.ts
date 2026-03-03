#!/usr/bin/env tsx
// ============================================
// Download Project Logos from CoinGecko
//
// Reads project frontmatter to build slug → coingeckoId map,
// fetches logo URLs from CoinGecko /coins/markets API,
// and downloads each PNG to /public/images/logos/{slug}.png.
//
// Usage:
//   npm run download:logos
// ============================================

import fs from 'node:fs';
import path from 'node:path';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');
const LOGOS_DIR = path.join(process.cwd(), 'public/images/logos');

interface ProjectEntry {
  slug: string;
  coingeckoId: string;
}

function parseProjects(): ProjectEntry[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.md'));
  const entries: ProjectEntry[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');

    // Extract coingeckoId from frontmatter
    const match = content.match(/^coingeckoId:\s*"([^"]*)"/m);
    const coingeckoId = match?.[1] ?? '';

    if (!coingeckoId) {
      console.log(`  SKIP ${slug}: no coingeckoId`);
      continue;
    }

    entries.push({ slug, coingeckoId });
  }

  return entries;
}

async function downloadLogo(url: string, destPath: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

async function main() {
  console.log('Download Project Logos');
  console.log('---');

  // Ensure output directory exists
  if (!fs.existsSync(LOGOS_DIR)) {
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
  }

  const projects = parseProjects();
  const coingeckoIds = projects.map((p) => p.coingeckoId);

  // Fetch market data with image field
  const idsParam = coingeckoIds.join(',');
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idsParam}`;

  console.log(`\nFetching logos for ${coingeckoIds.length} projects from CoinGecko...\n`);

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`CoinGecko API returned ${res.status} ${res.statusText}`);
  }

  const coins: Array<{ id: string; image: string }> = await res.json();

  // Build coingeckoId → image URL map
  const imageMap = new Map<string, string>();
  for (const coin of coins) {
    imageMap.set(coin.id, coin.image);
  }

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const project of projects) {
    const imageUrl = imageMap.get(project.coingeckoId);
    const destPath = path.join(LOGOS_DIR, `${project.slug}.png`);

    if (!imageUrl) {
      console.log(`  SKIP ${project.slug}: no image from CoinGecko for "${project.coingeckoId}"`);
      skipped++;
      continue;
    }

    try {
      await downloadLogo(imageUrl, destPath);
      console.log(`  OK   ${project.slug}`);
      downloaded++;
    } catch (err) {
      console.error(`  FAIL ${project.slug}: ${(err as Error).message}`);
      failed++;
    }
  }

  console.log(`\n---`);
  console.log(`Downloaded: ${downloaded}  Skipped: ${skipped}  Failed: ${failed}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
