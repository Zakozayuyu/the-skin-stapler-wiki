import type { MetadataRoute } from 'next';
import { absoluteUrl, hasPublicSiteUrl, siteConfig } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  if (!hasPublicSiteUrl) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteConfig.url
  };
}
