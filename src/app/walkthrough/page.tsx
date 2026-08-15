import type { Metadata } from 'next';
import WalkthroughPage from '@/components/WalkthroughPage';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Walkthrough: Full Game Chapter Guide' },
  description: 'The Skin Stapler walkthrough follows the complete full-game route from Fefe’s apartment through CCPD, workplace chapters, Closing In, and The Flesh Pit.',
  keywords: ['the skin stapler walkthrough', 'the skin stapler full game walkthrough', 'the skin stapler guide', 'the skin stapler chapters'],
  alternates: localizedAlternates('/walkthrough'),
  openGraph: { title: 'The Skin Stapler Walkthrough: Full Game Chapter Guide', description: 'The complete route from Fefe’s apartment through The Flesh Pit.', url: '/walkthrough', type: 'article', siteName: siteConfig.name, images: [openGraphImage('police')] },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Walkthrough', description: 'Full-game chapter order and progress guide.', images: ['/images/official/police-station.webp'] }
};

export default function Page() { return <WalkthroughPage />; }
