const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
