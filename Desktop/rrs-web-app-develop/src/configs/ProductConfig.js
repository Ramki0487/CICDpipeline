/*
 * File: Product.js
 * Project: webapp-rrs
 * Created Date: Monday, May 26th 2021, 7:44:47 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

export const INITIAL_QUANTITY = 1;
export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 10;

//Fallback to production values
export const POWER_REWIEW = {
  API_KEY: process.env.NEXT_PUBLIC_POWER_REVIEW_API_KEY ?? '147a4a5f-25c7-42e9-b502-8ba2da23f12d',
  MERCHANT_GROUP_ID: process.env.NEXT_PUBLIC_POWER_REVIEW_GROUP_ID ?? '12342',
  MERCHANT_ID: process.env.NEXT_PUBLIC_POWER_REVIEW_MERCHANT_ID ?? '6141',
};

export const VIP_MEMBERSHIP_PRODUCT = 'RAC55';
export const VIP_MEMBERSHIP_COMMERCE_ID = 'ci35581000010';
export const VIP_PLUS_MEMBERSHIP_PRODUCT = 'RAC100';
export const VIP_PLUS_MEMBERSHIP_COMMERCE_ID = 'ci35581000010';
