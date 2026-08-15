import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Skin Stapler Wiki: this independent fan site collects no personal data via forms or accounts; visits are measured with Google Analytics.',
  alternates: localizedAlternates('/privacy'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: 'Privacy Policy', description: 'Privacy policy for The Skin Stapler Wiki: no personal data collected via forms or accounts; visits are measured with Google Analytics.', url: absoluteUrl('/privacy'), images: [heroOgImage] }
};
export default function Page() { return <LegalPage locale="en" type="privacy" />; }
