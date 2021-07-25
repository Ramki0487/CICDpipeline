/*
 * File: Col.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday February 19th 2021 9:51:14 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Col from '../Col';

describe('<Col />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper).toBeDefined();
  });
});
