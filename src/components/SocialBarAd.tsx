'use client';

import { useEffect } from 'react';
import { adsConfig } from '@/lib/ads-config';

/**
 * Adsterra Social Bar — global auto-placement format.
 *
 * Social Bar needs no containers or per-page slots: the script manages its
 * own floating placement. It is installed once per full page load, so it is
 * mounted in the root layout (not in individual pages) to keep client-side
 * navigation free of duplicate script requests.
 */

const SOCIAL_BAR_SRC =
  'https://pl31202727.profitableratecpmnetwork.com/33/8c/38/338c3879ec3d4c4354bf179ddc897284.js';

export default function SocialBarAd() {
  useEffect(() => {
    if (!adsConfig.enabled || !adsConfig.socialBar.enabled) return;

    // Idempotent guard: never append the loader twice per document.
    if (document.querySelector('script[data-social-bar="1"]')) return;

    const script = document.createElement('script');
    script.src = SOCIAL_BAR_SRC;
    script.async = true;
    script.dataset.socialBar = '1';
    document.body.appendChild(script);
  }, []);

  return null;
}
