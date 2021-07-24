/*
 * File: SmallBrandCategories.test.js
 * Project: webapp-rrs
 * Created Date: Saturday, June 12th 2021, 4:22:08 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday June 14th 2021 7:41:57 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { smallBrandCategory } from '@Mocks/brandPLP/SmallBrandCategory.json';
import { shallow } from 'enzyme';
import SmallBrandCategories from '../SmallBrandCategories';

describe('<SmallBrandCategories/>', () => {
  test('should render SmallBrandCategories', () => {
    const wrapper = shallow(<SmallBrandCategories {...smallBrandCategory} />);

    expect(wrapper.find('Card').length).toBe(1);
  });
});
