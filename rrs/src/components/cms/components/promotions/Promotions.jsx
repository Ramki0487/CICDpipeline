/*
 * File: Promotions.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 5th 2021, 12:16:46 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 28th 2021 4:30:34 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array } from 'prop-types';
import styles from './Promotions.module.scss';

const Promotions = ({ promotions }) => {
  if (!promotions?.length) return null;

  return (
    <Row columnGutter={15} rowGap={30} className={styles.promotionBanner}>
      {promotions?.map((promotion, index) => {
        return (
          <Col key={`${promotion?.sys?.id}_${index}`} md={4}>
            <Card
              image={
                <LinkTag href={promotion?.fields?.link}>
                  <CmsImage
                    desktopSize="700"
                    mobileSize="375"
                    {...promotion?.fields?.image.fields}
                    className={styles.promotionBannerImg}
                  />
                </LinkTag>
              }
              title={
                <LinkTag href={promotion?.fields?.link}>
                  <Typography variant="h3">{promotion?.fields?.title}</Typography>
                </LinkTag>
              }
            />
          </Col>
        );
      })}
    </Row>
  );
};

Promotions.propTypes = {
  promotions: array,
};

export default Promotions;
