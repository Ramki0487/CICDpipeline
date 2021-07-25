/*
 * File: PriceBarRange.helper.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 23rd 2021, 04:17:00 pm
 * Author: Selvam <selvam.murugan@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import PATTERNS from '@Utils/Patterns';

/**
 * This function will validate user price inputs
 * depending of the type of data.
 * @param {string} name - On change input event validator
 * @param {number} input - On change event validator
 * @param {object} inputValues - Current state value
 * @param {number} min - Default min value from API
 * @param {number} max - Default max value from API
 * @returns {*}
 */
export const validatePrice = ({ name, input, inputValues, min, max }) => {
  const error = {};
  if (input === '' || !PATTERNS.NUMBERS_ONLY.test(input)) {
    error.message = 'Invalid price value';
  } else if (name === 'minPrice' && (input >= max || input < min)) {
    error.message = `Select the min and max values between the range of ${min}-${max}`;
  } else if (name === 'maxPrice' && (input <= min || input > max)) {
    error.message = `Select the min and max values between the range of ${min}-${max}`;
  } else if (name === 'minPrice' && input >= inputValues.maxPrice) {
    error.message = 'Minimum price should be less than maximum price';
  } else if (name === 'maxPrice' && input <= inputValues.minPrice) {
    error.message = 'Maximum price should be greater than minimum price';
  }
  return error;
};
