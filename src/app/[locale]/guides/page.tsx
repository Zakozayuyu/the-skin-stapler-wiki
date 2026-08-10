import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuidesPage from '@/components/GuidesPage';
import { isLocale, locales } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';

const meta = {
  en: ['The Skin Stapler Guides', 'Investigation, puzzle, achievement, and ending guides for The Skin Stapler.'],
  de: ['The Skin Stapler Guides auf Deutsch', 'Deutsche Übersicht zu Ermittlungen, Rätseln, Erfolgen und Enden in The Skin Stapler.'],
  'pt-br': ['Guias de The Skin Stapler em português', 'Guias em português do Brasil sobre investigação, puzzles, conquistas e finais de The Skin Stapler.'],
  es: ['Guías de The Skin Stapler en español', 'Guías en español sobre investigación, puzles, logros y finales de The Skin Stapler.']
} as const;

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: meta[locale][0], description: meta[locale][1], alternates: pageAlternates(locale, '/guides') };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <GuidesPage locale={locale} />; }
