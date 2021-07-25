/*
 * File: ToggleButton.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import ToggleButton from '../ToggleButton';

describe('<ToggleButton />', () => {
  it('should ON toggle button and trigger callback', () => {
    const mockCallBack = jest.fn();
    const toggleWrapper = shallow(<ToggleButton onClick={mockCallBack} />);

    // By default toggle should be in OFF state
    expect(toggleWrapper.find('.toggleText').text()).toBe('OFF');

    toggleWrapper.find('label').simulate('click');

    expect(mockCallBack).toHaveBeenCalledTimes(1);
    expect(toggleWrapper.find('.toggleText').text()).toBe('ON');
  });

  it('should OFF toggle button and trigegr callback', () => {
    const mockCallBack = jest.fn();
    const toggleWrapper = shallow(<ToggleButton isEnabled onClick={mockCallBack} />);

    expect(toggleWrapper.find('.toggleText').text()).toBe('ON');

    toggleWrapper.find('label').simulate('click');

    expect(mockCallBack).toHaveBeenCalledTimes(1);
    expect(toggleWrapper.find('.toggleText').text()).toBe('OFF');
  });

  it('should enable toggle by default when prop isEnabled=`true`', () => {
    const toggleWrapper = shallow(<ToggleButton isEnabled onClick={() => {}} />);

    expect(toggleWrapper.find('.toggleText').text()).toBe('ON');
  });
});
