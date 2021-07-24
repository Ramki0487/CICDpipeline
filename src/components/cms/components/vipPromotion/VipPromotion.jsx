/*
 * File: VipPromotion.jsx
 * Project: webapp-rrs
 * Created Date: Sunday, March 14th 2021, 10:49:06 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 28th 2021 4:30:34 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Image from '@RRS-UI/image/Image';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, object, string } from 'prop-types';
import styles from './VipPromotion.module.scss';

const VipPromotion = (props) => {
  if (!props) return null;

  const {
    image,
    customers,
    vipBenefits,
    learnMoreLink,
    joinTodayLink,
    joinTodayText,
    caption,
    subText,
  } = props;

  return (
    <Row
      style={{ backgroundImage: `url(${image?.fields?.desktop?.fields?.file?.url})` }}
      className={styles.vipPromotion}
    >
      <Container className={styles.vipPromotionContainer}>
        <Row>
          <Col alignSelf="center" className={styles.vipPromotionLeft} sm={12} lg={6}>
            <Typography variant="h1">{caption}</Typography>
            <Typography variant="p">{subText}</Typography>
            <LinkTag href={joinTodayLink}>
              <Button size="medium" tabIndex="-1">
                {joinTodayText}
              </Button>
            </LinkTag>
          </Col>
          <Col>
            {customers?.length > 0 && (
              <Row className={styles.vipPromotionCustomerBlock}>
                {customers.map((item, index) => {
                  return (
                    <Col key={`${item?.sys?.id}_${index}`} className={styles.vipPromotionCustomer}>
                      <Image
                        src={item?.fields?.image?.fields?.desktop?.fields?.file?.url}
                        alt={item?.fields?.image?.fields?.desktop?.fields?.title}
                      />
                      <Col className={styles.vipPromotionCustomerOverlay}>
                        <Typography variant="h4">{item?.fields?.caption}</Typography>
                        <Typography variant="small">{item?.fields?.subText}</Typography>
                        {item?.fields?.customerBenefits?.length > 0 && (
                          <Row>
                            {item?.fields?.customerBenefits?.map((item, index) => {
                              return (
                                <Col
                                  key={`${item?.sys?.id}_${index}`}
                                  xs={12}
                                  md={6}
                                  lg={12}
                                  xl={6}
                                >
                                  <Row className={styles.vipPromotionCustomerOverlayBenefits}>
                                    <Image
                                      src={item?.fields?.icon?.fields?.image?.fields?.file?.url}
                                      alt={item?.fields?.icon?.fields?.image?.fields?.title}
                                    />
                                    <Col>
                                      <Typography variant="small">
                                        {item?.fields?.caption}
                                      </Typography>
                                      <Typography variant="small">
                                        {item?.fields?.subText}
                                      </Typography>
                                    </Col>
                                  </Row>
                                </Col>
                              );
                            })}
                          </Row>
                        )}
                      </Col>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Col>
          {vipBenefits?.length > 0 && (
            <Row className={styles.vipPromotionBenefits} justifyContent="center">
              {vipBenefits.map((item, index) => {
                return (
                  <Col
                    key={`${item?.sys?.id}_${index}`}
                    className={styles.vipPromotionBenefitsBlock}
                    xs={6}
                    md={4}
                    xl={2}
                  >
                    <Row className={styles.vipPromotionBenefitsBlockContent}>
                      <Typography variant="h2">{item?.fields?.caption}</Typography>
                      <Typography variant="small">{item?.fields?.subText}</Typography>
                    </Row>
                  </Col>
                );
              })}
              <Col className={styles.vipPromotionBenefitsBlock} xs={6} md={4} xl={2}>
                <Row className={styles.vipPromotionBenefitsBlockContent}>
                  <Typography variant="h3">+ MORE</Typography>
                  <LinkTag href={learnMoreLink}>
                    <Button tabIndex="-1">Learn More</Button>
                  </LinkTag>
                </Row>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </Row>
  );
};

VipPromotion.propTypes = {
  image: object,
  customers: array,
  vipBenefits: array,
  learnMoreLink: string,
  joinTodayLink: string,
  joinTodayText: string,
  subText: string,
  caption: string,
};

export default VipPromotion;
