'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Centralized kill switch for the Adsterra Social Bar (SOCIAL_BAR_GLOBAL).
 * When disabled the script, its iframe and every ad-network request are absent;
 * the overlay is never hidden with CSS as a substitute.
 */
export const SOCIAL_BAR_ENABLED = true;

/** Verbatim value from the publisher-supplied Social Bar snippet. */
const SOCIAL_BAR_SCRIPT_SRC = 'https://pl31202727.profitableratecpmnetwork.com/33/8c/38/338c3879ec3d4c4354bf179ddc897284.js';

/** Legal, privacy and contact routes never receive the global overlay. */
const EXCLUDED_SEGMENTS = ['privacy', 'terms', 'about', 'contact'];

function isExcludedRoute(pathname: string | null) {
  if (!pathname) return false;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return false;
  return EXCLUDED_SEGMENTS.includes(segments[segments.length - 1].toLowerCase());
}

/**
 * Social Bar global singleton.
 *
 * The loader is appended to the end of <body> once per document. It is never
 * placed in <head>, never wrapped in an iframe or sandbox, and never re-run by
 * client-side navigation, React hydration or Strict Mode re-mounts. The site
 * does not add, remove or override any of the snippet's own attributes.
 */
export default function SocialBar() {
  const pathname = usePathname();

  useEffect(() => {
    if (!SOCIAL_BAR_ENABLED) return;
    if (isExcludedRoute(pathname)) return;
    if (document.querySelector('main.not-found')) return;
    const alreadyLoaded = Array.from(document.querySelectorAll('script[src]')).some(
      (element) => element.getAttribute('src') === SOCIAL_BAR_SCRIPT_SRC
    );
    if (alreadyLoaded) return;

    const script = document.createElement('script');
    script.src = SOCIAL_BAR_SCRIPT_SRC;
    document.body.appendChild(script);
  }, [pathname]);

  return null;
}
