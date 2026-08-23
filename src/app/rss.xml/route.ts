import { absoluteUrl } from '@/lib/seo';
import { keywordArticles, keywordArticleSlugs } from '@/lib/articles';

export const dynamic = 'force-static';

const FEED_UPDATED = '2026-08-20T00:00:00Z';

const hubItems = [
  { title: 'Full Game Walkthrough: Every Chapter in Order', path: '/walkthrough' },
  { title: 'The Skin Stapler Ending Explained', path: '/ending' },
  { title: 'The Skin Stapler Wiki Hub', path: '/wiki' },
  { title: 'All Characters: Roles, Locations and Playable Status', path: '/characters' },
  { title: 'Beginner Guide: Controls, Interactions and First Steps', path: '/guides/beginner' }
] as const;

function item(title: string, path: string, description: string) {
  const link = absoluteUrl(path);
  return `<item><title>${title.replace(/&/g, '&amp;')}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><description>${description.replace(/&/g, '&amp;')}</description><pubDate>${new Date(FEED_UPDATED).toUTCString()}</pubDate></item>`;
}

export async function GET() {
  const guideItems = keywordArticleSlugs.map((slug) => {
    const article = keywordArticles[slug];
    return item(article.title, `/guides/${slug}`, article.description);
  });
  const items = [...hubItems.map((hub) => item(hub.title, hub.path, `${hub.title} — from The Skin Stapler Wiki, an independent fan guide to the August 2026 horror game by Tainted Pact and Assemble Entertainment.`)), ...guideItems].join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>The Skin Stapler Wiki</title>
<link>${absoluteUrl('/')}</link>
<description>Independent fan guide to The Skin Stapler: walkthrough, ending, achievements, puzzle solutions, characters, demo and release details.</description>
<language>en</language>
<lastBuildDate>${new Date(FEED_UPDATED).toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
