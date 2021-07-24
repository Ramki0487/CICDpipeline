/*
 * File: Account.test.js
 * Project: webapp-rrs
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Account from '@Components/account/Account';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const object = { device: { isDesktop: false } };
useSelector.mockImplementation((state) => state(object));

describe('<Account/>', () => {
  test('should render Account Component with rewardBenefits, OrderHistory & AccountDetails', () => {
    const wrapper = shallow(<Account />);

    expect(wrapper.find('RewardBenefits')).toBeTruthy();

    expect(wrapper.find('OrderHistory')).toBeTruthy();

    expect(wrapper.find('AccountDetails')).toBeTruthy();
  });
});
