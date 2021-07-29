/*
 * File: preview.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:18:49 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday March 4th 2021 6:29:07 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { themes } from '@storybook/theming';
import '../src/assets/styles/Global.scss';
import '../src/assets/styles/Storybook.scss';

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.dark,
  },
};
