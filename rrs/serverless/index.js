/* eslint-disable no-console */
/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 10:05:19 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Sunday July 11th 2021 11:41:42 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

const { parse } = require('url');
const next = require('next');
const serverless = require('serverless-http');

const app = next({ dev: false });
const requestHandler = app.getRequestHandler();
const binaryMimeTypes = [
  'application/json',
  'text/plain',
  'text/text',
  'image/*',
  'font/*',
  'application/font-woff2',
];

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
});

process.on('unhandledRejection', (reason) => {
  console.warn('Unhandled Rejection - error message:', reason);
});

module.exports.handler = serverless(
  async (req, res) => {
    await requestHandler(req, res, parse(req.url, true));
  },
  {
    binary: binaryMimeTypes,
  }
);
