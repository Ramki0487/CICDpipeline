/*
 * File: PaymentAccordionItem.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 5:25:07 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 7:25:32 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { oneOfType, string, number, node } from 'prop-types';
import { useContext } from 'react';
import Accordion from '@RRS-UI/accordion/Accordion';
import PaymentAccordionContext from '../PaymentAccordionContext';
import styles from './PaymentAccordionItem.module.scss';

/**
 * PaymentAccordionItem Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {string} id - unique key to represent each Accodrion
 * @returns {*}
 * @constructor
 */

const PaymentAccordionItem = ({ className, children, id }) => {
  const { handleClick, activeAccId } = useContext(PaymentAccordionContext);
  const classes = [styles.item, className].join(' ').trim();

  return (
    <Accordion
      className={classes}
      collapsed={id === activeAccId}
      callbackOnOpen={() => handleClick(id)}
    >
      {children}
    </Accordion>
  );
};

PaymentAccordionItem.propTypes = {
  children: oneOfType([string, node]).isRequired,
  id: number,
  className: string,
};

PaymentAccordionItem.defaultProps = {
  id: null,
  className: '',
};

export default PaymentAccordionItem;
