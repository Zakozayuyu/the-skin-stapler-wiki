import type { ComponentType } from 'react';
import EnHome from '@/content/en/home.mdx';
import DeHome from '@/content/de/home.mdx';
import PtHome from '@/content/pt-br/home.mdx';
import EsHome from '@/content/es/home.mdx';
import EnBeginner from '@/content/en/guides/beginner.mdx';
import DeBeginner from '@/content/de/guides/beginner.mdx';
import PtBeginner from '@/content/pt-br/guides/beginner.mdx';
import EsBeginner from '@/content/es/guides/beginner.mdx';
import type { Locale } from './i18n';

export const homeContent: Record<Locale, ComponentType> = { en: EnHome, de: DeHome, 'pt-br': PtHome, es: EsHome };
export const beginnerContent: Record<Locale, ComponentType> = { en: EnBeginner, de: DeBeginner, 'pt-br': PtBeginner, es: EsBeginner };
