import type { Locale } from '@/lib/i18n';
import { deArticles } from './de';
import { esArticles } from './es';
import { ptBrArticles } from './pt-br';
import type { LocalizedArticle, LocalizedArticleId } from './types';

export type { LocalizedArticle, LocalizedArticleId } from './types';

export const localizedArticleIds: LocalizedArticleId[] = ['walkthrough', 'ending', 'wiki', 'fefe', 'hot-dog', 'release-date', 'voice-cast'];
export const localizedPillarIds: LocalizedArticleId[] = ['walkthrough', 'ending', 'wiki'];

export const localizedGuideSlugs = {
  'the-skin-stapler-fefe': 'fefe',
  'the-skin-stapler-hot-dog': 'hot-dog',
  'the-skin-stapler-release-date': 'release-date',
  'the-skin-stapler-voice-actors': 'voice-cast'
} as const satisfies Record<string, LocalizedArticleId>;

export type LocalizedGuideSlug = keyof typeof localizedGuideSlugs;

const articles: Record<Exclude<Locale, 'en'>, Record<LocalizedArticleId, LocalizedArticle>> = {
  de: deArticles,
  'pt-br': ptBrArticles,
  es: esArticles
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
