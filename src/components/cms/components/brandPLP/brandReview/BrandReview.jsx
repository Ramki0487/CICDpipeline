/*
 * File: BrandReview.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Brooks from '@Assets/images/brooks.png';
import Card from '@RRS-UI/card/Card';
import { Col, Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import styles from './BrandReview.module.scss';

const BrandReview = () => {
  return (
    <Row className={styles.reviewContainer}>
      <Typography variant="h3" className={styles.reviewContainerTitle}>
        Top Brand Name Reviews
      </Typography>
      <Slider className={styles.reviewSlider}>
        <Row className={styles.moduleBox}>
          <Col>
            <Row justifyContent="space-around" className={styles.reviewProduct}>
              <Col xs={4}>
                <Card imageProps={{ src: Brooks }} />
              </Col>
              <Col xs={6}>
                <Typography variant="h5" className={styles.reviewProductTitle}>
                  Product Name Lorem Ipsum Dolor Sit
                </Typography>
                <Typography variant="p">Avg. rating 4.8 / 5</Typography>
              </Col>
            </Row>
            <Row className={styles.reviewDescription}>
              <Col>
                <Typography variant="h4" className={styles.reviewDescriptionSubText}>
                  REVIEW TITLE LOREM IPSUM
                </Typography>

                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus faucibus
                  magna, a tincidunt lorem pretium in. Praesent semper dui neque, quis volutpat est
                  fermentum eu. Suspendisse sit amet leo ut lacus scelerisque vehicula sit amet ut
                  massa. Suspendisse non lacus quam. Nullam interdum commodo lectus, sed aliquet
                  nibh molestie nec. Donec odio orci, feugiat id interdum et, lobortis eu dolor..
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
      </Slider>
    </Row>
  );
};

export default BrandReview;
