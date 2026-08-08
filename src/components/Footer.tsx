import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { siteConfig } from '@/lib/seo';

const labels = {
  en: { guides: 'Guides', official: 'Official Links', legal: 'Legal', home: 'Home', all: 'All Guides', beginner: 'Beginner Guide', privacy: 'Privacy Policy', terms: 'Terms of Service' },
  de: { guides: 'Guides', official: 'Offizielle Links', legal: 'Rechtliches', home: 'Startseite', all: 'Alle Guides', beginner: 'Einsteiger-Guide', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
  'pt-br': { guides: 'Guias', official: 'Links oficiais', legal: 'Legal', home: 'Início', all: 'Todos os guias', beginner: 'Guia para iniciantes', privacy: 'Política de privacidade', terms: 'Termos de serviço' },
  es: { guides: 'Guías', official: 'Enlaces oficiales', legal: 'Legal', home: 'Inicio', all: 'Todas las guías', beginner: 'Guía para principiantes', privacy: 'Política de privacidad', terms: 'Términos del servicio' }
} as const;

export default function Footer({ locale }: { locale: Locale }) {
  const t = labels[locale];
  return (
    <footer className="site-footer">
      <div className="container footer-grid footer-grid-wide">
        <div className="footer-brand">
          <Link href={localizePath(locale, '/')} className="brand">
            <Image src="/android-chrome-192x192.png" alt="The Skin Stapler Wiki" width={40} height={40} className="logo" />
            <span className="brand-name">The Skin Stapler Wiki</span>
          </Link>
          <p>The Skin Stapler Wiki is an independent fan-made guide covering walkthroughs, puzzles, characters, achievements, endings, and Carrion City lore.</p>
          <small>Not affiliated with Tainted Pact, Assemble Entertainment, Valve, or GOG. Volatile Steam data should be checked again after major updates.</small>
        </div>
        <FooterLinks title={t.guides} links={[[t.home, '/'], [t.all, '/guides'], [t.beginner, '/guides/beginner']]} locale={locale} />
        <div className="footer-links"><h3>{t.official}</h3><a href={siteConfig.steam} target="_blank" rel="noreferrer">Steam</a><a href={siteConfig.discord} target="_blank" rel="noreferrer">Discord</a><a href={siteConfig.youtube} target="_blank" rel="noreferrer">YouTube</a><a href={siteConfig.discussions} target="_blank" rel="noreferrer">Steam Discussions</a></div>
        <FooterLinks title={t.legal} links={[[t.privacy, '/privacy'], [t.terms, '/terms']]} locale={locale} />
      </div>
      <div className="container footer-bottom"><span>© 2026 The Skin Stapler Wiki — Independent fan site.</span><span>The Skin Stapler is developed by Tainted Pact and published by Assemble Entertainment.</span></div>
    </footer>
  );
}

function FooterLinks({ title, links, locale }: { title: string; links: string[][]; locale: Locale }) {
  return <div className="footer-links"><h3>{title}</h3>{links.map(([label, href]) => <Link key={href} href={localizePath(locale, href)}>{label}</Link>)}</div>;
}
