'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '@/lib/i18n';

/**
 * Centralized kill switches for the Adsterra Native Banner zone (PRIMARY).
 * Turning either value off removes the script, the container and every
 * ad-network request from the page. CSS hiding is not used as a substitute.
 */
export const ADS_ENABLED = true;
export const PRIMARY_NATIVE_ENABLED = true;

/** Verbatim values from the publisher-supplied Native Banner snippet. */
const NATIVE_SCRIPT_SRC = 'https://pl30808092.profitableratecpmnetwork.com/f65b47b66de3f10c35de956ab8a7cc73/invoke.js';
const NATIVE_CONTAINER_ID = 'container-f65b47b66de3f10c35de956ab8a7cc73';

const adLabels: Record<Locale, string> = {
  en: 'Advertisement',
  de: 'Anzeige',
  'pt-br': 'Publicidade',
  es: 'Publicidad'
};

type NativeBannerProps = {
  locale?: Locale;
};

/**
 * Native Banner placement. One PRIMARY zone instance per page.
 * The container is part of the rendered markup and the publisher script is
 * inserted directly before it, preserving the original script/container order
 * and attributes (async="async", data-cfasync="false").
 */
export default function NativeBanner({ locale = 'en' }: NativeBannerProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ADS_ENABLED || !PRIMARY_NATIVE_ENABLED) return;
    const mount = mountRef.current;
    if (!mount) return;
    if (mount.dataset.adInitialized === '1') return;
    const alreadyLoaded = Array.from(document.querySelectorAll('script[src]')).some(
      (element) => element.getAttribute('src') === NATIVE_SCRIPT_SRC
    );
    if (alreadyLoaded) {
      mount.dataset.adInitialized = '1';
      return;
    }
    mount.dataset.adInitialized = '1';

    const script = document.createElement('script');
    script.setAttribute('async', 'async');
    script.setAttribute('data-cfasync', 'false');
    script.src = NATIVE_SCRIPT_SRC;
    mount.insertBefore(script, mount.firstChild);
  }, []);

  if (!ADS_ENABLED || !PRIMARY_NATIVE_ENABLED) return null;

  return (
    <div className="ad-slot" data-ad-slot="primary-native">
      <span className="ad-slot-label">{adLabels[locale]}</span>
      <div className="ad-slot-mount" ref={mountRef}>
        <div id={NATIVE_CONTAINER_ID} />
      </div>
    </div>
  );
}
