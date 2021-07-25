/* istanbul ignore file */

/*
 * File: GetCheckoutOrderStateService.js
 * Project: webapp-rrs
 * Created Date: Sunday, 18th July 2021 12:19:02 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday, 18th July 2021 12:19:15 am
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
const prepareEndPoint = () => RestEndpoints.CHECKOUT.GET_CHECKOUT_ORDER_STATE;

/**
 * Constructs request payload
 * @param {object} request
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    sessionConfirmationNumber: request?.sessionConfirmationNumber,
  };
};

/**
 * GetCheckoutOrderStateService Class
 * @returns {*} GetCheckoutOrderStateService class instance
 */
class GetCheckoutOrderStateService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new GetCheckoutOrderStateService();
