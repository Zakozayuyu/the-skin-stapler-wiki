import Link from 'next/link';
import { articleMedia } from '@/lib/article-media';
import { absoluteUrl } from '@/lib/seo';
import SiteShell from './SiteShell';

const characters = [
  {
    name: 'Dick Slater',
    role: 'Lead detective',
    location: 'CCPD / Carrion City',
    chapter: 'Main investigation',
    playable: true,
    status: 'Survives',
    description: 'Burned-out detective hunting the Skin Stapler. The main protagonist of the story.',
    href: '/walkthrough',
    hrefLabel: 'Walkthrough'
  },
  {
    name: 'Robbie Knox',
    role: 'Rookie partner',
    location: 'CCPD / Carrion City',
    chapter: 'Main investigation',
    playable: true,
    status: 'Dies (finale)',
    description: "Slater's eager rookie partner, transferred from Routewood. Sacrifices himself in the final confrontation.",
    href: '/ending',
    hrefLabel: 'Ending explained'
  },
  {
    name: 'Elias Crow / The Skin Stapler',
    role: 'Killer / Antagonist',
    location: 'Flesh Pit / Carrion City',
    chapter: 'Late-game reveal',
    playable: false,
    status: 'Shot; fate unclear',
    description: 'Owner of the Flesh Pit barbecue restaurant and the real identity of the Skin Stapler. Dick shoots him in the finale, but the footage does not clearly establish death or arrest.',
    href: '/guides/who-is-the-skin-stapler',
    hrefLabel: 'Identity & motive'
  },
  {
    name: 'Fefe',
    role: 'Playable victim',
    location: "Fefe's Apartment",
    chapter: 'Game opening',
    playable: true,
    status: 'Dies (first victim)',
    description: 'The opening playable character, encountered in her apartment during a thunderstorm.',
    href: '/guides/the-skin-stapler-fefe',
    hrefLabel: 'Fefe guide'
  },
  {
    name: 'Hexy',
    role: 'Playable clerk',
    location: 'Quick Fix Convenience Store',
    chapter: 'Quick Fix',
    playable: true,
    status: 'Survives encounter',
    description: 'Overworked convenience store clerk who serves hot dogs and encounters the Skin Stapler.',
    href: '/guides/the-skin-stapler-hexy',
    hrefLabel: 'Hexy guide'
  },
  {
    name: 'Blair',
    role: 'Playable employee',
    location: 'Gutters End Bowling Alley',
    chapter: 'Gutters End',
    playable: true,
    status: 'Dies',
    description: 'Graveyard-shift employee at a run-down bowling alley. Killed by the Skin Stapler.',
    href: '/guides/the-skin-stapler-blair',
    hrefLabel: 'Blair guide'
  },
  {
    name: 'Luna',
    role: 'Playable shop owner',
    location: "Luna's Cream Filled Donut Holes",
    chapter: "Luna's shop",
    playable: true,
    status: 'Dies',
    description: "Runs an occult-themed donut and coffee shop. Killed at her shop alongside Chief O'Brien.",
    href: '/guides/the-skin-stapler-luna',
    hrefLabel: 'Luna guide'
  },
  {
    name: 'Nurse Layna',
    role: 'Playable character',
    location: "Lazar's Blood Bank",
    chapter: "Lazar's Blood Bank",
    playable: true,
    status: 'Not confirmed',
    description: "Runs Lazar's Blood Bank. A playable character announced by Tainted Pact.",
    href: '/guides/the-skin-stapler-layna',
    hrefLabel: 'Nurse Layna guide'
  },
  {
    name: 'Scaroline',
    role: 'Playable store owner',
    location: 'Underworld VHS',
    chapter: 'Underworld VHS',
    playable: true,
    status: 'Not confirmed',
    description: 'Playable owner of Underworld VHS, a grimy old-school video rental store in Carrion City. Her performer published a first-person gameplay video confirming the role.',
    href: '/guides/the-skin-stapler-scaroline',
    hrefLabel: 'Scaroline guide'
  },
  {
    name: 'DJ Woolz',
    role: 'Radio DJ',
    location: 'Radio station',
    chapter: 'Radio broadcasts',
    playable: false,
    status: 'Not confirmed',
    description: 'The radio DJ of Carrion City, reporting on the killings over the air.',
    href: '/guides/the-skin-stapler-voice-actors',
    hrefLabel: 'Voice actors'
  },
  {
    name: "Chief O'Brien",
    role: 'Police chief',
    location: 'CCPD',
    chapter: "Luna's shop",
    playable: false,
    status: 'Dies',
    description: 'Police chief found dead at Luna\'s donut shop alongside Luna.',
    href: '/ending',
    hrefLabel: 'Ending explained'
  },
  {
    name: 'Roxy',
    role: 'CCPD officer',
    location: 'CCPD',
    chapter: 'CCPD scenes',
    playable: false,
    status: 'Not confirmed',
    description: 'An officer at the Carrion City Police Department.',
    href: '/guides/the-skin-stapler-voice-actors',
    hrefLabel: 'Voice actors'
  },
  {
    name: 'Mr. Shrimp',
    role: 'Side character',
    location: 'Gutters End Bowling Alley',
    chapter: 'Gutters End',
    playable: false,
    status: 'Not confirmed',
    description: 'A character at Gutters End, voiced by the same actor as Blair.',
    href: '/guides/the-skin-stapler-blair',
    hrefLabel: 'Blair guide'
  },
  {
    name: 'Elmer',
    role: 'CCPD clerk',
    location: 'CCPD',
    chapter: 'CCPD scenes',
    playable: false,
    status: 'Not confirmed',
    description: 'A CCPD staff member who appears during the police-station investigation.',
    href: '/walkthrough',
    hrefLabel: 'Walkthrough'
  },
  {
    name: 'Lucas',
    role: 'Bowling-alley coworker',
    location: 'Gutters End Bowling Alley',
    chapter: 'Gutters End',
    playable: false,
    status: 'Not confirmed',
    description: 'Blair’s coworker at Gutters End, seen around the graveyard-shift handoff.',
    href: '/guides/the-skin-stapler-blair',
    hrefLabel: 'Blair guide'
  },
  {
    name: 'Bee',
    role: 'Cast-poster character',
    location: 'Not confirmed',
    chapter: 'Not confirmed',
    playable: 'Unknown',
    status: 'Not confirmed',
    description: 'A named role on the cast poster whose exact story function and playable status remain unconfirmed.',
    href: '/guides/the-skin-stapler-voice-actors',
    hrefLabel: 'Voice actors'
  },
  {
    name: 'Silus Kaine',
    role: "Elias's twin brother",
    location: 'Not confirmed',
    chapter: 'Late-game reveal',
    playable: false,
    status: 'Dies (before game)',
    description: "Elias Crow's twin brother, killed by Dick Slater. His death is the motive for the killings.",
    href: '/guides/who-is-the-skin-stapler',
    hrefLabel: 'Killer identity'
  }
] as const;

