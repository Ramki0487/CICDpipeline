/*
 * File: BrandNamesService.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asiakannan@nutechnologyinc.com>
 * -----
 * Author: Prakash <prakashraj.asiakannan@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.BROWSE.BRAND_NAMES;

/**
 * BrandNamesService Class
 * @returns {*} BrandNamesService class instance
 */
class BrandNamesService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
    });
  }
}

export default new BrandNamesService();
