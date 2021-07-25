/*
 * File: CustomPropTypes.js
 * Project: webapp-rrs
 * Created Date: Friday, February 19th 2021, 2:12:03 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

export const range = (min, max) => {
  //Return a custom validator function
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (prop) {
      if (typeof prop !== 'number' || prop < min || prop > max) {
        return new Error(
          `Prop ${propName} must be a number between ${min} and ${max} on ${componentName}`
        );
      }
    }
  };
};
