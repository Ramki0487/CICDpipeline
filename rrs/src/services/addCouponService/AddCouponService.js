/* istanbul ignore file */

/*
 * File: AddCouponService.js
 * Project: webapp-rrs
 * Created Date: Sunday, 18th July 2021 1:32:58 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday, 18th July 2021 1:33:24 am
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
const prepareEndPoint = () => RestEndpoints.CHECKOUT.ADD_COUPON;

/**
 * Constructs request payload
 * @param {object} request
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    sessionConfirmationNumber: request?.sessionConfirmationNumber,
    couponId: request?.couponId,
  };
};

/**
 * AddCouponService Class
 * @returns {*} AddCouponService class instance
 */
class AddCouponService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new AddCouponService();
