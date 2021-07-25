/*
 * File: Patterns.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 1:00:10 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

export default {
  URL_PROTOCOL: /^https?:\/\//,
  LETTERS_ONLY: /^[a-zA-Z]+$/,
  NUMBERS_ONLY: /^[0-9]+$/,
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  ALPHA_NUMERIC_ACCENT: /^[a-zA-Z0-9-',À-ÿ ]+$/,
  ALPHA_NUMERIC: /^[a-zA-Z0-9 ]+$/,
  ALLOW_NUMERIC_INPUT_ONLY: /[^0-9.]/g,
  ALLOW_INTEGER_INPUT: /[^0-9]/g,
  PHONE_NUMBER: /^[0-9 ()-]+$/,
  ALLOW_CHAR_INPUT_ONLY: /[^a-zA-Z]/g,
  SKIP_NON_DIGITS: /[^\d]/g,
  REMOVE_ALL_SPACE: /[\s]+/g,
  MIME_TYPE_IMAGE: /^image+\/[-\w.]+$/g,
  MIME_TYPE_VIDEO: /^video+\/[-\w.]+$/g,
};
