/*
 * File: SearchAutoSuggestionsService.js
 * Project: webapp-rrs
 * Created Date: Monday, May 10th 2021, 10:23:32 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import AutoSuggestConfig from '@Configs/AutoSuggestConfig';
import RestEndpoints from '@Configs/RestEndpoints';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.BROWSE.AUTO_SUGGESTIONS;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    query: request?.keyword,
    collection: AutoSuggestConfig.COLLECTION_RRS,
    searchItems: AutoSuggestConfig.SEARCH_ITEMS,
    navigationItems: AutoSuggestConfig.NAVIGATION_ITEMS,
    productItems: AutoSuggestConfig.PRODUCT_ITEMS,
    alphabetize: AutoSuggestConfig.ALPHABETIZE,
  };
};

/**
 * SearchAutoSuggestionsService Class
 * @returns {*} SearchAutoSuggestionsService class instance
 */
class SearchAutoSuggestionsService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new SearchAutoSuggestionsService();
