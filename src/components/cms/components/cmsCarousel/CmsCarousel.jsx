/*
 * File: CmsCarousel.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 26th 2021, 1:46:35 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsButton from '@Components/cms/components/cmsButton/CmsButton';
import CmsCard from '@Components/cms/components/cmsCard/CmsCard';
import CmsHtmlContent from '@Components/cms/components/cmsHtmlContent/CmsHtmlContent';
import Card from '@RRS-UI/card/Card';
import { Row } from '@RRS-UI/layout';
import Slider from '@RRS-UI/slider/Slider';
import Typography from '@RRS-UI/typography/Typography';
import { array, number, object, string } from 'prop-types';
import styles from './CmsCarousel.module.scss';

const sizeMapping = {
  medium: {
    desktopSize: '230',
    mobileSize: '103x103',
  },
  large: {
    desktopSize: '350',
    mobileSize: '263x263',
  },
};

/**
 * Component - CMS Carousel
 * @param {string} title - Carousel Title
 * @param {array} items - Carousel Items
 * @param {object} button - Button to show along with title
 * @param {string} size - Size of the carousel images
 * @param {string} textAlign - Controls Text alignment in carousel
 * @param {number} spacingStripe - Applies margin top and bottom
 * @returns
 */
const CmsCarousel = ({ title, items, button, size, textAlign, spacingStripe }) => {
  if (!items?.length) return null;

  return (
    <Row
      rowGap={20}
      className={styles.carousel}
      style={{ marginTop: `${spacingStripe}px`, marginBottom: `${spacingStripe}px` }}
    >
      {title && (
        <Row alignItems="center" className={styles.carouselHead}>
          <Typography variant="h2" className={styles.carouselHeadTitle}>
            {title}
          </Typography>

          {button?.fields?.text && <CmsButton {...button.fields} theme="rr-iceblue" />}
        </Row>
      )}

      <Slider>
        {items?.map((item, index) => {
          return (
            <Card
              key={`${item?.sys?.id}_${index}`}
              className={styles.carouselItem}
              textAlign={textAlign}
            >
              {item?.fields?.bodyContent ? (
                <CmsHtmlContent
                  {...item?.fields}
                  className={styles[`carousel-item-content-${size}`]}
                />
              ) : (
                <CmsCard
                  {...sizeMapping[size]}
                  {...item?.fields}
                  className={styles[`carousel-item-card-${size}`]}
                  titleVariant="h5"
                />
              )}
            </Card>
          );
        })}
      </Slider>
    </Row>
  );
};

CmsCarousel.propTypes = {
  items: array.isRequired,
  title: string,
  shopAllLink: string,
  button: object,
  size: string,
  textAlign: string,
  spacingStripe: number,
};

CmsCarousel.defaultProps = {
  title: '',
  button: null,
  size: 'large',
  textAlign: 'left',
  spacingStripe: 0,
};

export default CmsCarousel;
