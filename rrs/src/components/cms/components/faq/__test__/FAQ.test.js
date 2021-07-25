/*
 * File: FAQ.test.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { frequentAnswer } from '@Mocks/faq/FAQ.json';
import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import FAQ from '../FAQ';

describe('<FAQ />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<FAQ frequent={frequentAnswer} />);
    waitForComponentToPaint(wrapper);
  });

  test('should render FAQ Component', () => {
    expect(wrapper).toBeDefined();
  });

  test('should able to access accordion in FAQ Component', () => {
    expect(wrapper.find('Row.bodyShow').at(0).length).toBe(0);

    wrapper.find('div.head').at(0).simulate('click');

    expect(wrapper.find('Row.bodyShow').at(0).length).toBe(1);
  });
});
