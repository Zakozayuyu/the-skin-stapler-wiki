import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | The Skin Stapler Wiki' },
  description: 'This The Skin Stapler Wiki page does not exist. Browse the guides or return to the homepage.',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>Page not found</h1><p>This The Skin Stapler Wiki page is not available.</p><Link href="/guides" className="btn-primary">Browse Guides</Link></main>;
}
