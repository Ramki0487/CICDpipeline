/*
 * File: AddToCartModal.jsx
 * Project: webapp-rrs
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { constructProductImageUrl } from '@Components/helpers/Product.helper';
import { isMemberShipItem, isVipMembershipInCart } from '@Components/helpers/VipMembership.helper';
import LinkTag from '@Components/linkTag/LinkTag';
import { updateSessionInfo } from '@Redux/actions/SessionInfo';
import Button from '@RRS-UI/button/Button';
import Card from '@RRS-UI/card/Card';
import Icon from '@RRS-UI/icon/Icon';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import LineItem from '@RRS-UI/lineItem/LineItem';
import Modal from '@RRS-UI/modal/Modal';
import Price from '@RRS-UI/price/Price';
import ToggleButton from '@RRS-UI/toggleButton/ToggleButton';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func, object } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { formatPriceObject } from '../helpers/Price.helper';
import styles from './AddToCartModal.module.scss';

/**
 * AddToCartModal Component
 * @param {object} cartData - Object to render Cart Modal
 * @param {bool} vipInputs - Object for the VIP
 * @param {bool} isVipUser - To identitify whether user already have VIP
 * @param {string} id - id to place on row
 * @param {bool} pickUpInStore - Identify Pickup at a store option available
 * @param {boolean} isMobile - Flag to display device specific content
 * @param {func} removeMembershipFromCart - Callback function On Membership item remove
 * @param {func} addMembershipToCart - Callback function On Membership item add
 * @returns {*}
 */
