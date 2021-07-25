/*
 * File: Slider.test.js
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 4:18:51 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Friday March 19th 2021 11:49:43 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Slider from '../Slider';

describe('<Slider />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Slider>Test</Slider>);
    expect(wrapper).toBeDefined();
  });
});
