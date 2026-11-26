import Link from 'next/link';
import { keywordArticleSlugs, keywordArticles, type KeywordArticleSlug } from '@/lib/articles';
import { startCards } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { getLocalizedArticle, getLocalizedArticlePath, localizedGuideSlugs } from '@/lib/localized-articles';
import { siteConfig } from '@/lib/seo';
import GameOverviewLink from './GameOverviewLink';
import SiteShell from './SiteShell';

const copy = {
  en: { title: 'The Skin Stapler Guides', description: 'Find the full walkthrough, puzzle solutions, achievements, characters, voice cast, demo, and release guides in one place. Spoilers and unknowns are clearly labeled.', open: 'Open guide →', verified: 'Verified', pending: 'Needs verified detail', demoTitle: 'Free Demo', demoText: 'The Skin Stapler has a separate free demo on Steam.', demoButton: 'Steam Demo' },
  de: { title: 'Ermittlungs-Guides', description: 'Quellengeprüfte Routen und Nachschlageartikel zu The Skin Stapler. Unbestätigte Angaben sind klar als ausstehend gekennzeichnet.', open: 'Guide öffnen →', verified: 'Bestätigt', pending: 'Bestätigung ausstehend', demoTitle: 'Kostenlose Demo', demoText: 'Für The Skin Stapler gibt es eine separate kostenlose Demo auf Steam.', demoButton: 'Steam-Demo' },
  'pt-br': { title: 'Guias de investigação', description: 'Rotas e páginas de referência de The Skin Stapler verificadas em fontes. Dados não confirmados são indicados com clareza.', open: 'Abrir guia →', verified: 'Verificado', pending: 'Confirmação pendente', demoTitle: 'Demo gratuita', demoText: 'The Skin Stapler tem uma demo gratuita separada na Steam.', demoButton: 'Demo na Steam' },
  es: { title: 'Guías de investigación', description: 'Rutas y páginas de referencia de The Skin Stapler contrastadas con fuentes. Los datos no confirmados se indican con claridad.', open: 'Abrir guía →', verified: 'Verificado', pending: 'Pendiente de confirmar', demoTitle: 'Demo gratuita', demoText: 'The Skin Stapler tiene una demo gratuita separada en Steam.', demoButton: 'Demo de Steam' }
} as const;

const guideTopics = [
  { id: 'gameplay-and-puzzles', title: 'Walkthrough & Puzzles' },
  { id: 'story-and-ending', title: 'Story & Ending' },
  { id: 'characters-and-cast', title: 'Characters & Cast' },
  { id: 'downloads-and-game-info', title: 'Downloads & Game Info' }
] as const;

type GuideTopic = (typeof guideTopics)[number]['id'];
type GuideCardInfo = { href: string; title: string; description: string; id?: string };

const startGuideRoutes: Record<string, { href: string; topic: GuideTopic; description?: string }> = {
  beginner: { href: '/guides/beginner', topic: 'gameplay-and-puzzles' },
  walkthrough: { href: '/walkthrough', topic: 'gameplay-and-puzzles' },
  characters: { href: '/characters', topic: 'characters-and-cast' },
  puzzles: {
    href: '/guides/the-skin-stapler-puzzle-solutions',
    topic: 'gameplay-and-puzzles',
    description: 'Find the picture-frame code, solve the Flesh Pit scale puzzle, and learn how to repair damaged tapes.'
  }
};

const topicByCategory = {
  Cast: 'characters-and-cast',
  Story: 'story-and-ending',
  Release: 'downloads-and-game-info',
  Platforms: 'downloads-and-game-info',
  Community: 'downloads-and-game-info',
  Guide: 'downloads-and-game-info'
} satisfies Record<(typeof keywordArticles)[KeywordArticleSlug]['category'], GuideTopic>;

const topicByGuide: Partial<Record<KeywordArticleSlug, GuideTopic>> = {
  'the-skin-stapler-gameplay': 'gameplay-and-puzzles',
  'the-skin-stapler-hot-dog': 'gameplay-and-puzzles',
  'the-skin-stapler-achievements': 'gameplay-and-puzzles',
  'the-skin-stapler-donut-shop-code': 'gameplay-and-puzzles',
  'the-skin-stapler-all-tapes': 'story-and-ending'
};

