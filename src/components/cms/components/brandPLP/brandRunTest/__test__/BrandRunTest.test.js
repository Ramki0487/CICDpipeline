/*
 * File: BrandRunTest.test.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brandRunTest } from '@Mocks/brandPLP/BrandRunTest.json';
import { shallow } from 'enzyme';
import BrandRunTest from '../BrandRunTest';

describe('<BrandRunTest/>', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<BrandRunTest {...brandRunTest} />);
  });

  test('should render brandRunTest with title props', () => {
    expect(wrapper.find('Typography').at(0).prop('children')).toEqual(
      'RECENT BRAND NAME RUN TESTS'
    );
  });

  test('should render brandRunTest with brandRunTests props', () => {
    expect(wrapper.find('.brandVideoContainer').length).toBe(1);

    expect(wrapper.find('Image').prop('src')).toBeDefined();

    expect(wrapper.find('Typography').at(1).prop('children')).toEqual('RUN TEST NAME LOREM IPSUM');
    expect(wrapper.find('Typography').at(2).prop('children')).toEqual(
      'Lorem ipsum dolor sit amet...'
    );
  });
});
