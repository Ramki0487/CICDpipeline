/* istanbul ignore file */

/*
 * File: ClaimGiftCardService.js
 * Project: webapp-rrs
 * Created Date: Sunday, 18th July 2021 1:41:10 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday, 18th July 2021 1:41:16 am
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.CHECKOUT.CLAIM_GIFT_CARD;

/**
 * Constructs request payload
 * @param {object} request
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    sessionConfirmationNumber: request?.sessionConfirmationNumber,
    giftCardNumber: request?.giftCardNumber,
    giftCardCVNNumber: request?.giftCardCVNNumber,
  };
};

/**
 * ClaimGiftCardService Class
 * @returns {*} ClaimGiftCardService class instance
 */
class ClaimGiftCardService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new ClaimGiftCardService();
