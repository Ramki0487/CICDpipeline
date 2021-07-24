/*
 * File: AccordionHead.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 12th 2021, 9:32:58 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Thursday, 8th July 2021 5:52:54 pm
 * Modified By: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { node, oneOfType, shape, string, bool } from 'prop-types';
import { useContext } from 'react';
import Icon from '../../icon/Icon';
import { Col, Row } from '../../layout';
import accordionContext from '../AccordionContext';
import styles from './AccordionHead.module.scss';

/**
 * Accordion Head Component
 * @param {children} children - Child Component
 * @param {object} iconProps - Props values for Icon
 * @param {string} className - Class to override styles
 * @param {object} iconProps - Object to render the Icon Component
 * @param {string} collapseIcon - collapse icon of Icon Component
 * @param {string} defaultIcon - default icon of Icon Component
 * @param {bool} isCollapsible - state to disable the Icon and onClick func
 * @param {bool} withIcon - State to show or hide Icon
 * @returns {*}
 * @constructor
 */
const AccordionHead = ({
  children,
  iconProps,
  className,
  collapseIcon,
  defaultIcon,
  isCollapsible,
  withIcon,
}) => {
  const { handleClick, collapse } = useContext(accordionContext);
  return (
    <Row
      onClick={isCollapsible ? handleClick : null}
      className={`${styles.head} ${className}`}
      alignItems="center"
    >
      <Col>{children}</Col>
      {withIcon && <Icon {...iconProps} iconName={collapse ? collapseIcon : defaultIcon} />}
    </Row>
  );
};

AccordionHead.propTypes = {
  children: oneOfType([string, node]).isRequired,
  iconProps: shape({}),
  className: string,
  defaultIcon: string,
  collapseIcon: string,
  isCollapsible: bool,
  withIcon: bool,
};

AccordionHead.defaultProps = {
  iconProps: {},
  className: '',
  defaultIcon: 'caret_down',
  collapseIcon: 'caret_up',
  isCollapsible: true,
  withIcon: true,
};

export default AccordionHead;
