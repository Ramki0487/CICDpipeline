/*
 * File: Button.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  const mockCallBack = jest.fn();
  const customProps = {
    id: 'buttonId',
    className: 'buttonClass',
    theme: 'rr-skyblue',
    size: 'large',
    action: 'submit',
  };
  let btnWrapper;
  beforeAll(() => {
    btnWrapper = shallow(<Button onClick={mockCallBack}>Submit</Button>);
  });

  it('should render Button with default props ', () => {
    expect(btnWrapper.find('.size-small').length).toBe(1);
    expect(btnWrapper.find('.theme-rr-navy').length).toBe(1);
    expect(btnWrapper.find('button').props().type).toBe('button');
    expect(btnWrapper.find('button').props().disabled).toBe(false);
  });

  it('should render Button with custom props values ', () => {
    btnWrapper.setProps({ ...customProps });

    expect(btnWrapper.find('#buttonId').length).toBe(1);
    expect(btnWrapper.find('.buttonClass').length).toBe(1);
    expect(btnWrapper.find('.theme-rr-skyblue').length).toBe(1);
    expect(btnWrapper.find('.size-large').length).toBe(1);
    expect(btnWrapper.find('button').props().type).toBe('submit');
  });

  it('should trigger mockCallBack function', () => {
    btnWrapper.find('button').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should render children', () => {
    expect(btnWrapper.children().text()).toEqual('Submit');
  });

  it('should disable Button when disable prop value was true', () => {
    btnWrapper.setProps({ disabled: true });

    expect(btnWrapper.find('button').props().disabled).toBe(true);
  });

  it('should show the spinner if its loading', () => {
    expect(btnWrapper.find('.spinner')).toEqual({});

    btnWrapper.setProps({ isLoading: true });

    expect(btnWrapper.find('.spinner')).toBeDefined();
  });
});
