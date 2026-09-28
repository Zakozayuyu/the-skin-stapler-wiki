import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';
import SiteShell from './SiteShell';

const content = {
  privacy: {
    en: ['Privacy Policy', 'This independent fan site does not intentionally collect personal information through forms or user accounts. Hosting providers may process standard technical logs, and external services linked from this site apply their own privacy policies.', 'This site uses Google Analytics to measure visits and Google AdSense to serve ads. Google and other third-party ad vendors may use cookies or similar technologies to serve ads based on your visits to this and other websites, and may process technical and usage data. No newsletter service is configured in this project.'],
    de: ['Datenschutzerklärung', 'Diese unabhängige Fanseite sammelt nicht absichtlich personenbezogene Daten über Formulare oder Benutzerkonten. Hosting-Anbieter können übliche technische Protokolle verarbeiten; verlinkte externe Dienste haben eigene Datenschutzrichtlinien.', 'Diese Website nutzt Google Analytics zur Messung von Besuchen und Google AdSense zur Anzeige von Werbung. Google und andere Drittanbieter von Werbung können Cookies oder ähnliche Technologien verwenden, um Anzeigen anhand Ihrer Besuche auf dieser und anderen Websites auszuspielen und technische sowie nutzungsbezogene Daten zu verarbeiten. Ein Newsletter-Dienst ist nicht konfiguriert.'],
    'pt-br': ['Política de privacidade', 'Este site independente feito por fãs não coleta intencionalmente informações pessoais por formulários ou contas de usuário. Provedores de hospedagem podem processar registros técnicos padrão, e os serviços externos vinculados aplicam suas próprias políticas.', 'Este site usa o Google Analytics para medir visitas e o Google AdSense para exibir anúncios. O Google e outros fornecedores de anúncios podem usar cookies ou tecnologias semelhantes para exibir anúncios com base em suas visitas a este e a outros sites, além de processar dados técnicos e de uso. Não há serviço de newsletter configurado.'],
    es: ['Política de privacidad', 'Este sitio independiente hecho por fans no recopila intencionadamente información personal mediante formularios o cuentas. Los proveedores de alojamiento pueden procesar registros técnicos estándar y los servicios externos enlazados aplican sus propias políticas.', 'Este sitio utiliza Google Analytics para medir las visitas y Google AdSense para mostrar anuncios. Google y otros proveedores de anuncios pueden usar cookies o tecnologías similares para mostrar anuncios según tus visitas a este y otros sitios web, y tratar datos técnicos y de uso. No hay ningún servicio de boletines configurado.']
  },
  terms: {
    en: ['Terms of Service', 'The Skin Stapler Wiki is an independent, unofficial fan guide provided for informational purposes. It is not affiliated with Tainted Pact, Assemble Entertainment, Valve, or GOG.', 'Game names, artwork, screenshots, and related trademarks belong to their respective owners. Guide information may change after game updates; details that have not been verified are labeled clearly.'],
    de: ['Nutzungsbedingungen', 'The Skin Stapler Wiki ist ein unabhängiger, inoffizieller Fan-Guide zu Informationszwecken. Die Seite steht in keiner Verbindung zu Tainted Pact, Assemble Entertainment, Valve oder GOG.', 'Spielnamen, Grafiken, Screenshots und zugehörige Marken gehören ihren jeweiligen Eigentümern. Guide-Informationen können sich nach Updates ändern; unsichere Angaben sind als Bestätigung ausstehend markiert.'],
    'pt-br': ['Termos de serviço', 'The Skin Stapler Wiki é um guia independente e não oficial feito por fãs para fins informativos. O site não é afiliado à Tainted Pact, Assemble Entertainment, Valve ou GOG.', 'Nomes, artes, capturas e marcas do jogo pertencem aos respectivos proprietários. As informações podem mudar após atualizações; dados incertos são marcados como confirmação pendente.'],
    es: ['Términos del servicio', 'The Skin Stapler Wiki es una guía independiente y no oficial hecha por fans con fines informativos. No está afiliada a Tainted Pact, Assemble Entertainment, Valve ni GOG.', 'Los nombres, ilustraciones, capturas y marcas del juego pertenecen a sus respectivos propietarios. La información puede cambiar tras las actualizaciones; los datos inciertos se marcan como pendientes de confirmar.']
  }
} as const;

const adOptOutLabels = {
  en: 'Ad preferences and opt-out options:',
  de: 'Anzeigeneinstellungen und Widerspruchsmöglichkeiten:',
  'pt-br': 'Preferências de anúncios e opções de desativação:',
  es: 'Preferencias de anuncios y opciones para rechazar anuncios personalizados:'
} as const;

export default function LegalPage({ locale, type }: { locale: Locale; type: keyof typeof content }) {
  const [title, first, second] = content[type][locale];
  const home = { en: 'Home', de: 'Startseite', 'pt-br': 'Início', es: 'Inicio' }[locale];
  const path = localizePath(locale, `/${type}`);
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: home, item: absoluteUrl(localizePath(locale, '/')) },
    { '@type': 'ListItem', position: 2, name: title, item: absoluteUrl(path) }
  ] };
  return <SiteShell locale={locale}><article className="container legal-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} /><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={localizePath(locale, '/')}>{home}</Link><span>/</span><b>{title}</b></nav><h1>{title}</h1><div className="card legal-copy"><p>{first}</p><p>{second}</p>{type === 'privacy' && <p>{adOptOutLabels[locale]} <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> · <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">YourAdChoices</a></p>}</div></article></SiteShell>;
}
