/*
 * File: BrandNewProduct.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import { Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import { array, string } from 'prop-types';
import styles from './BrandNewProduct.module.scss';

const BrandNewProducts = ({ title, shopAllNewArrivalUrl, promotions, link }) => {
  if (!promotions) return null;

  return (
    <Row className={styles.brandProductContainer}>
      <Row alignItems="center" className={styles.brandProductContent}>
        <Typography variant="h3" className={styles.brandProductTitle}>
          {title}
        </Typography>
        <LinkTag href={link}>
          <Button
            className={styles.brandProductButton}
            size="large"
            theme="rr-iceblue"
            tabIndex="-1"
          >
            {shopAllNewArrivalUrl}
          </Button>
        </LinkTag>
      </Row>

      <Slider className={styles.brandProductSlider}>
        {promotions?.map((products) => {
          return (
            <Card
              key={products?.sys?.id}
              image={
                <LinkTag href={products?.fields?.link}>
                  <Image
                    src={products?.fields?.image?.fields?.desktop?.fields?.file?.url}
                    alt={products?.fields?.image?.fields?.title}
                  />
                </LinkTag>
              }
              title={
                <LinkTag href={products?.fields?.link}>
                  <Typography variant="h5">{products?.fields?.title}</Typography>
                </LinkTag>
              }
            />
          );
        })}
      </Slider>
    </Row>
  );
};

BrandNewProducts.propTypes = {
  title: string,
  shopAllNewArrivalUrl: string,
  promotions: array,
  link: string,
};

BrandNewProducts.defaultProps = {
  title: '',
  shopAllNewArrivalUrl: '',
  promotions: [],
  link: null,
};

export default BrandNewProducts;
