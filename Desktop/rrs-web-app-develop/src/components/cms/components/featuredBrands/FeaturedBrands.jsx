/*
 * File: FeaturedBrands.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

// import LinkTag from '@Components/linkTag/LinkTag';
// import Card from '@RRS-UI/card/Card';
// import Image from '@RRS-UI/image/Image';
import CmsCard from '@Components/cms/components/cmsCard/CmsCard';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, string } from 'prop-types';
import styles from './FeaturedBrands.module.scss';

const FeaturedBrands = ({ title, subTitle, brands }) => {
  if (!brands?.length) return null;

  return (
    <div className={styles.featureBrand}>
      <Row>
        <Col>
          <Typography variant="h1" className={styles.featureBrandTitle}>
            {title}
          </Typography>
          <Typography variant="h2" className={styles.featureBrandSubTitle}>
            {subTitle}
          </Typography>
        </Col>
      </Row>
      <Row className={styles.featureBrandContainer} columnGutter={15} rowGap={30}>
        {brands?.map((brandItem, index) => {
          return (
            <Col key={`${brandItem?.sys?.id}_${index}`}>
              {/* <Card
                theme="white"
                type="circle"
                className={styles.featureBrandImages}
                image={
                  <LinkTag href={brandItem?.fields?.link}>
                    <Image
                      src={brandItem?.fields?.image?.fields?.desktop?.fields?.file?.url}
                      alt={brandItem?.fields?.image?.fields?.desktop?.fields?.title}
                    />
                  </LinkTag>
                }
              /> */}
              <CmsCard
                {...brandItem?.fields}
                desktopSize="230x230"
                mobileSize="103x103"
                className={styles.featureBrandImages}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

FeaturedBrands.propTypes = {
  title: string,
  subTitle: string,
  brands: array,
};

export default FeaturedBrands;
