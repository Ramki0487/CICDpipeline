/* istanbul ignore file */
/*
 * File: GetProductVarientService.js
 * Project: webapp-rrs
 * Created Date: Monday, June 21st 2021, 12:55:16 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 6:53:16 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.BROWSE.PRODUCT_VARIENT;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (request) => {
  return {
    productId: request?.productId,
    color: request?.colors,
    colorGroup: request?.colorGroup,
    size: request?.sizes,
    width: request?.widths,
    selectedVariant: request?.selectedVariant,
  };
};

/**
 * GetProductVarientService Class
 * @returns {*} GetProductVarientService class instance
 */
class GetProductVarientService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new GetProductVarientService();
