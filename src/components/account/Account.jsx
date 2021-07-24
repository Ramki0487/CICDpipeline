/*
 * File: Account.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import AccountMenu from '@Components/account/accountMenu/AccountMenu';
import AccountDetails from '@Components/account/accountDetails/AccountDetails';
import RewardBenefits from '@Components/account/rewardBenefits/RewardBenefits';
import OrderHistory from '@Components/account/orderHistory/OrderHistory';
import Menu from '@Mocks/account/Menu.json';
import MockAccount from '@Mocks/account/Account.json';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { useSelector } from 'react-redux';
import styles from './Account.module.scss';

const Account = () => {
  const { isDesktop } = useSelector((state) => state.device);
  return (
    <Row className={styles.account} rowGap={30} columnGutter={25}>
      <Col className={styles.accountMenu}>
        <AccountMenu isDesktop={isDesktop} menu={Menu} activeMenu="My Account" />
      </Col>
      <Col lg={9} className={styles.accountContainer}>
        <Row flexDirection="column" rowGap={35} className={styles.accountTitle}>
          <Typography variant="h1">MY ACCOUNT</Typography>
          <Typography variant="h3">HI, FIRSTNAME! YOUR VIP FAMILY REWARDS BENEFITS:</Typography>
        </Row>
        <Row rowGap={45}>
          <RewardBenefits rewardsBenefit={MockAccount} />
          <OrderHistory isDesktop={isDesktop} historyDetails={MockAccount} />
          <AccountDetails details={MockAccount?.details} />
        </Row>
      </Col>
    </Row>
  );
};

export default Account;
