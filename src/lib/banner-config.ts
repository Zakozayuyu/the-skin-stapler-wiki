/** Set false and publish to stop new Display Banner loads site-wide. */
export const BANNER_ADS_ENABLED = process.env.NEXT_PUBLIC_BANNER_ADS_ENABLED !== 'false';

export const bannerZones = {
  leaderboard: { width: 728, height: 90, document: '/ads/leaderboard/' },
  rectangle: { width: 300, height: 250, document: '/ads/rectangle/' },
  skyscraper: { width: 160, height: 600, document: '/ads/skyscraper/' },
  mobile: { width: 320, height: 50, document: '/ads/mobile/' }
} as const;

export type BannerZone = keyof typeof bannerZones;
export type BannerPlacement = 'primary' | 'home-lower' | 'home-sidebar';

export function isBannerRoute(pathname: string) {
  const path = pathname.replace(/^\/(de|es|pt-br)(?=\/|$)/, '').replace(/\/$/, '') || '/';
  return ['/', '/wiki', '/characters', '/guides', '/walkthrough', '/ending'].includes(path)
    || /^\/guides\/[^/]+$/.test(path);
}
