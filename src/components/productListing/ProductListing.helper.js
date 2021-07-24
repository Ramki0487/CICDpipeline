import { constructQueryString } from '@Utils/Url';

// Whitelisted query params for search API
const allowedQueryParams = ['qUri', 'scri', 's', 'p', 'skip', 'r'];

/**
 * Function getAppliedFilters
 * @param {object} filterItems - Filters Options
 * @returns {array} - Applied Filters with key, value and url
 */
export const getAppliedFilters = (filterItems) => {
  const appliedFilters = [];

  filterItems &&
    Object.keys(filterItems)?.forEach((key) => {
      filterItems[key]?.forEach((category) => {
        if (category?.state === 'active') {
          appliedFilters.push({
            key: key?.toLocaleLowerCase(),
            name: category?.name,
            url: category?.url,
          });
        }
      });
    });

  return appliedFilters;
};

/**
 * Function - Removes current params and merge new ones
 * @param {object} currentParams - Current URL Params object
 * @param {object} newParams - New URL params object
 * @returns {object}
 */
export const mergeQueryParams = (currentParams, newParams) => {
  let shouldUpdate = true;
  const formattedParams = { ...currentParams };
  // See if any whitelisted keys are present in current params
  const whitelistedParams =
    (currentParams &&
      Object.keys(currentParams).filter((key) => allowedQueryParams.includes(key))) ??
    [];

  // TODO:- Clean up this once API Team fixes the default filter issues
  // if the current params are empty and new param also empty don't change anything
  if (whitelistedParams?.length === 0 && Object.keys(newParams)?.length === 0) {
    shouldUpdate = false;
  } else {
    // removes the current params
    // If the param key is present in alllowed list then delete it
    whitelistedParams.forEach((key) => delete formattedParams[key]);
  }

  // merge with new params
  return { shouldUpdate, mergedParams: { ...formattedParams, ...newParams } };
};

/**
 * Function constructQuri
 * @param {string} asPath - Page URL
 * @param {object} query - URL Params
 * @returns {string}
 */
export const constructQuri = (asPath, query) => {
  const filtered = allowedQueryParams.reduce((obj, key) => ({ ...obj, [key]: query[key] }), {});

  const filter = constructQueryString(filtered) ?? '';
  const path = [asPath.split('?')?.[0]];

  if (filter) {
    path.push(filter.indexOf('&') === 0 ? filter : `&${filter}`);
  }

  return path.join('');
};
