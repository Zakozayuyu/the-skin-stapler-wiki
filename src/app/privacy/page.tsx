import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Skin Stapler Wiki covering hosting logs, Google Analytics, and Adsterra advertising.',
  alternates: localizedAlternates('/privacy'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: 'Privacy Policy', description: 'Privacy policy for The Skin Stapler Wiki covering hosting logs, Google Analytics, and Adsterra advertising.', url: absoluteUrl('/privacy'), images: [heroOgImage] }
};
export default function Page() { return <LegalPage locale="en" type="privacy" />; }
