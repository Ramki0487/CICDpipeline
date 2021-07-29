/*
 * File: BrandLanding.jsx
 * Project: webapp-rrs
 * Created Date: Sunday, June 27th 2021, 2:22:04 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsHtmlContent from '@Components/cms/components/cmsHtmlContent/CmsHtmlContent';
import { Container } from '@RRS-UI/layout';
import { array, object, string } from 'prop-types';
import BrandBanner from './brandBanner/BrandBanner';

/**
 * Component - Brand Banner
 * @param {string} brandName - Name of the Brand
 * @param {string} title - Brand Title
 * @param {string} description -Brand Description
 * @param {object} brandLogo - Brand Logo
 * @param {object} bannerImage - Brand Banner
 * @param {object} topProducts - Top Selling Products
 * @returns
 */
const BrandLanding = ({ brandName, title, description, brandLogo, bannerImage, topProducts }) => {
  return (
    <>
      <BrandBanner
        brandName={brandName}
        title={title}
        description={description}
        brandLogo={brandLogo}
        bannerImage={bannerImage}
      />
      <Container>
        {topProducts?.map((item, index) => (
          <CmsHtmlContent key={`${item?.sys?.id}_${index}`} {...item?.fields} />
        ))}
      </Container>
    </>
  );
};

BrandLanding.propTypes = {
  brandName: string,
  title: string,
  description: string,
  brandLogo: object,
  bannerImage: object,
  topProducts: array,
};

BrandLanding.defaultProps = {
  brandName: '',
  title: '',
  description: '',
  brandLogo: null,
  bannerImage: null,
  topProducts: null,
};

export default BrandLanding;
