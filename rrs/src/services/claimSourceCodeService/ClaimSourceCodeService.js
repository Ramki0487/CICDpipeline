/*
 * File: ClaimSourceCode.js
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
const prepareEndPoint = () => RestEndpoints.SHOPPING_CART.CLAIM_SOURCE_CODE;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    sessionConfirmationNumber: request?.sessionConfirmationNumber,
    couponId: request?.couponId,
  };
};

/**
 * ClaimSourceCode Class
 * @returns {*} ClaimSourceCode class instance
 */
class ClaimSourceCode extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new ClaimSourceCode();
