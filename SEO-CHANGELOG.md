# The Skin Stapler SEO Changelog

Implementation date: 2026-08-13  
Strategy: conservative, additive optimization  
Public pages created: none

## Protected Assets

The following winner properties were not changed: URL, canonical, title, H1, and primary search intent.

- `/`
- `/guides/the-skin-stapler-fefe`
- `/guides/the-skin-stapler-layna`
- `/ending`
- `/walkthrough`

No redirects, slug changes, URL merges, trailing-slash changes, domain changes, or canonical-policy changes were introduced.

## Modified URLs

| Modified URL | What changed | Why | Target query | Risk | Expected benefit |
| --- | --- | --- | --- | --- | --- |
| `/` | Added a compact Characters, Cast & Story entry section; retained the original five-card hero layout while replacing volatile Steam activity metrics with verified platform, developer and store facts | Send homepage authority to proven GSC topics while preserving the familiar homepage presentation | the skin stapler wiki; skin stapler game wiki; the skin stapler voice actors | Low | More useful evergreen facts and stronger internal discovery without changing homepage intent |
| `/de`, `/pt-br`, `/es` | Added equivalent localized popular-guide entries and the same five stable hero facts with localized labels | Keep multilingual homepage parity | localized brand/wiki queries | Low | Consistent localized homepages and stronger localized internal links |
| `/guides/the-skin-stapler-voice-actors` | Expanded the cast table with role/appearance and relevant-guide columns; added page-specific related links; replaced research-report wording with player language | Use the existing ranking URL as the Voice Actors / Characters hub instead of creating a competing page | the skin stapler voice actors; skin stapler voice actors | Low–Medium | Stronger cast intent coverage, better character discovery, less cannibalization risk |
| `/guides/the-skin-stapler-fefe` | Added contextual links to the full cast and Fefe’s walkthrough opening; added page-specific related character/story links; cleaned internal research wording | Protect and strengthen the site’s highest-value character page | fefe skin stapler; the skin stapler fefe | Low | Better cluster authority and next-step navigation without changing the winning title or H1 |
| `/guides/the-skin-stapler-layna` | Added contextual links to the full cast and Lazar’s Blood Bank route; added related character links; cleaned report-style wording | Strengthen the second winning character asset | the skin stapler layna; nurse layna skin stapler | Low | More relevant internal authority and clearer role/location context |
| `/guides/the-skin-stapler-scaroline` | Linked Underworld VHS to the walkthrough and voice-cast cluster; reconciled full-game placement with the still-unknown duration of control; cleaned research wording | Resolve cross-page inconsistency and complete the character cluster | the skin stapler scaroline | Low | More consistent facts and stronger character/cast relationships |
| `/walkthrough` | Added contextual links from Fefe, Quick Fix, Scaroline, and Nurse Layna chapter mentions; simplified uncertainty language | Turn the walkthrough pillar into a genuine distributor of internal authority | the skin stapler walkthrough | Low | Improved chapter-to-character relevance while preserving route, title and H1 |
| `/ending` | Added a direct post-credits answer and TOC entry; simplified uncertainty language | Match real ending sub-intents without inventing secret/true/good/bad endings | the skin stapler ending; skin stapler ending; the skin stapler post credits | Low | Clearer answer extraction and broader verified ending coverage |
| `/guides/the-skin-stapler-hot-dog` | Added distinct related links to walkthrough, demo and Hexy’s cast credit; removed research-report phrasing | Clarify Quick Fix’s place in the demo, full route and cast cluster | the skin stapler hot dog | Low | Better topical context and user navigation |
| `/guides/the-skin-stapler-demo` | Added distinct related links to full walkthrough, Quick Fix and Fefe; rewrote internal-process language | Clarify demo-versus-full-game boundaries | the skin stapler demo | Low | Stronger scope differentiation and useful next steps |
| `/guides/the-skin-stapler-gameplay` | Added related links to beginner, demo and walkthrough; replaced report-style wording | Keep gameplay intent distinct while connecting it to task-oriented guides | the skin stapler gameplay | Low | Better topical flow without intent overlap |
| `/guides/the-skin-stapler-release-date` | Added related store/download/demo links; made launch-price and update caveats natural | Separate stable launch facts from time-sensitive store data | the skin stapler release date | Low | Reduced stale-data risk and clearer store-intent pathways |
| `/guides/the-skin-stapler-steam` | Added related release/demo/download links; removed research-report phrasing | Distinguish Steam product intent from release-date and download intent | the skin stapler steam | Low | Clearer cluster boundaries and improved internal discovery |
| `/guides/the-skin-stapler-pc-download` | Added related official-store links; simplified safety and compatibility caveats | Preserve safe-download intent and avoid unsupported platform claims | the skin stapler pc download | Low | More useful official next steps and less report-like copy |
| `/guides/the-skin-stapler-reddit` | Added related gameplay/cast/walkthrough links; removed changing social metrics as factual targets | Separate community opinion from stable facts | the skin stapler reddit | Low | Better fact/opinion boundary and topic flow |
| `/guides/beginner` | Replaced three empty “Pending confirmation” cards with concise, factual starting guidance and a walkthrough link | Remove thin placeholder content without inventing controls or puzzle answers | the skin stapler beginner guide | Low | Higher information value and fewer dead-end sections |
| `/guides` | Replaced internal research-language labels with player-facing guide status copy | Remove AI/research-report tone from the main content hub | the skin stapler guides | Low | Clearer user-facing interface |
| `/wiki` | Rewrote internal sourcing/process language into natural player-facing explanations | Preserve facts while removing visible research-report language | the skin stapler wiki | Low | More natural reading experience and stronger trust |
| `/de/privacy`, `/pt-br/privacy`, `/es/privacy` | Localized title and meta description | Remove duplicate English legal metadata across hreflang pages | localized privacy intent | Low | Unique, language-matched metadata |
| `/de/terms`, `/pt-br/terms`, `/es/terms` | Localized title and meta description | Remove duplicate English legal metadata across hreflang pages | localized terms intent | Low | Unique, language-matched metadata |

