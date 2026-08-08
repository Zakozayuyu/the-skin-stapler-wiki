import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localeMeta, localizePath } from '@/lib/i18n';
import { officialLinks, sidebarCodes, startCards } from '@/lib/data';
import { homeContent } from '@/lib/content';
import { siteConfig } from '@/lib/seo';
import SiteShell from './SiteShell';

const copy = {
  en: {
    eyebrow: 'Independent Fan-Made Horror Guide', title: 'The Skin Stapler',
    hero: "Hunt a serial killer through the neon-lit decay of Carrion City as Detective Dick Slater and a cast of doomed civilians. Investigate grisly scenes, solve puzzles, survive dangerous encounters, and uncover the truth behind the killer's tapes.",
    primary: 'Start Spoiler-Free Guide', secondary: 'View Puzzle Solutions', tertiary: 'Find All Achievements', trailer: 'Official Gameplay Trailer',
    stats: ['Released Aug 6, 2026', '54 Players Online', '121 Steam Reviews', '94.21% Positive', '16 Achievements'],
    startEyebrow: 'Start Here', startTitle: 'Your The Skin Stapler Investigation', about: 'What is The Skin Stapler?', explore: 'Explore All Guides',
    codeTitle: 'Redeem Codes', codeText: 'No official redeem-code system was found for The Skin Stapler.', official: 'Official Links', steam: 'Official game page', discord: 'Tainted Pact Games Discord', youtube: 'Assemble Entertainment YouTube', twitter: 'Tainted Pact on X', community: 'Steam Discussions',
    facts: [['Developer', 'Tainted Pact'], ['Publisher', 'Assemble Entertainment'], ['Platform', 'Windows PC / Steam'], ['Genre', 'Action / Indie Horror'], ['User Reviews', '121'], ['Positive Rating', '94.21%'], ['Achievements', '16']],
    ready: 'Ready to Solve the Carrion City Case?', readyText: "From your first crime scene to the final revelation, use our walkthroughs and puzzle guides to stay on the killer's trail without missing key evidence.", readyPrimary: 'Read the Beginner Guide', readySecondary: 'Play on Steam', language: 'Game language note'
  },
  de: {
    eyebrow: 'Unabhängiger, fanerstellter Horror-Guide', title: 'The Skin Stapler',
    hero: 'Jage als Detective Dick Slater und mit einer Gruppe dem Untergang geweihter Zivilisten einen Serienmörder durch das neonbeleuchtete, verfallende Carrion City. Untersuche grausige Tatorte, löse Rätsel, überlebe gefährliche Begegnungen und decke die Wahrheit hinter den Bändern des Mörders auf.',
    primary: 'Spoilerarmen Guide starten', secondary: 'Rätsellösungen ansehen', tertiary: 'Alle Erfolge finden', trailer: 'Offizieller Gameplay-Trailer',
    stats: ['Veröffentlicht am 6. Aug. 2026', '54 Spieler online', '121 Steam-Rezensionen', '94,21 % positiv', '16 Erfolge'],
    startEyebrow: 'Hier starten', startTitle: 'Deine Ermittlung in The Skin Stapler', about: 'Was ist The Skin Stapler?', explore: 'Alle Guides ansehen',
    codeTitle: 'Einlösecodes', codeText: 'Für The Skin Stapler wurde kein offizielles Einlösecode-System gefunden.', official: 'Offizielle Links', steam: 'Offizielle Spielseite', discord: 'Tainted Pact Games Discord', youtube: 'Assemble Entertainment YouTube', twitter: 'Tainted Pact auf X', community: 'Steam-Diskussionen',
    facts: [['Entwickler', 'Tainted Pact'], ['Publisher', 'Assemble Entertainment'], ['Plattform', 'Windows PC / Steam'], ['Genre', 'Action / Indie-Horror'], ['Nutzerrezensionen', '121'], ['Positive Wertung', '94,21 %'], ['Erfolge', '16']],
    ready: 'Bereit, den Fall von Carrion City zu lösen?', readyText: 'Nutze unsere Komplettlösungen und Rätsel-Guides vom ersten Tatort bis zur letzten Enthüllung, ohne wichtige Beweise zu verpassen.', readyPrimary: 'Einsteiger-Guide lesen', readySecondary: 'Auf Steam spielen', language: 'Hinweis zur Spielsprache'
  },
  'pt-br': {
    eyebrow: 'Guia de horror independente feito por fãs', title: 'The Skin Stapler',
    hero: 'Cace um assassino em série pela decadência iluminada por neon de Carrion City como o detetive Dick Slater e um elenco de civis condenados. Investigue cenas macabras, resolva puzzles, sobreviva a encontros perigosos e descubra a verdade por trás das fitas do assassino.',
    primary: 'Começar guia sem spoilers', secondary: 'Ver soluções de puzzles', tertiary: 'Encontrar todas as conquistas', trailer: 'Trailer oficial de gameplay',
    stats: ['Lançado em 6 ago. 2026', '54 jogadores online', '121 avaliações na Steam', '94,21% positivas', '16 conquistas'],
    startEyebrow: 'Comece aqui', startTitle: 'Sua investigação de The Skin Stapler', about: 'O que é The Skin Stapler?', explore: 'Explorar todos os guias',
    codeTitle: 'Códigos de resgate', codeText: 'Nenhum sistema oficial de códigos de resgate foi encontrado para The Skin Stapler.', official: 'Links oficiais', steam: 'Página oficial do jogo', discord: 'Discord da Tainted Pact Games', youtube: 'YouTube da Assemble Entertainment', twitter: 'Tainted Pact no X', community: 'Discussões da Steam',
    facts: [['Desenvolvedora', 'Tainted Pact'], ['Publicadora', 'Assemble Entertainment'], ['Plataforma', 'Windows PC / Steam'], ['Gênero', 'Ação / Horror indie'], ['Avaliações de usuários', '121'], ['Avaliação positiva', '94,21%'], ['Conquistas', '16']],
    ready: 'Pronto para resolver o caso de Carrion City?', readyText: 'Da primeira cena do crime à revelação final, use nossos detonados e guias de puzzles para seguir o rastro do assassino sem perder provas importantes.', readyPrimary: 'Ler o guia para iniciantes', readySecondary: 'Jogar na Steam', language: 'Nota sobre o idioma do jogo'
  },
  es: {
    eyebrow: 'Guía de terror independiente hecha por fans', title: 'The Skin Stapler',
    hero: 'Da caza a un asesino en serie por la decadencia iluminada con neón de Carrion City como el detective Dick Slater y un grupo de civiles condenados. Investiga escenas macabras, resuelve puzles, sobrevive a encuentros peligrosos y descubre la verdad tras las cintas del asesino.',
    primary: 'Empezar guía sin spoilers', secondary: 'Ver soluciones de puzles', tertiary: 'Encontrar todos los logros', trailer: 'Tráiler oficial de jugabilidad',
    stats: ['Lanzamiento: 6 ago. 2026', '54 jugadores conectados', '121 reseñas de Steam', '94,21% positivas', '16 logros'],
    startEyebrow: 'Empieza aquí', startTitle: 'Tu investigación de The Skin Stapler', about: '¿Qué es The Skin Stapler?', explore: 'Explorar todas las guías',
    codeTitle: 'Códigos de canje', codeText: 'No se encontró ningún sistema oficial de códigos de canje para The Skin Stapler.', official: 'Enlaces oficiales', steam: 'Página oficial del juego', discord: 'Discord de Tainted Pact Games', youtube: 'YouTube de Assemble Entertainment', twitter: 'Tainted Pact en X', community: 'Discusiones de Steam',
    facts: [['Desarrolladora', 'Tainted Pact'], ['Editora', 'Assemble Entertainment'], ['Plataforma', 'Windows PC / Steam'], ['Género', 'Acción / Terror indie'], ['Reseñas de usuarios', '121'], ['Valoración positiva', '94,21%'], ['Logros', '16']],
    ready: '¿Listo para resolver el caso de Carrion City?', readyText: 'Desde la primera escena del crimen hasta la revelación final, usa nuestras guías y soluciones de puzles para seguir el rastro del asesino sin perder pruebas importantes.', readyPrimary: 'Leer la guía para principiantes', readySecondary: 'Jugar en Steam', language: 'Nota sobre el idioma del juego'
  }
} as const;

