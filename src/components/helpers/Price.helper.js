/*
 * File: Price.helper.js
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 4:28:37 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 11:27:16 am
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Function formatPriceObject
 * @returns
 */
export const formatPriceObject = (priceData, saleMessage, isOutlet, isExclusive, isUmap) => {
  const priceObject = {
    saleMessage,
    isOutlet,
    isExclusive,
    isUmap,
  };
  priceData?.forEach(({ amount, type, symbol }) => {
    const price = `${symbol}${amount.replace('-', ` - ${symbol}`)}`;
    if (type === 'MSRP') {
      priceObject.original = price;
    } else if (type === 'SALE') {
      priceObject.sale = price;
    } else if (type === 'VIP') {
      priceObject.vip = price;
      priceObject.vipMessage = 'VIP price';
    }
  });
  return priceObject;
};
