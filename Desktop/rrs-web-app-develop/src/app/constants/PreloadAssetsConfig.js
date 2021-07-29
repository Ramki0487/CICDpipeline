/*
 * File: PreloadConfig.js
 * Project: webapp-rrs
 * Created Date: Thursday, July 1st 2021, 6:03:11 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 1st 2021 6:03:11 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import proximaNovaBoldItalic from '@Assets/fonts/proxima-nova/proxima-nova-bold-italic/proxima-nova-bold-italic.woff2';
import proximaNovaBold from '@Assets/fonts/proxima-nova/proxima-nova-bold/proxima-nova-bold.woff2';
import proximaNovaConExtraboldItalic from '@Assets/fonts/proxima-nova/proxima-nova-con-extrabold-italic/proxima-nova-con-extrabold-italic.woff2';
import proximaNovaExtraboldItalic from '@Assets/fonts/proxima-nova/proxima-nova-extrabold-italic/proxima-nova-extrabold-italic.woff2';
import proximaNovaMedium from '@Assets/fonts/proxima-nova/proxima-nova-medium/proxima-nova-medium.woff2';
import proximaNovaRegular from '@Assets/fonts/proxima-nova/proxima-nova-regular/proxima-nova-regular.woff2';

/**
 * List the critical fonts that needs to be preloaded
 */
export const preloadFontsList = [
  proximaNovaMedium,
  proximaNovaRegular,
  proximaNovaBold,
  proximaNovaBoldItalic,
  proximaNovaConExtraboldItalic,
  proximaNovaExtraboldItalic,
];
