const nextConfig = {
  webpack(config) {
    // Exclude svg from the default file-loader
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add custom rule for handling svg both as url and as React component
    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          resourceQuery: /react/, // e.g., import icon from './icon.svg?react'
          use: ["@svgr/webpack"],
        },
        {
          type: "asset/resource", // fallback to default behavior (URL string)
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
