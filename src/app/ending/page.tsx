import type { Metadata } from 'next';
import EndingPage from '@/components/EndingPage';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Ending Explained: Full Story' },
  description: 'The Skin Stapler ending reveals the killer’s identity, motive, Robbie’s fate, Slater’s final choice, and what remains unconfirmed about alternate epilogues.',
  keywords: ['the skin stapler ending', 'the skin stapler ending explained', 'the flesh pit ending', 'does the skin stapler have multiple endings'],
  alternates: localizedAlternates('/ending'),
  openGraph: { title: 'The Skin Stapler Ending Explained: Full Story', description: 'The killer’s identity, motive, Robbie’s fate, and Slater’s final choice.', url: '/ending', type: 'article', siteName: siteConfig.name, images: [openGraphImage('killer')] },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Ending Explained: Full Story', description: 'The verified finale and details still awaiting confirmation.', images: ['/images/official/killer-closeup.webp'] }
};

export default function Page() { return <EndingPage />; }
