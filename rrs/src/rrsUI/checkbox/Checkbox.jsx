/*
 * File: Checkbox.jsx
 * Project: webapp-rrs
 * Created Date: Monday, January 11th 2021, 11:17:19 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { any, bool, func, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Row } from '../layout';
import styles from './Checkbox.module.scss';

/**
 * Checkbox Component
 * @param {string} className - Class to override styles
 * @param {string} id - Specified Id for Checkbox
 * @param {boolean} isChecked - State of the Checkbox
 * @param {boolean} disabled - Disables user input
 * @param {function} handleOnChange - On click callback function
 * @param {string} size - Size of the Checkbox
 * @param {string} backgroundColor - Background color for color element
 * @param {string} label - Text displayed
 * @param {string} type - Type/Style of Checkbox
 * @param {string} value - Checkbox value
 * @param {function} handleOnMouseOver - Callback function on mouse over
 * @param {boolean} chooseOneTime - Blocks the behaviour to uncheck once it's checked
 * @returns {*}
 * @constructor
 */
const Checkbox = ({
  className,
  id,
  isChecked,
  disabled,
  handleOnChange,
  backgroundColor,
  label,
  type,
  value,
  handleOnMouseOver,
  chooseOneTime,
}) => {
  const [checked, setChecked] = useState(false);

  const wrapperClasses = [
    styles.checkbox,
    type ? styles[`checkbox-${type}`] : '',
    checked ? styles.active : '',
    className,
  ]
    .join(' ')
    .trim();

  const handleChange = () => {
    if (chooseOneTime) {
      // trigger the callback only once
      !checked && handleOnChange && handleOnChange(value);
    } else {
      setChecked(!checked);
      handleOnChange && handleOnChange(!checked ? value : '');
    }
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <Row className={wrapperClasses} onMouseOver={handleOnMouseOver}>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          className={styles.checkboxInput}
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
          value={value}
        />
        {backgroundColor && type !== 'two' && (
          <span style={{ backgroundColor }} className={styles.checkboxColorOption} />
        )}
        <span className={styles.checkboxLabelText}>{label}</span>
      </label>
    </Row>
  );
};

// Perform Prop Validation
Checkbox.propTypes = {
  className: string,
  id: string,
  isChecked: bool,
  disabled: bool,
  handleOnChange: func,
  backgroundColor: string,
  label: string,
  type: string,
  value: any,
  handleOnMouseOver: func,
  chooseOneTime: bool,
};

// Declare default props
Checkbox.defaultProps = {
  className: '',
  id: null,
  isChecked: false,
  disabled: false,
  handleOnChange: null,
  backgroundColor: '',
  label: '',
  type: null,
  value: '',
  handleOnMouseOver: null,
  chooseOneTime: false,
};

// Export the component
export default Checkbox;
