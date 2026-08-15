import type { Metadata } from 'next';
import GuidesPage from '@/components/GuidesPage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'The Skin Stapler Guides',
  description: 'All The Skin Stapler guides in one place: walkthrough, puzzles, achievements, endings, voice cast, characters, demo, release date, and Steam details.',
  alternates: localizedAlternates('/guides'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: 'The Skin Stapler Guides', description: 'Walkthrough, puzzles, achievements, endings, voice cast, characters, demo, release date, and Steam details.', url: absoluteUrl('/guides'), images: [heroOgImage] }
};
export default function Page() { return <GuidesPage locale="en" />; }
