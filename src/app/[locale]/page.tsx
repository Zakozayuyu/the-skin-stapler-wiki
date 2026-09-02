import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomePage from '@/components/HomePage';
import { isLocale, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl, heroOgImage, openGraphLocale, pageAlternates, siteConfig } from '@/lib/seo';

/**
 * Locale home metadata. DE and ES Titles/Descriptions are frozen from the research document;
 * PT-BR is a consistent analog (no PT-BR frozen entry was provided).
 */
const meta: Record<string, { title: string; description: string }> = {
  de: {
    title: 'The Skin Stapler Wiki — Figuren & Kassetten (2026)',
    description: 'The Skin Stapler Wiki mit Figuren, Audiokassetten, Kapiteln, Erfolgen, Rätseln und spoilerarmen Walkthrough-Hinweisen für die Ermittlungen in Carrion City.'
  },
  'pt-br': {
    title: 'The Skin Stapler Wiki — Personagens e Fitas (2026)',
    description: 'Wiki de The Skin Stapler com personagens, fitas de áudio, capítulos, conquistas, puzzles e ajuda de detonado com avisos de spoiler para Carrion City.'
  },
  es: {
    title: 'The Skin Stapler Wiki — Personajes y Cintas (2026)',
    description: 'Wiki de The Skin Stapler con personajes, cintas de audio, capítulos, logros, puzles y ayuda de recorrido con avisos de spoilers para Carrion City.'
  }
};

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const entry = meta[locale];
  return {
    title: { absolute: entry.title }, description: entry.description, alternates: pageAlternates(locale, '/'),
    openGraph: { type: 'website', siteName: siteConfig.name, title: entry.title, description: entry.description, url: absoluteUrl(localizePath(locale, '/')), locale: openGraphLocale(locale), images: [heroOgImage] }
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}
