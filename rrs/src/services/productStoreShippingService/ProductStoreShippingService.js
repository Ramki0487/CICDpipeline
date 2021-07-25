/*
 * File: ProductStoreShippingService.js
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import RestEndpoints from '@Configs/RestEndpoints';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.BROWSE.PRODUCT_STORE_SHIPPING;

/**
 * ProductStoreShippingService Class
 * @returns {*} ProductStoreShippingService class instance
 */
class ProductStoreShippingService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
    });
  }
}

export default new ProductStoreShippingService();
