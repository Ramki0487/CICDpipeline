/*
 * File: Cookies.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 1:08:25 pm
 * Author: Nelson <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import logger from '@Utils/Logger';

// Add the cookies Name here to be Encrypted & Decrypted
const EncryptedCookiesList = [];

/**
 * Returns the cookie value mapped to the "name" sent to the function.
 * @type {function}
 * @param {string} name
 * @return {string|undefined}
 */
export const getCookie = (name) => {
  if (name) {
    try {
      const regex = new RegExp(`(?:;\\s)*${name}=([^;]*)`);
      const match = document.cookie.match(regex);
      if (match) {
        const cookieValue = match[1];
        if (EncryptedCookiesList.includes(name)) {
          return decodeURIComponent(cookieValue);
        } else {
          return unescape(cookieValue);
        }
      }
    } catch (error) {
      logger.error(`Error occurred while reading cookie : "${name}"`, { name, error });
    }
  }
};

/**
 * Creates a new cookie and return a boolean as a result of the operation.
 * @type {function}
 * @param {string} name
 * @param {*} value
 * @param {string} expiration
 * @param {boolean} secure
 * @return {boolean}
 */
export function setCookie(name, value, expiration = '', secure = false) {
  try {
    const isSecure = secure && location.protocol === 'https:';
    const cookieValue = EncryptedCookiesList.includes(name) ? encodeURIComponent(value) : value;
    document.cookie = `${name}=${cookieValue}; path=/;expires=${expiration}${
      isSecure ? ';secure' : ''
    }`;
    return true;
  } catch (error) {
    logger.error(`Error occurred calling setCookie for "${name}"`, {
      name,
      value,
      expiration,
      secure,
      error,
    });
    return false;
  }
}

/**
 * Removes a cookie and return a boolean as a result of the operation.
 * @type {function}
 * @param {string} name
 * @return {boolean}
 */
export function deleteCookie(name) {
  try {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    return true;
  } catch (error) {
    logger.error(`Error occurred while deleting cookie "${name}"`, { name, error });
    return false;
  }
}
