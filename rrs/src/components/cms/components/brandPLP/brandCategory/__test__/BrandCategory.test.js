/*
 * File: BrandCategory.test.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brandCategory } from '@Mocks/brandPLP/BrandCategory.json';
import { shallow } from 'enzyme';
import BrandCategory from '../BrandCategory';

describe('<BrandCategories/>', () => {
  test('should render brandCategory with slider', () => {
    const wrapper = shallow(<BrandCategory {...brandCategory} />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find('Slider').length).toBe(1);
  });
});
