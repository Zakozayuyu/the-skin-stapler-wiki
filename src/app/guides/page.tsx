import type { Metadata } from 'next';
import GuidesPage from '@/components/GuidesPage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Guides: Walkthrough, Puzzles & Characters' },
  description: 'Browse every The Skin Stapler guide: full walkthrough, puzzle solutions, achievements, characters, voice cast, demo, and release details.',
  alternates: localizedAlternates('/guides'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: 'The Skin Stapler Guides: Walkthrough, Puzzles & Characters', description: 'Walkthrough, puzzle solutions, achievements, characters, voice cast, demo, and release details.', url: absoluteUrl('/guides'), images: [heroOgImage] }
};
export default function Page() { return <GuidesPage locale="en" />; }
