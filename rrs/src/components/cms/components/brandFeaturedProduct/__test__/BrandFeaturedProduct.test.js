/*
 * File: BrandFeaturedProduct.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, April 29th 2021, 8:10:05 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brandFeaturedProduct } from '@Mocks/brandPLP/BrandFeaturedProduct.json';
import { shallow } from 'enzyme';
import BrandFeaturedProduct from '../BrandFeaturedProduct';

describe('<BrandFeaturedProduct/>', () => {
  test('should render brandFeaturedProduct with all props', () => {
    const wrapper = shallow(<BrandFeaturedProduct {...brandFeaturedProduct} />);

    expect(wrapper.find('Typography').at(0).prop('children')).toEqual('Featured Product');
    expect(wrapper.find('Typography').at(2).prop('children')).toEqual(
      'Short description Or intro lorem ipsum...'
    );
    //expect(wrapper.find('Button').prop('children')).toEqual('Shop Now');
    expect(wrapper.find('Card').length).toBe(1);
  });
});
