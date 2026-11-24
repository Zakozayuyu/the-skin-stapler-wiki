import type { MetadataRoute } from 'next';
import { localeMeta, locales, localizePath, type Locale } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';
import { getKeywordArticle, keywordArticleSlugs, keywordArticles } from '@/lib/articles';
import { getLocalizedArticle, localizedGuideSlugs, localizedPillarIds } from '@/lib/localized-articles';
export const dynamic = 'force-static';

const commonPaths = [
  '/', '/guides', '/guides/beginner', '/privacy', '/terms', '/wiki', '/characters', '/walkthrough', '/ending',
  ...Object.keys(localizedGuideSlugs).map((slug) => `/guides/${slug}`)
] as const;

// Stable, source-owned dates prevent every deployment from looking like a
// content update. Guide/hub content was reviewed on August 20; privacy copy
// was updated on October 12 when advertising was removed.
const contentLastModified = new Date('2026-08-20T00:00:00Z');
const septemberBatch = new Date('2026-09-03T00:00:00Z');
const legalLastModified = new Date('2026-08-15T15:28:43+08:00');
const privacyLastModified = new Date('2026-10-12T00:00:00+08:00');
const beginnerLastModified = new Date('2026-10-03T00:00:00+08:00');
const contactLastModified = new Date('2026-10-03T00:00:00+08:00');
const homeLastModified = new Date('2026-11-23T02:39:43Z');
const endingLastModified = new Date('2026-11-24T00:00:00Z');
const wikiLastModified = new Date('2026-11-24T00:00:00Z');

function lastModifiedForPath(path: string, locale: Locale) {
  if (locale === 'en') {
    if (path === '/') return homeLastModified;
    if (path === '/ending') return endingLastModified;
    if (path === '/wiki') return wikiLastModified;
    const article = path.startsWith('/guides/') ? getKeywordArticle(path.slice('/guides/'.length)) : undefined;
    if (article && 'modifiedAt' in article) return new Date(article.modifiedAt);
  } else {
    const id = path.startsWith('/guides/')
      ? localizedGuideSlugs[path.slice('/guides/'.length) as keyof typeof localizedGuideSlugs]
      : localizedPillarIds.find((pillar) => path === `/${pillar}`);
    const modifiedAt = id ? getLocalizedArticle(locale, id)?.modifiedAt : undefined;
    if (modifiedAt) return new Date(modifiedAt);
  }
  if (path === '/privacy') return privacyLastModified;
  if (path === '/terms') return legalLastModified;
  if (path === '/walkthrough') return septemberBatch;
  if (path === '/guides/beginner') return beginnerLastModified;
  return contentLastModified;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = commonPaths.flatMap((path) => {
    const languages = Object.fromEntries(locales.map((locale) => [localeMeta[locale].language, absoluteUrl(localizePath(locale, path))]));
    return locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, path)),
      lastModified: lastModifiedForPath(path, locale),
      changeFrequency: path.includes('privacy') || path.includes('terms') ? 'yearly' as const : path === '/' || path === '/wiki' ? 'weekly' as const : 'monthly' as const,
      priority: path === '/' ? 1 : path === '/wiki' ? 0.95 : path === '/guides' || path === '/walkthrough' || path === '/ending' ? 0.9 : 0.8,
      alternates: { languages: { ...languages, 'x-default': absoluteUrl(path) } }
    }));
  });
  const englishOnlyPages = [
    { url: absoluteUrl('/about'), lastModified: contentLastModified, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: absoluteUrl('/contact'), lastModified: contactLastModified, changeFrequency: 'yearly' as const, priority: 0.4 },
    ...keywordArticleSlugs.filter((slug) => !(slug in localizedGuideSlugs)).map((slug) => ({
      url: absoluteUrl(`/guides/${slug}`), lastModified: new Date(`${keywordArticles[slug].date}T00:00:00Z`), changeFrequency: 'monthly' as const, priority: 0.8
    }))
  ];
  return [...localizedPages, ...englishOnlyPages];
}
