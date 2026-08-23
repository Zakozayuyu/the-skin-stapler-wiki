import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { availableContentPath, localeMeta, localizePath } from '@/lib/i18n';
import { officialLinks, startCards } from '@/lib/data';
import { gameFacts } from '@/lib/game-facts';
import { homeContent } from '@/lib/content';
import { homeFaq } from '@/lib/home-faq';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import NativeBannerAd from './NativeBannerAd';
import SiteShell from './SiteShell';

const copy = {
  en: {
    eyebrow: 'Independent Fan-Made Horror Guide', title: 'The Skin Stapler',
    hero: "Hunt a serial killer through the neon-lit decay of Carrion City as Detective Dick Slater and a cast of doomed civilians. Investigate grisly scenes, solve puzzles, survive dangerous encounters, and uncover the truth behind the killer's tapes.",
    primary: 'Start Spoiler-Free Guide', secondary: 'View Puzzle Solutions', tertiary: 'Find All Achievements', trailer: 'Official Gameplay Trailer',
    startEyebrow: 'Start Here', startTitle: 'Your Carrion City Investigation', about: 'What is The Skin Stapler?', explore: 'Explore All Guides',
    official: 'Official Links', steam: 'Official game page', discord: 'Tainted Pact Games Discord', youtube: 'Assemble Entertainment YouTube', twitter: 'Tainted Pact on X', community: 'Steam Discussions',
    ready: 'Ready to Solve the Carrion City Case?', readyText: "From your first crime scene to the final revelation, use our walkthroughs and puzzle guides to stay on the killer's trail without missing key evidence.", readyPrimary: 'Read the Beginner Guide', readySecondary: 'Play on Steam', language: 'Game language note',
    faqEyebrow: 'Quick answers', faqTitle: 'The Skin Stapler FAQ'
  },
  de: {
    eyebrow: 'Unabhängiger, fanerstellter Horror-Guide', title: 'The Skin Stapler',
    hero: 'Jage als Detective Dick Slater und mit einer Gruppe dem Untergang geweihter Zivilisten einen Serienmörder durch das neonbeleuchtete, verfallende Carrion City. Untersuche grausige Tatorte, löse Rätsel, überlebe gefährliche Begegnungen und decke die Wahrheit hinter den Bändern des Mörders auf.',
    primary: 'Spoilerarmen Guide starten', secondary: 'Rätsellösungen ansehen', tertiary: 'Alle Erfolge finden', trailer: 'Offizieller Gameplay-Trailer',
    startEyebrow: 'Hier starten', startTitle: 'Deine Ermittlung in Carrion City', about: 'Was ist The Skin Stapler?', explore: 'Alle Guides ansehen',
    official: 'Offizielle Links', steam: 'Offizielle Spielseite', discord: 'Tainted Pact Games Discord', youtube: 'Assemble Entertainment YouTube', twitter: 'Tainted Pact auf X', community: 'Steam-Diskussionen',
    ready: 'Bereit, den Fall von Carrion City zu lösen?', readyText: 'Nutze unsere Komplettlösungen und Rätsel-Guides vom ersten Tatort bis zur letzten Enthüllung, ohne wichtige Beweise zu verpassen.', readyPrimary: 'Einsteiger-Guide lesen', readySecondary: 'Auf Steam spielen', language: 'Hinweis zur Spielsprache',
    faqEyebrow: 'Kurze Antworten', faqTitle: 'The Skin Stapler FAQ'
  },
  'pt-br': {
    eyebrow: 'Guia de horror independente feito por fãs', title: 'The Skin Stapler',
    hero: 'Cace um assassino em série pela decadência iluminada por neon de Carrion City como o detetive Dick Slater e um elenco de civis condenados. Investigue cenas macabras, resolva puzzles, sobreviva a encontros perigosos e descubra a verdade por trás das fitas do assassino.',
    primary: 'Começar guia sem spoilers', secondary: 'Ver soluções de puzzles', tertiary: 'Encontrar todas as conquistas', trailer: 'Trailer oficial de gameplay',
    startEyebrow: 'Comece aqui', startTitle: 'Sua investigação em Carrion City', about: 'O que é The Skin Stapler?', explore: 'Explorar todos os guias',
    official: 'Links oficiais', steam: 'Página oficial do jogo', discord: 'Discord da Tainted Pact Games', youtube: 'YouTube da Assemble Entertainment', twitter: 'Tainted Pact no X', community: 'Discussões da Steam',
    ready: 'Pronto para resolver o caso de Carrion City?', readyText: 'Da primeira cena do crime à revelação final, use nossos detonados e guias de puzzles para seguir o rastro do assassino sem perder provas importantes.', readyPrimary: 'Ler o guia para iniciantes', readySecondary: 'Jogar na Steam', language: 'Nota sobre o idioma do jogo',
    faqEyebrow: 'Respostas rápidas', faqTitle: 'FAQ sobre The Skin Stapler'
  },
  es: {
    eyebrow: 'Guía de terror independiente hecha por fans', title: 'The Skin Stapler',
    hero: 'Da caza a un asesino en serie por la decadencia iluminada con neón de Carrion City como el detective Dick Slater y un grupo de civiles condenados. Investiga escenas macabras, resuelve puzles, sobrevive a encuentros peligrosos y descubre la verdad tras las cintas del asesino.',
    primary: 'Empezar guía sin spoilers', secondary: 'Ver soluciones de puzles', tertiary: 'Encontrar todos los logros', trailer: 'Tráiler oficial de jugabilidad',
    startEyebrow: 'Empieza aquí', startTitle: 'Tu investigación en Carrion City', about: '¿Qué es The Skin Stapler?', explore: 'Explorar todas las guías',
    official: 'Enlaces oficiales', steam: 'Página oficial del juego', discord: 'Discord de Tainted Pact Games', youtube: 'YouTube de Assemble Entertainment', twitter: 'Tainted Pact en X', community: 'Discusiones de Steam',
    ready: '¿Listo para resolver el caso de Carrion City?', readyText: 'Desde la primera escena del crimen hasta la revelación final, usa nuestras guías y soluciones de puzles para seguir el rastro del asesino sin perder pruebas importantes.', readyPrimary: 'Leer la guía para principiantes', readySecondary: 'Jugar en Steam', language: 'Nota sobre el idioma del juego',
    faqEyebrow: 'Respuestas rápidas', faqTitle: 'FAQ de The Skin Stapler'
  }
} as const;

