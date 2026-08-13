import Link from 'next/link';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import type { KeywordArticleSlug } from '@/lib/articles';
import { keywordArticleRelations, keywordArticles } from '@/lib/articles';
import type { ArticleImageKey } from '@/lib/article-media';
import { articleMedia } from '@/lib/article-media';
import ArticleFigure from './ArticleFigure';
import SiteShell from './SiteShell';

const articleImages: Record<KeywordArticleSlug, ArticleImageKey> = {
  'the-skin-stapler-gameplay': 'carAttack',
  'the-skin-stapler-hot-dog': 'customer',
  'the-skin-stapler-release-date': 'promo',
  'the-skin-stapler-demo': 'chase',
  'the-skin-stapler-steam': 'tape',
  'the-skin-stapler-pc-download': 'police',
  'the-skin-stapler-reddit': 'stage',
  'the-skin-stapler-voice-actors': 'interview',
  'the-skin-stapler-layna': 'bloodBank',
  'the-skin-stapler-fefe': 'chase',
  'the-skin-stapler-scaroline': 'videoStore'
};

export default function KeywordArticlePage({ slug }: { slug: KeywordArticleSlug }) {
  const article = keywordArticles[slug];
  const Article = article.Component;
  const related = keywordArticleRelations[slug];
  const path = `/guides/${slug}`;
  const image = articleImages[slug];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: 'en',
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    keywords: article.keyword,
    image: absoluteUrl(articleMedia[image].src)
  };

  return <SiteShell locale="en"><article className="container article-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><nav className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/guides">Guides</Link><span>/</span><b>{article.keyword}</b></nav><header className="article-header"><div><span className="badge tier-badge">Game guide</span><span className="badge floor-badge">Spoilers and unknowns clearly labeled</span></div><h1>{article.title}</h1><p>{article.description}</p></header><ArticleFigure image={image} /><div className="mdx-article keyword-article"><Article /></div><nav className="card article-related" aria-label="Related The Skin Stapler guides"><span className="eyebrow">Related guides</span><h2>Continue exploring Carrion City</h2><div>{related.map((item) => <Link href={item.href} key={item.href}><strong>{item.label}</strong><span>{item.description}</span></Link>)}</div></nav><div className="card article-cta"><h2>Play from an official source</h2><p>Use the official Steam pages for the full game or its separate free demo.</p><div className="button-row"><a href={siteConfig.steam} target="_blank" rel="noreferrer" className="btn-primary">Full game on Steam</a><a href={siteConfig.demo} target="_blank" rel="noreferrer" className="btn-secondary">Free Steam demo</a></div></div></article></SiteShell>;
}
