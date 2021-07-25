/*
 * File: Product.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 15 2021, 7:07:28 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_PRODUCT_DETAIL, UPDATE_PRODUCT_VARIANTS } from '@Redux/actionTypes/Product';
import GetProductVarientService from '@Services/getProductVarientService/GetProductVarientService';
import ProductDetailService from '@Services/productDetailService/ProductDetailService';
import logger from '@Utils/Logger';
import { mergeProductVariants, normalizeProductVariants } from '../normalizeData/ProductVariants';

/**
 * Updates product details in store
 * @param {object} payload - product details results
 * @returns {object}
 */
const updateProductDetails = (payload) => ({
  type: UPDATE_PRODUCT_DETAIL,
  payload,
});

/**
 * Updates variants in store
 * @param {object} payload - product variants
 * @returns {object}
 */
const updateProductVariants = (payload) => ({
  type: UPDATE_PRODUCT_VARIANTS,
  payload,
});

/**
 * Action Creator - Fetches product details from productdetails API
 * @param {object} data - ProductDetails request data
 * @returns {function}
 */
export const getProductDetails = (data) => {
  return async (dispatch) => {
    try {
      logger.info('fetching product details');

      const response = await ProductDetailService.invoke(data);
      const productData = response?.payload?.state?.product;
      const variantGroups = normalizeProductVariants(productData?.variantGroups);

      dispatch(updateProductDetails({ ...productData, variantGroups }));
    } catch (error) {
      logger.error('Error getting product details from API', error);
    }
  };
};

/**
 * Action Creator - Fetches product variants from GetProductVarientService API
 * @param {object} data - Product variants
 * @returns {function}
 */
export const getProductVariants = (data) => {
  return async (dispatch, getState) => {
    try {
      logger.info('fetching product variants');

      const response = await GetProductVarientService.invoke(data);
      // Pass current variants from store, new variants and selected variants to normalize it
      const variantGroups = mergeProductVariants(
        getState().product?.variantGroups,
        response?.payload?.state?.variantGroups,
        {
          colors: data?.colors,
          flavors: data?.flavors,
          sizes: data?.sizes,
          widths: data?.widths,
        }
      );

      dispatch(updateProductVariants({ price: response.price, variantGroups }));
    } catch (error) {
      logger.error('Error getting product details from API', error);
    }
  };
};
