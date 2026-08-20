import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { cpus: 4 },
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
