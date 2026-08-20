/**
 * Adsterra Native Banner ad configuration.
 *
 * Centralised so ads can be toggled, limited, or A/B-tested from one place.
 */

export const adsConfig = {
  /** Master switch — set to false to remove every ad slot site-wide. */
  enabled: true,

  native: {
    /** Enable / disable Native Banner ads globally. */
    enabled: true,

    /** Maximum Native Banner slots per content page. */
    maxPerPage: 2,

    /** Keep the reserved slot while the network decides whether to fill it. */
    noFillTimeoutMs: 15_000,

    /** Show ad on the homepage. */
    homeEnabled: true,

    /** Show ads on pillar pages (walkthrough, ending). */
    pillarEnabled: true,

    /** Show ads on keyword article pages (character guides, scene guides, etc.). */
    keywordEnabled: true,

    /** Show ads on the beginner guide page. */
    beginnerEnabled: true,

    /** Show ads on localized (de / pt-br / es) article pages. */
    localizedEnabled: true,

    /** Show ads on the wiki hub page. */
    wikiEnabled: true,
  },
} as const;

export type AdsConfig = typeof adsConfig;
