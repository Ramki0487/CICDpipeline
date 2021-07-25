/*
 * File: Col.helper.js
 * Project: webapp-rrs
 * Created Date: Friday, February 19th 2021, 1:14:25 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import styles from './Col.module.scss';

/**
 * This function goes through the breakpoint array, if it finds a container with a 0 width,
 * it will automatically set that breakpoint width to the previous breakpoint's width
 * @param {number} arr[xs] - grid width at extra small breakpoint (1-12)
 * @param {number} arr[sm] - grid width at small breakpoint (1-12)
 * @param {number} arr[md] - grid width at medium breakpoint (1-12)
 * @param {number} arr[lg] - grid width at large breakpoint (1-12)
 * @param {number} arr[xl] - grid width at extra large breakpoint (1-12)
 * @param {number} arr[xxl] - grid width at extra extra large breakpoint (1-12)
 * @param {boolean} isOffset - conditional flag to decide class name prefix (col or col-offset)
 * @returns {*}
 */
export const generateColClasses = (arr, isOffset) => {
  const breakpoints = [
    { breakpoint: 'xs', val: arr[0] },
    { breakpoint: 'sm', val: arr[1] },
    { breakpoint: 'md', val: arr[2] },
    { breakpoint: 'lg', val: arr[3] },
    { breakpoint: 'xl', val: arr[4] },
    { breakpoint: 'xxl', val: arr[5] },
  ];
  const prefix = isOffset ? 'col-offset' : 'col';

  const gridItemClasses = breakpoints.reduce((accumulator, current) => {
    if (current.val) {
      accumulator.push(styles[`${prefix}-${current.breakpoint}-${current.val}`]);
    }
    return accumulator;
  }, []);

  return gridItemClasses.join(' ');
};
