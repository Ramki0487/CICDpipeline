/*
 * File: PaymentAccordion.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 5:25:07 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:22:20 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { string, func, oneOfType, node, number } from 'prop-types';
import { useEffect, useState } from 'react';
import PaymentAccordionHead from './paymentAccordionHead/PaymentAccordionHead';
import PaymentAccordionBody from './paymentAccordionBody/PaymentAccordionBody';
import PaymentAccordionItem from './paymentAccordionItem/PaymentAccordionItem';
import paymentAccordionContext from './PaymentAccordionContext';

const { Provider } = paymentAccordionContext;

/**
 * PaymentAccordion Component
 * @param {number} selectedAccordion - Initial selected pay mode ID
 * @param {children} children - Child Component
 * @returns {*}
 * @constructor
 */

const PaymentAccordion = ({ selectedAccordion, children, callBackOnSelect }) => {
  const [activeAccId, setActiveAccId] = useState();
  const handleClick = (id) => {
    setActiveAccId(id);
    callBackOnSelect && callBackOnSelect(id);
  };

  useEffect(() => {
    setActiveAccId(selectedAccordion);
  }, [selectedAccordion]);

  return <Provider value={{ activeAccId, handleClick }}>{children} </Provider>;
};

PaymentAccordion.propTypes = {
  children: oneOfType([string, node]).isRequired,
  selectedAccordion: number,
  callBackOnSelect: func,
};

PaymentAccordion.defaultProps = {
  selectedAccordion: 1,
  callBackOnSelect: null,
};

PaymentAccordion.item = PaymentAccordionItem;
PaymentAccordion.item.head = PaymentAccordionHead;
PaymentAccordion.item.body = PaymentAccordionBody;

export default PaymentAccordion;
