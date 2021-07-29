/* istanbul ignore file */
/*
 * File: EmailSignUp.js
 * Project: webapp-rrs
 * Created Date: Wednesday, July 02nd 2021, 08:23:32 pm
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
const prepareEndPoint = () => RestEndpoints.EMAIL_SIGNUP;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    email: data?.email,
    sessionConfirmationNumber: data?.sessionConfirmationNumber,
  };
};

/**
 * EmailSignUp Class
 * @returns {*} EmailSignUp class instance
 */
class EmailSignUpService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new EmailSignUpService();
