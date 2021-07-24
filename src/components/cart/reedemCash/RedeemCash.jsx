/*
 * File: RedeemCash.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func } from 'prop-types';
import PlaceHolder from './PlaceHolder';
import styles from './RedeemCash.module.scss';

/**
 * RedeemCash Component
 * @param {bool} isLoading - Flag to display busy loader
 * @returns
 */
const RedeemCash = ({ isLoading, handleRedeem }) => {
  if (isLoading) return <PlaceHolder />;

  return (
    <Row className={styles.redeem} alignItems="baseline" rowGap={10}>
      <Col>
        <Typography variant="p" className={styles.redeemReward}>
          VIP Rewards Cash Balance <span> $23.54</span>
        </Typography>
      </Col>
      <Col>
        <Typography variant="h5" className={styles.redeemButton} onClick={handleRedeem}>
          Redeem Full Amount
        </Typography>
      </Col>
    </Row>
  );
};

RedeemCash.propTypes = {
  isLoading: bool,
  handleRedeem: func,
};

RedeemCash.defaultProps = {
  isLoading: false,
  handleRedeem: null,
};

export default RedeemCash;
