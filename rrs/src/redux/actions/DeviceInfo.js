/*
 * File: DeviceInfo.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 5:56:25 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { UPDATE_DEVICE_TYPE, UPDATE_DIMENSIONS, UPDATE_SCROLL } from '../actionTypes/DeviceInfo';

/**
 * Updates page dimensions object in store
 * @param {object} payload - Payload object to update in store
 * @returns {object}
 */
export const updatePageDimensions = (payload) => ({
  type: UPDATE_DIMENSIONS,
  payload,
});

/**
 * Updates page scroll position in store
 * @param {object} payload - Payload object to update in store
 * @returns {object}
 */
export const updateScrollPosition = (payload) => ({
  type: UPDATE_SCROLL,
  payload,
});

/**
 * Updates device type in store
 * @param {object} payload - Payload object to update in store
 * @returns {object}
 */
export const updateDeviceType = (payload) => ({
  type: UPDATE_DEVICE_TYPE,
  payload,
});
