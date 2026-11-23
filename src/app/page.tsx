import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';

const homeTitle = 'The Skin Stapler Wiki — Characters, Tapes & Guides (2026)';
const homeDescription = 'The Skin Stapler is a PSX-style horror game set in Carrion City. Use this fan wiki for the full walkthrough, characters, puzzle solutions, and audio tapes.';

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  keywords: ['The Skin Stapler', 'wiki', 'characters', 'audio tapes', 'walkthrough', 'puzzles', 'achievements', 'chapters'],
  alternates: localizedAlternates('/'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: homeTitle, description: homeDescription, url: absoluteUrl('/'), images: [heroOgImage] },
  twitter: { card: 'summary_large_image', title: homeTitle, description: homeDescription, images: [heroOgImage.url] }
};

export default function Page() { return <HomePage locale="en" />; }
