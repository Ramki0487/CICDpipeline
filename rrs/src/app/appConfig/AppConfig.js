/*
 * File: AppConfig.js
 * Project: webapp-rrs
 * Created Date: Sunday, July 18th 2021, 7:29:18 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 7:29:18 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import logger from '@Utils/Logger';
import { normalizeKeys } from '@Utils/Object';
import { isTypeOf } from '@Utils/Types';
import DefaultCMSMessages from '../../locales/en-US.json';
// import DefaultConfigs from '../Constants/DefaultConfigs';

const DefaultConfigs = {};

/**
 * AppConfig Class for CnC Module
 */
class AppConfig {
  /**
   * Creates an instance of CnC AppConfig Module.
   * @param {object} defaultAppConfig
   * @returns {AppConfig} instance
   */
  constructor(defaultAppConfig) {
    /**
     * Internal data property holding the cms / config values.
     * @type {{cms: {object}, config: {object}}}
     */
    this.data = {
      cms: normalizeKeys(defaultAppConfig.cms),
      config: normalizeKeys(defaultAppConfig.config),
    };
  }

  /**
   * Merge and update existing data property with cms & config coming from updatedAppConfig.
   * @type {function}
   * @param {object} updatedAppConfig
   * @param {object} updatedAppConfig.cms  cms
   * @param {object} updatedAppConfig.config config
   * @returns {boolean}
   */
  updateAndFreeze(updatedAppConfig) {
    try {
      this.data.cms = { ...this.data.cms, ...normalizeKeys(updatedAppConfig.cms) };
      this.data.config = { ...this.data.config, ...normalizeKeys(updatedAppConfig.config) };
      Object.freeze(this.data.cms);
      Object.freeze(this.data.config);
      Object.freeze(this.data);
      return true;
    } catch (error) {
      logger.error('Error updating the AppConfig.', { error, updatedAppConfig });
      return false;
    }
  }

  /**
   * Retrieves the requestedKey from data.cms.errors or returns defaultValue / null if passed.
   * @type {function}
   * @param {string} requestedKey
   * @param {*} defaultReturn
   * @returns {*|null}
   */
  getCMSError(requestedKey, defaultReturn = null) {
    const path = requestedKey.split('.');

    return path.reduce(
      (xs, key) => (xs && xs[key] ? xs[key] : defaultReturn),
      this.data.cms.errors
    );
  }

  /**
   * Retrieves the requestedKey from data.cms.messages or returns defaultValue / null if passed.
   * @type {function}
   * @param {string} requestedKey
   * @param {*} defaultReturn
   * @returns {*|null}
   */
  getCMSMessage(requestedKey, defaultReturn = null) {
    const path = requestedKey.split('.');

    return path.reduce(
      (xs, key) => (xs && xs[key] ? xs[key] : defaultReturn),
      this.data.cms.messages
    );
  }

  /**
   * Retrieves the list of requested keys from data.cms
   * @param {...string} cmsKeys
   * @return {Readonly<object>}
   */
  getCMSMessages(...cmsKeys) {
    const cmsMapValue = {};
    if (cmsKeys.length) {
      cmsKeys.reduce((values, key) => {
        values[key] = this.getCMSMessage(key);
        return values;
      }, cmsMapValue);
    }
    return Object.freeze(cmsMapValue);
  }

  /**
   * Retrieves the requestedKey from data.config, returns as boolean if equivalent or / null if doesn't exist.
   * @type {function}
   * @param {string} requestedKey
   * @returns {boolean|*}
   */
  getConfigValue(requestedKey) {
    const requestedValue = isTypeOf(this.data.config[requestedKey], 'undefined')
      ? false
      : this.data.config[requestedKey];
    if (isTypeOf(requestedValue, 'boolean')) {
      return requestedValue;
    } else if (requestedValue === 'true') {
      return true;
    } else if (requestedValue === 'false') {
      return false;
    } else if (requestedValue !== null && Number.isNaN(Number(requestedValue)) === false) {
      return Number(requestedValue);
    } else {
      return requestedValue;
    }
  }
}

export default new AppConfig({
  config: {
    ...DefaultConfigs,
  },
  cms: {
    ...DefaultCMSMessages,
  },
});
