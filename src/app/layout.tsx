import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { gameFacts } from '@/lib/game-facts';
import { articlePublisher, heroOgImage, siteConfig } from '@/lib/seo';
import './globals.css';

const inter = localFont({
  src: '../../public/fonts/inter-latin.woff2',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'Arial'],
  weight: '100 900',
});

const oswald = localFont({
  src: '../../public/fonts/oswald-latin.woff2',
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
  weight: '200 700',
  fallback: ['Arial Narrow', 'Arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'The Skin Stapler Wiki — Walkthrough, Puzzles & Endings', template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.shortName,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: { type: 'website', siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description, images: [heroOgImage] },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: ['/og-default.webp'] },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { ...articlePublisher, sameAs: [siteConfig.steam, siteConfig.discord, siteConfig.youtube, siteConfig.twitter] },
    { '@type': 'WebSite', '@id': `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, inLanguage: ['en', 'de-DE', 'pt-BR', 'es'] },
    { '@type': 'VideoGame', name: 'The Skin Stapler', url: siteConfig.steam, datePublished: gameFacts.releaseDate.value, operatingSystem: gameFacts.platform.value, applicationCategory: 'Game', genre: ['Action', 'Indie Horror'], author: { '@type': 'Organization', name: gameFacts.developer.value }, publisher: { '@type': 'Organization', name: gameFacts.publisher.value } }
  ] };
  return <html lang="en" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "const p=location.pathname;document.documentElement.lang=p.startsWith('/de')?'de-DE':p.startsWith('/pt-br')?'pt-BR':p.startsWith('/es')?'es':'en'" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head><body>{children}</body><Script src="https://www.googletagmanager.com/gtag/js?id=G-XV8QD7VG81" strategy="lazyOnload" /><Script id="google-analytics" strategy="lazyOnload">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XV8QD7VG81');`}</Script></html>;
}
