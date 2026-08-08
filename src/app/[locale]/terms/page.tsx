import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; return { title: 'Terms of Service', description: 'Terms of service for The Skin Stapler Wiki.', alternates: pageAlternates(locale, '/terms') }; }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale} type="terms" />; }
