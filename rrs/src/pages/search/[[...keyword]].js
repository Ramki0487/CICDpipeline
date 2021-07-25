/*
 * File: [keyword].js
 * Project: webapp-rrs
 * Created Date: Saturday, May 22nd 2021, 7:18:19 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import styles from '@Assets/styles/pages/search/search.module.scss';
import LinkTag from '@Components/linkTag/LinkTag';
import NoSearchResults from '@Components/noSearchResults/NoSearchResults';
import ProductListing from '@Components/productListing/ProductListing';
import { constructQuri } from '@Components/productListing/ProductListing.helper';
import { getSearchResults } from '@Redux/actions/Search';
import Breadcrumb from '@RRS-UI/breadcrumb/Breadcrumb';
import { Container } from '@RRS-UI/layout';
import { string } from 'prop-types';
import { useSelector } from 'react-redux';

const SearchPage = ({ searchQuery }) => {
  const searchResults = useSelector((state) => state.search);

  if (searchResults?.totalSearchCount > 0)
    return (
      <Container className={styles.search}>
        <Breadcrumb LinkTag={LinkTag} current={'Search Results'} />
        <ProductListing pageName="search" searchResults={searchResults} />
      </Container>
    );

  return <NoSearchResults query={searchQuery} />;
};

SearchPage.getInitialProps = async (ctx) => {
  const { store, asPath, query } = ctx;

  const searchRequest = {
    qUri: constructQuri(asPath, query),
  };

  await store.dispatch(getSearchResults(searchRequest));

  return {
    searchQuery: query.keyword?.[0],
  };
};

SearchPage.propTypes = {
  searchQuery: string.isRequired,
};

export default SearchPage;
