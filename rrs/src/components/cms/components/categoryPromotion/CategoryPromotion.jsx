/*
 * File: CategoryPromotion.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 12th 2021, 3:10:37 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 28th 2021 4:30:34 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array } from 'prop-types';
import styles from './CategoryPromotion.module.scss';

const CategoryPromotion = ({ categories }) => {
  if (!categories?.length) return null;

  return (
    <Row rowGap={10} columnGutter={10} className={styles.categoryPromotion}>
      {categories?.map((category, index) => {
        return (
          <Col key={`${category?.sys?.id}_${index}`} xs={4} lg={2}>
            <Card
              image={
                <LinkTag href={category?.fields?.link}>
                  <Image
                    src={`${category?.fields?.image?.fields?.desktop?.fields?.file?.url}?w=230&h=230`}
                    alt={category?.fields?.image?.fields?.desktop?.fields?.title}
                  />
                </LinkTag>
              }
              title={
                <LinkTag href={category?.fields?.link}>
                  <Typography variant="h5">{category?.fields?.title}</Typography>
                </LinkTag>
              }
              alignItems="center"
            />
          </Col>
        );
      })}
    </Row>
  );
};

CategoryPromotion.propTypes = {
  categories: array,
};

export default CategoryPromotion;
