export type LocalizedArticleId =
  | 'walkthrough' | 'ending' | 'wiki' | 'characters'
  | 'fefe' | 'hot-dog' | 'release-date' | 'voice-cast'
  | 'gameplay' | 'who-is' | 'reddit' | 'achievements' | 'puzzle-solutions';

export type BaseLocalizedArticleId = Exclude<LocalizedArticleId,
  'characters' | 'gameplay' | 'who-is' | 'reddit' | 'achievements' | 'puzzle-solutions'>;

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
};
