/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  env: {
    API_URL: process.env.API_URL,
  },
  i18n: {
    locales: ['default', 'en', 'ru', 'es', 'zh'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  // trailingSlash: true,
};

module.exports = nextConfig;
