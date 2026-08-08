import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest { return { name: 'The Skin Stapler Wiki', short_name: 'Skin Stapler Wiki', description: 'Independent fan-made walkthrough and puzzle guide.', start_url: '/', display: 'standalone', background_color: '#08080d', theme_color: '#a79cf8', icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }, { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }] }; }
