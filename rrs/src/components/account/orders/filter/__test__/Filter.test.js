/*
 * File: Filter.test.js
 * Project: webapp-rrs
 * Author: Prakash Rjh <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import { waitForComponentToPaint } from '@Utils/Testing';
import Filter from '@Components/account/orders/filter/Filter';
import filterOptions from '@Mocks/order/Filter.json';

describe('<Filter/>', () => {
  let wrapper;
  const mockFunc = jest.fn();
  beforeAll(() => {
    wrapper = mount(<Filter orderFilter={filterOptions} handleChange={mockFunc} />);
    waitForComponentToPaint(wrapper);
  });

  test('should display slideOutModal when simulate is happend', () => {
    expect(wrapper.find('Col.drawerOpen').length).toBe(0);

    wrapper.find('div.filterButton').simulate('click');

    expect(wrapper.find('Col.drawerOpen').length).toBe(1);
  });

  test('should triger callback function when options selected in slideoutmodal', () => {
    expect(wrapper.find('.filterMenuValue').at(0).prop('isSelected')).toBe(false);

    wrapper.find('.filterMenuValue').at(0).find('input').simulate('change');

    expect(mockFunc).toBeCalled();
  });
});
