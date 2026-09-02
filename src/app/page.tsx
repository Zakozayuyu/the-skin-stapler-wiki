import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';

/** Frozen from research: the EN home Title, Description, and Keywords must not be rewritten. */
const frozenTitle = 'The Skin Stapler Wiki — Characters, Tapes & Guides (2026)';
const frozenDescription = 'The Skin Stapler wiki for walkthrough help, characters, audio tapes, achievements, puzzles, chapters, finale help, and spoiler-aware Carrion City tips.';

export const metadata: Metadata = {
  title: { absolute: frozenTitle },
  description: frozenDescription,
  keywords: ['The Skin Stapler', 'wiki', 'characters', 'audio tapes', 'walkthrough', 'puzzles', 'achievements', 'chapters'],
  alternates: localizedAlternates('/'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: frozenTitle, description: frozenDescription, url: absoluteUrl('/'), images: [heroOgImage] },
  twitter: { card: 'summary_large_image', title: frozenTitle, description: frozenDescription, images: [heroOgImage.url] }
};

export default function Page() { return <HomePage locale="en" />; }
