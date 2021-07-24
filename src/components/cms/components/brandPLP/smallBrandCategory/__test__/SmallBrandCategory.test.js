/*
 * File: SmallBrandCategory.test.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { smallBrandCategory } from '@Mocks/brandPLP/SmallBrandCategory.json';
import { shallow } from 'enzyme';
import SmallBrandCategory from '../SmallBrandCategory';

describe('<SmallBrandCategory/>', () => {
  test('should render smallBrandCategory', () => {
    const wrapper = shallow(<SmallBrandCategory {...smallBrandCategory} />);

    expect(wrapper.find('Card').length).toBe(1);
  });
});
