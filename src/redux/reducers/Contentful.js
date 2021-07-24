/*
 * File: Contentful.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 3rd 2021, 12:48:04 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Wednesday May 5th 2021 9:30:17 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { SET_PAGE_MODEL } from '../actionTypes/Contentful';

// INITIAL STATE
const initialState = {
  pageModel: {},
};

const ContentfulReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE_MODEL:
      return { ...state, pageModel: { ...payload } };
    default:
      return state;
  }
};

export default ContentfulReducer;
