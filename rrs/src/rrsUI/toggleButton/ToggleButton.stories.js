/*
 * File: Button.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import ToggleButton from './ToggleButton.jsx';

const Primary = (args) => <ToggleButton {...args} />;

Primary.args = {
  className: '',
  rating: 4.5,
  reviewCount: 43,
  reviewMessage: 'review',
};

export default {
  title: 'ToggleButton Component',
  component: ToggleButton,
};
