/*
 * File: Filter.jsx
 * Project: webapp-rrs
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { Row, Col } from '@RRS-UI/layout';
import Icon from '@RRS-UI/icon/Icon';
import Typography from '@RRS-UI/typography/Typography';
import Radio from '@RRS-UI/radioButton/RadioButton';
import SlideOutModal from '@RRS-UI/slideOutModal/SlideOutModal';
import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import { array, func, string } from 'prop-types';
import { useState } from 'react';
import styles from './Filter.module.scss';

/**
 * Filter Component
 * @param {object} orderFilter - object to render Filter comp
 * @param {function} handleOnChange - callback function on change
 * @param {string} activeFilter - string contain active filter
 * @returns {*}
 * @constructor
 */

const Filter = ({ orderFilter, handleChange, activeFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerStatus = () => setDrawerOpen(!drawerOpen);

  useBodyScrollLock(drawerOpen);

  return (
    <Row justifyContent="center" textAlign="center">
      <Typography variant="small" className={styles.filterTitle}>
        2 orders <span>in the past 3 months</span>
      </Typography>
      <Row
        justifyContent="center"
        alignItems="center"
        className={styles.filterButton}
        onClick={toggleDrawerStatus}
      >
        <Icon iconName="filter_icon" className={styles.filterIcon} />
        <Typography variant="h3">FILTER</Typography>
      </Row>
      <SlideOutModal
        isOpen={drawerOpen}
        withCloseIcon={false}
        contentClassName={styles.filterSlideout}
      >
        <Col>
          <Row justifyContent="space-between" className={styles.filterTag}>
            <Typography variant="h3">ORDER FILTERS</Typography>
            <Icon iconName="close" onClick={toggleDrawerStatus} />
          </Row>
          {orderFilter.map((filter) => (
            <Row key={filter?.id} className={styles.filterMenuLabel} rowGap={15}>
              <Typography variant="h4">{filter?.title}</Typography>
              {filter?.radioLabel.map((Items) => (
                <Row key={Items?.id}>
                  <Radio
                    className={styles.filterMenuValue}
                    id={Items?.id}
                    value={Items?.value}
                    label={Items?.label}
                    handleOnChange={handleChange}
                    isSelected={activeFilter === Items?.value}
                  />
                </Row>
              ))}
            </Row>
          ))}
          <Row justifyContent="center" onClick={toggleDrawerStatus} className={styles.filterApply}>
            <Typography variant="h4">Apply</Typography>
          </Row>
        </Col>
      </SlideOutModal>
    </Row>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: func,
  orderFilter: array,
  activeFilter: string,
};
