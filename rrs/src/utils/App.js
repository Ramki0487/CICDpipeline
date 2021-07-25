/*
 * File: App.js
 * Project: webapp-rrs
 * Created Date: Friday, June 25th 2021, 6:45:51 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 5th 2021 3:00:56 pm
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * scrollTo
 * @param {children} offset - Offset position to scroll
 * @returns {*}
 * @constructor
 */
export const scrollTo = (offset) => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      ...offset,
      behavior: 'smooth',
    });
  }
};
