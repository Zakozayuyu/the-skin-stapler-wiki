import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { availableContentPath, localeMeta, localizePath } from '@/lib/i18n';
import { officialLinks, startCards } from '@/lib/data';
import { gameFacts } from '@/lib/game-facts';
import { articleMedia } from '@/lib/article-media';
import { homeContent } from '@/lib/content';
import { homeFaq } from '@/lib/home-faq';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import NativeBannerAd from './NativeBannerAd';
import SiteShell from './SiteShell';

const copy = {
  en: {
    eyebrow: 'Fan-Made Grindhouse Horror Wiki', title: 'The Skin Stapler',
    hero: 'Track a grotesque serial killer through the neon-soaked decay of 1980s Carrion City as burned-out detective Dick Slater and a cast of other playable characters. Investigate crime scenes, solve grisly puzzles, survive ordinary shifts gone wrong, and follow the distorted audio tapes left behind by The Skin Stapler.',
    primary: 'Start Beginner Guide', secondary: 'Browse Characters', tertiary: 'Explore All Guides', trailer: 'Official Release Trailer',
    startEyebrow: 'Start Here', startTitle: 'Your Carrion City Journey', about: 'What is The Skin Stapler?', explore: 'Explore All Guides',
    mechEyebrow: 'Inside the Investigation', mechTitle: 'Core Mechanics',
    mechIntro: 'Four systems define a run through Carrion City: evidence-based crime-scene investigation, the killer\u2019s distorted audio tapes, multiple playable perspectives, and a grindhouse presentation built on PSX-style visuals and dark B-movie humor.',
    official: 'Official Links', steam: 'Official game page', discord: 'Tainted Pact Games Discord', youtube: 'Tainted Pact Games YouTube', twitter: 'Tainted Pact on X', community: 'Steam Discussions',
    ready: 'Ready to Survive Carrion City?', readyText: 'Follow the case without losing the trail, and use spoiler-aware help when a crime scene, tape, chapter objective, or achievement stops your run. Our guides separate confirmed game facts from speculation so you can decide how much of the mystery you want revealed.', readyPrimary: 'Read the Beginner Guide', readySecondary: 'Play The Skin Stapler on Steam', language: 'Game language note',
    faqEyebrow: 'Quick answers', faqTitle: 'Frequently Asked Questions'
  },
  de: {
    eyebrow: 'Fan-erstelltes Grindhouse-Horror-Wiki', title: 'The Skin Stapler',
    hero: 'Verfolge als ausgebrannter Detective Dick Slater gemeinsam mit anderen spielbaren Figuren einen grotesken Serienmörder durch das neondurchtränkte, verfallende Carrion City der 1980er. Untersuche Tatorte, löse grausige Rätsel, überlebe Alltagsschichten, die außer Kontrolle geraten, und folge den verzerrten Audiokassetten, die The Skin Stapler hinterlassen hat.',
    primary: 'Einsteiger-Guide starten', secondary: 'Figuren ansehen', tertiary: 'Alle Guides ansehen', trailer: 'Offizieller Release-Trailer',
    startEyebrow: 'Hier starten', startTitle: 'Deine Carrion-City-Reise', about: 'Was ist The Skin Stapler?', explore: 'Alle Guides ansehen',
    mechEyebrow: 'In der Ermittlung', mechTitle: 'Kernmechaniken',
    mechIntro: 'Vier Systeme prägen jeden Lauf durch Carrion City: die beweisbasierte Tatort-Ermittlung, die verzerrten Audiokassetten des Mörders, mehrere spielbare Perspektiven und eine Grindhouse-Inszenierung mit PSX-Optik und schwarzem B-Movie-Humor.',
    official: 'Offizielle Links', steam: 'Offizielle Spielseite', discord: 'Tainted Pact Games Discord', youtube: 'Tainted Pact Games YouTube', twitter: 'Tainted Pact auf X', community: 'Steam-Diskussionen',
    ready: 'Bereit, in Carrion City zu überleben?', readyText: 'Verfolge den Fall, ohne die Spur zu verlieren, und nutze spoilerbewusste Hilfe, wenn dich ein Tatort, eine Kassette, ein Kapitelziel oder ein Erfolg aufhält. Unsere Guides trennen bestätigte Spielfakten von Spekulation, damit du entscheidest, wie viel vom Rätsel du lüften willst.', readyPrimary: 'Einsteiger-Guide lesen', readySecondary: 'The Skin Stapler auf Steam spielen', language: 'Hinweis zur Spielsprache',
    faqEyebrow: 'Kurze Antworten', faqTitle: 'Häufige Fragen'
  },
  'pt-br': {
    eyebrow: 'Wiki de horror grindhouse feita por fãs', title: 'The Skin Stapler',
    hero: 'Rastreie um assassino em série grotesco pela decadência banhada em neon de Carrion City nos anos 1980 como o detetive desgastado Dick Slater e um elenco de outros personagens jogáveis. Investigue cenas de crime, resolva puzzles sombrios, sobreviva a turnês comuns que dão errado e siga as fitas de áudio distorcidas deixadas pelo Skin Stapler.',
    primary: 'Começar guia para iniciantes', secondary: 'Ver personagens', tertiary: 'Explorar todos os guias', trailer: 'Trailer oficial de lançamento',
    startEyebrow: 'Comece aqui', startTitle: 'Sua jornada em Carrion City', about: 'O que é The Skin Stapler?', explore: 'Explorar todos os guias',
    mechEyebrow: 'Dentro da investigação', mechTitle: 'Mecânicas principais',
    mechIntro: 'Quatro sistemas definem cada partida em Carrion City: investigação de cenas de crime baseada em provas, as fitas de áudio distorcidas do assassino, múltiplas perspectivas jogáveis e uma apresentação grindhouse com visual estilo PSX e humor negro de filme B.',
    official: 'Links oficiais', steam: 'Página oficial do jogo', discord: 'Discord da Tainted Pact Games', youtube: 'YouTube da Tainted Pact Games', twitter: 'Tainted Pact no X', community: 'Discussões da Steam',
    ready: 'Pronto para sobreviver em Carrion City?', readyText: 'Acompanhe o caso sem perder o rastro e use ajuda com avisos de spoiler quando uma cena de crime, fita, objetivo de capítulo ou conquista travar sua partida. Nossos guias separam fatos confirmados do jogo de especulações, para você decidir quanto do mistério quer revelar.', readyPrimary: 'Ler o guia para iniciantes', readySecondary: 'Jogar The Skin Stapler na Steam', language: 'Nota sobre o idioma do jogo',
    faqEyebrow: 'Respostas rápidas', faqTitle: 'Perguntas frequentes'
  },
  es: {
    eyebrow: 'Wiki de terror grindhouse hecha por fans', title: 'The Skin Stapler',
    hero: 'Persigue a un asesino en serie grotesco por la decadencia bañada en neón de Carrion City en los años ochenta como el agotado detective Dick Slater y un elenco de otros personajes jugables. Investiga escenas del crimen, resuelve puzles macabros, sobrevive a turnos cotidianos que salen mal y sigue las cintas de audio distorsionadas que dejó The Skin Stapler.',
    primary: 'Comenzar guía para principiantes', secondary: 'Ver personajes', tertiary: 'Explorar todas las guías', trailer: 'Tráiler oficial de lanzamiento',
    startEyebrow: 'Empieza aquí', startTitle: 'Tu viaje por Carrion City', about: '¿Qué es The Skin Stapler?', explore: 'Explorar todas las guías',
    mechEyebrow: 'Dentro de la investigación', mechTitle: 'Mecánicas principales',
    mechIntro: 'Cuatro sistemas definen cada partida en Carrion City: la investigación de escenas del crimen basada en pruebas, las cintas de audio distorsionadas del asesino, múltiples perspectivas jugables y una presentación grindhouse con estética estilo PSX y humor negro de cine B.',
    official: 'Enlaces oficiales', steam: 'Página oficial del juego', discord: 'Discord de Tainted Pact Games', youtube: 'YouTube de Tainted Pact Games', twitter: 'Tainted Pact en X', community: 'Discusiones de Steam',
    ready: '¿Listo para sobrevivir en Carrion City?', readyText: 'Sigue el caso sin perder el rastro y usa ayuda con avisos de spoiler cuando una escena del crimen, cinta, objetivo de capítulo o logro detenga tu partida. Nuestras guías separan los hechos confirmados del juego de las especulaciones, para que decidas cuánto del misterio quieres revelar.', readyPrimary: 'Leer la guía para principiantes', readySecondary: 'Jugar The Skin Stapler en Steam', language: 'Nota sobre el idioma del juego',
    faqEyebrow: 'Respuestas rápidas', faqTitle: 'Preguntas frecuentes'
  }
} as const;

