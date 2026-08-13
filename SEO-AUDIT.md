# The Skin Stapler Conservative SEO Audit

Audit date: 2026-08-13  
Site: https://theskinstapler.com  
Scope: local Next.js project, production sitemap/robots, supplied 7-day GSC data  
Operating rule: protect winners, add value, do not restructure

## Executive Summary

The site is already performing well: 784 clicks, 7,301 impressions, 10.7% CTR, and an average position of 5.5 in the supplied seven-day GSC window. Google already associates the domain with The Skin Stapler wiki, characters, voice actors, ending, and walkthrough intent. This audit therefore recommends additive changes only.

The technical baseline is healthy. The production sitemap is reachable, contains 55 canonical URLs, and matches GSC's 55 discovered pages. The generated export has 55 canonical/indexable pages plus two noindex error documents. `robots.txt` allows crawling and names the correct sitemap and host. English winner URLs have self-referencing canonicals and are present in the sitemap.

The strongest low-risk opportunity is the Voice Actors / Characters cluster. The voice-cast, Fefe, Layna, and Scaroline pages contain substantial verified information, but the character articles currently have no contextual links to one another. The homepage also lacks direct entries to the two strongest character/cast assets. These gaps can be fixed without changing winner URLs, titles, H1s, canonicals, or primary intent.

The most urgent content hygiene issue is stale dynamic storefront data on the homepage: `54 Players Online`, `121 Steam Reviews`, and `94.21% Positive` are displayed in every language without an update mechanism. These values should be replaced with stable facts. Player-facing copy also contains internal research-report phrases such as “supplied research,” “collected material,” and repeated “Pending confirmation.” Facts should remain unchanged while those phrases are rewritten in natural language.

## Technical Baseline

| Check | Result | Risk | Recommended action |
| --- | --- | --- | --- |
| Production sitemap | Reachable; 55 URLs | Low | Keep current URL and generation strategy |
| GSC sitemap | Successful; 55 discovered pages | Low | No resubmission or sitemap URL change |
| Generated HTML | 57 HTML documents | Low | 55 indexable pages plus two noindex error documents is expected |
| Canonicals | 55 canonical tags on 55 sitemap pages | Low | Preserve current canonical strategy |
| Robots | `Allow: /`; correct host and sitemap | Low | Keep unchanged |
| 404/error indexing | Two generated noindex documents | Low | Keep out of sitemap |
| Hreflang | English, de-DE, pt-BR, es, x-default on localized groups | Low | Preserve reciprocal groups |
| Structured data | WebSite, VideoGame, Article/CollectionPage, breadcrumbs on applicable pages | Low | Keep schema factual; do not add decorative schema |
| Static export | Build succeeds | Medium | Existing Next.js redirect/header warnings are known export limitations; do not restructure URLs to solve them |
| Images | Existing first-party promotional hero and site icons have descriptive alt text | Low | Reuse only owned/reliable assets; document future character-image needs |

## Existing Pages

“Internal links” below refers to useful links in the main page content, not the repeated header/footer navigation.

