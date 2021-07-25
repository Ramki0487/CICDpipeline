/*
 * Filename: RadioButton.jsx
 * Path: /rrs-web-app
 * Created Date: Wednesday, June 2nd 2021, 6:31:12 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologtinc.com>
 * Copyright (c) 2021 Your Company
 */

import { bool, func, string } from 'prop-types';
import styles from './RadioButton.module.scss';

/**
 * RadioButton Component
 * @param {string} className - Class to override styles
 * @param {boolean} isSelected - selected value for the radio button
 * @param {function} handleOnChange - callback function on change
 * @param {string} id - unique value to identify item
 * @param {string} label - radio button label
 * @param {string} value - radio button value
 * @returns {*}
 * @constructor
 */

const RadioButton = ({ id, handleOnChange, value, isSelected, className, label }) => {
  const classes = [styles.radioButton, className].join(' ').trim();

  const handleChange = () => {
    handleOnChange && handleOnChange(value);
  };

  return (
    <div className={classes}>
      <label htmlFor={id}>
        <input
          className={styles.radioButtonInput}
          id={id}
          value={value}
          type="radio"
          onChange={handleChange}
          checked={isSelected}
        />
        <span className={styles.radioButtonLabel}>{label}</span>
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  className: string,
  id: string,
  handleOnChange: func,
  value: string,
  isSelected: bool,
  label: string,
};
RadioButton.defaultProps = {
  className: '',
  handleOnChange: null,
  value: '',
  isSelected: false,
  label: '',
  id: null,
};
export default RadioButton;
