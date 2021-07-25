/*
 * File: become-a-vendor.js
 * Project: webapp-rrs
 * Created Date: Sunday, July 4th 2021, 8:11:51 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 14th 2021 11:23:51 pm
 * Modified By: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { useState } from 'react';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import BecomeVendorForm from '@Components/reactForms/becomeVendorForm/BecomeVendorForm';
import styles from '@Assets/styles/pages/become-vendor.module.scss';

const BecomeAVendor = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);

  const handleOnSuccess = () => {
    setRequestSuccess(true);
  };

  return (
    <>
      {requestSuccess ? (
        <Row className={styles.vendorForm} justifyContent="center">
          <Typography variant="h2">Your request has been submitted</Typography>
        </Row>
      ) : (
        <Row className={styles.vendorForm}>
          <Row justifyContent="center" rowGap={40}>
            <Col lg={9}>
              <Row textAlign="left" rowGap={40}>
                <Typography variant="h1">BECOME A VENDOR</Typography>
                <Row className={styles.darkText} flexDirection="column" rowGap={10}>
                  <Typography variant="p">
                    Since 1983, when we sold our first pair of running shoes, Road Runner Sports has
                    lived and breathed to WOW every single customer. And we can&apos;t do that
                    without the newest and absolute best products in the world.
                  </Typography>
                  <Typography variant="p">
                    That&apos;s where YOU come in. Got a hot, new product? Or maybe your brand just
                    needs to reach a new group of customers. Either way, we want to learn more about
                    you and your business to see if you&apos;re a perfect fit.
                  </Typography>
                  <Typography variant="p">
                    Get the ball rolling by completing the form below.
                  </Typography>
                </Row>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={9}>
              <Row justifyContent="left">
                <Col lg={10}>
                  <BecomeVendorForm handleOnSuccess={handleOnSuccess} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      )}
      ;
    </>
  );
};

export default BecomeAVendor;