| URL | Title / H1 | Primary intent | Current internal links | Potential query | Risk | Recommended action |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | The Skin Stapler Wiki — Walkthrough, Puzzles & Endings / The Skin Stapler Wiki | Main game wiki | Beginner, walkthrough, ending, guide placeholders | the skin stapler wiki; skin stapler game wiki | **PROTECTED / High** | KEEP title, H1, URL, canonical and hero copy; add popular cast/character entry points; remove stale live metrics |
| `/wiki` | The Skin Stapler Wiki: Walkthrough, Cast & Ending / The Skin Stapler Wiki | Navigational content hub | Strong links to all English guides | the skin stapler wiki | Medium | KEEP as navigation/reference hub; do not merge with homepage; monitor cannibalization |
| `/walkthrough` | The Skin Stapler Walkthrough: Full Game Chapter Guide / same | Full-game route and chapter order | Demo, ending, generic related links | the skin stapler walkthrough | **PROTECTED / High** | KEEP title/H1/URL; add contextual links to Fefe, Hot Dog, Layna and cast pages; clean research-report wording |
| `/ending` | The Skin Stapler Ending Explained: Full Story / same | Ending explanation | Walkthrough and generic related links | the skin stapler ending; skin stapler ending | **PROTECTED / High** | KEEP title/H1/URL; clarify post-credits answer and clean report-style wording |
| `/guides` | The Skin Stapler Guides / Investigation Guides | All-guides hub | Links to all guides | the skin stapler guides | Low | KEEP; make cast/character cluster visually and contextually clear |
| `/guides/beginner` | The Skin Stapler Beginner Guide / Beginner Guide | First-run help | Home and guide hub only | the skin stapler beginner guide | Low | KEEP; no unsupported controls or puzzle details |
| `/guides/the-skin-stapler-voice-actors` | The Skin Stapler Voice Actors: Full Cast & Roles / same | Voice actors and character-role mapping | Home and guide hub only | the skin stapler voice actors; skin stapler voice actors | High opportunity | IMPROVE existing page; do not create a competing `/voice-actors`; add role/appearance/relevant-character links |
| `/guides/the-skin-stapler-fefe` | The Skin Stapler Fefe: Character and Voice Actor / same | Fefe identity, opening role and performer | Home and guide hub only | fefe skin stapler; the skin stapler fefe | **PROTECTED / High** | KEEP title/H1/URL; add natural links to cast, walkthrough and related characters; retain verified facts |
| `/guides/the-skin-stapler-layna` | The Skin Stapler Layna: Nurse Layna Explained / same | Nurse Layna identity, performer and location | Home and guide hub only | the skin stapler layna; nurse layna skin stapler | **PROTECTED / High** | KEEP title/H1/URL; link to cast, walkthrough and related character pages; retain verified facts |
| `/guides/the-skin-stapler-scaroline` | The Skin Stapler Scaroline: Character and Voice Actor / same | Scaroline identity, Underworld VHS and performer | Home and guide hub only | the skin stapler scaroline | Medium | Add to the same character cluster; no separate new hub |
| `/guides/the-skin-stapler-hot-dog` | The Skin Stapler Hot Dog Scene: Full Explanation / same | Quick Fix scene and serving order | Home and guide hub only | the skin stapler hot dog | Medium | Link to walkthrough, Hexy cast credit and demo |
| `/guides/the-skin-stapler-demo` | The Skin Stapler Demo: Chapters, Length, Download / same | Demo content and access | Home and guide hub only | the skin stapler demo | Low | Keep; link naturally to the full walkthrough and Quick Fix scene |
| `/guides/the-skin-stapler-gameplay` | The Skin Stapler Gameplay: How It Actually Plays / same | Gameplay loop and expectations | Home and guide hub only | the skin stapler gameplay | Low | Keep primary intent distinct from walkthrough |
| `/guides/the-skin-stapler-release-date` | The Skin Stapler Release Date, Price and Platforms / same | Release facts | Home and guide hub only | the skin stapler release date | Low | Keep; retain launch-price context but avoid implying it is current |
| `/guides/the-skin-stapler-steam` | The Skin Stapler Steam Guide: Price, Demo, Specs / same | Steam-specific store information | Home and guide hub only | the skin stapler steam | Medium | Keep distinct from release date; remove stale regional price snapshots if presented as current |
| `/guides/the-skin-stapler-pc-download` | The Skin Stapler PC Download: Safe Official Options / same | Official Windows download routes | Home and guide hub only | the skin stapler pc download | Medium | Keep safety/official-store intent; do not expand to APK/torrent pages |
| `/guides/the-skin-stapler-reddit` | The Skin Stapler Reddit: What Players Are Saying / same | Community sentiment summary | Home and guide hub only | the skin stapler reddit | Medium | Keep dated sentiment context; avoid turning old review totals into current claims |
| `/privacy` | Privacy Policy / Privacy Policy | Legal | Home | privacy | Low | DO_NOT_TOUCH unless compliance changes |
| `/terms` | Terms of Service / Terms of Service | Legal | Home | terms | Low | DO_NOT_TOUCH unless compliance changes |

### Localized route groups

| Route group | Pages | Intent | Risk | Recommended action |
| --- | ---: | --- | --- | --- |
| `/{de|pt-br|es}` | 3 | Localized homepage/wiki entry | Medium | Preserve current canonicals and hreflang; remove the same stale dynamic metrics |
| `/{locale}/{wiki|walkthrough|ending}` | 9 | Localized pillars | Medium | Preserve URLs and language parity |
| `/{locale}/guides/{fefe|hot-dog|release-date|voice-actors}` | 12 | Localized supporting guides | Medium | Preserve URLs, self-canonicals, and reciprocal hreflang |
| `/{locale}/guides` and `/guides/beginner` | 6 | Localized hubs/start pages | Low | Keep in sitemap and navigation |
| `/{locale}/{privacy|terms}` | 6 | Localized legal | Low | DO_NOT_TOUCH unless compliance changes |

## Winning Pages

The following pages are marked **PROTECTED** and must not have their URL, canonical, primary intent, or established title/H1 changed during this implementation:

- `/` — 305 clicks
- `/guides/the-skin-stapler-fefe` — 260 clicks
- `/guides/the-skin-stapler-layna` — 73 clicks
- `/ending` — 67 clicks
- `/walkthrough` — established query/page match

Protection policy: additive sections, contextual internal links, stable-fact cleanup, and clearer player language only. No merges, redirects, slug changes, or broad rewrites.

## Search Intent Mapping

