/*
 * File: Breadcrumb.stories.js
 * Project: webapp-rrs
 * Created Date: Wednesday, May 26th 2021, 1:44:29 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday May 26th 2021 1:44:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Breadcrumb from './Breadcrumb';

export default {
  title: 'Breadcrumb Component',
  component: Breadcrumb,
};

export const primary = (args) => <Breadcrumb {...args} />;

primary.args = {
  theme: 'dark',
  current: 'Category',
};
