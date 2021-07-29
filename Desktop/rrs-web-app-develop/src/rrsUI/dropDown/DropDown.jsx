/*
 * File: DropDown.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import watchOuterClicks from '@Hooks/WatchOuterClicks';
import { node, oneOfType, string } from 'prop-types';
import { useState } from 'react';
import styles from './DropDown.module.scss';
import DropDownContent from './dropDownContent/DropDownContent';
import DropDownContext from './DropDownContext';
import DropDownItem from './dropDownItem/DropDownItem';

const { Provider } = DropDownContext;

/**
 * DropDown Component
 * @param {string} className - Classname to override component styles
 * @returns {*}
 * @constructor
 */
const DropDown = ({ className, children }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleDropDown = () => setCollapse(!collapse);

  const handleOuterClick = () => {
    setCollapse(false);
  };

  const ref = watchOuterClicks(collapse, handleOuterClick);

  return (
    <Provider value={{ collapse }}>
      <div className={`${styles.dropdown} ${className}`} ref={ref} onClick={toggleDropDown}>
        {children}
      </div>
    </Provider>
  );
};

// Perform Prop Validation
DropDown.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
};

// Declare default props
DropDown.defaultProps = {
  className: '',
};

DropDown.Content = DropDownContent;
DropDown.Item = DropDownItem;

// Export the component
export default DropDown;
