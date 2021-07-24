/*
 * File: PanelHead.jsx
 * Project: webapp-rrs
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Accordion from '@RRS-UI/accordion/Accordion';
import { oneOfType, string, node, bool, object } from 'prop-types';
import styles from './PanelHead.module.scss';

/**
 * PanelHead Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {bool} isCollapsible - state to accordion for collapse
 * @param {bool} withIcon - State to show or hide Icon
 * @returns {*}
 * @constructor
 */
const PanelHead = ({ children, className, isCollapsible, withIcon }) => {
  const classes = [styles.head, className].join(' ').trim();
  return (
    <Accordion.head className={classes} isCollapsible={isCollapsible} withIcon={withIcon}>
      {children}
    </Accordion.head>
  );
};

PanelHead.propTypes = {
  children: oneOfType([object, node]).isRequired,
  className: string,
  isCollapsible: bool,
  withIcon: bool,
};

PanelHead.defaultProps = {
  className: '',
  isCollapsible: false,
  withIcon: false,
};

export default PanelHead;
