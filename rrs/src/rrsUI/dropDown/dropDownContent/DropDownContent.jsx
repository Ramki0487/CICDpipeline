/*
 * File: DropDownContent.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 12th 2021, 10:48:53 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday June 14th 2021 7:24:53 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { node, oneOfType, string } from 'prop-types';
import { useContext } from 'react';
import accordionContext from '../DropDownContext';
import styles from './DropDownContent.module.scss';

/**
 * DropDownContent Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @returns {*}
 * @constructor
 */
const DropDownContent = ({ children, className }) => {
  const { collapse } = useContext(accordionContext);
  const classes = [styles.dropdownContent, collapse ? styles.dropdownContentShow : '', className]
    .join(' ')
    .trim();

  return <div className={classes}>{children}</div>;
};

DropDownContent.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
};

DropDownContent.defaultProps = {
  className: '',
};

export default DropDownContent;
