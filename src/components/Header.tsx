'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { localeMeta, locales, localizePath, type Locale } from '@/lib/i18n';
import { navItems } from '@/lib/data';
import { localizedGuideSlugs } from '@/lib/localized-articles';
import { siteConfig } from '@/lib/seo';
import SiteSearch from './SiteSearch';

const headerLabels = {
  en: { home: 'The Skin Stapler Wiki home', navigation: 'Main navigation', language: 'Language', menu: 'Toggle mobile menu', mobile: 'Mobile navigation' },
  de: { home: 'The Skin Stapler Wiki Startseite', navigation: 'Hauptnavigation', language: 'Sprache', menu: 'Mobiles Menü öffnen oder schließen', mobile: 'Mobile Navigation' },
  'pt-br': { home: 'Início da The Skin Stapler Wiki', navigation: 'Navegação principal', language: 'Idioma', menu: 'Abrir ou fechar o menu móvel', mobile: 'Navegação móvel' },
  es: { home: 'Inicio de The Skin Stapler Wiki', navigation: 'Navegación principal', language: 'Idioma', menu: 'Abrir o cerrar el menú móvil', mobile: 'Navegación móvil' }
} as const;

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/(de|pt-br|es)(?=\/|$)/, '') || '/';
  const labels = headerLabels[locale];

  function changeLocale(nextLocale: Locale) {
    const guideMatch = cleanPath.match(/^\/guides\/([^/]+)$/);
    if (nextLocale !== 'en' && cleanPath === '/characters') {
      window.location.assign(localizePath(nextLocale, '/wiki'));
      return;
    }
    if (nextLocale !== 'en' && guideMatch && !(guideMatch[1] in localizedGuideSlugs)) {
      window.location.assign(localizePath(nextLocale, '/guides'));
      return;
    }
    window.location.assign(localizePath(nextLocale, cleanPath));
  }

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href={localizePath(locale, '/')} className="brand" aria-label={labels.home}>
          <Image src="/android-chrome-192x192.png" alt="The Skin Stapler Wiki logo" width={36} height={36} className="logo" />
          <span className="brand-name">The Skin Stapler <span>Wiki</span></span>
        </Link>

        <nav className="desktop-nav" aria-label={labels.navigation}>
          {navItems.map((item) => <Link key={item.href} href={localizePath(locale, item.href)}>{item.label[locale]}</Link>)}
        </nav>

        <div className="header-actions">
          <SiteSearch locale={locale} />
          <label className="language-select-wrap">
            <span className="sr-only">{labels.language}</span>
            <select className="language-select" value={locale} onChange={(event) => changeLocale(event.target.value as Locale)}>
              {locales.map((option) => <option key={option} value={option}>{localeMeta[option].label}</option>)}
            </select>
          </label>
          <a href={siteConfig.discord} target="_blank" rel="noreferrer" className="official-mini-link">Discord</a>
          <a href={siteConfig.steam} target="_blank" rel="noreferrer" className="steam-button">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.4 3.4 0 0 1 2.1-.584l2.863-4.142v-.06a4.524 4.524 0 1 1 4.42 4.529l-4.077 2.911a3.39 3.39 0 1 1-6.717.828L.436 15.27A12.003 12.003 0 1 0 11.979 0Z" /></svg>
            Steam
          </a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={labels.menu}>{open ? '×' : '☰'}</button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label={labels.mobile}>
          <div className="container">
            {navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={localizePath(locale, item.href)}>{item.label[locale]}</Link>)}
            <a href={siteConfig.steam} target="_blank" rel="noreferrer">Steam →</a>
            <a href={siteConfig.discord} target="_blank" rel="noreferrer">Discord →</a>
          </div>
        </nav>
      )}
    </header>
  );
}
