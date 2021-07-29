/*
 * File: Typography.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday March 11th 2021 6:30:16 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Typography from '../Typography';

describe('<Typography />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Typography>Test</Typography>);
    expect(wrapper).toBeDefined();
  });
});
