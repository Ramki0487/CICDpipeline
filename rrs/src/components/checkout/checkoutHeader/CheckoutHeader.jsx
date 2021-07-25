/* istanbul ignore file */
/*
 * File: login.js
 * Project: webapp-rrs
 * Created Date: Tuesday, May 31st 2021, 7:28:01 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Logo from '@Assets/svg/images/logo.svg';
import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Icon from '@RRS-UI/icon/Icon';
import { Row } from '@RRS-UI/layout';
import { useSelector } from 'react-redux';
import styles from './CheckoutHeader.module.scss';

const CheckoutHeader = () => {
  const { device } = useSelector((state) => state);

  return (
    <header>
      <Row className={styles.wrapper} flexDirection="row" justifyContent="space-between">
        {!device?.isMobile && !device?.isTablet && (
          <LinkTag href="/">
            <Icon iconName="caret_left" />
            <span className={styles.backToCart}>Cart</span>
          </LinkTag>
        )}
        <LinkTag href="/" className={styles.logo}>
          <Logo />
        </LinkTag>
        <Button size="small" theme="rr-iceblue">
          Edit Cart
        </Button>
      </Row>
    </header>
  );
};

export default CheckoutHeader;
