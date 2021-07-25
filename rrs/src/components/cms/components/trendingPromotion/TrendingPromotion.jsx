/*
 * File: TrendingPromotion.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 12th 2021, 4:06:51 am
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
import { Container, Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import { array, string } from 'prop-types';
import styles from './TrendingPromotion.module.scss';

const TrendingPromotion = ({ promotions, title, shopAllLink }) => {
  if (!promotions?.length) return null;

  return (
    <Container className={styles.trendingPromotionContainer}>
      <Row className={styles.trendingPromotion} rowGap={20}>
        <Row alignItems="center">
          <Typography variant="h2" className={styles.trendingPromotionHeading}>
            {title}
          </Typography>

          <LinkTag href={shopAllLink}>
            <Button theme="rr-iceblue" tabIndex="-1">
              Shop All
            </Button>
          </LinkTag>
        </Row>

        <Slider className={styles.trendingPromotionSliderItem}>
          {promotions?.map((promotion, index) => {
            return (
              <Card
                key={`${promotion?.sys?.id}_${index}`}
                imageProps={{
                  src: promotion?.fields?.image?.fields?.image?.fields?.file?.url,
                  alt: promotion?.fields?.image?.fields?.image?.fields?.title,
                }}
                LinkTag={LinkTag}
                href={promotion?.fields?.link}
                title={
                  <LinkTag href={promotion?.fields?.link}>
                    <Typography variant="h5">{promotion?.fields?.title}</Typography>
                  </LinkTag>
                }
              />
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
};

TrendingPromotion.propTypes = {
  promotions: array,
  title: string,
  shopAllLink: string,
};

export default TrendingPromotion;