const AddToCartModal = ({
  cartData: { cartItems, cartQuantity, cartSummary },
  isVipUser,
  handleAfterClose,
  addMembershipToCart,
  removeMembershipFromCart,
}) => {
  const dispatch = useDispatch();

  const cartItem = cartItems[0];

  // Update Cart Quantity in session
  useEffect(() => {
    dispatch(updateSessionInfo({ cartQuantity }));
  }, [dispatch, updateSessionInfo, cartQuantity]);

  //Based on API response it will changed
  const price = [{ label: 'MSRP', amount: '119.95', type: 'MSRP', symbol: '$' }];
  const priceInput = formatPriceObject(price, '', false, false, false);

  return (
    <Modal
      contentClass={styles.miniCart}
      overlayClass={styles.miniCartContainer}
      handleAfterClose={handleAfterClose}
      showModal={true}
    >
      <Modal.head className={styles.miniCartHead}>
        <Typography variant="h2" className={styles.miniCartHeadTitle}>
          <Icon iconName="checkmark" className={styles.miniCartHeadIcon} />
          ADDED TO CART MESSAGE
        </Typography>
      </Modal.head>
      <Modal.body>
        <Row className={styles.miniCartBody}>
          <Col lg={7} className={styles.miniCartBodyItemContainer}>
            <Row className={styles.miniCartBodyItem}>
              <Col xs={6} lg={4} className={styles.miniCartBodyItemImageBox}>
                <span className={styles.miniCartBodyItemCount}>
                  <Typography variant="h4" className={styles.miniCartBodyItemCountValue}>
                    {cartQuantity}
                  </Typography>
                </span>
                <Card
                  className={styles.miniCartBodyItemImage}
                  image={
                    <Image
                      src={constructProductImageUrl(
                        cartItem?.product.id,
                        cartItem?.product.sku?.colorCode
                      )}
                      alt={cartItem?.product?.displayName}
                    />
                  }
                />
              </Col>
              <Col xs={6} lg={8} className={styles.miniCartBodyItemDetails}>
                <Row flexDirection="column" rowGap={15}>
                  <Typography variant="h4" className={styles.miniCartBodyItemTitle}>
                    {cartItem?.product?.displayName}
                  </Typography>

                  <Row flexDirection="column">
                    {cartItem?.product?.sku?.dimension?.map((item) => (
                      <Typography
                        key={item?.label}
                        variant="p"
                        className={styles.miniCartBodyItemName}
                      >
                        {item?.label?.toLowerCase() === 'flavor' ||
                        item?.label?.toLowerCase() === 'color'
                          ? item?.value
                          : `${item?.label} ${item?.value}`}
                      </Typography>
                    ))}
                    <Price className={styles.miniCartBodyItemPrice} priceInput={priceInput} />
                  </Row>

                  {/* {pickUpInStore && (
                    <Typography variant="p" className={styles.miniCartBodyItemPickupStatus}>
                      Pickup in Store
                    </Typography>
                  )} */}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={5} className={styles.miniCartBodySummary}>
            <Row flexDirection="column" rowGap={10}>
              <LineItem
                className={styles.miniCartBodySummarySubTotal}
                variant="p"
                label={`Cart Subtotal (${cartQuantity} ${cartQuantity > 1 ? 'items' : 'item'})`}
                amount={`${cartSummary?.itemsTotal?.amount}`}
              />

              {!isVipUser && (
                <Row className={styles.miniCartBodySummaryVipSection} alignItems="center">
                  {!isMemberShipItem(cartItem?.product?.id) && (
                    <ToggleButton
                      onClick={() =>
                        isVipMembershipInCart() ? removeMembershipFromCart() : addMembershipToCart()
                      }
                      toggleAfter="Yes"
                      toggleBefore="ADD"
                      isEnabled={isVipMembershipInCart() ?? false}
                      className={styles.cartVipToggle}
                    />
                  )}

                  {isVipMembershipInCart() ? (
                    <Typography variant="p" className={styles.miniCartBodySummaryVipWelcome}>
                      <Icon iconName="welcome" className={styles.miniCartBodySummaryVipIcon} />
                      Welcome VIP!
                    </Typography>
                  ) : (
                    <Typography variant="p" className={styles.miniCartBodySummaryVipBecome}>
                      Become a VIP & save {cartSummary?.vipSavings}
                    </Typography>
                  )}
                </Row>
              )}
              {!isVipUser && isVipMembershipInCart() && cartSummary?.Membership && (
                <LineItem
                  className={styles.miniCartBodySummaryMembership}
                  variant="p"
                  label="VIP Membership"
                  amount={cartSummary?.Membership?.amount}
                />
              )}
              {(isVipUser || (!isVipUser && isVipMembershipInCart())) && (
                <>
                  {cartSummary?.membershipSavings && (
                    <LineItem
                      className={styles.miniCartBodySummaryVipSaving}
                      variant="p"
                      label="Your VIP Savings"
                      amount={cartSummary?.membershipSavings?.amount}
                    />
                  )}
                  {cartSummary?.estimatedTotals && (
                    <LineItem
                      className={styles.miniCartBodySummaryVipTotal}
                      variant="p"
                      label="Your VIP Total"
                      amount={cartSummary?.estimatedTotals?.amount}
                    />
                  )}
                </>
              )}
              <Row justifyContent="center" rowGap={5} flexDirection="column">
                <LinkTag href="/cart">
                  <Button size="medium" className={styles.miniCartBodySummaryBtnCart}>
                    View cart
                  </Button>
                </LinkTag>
                <LinkTag href="/checkout">
                  <Button
                    size="medium"
                    className={`${styles.cartButton} ${styles.miniCartBodySummaryBtnCheckOut}`}
                  >
                    Checkout
                  </Button>
                </LinkTag>
              </Row>
              {(isVipUser || !isVipUser) && cartSummary?.vipRewards && (
                <Typography variant="p" className={styles.miniCartBodySummaryVipReward}>
                  You earn <span className={styles.cartVipValue}>${cartSummary?.vipRewards}</span>{' '}
                  VIP Rewards Cash!
                </Typography>
              )}
            </Row>
          </Col>
        </Row>
      </Modal.body>
    </Modal>
  );
};

//Props validation
AddToCartModal.propTypes = {
  showModal: bool,
  cartData: object,
  isVipUser: bool,
  handleAfterClose: func,
  addMembershipToCart: func,
  removeMembershipFromCart: func,
  pickUpInStore: bool,
};

//default Props
AddToCartModal.defaultProps = {
  isVipUser: false,
  showModal: false,
  handleAfterClose: null,
  addMembershipToCart: null,
  removeMembershipFromCart: null,
  pickUpInStore: false,
};

export default AddToCartModal;
