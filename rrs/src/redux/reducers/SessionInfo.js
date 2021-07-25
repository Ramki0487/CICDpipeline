/*
 * File: SessionInfo.js
 * Project: webapp-rrs
 * Created Date: Saturday, June 19th 2021, 2:38:03 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 4:40:20 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_SESSION_INFO } from '../actionTypes/SessionInfo';

// INITIAL STATE
const initialState = {};

const SessionInfoReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_SESSION_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default SessionInfoReducer;
