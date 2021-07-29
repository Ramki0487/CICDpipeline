/*
 * File: ProductDetail.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, June 14 2021, 11:10:53 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { object, string } from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styles from './ProductDetail.module.scss';

/**
 * ProductDetail module
 * @param {*} props
 * @returns
 */
const productDetail = (props) => {
  const { product, className } = props;

  const formatFeaturesBenefits = (value) => {
    let featuresBenefits = value?.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    return ReactHtmlParser(featuresBenefits);
  };

  return (
    <Row className={`${styles.productDetail} ${className}`}>
      <Col md={12}>
        {/* <Row className={styles.productDetailExpertBlock}>
          <Col md={3}>
            <Row
              className={styles.productDetailExpertBlockNeutralDetails}
              flexDirection={isMobile ? 'row' : 'column'}
            >
              <Col xs={isMobile ? 4 : 10}>
                <Icon iconName="neutral" />
              </Col>
              <Col xs={isMobile ? 8 : 10}>
                <Typography variant="h4">{labels.shoe_category_neutral}</Typography>
                <Typography variant="p">
                  {results?.productSpec?.neutral?.description}
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row
              className={styles.productDetailExpertBlockCushionDetails}
              flexDirection={isMobile ? 'row' : 'column'}
            >
              <Col xs={isMobile ? 4 : 10}>
                <Icon iconName="cushion" />
              </Col>
              <Col xs={isMobile ? 8 : 10}>
                <Typography variant="h4">{labels.cushion_level_4}</Typography>
                <Typography variant="p">
                  {results?.productSpec?.cushion?.description}
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col className={styles.productDetailExpertBlockReview} md={6}>
            <Typography variant="h4">{labels.expert_review}</Typography>
            <Typography variant="p">
              {`"${results?.productSpec?.expertReview?.reviewMessage}"`}
            </Typography>
            <Row className={styles.productDetailExpertBlockReviewName}>
              <Col xs={3} lg={2}>
                <Image
                  src={ReviewerImage}
                  alt={results?.productSpec?.expertReview?.reviewerName}
                />
              </Col>
              <Col xs={7} lg={7}>
                <Typography variant="h5">
                  {results?.productSpec?.expertReview?.reviewerName}
                </Typography>
                <Typography variant="small">
                  {results?.productSpec?.expertReview?.reviewerBio}
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row> */}
        <Row className={styles.productDetailDescription}>
          <Col lg={12}>
            <Typography variant="p">{ReactHtmlParser(product?.longDescription)}</Typography>
          </Col>
        </Row>
        <Row className={styles.productDetailSpecs}>
          <Col className={styles.productDetailSpecsFeature}>
            <Typography variant="h4">
              {product?.productType === 'shoe' ? 'THE NUTS & BOLTS' : 'Key Features & Benefits'}
            </Typography>
            {formatFeaturesBenefits(product?.featuresBenefits)}
            {/* 
              <Typography variant="p">
                <strong>Running Shoe Support:</strong> Your Ghost 13 is a neutral running shoe
                that&#34;s light, flexible and perfect for medium to high arches that dont need a lot
                of support
              </Typography>
              <Typography variant="p">
                <strong>Super Breathable Upper:</strong> This long-distance running shoe features a
                new, Engineering Mesh upper that hugs your foot for a secure and breathable fit
              </Typography>
              <Typography variant="p">
                <strong>Snug, Stretch Fit:</strong> Your Ghost 13 is a neutral running shoe that&#34;s
                light, flexible and perfect for medium to high arches that dont need a lot of support
              </Typography>
              <Typography variant="p">
                <strong>Now more Cushion:</strong> Soften every step and stride with even more DNA
                LOFT cushioning that extends throughout the midsole. You get super soft cushioning
                underfoot and a smoother transition from heel to toe no matter how your foot lands
              </Typography> 
            */}
          </Col>
          {/* <Col className={styles.productDetailSpecsMetrics} lg={3}>
            <ul>
              <li>
                <Typography variant="h4">Arch Height</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet adipiscing elit nullam est consectuetor ambulo locales
                  est.
                </Typography>
              </li>
              <li>
                <Typography variant="h4">Best Uses</Typography>
                <Typography variant="p">Everyday running on roads and paved paths</Typography>
              </li>
              <li>
                <Row>
                  <Col>
                    <Typography variant="h4">Weight</Typography>
                    <Typography variant="p">8.8 oz (250g)</Typography>
                  </Col>
                  <Col>
                    <Typography variant="h4">Heel-Toe Drop</Typography>
                    <Typography variant="p">12mm</Typography>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col>
          <Col className={styles.productDetailSpecsMetrics} lg={3}>
            <ul>
              <li>
                <Typography variant="h4">Breathability</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet adipiscing elit nullam est consectuetor ambulo locales
                  est.
                </Typography>
              </li>
              <li>
                <Typography variant="h4">Materials</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet adipiscing elit nullam est consectuetor ambulo locales
                  est.
                </Typography>
              </li>
              <li>
                <Row>
                  <Col>
                    <Typography variant="h4">Predecessor</Typography>
                    <Typography variant="p">
                      <a>Ghost 12</a>
                    </Typography>
                  </Col>
                  <Col>
                    <Typography variant="h4">Item Number</Typography>
                    <Typography variant="p">1000038330</Typography>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Col>
    </Row>
  );
};

//Default Props
productDetail.defaultProps = {
  className: '',
};

//Props validation
productDetail.propTypes = {
  product: object,
  className: string,
};

export default productDetail;
