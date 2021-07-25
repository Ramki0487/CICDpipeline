/*
 * File: DropDownItem.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 12th 2021, 10:48:53 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 6th 2021 12:26:46 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, func, node, oneOfType, string } from 'prop-types';
import styles from './DropDownItem.module.scss';

/**
 * DropDownItem Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {function} handleOnSelect - Callback function to handle on selection
 * @returns {*}
 * @constructor
 */
const DropDownItem = ({ children, isActive, className, handleOnSelect }) => {
  const classes = [styles.dropdownItem, isActive ? styles.dropdownItemActive : '', className]
    .join(' ')
    .trim();

  return (
    <div className={classes} onClick={handleOnSelect}>
      {children}
    </div>
  );
};

DropDownItem.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  isActive: bool,
  handleOnSelect: func,
};

DropDownItem.defaultProps = {
  className: '',
  isActive: false,
  handleOnSelect: null,
};

export default DropDownItem;
