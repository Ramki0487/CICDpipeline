/*
 * File: BrandNames.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, April 6th 2021, 11:03:54 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brands } from '@Mocks/brandPLP/Brand.json';
import { shallow } from 'enzyme';
import BrandNames from '../BrandNames';

describe('<BrandNames />', () => {
  let brandListWrapper;
  const mockCallback = jest.fn();

  beforeEach(() => {
    brandListWrapper = shallow(
      <BrandNames brands={brands} onClick={mockCallback} LinkTag={() => {}} />
    );
  });

  it('Check BrandNames component is rendered', () => {
    const brandListItem = brandListWrapper.find('Col');
    expect(brandListItem.length > 0).toBeTruthy();
  });

  it('Check BrandNames component is not rendered', () => {
    brandListWrapper.setProps({ brands: {} });
    const brandListItem = brandListWrapper.find('Col');
    expect(brandListItem.length == 0).toBeTruthy();
  });
});
