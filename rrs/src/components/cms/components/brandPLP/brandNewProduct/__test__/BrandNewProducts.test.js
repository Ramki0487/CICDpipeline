/*
 * File: BrandNewProduct.test.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brandNewProduct } from '@Mocks/brandPLP/BrandNewProduct.json';
import { shallow } from 'enzyme';
import BrandNewProduct from '../BrandNewProduct';

describe('<BrandNewProducts/>', () => {
  test('should render brandNewProducts with all props', () => {
    const wrapper = shallow(<BrandNewProduct {...brandNewProduct} />);

    expect(wrapper.find('Typography').prop('children')).toEqual('NEW FROM BROOKS');
    expect(wrapper.find('Button').prop('children')).toEqual('Shop All New Arrivals');
  });
});
