/*
 * File: Tabs.jsx
 * Project: webapp-rrs
 * Created Date: Monday, April 27nd 2021, 10:40:56 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { array, func, node, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Row } from '../layout';
import Typography from '../typography/Typography';
import styles from './Tabs.module.scss';

/**
 * Tabs Component
 * @param {string} className - ClassName to override styles
 * @param {array} tabList - List of Tabs to be displayed
 * @param {string} activeTab - Current active tab
 * @param {function} onClick - Handle click Callback
 * @param {string} typography - Type of typography
 * @param {node} children - Children component
 * @returns {*}
 * @constructor
 */

const Tabs = ({ className, tabList, activeTab, onClick, typography, children }) => {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const handleClick = ({ target }) => {
    onClick && onClick(target.textContent);
    setActive(target.textContent);
  };

  return (
    <>
      <Row justifyContent="space-evenly">
        <Typography className={styles.tab} variant={typography}>
          {tabList.map((item, index) => {
            const tabClassName = [
              styles.tabItem,
              item === active ? styles.tabItemActive : '',
              className,
            ]
              .join(' ')
              .trim();
            return (
              <span key={index} className={tabClassName} onClick={handleClick}>
                {item}
              </span>
            );
          })}
        </Typography>
      </Row>
      <Row>{children}</Row>
    </>
  );
};

// Perform Prop Validation
Tabs.propTypes = {
  className: string,
  tabList: array.isRequired,
  activeTab: string.isRequired,
  onClick: func,
  typography: string,
  children: node.isRequired,
};

//Default Props
Tabs.defaultProps = {
  className: '',
  onClick: null,
  typography: 'small',
};

// Export the component
export default Tabs;
