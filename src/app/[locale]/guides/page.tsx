import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuidesPage from '@/components/GuidesPage';
import { isLocale, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl, heroOgImage, openGraphLocale, pageAlternates, siteConfig } from '@/lib/seo';

const meta = {
  en: ['The Skin Stapler Guides', 'All The Skin Stapler guides in one place: walkthrough, puzzles, achievements, endings, voice cast, characters, demo, release date, and Steam details.'],
  de: ['The Skin Stapler Guides auf Deutsch', 'The Skin Stapler Guides auf Deutsch: Komplettlösung, Rätsel, Erfolge, Enden, Stimmenbesetzung, Figuren, Demo und Erscheinungsdatum an einem Ort.'],
  'pt-br': ['Guias de The Skin Stapler em português', 'Guias de The Skin Stapler em português: detonado, puzzles, conquistas, finais, elenco de voz, personagens, demo e data de lançamento em um só lugar.'],
  es: ['Guías de The Skin Stapler en español', 'Guías de The Skin Stapler en español: guía completa, puzles, logros, finales, reparto de voces, personajes, demo y fecha de lanzamiento en un solo lugar.']
} as const;

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: meta[locale][0], description: meta[locale][1], alternates: pageAlternates(locale, '/guides'),
    openGraph: { type: 'website', siteName: siteConfig.name, title: meta[locale][0], description: meta[locale][1], url: absoluteUrl(localizePath(locale, '/guides')), locale: openGraphLocale(locale), images: [heroOgImage] }
  };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <GuidesPage locale={locale} />; }
