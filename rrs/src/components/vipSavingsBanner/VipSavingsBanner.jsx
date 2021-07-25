/*
 * File: VipSavingsBanner.jsx
 * Project: webapp-rrs
 * Created Date: Friday, June 4th 2021, 10:56:53 am
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */
import Save20 from '@Assets/svg/images/save_20.svg';
import Vipcash from '@Assets/svg/images/vip_cash.svg';
import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import { Col, Row } from '@RRS-UI/layout';
import LineItem from '@RRS-UI/lineItem/LineItem';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func, object } from 'prop-types';
import PlaceHolder from './PlaceHolder';
import styles from './VipSavingsBanner.module.scss';

/**
 * VipSavingsBanner Component
 * @param {string} showVipPlus - Boolean variable to change VIP and VIP plus
 * @param {object} vipPrice - Object to display vip price details
 * @param {function} onClick - onClick Callback function
 * @param {bool} isLoading - Boolean variable to render the contentloader
 * @param {func} addMembershipToCart - Callback function to add membership to cart
 * @returns
 */
const VipSavingsBanner = ({ vipPrice, showVipPlus, onClick, isLoading, addMembershipToCart }) => {
  if (isLoading) return <PlaceHolder />;

  return (
    <Row className={styles.vipSaving} rowGap={10}>
      <Col md={8}>
        <Row flexWrap="nowrap" columnGap={15}>
          {showVipPlus ? <Vipcash /> : <Save20 />}
          <Col xs={9} lg={8}>
            <Row rowGap={10} columnGap={10}>
              <Typography variant="h4" className={styles.vipSavingTitle}>
                {showVipPlus
                  ? 'Earn 2x Rewards Cash when you upgrade to VIP Plus.'
                  : 'Hey! You could save 20% on this order when you join our VIP Family.'}
              </Typography>
              <div>
                <Typography variant="h5" className={styles.vipSavingSubTitle}>
                  {showVipPlus
                    ? 'Plus all your VIP benefits apply.'
                    : 'Plus everyday benefits & rewards.'}
                </Typography>
                <LinkTag
                  className={styles.vipSavingLink}
                  {...(onClick && { onClick: onClick })}
                  href="/"
                >
                  <Typography variant="h5">Learn more</Typography>
                </LinkTag>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <Row className={styles.vipSavingLineItem} justifyContent="flex-end" rowGap={5}>
          <LineItem variant="p" label="Total" amount={vipPrice?.total?.amount} />
          <LineItem
            className={styles.vipSavingLineItemSavings}
            variant="p"
            label={showVipPlus ? 'VIP Rewards Cash' : 'VIP Savings'}
            amount={
              showVipPlus ? vipPrice?.vipRewardCash?.amount : vipPrice?.membershipSavings?.amount
            }
          />

          <LineItem
            variant="h5"
            label={showVipPlus ? 'VIP Plus 2X Cash' : 'Your VIP Total'}
            amount={showVipPlus ? vipPrice?.vipPlusRewardCash?.amount : vipPrice?.vipTotals?.amount}
          />
          <Button
            className={styles.vipSavingLineItemButton}
            size="small"
            action="submit"
            onClick={addMembershipToCart}
          >
            {showVipPlus
              ? `Upgrade for $${vipPrice?.membershipPlusPrice}`
              : `Join for $${vipPrice?.membershipPrice}`}
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

//Default Props
VipSavingsBanner.defaultProps = {
  showVipPlus: false,
  isLoading: false,
  addMembershipToCart: null,
};

//Props validation
VipSavingsBanner.propTypes = {
  vipPrice: object,
  onClick: func,
  showVipPlus: bool,
  addMembershipToCart: func,
  isLoading: bool,
};

export default VipSavingsBanner;
