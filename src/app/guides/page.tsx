import type { Metadata } from 'next';
import GuidesPage from '@/components/GuidesPage';
import { localizedAlternates } from '@/lib/seo';

export const metadata: Metadata = { title: 'The Skin Stapler Guides', description: 'Spoiler-aware investigation, puzzle, achievement, and ending guide index for The Skin Stapler.', alternates: localizedAlternates('/guides') };
export default function Page() { return <GuidesPage locale="en" />; }
