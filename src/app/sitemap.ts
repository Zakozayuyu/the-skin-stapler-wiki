import type { MetadataRoute } from 'next';
import { localeMeta, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';
import { keywordArticleSlugs } from '@/lib/articles';
import { localizedGuideSlugs } from '@/lib/localized-articles';
export const dynamic = 'force-static';

const commonPaths = [
  '/', '/guides', '/guides/beginner', '/privacy', '/terms', '/wiki', '/walkthrough', '/ending',
  ...Object.keys(localizedGuideSlugs).map((slug) => `/guides/${slug}`)
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = commonPaths.flatMap((path) => {
    const languages = Object.fromEntries(locales.map((locale) => [localeMeta[locale].language, absoluteUrl(localizePath(locale, path))]));
    return locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, path)),
      changeFrequency: path.includes('privacy') || path.includes('terms') ? 'yearly' as const : path === '/' || path === '/wiki' ? 'weekly' as const : 'monthly' as const,
      priority: path === '/' ? 1 : path === '/wiki' ? 0.95 : path === '/guides' || path === '/walkthrough' || path === '/ending' ? 0.9 : 0.8,
      alternates: { languages: { ...languages, 'x-default': absoluteUrl(path) } }
    }));
  });
  const englishOnlyPages = keywordArticleSlugs.filter((slug) => !(slug in localizedGuideSlugs)).map((slug) => ({
    url: absoluteUrl(`/guides/${slug}`), changeFrequency: 'monthly' as const, priority: 0.8
  }));
  return [...localizedPages, ...englishOnlyPages];
}
