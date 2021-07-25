/*
 * File: Checkbox.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  const mockCallBack = jest.fn();
  const props = {
    className: 'checkboxWrapper',
    id: '1',
    disabled: true,
    isChecked: true,
    backgroundColor: '#000000',
    label: 'sports',
    type: 'one',
    value: 'sports',
    handleOnMouseOver: mockCallBack,
  };

  it('should render checkbox component with default props', () => {
    const checkboxWrapper = mount(<Checkbox />);

    expect(checkboxWrapper.find('Row').prop('className')).toBe('checkbox');
    expect(checkboxWrapper.find('input').prop('checked')).toBe(false);
    expect(checkboxWrapper.find('input').prop('disabled')).toBe(false);
    expect(checkboxWrapper.find('input').prop('value')).toBe('');
    expect(checkboxWrapper.find('.checkboxColorOption').length).toBe(0);
  });

  it('should render checkbox component with custom props', () => {
    const checkboxWrapper = mount(<Checkbox {...props} />);
    checkboxWrapper.find('Row').simulate('mouseOver');

    expect(checkboxWrapper.find('Row').prop('className')).toContain('checkboxWrapper');
    expect(checkboxWrapper.find('input').prop('id')).toBe('1');
    expect(checkboxWrapper.find('input').prop('disabled')).toBe(true);
    expect(checkboxWrapper.find('input').prop('checked')).toBe(true);
    expect(checkboxWrapper.find('.checkboxColorOption').length).toBe(1);
    expect(checkboxWrapper.find('.checkboxLabelText').children().text()).toBe('sports');
    expect(checkboxWrapper.find('Row').prop('className')).toContain(' checkbox-one');
    expect(checkboxWrapper.find('input').prop('value')).toBe('sports');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should render checkbox was active when ischecked props was true', () => {
    const checkboxWrapper = mount(<Checkbox isChecked={true} />);

    expect(checkboxWrapper.find('Row').prop('className')).toContain('active');
  });

  it('should trigger the callback function on checkbox change', () => {
    const checkboxWrapper = mount(<Checkbox handleOnChange={mockCallBack} />);
    checkboxWrapper.find('input').simulate('change');

    expect(mockCallBack).toHaveBeenCalled();
    expect(checkboxWrapper.find('input').prop('checked')).toBe(true);
  });
});
