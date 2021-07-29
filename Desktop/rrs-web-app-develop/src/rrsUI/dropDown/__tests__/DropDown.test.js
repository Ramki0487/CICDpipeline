/*
 * File: DropDown.test.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 17th 2021, 11:39:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { waitForComponentToPaint } from '@Utils/Testing';
import { mount, shallow } from 'enzyme';
import DropDown from '../DropDown';

describe('<DropDown />', () => {
  it('should render DropDown component with children', () => {
    const DropDownWrapper = shallow(<DropDown>Popularity</DropDown>);

    expect(DropDownWrapper.find('.dropdown').children().text()).toBe('Popularity');
  });

  it('should render DropDown component with className props', () => {
    const DropDownWrapper = shallow(<DropDown className="dropdownWrapper">Popularity</DropDown>);

    expect(DropDownWrapper.find('.dropdownWrapper').length).toBe(1);
  });

  it('should change the collapse value on trigger the click event', () => {
    const DropDownWrapper = shallow(<DropDown>Popularity</DropDown>);

    expect(DropDownWrapper.find('ContextProvider').prop('value').valueOf()).toStrictEqual({
      collapse: false,
    });

    DropDownWrapper.find('.dropdown').simulate('click');

    expect(DropDownWrapper.find('ContextProvider').prop('value').valueOf()).toStrictEqual({
      collapse: true,
    });
  });

  it('should render DropDown component with  DropDownContent', () => {
    const DropDownWrapper = shallow(
      <DropDown>
        <DropDown.Content className="dropdown-content">
          <DropDown.Item>High to Low</DropDown.Item>
          <DropDown.Item>Low to High</DropDown.Item>
        </DropDown.Content>
        Popularity
      </DropDown>
    );

    expect(DropDownWrapper.find('.dropdown-content').length > 0).toBeTruthy();
  });

  it('should hide DropDown component when click outside', () => {
    const map = {};
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb;
    });
    const DropDownWrapper = mount(
      <DropDown>
        <DropDown.Content>
          <DropDown.Item>High to Low</DropDown.Item>
          <DropDown.Item>Low to High</DropDown.Item>
        </DropDown.Content>
        Popularity
      </DropDown>
    );
    DropDownWrapper.find('.dropdown').simulate('click');
    waitForComponentToPaint(DropDownWrapper);

    expect(DropDownWrapper.find('.dropdownContentShow').length).toBe(1);

    map.click({ target: document.body });
    DropDownWrapper.update();

    expect(DropDownWrapper.find('.dropdownContentShow').length).toBe(0);
  });
});
