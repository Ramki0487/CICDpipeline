/*
 * File: CookiePolicy.test.jsx
 * Project: webapp-rrs
 * Created Date: Friday, June 25th 2021, 2:50:31 pm
 * Author: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import CookiePolicy from '../CookiePolicy';

describe('<CookiePolicy />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CookiePolicy />);

    expect(wrapper.find('.cookiePolicy').length).toEqual(1);
  });

  it('should show when policy not accepted before', () => {
    const wrapper = shallow(<CookiePolicy />);

    expect(wrapper.find('.cookiePolicy').exists()).toBe(true);
    expect(wrapper.find('.cookiePolicyLink').exists()).toBe(true);
    expect(wrapper.find('.cookiePolicyCta').exists()).toBe(true);
  });

  it('should not show when policy accepted already', () => {
    global.localStorage.setItem('cookiePolicyAccepted', 'true');
    const wrapper = shallow(<CookiePolicy />);

    expect(wrapper.find('.cookiePolicy').exists()).toBe(false);
    global.localStorage.removeItem('cookiePolicyAccepted');
  });

  it('should call localStorage setItem method when click Accept & Close', () => {
    jest.spyOn(global.localStorage.__proto__, 'setItem');
    const wrapper = shallow(<CookiePolicy />);
    wrapper.find('.cookiePolicyCta').simulate('click', {});

    expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(global.localStorage.setItem).toHaveBeenCalledWith('cookiePolicyAccepted', 'true');
  });
});
