/*
 * File: Search.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 2nd 2021, 7:06:41 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_SEARCH_RESULTS } from '@Redux/actionTypes/Search';
import ProductSearchService from '@Services/productSearchService/ProductSearchService';
import logger from '@Utils/Logger';

/**
 * Updates search results in store
 * @param {object} payload - Search results
 * @param {boolen} isReset - Flag to decide between search results update/reset in the store
 * @returns {object}
 */
const updateSearchResults = (payload, isReset) => ({
  type: UPDATE_SEARCH_RESULTS,
  payload,
  isReset,
});

/**
 * Action Creator - Fetches search results from search API
 * @param {object} data - Search input data
 * @param {boolen} isReset - Flag to decide between search results update/reset in the store
 * @returns {function}
 */
export const getSearchResults = (data, isReset) => {
  return async (dispatch) => {
    try {
      logger.info('fetching search results');

      const response = await ProductSearchService.invoke(data);

      dispatch(updateSearchResults(response?.payload?.state, isReset));
    } catch (error) {
      logger.error('Error getting search results from API', error);
    }
  };
};
