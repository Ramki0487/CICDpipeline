/*
 * File: Filter.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { filter, sort } from '@Mocks/filter/Filter.json';
import { shallow } from 'enzyme';
import Filter from '../Filter';

describe('<Filter />', () => {
  let filterWrapper;

  const filterProps = {
    filterItems: filter,
    sortItems: sort,
    isMobile: true,
    isSort: false,
    isOpen: false,
  };

  beforeAll(() => {
    filterWrapper = shallow(<Filter {...filterProps} handleOnClick={jest.fn()} />);
  });

  it('shouldbe Defined', () => {
    expect(filterWrapper).toBeDefined();
  });

  // it('check filter is open/close', () => {
  //   expect(filterWrapper.find('SlideOutModal').prop('isOpen')).toBe(false);
  //   filterWrapper.setProps({ isOpen: true });
  //   expect(filterWrapper.find('SlideOutModal').prop('isOpen')).toBe(true);
  // });

  // it('check filter rendered is sort / filterItems', () => {
  //   expect(filterWrapper.find('FilterItems').length).toBe(1);
  //   filterWrapper.setProps({ isOpen: true, isSort: true });
  //   expect(filterWrapper.find('Sort').length).toBe(1);
  // });
});
