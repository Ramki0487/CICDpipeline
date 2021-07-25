/*
 * File: EmptyCart.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, 20th July 2021 12:02:30 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday, 20th July 2021 12:08:59 am
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import EmptyCart from '@Components/cart/emptyCart/EmptyCart';

describe('<EmptyCart/>', () => {
  test('should render the EmptyCart with cart empty text', () => {
    const wrapper = shallow(<EmptyCart />);

    expect(wrapper.find('Typography').first().children().text()).toBe(
      'Your shopping cart is empty'
    );
    expect(wrapper.find('Button').first().children().text()).toBe('CONTINUE SHOPPING');
  });
});
