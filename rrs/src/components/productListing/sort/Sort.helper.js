/*
 * File: Sort.helper.js
 * Project: webapp-rrs
 * Created Date: Friday, June 4th 2021, 2:37:55 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 5:02:06 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Function formartSortItems
 * @param {array} sortItems - Array of sort items
 * @returns {array} - Formatted Sort items
 */
export const formartSortItems = (sortItems) => {
  return sortItems.map((item) => {
    return {
      label: item.name,
      value: item.url,
      isSelected: item.state === 'active' ? true : false,
    };
  });
};
