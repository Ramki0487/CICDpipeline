/*
 * File: AddToCartModal.test.js
 * Project: webapp-rrs
 * Created Date: Wednesday, 7th July 2021 8:58:32 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { state } from '@Mocks/cart/AddMembership.json';
import { mount, shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import AddToCartModal from '../AddToCartModal';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
useDispatch.mockImplementation(() => jest.fn());

describe('<AddToCartModal/>', () => {
  test('Render AddToCartModal', () => {
    const wrapper = mount(
      <AddToCartModal isMobile={true} isVipMembershipadded={true} cartData={state} />
    );

    expect(wrapper).toBeDefined();
  });

  test('should not render VIP membership line item if user is already VIP', () => {
    const wrapper = shallow(
      <AddToCartModal isVipMembershipadded={false} isVipUser={true} cartData={state} />
    );

    expect(wrapper.find('.miniCartBodySummaryVipMembership').length).toBe(0);
  });
});
