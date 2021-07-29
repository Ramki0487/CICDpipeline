/*
 * File: Product.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 15 2021, 7:07:28 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_PRODUCT_DETAIL, UPDATE_PRODUCT_VARIANTS } from '../actionTypes/Product';

// INITIAL STATE
const initialState = {};

const productReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_PRODUCT_DETAIL:
      return { ...state, ...payload };
    case UPDATE_PRODUCT_VARIANTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default productReducer;
