/*
 * File: BrandCategory.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, May 13th 2021, 11:46:05 am
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import { array, object, string } from 'prop-types';
import styles from './BrandCategory.module.scss';

const BrandCategory = ({ caption, image, shopAll, promotions }) => {
  if (!promotions) return null;

  return (
    <Row className={styles.brandCategory}>
      <Col>
        <Typography variant="h3" className={styles.brandCategoryCaption}>
          {caption}
        </Typography>
        <Row>
          <Col noflex className={`${styles.brandCategoryBlocks} ${styles.brandCategoryImage} `}>
            <LinkTag href={shopAll?.fields?.link}>
              <Image
                src={image?.fields?.desktop?.fields?.file?.url}
                alt={image?.fields?.desktop?.fields?.title}
              />
            </LinkTag>
          </Col>
          <Typography
            variant="h2"
            className={`${styles.brandCategoryTitle} ${styles.brandCategoryBlocks}`}
          >
            {caption}
          </Typography>
          <Col className={`${styles.shopAll} ${styles.brandCategoryBlocks}`}>
            <Card
              image={
                <LinkTag href={shopAll?.fields?.link}>
                  <Image
                    src={shopAll?.fields?.backgroundImage?.fields?.desktop?.fields?.file?.url}
                    alt={shopAll?.fields?.backgroundImage?.fields?.desktop?.fields?.title}
                  />
                </LinkTag>
              }
              title={
                <LinkTag href={shopAll?.fields?.link}>
                  <Typography variant="h5">{shopAll?.fields?.caption}</Typography>
                </LinkTag>
              }
              className={styles.shopAllTitle}
              theme="white"
              justifyContent="center"
            />
          </Col>
          <Col className={`${styles.shopAll} ${styles.brandCategoryCaption}`}>
            <Card
              image={
                <LinkTag href={shopAll?.fields?.link}>
                  <Image
                    src={shopAll?.fields?.backgroundImage?.fields?.desktop?.fields?.file?.url}
                    alt={shopAll?.fields?.backgroundImage?.fields?.desktop?.fields?.title}
                  />
                </LinkTag>
              }
              theme="white"
              title={
                <LinkTag href={shopAll?.fields?.link}>
                  <Typography variant="h5">{shopAll?.fields?.caption}</Typography>
                </LinkTag>
              }
              justifyContent="center"
              className={styles.shopeAllMobile}
            />
          </Col>
          <Col xs={8} md={7}>
            <Slider className={styles.sliderItem}>
              {promotions?.map((promotion) => {
                return (
                  <Card
                    key={promotion?.sys?.id}
                    image={
                      <LinkTag href={promotion?.fields?.link}>
                        <Image
                          src={promotion?.fields?.image?.fields?.desktop?.fields?.file?.url}
                          alt={promotion?.fields?.image?.fields?.desktop?.fields?.title}
                        />
                      </LinkTag>
                    }
                    title={
                      <LinkTag href={promotion?.fields?.link}>
                        <Typography variant="h5">{promotion?.fields?.title}</Typography>
                      </LinkTag>
                    }
                    justifyContent="center"
                  />
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

BrandCategory.propTypes = {
  caption: string,
  image: object,
  promotions: array,
  shopAll: object,
};

export default BrandCategory;
