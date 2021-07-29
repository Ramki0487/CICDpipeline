/*
 * File: next.config.js
 * Project: webapp-rrs
 * Created Date: Monday, December 28th 2020, 11:05:30 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 11th 2021 11:41:42 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */
var customConfig = require('./webpack.custom.js');
var rewriteMapping = require('./rewrite.config.js');

// Detect build environment
const env = process.env.NODE_ENV;
const isDev = env !== 'production';

const urlRewrites = {
  async rewrites() {
    return [...rewriteMapping[env], ...rewriteMapping.common];
  },
};

module.exports = {
  target: 'serverless',
  ...urlRewrites,
  webpack: (config) => {
    // Add your custom webpack config here

    config = customConfig(config, isDev);

    return config;
  },
};
