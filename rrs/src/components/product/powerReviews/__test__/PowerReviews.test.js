/*
 * File: PowerReviews.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, June 10th 2021, 10:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import PowerReviews from '../PowerReviews';

describe('<PowerReviews />', () => {
  let powerReviewsWrapper;
  beforeAll(() => {
    powerReviewsWrapper = mount(<PowerReviews pageId="36606" />);
  });

  it('should render the powerreviews component', () => {
    const powerReviewDisplay = powerReviewsWrapper.find('#reviewDisplayId');

    expect(powerReviewDisplay.length).toBe(1);
  });

  it('should not render the powerreviews component', () => {
    powerReviewsWrapper.setProps({ pageId: '' });
    const powerReviewDisplay = powerReviewsWrapper.find('#reviewDisplayId');

    expect(powerReviewDisplay.length).toBe(0);
  });
});
