/*
 * File: GoogleMapService.js
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import RestEndpoints from '@Configs/RestEndpoints';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.GOOGLE_MAP;

/**
 *
 * @param {*} param0
 * @returns
 */
const prepareRequestConfig = ({ config }) => {
  return delete config?.headers['Content-Type'];
};

/**
 * GoogleMapService Class
 * @returns {*} GoogleMapService class instance
 */
class GoogleMapService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
      getRequestConfig: prepareRequestConfig,
    });
  }
}

export default new GoogleMapService();
