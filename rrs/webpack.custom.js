/*
 * File: webpack.custom.js
 * Project: rrs
 * Created Date: Monday, February 22nd 2021, 6:07:04 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Sunday June 27th 2021 9:30:50 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

module.exports = (config, isDev) => {
  // Override Next.js default CSS Modules config
  config.module.rules[2].oneOf.forEach((moduleLoader) => {
    Array.isArray(moduleLoader.use) &&
      moduleLoader.use.forEach((l) => {
        if (l.loader.includes('css-loader') && !l.loader.includes('postcss-loader')) {
          delete l.options.modules.getLocalIdent;

          l.options = {
            ...l.options,
            modules: {
              ...l.options.modules,
              localIdentName: isDev ? '[name]--[local]' : '[local]--[hash:base64:5]',
              //Make sure we are not using localIdentName for external css
              auto: /\.scss$/i,
              exportLocalsConvention: 'camelCase',
            },
          };
        }
      });
  });

  // Load images, icons and custom file extensions
  config.module.rules.push({
    test: /\.(ico|png|jpeg|webp|woff|woff2)$/,
    issuer: /\.(js|jsx)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 3000,
        fallback: 'file-loader',
        publicPath: '/_next/static/media/',
        outputPath: '../static/media/',
        name: '[name].[hash].[ext]',
      },
    },
  });

  // // Special treatment to inline svg icons and images loaded in js & jsx
  // // Svg icons in scss will be automatically handled by css modules
  config.module.rules.push({
    test: /\.(svg)$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{ cleanupIDs: true }],
          },
        },
      },
    ],
  });

  return config;
};
