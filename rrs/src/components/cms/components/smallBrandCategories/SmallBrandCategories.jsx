/*
 * File: SmallBrandCategories.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 12th 2021, 4:21:44 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
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
import { Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import { array } from 'prop-types';
import styles from './SmallBrandCategories.module.scss';

const SmallBrandCategories = ({ promotions }) => {
  if (!promotions?.length) return null;

  return (
    <Row>
      <Slider className={styles.promotionSlider}>
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
            />
          );
        })}
      </Slider>
    </Row>
  );
};

SmallBrandCategories.propTypes = {
  promotions: array,
};

export default SmallBrandCategories;
