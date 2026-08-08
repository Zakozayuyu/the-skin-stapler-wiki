import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { localizedAlternates } from '@/lib/seo';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'Privacy policy for The Skin Stapler Wiki.', alternates: localizedAlternates('/privacy') };
export default function Page() { return <LegalPage locale="en" type="privacy" />; }
