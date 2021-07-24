/*
 * File: SeoMetaData.jsx
 * Project: webapp-rrs
 * Created Date: Monday, June 14th 2021, 3:25:39 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday June 20th 2021 2:27:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { object, string } from 'prop-types';
import CmsHtmlContent from '../cmsHtmlContent/CmsHtmlContent';
import styles from './SeoMetaData.module.scss';

const SeoMetaData = ({ title, seoContent }) => {
  if (!seoContent) return null;

  return (
    <Row className={styles.seo}>
      <Col noflex>
        <Typography variant="h2">{title}</Typography>
      </Col>
      <Col noflex className={styles.seoContent}>
        <CmsHtmlContent bodyContent={seoContent} />
      </Col>
    </Row>
  );
};

SeoMetaData.propTypes = {
  title: string,
  seoContent: object,
};

export default SeoMetaData;
