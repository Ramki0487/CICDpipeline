/* istanbul ignore file */
/*
 * File: ContactUsService.js
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
const prepareEndPoint = () => RestEndpoints.CONTACT_US;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    inquiryType: data?.inquiryType,
    firstName: data?.firstName,
    lastName: data?.lastName,
    emailFrom: data?.emailAddress,
    phoneNumber: data?.phoneNumber,
    orderNumber: data?.orderNumber,
    orderDate: data?.orderDate,
    postalCode: data?.postalCode,
    customerId: data?.customerId,
    comments: data?.comments,
    sessionConfirmationNumber: data?.sessionConfirmationNumber,
  };
};

/**
 * ContactUsService Class
 * @returns {*} ContactForm class instance
 */
class ContactUsService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new ContactUsService();
