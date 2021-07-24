/*
 * File: Payment.test.js
 * Project: webapp-rrs
 * Created Date: Monday, 19th July 2021 10:04:50 pm
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Monday, 19th July 2021 11:14:02 pm
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import Payment from '@Components/checkout/payment/Payment';
import { state } from '@Mocks/checkout/CheckoutMock.json';

describe('<Payment />', () => {
  test('should render the payment method items', () => {
    const wrapper = mount(
      <Payment paymentOptions={state?.paymentOptions} activePaymentId="p98766790" />
    );

    expect(wrapper.find('PaymentAccordionItem')).toHaveLength(3);
  });

  test('should trigger callback when payment method accordion is clicked', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <Payment
        paymentOptions={state?.paymentOptions}
        activePaymentId="p98766789"
        callBackOnSelect={mockCallBack}
      />
    );
    wrapper.find('PaymentAccordionHead').first().simulate('click');
    waitForComponentToPaint(wrapper);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
