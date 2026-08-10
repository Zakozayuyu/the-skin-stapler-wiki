import Link from 'next/link';
import type { ReactNode } from 'react';
import { absoluteUrl } from '@/lib/seo';
import SiteShell from './SiteShell';

type PillarArticlePageProps = {
  path: '/walkthrough' | '/ending';
  title: string;
  description: string;
  keyword: string;
  label: string;
  children: ReactNode;
};

export default function PillarArticlePage({ path, title, description, keyword, label, children }: PillarArticlePageProps) {
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
        keywords: keyword
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
        <div className="mdx-article keyword-article pillar-copy">{children}</div>
        <nav className="card related-pillar-links" aria-label="Related guides">
          <h2>Continue your Carrion City investigation</h2>
          <div>
            {path !== '/walkthrough' && <Link href="/walkthrough">Full walkthrough</Link>}
            {path !== '/ending' && <Link href="/ending">Ending explained</Link>}
            <Link href="/wiki">Browse the wiki</Link>
            <Link href="/guides">All guides</Link>
          </div>
        </nav>
      </article>
    </SiteShell>
  );
}
