import type { Locale } from './i18n';

type LocalText = Record<Locale, string>;

export const navItems: Array<{ label: LocalText; href: string }> = [
  { label: { en: 'Home', de: 'Startseite', 'pt-br': 'Início', es: 'Inicio' }, href: '/' },
  { label: { en: 'Wiki', de: 'Wiki', 'pt-br': 'Wiki', es: 'Wiki' }, href: '/wiki' },
  { label: { en: 'Walkthrough', de: 'Komplettlösung', 'pt-br': 'Detonado', es: 'Guía completa' }, href: '/walkthrough' },
  { label: { en: 'Ending', de: 'Ende', 'pt-br': 'Final', es: 'Final' }, href: '/ending' },
  { label: { en: 'Guides', de: 'Guides', 'pt-br': 'Guias', es: 'Guías' }, href: '/guides' },
  { label: { en: 'Beginner Guide', de: 'Einsteiger-Guide', 'pt-br': 'Guia para iniciantes', es: 'Guía para principiantes' }, href: '/guides/beginner' }
];

export const officialLinks = [
  { key: 'steam', href: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/' },
  { key: 'discord', href: 'https://discord.gg/TNPAcFJU7p' },
  { key: 'youtube', href: 'https://www.youtube.com/@taintedpactgames' },
  { key: 'twitter', href: 'https://x.com/TaintedPact' },
  { key: 'community', href: 'https://steamcommunity.com/app/4310610/discussions/' }
] as const;

export const startCards = {
  en: [
    { number: '1', id: 'beginner', title: 'Beginner Guide', description: 'Learn the controls, story structure, investigation basics and spoiler-light survival tips before your first full night in Carrion City.' },
    { number: '2', id: 'walkthrough', title: 'Chapter Walkthrough', description: 'Follow the detective, victim and Aftermath sections in story order with objective-focused guidance and clearly marked spoiler boundaries.' },
    { number: '3', id: 'characters', title: 'Characters', description: 'Browse Dick Slater, Robbie Knox and the other named characters tied to Carrion City, with chapter roles and spoiler-aware profiles.' },
    { number: '4', id: 'puzzles', title: 'Puzzle Solutions', description: 'Solve codes, environmental riddles, object interactions, and progression blockers with optional spoiler-light hints.' }
  ],
  de: [
    { number: '1', id: 'beginner', title: 'Einsteiger-Guide', description: 'Lerne Steuerung, Aufbau der Geschichte, Ermittlungsgrundlagen und spoilerarme Überlebenstipps kennen, bevor deine erste ganze Nacht in Carrion City beginnt.' },
    { number: '2', id: 'walkthrough', title: 'Kapitel-Komplettlösung', description: 'Folge den Detektiv-, Opfer- und Aftermath-Abschnitten in chronologischer Reihenfolge mit zielgerichteter Anleitung und klar markierten Spoilergrenzen.' },
    { number: '3', id: 'characters', title: 'Figuren', description: 'Stöbere durch Dick Slater, Robbie Knox und die anderen genannten Figuren aus Carrion City – mit Kapitelrollen und spoilerbewussten Profilen.' },
    { number: '4', id: 'puzzles', title: 'Rätsellösungen', description: 'Löse Codes, Umgebungsrätsel, Objektinteraktionen und Fortschrittsblockaden mit optionalen spoilerarmen Hinweisen.' }
  ],
  'pt-br': [
    { number: '1', id: 'beginner', title: 'Guia para iniciantes', description: 'Conheça os controles, a estrutura da história, o básico da investigação e dicas de sobrevivência com poucos spoilers antes da sua primeira noite completa em Carrion City.' },
    { number: '2', id: 'walkthrough', title: 'Detonado por capítulos', description: 'Siga as seções do detetive, das vítimas e do Aftermath na ordem da história, com orientação focada em objetivos e limites de spoiler bem marcados.' },
    { number: '3', id: 'characters', title: 'Personagens', description: 'Navegue por Dick Slater, Robbie Knox e os outros personagens ligados a Carrion City, com papéis por capítulo e perfis com avisos de spoiler.' },
    { number: '4', id: 'puzzles', title: 'Soluções de puzzles', description: 'Resolva códigos, enigmas ambientais, interações com objetos e bloqueios de progresso com dicas opcionais e leves em spoilers.' }
  ],
  es: [
    { number: '1', id: 'beginner', title: 'Guía para principiantes', description: 'Conoce los controles, la estructura de la historia, lo básico de la investigación y consejos de supervivencia con pocos spoilers antes de tu primera noche completa en Carrion City.' },
    { number: '2', id: 'walkthrough', title: 'Guía por capítulos', description: 'Sigue las secciones del detective, de las víctimas y del Aftermath en orden narrativo, con ayuda centrada en objetivos y límites de spoiler bien marcados.' },
    { number: '3', id: 'characters', title: 'Personajes', description: 'Explora Dick Slater, Robbie Knox y los demás personajes ligados a Carrion City, con roles por capítulo y perfiles con avisos de spoiler.' },
    { number: '4', id: 'puzzles', title: 'Soluciones de puzles', description: 'Resuelve códigos, acertijos ambientales, interacciones con objetos y bloqueios de progreso con pistas opcionales y pocos spoilers.' }
  ]
} satisfies Record<Locale, Array<{ number: string; id: string; title: string; description: string }>>;