## Sitewide Changes

| Change | Why | Risk | Expected benefit |
| --- | --- | --- | --- |
| Added page-specific Related Guides sets for all English keyword articles | Each article now has three to four relevant links instead of a repeated generic set | Low | More coherent topical clusters and fewer near-orphan content pages |
| Added `src/lib/game-facts.ts` | Centralizes stable value, source, verification date and status for release, developer, publisher, platform, stores, mode, achievements and audio language | Low | Reduces future cross-page fact drift |
| Reused central facts in homepage cards and VideoGame schema | Ensures repeated stable facts come from one source | Low | Better consistency between visible copy and structured data |
| Removed all listed research-report phrases from player-facing source | The site should read like a game guide, not an internal evidence memo | Low | More natural UX without changing verified facts |
| Added `eslint.config.mjs` using Next.js Core Web Vitals and TypeScript presets | The installed ESLint 9 had no runnable flat config | Low | Restores a working lint quality gate |
| Added contextual official artwork and gameplay screenshots to article pages | Long text-only guides now include a relevant visual with localized alt text, caption, source link and Article schema image | Low | Better scanability, clearer topic context and more professional multilingual presentation |
| Added `IMAGE-SOURCES.md` and local WebP copies under `public/images/official/` | Records image provenance and avoids fragile third-party hotlinks | Low | Auditable sourcing, smaller payloads and stable image delivery |

## New Pages

No new public SEO page was created. The existing Voice Actors URL already satisfies the strongest proven intent, while achievements, puzzle solutions, and chapter-level walkthrough pages do not yet have enough verified step-level data to justify publication.

## Verification

- `npm run lint`: passed
- `npx tsc --noEmit`: passed
- `npm run build`: passed
- Static export: 60 generated routes/documents
- Sitemap: 55 URLs, matching the supplied GSC discovered-page count
- Sitemap URLs with generated files: 55/55
- Self-referencing canonicals: passed on all 55 indexable pages
- Formal pages accidentally marked noindex: none
- Internal links to missing generated pages: none
- Valid JSON-LD blocks: 94
- Missing H1/title/meta description on sitemap pages: none
- Non-decorative generated images missing alt text: none
- Winner title/H1 regression: none
- Listed AI research-report phrases remaining in `src`: none
- Volatile homepage player/review/rating snapshots remaining in `src`: none

The build still prints the repository’s pre-existing warning that `redirects()` and `headers()` from `next.config.mjs` are not applied by `output: 'export'`. This implementation did not add or rely on those redirects, and it did not change the current public URL or canonical strategy.

## Next GSC Review

Review 7–14 days after deployment. Compare against the supplied seven-day baseline:

- Clicks: 784
- Impressions: 7,301
- CTR: 10.7%
- Average position: 5.5

Monitor Query and Page views together, especially:

- `the skin stapler voice actors`
- `skin stapler voice actors`
- `fefe skin stapler`
- `the skin stapler fefe`
- `the skin stapler wiki`
- `skin stapler game wiki`
- `the skin stapler ending`
- `skin stapler ending`
- `the skin stapler walkthrough`

Use the next GSC cycle to identify queries in positions 4–15 with high impressions. Only then decide whether verified achievements or one to three chapter walkthroughs deserve their own URLs.

---

