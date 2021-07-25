/*
 * File: Address.test.js
 * Project: webapp-rrs
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import ShippingAddress from '../ShippingAddress';
import { mockUseSelector } from '@Utils/Testing';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

/** useSelector mock  isDesktop state set to false */
mockUseSelector({ device: { isDesktop: false } });

describe('<Address />', () => {
  test('should render Address component with default props', () => {
    const wrapper = shallow(<ShippingAddress />);

    expect(wrapper.find('CardPicker')).toBeTruthy();
    expect(wrapper.find('CardPicker').at(0).find('.addressTitle')).toBeTruthy();
  });

  test('should able to change primary address in address component', () => {
    const wrapper = shallow(<ShippingAddress />);
    expect(wrapper.find('CardPicker').at(0).find('.addressHeaderTitle').children().text()).toBe(
      'Primary'
    );

    wrapper.find('CardPicker').at(1).find('.addressBar').last().simulate('click');

    expect(wrapper.find('CardPicker').at(1).find('.addressHeaderTitle').children().text()).toBe(
      'Primary'
    );
  });
});
