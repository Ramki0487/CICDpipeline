/*
 * File: Password.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Password from '../Password';

describe('<Password />', () => {
  const mockCallBack = jest.fn();
  const props = {
    flexDirection: 'row-reverse',

    inputProps: {
      type: 'text',
      onClick: mockCallBack,
    },
    className: 'PasswordWrapper',
  };

  it('should render Password component with default props', () => {
    const PasswordWrapper = shallow(<Password />);

    expect(PasswordWrapper.find('.Password').prop('flexDirection')).toBe('row');
    expect(PasswordWrapper.find('.Password').length).toBe(1);
    expect(PasswordWrapper.find('.password-icon-row').length).toBe(1);
  });

  it('should render Password component with custom props', () => {
    const PasswordWrapper = shallow(<Password {...props} />);
    PasswordWrapper.find('Input').simulate('click');

    expect(PasswordWrapper.find('.Password').prop('flexDirection')).toBe('row-reverse');
    expect(PasswordWrapper.find('Input').prop('type')).toBe('password');
    expect(PasswordWrapper.find('.PasswordWrapper').length).toBe(1);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should render Password component with icon props', () => {
    const PasswordWrapper = shallow(<Password iconProps={{ iconName: 'search' }} />);

    expect(PasswordWrapper.find('Icon')).toBeDefined();
    expect(PasswordWrapper.find('Icon').prop('iconName')).toBe('search');
  });

  it('tests click on Icon after typing', async () => {
    const PasswordWrapper = shallow(
      <Password iconProps={{ iconName: 'search', onClick: mockCallBack }} />
    );
    PasswordWrapper.find('Input')
      .dive()
      .find('input')
      .simulate('change', { target: { value: 'submitted text' } });
    PasswordWrapper.find('Icon').simulate('click');

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  it('tests on change callback', () => {
    const PasswordWrapper = shallow(<Password inputProps={{ onChange: mockCallBack }} />);
    PasswordWrapper.find('Input')
      .dive()
      .find('input')
      .simulate('change', { target: { value: 'on change text' } });

    expect(mockCallBack).toHaveBeenCalledWith('on change text');
  });
});
