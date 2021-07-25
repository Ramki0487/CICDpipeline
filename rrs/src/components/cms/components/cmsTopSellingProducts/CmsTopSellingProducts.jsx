/*
 * File: CmsTopSellingProducts.jsx
 * Project: webapp-rrs
 * Created Date: Monday, June 28th 2021, 5:57:08 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsCarousel from '@Components/cms/components/cmsCarousel/CmsCarousel';
import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { number, object, string } from 'prop-types';
import styles from './CmsTopSellingProducts.module.scss';

/**
 * Component - CmsTopSellingProducts
 * @param {string} brandName - Name of the Brand
 * @param {string} title - Brand Title
 * @param {string} description -Brand Description
 * @param {object} brandLogo - Brand Logo
 * @param {object} bannerImage - Brand Banner
 * @param {object} topProducts - Top Selling Products
 * @param {number} spacingStripe - Applies margin top and bottom
 * @returns
 */
const CmsTopSellingProducts = ({
  category,
  shopAllText,
  shopAllTitle,
  shopAllLink,
  carousel,
  spacingStripe,
}) => {
  return (
    <Row
      rowGap={15}
      flexWrap="nowrap"
      alignItems="flex-start"
      flexDirection="column"
      className={styles.topSelling}
      style={{ marginTop: `${spacingStripe}px`, marginBottom: `${spacingStripe}px` }}
    >
      {category && (
        <Col className={styles.topSellingCategory} noflex>
          <LinkTag href={category?.fields?.link}>
            <CmsImage
              desktopSize="230x275"
              {...category?.fields?.image?.fields}
              className={styles.topSellingCategoryImage}
            />
            <Typography variant="h3">{category?.fields?.title}</Typography>
          </LinkTag>
        </Col>
      )}

      <Row flexWrap="nowrap" alignItems="center">
        {shopAllText && (
          <Col className={styles.topSellingShopAll} noflex>
            <LinkTag href={shopAllLink}>
              <Card
                theme="iceblue"
                type="circle"
                alignItems="center"
                textAlign="center"
                className={styles.topSellingShopAllBtn}
              >
                <Typography variant="h3">{shopAllText}</Typography>
              </Card>
            </LinkTag>
            <LinkTag href={shopAllLink}>
              <Typography variant="h4">{shopAllTitle}</Typography>
            </LinkTag>
          </Col>
        )}

        {carousel && (
          <Col>
            <CmsCarousel {...carousel?.fields} />
          </Col>
        )}
      </Row>
    </Row>
  );
};

CmsTopSellingProducts.propTypes = {
  shopAllLink: string,
  shopAllTitle: string,
  shopAllText: string,
  category: object,
  carousel: object,
  spacingStripe: number,
};

CmsTopSellingProducts.defaultProps = {
  shopAllLink: '',
  shopAllTitle: '',
  shopAllText: '',
  category: null,
  carousel: null,
  spacingStripe: 0,
};

export default CmsTopSellingProducts;
