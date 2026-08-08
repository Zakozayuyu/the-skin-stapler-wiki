import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { localizedAlternates } from '@/lib/seo';
export const metadata: Metadata = { title: 'Terms of Service', description: 'Terms of service for The Skin Stapler Wiki.', alternates: localizedAlternates('/terms') };
export default function Page() { return <LegalPage locale="en" type="terms" />; }
