import type { Metadata } from 'next';
import EndingPage from '@/components/EndingPage';
import { localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Ending Explained: Elias Crow & Robbie' },
  description: 'Elias Crow is the Skin Stapler. The ending reveals his revenge for Silus Kain, Robbie’s fate, Slater’s last choice, and what the Flesh Pit leaves open.',
  keywords: ['the skin stapler ending', 'elias crow skin stapler', 'the skin stapler who is the killer', 'skin stapler ending explained', 'the flesh pit ending'],
  alternates: localizedAlternates('/ending'),
  openGraph: { title: 'The Skin Stapler Ending Explained: Elias Crow & Robbie', description: 'Elias Crow is the killer. See his revenge, Robbie’s fate, and Slater’s final choice.', url: '/ending', type: 'article', siteName: siteConfig.name, images: [openGraphImage('killer')] },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Ending Explained: Elias Crow & Robbie', description: 'Elias Crow is the killer. See his revenge, Robbie’s fate, and Slater’s final choice.', images: ['/images/official/killer-closeup.webp'] }
};

export default function Page() { return <EndingPage />; }
