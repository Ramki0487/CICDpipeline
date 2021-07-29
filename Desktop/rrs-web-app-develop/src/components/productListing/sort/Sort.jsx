/*
 * File: Sort.jsx
 * Project: webapp-rrs
 * Created Date: Monday, April 05th 2021, 11:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import Button from '@RRS-UI/button/Button';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Row } from '@RRS-UI/layout';
import RadioButton from '@RRS-UI/radioButton/RadioButton';
import Selectbox from '@RRS-UI/selectbox/Selectbox';
import SlideOutModal from '@RRS-UI/slideOutModal/SlideOutModal';
import Typography from '@RRS-UI/typography/Typography';
import { array, bool, func } from 'prop-types';
import { useState } from 'react';
import { formartSortItems } from './Sort.helper';
import styles from './Sort.module.scss';

/**
 * Sort Component
 * @param {array} sortOptions - Array to render Sort Options
 * @param {boolean} isDesktop - Flag to display device specific content
 * @param {function} handleOnClick - onClick callback function
 * @returns
 */
const Sort = (props) => {
  const { sortOptions, handleOnClick, isDesktop } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerStatus = () => setIsDrawerOpen(!isDrawerOpen);
  const sortOptionsArray = formartSortItems(sortOptions);

  // block body scroll when modal is in open state
  !isDesktop && useBodyScrollLock(isDrawerOpen);

  return (
    <>
      {isDesktop ? (
        <Selectbox
          handleOnChange={handleOnClick}
          className={styles.sortSelectbox}
          options={sortOptionsArray}
          defaultLabel="Sort by"
        />
      ) : (
        <>
          <Button
            className={styles.sortButton}
            size="medium"
            theme="rr-iceblue"
            onClick={toggleDrawerStatus}
          >
            <Typography variant="h4">Sort By</Typography>
            <Icon iconName="caret_down" />
          </Button>
          <SlideOutModal
            contentClassName={styles.sortModal}
            withCloseIcon={false}
            isOpen={isDrawerOpen}
          >
            <Row flexDirection="column">
              <Row justifyContent="space-between" className={styles.sortModalHeader}>
                <Typography variant="h3">SORT PRODUCTS</Typography>
                <Icon iconName="close" onClick={toggleDrawerStatus} />
              </Row>
              <Col className={styles.sortModalBody}>
                <Row flexDirection="column">
                  {sortOptionsArray?.map((sortItem) => (
                    <RadioButton
                      className={styles.sortItem}
                      key={`${sortItem.label}_${sortItem.isSelected}`}
                      value={sortItem.value}
                      label={sortItem.label}
                      isSelected={sortItem.isSelected}
                      handleOnChange={(val) => {
                        toggleDrawerStatus();
                        handleOnClick && handleOnClick(val);
                      }}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </SlideOutModal>
        </>
      )}
    </>
  );
};

//default props declaration
Sort.defaultProps = {
  sortOptions: [],
  isDesktop: false,
};

//Perform props validation
Sort.propTypes = {
  sortOptions: array,
  isDesktop: bool,
  handleOnClick: func.isRequired,
};

export default Sort;
