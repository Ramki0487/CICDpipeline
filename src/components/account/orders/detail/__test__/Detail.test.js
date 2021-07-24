/*
 * File: Detail.test.js
 * Project: webapp-rrs
 * Author: Prakash Rjh <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Detail from '@Components/account/orders/detail/Detail';
import { mockUseSelector } from '@Utils/Testing';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

/** mocking useSelector */
mockUseSelector({ device: { isDesktop: true } });

describe('<Details', () => {
  test('should render order detail with order and summary section ', () => {
    const wrapper = shallow(<Detail />);

    expect(wrapper.find('.detailOrder').length).toBe(1);
    expect(wrapper.find('.detailOrdersummary').length).toBe(1);
  });
});
