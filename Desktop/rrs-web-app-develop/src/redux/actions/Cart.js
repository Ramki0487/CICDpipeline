/*
 * File: cart_bk.js
 * Project: Desktop
 * Created Date: Tuesday, July 13th 2021, 9:56:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 1:00:39 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/* istanbul ignore file */
/*
 * File: Cart.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 15 2021, 7:07:28 pm
 * Author: prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { UPDATE_CART_ITEMS } from '@Redux/actionTypes/Cart';
import ClaimSourceCode from '@Services/claimSourceCodeService/ClaimSourceCodeService';
import GetCartItemsService from '@Services/getCartItemsService/GetCartItemsService';
import RemoveCartItemService from '@Services/removeCartItemService/RemoveCartItemService';
import UpdateCartQuantityService from '@Services/updateCartQuantityService/UpdateCartQuantityService';
import logger from '@Utils/Logger';

/**
 * Update cart Items in store
 * @param {object} payload - Cart Items to update in store
 * @returns {object}
 */
export const updateCartItems = (payload) => ({
  type: UPDATE_CART_ITEMS,
  payload,
});

/**
 * Action Creator - Fetch Cart Items
 * @returns {function}
 */
export const getCartItems = () => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await GetCartItemsService.invoke(sessionConfirmationNumber);

      dispatch(updateCartItems({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error getting Cart details from API', error);
    }
  };
};

/**
 * Action Creator - Update Cart Item quantity
 * @param {object} data - request payload
 * @returns {function}
 */
export const updateCartItemQuantity = (data) => {
  return async (dispatch, getState) => {
    const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
    /** appending session number in same request object */
    data = { ...data, sessionConfirmationNumber };

    try {
      const response = await UpdateCartQuantityService.invoke(data);

      dispatch(updateCartItems({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error getting Cart details from API', error);
    }
  };
};

/**
 * Action Creator - Remove Cart Item from Basket
 * @param {object} data - cart Item Id
 * @returns {function}
 */
export const removeCartItem = (data) => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await RemoveCartItemService.invoke({ ...data, sessionConfirmationNumber });

      dispatch(updateCartItems({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error getting Cart details from API', error);
    }
  };
};

/**
 * Action Creator - claimSourceCode
 * @param {object} data - couponId
 * @returns {function}
 */
export const claimSourceCode = (data) => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await ClaimSourceCode.invoke({ ...data, sessionConfirmationNumber });

      dispatch(updateCartItems({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error getting Cart details from API', error);
    }
  };
};
