/**
 * Adsterra ad configuration.
 *
 * Centralised so ads can be toggled from one place.
 */

export const adsConfig = {
  /** Master switch — set to false to remove every ad site-wide. */
  enabled: true,

  socialBar: {
    /** Enable / disable the Adsterra Social Bar globally. */
    enabled: true,
  },
} as const;

export type AdsConfig = typeof adsConfig;
