/*
 * File: Product.helper.js
 * Project: webapp-rrs
 * Created Date: Tuesday, June 14 2021, 11:10:53 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import Patterns from '@Utils/Patterns';

/**
 * Get gender name
 * @param {*} gender
 * @returns
 */
const getGender = (gender) => {
  switch (gender) {
    case 1:
      return 'Mens';
    case 2:
      return 'Womens';
    case 3:
      return 'Unisex';
    case 4:
      return 'Kids';
    default:
      return '';
  }
};

/**
 * Get Product Title
 * @param {*} gender
 * @param {*} brand
 * @param {*} displayName
 * @returns
 */
export const getProductTitle = (gender, brand, displayName) => {
  if (!(gender || brand || displayName)) return '';
  return `${getGender(gender)} ${brand} ${displayName}`;
};

/**
 * Method to get the stock level
 * @param {*} colorCode
 * @param {*} product
 * @returns
 */
export const getStockLevel = (colorCode, product) => {
  const colors = product?.variantGroups?.colors;
  if (Object.keys(colors).length > 0 && colorCode) {
    return Number(colors[colorCode]?.stockLevel);
  }
};

/**
 * Method to get request object for default color code
 * @param {*} product
 */
export const getSelectedColorVariant = (colors, colorCode) => {
  if (colorCode && colors && Object.keys(colors)?.length > 0) {
    const selectedColor = colors[colorCode];
    return {
      colors: selectedColor?.colorDetails?.colorCode,
      colorGroup: selectedColor?.colorDetails?.colorName,
      productImage: selectedColor?.colorDetails?.imageUrl,
      skuId: selectedColor?.skuId,
    };
  }

  return null;
};

export const getHeroImage = (colorVariants, defaultColor, selectedVariants) => {
  let imageUrl = null;

  if (selectedVariants) {
    imageUrl = selectedVariants?.productImage;
  }

  if (!imageUrl && defaultColor && colorVariants) {
    imageUrl = colorVariants[defaultColor]?.colorDetails?.imageUrl;
  }

  if (!imageUrl && colorVariants) {
    imageUrl = colorVariants[Object.keys(colorVariants)?.[0]]?.colorDetails?.imageUrl;
  }

  return imageUrl;
};

export const validateSelectedVairants = (variantGroups, selectedVariants) => {
  let validCount = 0;
  selectedVariants &&
    Object.keys(selectedVariants)?.map((key) => {
      const name = selectedVariants[key];
      if (variantGroups[key]?.[name]?.isAvailable) {
        validCount++;
      }
    });

  return validCount == Object.keys(variantGroups)?.length ? true : false;
};

export const refreshSelectedVaraints = (variantGroups, selectedVariants) => {
  const updatedVaraints = {};
  selectedVariants &&
    Object.keys(selectedVariants)?.map((key) => {
      const name = selectedVariants[key];
      if (variantGroups[key]?.[name]?.isAvailable) {
        updatedVaraints[key] = name;
      }
    });

  return updatedVaraints;
};

export const constructBrandUrl = (brand) => {
  return `/brands/${brand.replace(Patterns.REMOVE_ALL_SPACE, '_')}`;
};
