import type { Metadata } from 'next';
import WikiHubPage from '@/components/WikiHubPage';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Wiki: Walkthrough, Characters & Ending' },
  description: 'The Skin Stapler Wiki explains the full-game walkthrough, ending, characters, voice cast, and PC release. See the chapter order, puzzles, achievements, and Flesh Pit finale.',
  keywords: ['the skin stapler wiki', 'skin stapler wiki', 'the skin stapler characters', 'the skin stapler walkthrough', 'the skin stapler cast'],
  alternates: localizedAlternates('/wiki'),
  openGraph: { title: 'The Skin Stapler Wiki: Walkthrough, Characters & Ending', description: 'Walkthrough, ending, characters, voice cast, puzzles, achievements, and PC release guides.', url: '/wiki', type: 'website', siteName: siteConfig.name, images: [openGraphImage('promo')] },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Wiki: Walkthrough, Characters & Ending', description: 'Walkthrough, ending, characters, voice cast, puzzles, achievements, and PC release guides.', images: ['/images/official/carrion-city-promo.webp'] }
};

export default function Page() { return <WikiHubPage />; }
