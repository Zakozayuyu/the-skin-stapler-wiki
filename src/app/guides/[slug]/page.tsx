import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import KeywordArticlePage from '@/components/KeywordArticlePage';
import { getKeywordArticle, keywordArticleSlugs, type KeywordArticleSlug } from '@/lib/articles';

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
  return {
    title: { absolute: article.title },
    description: article.description,
    keywords: [article.keyword, 'The Skin Stapler', article.category],
    alternates: { canonical: path },
    openGraph: { title: article.title, description: article.description, url: path, type: 'article' },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getKeywordArticle(slug)) notFound();
  return <KeywordArticlePage slug={slug as KeywordArticleSlug} />;
}
