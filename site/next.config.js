/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Registry',
    description: 'My List of Kasm Workspaces',
    icon: 'https://tanishapatil1234.github.io/kasm-registry/1.0/image.png',
    listUrl: 'https://tanishapatil1234.github.io/kasm-registry/',
    contactUrl: 'https://github.com/tanishapatil1234/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
