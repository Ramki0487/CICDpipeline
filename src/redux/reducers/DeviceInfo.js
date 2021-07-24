/*
 * File: DeviceInfo.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 5:17:14 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday July 2nd 2021 1:40:47 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_DEVICE_TYPE, UPDATE_DIMENSIONS, UPDATE_SCROLL } from '../actionTypes/DeviceInfo';

// INITIAL STATE
export const initialState = {
  width: null,
  height: null,
  scrollTop: 0,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
};

const DeviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DIMENSIONS:
    case UPDATE_DEVICE_TYPE:
      return { ...state, ...payload };
    case UPDATE_SCROLL:
      return { ...state, scrollTop: payload };
    default:
      return state;
  }
};

export default DeviceReducer;
