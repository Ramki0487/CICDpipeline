/*
 * File: BrandNames.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, April 6th 2021, 11:03:54 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Patterns from '@Utils/Patterns';
import { func, object, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Col, Row } from '../layout';
import Typography from '../typography/Typography';
import styles from './BrandNames.module.scss';

const constructBrandsLink = (brand) => {
  return `/brands/${brand.replace(Patterns.REMOVE_ALL_SPACE, '_')}`;
};

/**
 * BrandNames Component
 * @param {array} brands - Array to render Brand List
 * @param {string} tabLabel - title of the Tab
 * @param {string} className - Class to override default styles
 * @param {func} onClick - onclick callback function
 * @returns
 */
const BrandNames = ({ brands, className, defaultTab, LinkTag, title }) => {
  if (brands && Object.keys(brands).length === 0) return null;

  const alphabets = Object.keys(brands);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const section = document.querySelector(`#brand_item_${tabId}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  return (
    <Row className={`${styles.brands} ${className}`}>
      <Typography variant="h2" className={styles.brandsTitle}>
        {title}
      </Typography>
      <Row className={styles.brandsTab}>
        {[defaultTab, ...alphabets].map((tabName) => {
          return (
            <Col
              className={styles.brandsTabItem}
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              auto
            >
              <Typography
                className={activeTab === tabName ? styles.brandsTabItemActive : ''}
                variant="h3"
              >
                {tabName}
              </Typography>
            </Col>
          );
        })}
      </Row>
      <Row className={styles.brandsList} flexDirection="column">
        {alphabets?.map((key) => {
          return (
            <Col
              className={
                activeTab === defaultTab || activeTab === key ? styles.brandsListActive : ''
              }
              key={key}
              auto
              id={`brand_item_${key}`}
            >
              <Typography className={styles.brandsListHeading} variant="h3">
                {key}
              </Typography>
              <ul>
                {brands[key]?.map((brand) => (
                  <li key={brand}>
                    <LinkTag href={constructBrandsLink(brand)}>{brand}</LinkTag>
                  </li>
                ))}
              </ul>
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

//default props
BrandNames.defaultProps = {
  brands: {},
  className: '',
  defaultTab: '',
  title: '',
};

//perform props validation
BrandNames.propTypes = {
  brands: object,
  className: string,
  defaultTab: string,
  onClick: func,
  LinkTag: func.isRequired,
  title: string,
};

export default BrandNames;
