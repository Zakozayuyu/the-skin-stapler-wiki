import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { localizedAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'The Skin Stapler Wiki — Walkthrough, Puzzles & Endings',
  description: 'Explore The Skin Stapler with a spoiler-aware walkthrough, puzzle solutions, achievement help, character guides, endings, demo details, and Carrion City clues.',
  keywords: ['The Skin Stapler', 'Steam', 'wiki', 'walkthrough', 'puzzles', 'achievements', 'endings', 'horror', 'Carrion City'],
  alternates: localizedAlternates('/')
};

export default function Page() { return <HomePage locale="en" />; }
