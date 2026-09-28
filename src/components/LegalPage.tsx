import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { absoluteUrl, siteConfig } from '@/lib/seo';
import SiteShell from './SiteShell';

const content = {
  privacy: {
    en: ['Privacy Policy', 'This independent fan site has no user accounts, contact forms, or newsletter. Our hosting provider may process technical logs, including IP addresses, requested pages, browser details, and access times, to deliver and secure the site.', 'We use Google Analytics to measure page views and site interactions. Analytics may use first-party cookies or similar identifiers; Google may receive device and browser information, online identifiers, and usage data for this purpose. We have also installed Google AdSense code; ads may appear after Google approves the site.'],
    de: ['Datenschutzerklärung', 'Diese unabhängige Fanseite hat keine Benutzerkonten, Kontaktformulare oder Newsletter. Unser Hosting-Anbieter kann technische Protokolle wie IP-Adressen, aufgerufene Seiten, Browserdaten und Zugriffszeiten verarbeiten, um die Website bereitzustellen und zu schützen.', 'Wir nutzen Google Analytics zur Messung von Seitenaufrufen und Interaktionen. Analytics kann eigene Cookies oder ähnliche Kennungen verwenden; Google kann dafür Geräte- und Browserinformationen, Online-Kennungen und Nutzungsdaten erhalten. Außerdem haben wir Google-AdSense-Code eingebunden; nach der Freigabe der Website durch Google können Anzeigen erscheinen.'],
    'pt-br': ['Política de privacidade', 'Este site independente feito por fãs não possui contas de usuário, formulários de contato nem newsletter. O provedor de hospedagem pode processar registros técnicos, incluindo endereços IP, páginas acessadas, dados do navegador e horários de acesso, para fornecer e proteger o site.', 'Usamos o Google Analytics para medir visualizações de páginas e interações. O Analytics pode usar cookies primários ou identificadores semelhantes; o Google pode receber informações do dispositivo e do navegador, identificadores online e dados de uso para essa finalidade. Também instalamos o código do Google AdSense; anúncios podem aparecer após a aprovação do site pelo Google.'],
    es: ['Política de privacidad', 'Este sitio independiente de fans no tiene cuentas de usuario, formularios de contacto ni boletín. El proveedor de alojamiento puede tratar registros técnicos, incluidos direcciones IP, páginas solicitadas, datos del navegador y horas de acceso, para ofrecer y proteger el sitio.', 'Usamos Google Analytics para medir visitas e interacciones. Analytics puede usar cookies propias o identificadores similares; Google puede recibir información del dispositivo y del navegador, identificadores en línea y datos de uso para este fin. También hemos instalado el código de Google AdSense; los anuncios pueden aparecer cuando Google apruebe el sitio.']
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

const privacyDetails = {
  en: {
    adsHeading: 'Advertising data and third parties',
    ads: 'When ads are served, Google and other third-party ad vendors may place and read cookies on your browser, or use web beacons, IP addresses, and other identifiers to collect information. Data about visits to this site and other sites may be collected, shared with Google and participating ad partners, and used to deliver, measure, and personalize ads. Google advertising cookies allow Google and its partners to select ads based on those previous visits.',
    partnersHeading: 'Ad partners and choices',
    partners: 'The ad technology partners that can participate depend on the settings in our AdSense account. Google publishes information about eligible partners and their data practices. Where a consent message is required, it should show the partners selected for this site and offer consent choices. You can change personalized ad preferences or opt out using the links below.',
    partnerLink: 'Google ad technology partners',
    googleLink: 'How Google uses data on partner sites',
    analyticsOptOut: 'Google Analytics opt-out browser add-on',
    contactHeading: 'Privacy questions',
    contact: 'If you email us, we use your address and message to respond to your request. For questions about this policy or your data, contact:'
  },
  de: {
    adsHeading: 'Werbedaten und Dritte',
    ads: 'Wenn Anzeigen ausgeliefert werden, können Google und andere Drittanbieter Cookies in Ihrem Browser setzen und lesen oder Web-Beacons, IP-Adressen und andere Kennungen zur Datenerhebung verwenden. Daten über Besuche dieser und anderer Websites können erhoben, an Google und beteiligte Werbepartner weitergegeben und für die Auslieferung, Messung und Personalisierung von Anzeigen verwendet werden. Google-Werbe-Cookies ermöglichen Anzeigen auf Grundlage früherer Besuche.',
    partnersHeading: 'Werbepartner und Wahlmöglichkeiten',
    partners: 'Welche Werbetechnologiepartner teilnehmen können, hängt von den Einstellungen unseres AdSense-Kontos ab. Google veröffentlicht Informationen über mögliche Partner und deren Datenverarbeitung. Wo eine Einwilligungsabfrage erforderlich ist, sollte sie die für diese Website ausgewählten Partner und die Einwilligungsoptionen anzeigen. Über die folgenden Links können Sie personalisierte Anzeigen verwalten oder ihnen widersprechen.',
    partnerLink: 'Google-Werbetechnologiepartner',
    googleLink: 'Wie Google Daten auf Partnerwebsites verwendet',
    analyticsOptOut: 'Browser-Add-on zur Deaktivierung von Google Analytics',
    contactHeading: 'Fragen zum Datenschutz',
    contact: 'Wenn Sie uns eine E-Mail senden, nutzen wir Ihre Adresse und Nachricht, um Ihre Anfrage zu beantworten. Bei Fragen zu dieser Erklärung oder Ihren Daten kontaktieren Sie uns unter:'
  },
  'pt-br': {
    adsHeading: 'Dados de publicidade e terceiros',
    ads: 'Quando anúncios são exibidos, o Google e outros fornecedores de publicidade podem gravar e ler cookies no navegador ou usar web beacons, endereços IP e outros identificadores para coletar informações. Dados sobre visitas a este e a outros sites podem ser coletados, compartilhados com o Google e parceiros de publicidade participantes e usados para exibir, medir e personalizar anúncios. Os cookies de publicidade do Google permitem selecionar anúncios com base nessas visitas anteriores.',
    partnersHeading: 'Parceiros de anúncios e opções',
    partners: 'Os parceiros de tecnologia de anúncios que podem participar dependem das configurações da nossa conta do AdSense. O Google publica informações sobre parceiros elegíveis e suas práticas de dados. Onde uma mensagem de consentimento for necessária, ela deverá mostrar os parceiros selecionados para este site e oferecer opções de consentimento. Os links abaixo permitem gerenciar ou desativar anúncios personalizados.',
    partnerLink: 'Parceiros de tecnologia de anúncios do Google',
    googleLink: 'Como o Google usa dados em sites parceiros',
    analyticsOptOut: 'Complemento de desativação do Google Analytics',
    contactHeading: 'Dúvidas sobre privacidade',
    contact: 'Se você nos enviar um e-mail, usaremos seu endereço e sua mensagem para responder à solicitação. Para dúvidas sobre esta política ou seus dados, entre em contato pelo endereço:'
  },
  es: {
    adsHeading: 'Datos publicitarios y terceros',
    ads: 'Cuando se muestran anuncios, Google y otros proveedores publicitarios pueden colocar y leer cookies en tu navegador o utilizar balizas web, direcciones IP y otros identificadores para recopilar información. Los datos sobre visitas a este y otros sitios pueden recopilarse, compartirse con Google y los socios publicitarios participantes y utilizarse para mostrar, medir y personalizar anuncios. Las cookies publicitarias de Google permiten seleccionar anuncios según esas visitas anteriores.',
    partnersHeading: 'Socios publicitarios y opciones',
    partners: 'Los socios de tecnología publicitaria que pueden participar dependen de la configuración de nuestra cuenta de AdSense. Google publica información sobre los socios aptos y sus prácticas de datos. Cuando sea necesario un mensaje de consentimiento, este deberá mostrar los socios seleccionados para este sitio y ofrecer opciones de consentimiento. Los enlaces siguientes permiten gestionar o rechazar los anuncios personalizados.',
    partnerLink: 'Socios de tecnología publicitaria de Google',
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
  return <SiteShell locale={locale}><article className="container legal-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} /><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href={localizePath(locale, '/')}>{home}</Link><span>/</span><b>{title}</b></nav><h1>{title}</h1><div className="card legal-copy"><p>{first}</p><p>{second}</p>{type === 'privacy' && <><h2>{privacy.adsHeading}</h2><p>{privacy.ads}</p><h2>{privacy.partnersHeading}</h2><p>{privacy.partners} <a href="https://support.google.com/adsense/answer/9012903?hl=en" target="_blank" rel="noopener noreferrer">{privacy.partnerLink}</a> · <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">{privacy.googleLink}</a>.</p><p>{adOptOutLabels[locale]} <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> · <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">YourAdChoices</a> · <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">{privacy.analyticsOptOut}</a></p><h2>{privacy.contactHeading}</h2><p>{privacy.contact} <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p></>}</div></article></SiteShell>;
}
