import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import KeywordArticlePage from '@/components/KeywordArticlePage';
import { getKeywordArticle, keywordArticleImages, keywordArticleSlugs, type KeywordArticleSlug } from '@/lib/articles';
import { localizedGuideSlugs } from '@/lib/localized-articles';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return keywordArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getKeywordArticle(slug);
  if (!article) return {};
  const path = `/guides/${slug}`;
  const image = openGraphImage(keywordArticleImages[slug as KeywordArticleSlug]);
  return {
    title: { absolute: article.title },
    description: article.description,
    keywords: [article.keyword, 'The Skin Stapler', article.category],
    alternates: slug in localizedGuideSlugs ? localizedAlternates(path) : { canonical: path },
    openGraph: { title: article.title, description: article.description, url: path, type: 'article', siteName: siteConfig.name, images: [image] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [image.url] }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getKeywordArticle(slug)) notFound();
  return <KeywordArticlePage slug={slug as KeywordArticleSlug} />;
}
