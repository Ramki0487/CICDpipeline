/*
 * File: AccountMenu.test.js
 * Project: webapp-rrs
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import AccountMenu from '@Components/account/accountMenu/AccountMenu';
import { shallow } from 'enzyme';
import Menu from '@Mocks/account/Menu.json';

describe('<AccountMenu/>', () => {
  test('should render username and rewardCash in accountMenu', () => {
    const wrapper = shallow(<AccountMenu menu={Menu} isDesktop={true} />);

    expect(wrapper.find('.menuUser').length).toBe(1);
  });

  test('should add to active class to active Menu', () => {
    const wrapper = shallow(<AccountMenu menu={Menu} isDesktop={false} activeMenu="My Account" />);

    expect(wrapper.find({ variant: 'h5' }).at(0).find('.menuActive').length).toBe(1);
    expect(wrapper.find({ variant: 'h5' }).at(1).find('.menuActive').length).toBe(0);
  });

  test('should render menu list in account menu', () => {
    const wrapper = shallow(<AccountMenu menu={Menu} />);

    expect(wrapper.find('.menuList')).toBeTruthy();
  });

  test('should render slideout modal when isDesktop set to true', () => {
    const wrapper = shallow(<AccountMenu menu={Menu} isDesktop={false} />);

    expect(wrapper.find('SlideOutModal').length).toBe(1);
  });

  test('should able to open and close the drawer of slideout modal', () => {
    const wrapper = shallow(<AccountMenu menu={Menu} isDesktop={false} />);

    expect(wrapper.find('SlideOutModal').length).toBe(1);
    expect(wrapper.find('SlideOutModal').prop('isOpen')).toBe(false);

    wrapper.find('Icon').first().simulate('click');

    expect(wrapper.find('SlideOutModal').prop('isOpen')).toBe(true);
  });
});
