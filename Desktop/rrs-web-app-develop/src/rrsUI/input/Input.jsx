/*
 * File: Input.jsx
 * Project: webapp-rrs
 * Created Date: Monday, January 12th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 12th 2021 12:07:23 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, func, number, object, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
// import Icon from '../icon/Icon';
import { Row } from '../layout';
import { maskField } from './Input.helper';
import styles from './Input.module.scss';

/**
 * Input Component
 * @param {string} label - Label
 * @param {string} name - Input tag name
 * @param {string} id - Input tag id
 * @param {string} type - Type of input (Text, number, email, password)
 * @param {string} className - Class name to override styles of input
 * @param {string} placeholder - Input placeholder text
 * @param {number} minLength - Minimum length for input
 * @param {number} maxLength - Maximum length for input
 * @param {function} onBlur - On blur callback after the user typed
 * @param {function} onChange - On change callback while user is typing
 * @param {function} onKeyUp - onkeyup callback function
 * @param {boolean} disabled - Input disabled state
 * @param {string} value - Value of input
 * @param {object} forwardRef - React ref prop
 * @returns {*}
 * @constructor
 */
const Input = (props) => {
  const {
    label,
    name,
    id,
    type,
    className,
    placeholder,
    minLength,
    maxLength,
    onBlur,
    onChange,
    onKeyUp,
    disabled,
    value,
    autoComplete,
    forwardRef,
  } = props;

  const [input, setInput] = useState({ active: false, value, type });
  const { active } = input;

  const labelClass = [styles.textboxLabel, input.value ? styles.textboxLabelActive : '']
    .join(' ')
    .trim();
  const inputClass = [
    styles.textboxInput,
    input.error && styles.error,
    ((input.value && label) || (!input.value && active && label)) && styles.textboxInputActive,
  ]
    .join(' ')
    .trim();

  const handleBlur = ({ target }) => {
    onBlur && onBlur(target);
    // setInput({ ...input, error: validateField(target), touched: true });
  };

  const handleChange = ({ target }) => {
    const inputValue = target.value ?? '';

    // setInput({ ...input, value: inputValue, error: input.touched && validateField(target) });
    setInput({ ...input, value: maskField(target) });
    onChange && onChange(inputValue);
  };

  useEffect(() => {
    setInput({ ...input, value });
  }, [value]);

  return (
    <Row justifyContent="flex-end" className={`${styles.textbox} ${className}`}>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClass}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete={autoComplete}
        onBlur={handleBlur}
        onChange={handleChange}
        {...(onKeyUp && { onKeyUp: onKeyUp })}
        value={input?.value}
        {...(forwardRef && { ref: forwardRef })}
      />
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
    </Row>
  );
};

// Perform Prop Validation
Input.propTypes = {
  label: string,
  name: string,
  id: string,
  type: string.isRequired,
  className: string,
  placeholder: string,
  disabled: bool,
  minLength: number,
  maxLength: number,
  onBlur: func,
  onChange: func,
  onKeyUp: func,
  value: oneOfType([string, number]),
  autoComplete: string,
  forwardRef: oneOfType([func, object]),
};

// Declare default props
Input.defaultProps = {
  label: '',
  name: null,
  id: null,
  className: '',
  placeholder: '',
  disabled: false,
  minLength: 0,
  maxLength: 100,
  onBlur: null,
  onChange: null,
  onKeyUp: null,
  value: '',
  type: 'text',
  autoComplete: 'off',
  forwardRef: null,
};

// Export the component
export default Input;
