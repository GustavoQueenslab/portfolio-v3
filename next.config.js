const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["a.storyblok.com"],
  },
  swcMinify: true,
  i18n,
  env: {
    STORYBLOK_ENDPOINT: process.env.STORYBLOK_ENDPOINT,
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
