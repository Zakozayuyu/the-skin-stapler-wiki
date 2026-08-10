import type { MetadataRoute } from 'next';
import { localeMeta, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';
import { keywordArticleSlugs } from '@/lib/articles';
export const dynamic = 'force-static';

const paths = ['/', '/guides', '/guides/beginner', '/privacy', '/terms'] as const;
const pillarPaths = ['/wiki', '/walkthrough', '/ending'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = paths.flatMap((path) => {
    const languages = Object.fromEntries(locales.map((locale) => [localeMeta[locale].language, absoluteUrl(localizePath(locale, path))]));
    return locales.map((locale) => ({ url: absoluteUrl(localizePath(locale, path)), changeFrequency: path.includes('privacy') || path.includes('terms') ? 'yearly' as const : 'weekly' as const, priority: path === '/' ? 1 : path === '/guides' ? 0.9 : 0.7, alternates: { languages: { ...languages, 'x-default': absoluteUrl(path) } } }));
  });
  const keywordPages = keywordArticleSlugs.map((slug) => ({ url: absoluteUrl(`/guides/${slug}`), changeFrequency: 'monthly' as const, priority: 0.8 }));
  const pillarPages = pillarPaths.map((path) => ({ url: absoluteUrl(path), changeFrequency: 'weekly' as const, priority: path === '/wiki' ? 0.95 : 0.9 }));
  return [...localizedPages, ...pillarPages, ...keywordPages];
}
