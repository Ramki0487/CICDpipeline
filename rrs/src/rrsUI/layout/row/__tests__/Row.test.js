/*
 * File: Row.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday February 19th 2021 9:50:51 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Row from '../Row';

describe('<Row />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toBeDefined();
  });
});
