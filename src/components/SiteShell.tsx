import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
import Header from './Header';
import Footer from './Footer';

export default function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <><Header locale={locale} /><main>{children}</main><Footer locale={locale} /></>;
}
