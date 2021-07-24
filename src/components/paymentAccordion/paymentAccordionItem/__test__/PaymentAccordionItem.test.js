/*
 * File: PaymentAccordionItem.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 7:30:29 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:36:42 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import PaymentAccordionItem from '@Components/paymentAccordion/paymentAccordionItem/PaymentAccordionItem';
import PaymentAccordion from '@Components/paymentAccordion/PaymentAccordion';

describe('<PaymentAccordionItem/>', () => {
  test('should render with childern', () => {
    const wrapper = shallow(
      <PaymentAccordionItem>
        <PaymentAccordion.item.head>credit card</PaymentAccordion.item.head>
        <PaymentAccordion.item.body>Visa</PaymentAccordion.item.body>
      </PaymentAccordionItem>
    );

    expect(wrapper.find('PaymentAccordionHead').children().text()).toBe('credit card');
    expect(wrapper.find('PaymentAccordionBody').children().text()).toBe('Visa');
  });
});
