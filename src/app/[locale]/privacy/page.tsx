import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { isLocale, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl, heroOgImage, pageAlternates, siteConfig } from '@/lib/seo';
const copy = {
  de: { title: 'Datenschutzerklärung', description: 'Datenschutzerklärung von The Skin Stapler Wiki: keine Datenerfassung über Formulare oder Konten; Besuche werden mit Google Analytics gemessen.' },
  'pt-br': { title: 'Política de privacidade', description: 'Política de privacidade da The Skin Stapler Wiki: sem coleta de dados pessoais por formulários ou contas; as visitas são medidas com o Google Analytics.' },
  es: { title: 'Política de privacidad', description: 'Política de privacidad de The Skin Stapler Wiki: sin recopilación de datos personales mediante formularios o cuentas; las visitas se miden con Google Analytics.' }
} as const;
export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') return {};
  const path = localizePath(locale, '/privacy');
  return {
    ...copy[locale], alternates: pageAlternates(locale, '/privacy'),
    openGraph: { type: 'website', siteName: siteConfig.name, title: copy[locale].title, description: copy[locale].description, url: absoluteUrl(path), locale, images: [heroOgImage] }
  };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <LegalPage locale={locale} type="privacy" />; }
