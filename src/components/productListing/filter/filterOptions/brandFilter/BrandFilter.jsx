/*
 * File: BrandFilter.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 9:27:26 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Checkbox from '@RRS-UI/checkbox/Checkbox';
import InputGroup from '@RRS-UI/inputGroup/InputGroup';
import { Col, Row } from '@RRS-UI/layout';
import { array, func } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './BrandFilter.module.scss';

const defaultBrandFiltersToShow = 8;

/**
 * BrandFilter Component
 * @param {array} brandsList - List of brand names to display
 * @param {function} handleOnClick - Callback when brand name is selected
 * @returns {function} - Brand Names filter options with checkbox
 */
const BrandFilter = ({ brandsList, handleOnClick }) => {
  const topBrands = brandsList?.slice(0, defaultBrandFiltersToShow) ?? [];
  const [brandFilters, setBrandFilters] = useState({ list: [], showLabel: true });
  const [searchInput, setSearchInput] = useState('');

  const toggleBrandFiltersList = () => {
    const brandNames = brandFilters.list.length > 8 ? topBrands : brandsList;

    setBrandFilters({ list: brandNames, showLabel: true });
  };

  const filterBrandNames = (val) => {
    return brandsList.filter((item) => item?.name?.toLowerCase()?.indexOf(val) > -1);
  };

  const handleSearch = (val) => {
    setSearchInput(val);

    if (val) {
      const brandNames = filterBrandNames(val);

      setBrandFilters({ list: brandNames, showLabel: false });
    } else {
      setBrandFilters({ list: topBrands, showLabel: true });
    }
  };

  useEffect(() => {
    const brandNames = searchInput ? filterBrandNames(searchInput) : topBrands;

    setBrandFilters({ list: brandNames, showLabel: true });
  }, [brandsList]);

  return (
    <Row flexDirection="column">
      <Col className={styles.brandSearch} lg={10} xl={8}>
        <InputGroup
          inputProps={{
            placeholder: 'Search',
            onChange: handleSearch,
            value: searchInput,
          }}
          flexDirection="row-reverse"
          iconProps={{ iconName: 'search' }}
          className={styles.brandSearchBox}
        />
      </Col>
      {brandFilters?.list?.length > 0 && (
        <Col>
          <ul>
            {brandFilters.list.map((item) => {
              if (item?.products > 0)
                return (
                  <li key={`${item?.name}_${item?.state}`}>
                    <Checkbox
                      className={styles.brandCheckbox}
                      value={item.url}
                      handleOnChange={handleOnClick}
                      isChecked={item?.state === 'active'}
                      label={`${item?.name} ${item?.products ? '(' + item?.products + ')' : ''}`}
                    />
                  </li>
                );
            })}
            {brandFilters.showLabel && brandFilters.list.length >= 8 && (
              <li>
                <LinkTag onClick={toggleBrandFiltersList} className={styles.brandSeeAllLink}>
                  {brandFilters.list.length > 8 ? 'See Less Brands' : 'See All Brands'}
                </LinkTag>
              </li>
            )}
          </ul>
        </Col>
      )}
    </Row>
  );
};

BrandFilter.propTypes = {
  brandsList: array,
  handleOnClick: func.isRequired,
};

BrandFilter.defaultProps = {
  brandsList: [],
};

export default BrandFilter;
