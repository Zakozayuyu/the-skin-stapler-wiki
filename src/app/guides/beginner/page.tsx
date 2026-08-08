import type { Metadata } from 'next';
import GuideArticlePage from '@/components/GuideArticlePage';
import { localizedAlternates } from '@/lib/seo';

export const metadata: Metadata = { title: 'The Skin Stapler Beginner Guide', description: 'Verified starting information and clearly marked pending details for your first night in Carrion City.', alternates: localizedAlternates('/guides/beginner') };
export default function Page() { return <GuideArticlePage locale="en" />; }
