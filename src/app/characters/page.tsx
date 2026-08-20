import type { Metadata } from 'next';
import CharactersPage from '@/components/CharactersPage';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Characters: Full Cast List' },
  description: 'The Skin Stapler characters with their roles, locations, playable status, known fates, and clearly marked unknowns from the full game.',
  keywords: ['the skin stapler characters', 'the skin stapler cast', 'the skin stapler playable characters', 'carrion city characters'],
  alternates: localizedAlternates('/characters'),
  openGraph: {
    title: 'The Skin Stapler Characters: Full Cast List',
    description: 'Characters, roles, locations, playable status, known fates, and clearly marked unknowns.',
    url: '/characters',
    type: 'website',
    siteName: siteConfig.name,
    images: [openGraphImage('promo')]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Skin Stapler Characters: Full Cast List',
    description: 'Characters, roles, locations, playable status, known fates, and clearly marked unknowns.',
    images: ['/images/official/carrion-city-promo.webp']
  }
};

export default function Page() {
  return <CharactersPage />;
}
