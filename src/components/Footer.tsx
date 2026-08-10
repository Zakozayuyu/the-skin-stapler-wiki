import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { siteConfig } from '@/lib/seo';

const labels = {
  en: { guides: 'Guides', official: 'Official Links', legal: 'Legal', home: 'Home', all: 'All Guides', beginner: 'Beginner Guide', walkthrough: 'Walkthrough', ending: 'Ending', wiki: 'Wiki Hub', privacy: 'Privacy Policy', terms: 'Terms of Service', about: 'The Skin Stapler Wiki is an independent fan-made guide covering walkthroughs, puzzles, characters, achievements, endings, and Carrion City lore.', disclaimer: 'Not affiliated with Tainted Pact, Assemble Entertainment, Valve, or GOG. Volatile Steam data should be checked again after major updates.', copyright: '© 2026 The Skin Stapler Wiki — Independent fan site.', credit: 'The Skin Stapler is developed by Tainted Pact and published by Assemble Entertainment.' },
  de: { guides: 'Guides', official: 'Offizielle Links', legal: 'Rechtliches', home: 'Startseite', all: 'Alle Guides', beginner: 'Einsteiger-Guide', walkthrough: 'Komplettlösung', ending: 'Ende', wiki: 'Wiki-Zentrale', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', about: 'The Skin Stapler Wiki ist ein unabhängiger Fan-Guide mit Komplettlösungen, Rätseln, Charakteren, Erfolgen, Enden und Informationen zu Carrion City.', disclaimer: 'Keine Verbindung zu Tainted Pact, Assemble Entertainment, Valve oder GOG. Veränderliche Steam-Daten sollten nach größeren Updates erneut geprüft werden.', copyright: '© 2026 The Skin Stapler Wiki — Unabhängige Fanseite.', credit: 'The Skin Stapler wurde von Tainted Pact entwickelt und von Assemble Entertainment veröffentlicht.' },
  'pt-br': { guides: 'Guias', official: 'Links oficiais', legal: 'Legal', home: 'Início', all: 'Todos os guias', beginner: 'Guia para iniciantes', walkthrough: 'Detonado', ending: 'Final', wiki: 'Central da wiki', privacy: 'Política de privacidade', terms: 'Termos de serviço', about: 'The Skin Stapler Wiki é um guia independente feito por fãs com detonados, puzzles, personagens, conquistas, finais e informações sobre Carrion City.', disclaimer: 'Sem afiliação com Tainted Pact, Assemble Entertainment, Valve ou GOG. Dados variáveis da Steam devem ser verificados novamente após grandes atualizações.', copyright: '© 2026 The Skin Stapler Wiki — Site independente de fãs.', credit: 'The Skin Stapler foi desenvolvido pela Tainted Pact e publicado pela Assemble Entertainment.' },
  es: { guides: 'Guías', official: 'Enlaces oficiales', legal: 'Legal', home: 'Inicio', all: 'Todas las guías', beginner: 'Guía para principiantes', walkthrough: 'Guía completa', ending: 'Final', wiki: 'Centro de la wiki', privacy: 'Política de privacidad', terms: 'Términos del servicio', about: 'The Skin Stapler Wiki es una guía independiente creada por fans con recorridos, puzles, personajes, logros, finales e información sobre Carrion City.', disclaimer: 'Sin afiliación con Tainted Pact, Assemble Entertainment, Valve ni GOG. Los datos variables de Steam deben comprobarse de nuevo después de actualizaciones importantes.', copyright: '© 2026 The Skin Stapler Wiki — Sitio independiente de fans.', credit: 'The Skin Stapler fue desarrollado por Tainted Pact y publicado por Assemble Entertainment.' }
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
          <p>{t.about}</p>
          <small>{t.disclaimer}</small>
        </div>
        <FooterLinks title={t.guides} links={[[t.wiki, '/wiki'], [t.walkthrough, '/walkthrough'], [t.ending, '/ending'], [t.all, '/guides'], [t.beginner, '/guides/beginner']]} locale={locale} />
        <div className="footer-links"><h3>{t.official}</h3><a href={siteConfig.steam} target="_blank" rel="noreferrer">Steam</a><a href={siteConfig.discord} target="_blank" rel="noreferrer">Discord</a><a href={siteConfig.youtube} target="_blank" rel="noreferrer">YouTube</a><a href={siteConfig.discussions} target="_blank" rel="noreferrer">Steam Discussions</a></div>
        <FooterLinks title={t.legal} links={[[t.privacy, '/privacy'], [t.terms, '/terms']]} locale={locale} />
      </div>
      <div className="container footer-bottom"><span>{t.copyright}</span><span>{t.credit}</span></div>
    </footer>
  );
}

function FooterLinks({ title, links, locale }: { title: string; links: string[][]; locale: Locale }) {
  return <div className="footer-links"><h3>{title}</h3>{links.map(([label, href]) => <Link key={href} href={localizePath(locale, href)}>{label}</Link>)}</div>;
}
