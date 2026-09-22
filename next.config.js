/** @type {import('next').NextConfig} */
const { defaultLocale, locales } = require('./i18n/config.json');

const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  i18n: {
    defaultLocale,
    locales,
    localeDetection: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';"
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig
