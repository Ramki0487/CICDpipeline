/*
 * File: PaymentAccordionHead.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 5:25:07 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:25:14 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { oneOfType, string, node } from 'prop-types';
import { useContext } from 'react';
import Accordion from '@RRS-UI/accordion/Accordion';
import PaymentAccordionContext from '../PaymentAccordionContext';
import styles from './PaymentAccordionHead.module.scss';

/**
 * PaymentAccordion Head Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {string} id - unique key to represent each Accodrion
 * @returns {*}
 * @constructor
 */

const PaymentAccordionHead = ({ children, className, id }) => {
  const { activeAccId } = useContext(PaymentAccordionContext);

  const classes = [styles.head, className].join(' ').trim();

  return (
    <Accordion.head className={classes} isCollapsible={id !== activeAccId} withIcon={false}>
      {children}
    </Accordion.head>
  );
};

PaymentAccordionHead.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  id: string.isRequired,
};

PaymentAccordionHead.defaultProps = {
  className: '',
};

export default PaymentAccordionHead;
