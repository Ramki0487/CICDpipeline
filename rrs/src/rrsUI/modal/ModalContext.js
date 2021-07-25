/*
 * File: ModelContext.js
 * Project: webapp-rrs
 * Created Date: Tuesday March 30th 2021
 * Author: Prakash <Prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { createContext, useContext } from 'react';

const ModelContext = createContext({
  show: false,
  handleClick: null,
});

export const useAppContext = () => useContext(ModelContext);

export default ModelContext;
