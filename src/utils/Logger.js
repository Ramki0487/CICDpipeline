/* eslint-disable no-console */
/*
 * File: Logger.js
 * Project: web-analytics
 * Created Date: Saturday, January 2nd 2021, 11:34:47 pm
 * Author: Jebarin <j.jebarin@gmail.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

const logConfig = process.env.log;
const isDev = process.env.NODE_ENV === 'development';

const formatMessage = (val, trace) => {
  return `${JSON.stringify(val)} ${trace ? JSON.stringify(trace) : ''}`;
};

const logger = {
  error: (val, trace) =>
    (isDev || logConfig?.error) && console.error(`[RRS-WEB-APP] ${formatMessage(val)}`, trace),
  warn: (val, trace) =>
    (isDev || logConfig?.warn) && console.warn(`[RRS-WEB-APP] ${formatMessage(val, trace)}`),
  info: (val, trace) =>
    (isDev || logConfig?.info) && console.info(`[RRS-WEB-APP] ${formatMessage(val, trace)}`),
  log: (val, trace) =>
    (isDev || logConfig?.log) && console.log(`[RRS-WEB-APP] ${formatMessage(val, trace)}`),
};

export default logger;
