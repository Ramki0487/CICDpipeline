/*
 * File: ShippingAddress.test.js
 * Project: webapp-rrs
 * Created Date: Monday, 19th July 2021 10:42:33 pm
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Monday, 19th July 2021 11:27:51 pm
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import ShippingAddress from '@Components/checkout/shippingAddress/ShippingAddress';
import { state } from '@Mocks/checkout/CheckoutMock.json';

describe('<ShippingAddress />', () => {
  test('should render the ShippingAddress method items', () => {
    const wrapper = mount(<ShippingAddress addresses={state?.addresses} />);

    expect(wrapper.find('CardPicker')).toHaveLength(2);
    expect(wrapper.find('CardPicker').first().children().text()).toBe(
      'Mstark Lee10401 NE 8th St Ste 500.Bellevue, CA 98004Edit'
    );
  });
});
