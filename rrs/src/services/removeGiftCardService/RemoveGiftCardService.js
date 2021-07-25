/* istanbul ignore file */
/*
 * File: RemoveGiftCardService.js
 * Project: webapp-rrs
 * Created Date: Sunday, 18th July 2021 1:37:39 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday, 18th July 2021 1:37:47 am
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
const prepareEndPoint = () => RestEndpoints.CHECKOUT.REMOVE_GIFT_CARD;

/**
 * Constructs request payload
 * @param {object} request
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    sessionConfirmationNumber: request?.sessionConfirmationNumber,
    giftCardId: request?.giftCardId,
  };
};

/**
 * RemoveGiftCardService Class
 * @returns {*} RemoveGiftCardService class instance
 */
class RemoveGiftCardService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new RemoveGiftCardService();