const heroStats: Record<Locale, Array<[string, string]>> = {
  en: [['Released', 'Aug 6, 2026'], [gameFacts.platform.value, 'Platform'], [gameFacts.developer.value, 'Developer'], [gameFacts.stores.value.join(' + '), 'Official Stores'], [String(gameFacts.steamAchievements.value), 'Achievements']],
  de: [['Veröffentlicht', '6. Aug. 2026'], [gameFacts.platform.value, 'Plattform'], [gameFacts.developer.value, 'Entwickler'], [gameFacts.stores.value.join(' + '), 'Offizielle Shops'], [String(gameFacts.steamAchievements.value), 'Erfolge']],
  'pt-br': [['Lançado', '6 ago. 2026'], [gameFacts.platform.value, 'Plataforma'], [gameFacts.developer.value, 'Desenvolvedora'], [gameFacts.stores.value.join(' + '), 'Lojas oficiais'], [String(gameFacts.steamAchievements.value), 'Conquistas']],
  es: [['Lanzamiento', '6 ago. 2026'], [gameFacts.platform.value, 'Plataforma'], [gameFacts.developer.value, 'Desarrolladora'], [gameFacts.stores.value.join(' + '), 'Tiendas oficiales'], [String(gameFacts.steamAchievements.value), 'Logros']]
};

