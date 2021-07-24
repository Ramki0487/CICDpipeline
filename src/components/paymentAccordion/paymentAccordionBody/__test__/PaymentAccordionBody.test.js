/*
 * File: PaymentAccordionBody.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 7:21:06 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:22:43 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import PaymentAccordionBody from '@Components/paymentAccordion/paymentAccordionBody/PaymentAccordionBody';

describe('<PaymentAccordionBody/>', () => {
  test('should render body with children', () => {
    const wrapper = shallow(<PaymentAccordionBody>Visa</PaymentAccordionBody>);

    expect(wrapper.children().text()).toBe('Visa');
  });
});
