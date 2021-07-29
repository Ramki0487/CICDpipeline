/*
 * File: HeroBanner.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 5th 2021, 11:47:25 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 17th 2021 3:03:21 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsButton from '@Components/cms/components/cmsButton/CmsButton';
import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import { Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { object, string } from 'prop-types';
import styles from './HeroBanner.module.scss';

const HeroBanner = ({
  heroImage,
  title,
  caption,
  buttonFindYourFit,
  buttonShopNow,
  captionFooter,
}) => {
  if (!heroImage) return null;

  return (
    <Row justifyContent="center" className={styles.heroBanner}>
      <CmsImage
        desktopSize="1920x550"
        mobileSize="575x490"
        settings={{ q: 90, fit: 'scale' }}
        {...heroImage?.fields}
        loading="eager"
      />
      <Row className={styles.heroBannerOverlay}>
        <Container>
          <Row className={styles.heroBannerOverlayInner}>
            <Row className={styles.heroBannerHeader} alignSelf="flex-start">
              <Typography variant="h1">{title}</Typography>
              <Typography variant="h4">{caption}</Typography>

              {buttonFindYourFit && (
                <CmsButton {...buttonFindYourFit.fields} theme="rr-skyblue" size="medium" />
              )}
            </Row>
            <Row className={styles.heroBannerFooter} alignSelf="flex-end" alignItems="center">
              <Typography variant="h4">{captionFooter}</Typography>

              {buttonShopNow && <CmsButton {...buttonShopNow.fields} theme="white" size="medium" />}
            </Row>
          </Row>
        </Container>
      </Row>
    </Row>
  );
};

HeroBanner.propTypes = {
  heroImage: object.isRequired,
  title: string,
  caption: string,
  buttonFindYourFit: object,
  buttonShopNow: object,
  captionFooter: string,
};

HeroBanner.defaultProps = {
  heroContent: null,
  title: '',
  caption: '',
  buttonFindYourFit: null,
  buttonShopNow: null,
  captionFooter: '',
};

export default HeroBanner;
