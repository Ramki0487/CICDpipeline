/*
 * File: Password.jsx
 * Project: webapp-rrs
 * Created Date: Monday, January 12th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, oneOf, shape, string } from 'prop-types';
import { useState } from 'react';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import { Row } from '../layout';
import styles from './Password.module.scss';

/**
 * Password Component
 * @param {object} inputProps - Props for input component
 * @param {object} iconProps - Props for icon component
 * @param {string} flexDirection - Icon location (row or row-reverse)
 * @param {string} className - Custom classname to control styles
 * @param {boolean} withPreview - Flag to show/hide preview icon
 * @returns {*}
 * @constructor
 */
const Password = ({ iconProps, flexDirection, className, inputProps, withPreview }) => {
  const [iputType, setIputType] = useState('password');

  const contClasses = [
    styles.Password,
    styles['password-icon'],
    styles[`password-icon-${flexDirection}`],
    className,
  ]
    .join(' ')
    .trim();
  const inputClass = [styles.inputGroupBox, inputProps.className ?? ''].join(' ').trim();

  const handleIconClick = () => {
    iconProps?.onClick && iconProps.onClick();
    if (withPreview) {
      setIputType(iputType === 'password' ? 'text' : 'password');
    }
  };

  return (
    <Row
      flexDirection={flexDirection}
      alignItems="flex-start"
      flexWrap="nowrap"
      className={contClasses}
    >
      <Input {...inputProps} type={iputType} className={inputClass} />
      {withPreview && <Icon iconName="eye" {...iconProps} onClick={handleIconClick} />}
    </Row>
  );
};

// Perform Prop Validation
Password.propTypes = {
  flexDirection: oneOf(['row', 'row-reverse']),
  withPreview: bool,
  iconProps: shape({}),
  inputProps: shape({}),
  className: string,
};

// Declare default props
Password.defaultProps = {
  flexDirection: 'row',
  withPreview: true,
  iconProps: null,
  inputProps: {},
  className: '',
};

// Export the component
export default Password;
