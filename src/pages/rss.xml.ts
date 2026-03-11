import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const [projects, whyDeai, tokenomics, resources] = await Promise.all([
    getCollection('projects', ({ data }) => !data.draft),
    getCollection('why-deai', ({ data }) => !data.draft),
    getCollection('tokenomics', ({ data }) => !data.draft),
    getCollection('resources', ({ data }) => !data.draft),
  ]);

  const items = [
    ...projects.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.updatedDate ?? p.data.publishDate,
      link: `/projects/${p.id}/`,
    })),
    ...whyDeai.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.updatedDate ?? p.data.publishDate,
      link: `/why-deai/${p.id}/`,
    })),
    ...tokenomics.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.updatedDate ?? p.data.publishDate,
      link: `/tokenomics/${p.id}/`,
    })),
    ...resources.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.publishDate,
      link: `/resources/${p.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Own Your Mind',
    description: 'Freedom AND returns. Practitioner-led coverage of decentralised AI — project reviews, tokenomics analysis, and sovereignty-first essays.',
    site: context.site!,
    items,
    customData: '<language>en</language>',
  });
}
