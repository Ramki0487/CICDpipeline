/*
 * File: Container.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 4:33:33 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { node, oneOfType, string } from 'prop-types';
import styles from './Container.module.scss';

/**
 * Container Component
 * @param {any} children - Child node
 * @param {string} className - Custom Class to override styles
 * @param {string} id - id to place on row
 * @returns {*}
 */
const Container = (props) => {
  const { children: children, className: className, id: id } = props;

  return (
    <div className={`${styles.container} ${className}`} id={id}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: oneOfType([string, node]),
  className: string,
  id: string,
};

Container.defaultProps = {
  className: '',
  children: null,
  id: null,
};

export default Container;
