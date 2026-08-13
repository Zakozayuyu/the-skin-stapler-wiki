import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale, locales } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';
const copy = {
  de: { title: 'Nutzungsbedingungen', description: 'Nutzungsbedingungen für The Skin Stapler Wiki.' },
  'pt-br': { title: 'Termos de serviço', description: 'Termos de serviço da The Skin Stapler Wiki.' },
  es: { title: 'Términos del servicio', description: 'Términos del servicio de The Skin Stapler Wiki.' }
} as const;
export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale) || locale === 'en') return {}; return { ...copy[locale], alternates: pageAlternates(locale, '/terms') }; }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale} type="terms" />; }
