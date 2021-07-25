/*
 * File: VipMembership.helper
 * Project: webapp-rrs
 * Created Date: Sunday, July 18th 2021, 3:35:32 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 3:33:13 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { VIP_MEMBERSHIP_IN_CART } from '@App/constants/StorageKeys';
import {
  VIP_MEMBERSHIP_COMMERCE_ID,
  VIP_MEMBERSHIP_PRODUCT,
  VIP_PLUS_MEMBERSHIP_PRODUCT,
} from '@Configs/ProductConfig';
import RemoveCartItemService from '@Services/removeCartItemService/RemoveCartItemService';
import storage from '@Utils/Storage';
import { addItemToCart } from './Product.helper';

/**
 * Function - Identify Membership
 * @param {string} productId
 * @returns
 */
export const isMemberShipItem = (productId) => {
  return productId === VIP_MEMBERSHIP_PRODUCT || productId === VIP_PLUS_MEMBERSHIP_PRODUCT;
};

/**
 * Function - Check VIP membership Added or not
 * @returns
 */
export const isVipMembershipInCart = () => {
  return storage.getItem(VIP_MEMBERSHIP_IN_CART) ?? false;
};

/**
 * Function - Returns VIP or not
 * @param {string} membershipLevel - Membership status
 * @returns
 */
export const isVipUser = (membershipLevel) => {
  return membershipLevel === 'VIP2' || membershipLevel === 'VIP3';
};

/**
 * Function - Returns VIP Plus or not
 * @param {string} membershipLevel - Membership status
 * @returns
 */
export const isVipPlusUser = (membershipLevel) => {
  return membershipLevel === 'VIP3';
};

/**
 * Function - Add Vip membership to cart
 * @param {*} param0
 * @returns
 */
export const addMembershipToCart = async (membershipLevel) => {
  const addOnId = membershipLevel === 'VIP2' ? VIP_PLUS_MEMBERSHIP_PRODUCT : VIP_MEMBERSHIP_PRODUCT;
  const request = {
    skuId: addOnId,
    productId: addOnId,
    quantity: 1,
  };

  const response = await addItemToCart(request);
  if (response?.success) {
    // Store to track Membershipt item in cart
    storage.setItem(VIP_MEMBERSHIP_IN_CART, true);
  }

  return response;
};

/**
 * Function - Removes VIP Membership from cart
 * @param {*} param0
 * @returns
 */
export const removeMembershipFromCart = async () => {
  const request = {
    commerceItemId: VIP_MEMBERSHIP_COMMERCE_ID,
  };
  const response = await RemoveCartItemService.invoke(request);

  if (response?.payload?.success) {
    // Remove the
    storage.removeItem(VIP_MEMBERSHIP_IN_CART);
  }

  return response?.payload;
};
