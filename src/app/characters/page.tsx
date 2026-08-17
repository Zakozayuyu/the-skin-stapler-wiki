import type { Metadata } from 'next';
import CharactersPage from '@/components/CharactersPage';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Characters: Full Cast List' },
  description: 'Every confirmed character in The Skin Stapler: who they are, where they appear, whether they are playable, and which voice actor portrays them.',
  keywords: ['the skin stapler characters', 'the skin stapler cast', 'the skin stapler playable characters', 'carrion city characters'],
  alternates: localizedAlternates('/characters'),
  openGraph: {
    title: 'The Skin Stapler Characters: Full Cast List',
    description: 'Every confirmed character: role, location, playable status, and voice actor.',
    url: '/characters',
    type: 'website',
    siteName: siteConfig.name,
    images: [openGraphImage('promo')]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Skin Stapler Characters: Full Cast List',
    description: 'Every confirmed character: role, location, playable status, and voice actor.',
    images: ['/images/official/carrion-city-promo.webp']
  }
};

export default function Page() {
  return <CharactersPage />;
}
