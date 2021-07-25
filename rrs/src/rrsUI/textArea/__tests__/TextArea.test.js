/*
 * File: TextArea.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, July 09th 2021, 09:05:05 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import TextArea from '../TextArea';

describe('<TextArea />', () => {
  const event = { target: { name: 'name', value: 'Test' } };
  const mockOnChangeCallBack = jest.fn();
  let textAreaWrapper;
  beforeAll(() => {
    textAreaWrapper = mount(<TextArea />);
  });

  it('Should trigger a callback on change', () => {
    textAreaWrapper.setProps({ onChange: mockOnChangeCallBack });
    textAreaWrapper.find('textarea').simulate('change', event);

    expect(mockOnChangeCallBack).toHaveBeenCalledWith('Test');
  });
});
