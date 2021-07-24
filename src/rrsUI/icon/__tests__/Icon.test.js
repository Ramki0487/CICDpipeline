/*
 * File: Icon.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday February 22nd 2021 12:30:38 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Icon iconName="test" />);
    expect(wrapper).toBeDefined();
  });
  it('should render the component', () => {
    const wrapper = shallow(<Icon iconName="facebook" />);
    expect(wrapper).toBeDefined();
  });
});
