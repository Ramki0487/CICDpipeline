/*
 * File: PowerReviews.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import { API_KEY, MERCHANT_GROUP_ID, MERCHANT_ID } from '@Configs/PowerReviewConfig';
import { func, string } from 'prop-types';
import { useEffect } from 'react';
import { PowerReviewConfig } from 'react-power-reviews';
import styles from './PowerReviews.module.scss';

/**
 * PowerReview component
 * @param {pageId} - Pass the productId to render the reviews
 * @returns
 */
const PowerReviews = (props) => {
  const { pageId, showRatings } = props;

  if (!pageId) return null;

  const initPowerReview = () => {
    PowerReviewConfig({
      apiKey: API_KEY,
      merchantGroupId: MERCHANT_GROUP_ID,
      merchantId: MERCHANT_ID,
      locale: 'en_US',
      pageId: pageId,
      REVIEW_DISPLAY_PAGINATION_TYPE: 'VERTICAL',
      //config: { style_sheet: powerReviewStyles },
      components: {
        ReviewDisplay: 'reviewDisplayId',
      },
      //review_wrapper_url: `/write-review?page_id=${pageId}`,
      product: {},
      init: (page, reviews) => {
        showRatings(reviews);
      },
    });
  };

  useEffect(() => {
    initPowerReview();
  }, [pageId]);

  return <div className={styles.powerReviews} id="reviewDisplayId" />;
};

//Props validation
PowerReviews.propTypes = {
  pageId: string,
  showRatings: func,
};

export default PowerReviews;
