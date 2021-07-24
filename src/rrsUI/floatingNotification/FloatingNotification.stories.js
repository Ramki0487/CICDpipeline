/*
 * File: FloatingNotification.stories.js
 * Project: webapp-rrs
 * Created Date: Monday, April 5th 2021, 08:40:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import FloatingNotification from './FloatingNotification';

export default {
  title: 'Floating Notification Component',
  component: FloatingNotification,
};

const Template = (args) => <FloatingNotification {...args} />;

export const Notification = Template.bind({});
Notification.args = {
  ...Notification.args,
  badge: '90',
  title: 'VIP 90-Day Fit Promise',
  message: 'Lorem ipsum dolor sit amet adipiscing elit!',
};
