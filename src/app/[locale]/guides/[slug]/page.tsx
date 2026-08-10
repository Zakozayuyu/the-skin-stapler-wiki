import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalizedArticlePage from '@/components/LocalizedArticlePage';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { getLocalizedArticle, localizedGuideSlugs } from '@/lib/localized-articles';
import { pageAlternates } from '@/lib/seo';

type ContentLocale = Exclude<Locale, 'en'>;
type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((locale): locale is ContentLocale => locale !== 'en').flatMap((locale) =>
    Object.keys(localizedGuideSlugs).map((slug) => ({ locale, slug }))
  );
}

function resolve(locale: string, slug: string) {
  if (!isLocale(locale) || locale === 'en') return null;
  const id = localizedGuideSlugs[slug as keyof typeof localizedGuideSlugs];
  if (!id) return null;
  const article = getLocalizedArticle(locale, id);
  return article ? { locale, article } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) return {};
  const basePath = `/guides/${slug}`;
  return {
    title: { absolute: resolved.article.title }, description: resolved.article.description,
    keywords: [resolved.article.keyword, 'The Skin Stapler'], alternates: pageAlternates(resolved.locale, basePath),
    openGraph: { title: resolved.article.title, description: resolved.article.description, url: `/${resolved.locale}${basePath}`, type: 'article', locale: resolved.locale },
    twitter: { card: 'summary_large_image', title: resolved.article.title, description: resolved.article.description }
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) notFound();
  return <LocalizedArticlePage locale={resolved.locale} article={resolved.article} />;
}
