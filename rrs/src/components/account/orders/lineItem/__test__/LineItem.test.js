/*
 * File: LineItem.test.js
 * Project: webapp-rrs
 * Author: Prakash Rah <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import LineItem from '@Components/account/orders/lineItem/LineItem';
import orderDetails from '@Mocks/order/Order.json';

describe('<LineProduct />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LineItem products={orderDetails?.OrderHistory?.[0]?.delivered} />);
  });

  test('should render lineItem with product Image and details', () => {
    expect(wrapper.find('Image').at(0).prop('src')).toBeTruthy();
    expect(wrapper.find('.itemProductDetail').length).toBe(1);
  });

  test('should render lineItem with action buttons', () => {
    expect(wrapper.find('Button')).toBeTruthy();
  });
});
