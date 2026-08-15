import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { absoluteUrl, heroOgImage, localizedAlternates, siteConfig } from '@/lib/seo';
export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for The Skin Stapler Wiki: an independent, unofficial fan guide for informational purposes, not affiliated with its developers or publishers.',
  alternates: localizedAlternates('/terms'),
  openGraph: { type: 'website', siteName: siteConfig.name, title: 'Terms of Service', description: 'Terms of service for The Skin Stapler Wiki: an independent, unofficial fan guide for informational purposes, not affiliated with its developers or publishers.', url: absoluteUrl('/terms'), images: [heroOgImage] }
};
export default function Page() { return <LegalPage locale="en" type="terms" />; }
