/*
 * File: BrandFeaturedProduct.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Card from '@RRS-UI/card/Card';
// import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { object, string } from 'prop-types';
import styles from './BrandFeaturedProduct.module.scss';

const BrandFeaturedProduct = ({
  productImagePosition,
  title,
  subtext,
  image,
  shopNowUrl,
  shopNowText,
  subTitle,
}) => {
  if (!image) return null;

  return (
    <Row className={styles.brandFeature}>
      <Col md={6} className={styles[`position-${productImagePosition}`]}>
        <Card className={styles.brandFeatureContentInner} image={<CmsImage {...image?.fields} />} />
      </Col>
      <Col md={6} className={`${styles.brandFeatureContent}`}>
        <Row
          flexDirection="column"
          justifyContent="center"
          className={styles.brandFeatureContentContainer}
        >
          <Typography variant="h5" className={styles.card}>
            {subTitle}
          </Typography>
          <Typography variant="h2" className={styles.card}>
            {title}
          </Typography>
          <Typography variant="p" className={styles.cardDescription}>
            {subtext}
          </Typography>
          <LinkTag href={shopNowUrl}>
            <Button tabIndex="-1">{shopNowText}</Button>
          </LinkTag>
        </Row>
      </Col>
    </Row>
  );
};

BrandFeaturedProduct.propTypes = {
  productImagePosition: string,
  title: string,
  subtext: string,
  image: object,
  shopNowUrl: string,
  subTitle: string,
  shopNowText: string,
};

BrandFeaturedProduct.defaultProps = {
  productImagePosition: 'right',
  title: '',
  subtext: '',
  image: null,
  shopNowUrl: '',
  subTitle: '',
  shopNowText: '',
};

export default BrandFeaturedProduct;
