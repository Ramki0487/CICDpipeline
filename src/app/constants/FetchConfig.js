/*
 * File: FetchConfig.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 12:58:06 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Default Fetch Configurations
 * @field {number} timeout - Default request timeout(15sec)
 * @field {object} headers - Default header values
 * @field {boolean} async - Controls async vs sync request
 * @field {boolean} cache - Controls cache header
 * @field {number} max-age - Controls cache validity
 * @field {array} skip_headers - List of headers which needs to be excluded
 * @exports DEFAULT_FETCH_CONFIG
 */
export const DEFAULT_FETCH_CONFIG = {
  timeout: 15000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    //'x-channel': 'rrs-web',
    //'x-correlation-id': null,
  },
  async: true,
  cache: 'no-store',
  max_age: 0,
};
