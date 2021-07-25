/*
 * File: PaymentAccordionBody.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 5:25:07 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:24:36 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { oneOfType, string, node } from 'prop-types';
import Accordion from '@RRS-UI/accordion/Accordion';

/**
 * PaymentAccordion Body Component
 * @param {children} children - Child Component
 * @param {string} className - custom styles
 * @returns {*}
 * @constructor
 */

const PaymentAccordionBody = ({ children, className }) => {
  return <Accordion.body className={className}>{children}</Accordion.body>;
};

PaymentAccordionBody.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
};

export default PaymentAccordionBody;