## Round 2 — 2026-08-15 (metadata completion, Ahrefs-driven)

Implementation date: 2026-08-15
Strategy: additive metadata-only fixes confirmed by the Ahrefs Site Audit (project 10238304, crawl 2026-08-15T06:13:20Z) and the local SEO audit
Public pages created: none
Content changes: none (titles, H1s, URLs, canonicals, schema, and page copy unchanged except the 404 title)

### Modified URLs

| Modified URL | What changed | Why | Risk |
| --- | --- | --- | --- |
| 11 English guides (`/guides/*`), `/walkthrough`, `/ending`, `/wiki`, 4 localized guides ×3 locales, 3 localized pillars ×3 locales, `/guides/beginner` ×4 locales | Added `og:image` (+width/height/localized alt), `og:site_name`, and `twitter:image` reusing the same verified official Steam-gallery artwork already used in each page's Article schema and in-page figure | 35 article/pillar pages had a schema image but no OG image, so social shares rendered without an image (Ahrefs "Open Graph tags incomplete", 55 pages) | Low |
| `/`, `/guides`, `/guides/beginner`, `/privacy`, `/terms`, and their `/de`, `/pt-br`, `/es` equivalents | Added `og:url` (absolute canonical URL) and, on localized pages, `og:locale`; explicit `openGraph` blocks include `siteName` and the existing hero fallback image | 17 pages were missing `og:url`; 12 localized hub/legal pages were missing `og:locale` | Low |
| `/guides` and `/{de,pt-br,es}/guides` | Extended meta descriptions (94→149, 84→144, 98→148, 83→153 chars) to cover what the hub actually lists: walkthrough, puzzles, achievements, endings, voice cast, characters, demo, release date, Steam | Ahrefs "Meta description too short" | Low |
| `/guides/beginner` ×4 locales | Extended meta descriptions to 153–157 chars grounded in the page's verified facts (opening chapters, Steam, free demo, 16 achievements, walkthrough link) | Ahrefs "Meta description too short" | Low |
| `/privacy`, `/terms` ×4 locales | Extended meta descriptions to 140–159 chars using only facts already stated in the legal pages (no forms/accounts, Google Analytics; unofficial fan guide, no affiliation) | Ahrefs "Meta description too short" | Low |
| `404.html` / `_not-found.html` | Distinct title "Page Not Found | The Skin Stapler Wiki" and explicit noindex; was duplicating the homepage title | Duplicate-title hygiene; noindex pages only | Low |

### Sitewide Changes

| Change | Why | Risk |
| --- | --- | --- |
| Moved per-page article image maps to `src/lib/articles.ts` (`keywordArticleImages`) and `src/lib/localized-articles/index.ts` (`localizedArticleImages`); components now import the shared maps | One source of truth between schema image, in-page figure, and OG image | Low |
| Added `openGraphImage()` helper and `heroOgImage` constant to `src/lib/seo.ts` | Reuse verified artwork with localized alt text; avoid duplicated image definitions | Low |
| Added explicit metadata (distinct title, description, `noindex`) to `src/app/not-found.tsx` | Distinct 404 title; keep error pages out of the index | Low |

### Verification

- `npx tsc --noEmit`: passed
- `npm run lint`: passed
- `npm run build`: passed (60 static routes)
- Regression diff against the pre-change build (title/H1/canonical per page): only the two 404 documents changed (title, intended); zero H1 and zero canonical changes
- OG tag count per page: +`og:image`(+width/height/alt) and +`og:site_name` on 35 article/pillar pages; +`og:url` on 17 hub/legal pages; +`og:locale` on 12 localized hub/legal pages
- All meta descriptions 110–170 chars on indexable pages (noindex 404 documents excluded)
- Hreflang reciprocity: 0 issues; sitemap: 55 URLs, 0 missing files, 0 duplicates; JSON-LD: 96 blocks, 0 parse failures
- Protected assets (/, Fefe, Layna, Ending, Walkthrough): titles, H1s, canonicals, and primary intent unchanged

### Deferred to the next round

- `<html lang="en">` on 33 localized pages (Ahrefs error, 36 pages). Runtime JS already patches the attribute for users; the build-time fix needs a root-layout change (route-group root layouts or a dynamic-segment root layout) with its own full regression pass and 404 regeneration check.

---

## Round 3 — 2026-08-23 (GEO / AI visibility)

Implementation date: 2026-08-23
Strategy: additive GEO groundwork — new AI-facing files and schema, no URL/H1/title/canonical changes
Public pages created: `/about` (English only, sitemap-registered)
Baseline `geo audit` score: **52/100** (foundation band)

### Gaps closed

