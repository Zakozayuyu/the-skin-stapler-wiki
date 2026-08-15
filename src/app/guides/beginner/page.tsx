import type { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';
import { absoluteUrl, localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'The Skin Stapler Beginner Guide',
  description: 'Verified starting information for The Skin Stapler: confirmed opening chapters, Steam and free demo availability, 16 achievements, and the full walkthrough.',
  alternates: localizedAlternates('/guides/beginner'),
  openGraph: { title: 'The Skin Stapler Beginner Guide', description: 'Confirmed opening chapters, Steam and free demo availability, 16 achievements, and the full walkthrough.', url: absoluteUrl('/guides/beginner'), type: 'article', siteName: siteConfig.name, images: [openGraphImage('evidence')] },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Beginner Guide', description: 'Verified starting information with unknowns clearly labeled.', images: ['/images/official/evidence-camera.webp'] }
};
export default function Page() { return <GuideArticlePage locale="en" />; }