export default function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const Intro = homeContent[locale];
  const officialLabels: Record<string, string> = { steam: t.steam, discord: t.discord, youtube: t.youtube, twitter: t.twitter, community: t.community };
  return (
    <SiteShell locale={locale}>
      <section className="hero skin-hero">
        <Image src="/hero.jpg" alt="The Skin Stapler official promotional artwork" fill priority sizes="100vw" className="hero-image pixel-hero" />
        <div className="hero-overlay skin-overlay" />
        <div className="container hero-content">
          <div className="update-badge"><span />{t.eyebrow}</div>
          <h1>{t.title}<br /><em>Wiki</em></h1>
          <p>{t.hero}</p>
          <div className="button-row hero-buttons"><Link href={localizePath(locale, '/guides/beginner')} className="btn-primary">{t.primary}</Link><Link href={localizePath(locale, '/guides#puzzles')} className="btn-secondary">{t.secondary}</Link><Link href={localizePath(locale, '/guides#achievements')} className="btn-ghost">{t.tertiary}</Link></div>
          <a className="trailer-link" href={siteConfig.trailer} target="_blank" rel="noreferrer">▶ {t.trailer}</a>
          <div className="stats-grid skin-stats">{t.stats.map((stat) => <div key={stat}><strong>{stat.split(' ')[0]}</strong><span>{stat.substring(stat.indexOf(' ') + 1)}</span></div>)}</div>
        </div>
      </section>

      <div className="container home-layout section">
        <div className="home-primary">
          <section><div className="section-heading left-heading"><span className="eyebrow">{t.startEyebrow}</span><h2 className="section-title">{t.startTitle}</h2></div><div className="start-grid">{startCards[locale].map((card) => <Link className="card start-card" key={card.number} href={card.number === '1' ? localizePath(locale, '/guides/beginner') : localizePath(locale, `/guides#${card.id}`)}><span>{card.number}</span><h3>{card.title}</h3><p>{card.description}</p></Link>)}</div></section>

          <section className="about-section"><h2 className="section-title">{t.about}</h2><div className="home-mdx"><Intro /></div><div className="facts-grid">{t.facts.map(([label, value]) => <div className="card fact-card" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><Link href={localizePath(locale, '/guides')} className="btn-secondary">{t.explore}</Link></section>
        </div>

        <aside className="home-sidebar" aria-label="The Skin Stapler resources">
          <section className="card sidebar-card codes-card"><span className="eyebrow">{t.codeTitle}</span><p>{t.codeText}</p><div className="code-list">{sidebarCodes.map((code, index) => <div key={index}><code>{code}</code></div>)}</div></section>
          <section className="card sidebar-card"><h2>{t.official}</h2><div className="official-links">{officialLinks.map((link) => <a key={link.key} href={link.href} target="_blank" rel="noreferrer"><span>{officialLabels[link.key]}</span><b>↗</b></a>)}</div></section>
          <section className="card sidebar-card language-note"><h2>{t.language}</h2><p>{localeMeta[locale].gameLanguageNote}</p></section>
        </aside>
      </div>

      <section className="cta-strip"><div className="container narrow"><h2 className="section-title">{t.ready}</h2><p>{t.readyText}</p><div className="button-row"><Link href={localizePath(locale, '/guides/beginner')} className="btn-primary">{t.readyPrimary}</Link><a href={siteConfig.steam} target="_blank" rel="noreferrer" className="btn-secondary">{t.readySecondary}</a></div></div></section>
    </SiteShell>
  );
}
