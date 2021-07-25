/*
 * File: HamburgerMenu.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 7:13:18 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 14th 2021 7:41:57 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { headerLinks, menuItems } from '@Mocks/menu/Menu.json';
import { shallow } from 'enzyme';
import HamburgerMenu from '../HamburgerMenu';

describe('<HamburgerMenu />', () => {
  const mockCallBack = jest.fn();
  let hamburgerWrapper;
  beforeEach(() => {
    hamburgerWrapper = shallow(
      <HamburgerMenu menuItems={menuItems} topNavItems={headerLinks} LinkTag={() => {}} />
    );
  });

  it('test hamburger menu click event', () => {
    const icon = hamburgerWrapper.find('Icon');
    icon.props().onClick(mockCallBack());
    icon.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('check hamburger menu open', () => {
    const icon = hamburgerWrapper.find('Icon');
    icon.props().onClick(mockCallBack());
    icon.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
    expect(hamburgerWrapper.find('SlideOutModal').prop('isOpen')).toBe(true);
  });
});
