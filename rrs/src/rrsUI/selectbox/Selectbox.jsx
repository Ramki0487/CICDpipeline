/*
 * File: Selectbox.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import watchOuterClicks from '@Hooks/WatchOuterClicks';
import { array, func, string } from 'prop-types';
import { useEffect, useState } from 'react';
import Icon from '../icon/Icon';
import { Col, Row } from '../layout';
import styles from './Selectbox.module.scss';

/**
 * Selectbox Component
 * @param {string} id - Id tag for Selectbox
 * @param {string} name - Name for Selectbox tag
 * @param {string} className - Classname to override component styles
 * @param {string} defaultLabel - Default text to be placed on the Selectbox
 * @param {function} handleOnChange - On change callback
 * @param {array} options - List of items to be displayed
 * @returns {*}
 * @constructor
 */
const Selectbox = ({ id, name, defaultLabel, handleOnChange, options, className }) => {
  const [dropDownList, setSropDownList] = useState();
  const [collapse, setCollapse] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState();

  const classes = [styles.selectbox, styles[`selectbox-${collapse ? 'show' : 'hide'}`], className]
    .join(' ')
    .trim();

  const handleClick = (index) => {
    // reset previously selected option
    dropDownList.forEach((item) => (item.isSelected = false));

    // make clicked option active
    dropDownList[index].isSelected = true;

    setSelectedLabel(dropDownList[index].label);
    handleOnChange && handleOnChange(dropDownList[index].value);
  };

  useEffect(() => {
    setSropDownList(options);
  }, [options, setSropDownList]);

  const handleOuterClick = () => setCollapse(false);

  const ref = watchOuterClicks(collapse, handleOuterClick);

  if (!dropDownList) return null;

  const selectedItem =
    options.filter((item) => item.isSelected === true)[0]?.label ?? selectedLabel;

  return (
    <div className={classes} name={name} id={id} onClick={() => setCollapse(!collapse)} ref={ref}>
      <Row className={styles.selectboxHeader} justifyContent="flex-end" alignItems="center">
        <Col>
          <span>{`${defaultLabel} ${selectedItem ?? ''}`.trim()}</span>
        </Col>
        <Icon className={styles.selectboxHeaderIcon} iconName="caret_down" />
      </Row>
      <div className={styles.selectboxDropdown}>
        {dropDownList?.map((item, index) => {
          return (
            <div
              key={item.label}
              className={`${styles.selectboxDropdownItem} ${
                selectedItem === item.label ? styles.selectboxDropdownItemActive : ''
              }`}
              onClick={() => handleClick(index)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Perform Prop Validation
Selectbox.propTypes = {
  id: string,
  name: string,
  className: string,
  defaultLabel: string,
  handleOnChange: func,
  options: array,
};

// Declare default props
Selectbox.defaultProps = {
  id: null,
  name: null,
  className: '',
  defaultLabel: '',
  handleOnChange: null,
  options: [],
};

// Export the component
export default Selectbox;
