'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { adsConfig } from '@/lib/ads-config';

/**
 * Adsterra Native Banner placement.
 *
 * The Adsterra invoke script scans the DOM for containers whose ID matches
 * the hash in the script URL.  It fills ALL matching containers, so we keep
 * the exact ID (`container-f65b47b66de3f10c35de956ab8a7cc73`) for every slot
 * and let the network decide how many to fill.
 *
 * On Next.js client-side route changes the script is re-appended (the
 * browser serves it from cache) so it can discover newly mounted containers.
 */

const AD_SCRIPT_URL =
  'https://pl30808092.effectivecpmnetwork.com/f65b47b66de3f10c35de956ab8a7cc73/invoke.js';
const CONTAINER_ID = 'container-f65b47b66de3f10c35de956ab8a7cc73';

type Props = {
  /** Kept for semantic grouping; does NOT change the container ID. */
  slotId?: string;
};

function invokeAdsterra() {
  // Append a fresh <script> so the Adsterra library re-scans the DOM.
  // The browser will serve the file from disk/memory cache — no extra
  // network request after the first load.
  const s = document.createElement('script');
  s.src = AD_SCRIPT_URL;
  s.async = true;
  s.dataset.cfasync = 'false';
  document.body.appendChild(s);
}

export default function NativeBannerAd({ slotId: _slotId }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (!adsConfig.enabled || !adsConfig.native.enabled) return;

    // Small delay so the container <div> is flushed to the DOM first.
    const id = setTimeout(invokeAdsterra, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  if (!adsConfig.enabled || !adsConfig.native.enabled) return null;

  return (
    <section className="native-ad-slot" aria-label="Advertisement">
      <span className="native-ad-label">Advertisement</span>
      <div id={CONTAINER_ID} className="native-ad-container" />
    </section>
  );
}
