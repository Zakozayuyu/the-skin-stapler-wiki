import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import SiteShell from './SiteShell';

const content = {
  privacy: {
    en: ['Privacy Policy', 'This independent fan site has no user accounts, contact forms, or newsletter. Our hosting provider may process technical logs, including IP addresses, requested pages, browser details, and access times, to deliver and secure the site.', 'We use Google Analytics to measure page views and site interactions. Analytics may use first-party cookies or similar identifiers; Google may receive device and browser information, online identifiers, and usage data for this purpose.'],
    de: ['Datenschutzerklärung', 'Diese unabhängige Fanseite hat keine Benutzerkonten, Kontaktformulare oder Newsletter. Unser Hosting-Anbieter kann technische Protokolle wie IP-Adressen, aufgerufene Seiten, Browserdaten und Zugriffszeiten verarbeiten, um die Website bereitzustellen und zu schützen.', 'Wir nutzen Google Analytics zur Messung von Seitenaufrufen und Interaktionen. Analytics kann eigene Cookies oder ähnliche Kennungen verwenden; Google kann dafür Geräte- und Browserinformationen, Online-Kennungen und Nutzungsdaten erhalten.'],
    'pt-br': ['Política de privacidade', 'Este site independente feito por fãs não possui contas de usuário, formulários de contato nem newsletter. O provedor de hospedagem pode processar registros técnicos, incluindo endereços IP, páginas acessadas, dados do navegador e horários de acesso, para fornecer e proteger o site.', 'Usamos o Google Analytics para medir visualizações de páginas e interações. O Analytics pode usar cookies primários ou identificadores semelhantes; o Google pode receber informações do dispositivo e do navegador, identificadores online e dados de uso para essa finalidade.'],
    es: ['Política de privacidad', 'Este sitio independiente de fans no tiene cuentas de usuario, formularios de contacto ni boletín. El proveedor de alojamiento puede tratar registros técnicos, incluidos direcciones IP, páginas solicitadas, datos del navegador y horas de acceso, para ofrecer y proteger el sitio.', 'Usamos Google Analytics para medir visitas e interacciones. Analytics puede usar cookies propias o identificadores similares; Google puede recibir información del dispositivo y del navegador, identificadores en línea y datos de uso para este fin.']
  },
  terms: {
    en: ['Terms of Service', 'The Skin Stapler Wiki is an independent, unofficial fan guide provided for informational purposes. It is not affiliated with Tainted Pact, Assemble Entertainment, Valve, or GOG.', 'Game names, artwork, screenshots, and related trademarks belong to their respective owners. Guide information may change after game updates; details that have not been verified are labeled clearly.'],
    de: ['Nutzungsbedingungen', 'The Skin Stapler Wiki ist ein unabhängiger, inoffizieller Fan-Guide zu Informationszwecken. Die Seite steht in keiner Verbindung zu Tainted Pact, Assemble Entertainment, Valve oder GOG.', 'Spielnamen, Grafiken, Screenshots und zugehörige Marken gehören ihren jeweiligen Eigentümern. Guide-Informationen können sich nach Updates ändern; unsichere Angaben sind als Bestätigung ausstehend markiert.'],
    'pt-br': ['Termos de serviço', 'The Skin Stapler Wiki é um guia independente e não oficial feito por fãs para fins informativos. O site não é afiliado à Tainted Pact, Assemble Entertainment, Valve ou GOG.', 'Nomes, artes, capturas e marcas do jogo pertencem aos respectivos proprietários. As informações podem mudar após atualizações; dados incertos são marcados como confirmação pendente.'],
    es: ['Términos del servicio', 'The Skin Stapler Wiki es una guía independiente y no oficial hecha por fans con fines informativos. No está afiliada a Tainted Pact, Assemble Entertainment, Valve ni GOG.', 'Los nombres, ilustraciones, capturas y marcas del juego pertenecen a sus respectivos propietarios. La información puede cambiar tras las actualizaciones; los datos inciertos se marcan como pendientes de confirmar.']
  }
} as const;

const privacyDetails = {
  en: {
    analyticsHeading: 'Google Analytics and your choices',
    googleLink: 'How Google uses data on partner sites',
    analyticsOptOut: 'Google Analytics opt-out browser add-on',
    contactHeading: 'Privacy questions',
    contact: 'If you email us, we use your address and message to respond to your request. For questions about this policy or your data, contact:'
  },
  de: {
    analyticsHeading: 'Google Analytics und Ihre Wahlmöglichkeiten',
    googleLink: 'Wie Google Daten auf Partnerwebsites verwendet',
    analyticsOptOut: 'Browser-Add-on zur Deaktivierung von Google Analytics',
    contactHeading: 'Fragen zum Datenschutz',
    contact: 'Wenn Sie uns eine E-Mail senden, nutzen wir Ihre Adresse und Nachricht, um Ihre Anfrage zu beantworten. Bei Fragen zu dieser Erklärung oder Ihren Daten kontaktieren Sie uns unter:'
  },
  'pt-br': {
    analyticsHeading: 'Google Analytics e suas opções',
    googleLink: 'Como o Google usa dados em sites parceiros',
    analyticsOptOut: 'Complemento de desativação do Google Analytics',
    contactHeading: 'Dúvidas sobre privacidade',
    contact: 'Se você nos enviar um e-mail, usaremos seu endereço e sua mensagem para responder à solicitação. Para dúvidas sobre esta política ou seus dados, entre em contato pelo endereço:'
  },
  es: {
    analyticsHeading: 'Google Analytics y tus opciones',
    googleLink: 'Cómo utiliza Google los datos en sitios de sus socios',
    analyticsOptOut: 'Complemento de inhabilitación de Google Analytics',
    contactHeading: 'Consultas sobre privacidad',
    contact: 'Si nos envías un correo, utilizaremos tu dirección y tu mensaje para responder. Para consultas sobre esta política o tus datos, escribe a:'
  }
} as const;

export default function LegalPage({ locale, type }: { locale: Locale; type: keyof typeof content }) {
  const [title, first, second] = content[type][locale];
  const home = { en: 'Home', de: 'Startseite', 'pt-br': 'Início', es: 'Inicio' }[locale];
  const path = localizePath(locale, `/${type}`);
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: home, item: absoluteUrl(localizePath(locale, '/')) },
    { '@type': 'ListItem', position: 2, name: title, item: absoluteUrl(path) }
  ] };
  const privacy = privacyDetails[locale];
  return <SiteShell locale={locale}><article className="container legal-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} /><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={localizePath(locale, '/')}>{home}</Link><span>/</span><b>{title}</b></nav><h1>{title}</h1><div className="card legal-copy"><p>{first}</p><p>{second}</p>{type === 'privacy' && <><h2>{privacy.analyticsHeading}</h2><p><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">{privacy.googleLink}</a> · <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">{privacy.analyticsOptOut}</a></p><h2>{privacy.contactHeading}</h2><p>{privacy.contact} <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p></>}</div></article></SiteShell>;
}
