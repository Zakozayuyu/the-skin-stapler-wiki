import type { MetadataRoute } from 'next';
import { absoluteUrl, hasPublicSiteUrl, siteConfig } from '@/lib/seo';
export const dynamic = 'force-static';

/**
 * AI crawler policy: citation and search bots are explicitly allowed so AI
 * answer engines (ChatGPT Search, Perplexity, Claude, Gemini AI Overviews)
 * can index and cite this wiki. Training-only bots stay disallowed.
 */
const citationBots = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'DuckAssistBot',
  'AI2Bot',
  'AI2Bot-Dolma',
  'cohere-ai',
  'YouBot',
  'PetalBot'
];

const searchBots = [
  'Googlebot',
  'Bingbot',
  'Applebot',
  'xAI-Bot',
  'Meta-ExternalFetcher',
  'facebookexternalhit'
];

const trainingBots = ['GPTBot', 'anthropic-ai', 'CCBot', 'Bytespider', 'Amazonbot', 'meta-externalagent', 'Applebot-Extended'];

export default function robots(): MetadataRoute.Robots {
  if (!hasPublicSiteUrl) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: [
      ...citationBots.map((userAgent) => ({ userAgent, allow: '/' })),
      ...searchBots.map((userAgent) => ({ userAgent, allow: '/' })),
      ...trainingBots.map((userAgent) => ({ userAgent, disallow: '/' })),
      { userAgent: '*', allow: '/' }
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteConfig.url
  };
}
