/*
 * File: SessionInfoService.js
 * Project: webapp-rrs
 * Created Date: Wednesday, May 17th 2021, 10:23:32 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.SESSION_INFO;

/**
 * Constructs request payload
 * @return {object}
 */

/**
 * SessionInfoService Class
 * @returns {*} SessionInfoService class instance
 */
class SessionInfoService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
    });
  }
}

export default new SessionInfoService();
