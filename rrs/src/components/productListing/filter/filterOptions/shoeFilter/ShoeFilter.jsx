/*
 * File: ShoeFilter.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 9:38:40 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 6th 2021 12:26:46 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Checkbox from '@RRS-UI/checkbox/Checkbox';
import { Col, Row } from '@RRS-UI/layout';
import { array, func } from 'prop-types';
import styles from './ShoeFilter.module.scss';

/**
 * ShoeFilter Component
 * @param {array} shoeList - List of shoe sizes to display
 * @param {function} handleOnClick - Callback when size is selected
 * @returns {function} - Size filter options with checkbox
 */
const ShoeFilter = ({ shoeList, handleOnClick }) => {
  return (
    <Row>
      {shoeList?.map((item) => {
        if (item?.products > 0)
          return (
            <Col key={`${item?.name}_${item?.state}`} className={styles.shoes} noflex>
              <Checkbox
                className={styles.shoesCheckbox}
                value={item.url}
                handleOnChange={handleOnClick}
                isChecked={item?.state === 'active'}
                type="tile"
                label={item?.name}
              />
            </Col>
          );
      })}
    </Row>
  );
};

ShoeFilter.propTypes = {
  shoeList: array,
  handleOnClick: func.isRequired,
};

ShoeFilter.defaultProps = {
  shoeList: [],
};

export default ShoeFilter;