/** Research-frozen hero stat strings (display only; not label/value pairs). */
const heroStats: Record<Locale, string[]> = {
  en: ['Released Aug 6, 2026', gameFacts.steamSalesMilestone.value + ' Steam Copies Sold', gameFacts.steamReviews.value + ' Steam Reviews', String(gameFacts.steamAchievements.value) + ' Steam Achievements', 'Single-Player Horror'],
  de: ['Veröffentlicht: 6. Aug. 2026', gameFacts.steamSalesMilestone.value + ' verkaufte Steam-Kopien', gameFacts.steamReviews.value.replace('%', ' %') + ' Steam-Bewertungen', String(gameFacts.steamAchievements.value) + ' Steam-Erfolge', 'Einzelspieler-Horror'],
  'pt-br': ['Lançado em 6 de ago. de 2026', gameFacts.steamSalesMilestone.value + ' cópias vendidas na Steam', gameFacts.steamReviews.value + ' de avaliações na Steam', String(gameFacts.steamAchievements.value) + ' conquistas da Steam', 'Horror para um jogador'],
  es: ['Lanzado el 6 de ago. de 2026', gameFacts.steamSalesMilestone.value + ' copias vendidas en Steam', gameFacts.steamReviews.value + ' de reseñas en Steam', String(gameFacts.steamAchievements.value) + ' logros de Steam', 'Terror para un jugador']
};

