import type { Locale } from './i18n';

/**
 * Homepage quick-answer FAQ. Every answer is limited to facts verified against
 * official store pages or published full-game playthroughs; the same content is
 * rendered as visible FAQ cards and as FAQPage JSON-LD on each locale home.
 */
export const homeFaq: Record<Locale, Array<{ question: string; answer: string }>> = {
  en: [
    { question: 'What is The Skin Stapler?', answer: 'A single-player PSX-style grindhouse horror adventure developed by Tainted Pact and published by Assemble Entertainment. Detective Dick Slater and rookie Robbie Knox investigate a killer in 1980s Carrion City, while other chapters follow doomed civilians.' },
    { question: 'When was The Skin Stapler released?', answer: 'The full Windows PC version launched on August 6, 2026, on Steam and GOG. A separate free demo with three sections arrived earlier, on January 30, 2026.' },
    { question: 'Which platforms is the game on?', answer: 'Windows PC only, through Steam and GOG. No PlayStation, Xbox, Switch, mobile, or macOS version is announced on the official pages.' },
    { question: 'Does the game have multiplayer?', answer: 'No. It is a single-player story with several playable viewpoints, and no co-op or multiplayer mode is listed by the official stores.' },
    { question: 'How long is the game?', answer: 'It is an authored horror feature designed to be completed in one sitting. Published full runs take about three hours; exploration and achievement hunting can extend that.' },
    { question: 'Is theskinstapler.com an official site?', answer: 'No. This is an independent fan wiki with no affiliation to Tainted Pact, Assemble Entertainment, Valve, or GOG. Official store pages remain the source of release facts.' }
  ],
  de: [
    { question: 'Was ist The Skin Stapler?', answer: 'Ein Einzelspieler-Horrorabenteuer im PSX- und Grindhouse-Stil von Tainted Pact, veröffentlicht von Assemble Entertainment. Detective Dick Slater und Robbie Knox ermitteln in einem verfallenden Carrion City, andere Kapitel folgen Zivilisten.' },
    { question: 'Wann ist The Skin Stapler erschienen?', answer: 'Die Vollversion für Windows PC erschien am 6. August 2026 auf Steam und GOG. Eine separate kostenlose Demo mit drei Abschnitten kam davor am 30. Januar 2026.' },
    { question: 'Für welche Plattformen ist das Spiel erhältlich?', answer: 'Offiziell nur für Windows PC über Steam und GOG. Eine PlayStation-, Xbox-, Switch-, Mobil- oder macOS-Version ist auf den offiziellen Seiten nicht angekündigt.' },
    { question: 'Gibt es einen Mehrspielermodus?', answer: 'Nein. Das Spiel ist eine Einzelspielergeschichte mit mehreren spielbaren Perspektiven; die offiziellen Stores nennen keinen Koop- oder Mehrspielermodus.' },
    { question: 'Wie lange dauert das Spiel?', answer: 'Es ist eine kurze, erzählte Horrorgeschichte, die laut offizieller Beschreibung in einer Sitzung zu schaffen ist. Ausgewertete Komplettdurchläufe dauern rund drei Stunden.' },
    { question: 'Ist theskinstapler.com eine offizielle Seite?', answer: 'Nein. Dies ist eine unabhängige Fan-Wiki ohne Verbindung zu Tainted Pact, Assemble Entertainment, Valve oder GOG. Maßgeblich bleiben die offiziellen Store-Seiten.' }
  ],
  'pt-br': [
    { question: 'O que é The Skin Stapler?', answer: 'Uma aventura de terror para um jogador em estilo PSX e grindhouse desenvolvida por Tainted Pact e publicada pela Assemble Entertainment. O detetive Dick Slater e Robbie Knox investigam um assassino em Carrion City, enquanto outros capítulos seguem civis condenados.' },
    { question: 'Quando The Skin Stapler foi lançado?', answer: 'A versão completa para Windows PC foi lançada em 6 de agosto de 2026, na Steam e na GOG. Uma demo gratuita separada, com três seções, chegou antes, em 30 de janeiro de 2026.' },
    { question: 'Em quais plataformas o jogo está disponível?', answer: 'Apenas Windows PC, pela Steam e pela GOG. Nenhuma versão para PlayStation, Xbox, Switch, celular ou macOS foi anunciada nas páginas oficiais.' },
    { question: 'O jogo tem multiplayer?', answer: 'Não. É uma história single-player com vários pontos de vista jogáveis; as lojas oficiais não listam modo cooperativo nem multiplayer.' },
    { question: 'Quanto tempo dura o jogo?', answer: 'É uma história de terror autoral, feita para ser concluída em uma sessão. Os vídeos de partidas completas publicados duram cerca de três horas; exploração e conquistas podem aumentar isso.' },
    { question: 'O theskinstapler.com é um site oficial?', answer: 'Não. É uma wiki independente feita por fãs, sem afiliação com Tainted Pact, Assemble Entertainment, Valve ou GOG.' }
  ],
  es: [
    { question: '¿Qué es The Skin Stapler?', answer: 'Una aventura de terror para un jugador con estética PSX y grindhouse, creada por Tainted Pact y publicada por Assemble Entertainment. El detective Dick Slater y Robbie Knox investigan a un asesino en Carrion City, y otros capítulos siguen a civiles condenados.' },
    { question: '¿Cuándo salió The Skin Stapler?', answer: 'La versión completa para Windows PC se lanzó el 6 de agosto de 2026 en Steam y GOG. Una demo gratuita separada, con tres secciones, llegó antes, el 30 de enero de 2026.' },
    { question: '¿En qué plataformas está el juego?', answer: 'Solo Windows PC, a través de Steam y GOG. Las páginas oficiales no anuncian versiones para PlayStation, Xbox, Switch, móvil ni macOS.' },
    { question: '¿El juego tiene multijugador?', answer: 'No. Es una historia para un jugador con varios puntos de vista jugables; las tiendas oficiales no listan modo cooperativo ni multijugador.' },
    { question: '¿Cuánto dura el juego?', answer: 'Es una historia de terror con guion cerrado, pensada para completarse en una sesión. Las partidas completas publicadas rondan las tres horas; la exploración y los logros pueden alargarla.' },
    { question: '¿theskinstapler.com es un sitio oficial?', answer: 'No. Es una wiki independiente hecha por fans, sin afiliación con Tainted Pact, Assemble Entertainment, Valve ni GOG.' }
  ]
};
