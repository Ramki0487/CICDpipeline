/*
 * File: AddItemToBasketService.js
 * Project: webapp-rrs
 * Created Date: Monday, June 19th 2021, 10:23:32 am
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
const prepareEndPoint = () => RestEndpoints.SHOPPING_CART.ADD_ITEM_TO_BASKET;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    formSubmissionData: [
      {
        quantity: request?.quantity,
        skuId: request?.skuId,
        productId: request?.productId,
        locationId: request?.locationId,
      },
    ],
  };
};

/**
 * AddItemToBasketService Class
 * @returns {*} AddItemToBasketService class instance
 */
class AddItemToBasketService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new AddItemToBasketService();
