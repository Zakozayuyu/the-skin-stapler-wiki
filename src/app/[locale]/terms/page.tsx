import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl, heroOgImage, pageAlternates, siteConfig } from '@/lib/seo';
const copy = {
  de: { title: 'Nutzungsbedingungen', description: 'Nutzungsbedingungen von The Skin Stapler Wiki: ein unabhängiger, inoffizieller Fan-Guide zu Informationszwecken, ohne Verbindung zu Entwicklern oder Publishern.' },
  'pt-br': { title: 'Termos de serviço', description: 'Termos de serviço da The Skin Stapler Wiki: um guia de fãs independente e não oficial, para fins informativos, sem vínculo com desenvolvedores ou publicadores.' },
  es: { title: 'Términos del servicio', description: 'Términos del servicio de The Skin Stapler Wiki: una guía de fans independiente y no oficial con fines informativos, sin afiliación a desarrolladores o editores.' }
} as const;
export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const path = localizePath(locale, '/terms');
  return {
    ...copy[locale], alternates: pageAlternates(locale, '/terms'),
    openGraph: { type: 'website', siteName: siteConfig.name, title: copy[locale].title, description: copy[locale].description, url: absoluteUrl(path), locale, images: [heroOgImage] }
  };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale} type="terms" />; }
