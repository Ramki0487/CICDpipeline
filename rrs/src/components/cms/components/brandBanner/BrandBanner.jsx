/*
 * File: BrandBanner.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, June 10th 2021, 4:31:07 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import LinkTag from '@Components/linkTag/LinkTag';
import Breadcrumb from '@RRS-UI/breadcrumb/Breadcrumb';
import Card from '@RRS-UI/card/Card';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { object, string } from 'prop-types';
import styles from './BrandBanner.module.scss';

/**
 * Component - BrandBanner
 * @param {string} brandName - Brand Name
 * @param {string} title - Brand Title
 * @param {string} description -Brand Description
 * @param {object} brandLogo - Brand Logo
 * @param {object} bannerImage - Brand Banner
 * @returns
 */
const BrandBanner = ({ brandName, title, description, brandLogo, bannerImage }) => {
  return (
    <Row className={styles.brand}>
      <Col
        className={styles.brandBanner}
        lg={7}
        xl={8}
        style={{
          backgroundImage: `url(${bannerImage?.fields?.desktop?.fields?.file?.url})`,
        }}
      />
      <Col lg={5} xl={4} className={styles.brandContent}>
        <Container>
          <Breadcrumb LinkTag={LinkTag} current="Brands" theme="white" />
          <Typography className={styles.brandContentTitle} variant="h1">
            {brandName}
          </Typography>
          <Typography className={styles.brandContentCaption} variant="p">
            {title}
          </Typography>
          <Typography className={styles.brandContentDescription} variant="p">
            {description}
          </Typography>

          <Card className={styles.brandContentLogo} type="circle">
            <CmsImage desktopSize="175x175" {...brandLogo?.fields} />
          </Card>
        </Container>
      </Col>
    </Row>
  );
};

//Props validation
BrandBanner.propTypes = {
  title: string,
  brandName: string,
  description: string,
  brandLogo: object,
  bannerImage: object,
};

BrandBanner.defaultProps = {
  brandName: '',
  title: '',
  description: '',
  brandLogo: null,
  bannerImage: null,
  topProducts: null,
};

export default BrandBanner;
