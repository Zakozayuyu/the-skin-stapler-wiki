import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuidesPage from '@/components/GuidesPage';
import { isLocale, locales } from '@/lib/i18n';
import { pageAlternates } from '@/lib/seo';

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: `The Skin Stapler Guides`, description: 'Investigation, puzzle, achievement, and ending guide index.', alternates: pageAlternates(locale, '/guides') };
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <GuidesPage locale={locale} />; }
