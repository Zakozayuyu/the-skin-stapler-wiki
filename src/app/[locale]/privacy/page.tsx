import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale, locales } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';
const copy = {
  de: { title: 'Datenschutzerklärung', description: 'Datenschutzerklärung für The Skin Stapler Wiki.' },
  'pt-br': { title: 'Política de privacidade', description: 'Política de privacidade da The Skin Stapler Wiki.' },
  es: { title: 'Política de privacidad', description: 'Política de privacidad de The Skin Stapler Wiki.' }
} as const;
export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale) || locale === 'en') return {}; return { ...copy[locale], alternates: pageAlternates(locale, '/privacy') }; }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale} type="privacy" />; }
