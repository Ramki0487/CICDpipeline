/*
 * File: FilterOptions.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { filter } from '@Mocks/filter/Filter.json';
import { shallow } from 'enzyme';
import FilterOptions from '../FilterOptions';

describe('<FilterOptions />', () => {
  let filterItemsWrapper;
  const mockCallBack = jest.fn();

  const filterItemsProps = {
    filterItems: filter,
    isMobile: true,
    isOpen: true,
    onClose: mockCallBack,
    onClick: mockCallBack,
  };

  beforeAll(() => {
    filterItemsWrapper = shallow(<FilterOptions {...filterItemsProps} handleOnClick={jest.fn()} />);
  });

  it('shouldbe Defined', () => {
    expect(filterItemsWrapper).toBeDefined();
  });

  // it('Check accordion state', () => {
  //   expect(filterItemsWrapper.find('Accordion').at(0).prop('collapsed')).toBe(false);
  //   filterItemsWrapper.setProps({ isMobile: false });
  //   expect(filterItemsWrapper.find('Accordion').at(0).prop('collapsed')).toBe(true);
  // });

  // it('Check header and footer is rendered for mobile', () => {
  //   expect(filterItemsWrapper.find('.filterItemHeader').length).toBe(0);
  //   expect(filterItemsWrapper.find('.filterItemFooter').length).toBe(0);
  //   filterItemsWrapper.setProps({ isMobile: true });
  //   expect(filterItemsWrapper.find('.filterItemHeader').length).toBe(1);
  //   expect(filterItemsWrapper.find('.filterItemFooter').length).toBe(1);
  // });

  // it('Test onClick event', () => {
  //   const closeBtn = filterItemsWrapper.find('Icon');
  //   closeBtn.simulate('click');
  //   expect(mockCallBack).toHaveBeenCalled();
  // });
});
