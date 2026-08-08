import Link from 'next/link';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import type { KeywordArticleSlug } from '@/lib/articles';
import { keywordArticles } from '@/lib/articles';
import SiteShell from './SiteShell';

export default function KeywordArticlePage({ slug }: { slug: KeywordArticleSlug }) {
  const article = keywordArticles[slug];
  const Article = article.Component;
  const path = `/guides/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: 'en',
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    keywords: article.keyword
  };

  return <SiteShell locale="en"><article className="container article-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><nav className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/guides">Guides</Link><span>/</span><b>{article.keyword}</b></nav><header className="article-header"><div><span className="badge tier-badge">Source-checked</span><span className="badge floor-badge">Uncertainty marked as pending</span></div><h1>{article.title}</h1><p>{article.description}</p></header><div className="mdx-article keyword-article"><Article /></div><div className="card article-cta"><h2>Play from an official source</h2><p>Use the official Steam pages for the full game or its separate free demo.</p><div className="button-row"><a href={siteConfig.steam} target="_blank" rel="noreferrer" className="btn-primary">Full game on Steam</a><a href={siteConfig.demo} target="_blank" rel="noreferrer" className="btn-secondary">Free Steam demo</a></div></div></article></SiteShell>;
}
