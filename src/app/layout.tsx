import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'The Skin Stapler Wiki — Walkthrough, Puzzles & Endings', template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.shortName,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: { type: 'website', siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description, images: [{ url: '/hero.jpg', width: 460, height: 215, alt: 'The Skin Stapler official promotional artwork' }] },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: ['/hero.jpg'] },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${siteConfig.url}/#organization`, name: siteConfig.name, url: siteConfig.url },
    { '@type': 'WebSite', '@id': `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, inLanguage: ['en', 'de-DE', 'pt-BR', 'es'] },
    { '@type': 'VideoGame', name: 'The Skin Stapler', url: siteConfig.steam, datePublished: '2026-08-06', operatingSystem: 'Windows', applicationCategory: 'Game', genre: ['Action', 'Indie Horror'], author: { '@type': 'Organization', name: 'Tainted Pact' }, publisher: { '@type': 'Organization', name: 'Assemble Entertainment' } }
  ] };
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "const p=location.pathname;document.documentElement.lang=p.startsWith('/de')?'de-DE':p.startsWith('/pt-br')?'pt-BR':p.startsWith('/es')?'es':'en'" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head><body>{children}</body><Script src="https://www.googletagmanager.com/gtag/js?id=G-XV8QD7VG81" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XV8QD7VG81');`}</Script></html>;
}
