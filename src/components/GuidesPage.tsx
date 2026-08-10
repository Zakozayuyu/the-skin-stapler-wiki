import Link from 'next/link';
import { keywordArticleSlugs, keywordArticles } from '@/lib/articles';
import { startCards } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { siteConfig } from '@/lib/seo';
import SiteShell from './SiteShell';

const copy = {
  en: { title: 'Investigation Guides', description: 'Source-checked routes and reference pages for The Skin Stapler. Unverified details are clearly marked as pending confirmation.', open: 'Open guide →', verified: 'Verified', pending: 'Pending confirmation', demoTitle: 'Free Demo', demoText: 'The Skin Stapler has a separate free demo on Steam.', demoButton: 'Steam Demo' },
  de: { title: 'Ermittlungs-Guides', description: 'Quellengeprüfte Routen und Nachschlageartikel zu The Skin Stapler. Unbestätigte Angaben sind klar als ausstehend gekennzeichnet.', open: 'Guide öffnen →', verified: 'Bestätigt', pending: 'Bestätigung ausstehend', demoTitle: 'Kostenlose Demo', demoText: 'Für The Skin Stapler gibt es eine separate kostenlose Demo auf Steam.', demoButton: 'Steam-Demo' },
  'pt-br': { title: 'Guias de investigação', description: 'Rotas e páginas de referência de The Skin Stapler verificadas em fontes. Dados não confirmados são indicados com clareza.', open: 'Abrir guia →', verified: 'Verificado', pending: 'Confirmação pendente', demoTitle: 'Demo gratuita', demoText: 'The Skin Stapler tem uma demo gratuita separada na Steam.', demoButton: 'Demo na Steam' },
  es: { title: 'Guías de investigación', description: 'Rutas y páginas de referencia de The Skin Stapler contrastadas con fuentes. Los datos no confirmados se indican con claridad.', open: 'Abrir guía →', verified: 'Verificado', pending: 'Pendiente de confirmar', demoTitle: 'Demo gratuita', demoText: 'The Skin Stapler tiene una demo gratuita separada en Steam.', demoButton: 'Demo de Steam' }
} as const;

export default function GuidesPage({ locale }: { locale: Locale }) {
  const labels = copy[locale];
  const primaryRoutes: Record<string, string> = { beginner: localizePath(locale, '/guides/beginner'), walkthrough: '/walkthrough', achievements: '/ending' };
  return <SiteShell locale={locale}><div className="container games-page"><div className="page-heading"><span className="badge blue-badge">The Skin Stapler Wiki</span><h1>{labels.title}</h1><p>{labels.description}</p></div><div className="games-grid guide-shell-grid">{startCards[locale].map((guide) => (guide.id === 'beginner' || (locale === 'en' && primaryRoutes[guide.id])) ? <Link href={primaryRoutes[guide.id]} key={guide.id} id={guide.id} className="card game-card"><div><h2>{guide.title}</h2><span className="badge tier-badge">{labels.verified}</span></div><p>{guide.description}</p><b>{labels.open}</b></Link> : <article key={guide.id} id={guide.id} className="card game-card template-card"><div><h2>{guide.title}</h2><span className="badge floor-badge">{labels.pending}</span></div><p>{guide.description}</p></article>)}{locale === 'en' && keywordArticleSlugs.map((slug) => { const article = keywordArticles[slug]; return <Link href={`/guides/${slug}`} key={slug} className="card game-card"><div><h2>{article.title}</h2><span className="badge blue-badge">{article.category}</span></div><p>{article.summary}</p><b>{labels.open}</b></Link>; })}</div><div className="guide-demo-cta card"><h2>{labels.demoTitle}</h2><p>{labels.demoText}</p><a href={siteConfig.demo} target="_blank" rel="noreferrer" className="btn-primary">{labels.demoButton}</a></div></div></SiteShell>;
}
