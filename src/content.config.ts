import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const whyDeai = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/why-deai' }),
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
    returnsScore: z.number().min(1).max(10).optional(),
    returnsScoreBreakdown: z.object({
      tokenUtility: z.number().min(0).max(20).optional(),
      valueAccrual: z.number().min(0).max(25).optional(),
      supplyDynamics: z.number().min(0).max(20).optional(),
      revenueSustainability: z.number().min(0).max(20).optional(),
      liquidityAccess: z.number().min(0).max(15).optional(),
    }).optional(),
    returnsScoreEvidence: z.object({
      tokenUtility: z.string().optional(),
      valueAccrual: z.string().optional(),
      supplyDynamics: z.string().optional(),
      revenueSustainability: z.string().optional(),
      liquidityAccess: z.string().optional(),
    }).optional(),
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
resources,
};
