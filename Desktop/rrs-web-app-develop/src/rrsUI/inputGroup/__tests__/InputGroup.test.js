/*
 * File: InputGroup.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import InputGroup from '../InputGroup';

describe('<InputGroup />', () => {
  const mockCallBack = jest.fn();
  const props = {
    flexDirection: 'row-reverse',
    btnProps: {
      btnlabel: 'Reset',
    },
    inputProps: {
      type: 'text',
      onClick: mockCallBack,
    },
    className: 'inputGroupWrapper',
  };

  it('should render InputGroup component with default props', () => {
    const InputGroupWrapper = shallow(<InputGroup />);

    expect(InputGroupWrapper.find('.inputGroup').prop('flexDirection')).toBe('row');
    expect(InputGroupWrapper.find('Button').children().text()).toBe('Submit');
    expect(InputGroupWrapper.find('.inputGroup').length).toBe(1);
    expect(InputGroupWrapper.find('.input-group-button-row').length).toBe(1);
  });

  it('should render InputGroup component with custom props', () => {
    const InputGroupWrapper = shallow(<InputGroup {...props} />);
    InputGroupWrapper.find('Input').simulate('click');

    expect(InputGroupWrapper.find('.inputGroup').prop('flexDirection')).toBe('row-reverse');
    expect(InputGroupWrapper.find('Button').children().text()).toBe('Reset');
    expect(InputGroupWrapper.find('Input').prop('type')).toBe('text');
    expect(InputGroupWrapper.find('.inputGroupWrapper').length).toBe(1);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should render InputGroup component with icon props', () => {
    const InputGroupWrapper = shallow(<InputGroup iconProps={{ iconName: 'search' }} />);

    expect(InputGroupWrapper.find('Icon')).toBeDefined();
    expect(InputGroupWrapper.find('Icon').prop('iconName')).toBe('search');
  });

  it('tests click on Button after typing', async () => {
    const InputGroupWrapper = shallow(
      <InputGroup btnProps={{ btnlabel: 'submit', onClick: mockCallBack }} />
    );
    InputGroupWrapper.find('Button').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('tests click on Icon after typing', async () => {
    const InputGroupWrapper = shallow(
      <InputGroup iconProps={{ iconName: 'search', onClick: mockCallBack }} />
    );
    InputGroupWrapper.find('Input')
      .dive()
      .find('input')
      .simulate('change', { target: { value: 'submitted text' } });
    InputGroupWrapper.find('Icon').simulate('click');

    expect(mockCallBack).toHaveBeenCalledWith('submitted text');
  });

  it('tests on change callback', () => {
    const InputGroupWrapper = shallow(
      <InputGroup btnProps={{ btnlabel: 'submit' }} inputProps={{ onChange: mockCallBack }} />
    );
    InputGroupWrapper.find('Input')
      .dive()
      .find('input')
      .simulate('change', { target: { value: 'on change text' } });

    expect(mockCallBack).toHaveBeenCalledWith('on change text');
  });
});