| Change | GEO category | Why |
| --- | --- | --- |
| New `/llms.txt` (H1, blockquote, 11 H2 sections, 40+ links, ~1,030 words) plus `/llms-full.txt` expanded reference | llms (0/18) | LLM-friendly site index; structured, link-rich, depth-bonus content |
| New `/.well-known/ai.txt`, `/ai/summary.json`, `/ai/faq.json` (8 Q&A), `/ai/service.json` | ai_discovery (0/6) | Standard AI discovery endpoints; all four pass validation |
| `robots.txt`: explicit `Allow` for citation/search bots (OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, DuckAssistBot, AI2Bot, cohere-ai, YouBot, PetalBot, Googlebot, Bingbot, Applebot, xAI-Bot, Meta-ExternalFetcher, facebookexternalhit) and explicit `Disallow` for training-only bots (GPTBot, anthropic-ai, CCBot, Bytespider, Amazonbot, meta-externalagent, Applebot-Extended) | robots | Citation bots explicitly allowed while model training stays blocked; replaces the implicit catch-all |
| JSON-LD: Organization gained meta-matching `description`, `contactPoint` (editorial, Steam Discussions), extra `sameAs`; WebSite gained `description`; FAQPage added to `/` ×4 locales, `/walkthrough`, `/ending`, `/wiki`; Article schemas on guide/pillar/localized pages gained `datePublished` + `dateModified` | schema, brand entity, freshness | Rich schema types, FAQ depth, about/contact signals, freshness |
| Visible homepage FAQ section (6 Q&A per locale) on `/`, `/de`, `/pt-br`, `/es` backed by `src/lib/home-faq.ts` | content, schema | Q&A markup matches visible content; answers are quick-extractable |
| `home.mdx` ×4 locales: release/version/demo statistics and a coverage item list | content | Numbers/statistics (+40% citability research) and list markup |
| New `src/app/rss.xml` statically exported feed (22 items) + `<link rel="alternate" type="application/rss+xml">` in the root-layout head | signals | RSS presence and head link for AI/discovery |
| New `/about` page (AboutPage + Organization + BreadcrumbList schema), footer link on all locales, sitemap entry (English only, priority 0.4) | brand entity | Visible about link and contact channel for entity validation |
| Footer logo image now has descriptive alt text; hero H1 whitespace fixed so text extraction reads "The Skin Stapler Wiki" | multimodal, content | Alt coverage for multimodal engines; cleaner H1 extraction |

### Notes

- The live site currently blocks `GPTBot`, `ClaudeBot`, `Google-Extended` etc. through the Cloudflare-managed robots.txt section (Content Signals) appended at the edge. The source rules now explicitly allow the citation bots; to fully unblock `Google-Extended` (Gemini AI Overviews) and `ClaudeBot`, the Cloudflare AI-crawler setting must be switched from block to monitor/allow in the dashboard — a platform setting, not a repo change.
- No URLs, canonicals, titles, H1s, or redirects changed. Protected assets intact.

### Verification

- `npm run build`: passed; `out/` contains `llms.txt`, `llms-full.txt`, `ai/{summary,faq,service}.json`, `.well-known/ai.txt`, `rss.xml`, `about.html`
- Postbuild lang fix: 54 localized static HTML files corrected and verified
- Homepage HTML: 2 JSON-LD blocks (site graph + FAQPage), RSS alternate link, `/about` footer link, descriptive logo alt, coverage `<ul>`, H1 text "The Skin Stapler Wiki"

### Follow-up (same day)

Final live re-audit: **52 → 92/100 (excellent band)** with a fully clean negative-signals report. Category scores: robots 18/18, llms 16/18, schema 13/16, meta 14/14, content 12/12, signals 6/6, ai_discovery 6/6, brand_entity 7/10, negative penalty 0. Trust Stack C→B (20/25), multimodal alt coverage 100%.

To clear the penalty heuristics without touching brand mentions:
- Reworded 3 homepage FAQ questions per locale to "the game" phrasing (platforms/multiplayer/length)
- Renamed the start-cards section title to "Your Carrion City Investigation" (×4 locales)
- Renamed the decorative `.hero-overlay`/`.skin-overlay` classes to `.hero-shade`/`.skin-veil` (the negative-signal scanner lists "overlay" as a popup indicator — false positive)
- Added a source-policy paragraph to `home.mdx` ×4 locales (dilutes brand-name density while adding a genuine trust/E-E-A-T signal)
- Added alt text to the header logo image (3/3 images now descriptive)

Remaining open items are platform- or business-level, not repo-level: Cloudflare Content Signals block `Google-Extended`/`ClaudeBot` at the edge until the dashboard setting is changed, and no Knowledge-Graph pillar (Wikipedia/Wikidata) exists for an independent fan wiki to link.
