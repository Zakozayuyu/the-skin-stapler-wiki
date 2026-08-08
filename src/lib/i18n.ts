export const locales = ['en', 'de', 'pt-br', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { language: string; label: string; gameLanguageNote: string }> = {
  en: { language: 'en', label: 'English', gameLanguageNote: 'The game officially supports English interface, audio, and subtitles.' },
  de: { language: 'de-DE', label: 'Deutsch', gameLanguageNote: 'Das Spiel selbst unterstützt derzeit offiziell nur Englisch für Oberfläche, Audio und Untertitel.' },
  'pt-br': { language: 'pt-BR', label: 'Português do Brasil', gameLanguageNote: 'O jogo oferece oficialmente interface, áudio e legendas apenas em inglês.' },
  es: { language: 'es', label: 'Español', gameLanguageNote: 'El juego solo admite oficialmente interfaz, audio y subtítulos en inglés.' }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path = '') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? normalized : `/${locale}${normalized === '/' ? '' : normalized}`;
}
