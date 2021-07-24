/*
 * File: Url.js
 * Project: webapp-rrs
 * Created Date: Friday, June 25th 2021, 1:43:36 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday June 25th 2021 2:48:12 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import PATTERNS from './Patterns';

/**
 * Function - Converts String to Slug
 * @param {string} string - string to convert
 * @returns {string}
 */
export const convertStringToSlug = (string) => {
  return string?.trim()?.toLocaleLowerCase()?.replace(PATTERNS.REMOVE_ALL_SPACE, '-') ?? '';
};

/**
 * Function - Constructs Query String from Object
 * @param {object} obj - Data in Object
 * @returns
 */
export const constructQueryString = (obj) => {
  return (
    obj &&
    Object.entries(obj)
      ?.map(([key, val]) => (val ? `${key}=${val}` : null))
      ?.filter((val) => val)
      ?.join('&')
  );
};

/**
 * Function - Converts Url String to Object
 * @param {string} queryString - Query string
 * @returns
 */
export const convertQueryStringToObject = (queryString) => {
  let queryObj = {};

  if (!queryString) return queryObj;

  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  pairs?.map((pair) => {
    const obj = pair.split('=');
    if (obj?.[0]) queryObj[obj[0]] = obj?.[1];
  });

  return queryObj;
};
