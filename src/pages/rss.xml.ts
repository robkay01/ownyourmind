import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const journal = (await getCollection('journal'))
    .filter((e) => !e.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: 'Own Your Mind — Journal',
    description: 'Weekly dispatches from the frontier of decentralised AI.',
    site: context.site!,
    items: journal.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.publishDate,
      description: entry.data.description,
      link: `/journal/${entry.id}/`,
    })),
  });
}
