/*
 * File: Selectbox.test.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 17th 2021, 11:39:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { options } from '@Mocks/selectBox/selectBox.json';
import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import Selectbox from '../Selectbox';
describe('<Selectbox />', () => {
  const mockCallBack = jest.fn();
  let selectboxWrapper = null;

  beforeAll(() => {
    selectboxWrapper = mount(<Selectbox className="sort-selectBox" options={options} />);
    waitForComponentToPaint(selectboxWrapper);
  });

  it('should render component with className prop value', () => {
    expect(selectboxWrapper.find('div.sort-selectBox').length).toBe(1);
  });

  it('should render component with Id prop value', () => {
    selectboxWrapper.setProps({ id: 'selectBox-Id' });

    expect(selectboxWrapper.find('div#selectBox-Id').length).toBe(1);
  });

  it('should render selectBox component with  dropDown options value', () => {
    selectboxWrapper.setProps({ handleOnChange: mockCallBack });

    expect(selectboxWrapper.find('.selectboxDropdownItem').length).toBeGreaterThan(1);
  });

  it('should display selectbox container on click', () => {
    selectboxWrapper.setProps({ handleOnChange: mockCallBack });

    expect(selectboxWrapper.find('.selectbox-hide').length).toBe(1);

    selectboxWrapper.find('.selectbox-hide').simulate('click');

    expect(selectboxWrapper.find('.selectbox-show').length).toBe(1);
  });

  it('should change selectBox header value when option value was selected', () => {
    selectboxWrapper.setProps({ defaultLabel: 'sortBy' });
    selectboxWrapper.find('.selectboxDropdownItem').at(2).simulate('click');

    expect(selectboxWrapper.find('span').at(0).text()).toBe('sortBy Price: High to Low');
  });

  it('should change selectBox active class when option value was selected ', () => {
    selectboxWrapper.setProps({ handleOnChange: mockCallBack });
    selectboxWrapper.find('.selectboxDropdownItem').at(3).simulate('click');

    expect(
      selectboxWrapper.find('.selectboxDropdownItem').at(3).hasClass('selectboxDropdownItemActive')
    ).toBeTruthy();
  });

  it('should hide selectBox when option value was selected ', () => {
    selectboxWrapper.setProps({ handleOnChange: mockCallBack });
    selectboxWrapper.find('.selectboxDropdownItem').at(3).simulate('click');

    expect(selectboxWrapper.find('.selectbox-hide').length).toBe(1);
  });

  it('should close selectbox  on outerclick', async () => {
    const map = {};
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb;
    });
    selectboxWrapper.setProps({ handleOnChange: mockCallBack });
    selectboxWrapper.find('.selectbox-hide').simulate('click');

    expect(selectboxWrapper.find('.selectbox-show').length > 0).toBeTruthy();

    map.click({ target: document.body });
    selectboxWrapper.update();

    expect(selectboxWrapper.find('.selectbox-hide').length > 0).toBeTruthy();
  });
});
