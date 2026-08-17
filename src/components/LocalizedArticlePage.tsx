import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localeMeta, localizePath } from '@/lib/i18n';
import { getLocalizedArticle, getLocalizedArticlePath, localizedArticleIds, localizedArticleImages } from '@/lib/localized-articles';
import type { LocalizedArticle } from '@/lib/localized-articles/types';
import { articleMedia } from '@/lib/article-media';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import ArticleFigure from './ArticleFigure';
import NativeBannerAd from './NativeBannerAd';
import SiteShell from './SiteShell';

type ContentLocale = Exclude<Locale, 'en'>;

const ui = {
  de: {
    home: 'Startseite', guides: 'Guides', answer: 'Kurzantwort', checked: 'Quellengeprüft', pending: 'Unsicheres klar gekennzeichnet',
    faq: 'Häufige Fragen', related: 'Weitere geprüfte Themen', sources: 'Offizielle Quellen', sourceText: 'Veröffentlichungs- und Spieldaten lassen sich auf den offiziellen Store-Seiten prüfen.',
    fullGame: 'Vollversion auf Steam', demo: 'Kostenlose Steam-Demo'
  },
  'pt-br': {
    home: 'Início', guides: 'Guias', answer: 'Resposta direta', checked: 'Fontes verificadas', pending: 'Incertezas marcadas com clareza',
    faq: 'Perguntas frequentes', related: 'Outros conteúdos verificados', sources: 'Fontes oficiais', sourceText: 'Dados de lançamento e do jogo podem ser conferidos nas páginas oficiais das lojas.',
    fullGame: 'Jogo completo na Steam', demo: 'Demo gratuita na Steam'
  },
  es: {
    home: 'Inicio', guides: 'Guías', answer: 'Respuesta directa', checked: 'Fuentes contrastadas', pending: 'Dudas marcadas con claridad',
    faq: 'Preguntas frecuentes', related: 'Otros temas verificados', sources: 'Fuentes oficiais', sourceText: 'Los datos del juego y su lanzamiento pueden comprobarse en las páginas oficiales de las tiendas.',
    fullGame: 'Juego completo en Steam', demo: 'Demo gratuita de Steam'
  }
} as const;

export default function LocalizedArticlePage({ locale, article }: { locale: ContentLocale; article: LocalizedArticle }) {
  const t = ui[locale];
  const path = getLocalizedArticlePath(locale, article.id);
  const isGuide = !['walkthrough', 'ending', 'wiki'].includes(article.id);
  const image = localizedArticleImages[article.id];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: article.title, description: article.description,
        inLanguage: localeMeta[locale].language, mainEntityOfPage: absoluteUrl(path), url: absoluteUrl(path), keywords: article.keyword,
        image: absoluteUrl(articleMedia[image].src)
      },
      {
        '@type': 'FAQPage', mainEntity: article.faq.map((item) => ({
          '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.home, item: absoluteUrl(localizePath(locale, '/')) },
          ...(isGuide ? [{ '@type': 'ListItem', position: 2, name: t.guides, item: absoluteUrl(localizePath(locale, '/guides')) }] : []),
          { '@type': 'ListItem', position: isGuide ? 3 : 2, name: article.keyword, item: absoluteUrl(path) }
        ]
      }
    ]
  };

  return (
    <SiteShell locale={locale}>
      <article className="container article-page pillar-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizePath(locale, '/')}>{t.home}</Link><span>/</span>
          {isGuide && <><Link href={localizePath(locale, '/guides')}>{t.guides}</Link><span>/</span></>}
          <b>{article.keyword}</b>
        </nav>
        <header className="article-header pillar-header">
          <div><span className="badge tier-badge">{t.checked}</span><span className="badge blue-badge">{article.eyebrow}</span></div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
        <div className="mdx-article keyword-article pillar-copy">
          <section className="answer-box card">
            <h2>{t.answer}</h2>
            <p>{article.directAnswer}</p>
          </section>
          <ArticleFigure image={image} locale={locale} />

          {/* Native Banner — after answer box + hero image, ~15-20% into the page */}
          <NativeBannerAd slotId="localized-top" />

          {article.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
          <section>
            <h2>{t.faq}</h2>
            <div className="faq-cards">
              {article.faq.map((item) => <div className="card" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
            </div>
          </section>
        </div>
        <aside className="card article-cta">
          <h2>{t.sources}</h2><p>{t.sourceText}</p>
          <div className="button-row"><a href={siteConfig.steam} target="_blank" rel="noreferrer" className="btn-primary">{t.fullGame}</a><a href={siteConfig.demo} target="_blank" rel="noreferrer" className="btn-secondary">{t.demo}</a></div>
        </aside>
        <nav className="card related-pillar-links" aria-label={t.related}>
          <h2>{t.related}</h2>
          <div>{localizedArticleIds.filter((id) => id !== article.id).map((id) => {
            const related = getLocalizedArticle(locale, id);
            return related && <Link href={getLocalizedArticlePath(locale, id)} key={id}>{related.keyword}</Link>;
          })}</div>
        </nav>
      </article>
    </SiteShell>
  );
}
