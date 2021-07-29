/*
 * File: cmsComponentMapping.js
 * Project: webapp-rrs
 * Created Date: Wednesday, July 21st 2021, 5:50:19 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 8:02:31 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import dynamic from 'next/dynamic';

/**
 * Map all the cms components here to dynamically display content from cms
 * In the JSON key must match with contentType.id from contentful cms
 */

/** Brand Mapping */
const brandCategory = dynamic(() => import('./components/brandPLP/brandCategory/BrandCategory'));
const brandNewProducts = dynamic(() =>
  import('./components/brandPLP/brandNewProduct/BrandNewProduct')
);

const brandRunTests = dynamic(() => import('./components/brandPLP/brandRunTest/BrandRunTest'));

export default {
  vipPromotion: dynamic(() => import('./components/vipPromotion/VipPromotion')),
  vipProgramBanner: dynamic(() => import('./components/vipCTA/VipCTA'), { ssr: false }),
  featuredBrands: dynamic(() => import('./components/featuredBrands/FeaturedBrands')),
  brandBanner: dynamic(() => import('./components/brandBanner/BrandBanner')),
  brandCategories: brandCategory,
  brandNewProducts: brandNewProducts,
  brandFeaturedProduct: dynamic(() =>
    import('./components/brandFeaturedProduct/BrandFeaturedProduct')
  ),
  brandRunTests: brandRunTests,
  smallBrandCategories: dynamic(() =>
    import('./components/smallBrandCategories/SmallBrandCategories')
  ),
  seoMetadata: dynamic(() => import('./components/seoMetaData/SeoMetaData')),
  // brandLanding: dynamic(() => import('./components/brandLanding/BrandLanding')),

  htmlContent: dynamic(() => import('./components/cmsHtmlContent/CmsHtmlContent')),
  heroBanner: dynamic(() => import('./components/heroBanner/HeroBanner')),
  rrsImage: dynamic(() => import('./components/cmsImage/CmsImage')),
  button: dynamic(() => import('./components/cmsButton/CmsButton')),
  carousel: dynamic(() => import('./components/cmsCarousel/CmsCarousel')),
  card: dynamic(() => import('./components/cmsCard/CmsCard')),
  promoBanner: dynamic(() => import('./components/cmsPromoBanner/CmsPromoBanner')),
  topSellingProducts: dynamic(() =>
    import('./components/cmsTopSellingProducts/CmsTopSellingProducts')
  ),
  column: dynamic(() => import('./components/cmsColumn/CmsColumn')),
  rrsVideo: dynamic(() => import('./components/cmsVideo/CmsVideo')),
  richTextContent: dynamic(() => import('./components/cmsRichTextContent/CmsRichTextContent')),
  vipJoinNowButton: dynamic(() => import('./components/cmsVIPJoinNowButton/CmsVIPJoinNowButton')),
};
