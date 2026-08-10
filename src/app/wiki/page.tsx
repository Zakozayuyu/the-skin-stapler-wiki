import type { Metadata } from 'next';
import WikiHubPage from '@/components/WikiHubPage';

export const metadata: Metadata = {
  title: { absolute: 'The Skin Stapler Wiki: Walkthrough, Cast & Ending' },
  description: 'The Skin Stapler wiki covers the verified walkthrough, ending, cast, characters, release date, demo scenes, official links, and facts awaiting confirmation.',
  keywords: ['the skin stapler wiki', 'the skin stapler characters', 'the skin stapler guide', 'the skin stapler cast'],
  alternates: { canonical: '/wiki' },
  openGraph: { title: 'The Skin Stapler Wiki', description: 'Walkthroughs, endings, characters, cast, scenes, and release guides.', url: '/wiki', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'The Skin Stapler Wiki', description: 'The complete Carrion City guide hub.' }
};

export default function Page() { return <WikiHubPage />; }
