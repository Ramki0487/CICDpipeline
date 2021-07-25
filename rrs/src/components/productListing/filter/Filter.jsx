/*
 * File: Filter.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import Button from '@RRS-UI/button/Button';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Row } from '@RRS-UI/layout';
import SlideOutModal from '@RRS-UI/slideOutModal/SlideOutModal';
import Typography from '@RRS-UI/typography/Typography';
import { array, bool, func, number, object } from 'prop-types';
import { useState } from 'react';
import styles from './Filter.module.scss';
import FilterOptions from './filterOptions/FilterOptions';

/**
 * Filter component
 * @param {array} filterOptions - Array of input to render Filter component
 * @param {boolean} isDesktop - Flag to display device specific content
 * @param {number} totalResults - Total number of products
 * @param {function} handleOnClick - onClick callback function
 * @param {array} appliedFilters - Array of selected/applied filters
 * @returns
 */
const Filter = ({ filterOptions, isDesktop, handleOnClick, totalResults, appliedFilters }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerStatus = () => setIsDrawerOpen(!isDrawerOpen);

  const renderFilterOptions = () => {
    return (
      <Row flexDirection="column">
        {/* <Row
          flexDirection={isDesktop ? 'column-reverse' : 'column'}
          className={styles.filterTopSection}
        >
          <Col className={styles.filterStorepicker}>
            <Row>
              <Col xs={3}>
                <ToggleButton {...(handleOnClick && { onClick: handleOnClick })} />
              </Col>
              <Col xs={9}>
                <Typography variant="h4">Curbside & In-Store Pickup</Typography>
                <Typography variant="p">Road Runner Store Name (4.2 miles)</Typography>
                <a>Change Store</a>
              </Col>
            </Row>
          </Col>
          <Col className={styles.filterMyfit}>
            <Row>
              <Col xs={3}>
                <ToggleButton {...(handleOnClick && { onClick: handleOnClick })} />
              </Col>
              <Col xs={2}>
                <Typography variant="h4">My Fit</Typography>
              </Col>
              <Col xs={7} alignSelf="center">
                <a>Save as New Fit Profile</a>
              </Col>
            </Row>
          </Col>
        </Row> */}
        <Row className={styles.filterOptions}>
          <FilterOptions
            filterOptions={filterOptions}
            isDesktop={isDesktop}
            handleOnClick={handleOnClick}
            appliedFilters={appliedFilters}
            key={isDrawerOpen}
          />
        </Row>
      </Row>
    );
  };

  // block body scroll when modal is in open state
  !isDesktop && useBodyScrollLock(isDrawerOpen);

  return (
    <>
      {isDesktop ? (
        renderFilterOptions()
      ) : (
        <>
          <Button
            className={styles.filterButton}
            size="medium"
            theme="rr-iceblue"
            onClick={toggleDrawerStatus}
          >
            <Icon iconName="filter_icon" />
            <Typography variant="h4">
              Filter {appliedFilters?.length > 0 ? `(${appliedFilters.length})` : ''}
            </Typography>
          </Button>
          <SlideOutModal
            contentClassName={styles.filterModal}
            withCloseIcon={false}
            isOpen={isDrawerOpen}
          >
            <>
              <Row className={styles.filterModalHeader} justifyContent="space-between">
                <Typography variant="h3">Filter Products</Typography>
                <Icon iconName="close" onClick={toggleDrawerStatus} />
              </Row>
              <Row className={styles.filterMobile}>{renderFilterOptions()}</Row>
              <Row flexDirection="row" className={styles.filterModalFooter} alignItems="stretch">
                <Col
                  xs={4}
                  className={styles.filterModalFooterBtnClear}
                  onClick={() => {
                    toggleDrawerStatus();
                    handleOnClick('');
                  }}
                >
                  <a>Clear Filters</a>
                </Col>
                <Col
                  xs={8}
                  className={styles.filterModalFooterBtnShow}
                  onClick={toggleDrawerStatus}
                >
                  <Typography variant="h5">Show {totalResults} Products</Typography>
                </Col>
              </Row>
            </>
          </SlideOutModal>
        </>
      )}
    </>
  );
};

//default props
Filter.defaultProps = {
  filterOptions: {},
  totalResults: 0,
  appliedFilters: [],
  isDesktop: false,
};

//perform props validation
Filter.propTypes = {
  filterOptions: object,
  isDesktop: bool,
  handleOnClick: func.isRequired,
  totalResults: number,
  appliedFilters: array,
};

export default Filter;
