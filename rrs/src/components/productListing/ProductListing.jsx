/*
 * File: ProductListing.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import { getSearchResults } from '@Redux/actions/Search';
import { Col, Row } from '@RRS-UI/layout';
import Tiles from '@RRS-UI/tiles/Tiles';
import Typography from '@RRS-UI/typography/Typography';
import { convertQueryStringToObject } from '@Utils/Url';
import { useRouter } from 'next/router';
import { object, string } from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './filter/Filter';
import { constructQuri, getAppliedFilters, mergeQueryParams } from './ProductListing.helper';
import styles from './ProductListing.module.scss';
import ProductListingItems from './productListingItems/ProductListingItems';
import Sort from './sort/Sort';

/**
 * ProductListing Component
 * @param {string} pageName  - Page name to render customized contents
 * @param {object} searchResults - Search results to render
 * @returns
 */
const ProductListing = ({ pageName, searchResults }) => {
  const products = searchResults?.results ?? [];

  // return if no search results
  if (!products.length) return null;

  const placeholderRef = useRef();
  const dispatch = useDispatch();
  const { asPath, query, replace, pathname } = useRouter();
  const { isDesktop } = useSelector((state) => state.device);
  const [showFilters, setShowFilters] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const filterOptions = searchResults.refinements;
  const hasFilterOptions = filterOptions && Object.keys(filterOptions).length > 0;
  const appliedFilters = getAppliedFilters(filterOptions);
  const totalResults = searchResults.totalSearchCount;
  const titleCopy =
    pageName === 'search'
      ? `${totalResults} RESULTS FOR "${query.keyword ?? ' '}"`
      : `${searchResults.pageTitle ?? 'Total Products'} (${totalResults})`;

  const applySortAndFilter = async (item) => {
    // constructs new query object based on selected filter
    const newQuery = convertQueryStringToObject(item);
    const { shouldUpdate, mergedParams } = mergeQueryParams(query, newQuery);

    if (shouldUpdate) {
      // Load new set of results only if there is a change in filter selection
      setIsLoading(true);
      await loadSearchResults({ newQuery });
      setIsLoading(false);

      // Just update the browser URL without rendering Next.js Page
      await replace({ pathname, query: mergedParams }, undefined, {
        shallow: true,
      });

      // Considering PLP in medium brand pages, scrolling top to custom placeholder
      if (isDesktop && placeholderRef?.current)
        scrollTo({
          top: placeholderRef?.current?.offsetTop ?? 100,
        });
    }
  };

  const loadSearchResults = async ({ reqObject, isReset, newQuery }) => {
    const searchRequest = {
      qUri: constructQuri(asPath, newQuery ?? query),
      ...reqObject,
    };

    await dispatch(getSearchResults(searchRequest, isReset));
  };

  return (
    <>
      <div ref={placeholderRef}></div>
      {pageName !== 'brands' && (
        <>
          <Row className={styles.productListingTitle}>
            <Typography variant="h1">{titleCopy}</Typography>
          </Row>
          {/* {pageName !== 'search' && filterOptions?.Categories && (
            <Row flexDirection="row" className={styles.productListingTagsBlock}>
              {filterOptions.Categories.map((tag) => (
                <Tiles className={styles.productListingTags} key={tag?.name}>
                  <strong>{tag?.name}</strong>
                </Tiles>
              ))}
            </Row>
          )} */}
        </>
      )}

      <Row
        className={styles.productListingLinks}
        flexDirection={isDesktop ? 'row' : 'column-reverse'}
        alignItems="center"
      >
        <Col xl={8} className={styles.productListingLinksBlock}>
          {appliedFilters?.length > 0 && (
            <Row flexDirection={isDesktop ? 'row' : 'column-reverse'}>
              <Col noflex className={styles.productListingLinksClear}>
                <LinkTag onClick={() => applySortAndFilter('')}>
                  Clear Filters ({appliedFilters.length})
                </LinkTag>
              </Col>
              <Col>
                {appliedFilters.map((item) => (
                  <Tiles
                    key={item.name}
                    theme="theme2"
                    iconProps={{
                      iconName: 'close',
                      onClick: () => applySortAndFilter(item.url),
                    }}
                    className={styles.productListingTiles}
                  >
                    {item.key} <strong>{item.name}</strong>
                  </Tiles>
                ))}
              </Col>
            </Row>
          )}
        </Col>
        {hasFilterOptions && (
          <Col xl={4}>
            {isDesktop && (
              <Row flexDirection="row" alignItems="center" justifyContent="flex-end">
                <LinkTag onClick={() => setShowFilters(!showFilters)}>
                  {showFilters ? 'Hide Filter' : 'Show Filter'}
                </LinkTag>
                <Sort
                  isDesktop={isDesktop}
                  sortOptions={searchResults.sorting}
                  handleOnClick={applySortAndFilter}
                />
              </Row>
            )}
            {!isDesktop && (
              <Row flexDirection="row" alignItems="center" justifyContent="space-around">
                <Filter
                  filterOptions={filterOptions}
                  isDesktop={isDesktop}
                  handleOnClick={applySortAndFilter}
                  totalResults={totalResults}
                  appliedFilters={appliedFilters}
                />

                <Sort
                  isDesktop={isDesktop}
                  sortOptions={searchResults.sorting}
                  handleOnClick={applySortAndFilter}
                />
              </Row>
            )}
          </Col>
        )}
      </Row>

      <Row>
        {isDesktop && hasFilterOptions && (
          <Col
            className={`${styles.productListingFilters} ${
              showFilters ? styles.productListingFiltersOpen : styles.productListingFiltersClose
            }`}
          >
            <Filter
              filterOptions={filterOptions}
              isDesktop={isDesktop}
              handleOnClick={applySortAndFilter}
            />
          </Col>
        )}
        <Col lg={hasFilterOptions && showFilters ? 9 : 12} className={styles.productListingBlock}>
          <ProductListingItems
            products={products}
            isDesktop={isDesktop}
            isLoading={isLoading}
            loadSearchResults={loadSearchResults}
            totalResults={totalResults}
            key={asPath}
          />
        </Col>
      </Row>
    </>
  );
};

ProductListing.propTypes = {
  searchResults: object,
  pageName: string,
};

ProductListing.defaultProps = {
  searchResults: {},
  pageName: 'search',
};

export default ProductListing;
