import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideArticlePage from '@/components/GuideArticlePage';
import { isLocale, locales, localizePath, type Locale } from '@/lib/i18n';
import { absoluteUrl, openGraphImage, openGraphLocale, pageAlternates, siteConfig } from '@/lib/seo';

const metadataCopy: Record<Locale, { title: string; description: string }> = {
  en: { title: 'The Skin Stapler Beginner Guide', description: 'Verified starting information for The Skin Stapler: confirmed opening chapters, Steam and free demo availability, 16 achievements, and the full walkthrough.' },
  de: { title: 'The Skin Stapler Einsteiger-Guide', description: 'Bestätigte Startinformationen zu The Skin Stapler: Spielbeginn, Steam und kostenlose Demo, 16 Steam-Erfolge und die Komplettlösung; Unsicheres klar markiert.' },
  'pt-br': { title: 'Guia para iniciantes de The Skin Stapler', description: 'Informações iniciais verificadas de The Skin Stapler: início do jogo, Steam e demo gratuita, 16 conquistas e o detonado completo; incertezas ficam marcadas.' },
  es: { title: 'Guía para principiantes de The Skin Stapler', description: 'Información inicial verificada de The Skin Stapler: comienzo del juego, Steam y demo gratuita, 16 logros y la guía completa; lo sin confirmar está marcado.' }
};

export function generateStaticParams() { return locales.filter((locale) => locale !== 'en').map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = metadataCopy[locale];
  const path = localizePath(locale, '/guides/beginner');
  const image = openGraphImage('evidence', locale);
  return {
    ...copy, alternates: pageAlternates(locale, '/guides/beginner'),
    openGraph: { title: copy.title, description: copy.description, url: absoluteUrl(path), type: 'article', locale: openGraphLocale(locale), siteName: siteConfig.name, images: [image] },
    twitter: { card: 'summary_large_image', title: copy.title, description: copy.description, images: [image.url] }
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <GuideArticlePage locale={locale} />;
}
