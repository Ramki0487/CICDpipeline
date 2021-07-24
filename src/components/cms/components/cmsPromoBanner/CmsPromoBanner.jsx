/*
 * File: CmsPromoBanner.jsx
 * Project: webapp-rrs
 * Created Date: Sunday, June 27th 2021, 10:48:08 pm
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
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, number, object, string } from 'prop-types';
import styles from './CmsPromoBanner.module.scss';

/**
 * Function - RenderColumn
 * @param {object} bannerContent - Banner content to render
 * @param {string} desktopSize - Banner WidthxHeight for desktop
 * @param {string} mobileSize - Banner WidthxHeight for mobile
 * @param {string} titleVariant - Banner Card Title Type
 * @returns
 */
const RenderColumn = ({ bannerContent, desktopSize, mobileSize, titleVariant }) => {
  const contentId = bannerContent?.sys?.contentType?.sys?.id;
  if (contentId === 'htmlContent') {
    return <CmsHtmlContent {...bannerContent.fields} />;
  } else if (contentId === 'card') {
    return (
      <CmsCard
        {...bannerContent.fields}
        desktopSize={desktopSize}
        mobileSize={mobileSize}
        titleVariant={titleVariant}
        className={styles.promoBannerCard}
      />
    );
  }

  // Unknown ContentType
  return null;
};

RenderColumn.propTypes = {
  bannerContent: object.isRequired,
  desktopSize: string.isRequired,
  mobileSize: string.isRequired,
  titleVariant: string.isRequired,
};

/**
 * Component - CmsPromoBanner
 * @param {string} title - Banner Title
 * @param {object} button - Button fields
 * @param {array} banner1x2 - Banner with 2 columns
 * @param {array} banner1x3 - Banner with 3 columns
 * @param {array} banner1x6 - Banner with 6 columns
 * @param {number} spacingStripe - Applies margin top and bottom
 * @returns
 */
const CmsPromoBanner = ({ title, button, banner1x2, banner1x3, banner1x6, spacingStripe }) => {
  return (
    <Row
      rowGap={30}
      style={{ marginTop: `${spacingStripe}px`, marginBottom: `${spacingStripe}px` }}
    >
      {title && (
        <Row alignItems="center">
          <Typography variant="h2" className={styles.promoBannerTitle}>
            {title}
          </Typography>

          {button?.fields?.text && <CmsButton {...button.fields} theme="rr-iceblue" />}
        </Row>
      )}

      {/* Banner 1x2 */}
      {banner1x2?.length > 0 && (
        <Row columnGutter={15} rowGap={30}>
          {banner1x2.map((banner, index) => (
            <Col key={`${banner?.sys?.id}_${index}`} lg={6}>
              <RenderColumn
                bannerContent={banner}
                titleVariant="h3"
                desktopSize="812x295"
                mobileSize="355x130"
              />
            </Col>
          ))}
        </Row>
      )}

      {/* Banner 1x3 */}
      {banner1x3?.length > 0 && (
        <Row columnGutter={15} rowGap={30}>
          {banner1x3.map((banner, index) => (
            <Col key={`${banner?.sys?.id}_${index}`} md={4}>
              <RenderColumn
                bannerContent={banner}
                titleVariant="h3"
                desktopSize="536x295"
                mobileSize="355x195"
              />
            </Col>
          ))}
        </Row>
      )}

      {/* Banner 1x6 */}
      {banner1x6?.length > 0 && (
        <Row columnGutter={15} rowGap={30}>
          {banner1x6.map((banner, index) => (
            <Col key={`${banner?.sys?.id}_${index}`} xs={4} lg={2}>
              <RenderColumn
                bannerContent={banner}
                titleVariant="h5"
                desktopSize="230x230"
                mobileSize="103x103"
              />
            </Col>
          ))}
        </Row>
      )}
    </Row>
  );
};

CmsPromoBanner.propTypes = {
  title: string,
  button: object,
  banner1x2: array,
  banner1x3: array,
  banner1x6: array,
  spacingStripe: number,
};

CmsPromoBanner.defaultProps = {
  title: null,
  button: null,
  banner1x2: null,
  banner1x3: null,
  banner1x6: null,
  spacingStripe: 0,
};

export default CmsPromoBanner;
