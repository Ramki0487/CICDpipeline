/*
 * File: AccountOptions.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 12th 2021, 9:17:24 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 4:40:20 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import { accountLogout } from '@Redux/actions/Profile';
import DropDown from '@RRS-UI/dropDown/DropDown';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AccountOptions.module.scss';
const LoginModal = dynamic(() => import('@Components/loginModal/LoginModal'), { ssr: false });

const AccountOptions = () => {
  const dispatch = useDispatch();
  const { isLoggedInUser, cartQuantity } = useSelector((state) => state.sessionInfo);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { push, pathname } = useRouter();

  const redirectToCartPage = () => {
    if (pathname !== '/cart') {
      push('/cart');
    }
  };

  const handleLogout = () => {
    dispatch(accountLogout());
  };

  const handleLoginModalClose = () => setShowLoginModal(!showLoginModal);

  const handleLoginBtnClick = () => {
    !isLoggedInUser && setShowLoginModal(true);
  };

  useEffect(() => {
    if (isLoggedInUser) {
      setShowLoginModal(false);
    }
  }, [isLoggedInUser]);

  return (
    <>
      <Row justifyContent="flex-end" alignItems="center" flexWrap="nowrap">
        <Col noflex>
          <DropDown>
            <Row
              justifyContent="space-between"
              className={styles.sectionAccount}
              onClick={handleLoginBtnClick}
            >
              <Col className={styles.sectionAccountText}>
                <Row flexDirection="column" justifyContent="flex-start">
                  <span>{isLoggedInUser ? 'Hi, VIP' : 'Login to'}</span>
                  <Typography variant="small">
                    <strong>{isLoggedInUser ? '$12.34 Cash' : 'See Rewards'}</strong>
                  </Typography>
                </Row>
              </Col>
              <Icon iconName="account" />
            </Row>

            {isLoggedInUser && (
              <DropDown.Content>
                <DropDown.Item>
                  <LinkTag href="/account">My Account</LinkTag>
                </DropDown.Item>
                <DropDown.Item>
                  <LinkTag href="/account/orders">Orders</LinkTag>
                </DropDown.Item>
                <DropDown.Item>
                  <LinkTag href="/account/buy-again">Buy Again</LinkTag>
                </DropDown.Item>
                <DropDown.Item>
                  <LinkTag href="/account/saved-for-later">Saved for Later</LinkTag>
                </DropDown.Item>
                <DropDown.Item>
                  <LinkTag href="/account/addresses">Addresses</LinkTag>
                </DropDown.Item>
                <DropDown.Item>
                  <LinkTag href="/account/wallet">Wallet</LinkTag>
                </DropDown.Item>
                <DropDown.Item handleOnSelect={handleLogout}>Log Out</DropDown.Item>
              </DropDown.Content>
            )}
          </DropDown>
        </Col>
        <Col noflex className={styles.sectionCart}>
          <div onClick={redirectToCartPage}>
            <span className={styles.sectionCartQty}>
              <span>{cartQuantity}</span>
            </span>
          </div>
          <Icon className={styles.sectionCartIcon} iconName="cart" onClick={redirectToCartPage} />
        </Col>
      </Row>
      {showLoginModal && (
        <LoginModal handleAfterClose={handleLoginModalClose} showModal={showLoginModal} />
      )}
    </>
  );
};

export default AccountOptions;
