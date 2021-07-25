/*
 * File: Recommendations.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import RecommendationCard from '@Components/productCards/recommendationCard/RecommendationCard';
import { Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import RelatedProductService from '@Services/relatedProductService/RelatedProductService';
import logger from '@Utils/Logger';
import { string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Recommendations.module.scss';

/**
 * Recommendations module
 * @param {string} productId - Pass productId to fetch the Cross and Upselling products
 * @param {string} className - Classname to override default styles
 * @returns
 */
const Recommendations = (props) => {
  const { productId, className } = props;

  if (!productId) return null;

  const [relatedProducts, setRelatedProducts] = useState();

  useEffect(async () => {
    try {
      const resp = await RelatedProductService.invoke({ productId });
      setRelatedProducts(resp?.payload?.state);
    } catch (e) {
      logger.error('API exception in related product service:', e);
    }
  }, []);

  if (!relatedProducts) return null;

  return (
    <Row className={`${styles.recommendations} ${className}`}>
      {Object.keys(relatedProducts)?.map((key) => (
        <Row key={key} className={styles.recommendationsList}>
          <Typography className={styles.recommendationsListTitle} variant="h3">
            {relatedProducts?.[key]?.title}
          </Typography>
          <Slider className={styles.recommendationsListItem}>
            {relatedProducts?.[key]?.products?.map((product) => (
              <RecommendationCard item={product} key={product.sku} />
            ))}
          </Slider>
        </Row>
      ))}
    </Row>
  );
};

//Defualt Props
Recommendations.defaultProps = {
  className: '',
};

//Props validation
Recommendations.propTypes = {
  productId: string.isRequired,
  className: string,
};

export default Recommendations;
