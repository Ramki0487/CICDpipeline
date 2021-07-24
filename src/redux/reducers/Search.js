/*
 * File: Search.js
 * Project: webapp-rrs
 * Created Date: Wednesday, June 2nd 2021, 7:13:08 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 1st 2021 6:33:27 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_SEARCH_RESULTS } from '../actionTypes/Search';

// INITIAL STATE
const initialState = {};

const SearchReducer = (state = initialState, { type, payload = {}, isReset = true }) => {
  switch (type) {
    case UPDATE_SEARCH_RESULTS:
      // Incase of Lazyload update just the results
      if (!isReset) {
        return { ...state, results: [...state.results, ...(payload?.results ?? [])] };
      }

      return { ...payload };
    default:
      return state;
  }
};

export default SearchReducer;
