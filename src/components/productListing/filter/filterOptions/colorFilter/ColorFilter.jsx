/*
 * File: ColorFilter.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 9:38:40 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 3rd 2021 5:02:06 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Checkbox from '@RRS-UI/checkbox/Checkbox';
import { Col, Row } from '@RRS-UI/layout';
import { array, func } from 'prop-types';
import styles from './ColorFilter.module.scss';

/**
 * ColorFilter Component
 * @param {array} colorsList - List of colors to display
 * @param {function} handleOnClick - Callback when color is selected
 * @returns {function} - Color filter options with checkbox
 */
const ColorFilter = ({ colorsList, handleOnClick }) => {
  return (
    <Row className={styles.colors}>
      {colorsList?.map((item) => {
        if (item?.products > 0)
          return (
            <Col className={styles.colorsItem} key={`${item?.name}_${item?.state}`} auto>
              <Checkbox
                className={`${item?.name?.toLowerCase() == 'white' ? styles.colorsItemWhite : ''} ${
                  item?.name?.toLowerCase() == 'multi' ? styles.colorsItemMulti : ''
                } ${styles.colorsItemCode}`}
                value={item.url}
                handleOnChange={handleOnClick}
                backgroundColor={item?.name}
                isChecked={item?.state === 'active'}
                label={`${item?.name} ${item?.products ? '(' + item?.products + ')' : ''}`}
              />
            </Col>
          );
      })}
    </Row>
  );
};

ColorFilter.propTypes = {
  colorsList: array,
  handleOnClick: func.isRequired,
};

ColorFilter.defaultProps = {
  colorsList: [],
};

export default ColorFilter;
