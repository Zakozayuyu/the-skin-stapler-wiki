import type { Locale } from './i18n';

export type SearchItem = {
  href: string;
  title: string;
  description: string;
  keywords: string[];
};

export const searchIndex: Record<Locale, SearchItem[]> = {
  en: [
    { href: '/', title: 'The Skin Stapler Wiki Home', description: 'Start with the main guide hub and official game facts.', keywords: ['home', 'game', 'wiki', 'carrion city'] },
    { href: '/wiki', title: 'The Skin Stapler Wiki', description: 'Browse walkthroughs, characters, cast, scenes and release information.', keywords: ['wiki', 'hub', 'facts', 'developer'] },
    { href: '/walkthrough', title: 'Full Game Walkthrough', description: 'Follow every chapter from Fefe’s apartment to The Flesh Pit.', keywords: ['walkthrough', 'chapter', 'route', 'progress', 'stuck'] },
    { href: '/ending', title: 'Ending Explained', description: 'Understand the killer, motive and final confrontation.', keywords: ['ending', 'finale', 'killer', 'elias crow', 'spoilers'] },
    { href: '/guides', title: 'All Game Guides', description: 'Browse every gameplay, character, release and platform guide.', keywords: ['guides', 'all pages', 'help'] },
    { href: '/guides/beginner', title: 'Beginner Guide', description: 'Verified starting information and first-route advice.', keywords: ['beginner', 'start', 'controls', 'tips'] },
    { href: '/guides/the-skin-stapler-gameplay', title: 'Gameplay Guide', description: 'Investigation, exploration, puzzles and playable viewpoints.', keywords: ['gameplay', 'combat', 'puzzles', 'first person'] },
    { href: '/guides/the-skin-stapler-hot-dog', title: 'Hot Dog Scene', description: 'The Quick Fix sequence with Hexy, explained.', keywords: ['hot dog', 'quick fix', 'hexy', 'customer', 'scene'] },
    { href: '/guides/the-skin-stapler-release-date', title: 'Release Date and Platforms', description: 'Full-game launch date, stores and supported platform.', keywords: ['release date', 'come out', 'platform', 'windows', 'gog'] },
    { href: '/guides/the-skin-stapler-demo', title: 'Free Demo Guide', description: 'Demo chapters, playtime and official download route.', keywords: ['demo', 'free', 'download', 'chapters'] },
    { href: '/guides/the-skin-stapler-steam', title: 'Steam Guide', description: 'Steam features, language support and PC requirements.', keywords: ['steam', 'requirements', 'achievements', 'language'] },
    { href: '/guides/the-skin-stapler-pc-download', title: 'Official PC Download Options', description: 'Safe Windows downloads through official stores.', keywords: ['pc download', 'windows', 'steam', 'gog', 'itch.io'] },
    { href: '/guides/the-skin-stapler-reddit', title: 'Reddit and Player Discussion', description: 'A careful summary of community reactions.', keywords: ['reddit', 'players', 'reviews', 'community', 'streamers'] },
    { href: '/guides/the-skin-stapler-voice-actors', title: 'Voice Actors and Full Cast', description: 'Match the confirmed English cast to their roles.', keywords: ['voice actors', 'voice cast', 'cast', 'actors', 'characters'] },
    { href: '/guides/the-skin-stapler-fefe', title: 'Fefe Character Guide', description: 'Fefe’s opening, performer and confirmed role.', keywords: ['fefe', 'covfefechan', 'apartment', 'character'] },
    { href: '/guides/the-skin-stapler-layna', title: 'Nurse Layna Character Guide', description: 'Layna Lazar and Lazar’s Blood Bank.', keywords: ['layna', 'nurse layna', 'layna lazar', 'blood bank'] },
    { href: '/guides/the-skin-stapler-scaroline', title: 'Scaroline Character Guide', description: 'Scaroline, her performer and Underworld VHS.', keywords: ['scaroline', 'underworld vhs', 'video store', 'character'] }
  ],
  de: [
    { href: '/de', title: 'The Skin Stapler Wiki – Startseite', description: 'Zentrale Übersicht mit Guides und bestätigten Spieldaten.', keywords: ['startseite', 'spiel', 'wiki', 'carrion city'] },
    { href: '/de/wiki', title: 'The Skin Stapler Wiki', description: 'Komplettlösung, Figuren, Sprecher, Szenen und Veröffentlichung.', keywords: ['wiki', 'übersicht', 'fakten', 'entwickler'] },
    { href: '/de/walkthrough', title: 'Komplette Komplettlösung', description: 'Alle Kapitel von Fefes Wohnung bis zum Flesh Pit.', keywords: ['komplettlösung', 'kapitel', 'weg', 'fortschritt'] },
    { href: '/de/ending', title: 'Das Ende erklärt', description: 'Identität, Motiv und letzte Konfrontation erklärt.', keywords: ['ende', 'finale', 'killer', 'elias crow', 'spoiler'] },
    { href: '/de/guides', title: 'Alle Spiel-Guides', description: 'Gameplay-, Figuren-, Release- und Plattform-Guides.', keywords: ['guides', 'hilfe', 'alle seiten'] },
    { href: '/de/guides/beginner', title: 'Einsteiger-Guide', description: 'Bestätigte Startinformationen und Tipps für den ersten Durchlauf.', keywords: ['einsteiger', 'start', 'steuerung', 'tipps'] },
    { href: '/de/guides/the-skin-stapler-hot-dog', title: 'Hot-Dog-Szene', description: 'Die Quick-Fix-Szene mit Hexy erklärt.', keywords: ['hot dog', 'quick fix', 'hexy', 'szene'] },
    { href: '/de/guides/the-skin-stapler-release-date', title: 'Release-Termin und Plattformen', description: 'Veröffentlichung, Shops und bestätigte Plattform.', keywords: ['release', 'erscheinungsdatum', 'windows', 'steam', 'gog'] },
    { href: '/de/guides/the-skin-stapler-voice-actors', title: 'Sprecher und komplette Besetzung', description: 'Bestätigte englische Stimmen und ihre Rollen.', keywords: ['sprecher', 'besetzung', 'voice cast', 'figuren'] },
    { href: '/de/guides/the-skin-stapler-fefe', title: 'Fefe – Figur und Sprecherin', description: 'Fefes Eröffnung, Sprecherin und bestätigte Rolle.', keywords: ['fefe', 'wohnung', 'figur', 'sprecherin'] }
  ],
  'pt-br': [
    { href: '/pt-br', title: 'The Skin Stapler Wiki – Início', description: 'Página central com guias e informações confirmadas.', keywords: ['início', 'jogo', 'wiki', 'carrion city'] },
    { href: '/pt-br/wiki', title: 'The Skin Stapler Wiki', description: 'Detonado, personagens, elenco, cenas e lançamento.', keywords: ['wiki', 'central', 'informações', 'desenvolvedora'] },
    { href: '/pt-br/walkthrough', title: 'Detonado completo', description: 'Todos os capítulos, do apartamento de Fefe ao Flesh Pit.', keywords: ['detonado', 'capítulos', 'rota', 'progresso'] },
    { href: '/pt-br/ending', title: 'Final explicado', description: 'Identidade, motivação e confronto final explicados.', keywords: ['final', 'assassino', 'elias crow', 'spoilers'] },
    { href: '/pt-br/guides', title: 'Todos os guias', description: 'Guias de gameplay, personagens, lançamento e plataformas.', keywords: ['guias', 'ajuda', 'páginas'] },
    { href: '/pt-br/guides/beginner', title: 'Guia para iniciantes', description: 'Informações confirmadas e dicas para começar.', keywords: ['iniciante', 'começar', 'controles', 'dicas'] },
    { href: '/pt-br/guides/the-skin-stapler-hot-dog', title: 'Cena do cachorro-quente', description: 'A sequência do Quick Fix com Hexy explicada.', keywords: ['cachorro quente', 'hot dog', 'quick fix', 'hexy', 'cena'] },
    { href: '/pt-br/guides/the-skin-stapler-release-date', title: 'Data de lançamento e plataformas', description: 'Lançamento, lojas e plataforma confirmada.', keywords: ['lançamento', 'data', 'windows', 'steam', 'gog'] },
    { href: '/pt-br/guides/the-skin-stapler-voice-actors', title: 'Elenco de voz completo', description: 'Vozes em inglês confirmadas e seus papéis.', keywords: ['elenco de voz', 'dubladores', 'personagens', 'atores'] },
    { href: '/pt-br/guides/the-skin-stapler-fefe', title: 'Fefe – personagem e voz', description: 'A abertura de Fefe, sua intérprete e papel confirmado.', keywords: ['fefe', 'apartamento', 'personagem', 'voz'] }
  ],
  es: [
    { href: '/es', title: 'The Skin Stapler Wiki – Inicio', description: 'Página central con guías y datos confirmados del juego.', keywords: ['inicio', 'juego', 'wiki', 'carrion city'] },
    { href: '/es/wiki', title: 'The Skin Stapler Wiki', description: 'Guía, personajes, reparto, escenas y lanzamiento.', keywords: ['wiki', 'central', 'datos', 'desarrolladora'] },
    { href: '/es/walkthrough', title: 'Guía completa', description: 'Todos los capítulos, del apartamento de Fefe al Flesh Pit.', keywords: ['guía completa', 'capítulos', 'ruta', 'progreso'] },
    { href: '/es/ending', title: 'Final explicado', description: 'Identidad, motivación y enfrentamiento final explicados.', keywords: ['final', 'asesino', 'elias crow', 'spoilers'] },
    { href: '/es/guides', title: 'Todas las guías', description: 'Guías de jugabilidad, personajes, lanzamiento y plataformas.', keywords: ['guías', 'ayuda', 'páginas'] },
    { href: '/es/guides/beginner', title: 'Guía para principiantes', description: 'Información confirmada y consejos para empezar.', keywords: ['principiante', 'empezar', 'controles', 'consejos'] },
    { href: '/es/guides/the-skin-stapler-hot-dog', title: 'Escena del perrito caliente', description: 'La secuencia de Quick Fix con Hexy, explicada.', keywords: ['perrito caliente', 'hot dog', 'quick fix', 'hexy', 'escena'] },
    { href: '/es/guides/the-skin-stapler-release-date', title: 'Fecha de lanzamiento y plataformas', description: 'Lanzamiento, tiendas y plataforma confirmada.', keywords: ['lanzamiento', 'fecha', 'windows', 'steam', 'gog'] },
    { href: '/es/guides/the-skin-stapler-voice-actors', title: 'Reparto de voces completo', description: 'Voces en inglés confirmadas y sus papeles.', keywords: ['reparto de voces', 'actores', 'personajes', 'elenco'] },
    { href: '/es/guides/the-skin-stapler-fefe', title: 'Fefe – personaje y actriz de voz', description: 'La apertura de Fefe, su intérprete y papel confirmado.', keywords: ['fefe', 'apartamento', 'personaje', 'voz'] }
  ]
};
