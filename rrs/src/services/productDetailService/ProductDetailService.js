/*
 * File: ProductDetailService.js
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
const prepareEndPoint = () => RestEndpoints.BROWSE.PRODUCT_DETAIL;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    productId: request?.productId,
    cc: request?.colorCode,
  };
};

/**
 * ProductDetailService Class
 * @returns {*} ProductDetailService class instance
 */
class ProductDetailService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new ProductDetailService();
