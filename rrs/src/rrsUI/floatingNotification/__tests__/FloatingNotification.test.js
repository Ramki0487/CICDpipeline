/*
 * File: Toggle.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import FloatingNotification from '../FloatingNotification';

describe('<Notification />', () => {
  const props = {
    isActive: true,
    number: 90,
    title: 'VIP 90-Day Fit Promise',
    message: 'Lorem ipsum dolor sit amet adipiscing elit!',
  };
  let notification;

  beforeAll(() => {
    notification = shallow(<FloatingNotification {...props} />);
  });

  it('Should close notification', () => {
    expect(notification.find('div[className*="notification"]').hasClass(/show/)).toBe(true);
    notification.find('Icon').simulate('click');
    expect(notification.find('div[className*="notification"]').hasClass(/hide/)).toBe(true);
  });

  it('should render mobile view when isMobile = true', () => {
    expect(notification.find('div[className*="notification"]').hasClass(/desktop/)).toBe(true);
    notification.setProps({ ...notification.props(), isMobile: true });
    expect(notification.find('div[className*="notification"]').hasClass(/mobile/)).toBe(true);
  });
});
