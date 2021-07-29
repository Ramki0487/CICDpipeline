/*
 * File: TextArea.jsx
 * Project: webapp-rrs
 * Created Date: Monday, January 12th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { func, number, string } from 'prop-types';
import { Row } from '@RRS-UI/layout';
import styles from './TextArea.module.scss';

/**
 * TextArea Component
 * @param {string} className - Class name to override styles of Textarea
 * @param {number} cols - Number of columns to be expanded for Textarea
 * @param {string} id - Textarea tag id
 * @param {string} name - Textarea tag name
 * @param {function} onChange -
 * @param {string} placeholder - Placeholder text
 * @param {number} rows - Number of rows to be expanded for Textarea
 * @returns {*}
 * @constructor
 */
const TextArea = ({ className, cols, id, name, onChange, placeholder, rows }) => {
  const handleOnChange = ({ target }) => {
    onChange?.(target?.value);
  };

  return (
    <Row className={className}>
      <textarea
        className={styles.textarea}
        id={id}
        cols={cols}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        rows={rows}
      />
    </Row>
  );
};

// Perform Prop Validation
TextArea.propTypes = {
  className: string,
  cols: number,
  id: string,
  name: string,
  onChange: func,
  placeholder: string,
  rows: number,
};

// Declare default props
TextArea.defaultProps = {
  className: '',
  cols: 6,
  id: null,
  name: null,
  onChange: null,
  placeholder: '',
  rows: 6,
};

// Export the component
export default TextArea;
