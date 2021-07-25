/* istanbul ignore file */
/* eslint-disable no-unused-vars */
/*
 * File: ProductVariants.js
 * Project: webapp-rrs
 * Created Date: Monday, June 21st 2021, 3:58:04 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

export const normalizeProductVariants = (variants) => {
  variants &&
    Object.entries(variants)?.map(([currKey, currVal]) => {
      Object.entries(currVal).map(([key, val]) => {
        val.isAvailable = true;
        val.isSelected = false;
      });
    });

  // Return updated variants
  return variants;
};

export const mergeProductVariants = (currentVariants, newVariants, selectedVaraints) => {
  //Map and merge current variants with new variants and update the availability and selection
  currentVariants &&
    Object.entries(currentVariants)?.map(([currKey, currVal]) => {
      Object.entries(currVal)?.map(([key, val]) => {
        // If the variants are present in new API response then update the availability
        if (newVariants?.[currKey]) {
          if (newVariants[currKey]?.[key]) {
            currVal[key] = { ...val, isAvailable: true, ...newVariants[currKey][key] };
          } else {
            currVal[key]['isAvailable'] = false;
          }
        }

        // Update selection Only if the variant is available
        if (
          selectedVaraints[currKey] &&
          key === selectedVaraints[currKey] &&
          currVal[key]['isAvailable']
        ) {
          currVal[key]['isSelected'] = true;
        } else {
          currVal[key]['isSelected'] = false;
        }
      });
    });

  // Return updated variants
  return currentVariants;
};
