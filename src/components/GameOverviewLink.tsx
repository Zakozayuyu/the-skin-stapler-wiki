import Link from 'next/link';
import { localizePath, type Locale } from '@/lib/i18n';

const copy = {
  en: { before: 'Our ', after: ' overview covers Carrion City, the gameplay, playable characters and official PC release.' },
  de: { before: 'Unsere Übersicht zu ', after: ' stellt Carrion City, das Gameplay, die spielbaren Figuren und die offizielle PC-Veröffentlichung vor.' },
  'pt-br': { before: 'Nossa visão geral de ', after: ' apresenta Carrion City, a jogabilidade, os personagens jogáveis e o lançamento oficial para PC.' },
  es: { before: 'Nuestro resumen de ', after: ' presenta Carrion City, la jugabilidad, los personajes jugables y el lanzamiento oficial para PC.' }
} as const;

export default function GameOverviewLink({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <p className="game-overview-link">
      {t.before}<Link href={localizePath(locale, '/')}>The Skin Stapler</Link>{t.after}
    </p>
  );
}
