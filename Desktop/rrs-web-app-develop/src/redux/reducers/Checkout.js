/*
 * File: Checkout.js
 * Project: webapp-rrs
 * Created Date: Sunday, 18th July 2021 12:04:49 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday, 18th July 2021 12:04:56 am
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_CHECKOUT } from '../actionTypes/Checkout';

// INITIAL STATE
const initialState = {};

const CheckoutReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_CHECKOUT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default CheckoutReducer;
