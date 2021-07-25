/*
 * File: UseBrowserLayoutEffect.js
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 3:59:26 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Friday March 19th 2021 11:49:43 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { useLayoutEffect } from 'react';

const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => {};

export default useBrowserLayoutEffect;
