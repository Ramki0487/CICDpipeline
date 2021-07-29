/*
 * File: [name].js
 * Project: webapp-rrs
 * Created Date: Saturday, May 22nd 2021, 7:22:58 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import styles from '@Assets/styles/pages/brands/brands.module.scss';
import CmsPage from '@Components/cms/CmsPage';
import LinkTag from '@Components/linkTag/LinkTag';
import ProductListing from '@Components/productListing/ProductListing';
import Breadcrumb from '@RRS-UI/breadcrumb/Breadcrumb';
import { Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { getContentByTypeId } from '@Utils/Contentful';
import { object, string } from 'prop-types';
import { useSelector } from 'react-redux';
import SearchPage from '../search/[[...keyword]]';

const BrandPage = ({ plpSection, searchQuery }) => {
  const searchResults = useSelector((state) => state.search);

  return (
    <>
      <CmsPage />
      {plpSection && Object.keys(plpSection)?.length > 0 && (
        <Container className={styles.brand}>
          {searchResults?.totalSearchCount > 0 ? (
            <>
              {plpSection.withBreadCrumb ? (
                <Breadcrumb LinkTag={LinkTag} current="Brands" />
              ) : (
                <div className={styles.brandDivider}></div>
              )}

              <ProductListing searchResults={searchResults} pageName="brands" />
            </>
          ) : (
            <Row justifyContent="center" className={styles.brandNoProducts}>
              <Typography>
                No Products Found for Brand <strong>{`"${searchQuery}"`}</strong>
              </Typography>
            </Row>
          )}
        </Container>
      )}
    </>
  );
};

BrandPage.getInitialProps = async (ctx) => {
  const { store, query } = ctx;
  const plpSection = getContentByTypeId(store.getState()?.cms?.pageModel, 'brandPlp');

  // If Brand page contains PLP section, fetch results from API
  if (plpSection && Object.keys(plpSection)?.length > 0) {
    await SearchPage.getInitialProps(ctx);
  }

  return {
    plpSection,
    searchQuery: query.name,
  };
};

BrandPage.propTypes = {
  plpSection: object,
  searchQuery: string.isRequired,
};

export default BrandPage;
