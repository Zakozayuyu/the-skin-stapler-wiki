import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl, heroOgImage, openGraphLocale, pageAlternates, siteConfig } from '@/lib/seo';
const copy = {
  de: { title: 'Datenschutzerklärung', description: 'Datenschutzerklärung von The Skin Stapler Wiki zu Hosting-Protokollen, Google Analytics und Werbung von Adsterra.' },
  'pt-br': { title: 'Política de privacidade', description: 'Política de privacidade da The Skin Stapler Wiki sobre registros de hospedagem, Google Analytics e publicidade da Adsterra.' },
  es: { title: 'Política de privacidad', description: 'Política de privacidad de The Skin Stapler Wiki sobre registros de alojamiento, Google Analytics y publicidad de Adsterra.' }
} as const;
export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const path = localizePath(locale, '/privacy');
  return {
    ...copy[locale], alternates: pageAlternates(locale, '/privacy'),
    openGraph: { type: 'website', siteName: siteConfig.name, title: copy[locale].title, description: copy[locale].description, url: absoluteUrl(path), locale: openGraphLocale(locale), images: [heroOgImage] }
  };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale} type="privacy" />; }
