import type { Locale } from './i18n';

type LocalText = Record<Locale, string>;

export const navItems: Array<{ label: LocalText; href: string }> = [
  { label: { en: 'Home', de: 'Startseite', 'pt-br': 'Início', es: 'Inicio' }, href: '/' },
  { label: { en: 'Guides', de: 'Guides', 'pt-br': 'Guias', es: 'Guías' }, href: '/guides' },
  { label: { en: 'Beginner Guide', de: 'Einsteiger-Guide', 'pt-br': 'Guia para iniciantes', es: 'Guía para principiantes' }, href: '/guides/beginner' },
  { label: { en: 'Privacy', de: 'Datenschutz', 'pt-br': 'Privacidade', es: 'Privacidad' }, href: '/privacy' }
];

export const officialLinks = [
  { key: 'steam', href: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/' },
  { key: 'discord', href: 'https://discord.gg/TNPAcFJU7p' },
  { key: 'youtube', href: 'https://www.youtube.com/@assembleteam' },
  { key: 'twitter', href: 'https://x.com/TaintedPact' },
  { key: 'community', href: 'https://steamcommunity.com/app/4310610/discussions/' }
] as const;

export const startCards = {
  en: [
    { number: '1', id: 'beginner', title: 'Beginner Guide', description: 'Learn the controls, graphics setup, interaction basics, spoiler settings, and practical tips for your first night in Carrion City.' },
    { number: '2', id: 'walkthrough', title: 'Crime Scene Walkthrough', description: 'Follow a clear route through each investigation, locate important evidence, and avoid missing the clues needed to move forward.' },
    { number: '3', id: 'puzzles', title: 'Puzzle Solutions', description: 'Solve codes, environmental riddles, object interactions, and progression blockers with optional spoiler-light hints.' },
    { number: '4', id: 'achievements', title: 'Achievements and Endings', description: 'Track all 16 Steam achievements, identify missable objectives, and understand the choices and discoveries connected to the ending.' }
  ],
  de: [
    { number: '1', id: 'beginner', title: 'Einsteiger-Guide', description: 'Lerne Steuerung, Grafikeinstellungen, Interaktionsgrundlagen, Spoiler-Einstellungen und praktische Tipps für deine erste Nacht in Carrion City kennen.' },
    { number: '2', id: 'walkthrough', title: 'Tatort-Komplettlösung', description: 'Folge einer klaren Route durch jede Ermittlung, finde wichtige Beweise und verpasse keine Hinweise für den Fortschritt.' },
    { number: '3', id: 'puzzles', title: 'Rätsellösungen', description: 'Löse Codes, Umgebungsrätsel, Objektinteraktionen und Fortschrittsblockaden mit optionalen spoilerarmen Hinweisen.' },
    { number: '4', id: 'achievements', title: 'Erfolge und Enden', description: 'Verfolge alle 16 Steam-Erfolge, erkenne verpassbare Ziele und verstehe die Entscheidungen und Funde rund um das Ende.' }
  ],
  'pt-br': [
    { number: '1', id: 'beginner', title: 'Guia para iniciantes', description: 'Conheça os controles, ajustes gráficos, interações básicas, opções de spoiler e dicas práticas para sua primeira noite em Carrion City.' },
    { number: '2', id: 'walkthrough', title: 'Detonado das cenas do crime', description: 'Siga uma rota clara por cada investigação, encontre provas importantes e não perca as pistas necessárias para avançar.' },
    { number: '3', id: 'puzzles', title: 'Soluções de puzzles', description: 'Resolva códigos, enigmas ambientais, interações com objetos e bloqueios de progresso com dicas opcionais e leves em spoilers.' },
    { number: '4', id: 'achievements', title: 'Conquistas e finais', description: 'Acompanhe as 16 conquistas da Steam, identifique objetivos perdíveis e entenda as escolhas e descobertas ligadas ao final.' }
  ],
  es: [
    { number: '1', id: 'beginner', title: 'Guía para principiantes', description: 'Conoce los controles, los ajustes gráficos, las interacciones básicas, las opciones de spoilers y consejos prácticos para tu primera noche en Carrion City.' },
    { number: '2', id: 'walkthrough', title: 'Guía de las escenas del crimen', description: 'Sigue una ruta clara por cada investigación, localiza pruebas importantes y evita perder las pistas necesarias para avanzar.' },
    { number: '3', id: 'puzzles', title: 'Soluciones de puzles', description: 'Resuelve códigos, acertijos ambientales, interacciones con objetos y bloqueos de progreso con pistas opcionales y pocos spoilers.' },
    { number: '4', id: 'achievements', title: 'Logros y finales', description: 'Sigue los 16 logros de Steam, identifica objetivos perdibles y comprende las decisiones y hallazgos relacionados con el final.' }
  ]
} satisfies Record<Locale, Array<{ number: string; id: string; title: string; description: string }>>;

export const sidebarCodes = ['暂无', '暂无'] as const;
