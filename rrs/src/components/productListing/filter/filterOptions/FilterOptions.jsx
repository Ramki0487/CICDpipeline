/*
 * File: FilterOptions.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Accordion from '@RRS-UI/accordion/Accordion';
import Checkbox from '@RRS-UI/checkbox/Checkbox';
import { Col } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, bool, func, object } from 'prop-types';
import BrandFilter from './brandFilter/BrandFilter';
import ColorFilter from './colorFilter/ColorFilter';
import { formatFiltersObject, getAppliedFiltersByKey } from './FilterOptions.helper';
import styles from './FilterOptions.module.scss';
import PriceBarRangeFilter from './priceBarRangeFilter/PriceBarRangeFilter';
import ShoeFilter from './shoeFilter/ShoeFilter';

/**
 * FilterOptions Component
 * @param {object} filterOptions - Object to render Filter items
 * @param {boolean} isDesktop - Flag to display device specific content
 * @param {function} handleOnClick - onClick callback function
 * @param {array} appliedFilters - Array of selected/applied filters
 * @returns {function} - Filter Options
 */
const FilterOptions = ({ filterOptions, isDesktop, handleOnClick, appliedFilters }) => {
  const filters = formatFiltersObject(filterOptions);

  const renderAccordionBody = (filterItem) => {
    if (filterItem === 'shoe width' || filterItem === 'shoe size') {
      return <ShoeFilter shoeList={filters[filterItem]} handleOnClick={handleOnClick} />;
    } else if (filterItem === 'price') {
      return <PriceBarRangeFilter price={filters[filterItem][0]} handleOnClick={handleOnClick} />;
    } else if (filterItem === 'color') {
      return <ColorFilter colorsList={filters[filterItem]} handleOnClick={handleOnClick} />;
    } else if (filterItem === 'brand') {
      return <BrandFilter brandsList={filters[filterItem]} handleOnClick={handleOnClick} />;
    }

    // render the default filter options
    return (
      <>
        {filters[filterItem]?.length && (
          <ul>
            {filters[filterItem].map((item) => {
              if (item?.products > 0)
                return (
                  <li key={`${item?.name}_${item?.state}`}>
                    <Checkbox
                      className={styles.filterItemCheckbox}
                      value={item.url}
                      handleOnChange={handleOnClick}
                      isChecked={item?.state === 'active'}
                      label={`${item?.name} ${item?.products ? '(' + item?.products + ')' : ''}`}
                    />
                  </li>
                );
            })}
          </ul>
        )}
      </>
    );
  };

  return (
    <>
      {filters &&
        Object.keys(filters)?.map((filterItem) => {
          const selectedFilters =
            appliedFilters?.length > 0 && !isDesktop
              ? getAppliedFiltersByKey(filterItem, appliedFilters)
              : null;
          return (
            <Accordion
              key={filterItem}
              className={styles.accordion}
              collapsed={isDesktop ? true : false}
            >
              <Accordion.head className={styles.accordionHead}>
                <Col>
                  <Typography variant="h4">{filterItem}</Typography>
                  {selectedFilters?.length > 0 && (
                    <Typography className={styles.accordionHeadTags} variant="p">
                      {selectedFilters.join(', ')}
                    </Typography>
                  )}
                </Col>
              </Accordion.head>
              <Accordion.body className={styles.accordionBody}>
                {renderAccordionBody(filterItem)}
              </Accordion.body>
            </Accordion>
          );
        })}
    </>
  );
};

FilterOptions.propTypes = {
  filterOptions: object,
  handleOnClick: func.isRequired,
  isDesktop: bool,
  appliedFilters: array,
};

FilterOptions.defaultProps = {
  filterOptions: {},
  isDesktop: false,
  appliedFilters: [],
};

export default FilterOptions;
