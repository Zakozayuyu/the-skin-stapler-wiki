import type { Locale } from '@/lib/i18n';
import type { ArticleImageKey } from '@/lib/article-media';
import { deArticles } from './de';
import { esArticles } from './es';
import { ptBrArticles } from './pt-br';
import { phaseTwoArticles } from './phase-two';
import type { LocalizedArticle, LocalizedArticleId } from './types';

export type { LocalizedArticle, LocalizedArticleId } from './types';

/** Official Steam-gallery image used for each localized article (schema and social sharing). */
export const localizedArticleImages: Record<LocalizedArticleId, ArticleImageKey> = {
  walkthrough: 'police', ending: 'killer', wiki: 'promo', fefe: 'chase',
  characters: 'promo', gameplay: 'carAttack', 'who-is': 'killer', reddit: 'stage',
  achievements: 'evidence', 'puzzle-solutions': 'tape',
  'hot-dog': 'customer', 'release-date': 'promo', 'voice-cast': 'interview'
};

export const localizedArticleIds: LocalizedArticleId[] = [
  'walkthrough', 'ending', 'wiki', 'characters', 'fefe', 'gameplay', 'hot-dog',
  'who-is', 'reddit', 'voice-cast', 'release-date', 'achievements', 'puzzle-solutions'
];
export const localizedPillarIds: LocalizedArticleId[] = ['walkthrough', 'ending', 'wiki', 'characters'];

export const localizedGuideSlugs = {
  'the-skin-stapler-fefe': 'fefe',
  'the-skin-stapler-hot-dog': 'hot-dog',
  'the-skin-stapler-release-date': 'release-date',
  'the-skin-stapler-voice-actors': 'voice-cast'
  , 'the-skin-stapler-gameplay': 'gameplay'
  , 'who-is-the-skin-stapler': 'who-is'
  , 'the-skin-stapler-reddit': 'reddit'
  , 'the-skin-stapler-achievements': 'achievements'
  , 'the-skin-stapler-puzzle-solutions': 'puzzle-solutions'
} as const satisfies Record<string, LocalizedArticleId>;

export type LocalizedGuideSlug = keyof typeof localizedGuideSlugs;

const articles: Record<Exclude<Locale, 'en'>, Record<LocalizedArticleId, LocalizedArticle>> = {
  de: { ...deArticles, ...phaseTwoArticles.de },
  'pt-br': { ...ptBrArticles, ...phaseTwoArticles['pt-br'] },
  es: { ...esArticles, ...phaseTwoArticles.es }
};

export function getLocalizedArticle(locale: string, id: string) {
  if (locale !== 'de' && locale !== 'pt-br' && locale !== 'es') return undefined;
  return articles[locale][id as LocalizedArticleId];
}

export function getLocalizedArticlePath(locale: Exclude<Locale, 'en'>, id: LocalizedArticleId) {
  if (localizedPillarIds.includes(id)) return `/${locale}/${id}`;
  const slug = Object.entries(localizedGuideSlugs).find(([, articleId]) => articleId === id)?.[0];
  return `/${locale}/guides/${slug}`;
}
