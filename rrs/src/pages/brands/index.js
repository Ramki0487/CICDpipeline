/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Saturday, May 22nd 2021, 7:22:49 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import styles from '@Assets/styles/pages/brands/brands.module.scss';
import CmsContent from '@Components/cms/CmsContent';
import LinkTag from '@Components/linkTag/LinkTag';
import BrandNames from '@RRS-UI/brandNames/BrandNames';
import Breadcrumb from '@RRS-UI/breadcrumb/Breadcrumb';
import { Container } from '@RRS-UI/layout';
import BrandNamesService from '@Services/brandNamesService/BrandNamesService';
import { getContentByTypeId } from '@Utils/Contentful';
import logger from '@Utils/Logger';
import { object } from 'prop-types';
import { useSelector } from 'react-redux';

const BrandsPage = ({ brandNames }) => {
  const pageModel = useSelector((state) => state.cms?.pageModel);
  const { staticMessages } = getContentByTypeId(pageModel, 'staticMessages');

  return (
    <Container className={styles.brand}>
      <Breadcrumb LinkTag={LinkTag} current="Brands" />
      <CmsContent contentTypeId="featuredBrands" />
      <BrandNames
        title={staticMessages?.alphabetical_brands}
        defaultTab={staticMessages?.all_brands}
        brands={brandNames}
        LinkTag={LinkTag}
      />
      <CmsContent contentTypeId="seoMetadata" />
    </Container>
  );
};

// This gets called on every request
BrandsPage.getInitialProps = async () => {
  let brandNames = {};
  try {
    // Fetch data from external API
    const res = await BrandNamesService.invoke();
    brandNames = res?.payload?.state?.brandNames;
  } catch (err) {
    logger.error(err);
  }

  // Pass data to the page via props
  return { brandNames };
};

BrandsPage.propTypes = {
  brandNames: object.isRequired,
};

export default BrandsPage;
