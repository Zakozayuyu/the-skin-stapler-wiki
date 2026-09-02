import type { Locale } from '@/lib/i18n';
import type { ArticleImageKey } from '@/lib/article-media';
import { deArticles } from './de';
import { esArticles } from './es';
import { ptBrArticles } from './pt-br';
import { batchThreeDe } from './batch-three.de';
import { batchThreeEs } from './batch-three.es';
import { batchThreePtBr } from './batch-three.pt-br';
import { phaseTwoArticles } from './phase-two';
import type { LocalizedArticle, LocalizedArticleId } from './types';

export type { LocalizedArticle, LocalizedArticleId } from './types';

/** Official Steam-gallery image used for each localized article (schema and social sharing). */
export const localizedArticleImages: Record<LocalizedArticleId, ArticleImageKey> = {
  walkthrough: 'police', ending: 'killer', wiki: 'promo', fefe: 'chase',
  characters: 'promo', gameplay: 'carAttack', 'who-is': 'killer', reddit: 'stage',
  achievements: 'evidence', 'puzzle-solutions': 'tape',
  'hot-dog': 'customer', 'release-date': 'promo', 'voice-cast': 'interview'
  , review: 'cruiserNight', story: 'stitchedPortrait', 'games-like': 'stage', uncensored: 'killer'
  , 'donut-shop': 'customer', 'all-tapes': 'tape', 'ai-generated': 'promo', developer: 'promo'
  , 'janker-edition': 'stage', 'turkish-patch': 'interview', 'korean-patch': 'police', 'press-kit': 'promo'
  , 'final-aftermath': 'carAttack', 'aftermath-3': 'chase'
};

export const localizedArticleIds: LocalizedArticleId[] = [
  'walkthrough', 'ending', 'wiki', 'characters', 'fefe', 'gameplay', 'hot-dog',
  'who-is', 'reddit', 'voice-cast', 'release-date', 'achievements', 'puzzle-solutions',
  'review', 'story', 'games-like', 'uncensored', 'donut-shop', 'all-tapes',
  'ai-generated', 'developer', 'janker-edition', 'turkish-patch', 'korean-patch',
  'press-kit', 'final-aftermath', 'aftermath-3'
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
  , 'the-skin-stapler-review': 'review'
  , 'the-skin-stapler-story': 'story'
  , 'games-like-the-skin-stapler': 'games-like'
  , 'the-skin-stapler-uncensored': 'uncensored'
  , 'the-skin-stapler-donut-shop-code': 'donut-shop'
  , 'the-skin-stapler-all-tapes': 'all-tapes'
  , 'is-the-skin-stapler-ai-generated': 'ai-generated'
  , 'the-skin-stapler-developer': 'developer'
  , 'the-skin-stapler-the-skin-janker-edition': 'janker-edition'
  , 'the-skin-stapler-turkish-patch': 'turkish-patch'
  , 'the-skin-stapler-korean-patch': 'korean-patch'
  , 'the-skin-stapler-press-kit': 'press-kit'
  , 'the-skin-stapler-final-aftermath': 'final-aftermath'
  , 'the-skin-stapler-aftermath-3': 'aftermath-3'
} as const satisfies Record<string, LocalizedArticleId>;

export type LocalizedGuideSlug = keyof typeof localizedGuideSlugs;

const articles: Record<Exclude<Locale, 'en'>, Record<LocalizedArticleId, LocalizedArticle>> = {
  de: { ...deArticles, ...phaseTwoArticles.de, ...batchThreeDe },
  'pt-br': { ...ptBrArticles, ...phaseTwoArticles['pt-br'], ...batchThreePtBr },
  es: { ...esArticles, ...phaseTwoArticles.es, ...batchThreeEs }
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
