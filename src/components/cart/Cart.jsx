/* istanbul ignore file */
/*
 * File: Cart.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */
import EmptyCart from '@Components/cart/emptyCart/EmptyCart';
import CartLineItem from '@Components/cartLineItem/CartLineItem';
import MembershipItem from '@Components/cartLineItem/membershipItem/MembershipItem';
import {
  addMembershipToCart,
  isMemberShipItem,
  isVipMembershipInCart,
  isVipUser,
} from '@Components/helpers/VipMembership.helper';
import LinkTag from '@Components/linkTag/LinkTag';
import OrderSummary from '@Components/orderSummary/OrderSummary';
import SourceCode from '@Components/sourceCode/SourceCode';
import VipSavingsBanner from '@Components/vipSavingsBanner/VipSavingsBanner';
import {
  claimSourceCode,
  getCartItems,
  removeCartItem,
  updateCartItemQuantity,
} from '@Redux/actions/Cart';
import Button from '@RRS-UI/button/Button';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import RedeemCash from './reedemCash/RedeemCash';

/**
 * Cart Module
 * @param {*} props
 * @returns
 */
const Cart = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const [loadCart, setLoadCart] = useState(false);

  /**redux state to get the login details  */
  const { login } = useSelector((state) => state.profile);

  /** to decide horizontal slide or vertical slide */
  const { isMobile } = useSelector((state) => state.device);

  /**redux state to get the cart Details  */
  const { cartQuantity, cartItems, orderSummary, membershipSummary } = useSelector(
    (state) => state.cart
  );

  // show or hide placeholder based on cartItem value
  useEffect(() => {
    if (cartItems) {
      setIsLoading(false);
    }
  }, [cartItems]);

  /** Fetches Cart Items */
  useEffect(() => {
    dispatch(getCartItems());
  }, [loadCart]);

  /** updating quantity of the cart Item */
  const handleQuantityUpdate = async (Qty, itemId) => {
    const request = {
      commerceItemId: itemId,
      quantity: Qty,
    };

    dispatch(updateCartItemQuantity(request));
  };

  /** Removing cart item from the Basket*/
  const handleRemoveCartItem = async (ItemId) => {
    dispatch(removeCartItem({ commerceItemId: ItemId }));
  };

  /** adding Membership item into basket */
  const addMemberShip = async () => {
    const response = await addMembershipToCart();
    response?.success && setLoadCart(true);
  };

  /** checking vip status */
  const isVip = isVipMembershipInCart() || isVipUser();

  const addSourceCode = async (couponCode) => {
    dispatch(claimSourceCode({ couponId: couponCode }));
  };

  //console.log(login, cartItems);
  if (isLoading) return null;

  /** Returning empty cart when cartQuantity is zero*/
  if (!cartItems?.length) return <EmptyCart />;

  return (
    <Row className={styles.cartDetails} justifyContent="space-between" rowGap={25}>
      {!isVipMembershipInCart() && (
        <Col className={styles.cartVip} lg={8}>
          <VipSavingsBanner
            vipPrice={membershipSummary}
            isLoading={isLoading}
            showVipPlus={isVipUser()}
            addMembershipToCart={addMemberShip}
          />
        </Col>
      )}
      <Col lg={8} className={styles.cartItems}>
        <Row rowGap={10}>
          <Typography variant="h2">MY CART ({cartQuantity})</Typography>

          {cartItems?.map((item) => (
            <Fragment key={item?.commerceId}>
              {isMemberShipItem(item?.product?.id) ? (
                <MembershipItem
                  isMobile={isMobile}
                  isLoading={isLoading}
                  membershipItem={item}
                  handleRemove={handleRemoveCartItem}
                />
              ) : (
                <CartLineItem
                  key={item?.commerceId}
                  isLoading={isLoading}
                  cartItem={item}
                  isMobile={isMobile}
                  handleQuantity={(qty) => handleQuantityUpdate(qty, item?.commerceId)}
                  handleRemove={() => handleRemoveCartItem(item?.commerceId)}
                  addMembershipToCart={addMembershipToCart}
                />
              )}
            </Fragment>
          ))}
        </Row>
      </Col>
      <Col lg={4} className={styles.cartOrderSummary}>
        <Row rowGap={10}>
          <OrderSummary
            orderSummary={orderSummary}
            pageName="cart"
            isLoading={isLoading}
            title="ORDER SUMMARY"
            isLoggedIn={login?.success}
            isVip={isVip}
          >
            <Row flexDirection="column" rowGap={10}>
              <LinkTag href="/checkout">
                <Button
                  theme="rr-green"
                  size="large"
                  className={styles.cartOrderSummaryCheck}
                  tabIndex="-1"
                >
                  Checkout
                </Button>
              </LinkTag>
              {!login?.success && (
                <Button size="large" className={styles.cartOrderSummaryLogin}>
                  Login & Checkout
                </Button>
              )}
              {isVip && (
                <Typography variant="p" className={styles.cartOrderSummaryVip}>
                  You earn <span>${orderSummary?.vipRewards}</span> VIP Rewards Cash!
                </Typography>
              )}
            </Row>
          </OrderSummary>
          {login?.success && isVipUser() && <RedeemCash isLoading={isLoading} />}
          <SourceCode isLoading={isLoading} handleClaim={addSourceCode} />
        </Row>
      </Col>
    </Row>
  );
};

export default Cart;
