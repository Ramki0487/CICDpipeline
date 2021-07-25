/*
 * File: Typography.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, March 11th 2021, 5:46:18 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, node, object, oneOf, oneOfType, string } from 'prop-types';
import React from 'react';
import styles from './Typography.module.scss';
import { typographyTypes } from './TypographyTypes';

/**
 * Typography Component
 * @param {any} children - Child Text node within the Typography component
 * @param {string} variant - Type of element that the typography component will create - e.g. "h1", "h2" or "p"
 * @param {string} className - Css class that can be passed to overwrite default app rules
 * @param {string} id - id to place on typography component
 * @param {function} onClick - onClick callback
 * @param {string} theme - Typography Theme
 * @returns {*}
 */
const Typography = ({ children, variant, className, id, onClick, theme, forwardRef }) => {
  const classes = [styles[`tag_${variant}`], theme ? styles[`theme-${theme}`] : '', className]
    .join(' ')
    .trim();
  const elementProps = {
    className: classes,
    id: id,
    onClick: onClick,
    ...(forwardRef && { ref: forwardRef }),
  };

  return React.createElement(variant, elementProps, children);
};

Typography.propTypes = {
  children: oneOfType([string, node]),
  variant: oneOf(typographyTypes),
  className: string,
  id: string,
  onClick: func,
  theme: oneOf(['warning', 'error']),
  forwardRef: oneOfType([func, object]),
};

Typography.defaultProps = {
  variant: 'h1',
  className: '',
  id: null,
  onClick: null,
  children: '',
  theme: null,
  forwardRef: null,
};

export { typographyTypes };

export default Typography;
