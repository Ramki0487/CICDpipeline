/*
 * File: jest.setup.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:34:47 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday January 5th 2021 11:34:47 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
