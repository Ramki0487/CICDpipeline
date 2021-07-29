/* istanbul ignore file */
/*
 * File: BecomeVendorService.js
 * Project: webapp-rrs
 * Created Date: Wednesday, July 09th 2021, 08:23:32 am
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
const prepareEndPoint = () => RestEndpoints.BECOME_VENDOR;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    firstName: data?.firstName,
    lastName: data?.lastName,
    email: data?.emailAddress,
    phoneNumber: data?.phoneNumber,
    comments: data?.comments,
    sessionConfirmationNumber: data?.sessionConfirmationNumber,
  };
};

/**
 * BecomeVendorService Class
 * @returns {*} BecomeVendorService class instance
 */
class BecomeVendorService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new BecomeVendorService();
