export type LocalizedArticleId =
  | 'walkthrough' | 'ending' | 'wiki' | 'characters'
  | 'fefe' | 'hot-dog' | 'release-date' | 'voice-cast'
  | 'gameplay' | 'who-is' | 'reddit' | 'achievements' | 'puzzle-solutions'
  | 'review' | 'story' | 'games-like' | 'uncensored' | 'donut-shop' | 'all-tapes'
  | 'ai-generated' | 'developer' | 'janker-edition' | 'turkish-patch'
  | 'korean-patch' | 'press-kit' | 'final-aftermath' | 'aftermath-3';

export type BatchThreeArticleId = Extract<LocalizedArticleId,
  'review' | 'story' | 'games-like' | 'uncensored' | 'donut-shop' | 'all-tapes'
  | 'ai-generated' | 'developer' | 'janker-edition' | 'turkish-patch'
  | 'korean-patch' | 'press-kit' | 'final-aftermath' | 'aftermath-3'>;

export type BaseLocalizedArticleId = Exclude<LocalizedArticleId,
  'characters' | 'gameplay' | 'who-is' | 'reddit' | 'achievements' | 'puzzle-solutions'
  | 'review' | 'story' | 'games-like' | 'uncensored' | 'donut-shop' | 'all-tapes'
  | 'ai-generated' | 'developer' | 'janker-edition' | 'turkish-patch'
  | 'korean-patch' | 'press-kit' | 'final-aftermath' | 'aftermath-3'>;

export type LocalizedArticle = {
  id: LocalizedArticleId;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  directAnswer: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{ question: string; answer: string }>;
  sources?: Array<{ label: string; url: string }>;
  /** Creation date (ISO yyyy-mm-dd). Defaults to 2026-08-20 when omitted. */
  date?: string;
};
