/*
 * File: SmallBrandCategory.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import { array } from 'prop-types';
import styles from './SmallBrandCategory.module.scss';

const SmallBrandCategory = ({ promotions }) => {
  if (!promotions) return null;

  return (
    <Slider className={styles.promotionSlider}>
      {promotions?.map((products) => {
        return (
          <Card
            key={products?.sys?.id}
            image={
              <LinkTag href={products?.fields?.link}>
                <Image
                  src={products?.fields?.image?.fields?.desktop?.fields?.file?.url}
                  alt={products?.fields?.image?.fields?.desktop?.fields?.title}
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
  );
};

SmallBrandCategory.propTypes = {
  promotions: array,
};

export default SmallBrandCategory;
