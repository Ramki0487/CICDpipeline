/*
 * File: ProductSearchService.js
 * Project: webapp-rrs
 * Created Date: Monday, May 14th 2021, 10:23:32 am
 * Author: Riyaz <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import RestEndpoints from '@Configs/RestEndpoints';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.BROWSE.PRODUCT_SEARCH;

/**
 * ProductSearchService Class
 * @returns {*} ProductSearchService class instance
 */
class ProductSearchService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
    });
  }
}

export default new ProductSearchService();
