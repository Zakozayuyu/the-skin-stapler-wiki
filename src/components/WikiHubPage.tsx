import Link from 'next/link';
import { absoluteUrl } from '@/lib/seo';
import SiteShell from './SiteShell';

const sections = [
  {
    title: 'Start Here', eyebrow: 'Essential guides',
    links: [
      ['/walkthrough', 'Full Game Walkthrough', 'Complete chapter order from the Burrows Apartments to The Flesh Pit.'],
      ['/ending', 'Ending Explained', 'Spoiler-marked finale guide and current multiple-ending status.'],
      ['/guides/beginner', 'Beginner Guide', 'Controls, interaction basics, settings, and first-run tips.'],
      ['/guides/the-skin-stapler-gameplay', 'Gameplay Guide', 'Investigation, puzzles, viewpoints, combat, and playtime.']
    ]
  },
  {
    title: 'Characters & Cast', eyebrow: 'Who is who',
    links: [
      ['/guides/the-skin-stapler-voice-actors', 'Voice Actors & Full Cast', 'Confirmed roles and the official English voice cast.'],
      ['/guides/the-skin-stapler-fefe', 'Fefe', 'Opening playable character and voice performer.'],
      ['/guides/the-skin-stapler-layna', 'Nurse Layna', "The character behind Lazar's Blood Bank."],
      ['/guides/the-skin-stapler-scaroline', 'Scaroline', 'Underworld VHS owner and cast credit.']
    ]
  },
  {
    title: 'Scenes & Story', eyebrow: 'Carrion City',
    links: [
      ['/guides/the-skin-stapler-hot-dog', 'Hot Dog Scene', 'The Quick Fix scene with Hexy, explained.'],
      ['/guides/the-skin-stapler-demo', 'Demo Chapters', 'CCPD, Quick Fix, and Gutters End in the free demo.'],
      ['/walkthrough#chapter-order', 'Full Chapter List', 'Every released location and Aftermath section in order.'],
      ['/ending#meaning', 'Finale Meaning', 'How The Flesh Pit completes the investigation structure.']
    ]
  },
  {
    title: 'Release & Platforms', eyebrow: 'Play the game',
    links: [
      ['/guides/the-skin-stapler-release-date', 'Release Date', 'Full-game launch, demo timeline, and storefronts.'],
      ['/guides/the-skin-stapler-steam', 'Steam Guide', 'Features, language support, requirements, and demo.'],
      ['/guides/the-skin-stapler-pc-download', 'PC Download', 'Safe official download choices for Windows.'],
      ['/guides/the-skin-stapler-reddit', 'Community Discussion', 'A careful summary of player reactions.']
    ]
  }
] as const;

