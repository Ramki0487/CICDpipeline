/*
 * File: FeaturedBrands.test.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { featureBrand } from '@Mocks/brandPLP/FeaturedBrands.json';
import { shallow } from 'enzyme';
import FeaturedBrands from '../FeaturedBrands';

describe('<FeaturedBrands/>', () => {
  test('should render FeaturedBrands with all props ', () => {
    const wrapper = shallow(<FeaturedBrands {...featureBrand} />);

    expect(wrapper.find('Typography').at(0).prop('children')).toEqual('SHOP BY BRAND');
    expect(wrapper.find('Typography').at(1).prop('children')).toEqual('FEATURED BRANDS');
    expect(wrapper.find('CmsCard').length).toBe(1);
  });
});
