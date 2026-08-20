'use client';

import { useEffect, useRef, useState } from 'react';
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
 * On real client-side route changes the script is re-appended so it can find
 * the newly mounted container. Repeated effects for the same route and slot
 * are deduplicated.
 */

const AD_SCRIPT_URL =
  'https://pl30808092.effectivecpmnetwork.com/f65b47b66de3f10c35de956ab8a7cc73/invoke.js';
const CONTAINER_ID = 'container-f65b47b66de3f10c35de956ab8a7cc73';

type Props = {
  /** Semantic slot name used for diagnostics without changing the network container ID. */
  slotId?: string;
};

type AdState = 'pending' | 'filled' | 'no-fill-visible' | 'empty';

let activePathname = '';
let routeGeneration = 0;
const invokedSlots = new Set<string>();

function invokeAdsterraOnce(pathname: string, slotId: string) {
  if (activePathname !== pathname) {
    activePathname = pathname;
    routeGeneration += 1;
    invokedSlots.clear();
  }

  const invocationKey = `${routeGeneration}:${slotId}`;
  if (invokedSlots.has(invocationKey)) return;
  invokedSlots.add(invocationKey);

  // Keep the network's original invoke URL and run it immediately and async.
  const s = document.createElement('script');
  s.src = AD_SCRIPT_URL;
  s.async = true;
  s.dataset.cfasync = 'false';
  s.dataset.adSlot = slotId;
  s.addEventListener('load', () => s.remove(), { once: true });
  s.addEventListener('error', () => s.remove(), { once: true });
  document.body.appendChild(s);
}

function hasRenderedCreative(container: HTMLElement) {
  const candidates = container.querySelectorAll<HTMLElement>('iframe, img, video, a, div');
  return Array.from(candidates).some((node) => {
    // These elements are meaningful ad payloads even if their parent slot was
    // already collapsed before a late response arrived.
    if (node.matches('iframe, img, video, a')) return true;

    const rect = node.getBoundingClientRect();
    const inlineWidth = Number.parseFloat(node.style.width);
    const inlineHeight = Number.parseFloat(node.style.height);
    return (
      (rect.width >= 20 && rect.height >= 20 && getComputedStyle(node).visibility !== 'hidden') ||
      (inlineWidth >= 20 && inlineHeight >= 20)
    );
  });
}

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
}

export default function NativeBannerAd({ slotId = 'native' }: Props) {
  const pathname = usePathname();
  const slotRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [adState, setAdState] = useState<AdState>('pending');

  useEffect(() => {
    if (!adsConfig.enabled || !adsConfig.native.enabled) return;

    const slot = slotRef.current;
    const container = containerRef.current;
    if (!slot || !container) return;

    setAdState('pending');
    let creativeDetected = false;
    let noFillConfirmed = false;

    const checkForCreative = () => {
      if (!hasRenderedCreative(container)) return;
      creativeDetected = true;
      setAdState('filled');
    };

    const observer = new MutationObserver(checkForCreative);
    observer.observe(container, { attributes: true, characterData: true, childList: true, subtree: true });

    const viewportObserver = new IntersectionObserver(([entry]) => {
      if (noFillConfirmed && !creativeDetected && !entry.isIntersecting) setAdState('empty');
    });
    viewportObserver.observe(slot);

    // Poll only during the fill window because some creatives resize without
    // mutating the DOM. The network request itself is never delayed.
    const pollId = window.setInterval(checkForCreative, 500);
    const noFillId = window.setTimeout(() => {
      window.clearInterval(pollId);
      if (hasRenderedCreative(container)) {
        creativeDetected = true;
        setAdState('filled');
        return;
      }

      noFillConfirmed = true;
      setAdState(isInViewport(slot) ? 'no-fill-visible' : 'empty');
    }, adsConfig.native.noFillTimeoutMs);

    invokeAdsterraOnce(pathname, slotId);
    checkForCreative();

    return () => {
      observer.disconnect();
      viewportObserver.disconnect();
      window.clearInterval(pollId);
      window.clearTimeout(noFillId);
    };
  }, [pathname, slotId]);

  if (!adsConfig.enabled || !adsConfig.native.enabled) return null;

  return (
    <section ref={slotRef} className="native-ad-slot" aria-label="Advertisement" data-ad-slot={slotId} data-ad-state={adState}>
      <span className="native-ad-label">Advertisement</span>
      <div ref={containerRef} id={CONTAINER_ID} className="native-ad-container" />
    </section>
  );
}
