/*
 * File: Cart.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 15 2021, 7:07:28 pm
 * Author: prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_CART_ITEMS } from '../actionTypes/Cart';

// INITIAL STATE
const initialState = {};

const CartReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_CART_ITEMS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default CartReducer;
