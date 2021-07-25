/*
 * File: RemoveCartItemService.js
 * Project: webapp-rrs
 * Author: prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.SHOPPING_CART.REMOVE_CART_ITEM;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    formSubmissionData: [
      {
        commerceItemId: request?.commerceItemId,
      },
    ],
  };
};

/**
 * RemoveCartItemService Class
 * @returns {*} RemoveCartItemService class instance
 */
class RemoveCartItemService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new RemoveCartItemService();
