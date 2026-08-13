import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideArticlePage from '@/components/GuideArticlePage';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';

const metadataCopy: Record<Locale, { title: string; description: string }> = {
  en: { title: 'The Skin Stapler Beginner Guide', description: 'Practical starting information with spoilers and still-unknown details clearly labeled.' },
  de: { title: 'The Skin Stapler Einsteiger-Guide', description: 'Bestätigte Startinformationen; unbestätigte Angaben sind klar als ausstehend gekennzeichnet.' },
  'pt-br': { title: 'Guia para iniciantes de The Skin Stapler', description: 'Informações iniciais verificadas; dados não confirmados são indicados como pendentes.' },
  es: { title: 'Guía para principiantes de The Skin Stapler', description: 'Información inicial verificada; los datos no confirmados se indican como pendientes.' }
};

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { ...metadataCopy[locale], alternates: pageAlternates(locale, '/guides/beginner') };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <GuideArticlePage locale={locale} />;
}
