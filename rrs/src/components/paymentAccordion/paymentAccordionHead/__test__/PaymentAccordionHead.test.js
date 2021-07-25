/*
 * File: PaymentAccordionHead.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 7:35:50 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:36:03 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import PaymentAccordionHead from '@Components/paymentAccordion/paymentAccordionHead/PaymentAccordionHead';

describe('<PaymentAccordionHead/>', () => {
  test('should render header with children', () => {
    const wrapper = shallow(<PaymentAccordionHead>Credit Card</PaymentAccordionHead>);

    expect(wrapper.children().text()).toBe('Credit Card');
  });
});
