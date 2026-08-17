'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { adsConfig } from '@/lib/ads-config';

/**
 * Adsterra Native Banner placement.
 *
 * Each instance renders its own container with a unique `slotId` so that
 * multiple ads can co-exist on the same page.  The global Adsterra invoke
 * script is loaded once and re-triggered on Next.js client-side route
 * changes via `usePathname`.
 */

const AD_SCRIPT_URL =
  'https://pl30808092.effectivecpmnetwork.com/f65b47b66de3f10c35de956ab8a7cc73/invoke.js';
const BASE_CONTAINER_ID = 'container-f65b47b66de3f10c35de956ab8a7cc73';

/** Tracks whether the base invoke script has been appended to <body>. */
let baseScriptInjected = false;

type Props = {
  /** Unique identifier for this ad slot on the page (e.g. "top", "mid"). */
  slotId?: string;
};

export default function NativeBannerAd({ slotId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const containerId = slotId
    ? `${BASE_CONTAINER_ID}-${slotId}`
    : BASE_CONTAINER_ID;

  useEffect(() => {
    if (!adsConfig.enabled || !adsConfig.native.enabled) return;

    // 1. Inject the base invoke script once per session.
    if (!baseScriptInjected) {
      const s = document.createElement('script');
      s.src = AD_SCRIPT_URL;
      s.async = true;
      s.dataset.cfasync = 'false';
      document.body.appendChild(s);
      baseScriptInjected = true;
    }

    // 2. Re-invoke the Adsterra script so it discovers new containers
    //    after a client-side route change.  We create a fresh <script>
    //    element pointing at the same URL — the Adsterra library scans
    //    the DOM for unfilled containers on each execution.
    const scriptId = `adsterra-slot-${containerId}`;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.id = scriptId;
    s.src = AD_SCRIPT_URL;
    s.async = true;
    document.body.appendChild(s);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [pathname, containerId]);

  if (!adsConfig.enabled || !adsConfig.native.enabled) return null;

  return (
    <section className="native-ad-slot" aria-label="Advertisement">
      <span className="native-ad-label">Advertisement</span>
      <div
        id={containerId}
        className="native-ad-container"
        ref={containerRef}
      />
    </section>
  );
}