| Query cluster | Owning page | Supporting pages | Decision |
| --- | --- | --- | --- |
| the skin stapler wiki; skin stapler game wiki | `/` | `/wiki`, `/guides` | KEEP homepage as primary brand/wiki landing page; `/wiki` remains a navigational hub |
| the skin stapler voice actors; skin stapler voice actors | `/guides/the-skin-stapler-voice-actors` | Fefe, Layna, Scaroline, Hot Dog/Hexy | IMPROVE existing page; no competing new URL |
| fefe skin stapler; the skin stapler fefe | `/guides/the-skin-stapler-fefe` | Voice actors, walkthrough | PROTECT and strengthen cluster links |
| the skin stapler layna | `/guides/the-skin-stapler-layna` | Voice actors, walkthrough | PROTECT and strengthen cluster links |
| the skin stapler ending; skin stapler ending | `/ending` | Walkthrough, wiki | PROTECT; improve answer structure only |
| the skin stapler walkthrough | `/walkthrough` | Demo, Fefe, Hot Dog, Layna, ending | PROTECT pillar and add chapter-context links |
| the skin stapler achievements | No dedicated page | `/walkthrough`, `/guides#achievements` | DO NOT CREATE until all 16 requirements are reliably verified |
| the skin stapler puzzles | No dedicated page | `/guides#puzzles` | DO NOT CREATE until real puzzle steps are available |

## Content Gaps

### S — implement now

1. Complete the existing Voice Actors page as the cast/character hub with verified appearance context and links to character guides.
2. Add contextual links among Voice Actors, Fefe, Layna, Scaroline, Walkthrough, Demo, and Hot Dog pages.
3. Add a compact Popular Guides / Characters entry area to the homepage without changing its hero, title, H1, URL, or primary copy.
4. Remove homepage player count, review count, and positive-percentage snapshots because no automatic source/update/fallback exists.
5. Replace reader-facing research-report labels and recurring internal-process wording with natural player language while preserving uncertainty.

### A — defer until evidence exists

1. Achievements hub with all 16 verified unlock requirements.
2. One to three chapter walkthroughs only after real step-level instructions are available.
3. Character images only after reliable first-party or owned assets are added to the repository.

### B — do not implement in this round

1. Puzzle hub without verified puzzle solutions.
2. Platform-demand pages for PS5, Xbox, Switch, Android, APK, Mac, or torrent terms.
3. A separate `/characters` page that substantially duplicates the voice-actor hub.

## Cannibalization Risks

| Pages | Risk | Decision |
| --- | --- | --- |
| `/` vs `/wiki` | Both use “The Skin Stapler Wiki” | Do not merge. Homepage owns broad brand/wiki intent; `/wiki` is the navigation/reference hub. Monitor GSC page/query split after 7–14 days. |
| Voice Actors vs Fefe/Layna/Scaroline | Shared cast terms | Low when the hub targets the full cast and character pages target one person. Add reciprocal links and keep distinct titles. |
| Release Date vs Steam vs PC Download | Shared store/platform facts | Keep distinct intents: launch facts, Steam product details, and safe download options. Do not consolidate winner URLs. |
| Demo vs Walkthrough vs Hot Dog | Shared Quick Fix/demo language | Keep demo overview, full-game pillar, and scene-specific task separate; use contextual links to clarify scope. |

## KEEP / IMPROVE / CREATE / MERGE / DO_NOT_TOUCH

### KEEP

- All current public URLs and route hierarchy
- Homepage, Fefe, Layna, Ending and Walkthrough titles/H1s
- Current canonical domain and self-canonical strategy
- Current sitemap URL and multilingual hreflang groups
- `/guides/the-skin-stapler-voice-actors` as the existing cast hub URL

### IMPROVE

- Character/cast contextual internal links
- Voice-cast table usefulness and role context
- Homepage links to proven character/cast topics
- Ending post-credits answer clarity
- Player-facing wording that currently reads like an internal research report
- Central storage for stable game facts

### CREATE

- `src/lib/game-facts.ts` as a single source of truth for stable release/cast facts
- No new public SEO page in this evidence-limited round

### MERGE

- None. Similar subject matter alone is not sufficient reason to merge indexed pages.

### DO_NOT_TOUCH

- Winner slugs, canonicals, titles, H1s and main intent
- Domain, framework, trailing-slash policy and www/non-www policy
- Legal pages unless a legal requirement changes
- Unverified achievements, puzzle codes, endings, actors, relationships or platform releases

## Implementation Safety Gates

- No winning URL changes
- No new redirects
- No canonical strategy changes
- No noindex changes on formal content pages
- No new public pages without verified, non-thin content
- Every added internal link must use descriptive, contextual anchor text
- Build, typecheck, lint where configured, sitemap, canonical, robots, broken-link and stale-copy checks must pass before completion

