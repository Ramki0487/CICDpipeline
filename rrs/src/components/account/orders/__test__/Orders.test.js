/*
 * File: Orders.test.js
 * Project: webapp-rrs
 * Author: Prakash Rah <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Orders from '@Components/account/orders/Orders';
import { waitForComponentToPaint } from '@Utils/Testing';
import { mockUseSelector } from '@Utils/Testing';
import { shallow, mount } from 'enzyme';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

/** mocking useSelector */
mockUseSelector({ device: { isDesktop: true } });

describe('<Order/>', () => {
  test('should render Order comp with Panel and lineItem when isDekstop state is true', () => {
    /** useSelector mock  isDesktop state set to true */
    mockUseSelector({ device: { isDesktop: true } });

    const wrapper = shallow(<Orders />);

    expect(wrapper.find('Panel')).toBeTruthy();
    expect(wrapper.find('LineItem')).toBeTruthy();
  });

  test('should render Order comp with Filter and itemPanel when isDekstop state is false', () => {
    /** useSelector mock  isDesktop state set to false */
    mockUseSelector({ device: { isDesktop: false } });

    const wrapper = shallow(<Orders />);

    expect(wrapper.find('Filter')).toBeTruthy();
    expect(wrapper.find('itemPanel')).toBeTruthy();
  });

  test('should able to filter options in Filter comp', () => {
    const wrapper = mount(<Orders />);
    waitForComponentToPaint(wrapper);

    expect(wrapper.find('.filterMenuValue').at(0).prop('isSelected')).toBe(false);

    wrapper.find('.filterMenuValue').at(0).find('input').simulate('change');

    expect(wrapper.find('.filterMenuValue').at(0).prop('isSelected')).toBe(true);
  });
});
