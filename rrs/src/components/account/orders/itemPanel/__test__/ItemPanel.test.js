/*
 * File: ItemPanel.test.js
 * Project: webapp-rrs
 * Author: Prakash Rah <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import ItemPanel from '@Components/account/orders/itemPanel/ItemPanel';
import { shallow } from 'enzyme';
import orderDetail from '@Mocks/order/Order.json';
import { expect } from '@jest/globals';

describe('<ItemPanel/>', () => {
  const cases = [
    [
      'ORDER # 1234567890',
      'Placed on April 18, 2021',
      'https://roadrunnersports.scene7.com/is/image/roadrunnersports/36607-550?wid=122&hei=122',
    ],
  ];

  test.each(cases)(
    'Given OrderId: %p, Orderdate : %p, productUrl : %p,',
    async (Id, date, productUrl) => {
      const wrapper = shallow(<ItemPanel items={orderDetail?.Orders?.orderHistory?.[0]} />);

      expect(wrapper.find({ variant: 'h3' }).children().text()).toEqual(Id);
      expect(wrapper.find({ variant: 'p' }).children().text()).toEqual(date);
      expect(wrapper.find('Image').at(0).prop('src')).toBe(productUrl);
    }
  );
});
