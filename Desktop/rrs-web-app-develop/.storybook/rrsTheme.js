/*
 * File: rrs.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:20:26 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday June 20th 2021 2:27:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { create } from '@storybook/theming/create';
import logo from './assets/logo.svg';

export default create({
  base: 'light',

  // colorPrimary: 'pink',
  // colorSecondary: 'deepskyblue',

  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'white',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'white',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // // Form colors
  // inputBg: 'black',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Road Runner Sports',
  brandUrl: 'https://www.roadrunnersports.com',
  brandImage: logo,
});
