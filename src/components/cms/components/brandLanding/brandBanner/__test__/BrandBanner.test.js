/*
 * File: BrandBanner.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, April 29th 2021, 8:10:05 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brandPLPHeader } from '@Mocks/brandPLP/BrandPLPHeader.json';
import { shallow } from 'enzyme';
import BrandBanner from '../BrandBanner';

describe('<BrandBanner />', () => {
  let brandplpWrapper;
  beforeAll(() => {
    brandplpWrapper = shallow(<BrandBanner {...brandPLPHeader} />);
  });

  it('Should be defined', () => {
    expect(brandplpWrapper).toBeDefined();
  });

  // it('Should have brandLogo', () => {
  //   expect(brandplpWrapper.find('.brandLogoImg').length > 0).toBeTruthy();
  // });

  // it('Should have brandTitle, brandCaption & brandDescription', () => {
  //   expect(brandplpWrapper.find('.brand').prop('children')).toContain('ALTRA');
  //   expect(brandplpWrapper.find('.brandCaption').length > 0).toBe(true);
  //   expect(brandplpWrapper.find('.brandDescription').length > 0).toBe(true);
  // });
});
