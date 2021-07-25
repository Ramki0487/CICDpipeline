/*
 * File: BrandPromotion.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 12th 2021, 3:46:05 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, string } from 'prop-types';
import styles from './BrandPromotion.module.scss';

const BrandPromotion = ({ brands, title, shopAllBrandsLink }) => {
  if (!brands?.length) return null;

  return (
    <Row className={styles.brandPromotion} rowGap={30}>
      <Row alignItems="center">
        <Typography variant="h2" className={styles.brandPromotionHeading}>
          {title}
        </Typography>

        <LinkTag href={shopAllBrandsLink}>
          <Button theme="rr-iceblue" tabIndex="-1">
            Shop All
          </Button>
        </LinkTag>
      </Row>

      <Row rowGap={10} columnGutter={10}>
        {brands?.map((brand, index) => {
          return (
            <Col
              key={`${brand?.sys?.id}_${index}`}
              className={styles.brandPromotionItem}
              xs={4}
              lg={2}
            >
              <Card
                image={
                  <LinkTag href={brand?.fields?.link}>
                    <Image
                      src={`${brand?.fields?.image?.fields?.desktop?.fields?.file?.url}?w=200&h=200`}
                      alt={brand?.fields?.image?.fields?.desktop?.fields?.title}
                    />
                  </LinkTag>
                }
                type="circle"
              />
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

BrandPromotion.propTypes = {
  brands: array,
  title: string,
  shopAllBrandsLink: string,
};

export default BrandPromotion;
