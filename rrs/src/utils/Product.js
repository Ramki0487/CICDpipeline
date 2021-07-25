/*
 * File: product.js
 * Project: webapp-rrs
 * Created Date: Monday, June 7th 2021, 3:32:59 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Function constructProductUrl
 * @param {string} id - Product ID
 * @param {string} title  - Product Title
 * @returns {string}
 */
export const constructProductUrl = (id, title) => {
  const name = title?.split(' ')?.join('-')?.toLowerCase();

  return `/product/${id ?? ''}${name ? `/${name}` : ''}`;
};
