/*
 * File: ToggleButton.js
 * Project: webapp-rrs
 * Created Date: Monday, January 12th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, func, string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './ToggleButton.module.scss';

/**
 * ToggleButton Component
 * @param {string} className - Class to override styles
 * @param {string} id - Toggle id
 * @param {boolean} isEnabled - Flag to decide Toggle state
 * @param {function} onClick - On click submit callback
 * @param {string} toggleAfter - Toggle text after change
 * @param {string} toggleBefore - Toggle text before change
 * @returns {*}
 * @constructor
 */

const ToggleButton = ({ className, id, isEnabled, onClick, toggleAfter, toggleBefore }) => {
  const [isActive, setIsActive] = useState(isEnabled);
  const activeClass = styles[`${isActive ? 'active' : 'inactive'}`];
  const toggleTextClass = [styles.toggleText, activeClass].join(' ').trim();
  const text = isActive ? toggleAfter : toggleBefore;

  const handleClick = () => {
    setIsActive(!isActive);
    onClick && onClick(!isActive);
  };

  useEffect(() => {
    setIsActive(isEnabled);
  }, [isEnabled]);

  return (
    <div className={className}>
      <label className={`${styles.toggleSwitch} ${activeClass}`} htmlFor={id} onClick={handleClick}>
        <span className={styles.toggleButton} />
        <span className={toggleTextClass}>{text}</span>
      </label>
    </div>
  );
};

// Perform Prop Validation
ToggleButton.propTypes = {
  className: string,
  id: string,
  toggleAfter: string,
  toggleBefore: string,
  isEnabled: bool,
  onClick: func.isRequired,
};

// Declare default props
ToggleButton.defaultProps = {
  className: '',
  id: null,
  toggleAfter: 'ON',
  toggleBefore: 'OFF',
  isEnabled: false,
};

// export the component
export default ToggleButton;
