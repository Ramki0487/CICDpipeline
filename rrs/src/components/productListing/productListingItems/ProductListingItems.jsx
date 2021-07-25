/*
 * File: ProductListingItems.jsx
 * Project: webapp-rrs
 * Created Date: Wednesday, June 2nd 2021, 6:59:46 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Button from '@RRS-UI/button/Button';
import { Row } from '@RRS-UI/layout';
import LazyObserver from '@RRS-UI/lazyObserver/LazyObserver';
import { array, bool, func, number } from 'prop-types';
import { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import styles from './ProductListingItems.module.scss';

const lazyLoadBatchs = 4;
const productsPerBatch = 24;

/**
 * ProductListingItems Component
 * @param {boolean} isDesktop - Flag to display device specific content
 * @param {boolean} isLoading - Flag to display busy loader
 * @param {function} loadSearchResults - Callback function to load next set of results
 * @param {array} products - Products to render
 * @param {number} totalResults -Total number of results
 * @returns
 */
const ProductListingItems = ({
  isDesktop,
  isLoading,
  loadSearchResults,
  totalResults,
  products,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLazyLoading, setIsLazyLoading] = useState(false);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  const totalProductsToLazyLoad = productsPerBatch * lazyLoadBatchs;

  useEffect(async () => {
    if (pageNumber <= 1) return null;

    const reqObject = {
      p: productsPerBatch,
      skip: (pageNumber - 1) * productsPerBatch,
    };

    setIsLazyLoading(true);
    await loadSearchResults({ reqObject, isReset: false });
    setIsLazyLoading(false);
  }, [pageNumber]);

  useEffect(() => {
    if (pageNumber >= lazyLoadBatchs && products.length < totalResults) {
      setShowLoadMoreButton(true);
    } else if (products.length >= totalResults) {
      setShowLoadMoreButton(false);
    }
  }, [products.length, totalResults, pageNumber, lazyLoadBatchs]);

  const handleOnIntersectionFallback = () => setShowLoadMoreButton(true);

  const loadMoreResults = () => {
    if (products.length < totalResults) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  return (
    <>
      <Row className={isLoading ? styles.busyloader : ''}>
        {products.map((item, index) => {
          return (
            <LazyObserver
              key={`${item?.sku}_${item?.colorCode}_${totalResults}`}
              observe={
                totalResults > productsPerBatch &&
                products.length < totalProductsToLazyLoad &&
                products.length === index + 1
                  ? true
                  : false
              }
              handleOnIntersection={loadMoreResults}
              handleOnIntersectionFallback={handleOnIntersectionFallback}
              options={{ rootMargin: '50px' }}
            >
              <ProductCard item={item} isDesktop={isDesktop} />
            </LazyObserver>
          );
        })}
      </Row>
      <Row flexDirection="column" alignItems="center" className={styles.productListingFooter}>
        <span className={styles.productListingFooterInfo}>
          You&apos;ve viewed {products.length} of {totalResults} products
        </span>
        {totalResults > 0 && (
          <progress
            className={styles.productListingFooterProgress}
            value={(products.length / totalResults) * 100}
            max="100"
          >
            {(products.length / totalResults) * 100}%
          </progress>
        )}

        {(isLazyLoading || showLoadMoreButton) && (
          <Button
            size="large"
            className={styles.productListingFooterButton}
            onClick={loadMoreResults}
            disabled={isLazyLoading}
            isProcessing={isLazyLoading}
            processingLabel="Loading..."
          >
            Load More
          </Button>
        )}
      </Row>
    </>
  );
};

ProductListingItems.propTypes = {
  isDesktop: bool,
  isLoading: bool,
  loadSearchResults: func.isRequired,
  totalResults: number.isRequired,
  products: array.isRequired,
};

ProductListingItems.defaultProps = {
  isDesktop: false,
  isLoading: false,
};

export default ProductListingItems;
