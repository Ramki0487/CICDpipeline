/*
 * File: FilterOptions.helper.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Function normalizeKeys
 * @param {object} obj - Convert object keys to lowercase (Only one level)
 * @returns {object}
 */
const normalizeKeys = (obj) => {
  return obj && Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
};

/**
 * Function formatFiltersObject
 * @param {object} filterItems - Filter Items
 * @returns {object}
 */
export const formatFiltersObject = (filterItems) => {
  return normalizeKeys(filterItems);
};

/**
 * Function getAppliedFiltersByKey
 * @param {string} filterKey - Key to filter the results
 * @param {array} filterArray - Array of applied filters
 * @returns {array}
 */
export const getAppliedFiltersByKey = (filterKey, filterArray) => {
  const appliedFilters = [];

  filterArray?.forEach(({ key, name }) => {
    if (key === filterKey) {
      appliedFilters.push(name);
    }
  });

  return appliedFilters;
};
