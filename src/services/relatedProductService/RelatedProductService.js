/*
 * File: RelatedProductsService.js
 * Project: webapp-rrs
 * Created Date: Monday, June 15th 2021, 10:23:32 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.BROWSE.RELATED_PRODUCTS;

/**
 * RelatedProductsService Class
 * @returns {*} RelatedProductsService class instance
 */
class RelatedProductsService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
    });
  }
}

export default new RelatedProductsService();
