/*
 * File: DeviceInfo.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 5:17:14 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday June 12th 2021 12:16:18 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { PROFILE_ACTIONS } from '../actionTypes/Profile';

// INITIAL STATE
const initialState = {
  login: {
    success: false,
  },
  register: {
    success: false,
  },
};

const ProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_ACTIONS.LOGIN:
      return { ...state, login: { ...payload } };
    case PROFILE_ACTIONS.REGISTER:
      return { ...state, register: { ...payload } };
    default:
      return state;
  }
};

export default ProfileReducer;
