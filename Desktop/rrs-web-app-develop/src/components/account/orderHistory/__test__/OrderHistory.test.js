/*
 * File: OrderHistory.test.js
 * Project: webapp-rrs
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import OrderHistory from '@Components/account/orderHistory/OrderHistory';
import mockAccount from '@Mocks/account/Account.json';
import { shallow } from 'enzyme';

describe('<OrderHistory', () => {
  test('should render component with history title and button ', () => {
    const wrapper = shallow(<OrderHistory historyDetails={mockAccount} />);

    expect(wrapper.find('.historyTitle').length).toBe(1);
    expect(wrapper.find('.historyButton').length).toBe(1);
  });

  const cases = [['ORDER # 1234567890', 'Placed on April 18, 2021', 'View Order Details']];

  test.each(cases)(
    'Given orderId: %p, orderDate : %p, orderLink : %p,',
    async (orderId, orderDate, orderLink) => {
      const wrapper = shallow(<OrderHistory historyDetails={mockAccount} isDesktop={true} />);

      expect(
        await wrapper.find('.historyContainer').find({ variant: 'h3' }).at(0).children().text()
      ).toEqual(orderId);
      expect(
        await wrapper.find('.historyContainer').find({ variant: 'p' }).at(0).children().text()
      ).toEqual(orderDate);
      expect(
        await wrapper.find('.historyContainer').find({ variant: 'p' }).at(1).children().text()
      ).toEqual(orderLink);
    }
  );
});
