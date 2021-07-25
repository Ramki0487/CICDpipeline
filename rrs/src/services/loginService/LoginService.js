/*
 * File: LoginService.js
 * Project: webapp-rrs
 * Created Date: Wednesday, May 5th 2021, 10:23:32 pm
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
const prepareEndPoint = () => RestEndpoints.ACCOUNT.LOGIN;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    sessionConfirmationNumber: data?.sessionConfirmationNumber,
    login: data?.login,
    password: data?.password,
  };
};

/**
 * LoginService Class
 * @returns {*} LoginService class instance
 */
class LoginService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new LoginService();
