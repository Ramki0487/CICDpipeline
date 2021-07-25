/*
 * File: Testing.js
 * Project: webapp-rrs
 * Created Date: Friday, June 25th 2021, 6:43:54 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday June 27th 2021 10:15:09 pm
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { act } from 'react-dom/test-utils';
import { useSelector } from 'react-redux';

/**
 * waitForComponentToPaint
 * @param {children} wrapper - object that contains a mounted component
 * @returns {*}
 * @constructor
 */

export const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

/**
 * mockUseSelector
 * @param {children} mockObject - object that contains mocked state value
 * @returns {*}
 * @constructor
 */
export const mockUseSelector = (mockObject) => {
  useSelector.mockImplementation((state) => state(mockObject));
};
