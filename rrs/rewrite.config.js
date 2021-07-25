/*
 * File: rewrite.config.js
 * Project: webapp-rrs
 * Created Date: Saturday, July 17th 2021, 3:54:01 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 17th 2021 3:54:01 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

module.exports = {
  common: [],
  development: [
    {
      source: '/proxy-api/rest/:path*',
      destination: `${process.env.NEXT_PUBLIC_ATG_API_BASE_URI}/:path*`,
    },
  ],
  production: [],
};