const stableFacts: Record<Locale, Array<[string, string]>> = {
  en: [['Developer', gameFacts.developer.value], ['Publisher', gameFacts.publisher.value], ['Platform', gameFacts.platform.value], ['Stores', gameFacts.stores.value.join(' and ')], ['Mode', gameFacts.mode.value], ['Achievements', String(gameFacts.steamAchievements.value)]],
  de: [['Entwickler', gameFacts.developer.value], ['Publisher', gameFacts.publisher.value], ['Plattform', gameFacts.platform.value], ['Stores', gameFacts.stores.value.join(' und ')], ['Modus', 'Einzelspieler'], ['Erfolge', String(gameFacts.steamAchievements.value)]],
  'pt-br': [['Desenvolvedora', gameFacts.developer.value], ['Publicadora', gameFacts.publisher.value], ['Plataforma', gameFacts.platform.value], ['Lojas', gameFacts.stores.value.join(' e ')], ['Modo', 'Um jogador'], ['Conquistas', String(gameFacts.steamAchievements.value)]],
  es: [['Desarrolladora', gameFacts.developer.value], ['Editora', gameFacts.publisher.value], ['Plataforma', gameFacts.platform.value], ['Tiendas', gameFacts.stores.value.join(' y ')], ['Modo', 'Un jugador'], ['Logros', String(gameFacts.steamAchievements.value)]]
};

const popularGuides = {
  en: { eyebrow: 'Popular guides', title: 'Characters, Cast & Story', links: [
    ['/characters', 'All characters', 'Browse every confirmed character: role, location, and playable status.'],
    ['/guides/who-is-the-skin-stapler', 'Who is the Skin Stapler?', "Learn the killer's identity, motive, and evidence."],
    ['/guides/the-skin-stapler-voice-actors', 'The Skin Stapler voice actors', 'Match every confirmed performer to their character and role.'],
    ['/ending', 'The Skin Stapler ending', 'Understand the final confrontation with spoilers clearly marked.']
  ] },
  de: { eyebrow: 'Beliebte Guides', title: 'Figuren, Besetzung & Geschichte', links: [
    ['/characters', 'Alle Charaktere', 'Jeden bestätigten Charakter: Rolle, Ort und Spielbarkeit.'],
    ['/guides/the-skin-stapler-voice-actors', 'Sprecher und Rollen', 'Bestätigte englische Stimmen und ihre Figuren.'],
    ['/guides/the-skin-stapler-fefe', 'Wer ist Fefe?', 'Die erste spielbare Figur und ihre Sprecherin.'],
    ['/ending', 'Das Ende erklärt', 'Das Finale mit deutlich markierten Spoilern.']
  ] },
  'pt-br': { eyebrow: 'Guias populares', title: 'Personagens, elenco e história', links: [
    ['/characters', 'Todos os personagens', 'Navegue por cada personagem: papel, local e status jogável.'],
    ['/guides/the-skin-stapler-voice-actors', 'Elenco de voz', 'As vozes em inglês e seus papéis confirmados.'],
    ['/guides/the-skin-stapler-fefe', 'Quem é Fefe?', 'A personagem jogável da abertura e sua dubladora.'],
    ['/ending', 'Final explicado', 'O confronto final com spoilers bem sinalizados.']
  ] },
  es: { eyebrow: 'Guías populares', title: 'Personajes, reparto e historia', links: [
    ['/characters', 'Todos los personajes', 'Navegue por cada personaje: papel, ubicación y estado jugable.'],
    ['/guides/the-skin-stapler-voice-actors', 'Reparto de voces', 'Las voces en inglés y sus papeles confirmados.'],
    ['/guides/the-skin-stapler-fefe', '¿Quién es Fefe?', 'El personaje jugable de la apertura y su actriz de voz.'],
    ['/ending', 'Final explicado', 'El enfrentamiento final con spoilers bien señalados.']
  ] }
} as const;