export default function WikiHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Skin Stapler Wiki',
    description: 'The Skin Stapler wiki covers the verified walkthrough, ending, cast, characters, release date, demo scenes, official links, and facts awaiting confirmation.',
    url: absoluteUrl('/wiki'),
    inLanguage: 'en',
    hasPart: sections.flatMap((section) => section.links.map(([href, name]) => ({ '@type': 'WebPage', name, url: absoluteUrl(href) })))
  };

  return (
    <SiteShell locale="en">
      <div className="wiki-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="wiki-hero">
          <div className="container">
            <nav className="breadcrumbs"><Link href="/">Home</Link><span>/</span><b>Wiki</b></nav>
            <span className="eyebrow">Carrion City case files</span>
            <h1>The Skin Stapler Wiki</h1>
            <p>The Skin Stapler wiki is an independent English guide to the full walkthrough, ending, characters, voice cast, release details, and Carrion City locations.</p>
            <div className="wiki-quick-links"><Link href="/walkthrough">Start the walkthrough</Link><Link href="/ending">Ending explained</Link><Link href="/guides">All guides</Link></div>
          </div>
        </section>

        <div className="container wiki-sections">
          <aside className="card wiki-status"><div><span className="status-dot" /> <strong>Full game coverage</strong></div><p>Updated for the August 6, 2026 PC release. Unverified details are marked instead of being presented as canon.</p></aside>
          <article className="wiki-copy keyword-article">
            <aside className="card answer-box"><strong>What this wiki covers</strong><p>Use this hub to follow the verified full-game route, understand the main ending, identify the cast and characters, check the PC release, and separate official facts from demo-era guesses. It is a fan-made reference, not an official Tainted Pact or Assemble Entertainment wiki.</p></aside>

            <h2>What is The Skin Stapler?</h2>
            <p>The Skin Stapler is a single-player retro PSX grindhouse horror game set in Carrion City. Detective Dick Slater and rookie Robbie Knox investigate a killer who removes victims’ skin, staples it to nearby walls, and leaves distorted tapes behind. Other chapters place the player in the roles of civilians caught in the same case.</p>
            <p>Tainted Pact developed the game, and Assemble Entertainment published it. The full Windows PC release launched on August 6, 2026, through Steam and GOG. Steam lists English interface, full audio, and subtitles as the official language support.</p>
            <p>The game is built as a short, authored horror story rather than an open world. Official copy emphasizes crime-scene investigation, light puzzles, unusual work shifts, multiple viewpoints, and tension over constant combat. Tainted Pact describes it as a game designed to be completed in one sitting.</p>

            <h2>Where should new players start?</h2>
            <p>Start with the <Link href="/walkthrough">full walkthrough</Link> if you want the released chapter order and practical progression checks. It begins with Fefe’s apartment, then moves through CCPD, Quick Fix, Gutters End, Luna’s shop, Underworld VHS, Lazar’s Blood Bank, Closing In, and The Flesh Pit. Aftermath sections connect the playable locations to Slater’s investigation.</p>
            <p>If you want to avoid spoilers, use the <Link href="/guides/beginner">beginner guide</Link> and the gameplay reference first. The <Link href="/ending">ending page</Link> names the killer, explains the revenge motive, and covers Robbie and Slater’s outcomes. It is deliberately separated from the general guide hub so the final reveal is not exposed by accident.</p>
            <p>The free demo is a separate Steam app and samples three sections: CCPD, Quick Fix, and Gutters End. It does not represent the full chapter list. Fefe’s apartment opening and the later workplace and finale chapters belong to the released game coverage.</p>

            <h2>Verified game facts at a glance</h2>
            <div className="wiki-fact-grid">
              <div className="card"><span>Release</span><strong>August 6, 2026</strong><p>Windows PC on Steam and GOG.</p></div>
              <div className="card"><span>Developer</span><strong>Tainted Pact</strong><p>Published by Assemble Entertainment.</p></div>
              <div className="card"><span>Mode</span><strong>Single-player</strong><p>No verified co-op or multiplayer mode.</p></div>
              <div className="card"><span>Achievements</span><strong>16 on Steam</strong><p>Individual conditions require separate checks.</p></div>
              <div className="card"><span>Language</span><strong>English</strong><p>Official interface, audio, and subtitles.</p></div>
              <div className="card"><span>Demo</span><strong>January 30, 2026</strong><p>Separate app with three sample chapters.</p></div>
            </div>

            <h2>Official sources and fan references</h2>
            <p>There is no official wiki operated by the developer or publisher in the supplied research. Official information comes from the Steam store, the developer’s itch.io page, Steam Discussions, and Tainted Pact or Assemble Entertainment announcements. Store pages take priority for release date, platform, language, and current availability.</p>
            <p>Two independently operated fan wikis are visible in search results: theskinstapler.com and theskinstapler.wiki. Their layouts and wording differ, so they are not mirrors, but neither is endorsed as official. This site uses their claims only when they agree with official material or can be checked against released gameplay.</p>
            <p>A third-party aggregator offering mobile, Cheat Engine, trainer, or save-download material was excluded from the content. Its main description copies official store text, and its platform claims conflict with the verified Windows release. An IGN database entry also still showed the outdated Q3 2026 window after launch, so the official August 6 date is used instead.</p>

            <h2>How uncertainty is handled</h2>
            <p>Facts supported by official storefronts or direct full-game footage are written plainly. Details found only in a fan page, search snippet, or automated transcript are qualified. When sources conflict or no direct comparison is available, the page marks the point as <strong>Pending confirmation</strong>.</p>
            <p>This matters most for alternate endings, old cast lists, exact chapter labels, and post-launch changes. One fan wiki reports small epilogue differences based on tapes, but two matched runs were not available to confirm them. The wiki therefore documents one verified main ending and leaves the reported variants pending.</p>
            <p>Live player counts, review totals, prices, and discounts can change. They are not reused as permanent facts unless a dated launch snapshot is the subject of the page. Current commercial details should always be checked on Steam or GOG before purchase.</p>
          </article>
          {sections.map((section) => <section className="wiki-section" key={section.title}>
            <div className="wiki-section-heading"><div><span>{section.eyebrow}</span><h2>{section.title}</h2></div><Link href="/guides">View all guides →</Link></div>
            <div className="wiki-card-grid">{section.links.map(([href, title, description], index) => <Link className="card wiki-card" href={href} key={`${section.title}-${title}`}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p><b>Open page →</b></Link>)}</div>
          </section>)}

          <section className="wiki-copy keyword-article">
            <h2>The Skin Stapler wiki FAQ</h2>
            <div className="faq-cards">
              <section className="card"><h3>Is this an official wiki?</h3><p>No. This is an independent fan guide. Official game information is linked to Steam, itch.io, Tainted Pact, or Assemble Entertainment where available.</p></section>
              <section className="card"><h3>Is the full game released?</h3><p>Yes. The Windows PC version released on August 6, 2026, through Steam and GOG. Some regional pages displayed August 7 because of timezone handling.</p></section>
              <section className="card"><h3>Does The Skin Stapler have multiplayer?</h3><p>No multiplayer mode is listed by the official stores. The released game is a single-player story with several playable viewpoints.</p></section>
              <section className="card"><h3>Is there a PS5 or mobile version?</h3><p>No console or mobile version is confirmed in the supplied official material. The verified release is for Windows PC; other platforms are Pending confirmation.</p></section>
              <section className="card"><h3>How often is the wiki updated?</h3><p>Pages are checked against the August 2026 version 1.0 research set. Later patches, new platforms, or revised credits need a fresh official source before being added.</p></section>
            </div>
          </section>

          <section className="card wiki-about">
            <div><span className="eyebrow">About this project</span><h2>Independent, source-aware coverage</h2></div>
            <p>This is a fan-made wiki, not an official Tainted Pact or Assemble Entertainment site. Official store pages and developer posts are used for release facts; full-game routes are cross-checked against published playthrough chapter data.</p>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
