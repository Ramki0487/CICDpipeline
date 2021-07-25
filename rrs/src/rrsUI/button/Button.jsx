/*
 * File: Button.js
 * Project: webapp-rrs
 * Created Date: Monday, January 11th 2021, 11:17:19 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 5:47:37 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, func, node, oneOf, oneOfType, string } from 'prop-types';
import styles from './Button.module.scss';

/**
 * Button Component
 * @param {string} id - Id tag for button
 * @param {boolean} isProcessing - Show the spinner when the promise is being resolved
 * @param {string} processingLabel - Alternaive Label to show on loading/processing
 * @param {string} theme - Theme of button, options - ("rr-navy", "rr-skyblue", "rr-iceblue", "rr-green", "white")
 * @param {string} className - Classname to override button styles
 * @param {string} size - Button size
 * @param {boolean} disabled - Disabled state for Button (true or false)
 * @param {funtion} onClick - Handles click callback
 * @param {node} children - Text / Child element
 * @returns {*}
 * @constructor
 */
const Button = ({
  id,
  isProcessing,
  theme,
  className,
  size,
  disabled,
  onClick,
  children,
  action,
  processingLabel,
  ...rest
}) => {
  const classes = [styles.btn, styles[`theme-${theme}`], styles[`size-${size}`], className]
    .join(' ')
    .trim();

  return (
    <button
      type={action}
      id={id}
      className={classes}
      disabled={isProcessing || disabled}
      onClick={onClick}
      {...rest}
    >
      {isProcessing && <span className={styles.btnSpinner} />}
      {isProcessing ? processingLabel : children}
    </button>
  );
};

// Perform Prop Validation
Button.propTypes = {
  children: oneOfType([string, node]),
  id: string,
  isProcessing: bool,
  className: string,
  disabled: bool,
  theme: oneOf(['rr-navy', 'rr-skyblue', 'rr-iceblue', 'rr-green', 'white']),
  size: string,
  action: oneOf(['button', 'submit', 'reset']),
  onClick: func,
  processingLabel: string,
};

// Declare default props
Button.defaultProps = {
  id: null,
  isProcessing: false,
  theme: 'rr-navy',
  className: '',
  size: 'small',
  disabled: false,
  action: 'button',
  onClick: null,
  processingLabel: 'Processing...',
};

// Export the component
export default Button;
