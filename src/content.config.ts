import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const whyDeai = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/why-deai' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['compute', 'data', 'inference', 'storage', 'agent', 'platform', 'other']),
    token: z.string(),
    status: z.enum(['active', 'upcoming', 'dormant']),
    freedomScore: z.number().min(1).max(10),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    coingeckoId: z.string().optional(),
    launchType: z.enum(['fair-launch', 'ico', 'mining', 'airdrop', 'pre-token']).optional(),
    chain: z.string().optional(),
    supplyType: z.enum(['capped', 'uncapped']).optional(),
    maxSupply: z.string().optional(),
    verdict: z.string().optional(),
    oymHolds: z.boolean().default(false),
  }),
});

const tokenomics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tokenomics' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const build = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/build' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    category: z.enum(['hardware', 'walkthrough', 'examples']),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'why-deai': whyDeai,
  projects,
  tokenomics,
  build,
  journal,
  resources,
};
