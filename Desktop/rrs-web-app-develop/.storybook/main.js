/*
 * File: main.js
 * Project: webapp-rrs
 * Created Date: Monday, January 11th 2021, 11:30:27 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

const path = require('path');

module.exports = {
  stories: ['../src/rrsUI/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]',
              exportLocalsConvention: 'camelCase',
            },
          },
        },
        'resolve-url-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../src'),
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@Mocks': path.resolve(__dirname, '../src/__mocks__'),
      '@Assets': path.resolve(__dirname, '../src/assets'),
      '@RRS-UI': path.resolve(__dirname, '../src/rrsUI'),
      '@Configs': path.resolve(__dirname, '../src/configs'),
      '@Hooks': path.resolve(__dirname, '../src/hooks'),
      '@Libs': path.resolve(__dirname, '../src/libs'),
      '@Components': path.resolve(__dirname, '../src/components'),
      '@Redux': path.resolve(__dirname, '../src/redux'),
      '@Services': path.resolve(__dirname, '../src/services'),
      '@Utils': path.resolve(__dirname, '../src/utils'),
      '@App': path.resolve(__dirname, '../src/app'),
    };

    // Return the altered config
    return config;
  },
};
