'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { BANNER_ADS_ENABLED, bannerZones, isBannerRoute } from '@/lib/banner-config';
import type { BannerPlacement, BannerZone } from '@/lib/banner-config';

const labels: Record<Locale, string> = {
  en: 'Advertisement', de: 'Anzeige', 'pt-br': 'Publicidade', es: 'Publicidad'
};

// Owners are scoped to an active route mount, and removed on unmount. A new
// page can use a Zone again; two positions on one page cannot claim it twice.
const owners = new Map<string, HTMLElement>();

type BannerSlotProps = {
  locale?: Locale;
  placement?: BannerPlacement;
  enabled?: boolean;
};

function BannerInstance({ locale, placement, enabled, pathname }: Required<BannerSlotProps> & { pathname: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const parent = host?.parentElement;
    if (!host || !parent || !BANNER_ADS_ENABLED || !enabled) return;

    let selected: BannerZone | null = null;
    let attempted = false;
    let retired = false;
    let disposed = false;
    let intersecting = false;
    let observer: IntersectionObserver | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let animation = 0;
    let claim: string | undefined;

    function availableWidth() {
      if (!parent || !host?.isConnected || !isBannerRoute(pathname)
        || window.location.pathname.replace(/\/$/, '') !== pathname.replace(/\/$/, '')
        || document.querySelector('main.not-found')) return 0;
      for (let node: HTMLElement | null = parent; node; node = node.parentElement) {
        const style = getComputedStyle(node);
        if (style.display === 'none' || style.visibility === 'hidden' || style.visibility === 'collapse') return 0;
      }
      const style = getComputedStyle(parent);
      return parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    }

    function primaryZone(width: number): BannerZone | null {
      if (window.matchMedia('(max-width: 760px)').matches) {
        if (width >= 320) return 'mobile';
        return width >= 300 ? 'rectangle' : null;
      }
      if (width >= 728) return 'leaderboard';
      return width >= 300 ? 'rectangle' : null;
    }

    function chooseZone(width: number): BannerZone | null {
      if (placement === 'home-sidebar') {
        return window.matchMedia('(min-width: 1101px)').matches && width >= 160 ? 'skyscraper' : null;
      }
      if (placement === 'home-lower') {
        // Only the long homepage has this second content boundary. If its
        // primary already needs the rectangle, do not reuse the same Zone.
        return width >= 300 && primaryZone(width) !== 'rectangle' ? 'rectangle' : null;
      }
      return primaryZone(width);
    }

    function clearSlot() {
      host!.replaceChildren();
      delete host!.dataset.bannerZone;
      delete host!.dataset.bannerState;
    }

    function fits(zone: BannerZone, width: number) {
      return width >= bannerZones[zone].width && (placement !== 'home-sidebar'
        || window.matchMedia('(min-width: 1101px)').matches);
    }

    function tryLoad() {
      if (disposed || retired || attempted || !selected || !BANNER_ADS_ENABLED || !enabled) return;
      const width = availableWidth();
      if (!width || !fits(selected, width) || chooseZone(width) !== selected) return;
      const key = `${pathname}:${selected}`;
      if (owners.has(key) && owners.get(key) !== host) {
        retired = true;
        clearSlot();
        return;
      }
      // Claim before inserting: observer, resize and fallback cannot race to
      // initialise this Zone twice. Failures never start a refresh/retry loop.
      attempted = true;
      owners.set(key, host!);
      claim = key;
      observer?.disconnect();
      if (timer) clearTimeout(timer);
      const zone = bannerZones[selected];
      const frame = document.createElement('iframe');
      frame.src = zone.document;
      frame.title = `${labels[locale]} ${zone.width} × ${zone.height}`;
      frame.width = String(zone.width);
      frame.height = String(zone.height);
      frame.style.width = `${zone.width}px`;
      frame.style.height = `${zone.height}px`;
      frame.loading = 'lazy';
      frame.className = 'banner-ad-iframe';
      // The supplied snippet runs in its own same-origin document. No sandbox,
      // referrer override, script attribute changes or window spoofing.
      host!.querySelector('.banner-ad-frame')!.appendChild(frame);
      host!.dataset.bannerState = 'requested';
    }

    function measure() {
      if (disposed || retired) return;
      const width = availableWidth();
      if (attempted) {
        if (!selected || !fits(selected, width)) {
          retired = true;
          clearSlot();
        }
        return; // First attempted variant is locked for this route mount.
      }
      const next = width ? chooseZone(width) : null;
      if (next !== selected) {
        selected = next;
        clearSlot();
        if (next) {
          const zone = bannerZones[next];
          const label = document.createElement('span');
          label.className = 'banner-ad-label';
          label.textContent = labels[locale];
          const mount = document.createElement('div');
          mount.className = 'banner-ad-frame';
          mount.style.width = `${zone.width}px`;
          mount.style.height = `${zone.height}px`;
          host!.dataset.bannerZone = next;
          host!.dataset.bannerState = 'reserved';
          host!.append(label, mount);
        }
      }
      if (intersecting) tryLoad();
    }

    function onResize() {
      cancelAnimationFrame(animation);
      animation = requestAnimationFrame(measure);
    }

    measure();
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        intersecting = entries.some((entry) => entry.isIntersecting);
        if (intersecting) { measure(); tryLoad(); }
      }, { rootMargin: '800px 0px' });
      observer.observe(host);
    } else {
      timer = setTimeout(() => { intersecting = true; measure(); tryLoad(); }, 1000);
    }
    const resizeObserver = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(onResize);
    resizeObserver?.observe(parent);
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      observer?.disconnect();
      resizeObserver?.disconnect();
      if (timer) clearTimeout(timer);
      cancelAnimationFrame(animation);
      window.removeEventListener('resize', onResize);
      if (claim && owners.get(claim) === host) owners.delete(claim);
      clearSlot();
    };
  }, [enabled, locale, pathname, placement]);

  return <div ref={hostRef} className="banner-ad" data-banner-slot={placement} />;
}

export default function BannerSlot({ locale = 'en', placement = 'primary', enabled = true }: BannerSlotProps) {
  const pathname = usePathname();
  if (!BANNER_ADS_ENABLED || !enabled || !isBannerRoute(pathname)) return null;
  return <BannerInstance key={`${pathname}:${placement}`} pathname={pathname} locale={locale} placement={placement} enabled={enabled} />;
}
