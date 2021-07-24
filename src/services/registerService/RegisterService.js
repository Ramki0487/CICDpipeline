/*
 * File: RegisterService.js
 * Project: webapp-rrs
 * Created Date: Wednesday, May 18th 2021, 10:23:32 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
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
const prepareEndPoint = () => RestEndpoints.ACCOUNT.REGISTER;

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
    confirmPassword: data?.password,
  };
};

/**
 * RegisterService Class
 * @returns {*} RegisterService class instance
 */
class ResgisterService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new ResgisterService();
