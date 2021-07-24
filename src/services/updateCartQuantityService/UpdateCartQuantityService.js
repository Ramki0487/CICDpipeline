/*
 * File: UpdateCartQuantityService.js
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
const prepareEndPoint = () => RestEndpoints.SHOPPING_CART.UPDATE_CART_QUANTITY;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    sessionConfirmationNumber: request?.sessionConfirmationNumber,
    formSubmissionData: [
      {
        quantity: request?.quantity,
        commerceItemId: request?.commerceItemId,
      },
    ],
  };
};

/**
 * UpdateCartQuantityService Class
 * @returns {*} UpdateCartQuantityService class instance
 */
class UpdateCartQuantityService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new UpdateCartQuantityService();
