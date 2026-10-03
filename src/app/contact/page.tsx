import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import { englishOnlyAlternates, siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact The Skin Stapler Wiki',
  description: 'Contact the independent The Skin Stapler Wiki about corrections, sources, image rights, or privacy questions.',
  alternates: englishOnlyAlternates('/contact')
};

export default function ContactPage() {
  return (
    <SiteShell locale="en">
      <article className="container legal-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><b>Contact</b>
        </nav>
        <h1>Contact The Skin Stapler Wiki</h1>
        <div className="card legal-copy">
          <p>This is an independent fan-made guide, not an official channel for Tainted Pact, Assemble Entertainment, Steam, or GOG.</p>

          <h2>Corrections and source material</h2>
          <p>If a guide contains an error or a claim that needs a better source, email <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>. Please include the page URL, the passage in question, and a link or description of the evidence. We will review it against the source policy described on our <Link href="/about">About page</Link>.</p>

          <h2>Privacy and rights questions</h2>
          <p>Use the same address for questions about our <Link href="/privacy">Privacy Policy</Link>, a request about personal data, or a concern about an image or other material used on this site. Please do not send passwords, payment details, or other sensitive information.</p>

          <h2>Other languages</h2>
          <p lang="de">Für Korrekturen, Quellenhinweise oder Datenschutzfragen schreiben Sie bitte an <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> und nennen Sie die betroffene Seitenadresse.</p>
          <p lang="pt-BR">Para correções, fontes ou questões de privacidade, escreva para <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> e informe o endereço da página.</p>
          <p lang="es">Para correcciones, fuentes o consultas de privacidad, escribe a <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> e indica la dirección de la página.</p>
        </div>
      </article>
    </SiteShell>
  );
}
