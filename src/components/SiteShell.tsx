import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
import { localeMeta } from '@/lib/i18n';
import Header from './Header';
import Footer from './Footer';

const skipLabels = {
  en: 'Skip to main content',
  de: 'Zum Hauptinhalt springen',
  'pt-br': 'Pular para o conteúdo principal',
  es: 'Saltar al contenido principal'
} as const;

export default function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <><a className="skip-link" href="#main-content">{skipLabels[locale]}</a><Header locale={locale} /><main id="main-content" lang={localeMeta[locale].language} tabIndex={-1}>{children}</main><Footer locale={locale} /></>;
}
