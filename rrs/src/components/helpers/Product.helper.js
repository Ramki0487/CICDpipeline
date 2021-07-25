/*
 * File: Product.helper.js
 * Project: webapp-rrs
 * Created Date: Tuesday, July 13th 2021, 6:09:11 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 6:53:16 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { IMAGE_ENDPOINTS } from '@Configs/ImageEndpoints';
import AddItemToBasketService from '@Services/shoppingCartService/AddItemToBasketService';
import logger from '@Utils/Logger';

/**
 * Function to construct Porduct Image Url
 * @param {string} productId - Product Id
 * @param {string} colorCode - Color Code
 * @returns
 */
export const constructProductImageUrl = (productId, colorCode) => {
  return `${IMAGE_ENDPOINTS.scene7}${productId}${colorCode ? `-${colorCode}` : ''}`;
};

/**
 * Function - Add Item To Cart
 * @param {*} param0
 * @returns
 */
export const addItemToCart = async (data) => {
  try {
    const response = await AddItemToBasketService.invoke(data);
    return response?.payload;
  } catch (error) {
    logger.error('Error adding item to the cart', error);
  }

  return null;
};
