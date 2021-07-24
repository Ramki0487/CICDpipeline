/*
 * File: Types.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 1:00:34 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * @memberOf Utils.Types
 * @type {function}
 * @param {*} value
 * @param {string} type
 * @return {boolean}
 */
export const isTypeOf = (value, type) => typeof value === type;

/**
 * @memberOf Utils.Types
 * @type {function}
 * @param {*} value
 * @return {boolean}
 */
export const isObject = (value) => {
  return value && isTypeOf(value, 'object') && !Array.isArray(value);
};

/**
 * @memberOf Utils.Types
 * @type {function}
 * @param {*} value
 * @return {boolean}
 */
export const isArray = (value) => {
  return value && isTypeOf(value, 'object') && Array.isArray(value);
};
