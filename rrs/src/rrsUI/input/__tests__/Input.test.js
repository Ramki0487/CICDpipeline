/*
 * File: Input.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import Input from '../Input';

describe('<Input />', () => {
  const mockOnBlurCallBack = jest.fn();
  const mockOnChangeCallBack = jest.fn();
  const mockOnKeyUpCallBack = jest.fn();
  let inputWrapper;
  beforeAll(() => {
    inputWrapper = mount(
      <Input
        onBlur={mockOnBlurCallBack}
        onChange={mockOnChangeCallBack}
        onKeyUp={mockOnKeyUpCallBack}
        type="text"
      />
    );
  });

  it('Test typing and label', () => {
    const event = { target: { name: 'name', value: 'Test' } };
    inputWrapper.setProps({ label: 'Label' });
    inputWrapper.find('input').simulate('change', event);

    expect(inputWrapper.find('label').text()).toBe('Label');
    expect(inputWrapper.find('input').hasClass(/Active/)).toBe(true);
  });

  it('Should trigger a callback on input change/keyup', () => {
    inputWrapper.find('input').simulate('keyUp');

    expect(mockOnKeyUpCallBack).toHaveBeenCalled();
  });

  it('Has preset value', () => {
    inputWrapper.setProps({ value: 'Test' });

    expect(inputWrapper.find('input').props().value).toBe('Test');
  });

  it('Should trigger a callback after onBlur event', () => {
    inputWrapper.find('input').simulate('blur');

    expect(mockOnBlurCallBack).toHaveBeenCalled();
  });
});
