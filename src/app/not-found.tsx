import Link from 'next/link';

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>Page not found</h1><p>This The Skin Stapler Wiki page is not available.</p><Link href="/guides" className="btn-primary">Browse Guides</Link></main>;
}
