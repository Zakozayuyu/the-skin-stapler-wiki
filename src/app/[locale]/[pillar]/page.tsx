import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalizedArticlePage from '@/components/LocalizedArticlePage';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { getLocalizedArticle, localizedArticleImages, localizedPillarIds, type LocalizedArticleId } from '@/lib/localized-articles';
import { openGraphImage, pageAlternates, siteConfig } from '@/lib/seo';

type ContentLocale = Exclude<Locale, 'en'>;
type Props = { params: Promise<{ locale: string; pillar: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((locale): locale is ContentLocale => locale !== 'en').flatMap((locale) =>
    localizedPillarIds.map((pillar) => ({ locale, pillar }))
  );
}

function resolve(locale: string, pillar: string) {
  if (!isLocale(locale) || locale === 'en' || !localizedPillarIds.includes(pillar as (typeof localizedPillarIds)[number])) return null;
  const article = getLocalizedArticle(locale, pillar as LocalizedArticleId);
  return article ? { locale, article } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, pillar } = await params;
  const resolved = resolve(locale, pillar);
  if (!resolved) return {};
  const basePath = `/${pillar}`;
  const image = openGraphImage(localizedArticleImages[resolved.article.id], resolved.locale);
  return {
    title: { absolute: resolved.article.title }, description: resolved.article.description,
    keywords: [resolved.article.keyword, 'The Skin Stapler'], alternates: pageAlternates(resolved.locale, basePath),
    openGraph: { title: resolved.article.title, description: resolved.article.description, url: `/${resolved.locale}${basePath}`, type: 'article', locale: resolved.locale, siteName: siteConfig.name, images: [image] },
    twitter: { card: 'summary_large_image', title: resolved.article.title, description: resolved.article.description, images: [image.url] }
  };
}

export default async function Page({ params }: Props) {
  const { locale, pillar } = await params;
  const resolved = resolve(locale, pillar);
  if (!resolved) notFound();
  return <LocalizedArticlePage locale={resolved.locale} article={resolved.article} />;
}
