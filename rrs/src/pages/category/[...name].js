/*
 * File: [name].js
 * Project: webapp-rrs
 * Created Date: Friday, May 21st 2021, 10:22:44 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import styles from '@Assets/styles/pages/category/category.module.scss';
import LinkTag from '@Components/linkTag/LinkTag';
import NoSearchResults from '@Components/noSearchResults/NoSearchResults';
import ProductListing from '@Components/productListing/ProductListing';
import Breadcrumb from '@RRS-UI/breadcrumb/Breadcrumb';
import { Col, Container } from '@RRS-UI/layout';
import { string } from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from 'react-redux';
import SearchPage from '../search/[[...keyword]]';

const CategoryPage = ({ searchQuery }) => {
  const searchResults = useSelector((state) => state.search);

  if (searchResults?.totalSearchCount > 0) {
    return (
      <Container className={styles.category}>
        <Breadcrumb
          LinkTag={LinkTag}
          current={searchResults.breadcrums?.[0]?.name ?? searchResults.pageTitle ?? 'Category'}
        />
        <ProductListing searchResults={searchResults} pageName="category" />
        {searchResults?.seoFooterText && (
          <Col className={styles.categorySeoBlock}>
            {ReactHtmlParser(searchResults.seoFooterText)}
          </Col>
        )}
      </Container>
    );
  }

  return <NoSearchResults query={searchQuery} />;
};

CategoryPage.getInitialProps = async (ctx) => {
  await SearchPage.getInitialProps(ctx);

  return {
    searchQuery: ctx.query.name?.[0] ?? '',
  };
};

CategoryPage.propTypes = {
  searchQuery: string.isRequired,
};

export default CategoryPage;
