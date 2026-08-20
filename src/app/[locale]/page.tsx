import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomePage from '@/components/HomePage';
import { isLocale, locales, localizePath } from '@/lib/i18n';
import { absoluteUrl, heroOgImage, openGraphLocale, pageAlternates, siteConfig } from '@/lib/seo';

const meta = {
  en: ['The Skin Stapler Wiki — Walkthrough, Puzzles & Endings', 'Explore The Skin Stapler with a spoiler-aware walkthrough, puzzle solutions, achievement help, character guides, endings, demo details, and Carrion City clues.'],
  de: ['Komplettlösung, Rätsel & Enden', 'Spoilerbewusste Komplettlösung, Rätselhilfen, Erfolge, Enden, Demo-Informationen und Hinweise zu Carrion City für The Skin Stapler.'],
  'pt-br': ['Detonado, puzzles e finais', 'Detonado com controle de spoilers, soluções de puzzles, conquistas, finais, informações da demo e pistas de Carrion City para The Skin Stapler.'],
  es: ['Guía, puzles y finales', 'Guía con control de spoilers, soluciones de puzles, logros, finales, información de la demo y pistas de Carrion City para The Skin Stapler.']
} as const;

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: meta[locale][0], description: meta[locale][1], alternates: pageAlternates(locale, '/'),
    openGraph: { type: 'website', siteName: siteConfig.name, title: meta[locale][0], description: meta[locale][1], url: absoluteUrl(localizePath(locale, '/')), locale: openGraphLocale(locale), images: [heroOgImage] }
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}