export default function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const Intro = homeContent[locale];
  const officialLabels: Record<string, string> = { steam: t.steam, discord: t.discord, youtube: t.youtube, twitter: t.twitter, community: t.community };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: t.faqTitle,
    url: absoluteUrl(localizePath(locale, '/')),
    description: siteConfig.description,
    inLanguage: localeMeta[locale].language,
    mainEntity: homeFaq[locale].map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
  };
  return (
    <SiteShell locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="hero skin-hero">
        <Image src="/hero-hd.webp" alt="The Skin Stapler promotional artwork featuring the killer, Dick Slater, and Robbie Knox" fill priority sizes="100vw" className="hero-image pixel-hero" />
        <div className="hero-shade skin-overlay" />
        <div className="container hero-content">
          <div className="update-badge"><span />{t.eyebrow}</div>
          <h1>{t.title}<br /><em> Wiki</em></h1>
          <p>{t.hero}</p>
          <div className="button-row hero-buttons"><Link href={localizePath(locale, '/guides/beginner')} className="btn-primary">{t.primary}</Link><Link href={localizePath(locale, '/guides/the-skin-stapler-puzzle-solutions')} className="btn-secondary">{t.secondary}</Link><Link href={localizePath(locale, '/guides/the-skin-stapler-achievements')} className="btn-ghost">{t.tertiary}</Link></div>
          <a className="trailer-link" href={siteConfig.trailer} target="_blank" rel="noreferrer">▶ {t.trailer}</a>
          <div className="stats-grid skin-stats">{heroStats[locale].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>

      <div className="container home-layout section">
        <div className="home-primary">
          <section><div className="section-heading left-heading"><span className="eyebrow">{t.startEyebrow}</span><h2 className="section-title">{t.startTitle}</h2></div><div className="start-grid">{startCards[locale].map((card) => { const primaryRoute = card.id === 'walkthrough' ? '/walkthrough' : card.id === 'achievements' ? '/guides/the-skin-stapler-achievements' : card.id === 'puzzles' ? '/guides/the-skin-stapler-puzzle-solutions' : card.id === 'beginner' ? '/guides/beginner' : null; const href = primaryRoute ? localizePath(locale, primaryRoute) : localizePath(locale, `/guides#${card.id}`); return <Link className="card start-card" key={card.number} href={href}><span>{card.number}</span><h3>{card.title}</h3><p>{card.description}</p></Link>; })}</div></section>

          <section className="popular-guides"><div className="section-heading left-heading"><span className="eyebrow">{popularGuides[locale].eyebrow}</span><h2 className="section-title">{popularGuides[locale].title}</h2></div><div className="start-grid">{popularGuides[locale].links.map(([href, title, description]) => <Link className="card popular-guide-card" key={href} href={availableContentPath(locale, href)}><h3>{title}</h3><p>{description}</p><b>→</b></Link>)}</div></section>

          <NativeBannerAd />

          <section className="about-section"><h2 className="section-title">{t.about}</h2><div className="home-mdx"><Intro /></div><div className="facts-grid">{stableFacts[locale].map(([label, value]) => <div className="card fact-card" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><Link href={localizePath(locale, '/guides')} className="btn-secondary">{t.explore}</Link></section>

          <section className="about-section home-faq-section"><div className="section-heading left-heading"><span className="eyebrow">{t.faqEyebrow}</span><h2 className="section-title">{t.faqTitle}</h2></div><div className="faq-cards">{homeFaq[locale].map((item) => <div className="card" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</div></section>
        </div>

        <aside className="home-sidebar" aria-label="The Skin Stapler resources">
          <section className="card sidebar-card"><h2>{t.official}</h2><div className="official-links">{officialLinks.map((link) => <a key={link.key} href={link.href} target="_blank" rel="noreferrer"><span>{officialLabels[link.key]}</span><b>↗</b></a>)}</div></section>
          <section className="card sidebar-card language-note"><h2>{t.language}</h2><p>{localeMeta[locale].gameLanguageNote}</p></section>
        </aside>
      </div>

      <section className="cta-strip"><div className="container narrow"><h2 className="section-title">{t.ready}</h2><p>{t.readyText}</p><div className="button-row"><Link href={localizePath(locale, '/guides/beginner')} className="btn-primary">{t.readyPrimary}</Link><a href={siteConfig.steam} target="_blank" rel="noreferrer" className="btn-secondary">{t.readySecondary}</a></div></div></section>
    </SiteShell>
  );
}