const statusColors: Record<string, string> = {
  'Survives': 'badge green-badge',
  'Survives encounter': 'badge green-badge',
  'Dies': 'badge red-badge',
  'Dies (finale)': 'badge red-badge',
  'Dies (first victim)': 'badge red-badge',
  'Shot; fate unclear': 'badge floor-badge',
  'Not confirmed': 'badge floor-badge',
  'Unknown': 'badge floor-badge'
};

export default function CharactersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'The Skin Stapler Characters',
        description: 'The Skin Stapler characters with roles, locations, playable status, known fates, and clearly marked unknowns.',
        url: absoluteUrl('/characters'),
        inLanguage: 'en',
        image: absoluteUrl(articleMedia.promo.src)
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Characters', item: absoluteUrl('/characters') }
        ]
      }
    ]
  };

  return (
    <SiteShell locale="en">
      <div className="wiki-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="wiki-hero">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><b>Characters</b>
            </nav>
            <span className="eyebrow">Carrion City cast</span>
            <h1>The Skin Stapler Characters</h1>
            <p>Every confirmed character in The Skin Stapler: who they are, where they appear, whether they are playable, and what is known about their role in the story.</p>
            <div className="wiki-quick-links">
              <Link href="/guides/the-skin-stapler-voice-actors">Voice actors &amp; full cast</Link>
              <Link href="/walkthrough">Full walkthrough</Link>
              <Link href="/guides">All guides</Link>
            </div>
          </div>
        </section>

        <div className="container wiki-sections">
          <aside className="card wiki-status">
            <div><span className="status-dot" /> <strong>Full game cast</strong></div>
            <p>Updated for the August 6, 2026 PC release. Voice actor credits come from the official cast poster. Story details are limited to what official sources and full-game transcripts confirm.</p>
          </aside>

          <article className="wiki-copy keyword-article">
            <aside className="card answer-box">
              <strong>What this page covers</strong>
              <p>This is the character hub for The Skin Stapler. It lists every confirmed character with their role, location, playable status, and a link to a detailed guide where available. For voice actor credits and performer mappings, see the <Link href="/guides/the-skin-stapler-voice-actors">voice actors guide</Link>.</p>
            </aside>

            <h2>Playable characters</h2>
            <p>The Skin Stapler features multiple playable perspectives. Players control Dick Slater as the main detective, and several civilians in their respective locations. The official description promises &quot;a hardened veteran detective and ordinary civilians in the final moments of their lives.&quot;</p>

            <div className="wiki-card-grid">
              {characters.filter(c => c.playable === true).map((char) => (
                <Link className="card wiki-card" href={char.href} key={char.name}>
                  <span className={statusColors[char.status] || 'badge'}>{char.status}</span>
                  <h3>{char.name}</h3>
                  <p>{char.description}</p>
                  <b>{char.hrefLabel} →</b>
                </Link>
              ))}
            </div>

            <h2>Supporting cast</h2>
            <p>The supporting cast includes characters who appear in specific locations, deliver dialogue, or play a role in the investigation without being primary playable viewpoints.</p>

            <div className="wiki-card-grid">
              {characters.filter(c => c.playable !== true).map((char) => (
                <Link className="card wiki-card" href={char.href} key={char.name}>
                  <span className={statusColors[char.status] || 'badge'}>{char.status}</span>
                  <h3>{char.name}</h3>
                  <p>{char.description}</p>
                  <b>{char.hrefLabel} →</b>
                </Link>
              ))}
            </div>
          </article>

          <section className="wiki-copy keyword-article">
            <h2>Character quick reference</h2>
            <div className="wiki-fact-grid">
              <div className="card">
                <span>Total cast</span>
                <strong>17 listed</strong>
                <p>Named characters with confirmed roles or credits.</p>
              </div>
              <div className="card">
                <span>Playable</span>
                <strong>8 confirmed</strong>
                <p>Dick Slater, Robbie Knox, Fefe, Hexy, Blair, Luna, Nurse Layna, Scaroline.</p>
              </div>
              <div className="card">
                <span>Fully voiced</span>
                <strong>Yes</strong>
                <p>Every character has English voice acting.</p>
              </div>
              <div className="card">
                <span>Cast poster</span>
                <strong>11 credits</strong>
                <p>The official poster maps characters to performers.</p>
              </div>
            </div>

            <h2>Related guides</h2>
            <div className="wiki-card-grid">
              <Link className="card wiki-card" href="/guides/the-skin-stapler-voice-actors">
                <span className="badge blue-badge">Cast</span>
                <h3>Voice Actors &amp; Full Cast</h3>
                <p>Confirmed roles and the official English voice cast.</p>
                <b>Open page →</b>
              </Link>
              <Link className="card wiki-card" href="/guides/who-is-the-skin-stapler">
                <span className="badge blue-badge">Identity</span>
                <h3>Who Is The Skin Stapler?</h3>
                <p>The killer&apos;s identity, motive, and evidence.</p>
                <b>Open page →</b>
              </Link>
              <Link className="card wiki-card" href="/walkthrough">
                <span className="badge blue-badge">Walkthrough</span>
                <h3>Full Walkthrough</h3>
                <p>Every chapter in order, with character appearances noted.</p>
                <b>Open page →</b>
              </Link>
              <Link className="card wiki-card" href="/ending">
                <span className="badge tier-badge">Spoilers</span>
                <h3>Ending Explained</h3>
                <p>The finale, Robbie&apos;s fate, and Slater&apos;s final choice.</p>
                <b>Open page →</b>
              </Link>
            </div>
          </section>

          <section className="card wiki-about">
            <div><span className="eyebrow">About this page</span><h2>Source-aware character coverage</h2></div>
            <p>Character facts come from the official cast poster and <a href="https://store.steampowered.com/app/4310610/The_Skin_Stapler/" target="_blank" rel="noreferrer">Steam description</a>, a verified <a href="https://www.youtube.com/watch?v=EcgnRprUU5k" target="_blank" rel="noreferrer">complete-game playthrough</a>, and performer evidence such as <a href="https://www.youtube.com/watch?v=RmrnKkYjeqU" target="_blank" rel="noreferrer">BlairVA’s recorded run</a>. Details not confirmed by those sources are marked as unconfirmed. This is a fan-made reference, not an official Tainted Pact or Assemble Entertainment site.</p>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
