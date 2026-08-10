'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { localeMeta, locales, localizePath, type Locale } from '@/lib/i18n';
import { navItems } from '@/lib/data';
import { siteConfig } from '@/lib/seo';

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/(de|pt-br|es)(?=\/|$)/, '') || '/';

  function changeLocale(nextLocale: Locale) {
    const englishOnly = ['/wiki', '/walkthrough', '/ending'].includes(cleanPath)
      || /^\/guides\/the-skin-stapler-(fefe|hot-dog|release-date|voice-actors)$/.test(cleanPath);
    window.location.assign(nextLocale !== 'en' && englishOnly ? localizePath(nextLocale, '/guides') : localizePath(nextLocale, cleanPath));
  }

  function navHref(item: (typeof navItems)[number]) {
    return item.localized === false ? item.href : localizePath(locale, item.href);
  }

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href={localizePath(locale, '/')} className="brand" aria-label="The Skin Stapler Wiki home">
          <Image src="/android-chrome-192x192.png" alt="The Skin Stapler Wiki" width={36} height={36} className="logo" />
          <span className="brand-name">The Skin Stapler <span>Wiki</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.filter((item) => locale === 'en' || !item.englishOnly).map((item) => <Link key={item.href} href={navHref(item)}>{item.label[locale]}</Link>)}
        </nav>

        <div className="header-actions">
          <label className="language-select-wrap">
            <span className="sr-only">Language</span>
            <select className="language-select" value={locale} onChange={(event) => changeLocale(event.target.value as Locale)}>
              {locales.map((option) => <option key={option} value={option}>{localeMeta[option].label}</option>)}
            </select>
          </label>
          <a href={siteConfig.discord} target="_blank" rel="noreferrer" className="official-mini-link">Discord</a>
          <a href={siteConfig.steam} target="_blank" rel="noreferrer" className="steam-button">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.4 3.4 0 0 1 2.1-.584l2.863-4.142v-.06a4.524 4.524 0 1 1 4.42 4.529l-4.077 2.911a3.39 3.39 0 1 1-6.717.828L.436 15.27A12.003 12.003 0 1 0 11.979 0Z" /></svg>
            Steam
          </a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle mobile menu">{open ? '×' : '☰'}</button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            {navItems.filter((item) => locale === 'en' || !item.englishOnly).map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={navHref(item)}>{item.label[locale]}</Link>)}
            <a href={siteConfig.steam} target="_blank" rel="noreferrer">Steam →</a>
            <a href={siteConfig.discord} target="_blank" rel="noreferrer">Discord →</a>
          </div>
        </nav>
      )}
    </header>
  );
}
