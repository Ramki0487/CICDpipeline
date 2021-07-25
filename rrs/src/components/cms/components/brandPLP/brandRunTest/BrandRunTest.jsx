/*
 * File: BrandRunTest.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Image from '@RRS-UI/image/Image';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, string } from 'prop-types';
import styles from './BrandRunTest.module.scss';

const BrandRunTest = ({ title, brandRunTests }) => {
  if (!brandRunTests) return null;

  return (
    <Row className={styles.brandTestContainer}>
      <Container>
        <Col md={12} className={styles.brandTestContainerBox}>
          <Typography variant="h2" className={styles.brandTestContainerTitle}>
            {title}
          </Typography>

          <Row className={styles.brandVideoContainer}>
            {brandRunTests?.map((runTest) => {
              return (
                <Col md={6} key={runTest?.sys?.id} className={styles.videoBox}>
                  <Row justifyContent="center" flexDirection="column">
                    <Col md={12} className={styles.videoContainer}>
                      <Row justifyContent="center" className={styles.video}>
                        <Image
                          src={runTest?.fields?.image?.fields?.desktop?.fields?.file?.url}
                          alt={runTest?.fields?.image?.fields?.desktop?.fields?.title}
                        />
                      </Row>
                    </Col>
                    <Typography variant="h3" className={styles.videoContainerTitle}>
                      {runTest?.fields?.title}
                    </Typography>
                    <Typography variant="p" className={styles.videoContainerTitle}>
                      {runTest?.fields?.subtext}
                    </Typography>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Container>
    </Row>
  );
};

BrandRunTest.propTypes = {
  title: string,
  brandRunTests: array,
};

export default BrandRunTest;
