/* istanbul ignore file */
/*
 * File: AddGiftCardsService.js
 * Project: webapp-rrs
 * Created Date: Sunday, 18th July 2021 1:22:05 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday, 18th July 2021 1:22:42 am
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
const prepareEndPoint = () => RestEndpoints.CHECKOUT.ADD_GIFT_CARD;

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
 * AddGiftCardsService Class
 * @returns {*} AddGiftCardsService class instance
 */
class AddGiftCardsService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new AddGiftCardsService();
