/*
 * File: BackToTop.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, June 17th 2021, 11:05:05 am
 * Author: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import BackToTop from '../BackToTop';

describe('<BackToTop />', () => {
  it('should hide BackToTop button if the scroll height is <=250', () => {
    const wrapper = shallow(<BackToTop scrollTop={200} />);

    expect(wrapper.find('button').length).toEqual(0);
  });

  it('should show BackToTop button if the scroll height > 250', () => {
    const wrapper = shallow(<BackToTop scrollTop={251} />);

    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should scroll to top when on click', () => {
    const scrollToMock = jest.fn();
    global.scrollTo = scrollToMock;

    const wrapper = shallow(<BackToTop scrollTop={500} />);
    wrapper.find('button').simulate('click');

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    scrollToMock.mockRestore();
  });
});
