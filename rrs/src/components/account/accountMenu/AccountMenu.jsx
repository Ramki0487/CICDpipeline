/*
 * File: AccountMenu.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import LinkTag from '@Components/linkTag/LinkTag';
import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Row } from '@RRS-UI/layout';
import SlideOutModal from '@RRS-UI/slideOutModal/SlideOutModal';
import Typography from '@RRS-UI/typography/Typography';
import { bool, object, string } from 'prop-types';
import { useState } from 'react';
import styles from './AccountMenu.module.scss';

/**
 * AccountMenu Component
 * @param {object} menu - object for account menu
 * @returns
 */

const AccountMenu = ({ isDesktop, menu, activeMenu }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerStatus = () => setDrawerOpen(!drawerOpen);

  useBodyScrollLock(drawerOpen);

  const renderSidePanel = () => {
    return (
      <Row className={styles.menuSidebar} rowGap={15}>
        <Row className={styles.menuUser} rowGap={5} flexDirection="column">
          <Typography variant="h3" className={styles.menuUserTitle}>
            HI, {menu?.title}!
          </Typography>
          <Typography variant="small">Member: {menu?.member}</Typography>
        </Row>

        <Row className={styles.menuReward} alignItems="center" columnGap={10}>
          <Icon iconName="vip_circle" />
          <Col className={styles.menuRewardAmount}>
            <Typography variant="h3" className={styles.menuRewardCash}>
              {menu?.rewardCash}
            </Typography>
            <Typography variant="p">Rewards Cash</Typography>
          </Col>
        </Row>
        <Row flexDirection="column" rowGap={15} className={styles.menuItems}>
          {menu?.list?.map((menuList) => {
            return (
              <LinkTag href={menuList?.link} key={menuList?.id}>
                <Typography
                  variant="h5"
                  className={`${menuList?.title === activeMenu ? styles['menuActive'] : ''}
                  ${styles.menuList}`}
                >
                  {menuList?.title}
                </Typography>
              </LinkTag>
            );
          })}
        </Row>
      </Row>
    );
  };

  return (
    <>
      {isDesktop ? (
        renderSidePanel()
      ) : (
        <Row className={styles.menuTitlebar}>
          <Icon
            iconName="hamburger"
            className={styles.menuHamburgerIcon}
            onClick={toggleDrawerStatus}
          />
          <SlideOutModal
            isOpen={drawerOpen}
            className={styles.menuOutSlide}
            onClose={toggleDrawerStatus}
            contentClassName={styles.menuDashboard}
          >
            {renderSidePanel()}
          </SlideOutModal>
          <Typography variant="h3" className={styles.menuUserName}>
            FIRSTNAMES ACCOUNT
          </Typography>
        </Row>
      )}
    </>
  );
};

// Perform Prop Validation
AccountMenu.propTypes = {
  isDesktop: bool,
  menu: object.isRequired,
  activeMenu: string,
};
// Declare default props
AccountMenu.defaultProps = {
  isDesktop: false,
  activeMenu: '',
};

export default AccountMenu;
