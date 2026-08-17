import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localeMeta, localizePath } from '@/lib/i18n';
import { beginnerContent } from '@/lib/content';
import { articleMedia } from '@/lib/article-media';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import ArticleFigure from './ArticleFigure';
import NativeBannerAd from './NativeBannerAd';
import SiteShell from './SiteShell';

const copy = {
  en: { title: 'Beginner Guide', description: 'Practical starting information for your first night in Carrion City, without guessing about controls, settings, or routes the game does not document.', home: 'Home', guides: 'Guides', eyebrow: 'Start Here', spoiler: 'Spoiler-aware', demo: 'Try the Free Demo', demoTitle: 'Free Demo', demoText: 'The Skin Stapler Demo is available separately on Steam.' },
  de: { title: 'Einsteiger-Guide', description: 'Bestätigte Startinformationen für deine erste Nacht in Carrion City. Unbestätigte Angaben sind als ausstehend gekennzeichnet.', home: 'Startseite', guides: 'Guides', eyebrow: 'Hier starten', spoiler: 'Spoilerbewusst', demo: 'Kostenlose Demo testen', demoTitle: 'Kostenlose Demo', demoText: 'Die Demo von The Skin Stapler ist separat auf Steam erhältlich.' },
  'pt-br': { title: 'Guia para iniciantes', description: 'Informações iniciais confirmadas para sua primeira noite em Carrion City. Dados não confirmados são indicados como pendentes.', home: 'Início', guides: 'Guias', eyebrow: 'Comece aqui', spoiler: 'Com controle de spoilers', demo: 'Testar a demo gratuita', demoTitle: 'Demo gratuita', demoText: 'A demo de The Skin Stapler está disponível separadamente na Steam.' },
  es: { title: 'Guía para principiantes', description: 'Información inicial confirmada para tu primera noche en Carrion City. Los datos no confirmados se indican como pendientes.', home: 'Inicio', guides: 'Guías', eyebrow: 'Empieza aquí', spoiler: 'Con control de spoilers', demo: 'Probar la demo gratuita', demoTitle: 'Demo gratuita', demoText: 'La demo de The Skin Stapler está disponible por separado en Steam.' }
} as const;

export default function GuideArticlePage({ locale }: { locale: Locale }) {
  const Article = beginnerContent[locale];
  const labels = copy[locale];
  const path = localizePath(locale, '/guides/beginner');
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: labels.title, description: labels.description, inLanguage: localeMeta[locale].language, mainEntityOfPage: absoluteUrl(path), url: absoluteUrl(path), image: absoluteUrl(articleMedia.evidence.src) };
  return <SiteShell locale={locale}><article className="container article-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><nav className="breadcrumbs"><Link href={localizePath(locale, '/')}>{labels.home}</Link><span>/</span><Link href={localizePath(locale, '/guides')}>{labels.guides}</Link><span>/</span><b>{labels.title}</b></nav><header className="article-header"><div><span className="badge tier-badge">{labels.eyebrow}</span><span className="badge floor-badge">{labels.spoiler}</span></div><h1>{labels.title}</h1><p>{labels.description}</p></header><ArticleFigure image="evidence" locale={locale} />

  {/* Native Banner — after hero image, ~15-20% into the page */}
  <NativeBannerAd slotId="beginner-top" />

  <div className="mdx-article"><Article /></div><div className="card article-cta"><h2>{labels.demoTitle}</h2><p>{labels.demoText}</p><div className="button-row"><a href={siteConfig.demo} target="_blank" rel="noreferrer" className="btn-primary">{labels.demo}</a><Link href={localizePath(locale, '/guides')} className="btn-secondary">{labels.guides}</Link></div></div></article></SiteShell>;
}