/** 8-fact grid (research aboutGame.stats): label/value per locale. */
const stableFacts: Record<Locale, Array<[string, string]>> = {
  en: [['Developer', gameFacts.developer.value], ['Publisher', gameFacts.publisher.value], ['Platform', gameFacts.platform.value], ['Genre', 'PSX-Style Horror Adventure'], ['Steam Reviews', gameFacts.steamReviews.value], ['Steam Achievements', String(gameFacts.steamAchievements.value)], ['Steam Sales Milestone', gameFacts.steamSalesMilestone.value], ['Language', gameFacts.officialAudioLanguage.value]],
  de: [['Entwickler', gameFacts.developer.value], ['Publisher', gameFacts.publisher.value], ['Plattform', gameFacts.platform.value], ['Genre', 'PSX-Horrorabenteuer'], ['Steam-Bewertungen', gameFacts.steamReviews.value], ['Steam-Erfolge', String(gameFacts.steamAchievements.value)], ['Steam-Verkaufszahlen', gameFacts.steamSalesMilestone.value], ['Sprache', gameFacts.officialAudioLanguage.value]],
  'pt-br': [['Desenvolvedora', gameFacts.developer.value], ['Publicadora', gameFacts.publisher.value], ['Plataforma', gameFacts.platform.value], ['Gênero', 'Aventura de terror estilo PSX'], ['Avaliações da Steam', gameFacts.steamReviews.value], ['Conquistas da Steam', String(gameFacts.steamAchievements.value)], ['Marco de vendas Steam', gameFacts.steamSalesMilestone.value], ['Idioma', gameFacts.officialAudioLanguage.value]],
  es: [['Desarrolladora', gameFacts.developer.value], ['Editora', gameFacts.publisher.value], ['Plataforma', gameFacts.platform.value], ['Género', 'Aventura de terror estilo PSX'], ['Reseñas de Steam', gameFacts.steamReviews.value], ['Logros de Steam', String(gameFacts.steamAchievements.value)], ['Hito de ventas Steam', gameFacts.steamSalesMilestone.value], ['Idioma', gameFacts.officialAudioLanguage.value]]
};

