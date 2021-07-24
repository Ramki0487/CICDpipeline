/*
 * File: Checkout.js
 * Project: webapp-rrs
 * Created Date: Saturday, 17th July 2021 11:57:12 pm
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday, 17th July 2021 11:57:18 pm
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_CHECKOUT } from '@Redux/actionTypes/Checkout';
import GetCheckoutOrderStateService from '@Services/getCheckoutOrderStateService/GetCheckoutOrderStateService';
import AddCouponService from '@Services/addCouponService/AddCouponService';
import logger from '@Utils/Logger';
import RemoveCouponService from '@Services/removeCouponService/RemoveCouponService';
import AddGiftCardsService from '@Services/addGiftCardService/AddGiftCardsService';
import RemoveGiftCardService from '@Services/removeGiftCardService/RemoveGiftCardService';
import ClaimGiftCardService from '@Services/claimGiftCardService/ClaimGiftCardService';

/**
 * Update cart Items in store
 * @param {object} payload - Cart Items to update in store
 * @returns {object}
 */
export const updateCheckoutState = (payload) => ({
  type: UPDATE_CHECKOUT,
  payload,
});

/**
 * Action Creator - Fetch Checkout page state
 * @returns {function}
 */
export const getCheckoutState = () => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await GetCheckoutOrderStateService.invoke(sessionConfirmationNumber);

      dispatch(updateCheckoutState({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error getting Checkout details from API', error);
    }
  };
};

/**
 * Action Creator - addCoupon
 * @param {object} data - couponId
 * @returns {function}
 */
export const addCoupon = (data) => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await AddCouponService.invoke({ ...data, sessionConfirmationNumber });

      dispatch(updateCheckoutState({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error adding Coupon details from API', error);
    }
  };
};

/**
 * Action Creator - removeCoupon
 * @returns {function}
 */
export const removeCoupon = () => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await RemoveCouponService.invoke(sessionConfirmationNumber);

      dispatch(updateCheckoutState({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error removing Coupon details from API', error);
    }
  };
};

/**
 * Action Creator - addGiftCard
 * @param {object} data - giftCardNumber , giftCardCVNNumber
 * @returns {function}
 */
export const addGiftCard = (data) => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await AddGiftCardsService.invoke({ ...data, sessionConfirmationNumber });

      dispatch(updateCheckoutState({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error adding Gift Card from API', error);
    }
  };
};

/**
 * Action Creator - removeGiftCard
 * @param {object} data - giftCardId
 * @returns {function}
 */
export const removeGiftCard = (data) => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await RemoveGiftCardService.invoke({ ...data, sessionConfirmationNumber });

      dispatch(updateCheckoutState({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error removing Gift Card from API', error);
    }
  };
};

/**
 * Action Creator - claimGiftCard
 * @param {object} data - giftCardNumber , giftCardCVNNumber
 * @returns {function}
 */
export const claimGiftCard = (data) => {
  return async (dispatch, getState) => {
    try {
      const sessionConfirmationNumber = getState().sessionInfo?.sessionConfirmationNumber;
      const response = await ClaimGiftCardService.invoke({ ...data, sessionConfirmationNumber });

      dispatch(updateCheckoutState({ ...response?.payload?.state }));
    } catch (error) {
      logger.error('Error claiming Gift from API', error);
    }
  };
};
