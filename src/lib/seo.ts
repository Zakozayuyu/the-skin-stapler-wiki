import type { Metadata } from 'next';
import { articleMedia, type ArticleImageKey } from './article-media';
import { localeMeta, locales, localizePath, type Locale } from './i18n';

const productionUrl = 'https://theskinstapler.com';
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (vercelUrl ? `https://${vercelUrl}` : productionUrl);

export const siteUrl = configuredUrl.replace(/\/$/, '');
export const hasPublicSiteUrl = siteUrl.startsWith('https://') && !siteUrl.includes('localhost');

export const siteConfig = {
  name: 'The Skin Stapler Wiki',
  shortName: 'Skin Stapler Wiki',
  description: 'Use The Skin Stapler Wiki for chapter walkthroughs, puzzle answers, achievements, endings, character details, demo help, and Carrion City investigation tips.',
  keywords: ['The Skin Stapler', 'Steam', 'wiki', 'walkthrough', 'puzzles', 'achievements', 'endings', 'horror', 'Carrion City'],
  url: siteUrl,
  steam: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/',
  demo: 'https://store.steampowered.com/app/4343530/The_Skin_Stapler_Demo/',
  discord: 'https://discord.gg/TNPAcFJU7p',
  youtube: 'https://www.youtube.com/@assembleteam',
  trailer: 'https://www.youtube.com/watch?v=9cKUYGkAjyA',
  twitter: 'https://x.com/TaintedPact',
  discussions: 'https://steamcommunity.com/app/4310610/discussions/'
};

export function localizedAlternates(path: string): NonNullable<Metadata['alternates']> {
  const languages = Object.fromEntries(locales.map((locale) => [localeMeta[locale].language, localizePath(locale, path)]));
  return { canonical: path, languages: { ...languages, 'x-default': path } };
}

export function pageAlternates(locale: Locale, path: string): NonNullable<Metadata['alternates']> {
  return { ...localizedAlternates(path), canonical: localizePath(locale, path) };
}

export function englishOnlyAlternates(path: string): NonNullable<Metadata['alternates']> {
  return { canonical: path, languages: { en: path, 'x-default': path } };
}

export function openGraphLocale(locale: Locale) {
  const language = localeMeta[locale].language;
  return language.includes('-') ? language.replace('-', '_') : `${language}_${language.toUpperCase()}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

export const articleAuthor = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: siteConfig.name,
  url: siteUrl
} as const;

export const articlePublisher = {
  ...articleAuthor,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/favicon-512x512.png'),
    width: 512,
    height: 512
  }
} as const;

/** OpenGraph image object reusing the verified official artwork with its localized description as alt text. */
export function openGraphImage(key: ArticleImageKey, locale: Locale = 'en') {
  const media = articleMedia[key];
  return { url: media.src, width: media.width, height: media.height, alt: media.description[locale] };
}

/** Site-wide 1200×630 promotional artwork used as the fallback social image. */
export const heroOgImage = { url: '/og-default.webp', width: 1200, height: 630, alt: 'The Skin Stapler promotional artwork featuring the killer, Dick Slater, and Robbie Knox' };
