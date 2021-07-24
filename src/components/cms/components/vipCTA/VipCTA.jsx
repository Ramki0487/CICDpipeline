/*
 * File: VipCTA.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 8:06:55 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Sunday July 18th 2021 5:47:43 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { VIP_MEMBERSHIP_IN_CART } from '@App/constants/StorageKeys';
import LinkTag from '@Components/linkTag/LinkTag';
import VipJoinNow from '@Components/vipJoinNow/VipJoinNow';
import Button from '@RRS-UI/button/Button';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import storage from '@Utils/Storage';
import { string } from 'prop-types';
import { useState } from 'react';
import styles from './VipCTA.module.scss';

/**
 * Component VIP CTA
 * @param {object} props - Props to render CTA
 * @returns
 */
const VipCTA = (props) => {
  if (!props) return null;

  const { caption, joinTodayText, learnMoreLink } = props;
  const [isVipMemberShipInCart, setIsVipMemberShipInCart] = useState(
    storage.getItem(VIP_MEMBERSHIP_IN_CART)
  );
  const onMemberShipAdded = () => setIsVipMemberShipInCart(true);

  if (isVipMemberShipInCart) return null;
  return (
    <Row className={styles.cta}>
      <Container>
        <Row alignItems="center" rowGap={15}>
          <Col>
            <Typography variant="h2">{caption}</Typography>
          </Col>

          <Col lg={6} xl={5}>
            <Row columnGap={15} rowGap={15} className={styles.ctaBtn} justifyContent="flex-start">
              <VipJoinNow onMemberShipAdded={onMemberShipAdded}>
                <Button size="medium" tabIndex="-1" className={styles.ctaBtnJoin}>
                  {joinTodayText}
                </Button>
              </VipJoinNow>

              <LinkTag href={learnMoreLink}>
                <Button className={styles.ctaBtnMore} tabIndex="-1">
                  Learn More
                </Button>
              </LinkTag>
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

VipCTA.propTypes = {
  learnMoreLink: string,
  joinTodayText: string,
  caption: string,
};

VipCTA.defaultProps = {
  learnMoreLink: null,
  joinTodayText: '',
  caption: '',
};

export default VipCTA;
