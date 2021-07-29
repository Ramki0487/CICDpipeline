/*
 * File: Accordion.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 12th 2021, 9:26:27 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Tuesday May 11th 2021 3:53:45 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, node, oneOfType, string, func } from 'prop-types';
import { useEffect, useState } from 'react';
import { Row } from '../layout';
import styles from './Accordion.module.scss';
import AccordionBody from './accordionBody/AccordionBody';
import AccordionContext from './AccordionContext';
import AccordionHead from './accordionHead/AccordionHead';

const { Provider } = AccordionContext;

/**
 * Accordion Component
 * @param {string} className - Class to override styles
 * @param {boolean} collapsed - State of the collapsible panel
 * @param {children} children - Child Component
 * @param {function} callbackOnOpen - callback function on open
 * @returns {*}
 * @constructor
 */

const Accordion = ({ children, collapsed, className, callbackOnOpen }) => {
  const [collapse, setCollapse] = useState(collapsed);
  const handleClick = () => {
    setCollapse(!collapse);
    callbackOnOpen && callbackOnOpen();
  };

  useEffect(() => {
    setCollapse(collapsed);
  }, [collapsed]);

  return (
    <Provider value={{ collapse, handleClick }}>
      <Row className={`${styles.accordion} ${className}`}>{children}</Row>
    </Provider>
  );
};

Accordion.propTypes = {
  children: oneOfType([string, node]).isRequired,
  collapsed: bool,
  className: string,
  callbackOnOpen: func,
};

Accordion.defaultProps = {
  collapsed: false,
  className: '',
  callbackOnOpen: null,
};

Accordion.head = AccordionHead;
Accordion.body = AccordionBody;

export default Accordion;