/** 4 official-image mechanic cards. Each uses a distinct source_asset_id (no reuse). */
const mechanics = {
  en: { links: [
    ['/walkthrough', 'police', 'Crime-Scene Investigation', 'Examine crime scenes, collect evidence and piece together the Carrion City case in first person.'],
    ['/guides', 'tape', 'Distorted Audio Tapes', "Follow the killer's distorted tapes that taunt the police and point to something deeper beneath the city."],
    ['/characters', 'chase', 'Multiple Playable Perspectives', "Switch from Dick Slater's investigation into other characters surviving ordinary shifts gone wrong."],
    ['/guides/the-skin-stapler-gameplay', 'stage', 'Grindhouse Presentation', 'PSX-style visuals, full English voice acting and intentionally dark B-movie humor shape every chapter.']
  ] },
  de: { links: [
    ['/walkthrough', 'police', 'Tatort-Ermittlung', 'Untersuche Tatorte, sammle Beweise und rekonstruiere den Fall aus Carrion City in der Egoperspektive.'],
    ['/guides', 'tape', 'Verzerrte Audiokassetten', 'Verfolge die verzerrten Kassetten des Mörders, die die Polizei verspotten und auf etwas Tieferes unter der Stadt hinweisen.'],
    ['/characters', 'chase', 'Mehrere spielbare Perspektiven', "Wechsle von Dick Slaters Ermittlung zu anderen Figuren, die Alltagsschichten überleben müssen, die außer Kontrolle geraten."],
    ['/guides/the-skin-stapler-gameplay', 'stage', 'Grindhouse-Inszenierung', 'PSX-Optik, vollständige englische Sprachausgabe und absichtlich schwarzer B-Movie-Humor prägen jedes Kapitel.']
  ] },
  'pt-br': { links: [
    ['/walkthrough', 'police', 'Investigação de cena de crime', 'Examine cenas de crime, colete provas e reconstrua o caso de Carrion City em primeira pessoa.'],
    ['/guides', 'tape', 'Fitas de áudio distorcidas', 'Siga as fitas distorcidas do assassino que provocam a polícia e apontam para algo mais profundo sob a cidade.'],
    ['/characters', 'chase', 'Múltiplas perspectivas jogáveis', 'Alterne da investigação de Dick Slater para outros personagens que precisam sobreviver a turnês comuns que dão errado.'],
    ['/guides/the-skin-stapler-gameplay', 'stage', 'Apresentação grindhouse', 'Visual estilo PSX, dublagem completa em inglês e humor negro proposital de filme B moldam cada capítulo.']
  ] },
  es: { links: [
    ['/walkthrough', 'police', 'Investigación de escenas del crimen', 'Examina las escenas del crimen, recoge pruebas y reconstruye el caso de Carrion City en primera persona.'],
    ['/guides', 'tape', 'Cintas de audio distorsionadas', 'Sigue las cintas distorsionadas del asesino que se burlan de la policía y apuntan a algo más profundo bajo la ciudad.'],
    ['/characters', 'chase', 'Múltiples perspectivas jugables', 'Alterna entre la investigación de Dick Slater y otros personajes que deben sobrevivir a turnos cotidianos que salen mal.'],
    ['/guides/the-skin-stapler-gameplay', 'stage', 'Presentación grindhouse', 'Estética estilo PSX, voces completas en inglés y humor negro intencional de cine B moldean cada capítulo.']
  ] }
} as const;

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

