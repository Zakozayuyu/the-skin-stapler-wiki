import type { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';
import { absoluteUrl, localizedAlternates, openGraphImage, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'The Skin Stapler Beginner Guide',
  description: 'A spoiler-aware The Skin Stapler beginner guide covering the demo, investigation steps, puzzles, scripted danger, achievements, and what remains unconfirmed.',
  alternates: localizedAlternates('/guides/beginner'),
  openGraph: { title: 'The Skin Stapler Beginner Guide', description: 'Spoiler-aware first-play advice for the demo, investigation, puzzles, scripted danger, and achievements.', url: absoluteUrl('/guides/beginner'), type: 'article', siteName: siteConfig.name, images: [openGraphImage('evidence')] },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Beginner Guide', description: 'Verified starting information with unknowns clearly labeled.', images: ['/images/official/evidence-camera.webp'] }
};
export default function Page() { return <GuideArticlePage locale="en" />; }
