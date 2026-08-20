import Link from 'next/link';
import type { ReactNode } from 'react';
import { Children } from 'react';
import type { ArticleImageKey } from '@/lib/article-media';
import { articleMedia } from '@/lib/article-media';
import { absoluteUrl, articleAuthor, articlePublisher } from '@/lib/seo';
import ArticleFigure from './ArticleFigure';
import NativeBannerAd from './NativeBannerAd';
import SiteShell from './SiteShell';

type PillarArticlePageProps = {
  path: '/walkthrough' | '/ending';
  title: string;
  description: string;
  keyword: string;
  label: string;
  image: ArticleImageKey;
  children: ReactNode;
};

export default function PillarArticlePage({ path, title, description, keyword, label, image, children }: PillarArticlePageProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description,
        inLanguage: 'en',
        mainEntityOfPage: absoluteUrl(path),
        url: absoluteUrl(path),
        keywords: keyword,
        image: absoluteUrl(articleMedia[image].src),
        author: articleAuthor,
        publisher: articlePublisher
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: label, item: absoluteUrl(path) }
        ]
      }
    ]
  };

  /* Split children at the midpoint so we can place an ad between halves.
     This keeps the content visually continuous while giving the second
     Native Banner roughly 50-60% visibility inside the article body. */
  const childArray = Children.toArray(children);
  const midIndex = Math.ceil(childArray.length / 2);

  return (
    <SiteShell locale="en">
      <article className="container article-page pillar-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><b>{label}</b>
        </nav>
        <header className="article-header pillar-header">
          <div><span className="badge tier-badge">Full game</span><span className="badge blue-badge">Updated August 2026</span></div>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        <ArticleFigure image={image} preload />

        {/* Native Banner #1 — after hero image, ~15-20% into the page */}
        <NativeBannerAd slotId="pillar-top" />

        <div className="mdx-article keyword-article pillar-copy">
          {childArray.slice(0, midIndex)}
        </div>

        <div className="mdx-article keyword-article pillar-copy">
          {childArray.slice(midIndex)}
        </div>

        <nav className="card related-pillar-links" aria-label="Related guides">
          <h2>Continue your Carrion City investigation</h2>
          <div>
            {path !== '/walkthrough' && <Link href="/walkthrough">Full walkthrough</Link>}
            {path !== '/ending' && <Link href="/ending">Ending explained</Link>}
            <Link href="/characters">All characters</Link>
            <Link href="/wiki">Browse the wiki</Link>
            <Link href="/guides">All guides</Link>
          </div>
        </nav>
      </article>
    </SiteShell>
  );
}
