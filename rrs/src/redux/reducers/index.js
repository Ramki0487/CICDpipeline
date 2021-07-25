/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Tuesday, March 2nd 2021, 9:52:51 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { combineReducers } from 'redux';
import cart from './Cart';
import cms from './Contentful';
import device from './DeviceInfo';
import product from './Product';
import profile from './Profile';
import search from './Search';
import sessionInfo from './SessionInfo';
import checkout from './Checkout';

// COMBINED REDUCERS
const reducers = {
  cms,
  device,
  profile,
  search,
  product,
  sessionInfo,
  cart,
  checkout,
};

export default combineReducers(reducers);