/** Route map for start cards (research URLs mapped to existing project routes). */
const startCardRoutes: Record<string, string> = {
  beginner: '/guides/beginner',
  walkthrough: '/walkthrough',
  characters: '/characters',
  puzzles: '/guides/the-skin-stapler-puzzle-solutions'
};

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
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero-mobile.webp" type="image/webp" width={640} height={858} />
          <img src="/hero-hd.webp" alt="The Skin Stapler promotional artwork featuring the killer, Dick Slater, and Robbie Knox" width={1834} height={858} className="hero-image pixel-hero" fetchPriority="high" decoding="async" />
        </picture>
        <div className="hero-shade skin-veil" />
        <div className="container hero-content">
          <div className="update-badge"><span />{t.eyebrow}</div>
          <h1>{t.title}</h1>
          <p>{t.hero}</p>
          <div className="button-row hero-buttons"><Link href={localizePath(locale, '/guides/beginner')} className="btn-primary">{t.primary}</Link><Link href={localizePath(locale, '/characters')} className="btn-secondary">{t.secondary}</Link><Link href={localizePath(locale, '/guides')} className="btn-ghost">{t.tertiary}</Link></div>
          <a className="trailer-link" href={siteConfig.trailer} target="_blank" rel="noopener noreferrer">▶ {t.trailer}</a>
          <div className="stats-grid skin-stats">{heroStats[locale].map((stat) => <div key={stat}><strong>{stat}</strong></div>)}</div>
        </div>
      </section>

      <div className="container home-layout section">
        <div className="home-primary">
          <section><div className="section-heading left-heading"><span className="eyebrow">{t.startEyebrow}</span><h2 className="section-title">{t.startTitle}</h2></div><div className="start-grid">{startCards[locale].map((card) => <Link className="card start-card" key={card.number} href={localizePath(locale, startCardRoutes[card.id] ?? '/guides')}><span>{card.number}</span><h3>{card.title}</h3><p>{card.description}</p></Link>)}</div></section>

          <section className="mechanics-section"><div className="section-heading left-heading"><span className="eyebrow">{t.mechEyebrow}</span><h2 className="section-title">{t.mechTitle}</h2></div><p className="section-intro">{t.mechIntro}</p><div className="mechanics-grid">{mechanics[locale].links.map(([href, mediaKey, title, description]) => { const media = articleMedia[mediaKey as keyof typeof articleMedia]; return <Link className="card mechanic-card" key={mediaKey} href={availableContentPath(locale, href)}><div className="mechanic-media"><Image src={media.src} alt={media.description[locale]} width={media.width} height={media.height} sizes="(max-width: 760px) 100vw, 50vw" loading="lazy" /></div><div className="mechanic-body"><h3>{title}</h3><p>{description}</p></div></Link>; })}</div></section>

          <section className="popular-guides"><div className="section-heading left-heading"><span className="eyebrow">{popularGuides[locale].eyebrow}</span><h2 className="section-title">{popularGuides[locale].title}</h2></div><div className="start-grid">{popularGuides[locale].links.map(([href, title, description]) => <Link className="card popular-guide-card" key={href} href={availableContentPath(locale, href)}><h3>{title}</h3><p>{description}</p><b>→</b></Link>)}</div></section>

          <NativeBannerAd />

          <section className="about-section"><h2 className="section-title">{t.about}</h2><div className="home-mdx"><Intro /></div><div className="facts-grid">{stableFacts[locale].map(([label, value]) => <div className="card fact-card" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><Link href={localizePath(locale, '/guides')} className="btn-secondary">{t.explore}</Link></section>

          <section className="about-section home-faq-section"><div className="section-heading left-heading"><span className="eyebrow">{t.faqEyebrow}</span><h2 className="section-title">{t.faqTitle}</h2></div><div className="faq-cards">{homeFaq[locale].map((item) => <div className="card" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</div></section>
        </div>

        <aside className="home-sidebar" aria-label="The Skin Stapler resources">
          <section className="card sidebar-card"><h2>{t.official}</h2><div className="official-links">{officialLinks.map((link) => <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer"><span>{officialLabels[link.key]}</span><b>↗</b></a>)}</div></section>
          <section className="card sidebar-card language-note"><h2>{t.language}</h2><p>{localeMeta[locale].gameLanguageNote}</p></section>
        </aside>
      </div>

      <section className="cta-strip"><div className="container narrow"><h2 className="section-title">{t.ready}</h2><p>{t.readyText}</p><div className="button-row"><Link href={localizePath(locale, '/guides/beginner')} className="btn-primary">{t.readyPrimary}</Link><a href={siteConfig.steam} target="_blank" rel="noopener noreferrer" className="btn-secondary">{t.readySecondary}</a></div></div></section>
    </SiteShell>
  );
}