function GuideCard({ href, title, description, id, open, badge, heading: Heading = 'h2' }: GuideCardInfo & {
  open: string;
  badge?: { label: string; className: string };
  heading?: 'h2' | 'h3';
}) {
  return (
    <Link href={href} id={id} className="card game-card">
      <div>
        <Heading>{title}</Heading>
        {badge && <span className={`badge ${badge.className}`}>{badge.label}</span>}
      </div>
      <p>{description}</p>
      <b>{open}</b>
    </Link>
  );
}

function EnglishGuideDirectory() {
  const guidesByTopic: Record<GuideTopic, GuideCardInfo[]> = {
    'gameplay-and-puzzles': [],
    'story-and-ending': [{
      href: '/ending', title: 'Ending Explained',
      description: 'Follow the Flesh Pit finale and find out what happens to Slater and Robbie. Contains spoilers.'
    }],
    'characters-and-cast': [],
    'downloads-and-game-info': []
  };

  for (const { id, title, description } of startCards.en) {
    const route = startGuideRoutes[id];
    guidesByTopic[route.topic].push({ id, href: route.href, title, description: route.description ?? description });
  }

  for (const slug of keywordArticleSlugs) {
    const href = `/guides/${slug}`;
    if (href === startGuideRoutes.puzzles.href) continue;

    const article = keywordArticles[slug];
    const topic = topicByGuide[slug] ?? topicByCategory[article.category];
    guidesByTopic[topic].push({ href, title: article.title, description: article.summary });
  }

  return (
    <div className="guide-directory">
      <nav className="wiki-quick-links guide-topic-nav" aria-label="Guide topics">
        {guideTopics.map(({ id, title }) => <a href={`#${id}`} key={id}>{title}</a>)}
      </nav>
      {guideTopics.map(({ id, title }) => (
        <section key={id} id={id} className="guide-topic" aria-labelledby={`${id}-heading`}>
          <h2 id={`${id}-heading`} className="section-title">{title}</h2>
          <div className="games-grid guide-shell-grid">
            {guidesByTopic[id].map((guide) => (
              <GuideCard key={guide.href} {...guide} open={copy.en.open} heading="h3" />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function LocalizedGuideDirectory({ locale }: { locale: Exclude<Locale, 'en'> }) {
  const labels = copy[locale];
  const primaryRoutes: Record<string, string> = {
    beginner: localizePath(locale, '/guides/beginner'),
    walkthrough: localizePath(locale, '/walkthrough'),
    achievements: localizePath(locale, '/guides/the-skin-stapler-achievements')
  };
  const localizedGuides = Object.values(localizedGuideSlugs).map((id) => getLocalizedArticle(locale, id));

  return (
    <div className="games-grid guide-shell-grid">
      {startCards[locale].map(({ id, title, description }) => {
        const href = primaryRoutes[id];
        return href ? (
          <GuideCard key={id} id={id} href={href} title={title} description={description} open={labels.open}
            badge={{ label: labels.verified, className: 'tier-badge' }} />
        ) : (
          <article key={id} id={id} className="card game-card template-card">
            <div><h2>{title}</h2><span className="badge floor-badge">{labels.pending}</span></div>
            <p>{description}</p>
          </article>
        );
      })}
      {localizedGuides.map((article) => article && (
        <GuideCard key={article.id} href={getLocalizedArticlePath(locale, article.id)} title={article.title}
          description={article.description} open={labels.open} badge={{ label: article.eyebrow, className: 'blue-badge' }} />
      ))}
    </div>
  );
}

export default function GuidesPage({ locale }: { locale: Locale }) {
  const labels = copy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="container games-page">
        <div className="page-heading">
          <span className="badge blue-badge">The Skin Stapler Wiki</span>
          <h1>{labels.title}</h1>
          <p>{labels.description}</p>
        </div>
        <GameOverviewLink locale={locale} />
        {locale === 'en' ? <EnglishGuideDirectory /> : <LocalizedGuideDirectory locale={locale} />}
        <div className="guide-demo-cta card">
          <h2>{labels.demoTitle}</h2>
          <p>{labels.demoText}</p>
          <a href={siteConfig.demo} target="_blank" rel="noreferrer" className="btn-primary">{labels.demoButton}</a>
        </div>
      </div>
    </SiteShell>
  );
}
