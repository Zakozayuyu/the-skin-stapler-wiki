import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { availableContentPath, localizePath } from '@/lib/i18n';
import { siteConfig } from '@/lib/seo';

const labels = {
  en: { guides: 'Guides', official: 'Official Links', legal: 'Legal', home: 'Home', all: 'All Guides', characters: 'Characters', beginner: 'Beginner Guide', walkthrough: 'Walkthrough', ending: 'Ending', wiki: 'Wiki Hub', privacy: 'Privacy Policy', terms: 'Terms of Service', aboutLink: 'About', about: 'The Skin Stapler Wiki is an independent fan-made guide covering walkthroughs, characters, audio tapes, puzzles, achievements, chapters and Carrion City story information. We prioritize verified game and platform sources while keeping spoiler-heavy material clearly separated from beginner help. This website is not affiliated with Tainted Pact or Assemble Entertainment.', disclaimer: 'Volatile Steam data (review count, sales milestones) should be re-checked after major updates.', copyright: '© 2026 The Skin Stapler Wiki — Independent fan site.', credit: 'The Skin Stapler is developed by Tainted Pact and published by Assemble Entertainment.' },
  de: { guides: 'Guides', official: 'Offizielle Links', legal: 'Rechtliches', home: 'Startseite', all: 'Alle Guides', characters: 'Charaktere', beginner: 'Einsteiger-Guide', walkthrough: 'Komplettlösung', ending: 'Ende', wiki: 'Wiki-Zentrale', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', aboutLink: 'Über uns', about: 'The Skin Stapler Wiki ist ein unabhängiger, fanerstellter Guide mit Komplettlösungen, Figuren, Audiokassetten, Rätseln, Erfolgen, Kapiteln und Hintergrundinformationen zu Carrion City. Wir setzen auf verifizierte Spiel- und Plattformquellen und halten spoilstarke Inhalte klar von Einsteigerhilfen getrennt. Diese Website steht in keiner Verbindung zu Tainted Pact oder Assemble Entertainment.', disclaimer: 'Veränderliche Steam-Daten (Bewertungsanzahl, Verkaufszahlen) sollten nach größeren Updates erneut geprüft werden.', copyright: '© 2026 The Skin Stapler Wiki — Unabhängige Fanseite.', credit: 'The Skin Stapler wurde von Tainted Pact entwickelt und von Assemble Entertainment veröffentlicht.' },
  'pt-br': { guides: 'Guias', official: 'Links oficiais', legal: 'Legal', home: 'Início', all: 'Todos os guias', characters: 'Personagens', beginner: 'Guia para iniciantes', walkthrough: 'Detonado', ending: 'Final', wiki: 'Central da wiki', privacy: 'Política de privacidade', terms: 'Termos de serviço', aboutLink: 'Sobre', about: 'The Skin Stapler Wiki é um guia independente feito por fãs, cobrindo detonados, personagens, fitas de áudio, puzzles, conquistas, capítulos e informações da história de Carrion City. Priorizamos fontes verificadas do jogo e das plataformas, mantendo material com muitos spoilers claramente separado da ajuda para iniciantes. Este site não tem afiliação com a Tainted Pact ou a Assemble Entertainment.', disclaimer: 'Dados variáveis da Steam (contagem de avaliações, marcos de vendas) devem ser verificados novamente após grandes atualizações.', copyright: '© 2026 The Skin Stapler Wiki — Site independente de fãs.', credit: 'The Skin Stapler foi desenvolvido pela Tainted Pact e publicado pela Assemble Entertainment.' },
  es: { guides: 'Guías', official: 'Enlaces oficiales', legal: 'Legal', home: 'Inicio', all: 'Todas las guías', characters: 'Personajes', beginner: 'Guía para principiantes', walkthrough: 'Guía completa', ending: 'Final', wiki: 'Centro de la wiki', privacy: 'Política de privacidad', terms: 'Términos del servicio', aboutLink: 'Acerca de', about: 'The Skin Stapler Wiki es una guía independiente hecha por fans que cubre recorridos, personajes, cintas de audio, puzles, logros, capítulos e información de la historia de Carrion City. Priorizamos fuentes verificadas del juego y de las plataformas, manteniendo el material con muchos spoilers claramente separado de la ayuda para principiantes. Este sitio no está afiliado a Tainted Pact ni a Assemble Entertainment.', disclaimer: 'Los datos variables de Steam (número de reseñas, hitos de ventas) deben comprobarse de nuevo después de actualizaciones importantes.', copyright: '© 2026 The Skin Stapler Wiki — Sitio independiente de fans.', credit: 'The Skin Stapler fue desarrollado por Tainted Pact y publicado por Assemble Entertainment.' }
} as const;

export default function Footer({ locale }: { locale: Locale }) {
  const t = labels[locale];
  return (
    <footer className="site-footer">
      <div className="container footer-grid footer-grid-wide">
        <div className="footer-brand">
          <Link href={localizePath(locale, '/')} className="brand" aria-label={`The Skin Stapler Wiki — ${t.home}`}>
            <Image src="/android-chrome-192x192.png" alt="The Skin Stapler Wiki logo" width={40} height={40} className="logo" />
            <span className="brand-name">The Skin Stapler Wiki</span>
          </Link>
          <p>{t.about}</p>
          <small>{t.disclaimer}</small>
        </div>
        <FooterLinks title={t.guides} links={[[t.wiki, '/wiki'], [t.characters, '/characters'], [t.walkthrough, '/walkthrough'], [t.ending, '/ending'], [t.all, '/guides'], [t.beginner, '/guides/beginner']]} locale={locale} />
        <div className="footer-links"><h3>{t.official}</h3><a href={siteConfig.steam} target="_blank" rel="noopener noreferrer">Steam</a><a href={siteConfig.discord} target="_blank" rel="noopener noreferrer">Discord</a><a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer">YouTube</a><a href={siteConfig.discussions} target="_blank" rel="noopener noreferrer">Steam Discussions</a></div>
        <div className="footer-links"><h3>{t.legal}</h3><Link href={availableContentPath(locale, '/privacy')}>{t.privacy}</Link><Link href={availableContentPath(locale, '/terms')}>{t.terms}</Link><Link href="/about">{t.aboutLink}</Link></div>
      </div>
      <div className="container footer-bottom"><span>{t.copyright}</span><span>{t.credit}</span></div>
    </footer>
  );
}

function FooterLinks({ title, links, locale }: { title: string; links: string[][]; locale: Locale }) {
  return <div className="footer-links"><h3>{title}</h3>{links.map(([label, href]) => <Link key={href} href={availableContentPath(locale, href)}>{label}</Link>)}</div>;
}
