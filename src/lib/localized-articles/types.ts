export type LocalizedArticleId = 'walkthrough' | 'ending' | 'wiki' | 'fefe' | 'hot-dog' | 'release-date' | 'voice-cast';

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
};
