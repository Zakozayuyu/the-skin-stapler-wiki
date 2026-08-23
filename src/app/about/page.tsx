import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import { articlePublisher, absoluteUrl, englishOnlyAlternates, heroOgImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About The Skin Stapler Wiki',
  description: 'About The Skin Stapler Wiki: an independent fan guide to The Skin Stapler. Learn our editorial and source policy, how uncertainty is marked, and how to contact us.',
  alternates: englishOnlyAlternates('/about'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: 'About The Skin Stapler Wiki', description: 'An independent fan guide to The Skin Stapler: editorial and source policy, uncertainty marking, and contact channels.', url: absoluteUrl('/about'), images: [heroOgImage] },
  robots: { index: true, follow: true }
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage', name: 'About The Skin Stapler Wiki', url: absoluteUrl('/about'), inLanguage: 'en',
        description: 'About The Skin Stapler Wiki: an independent fan guide to The Skin Stapler, with our editorial and source policy and contact channels.',
        about: { '@type': 'Organization', '@id': `${siteConfig.url}/#organization`, name: siteConfig.name, url: siteConfig.url }
      },
      {
        ...articlePublisher,
        sameAs: [siteConfig.steam, siteConfig.discord, siteConfig.youtube, siteConfig.twitter, siteConfig.discussions],
        contactPoint: { '@type': 'ContactPoint', contactType: 'editorial', url: siteConfig.discussions, availableLanguage: ['English', 'German', 'Portuguese', 'Spanish'] }
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl('/about') }
      ] }
    ]
  };

  return (
    <SiteShell locale="en">
      <article className="container legal-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><b>About</b></nav>
        <h1>About The Skin Stapler Wiki</h1>
        <div className="card legal-copy">
          <section>
            <h2>What this site is</h2>
            <p>The Skin Stapler Wiki is an independent, fan-made reference to <strong>The Skin Stapler</strong>, the PSX-style grindhouse horror game developed by <strong>Tainted Pact</strong> and published by <strong>Assemble Entertainment</strong> for Windows PC on August 6, 2026. It is not affiliated with Tainted Pact, Assemble Entertainment, Valve, or GOG, and it is not an official game wiki.</p>
            <p>The site covers the full walkthrough, the ending, all 16 Steam achievements, puzzle solutions and codes, characters and voice actors, the free demo, release details, and Carrion City lore. Pages are available in English, German, Brazilian Portuguese, and Spanish.</p>
          </section>
          <section>
            <h2>Source policy</h2>
            <ul>
              <li>Official Steam and GOG store pages and developer or publisher announcements are primary sources for release date, platform, language, and availability.</li>
              <li>Full-game routes and story details are cross-checked against published playthroughs and verified footage.</li>
              <li>Claims found only on fan pages, search snippets, or automated transcripts are written as <strong>unconfirmed</strong> rather than presented as fact.</li>
              <li>Material that conflicts with verified sources — such as mobile, trainer, Cheat Engine, or save-download aggregator claims — is excluded.</li>
            </ul>
          </section>
          <section>
            <h2>How to contact us</h2>
            <p>Questions, corrections, or source material can be raised through the official community channels we follow: <a href={siteConfig.discussions} target="_blank" rel="noreferrer">Steam Discussions</a> for the game or the developer&rsquo;s <a href={siteConfig.discord} target="_blank" rel="noreferrer">Discord server</a>. Unverified claims are flagged on the page where they appear so they can be checked against new evidence.</p>
          </section>
          <section>
            <h2>Reuse and citations</h2>
            <p>Guide text is published as a fan reference. If you reuse it, name the source as &ldquo;The Skin Stapler Wiki&rdquo; and link to the original page; facts marked as unconfirmed on this site must not be presented as verified. Machine-readable AI tooling can follow <a href="/.well-known/ai.txt">/.well-known/ai.txt</a>, <a href="/llms.txt">/llms.txt</a>, and <a href="/ai/faq.json">/ai/faq.json</a>.</p>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
