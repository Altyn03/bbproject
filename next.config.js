/** @type {import('next').NextConfig} */

const path = require('path');

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
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@public': path.resolve(__dirname, 'public'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
