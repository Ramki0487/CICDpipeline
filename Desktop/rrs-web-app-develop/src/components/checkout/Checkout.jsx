/* istanbul ignore file */

import RedeemCash from '@Components/cart/reedemCash/RedeemCash';
import CartLineItem from '@Components/cartLineItem/CartLineItem';
import Payment from '@Components/checkout/payment/Payment';
import ShippingAddress from '@Components/checkout/shippingAddress/ShippingAddress';
import ShippingMethods from '@Components/checkout/shippingMethods/ShippingMethods';
import OrderSummary from '@Components/orderSummary/OrderSummary';
import SourceCode from '@Components/sourceCode/SourceCode';
import VipSavingsBanner from '@Components/vipSavingsBanner/VipSavingsBanner';
// will remove this once API integration done
import { state } from '@Mocks/checkout/CheckoutMock.json';
import { addMemberShipItem, claimSourceCode, getCartItems } from '@Redux/actions/Cart';
import Accordion from '@RRS-UI/accordion/Accordion';
import Button from '@RRS-UI/button/Button';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { string } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Checkout.module.scss';

/**
 * Checkout Component
 * @param {string} pageName  - Page name to render customized contents
 * @returns
 */

const Checkout = () => {
  const dispatch = useDispatch();
  const [activePaymentId, setActivePaymentId] = useState('p98766790');

  const [isLoading, setIsLoading] = useState(false);

  /**redux state to get the login details  */
  const { login } = useSelector((state) => state.profile);

  /** to decide horizontal slide or vertical slide */
  const { isMobile } = useSelector((state) => state.device);

  /**redux state to get the cart Details  */
  // const { cartQuantity, cartItems, orderSummary } = useSelector((state) => state.cart);

  /** mock json */
  const {
    orderSummary,
    paymentOptions,
    cartItems,
    shippingmethods,
    membershipSummary,
    addresses,
  } = state;

  /** Temporary flag for isVip */
  const isVip = false;
  const showVipPlus = false;

  /** Fetches Cart Items */
  useEffect(() => {
    dispatch(getCartItems());
    setIsLoading(false);
  }, []);

  /** adding Membership item into basket */
  const addMembershipToCart = async () => {
    const request = {
      quantity: 1,
      skuId: 'RAC55',
      productId: 'RAC55',
    };
    dispatch(addMemberShipItem(request));
  };

  const addSourceCode = async (couponCode) => {
    dispatch(claimSourceCode({ couponId: couponCode }));
  };

  // Set Active payment Accordion
  const callBackOnSelect = (id) => {
    setActivePaymentId(id);
  };

  return (
    <Container>
      <Row className={styles.checkoutDetails} justifyContent="space-between" rowGap={40}>
        {!isVip && (
          <Col lg={8}>
            <VipSavingsBanner
              vipPrice={membershipSummary}
              isLoading={isLoading}
              showVipPlus={showVipPlus}
              addMembershipToCart={addMembershipToCart}
            />
          </Col>
        )}
        <Col lg={8}>
          <ShippingAddress addresses={addresses} />
        </Col>
        <Col className={styles.checkoutShipping} lg={8}>
          <Typography className={styles.checkoutShippingTitle} variant="h4">
            Shipping Method
          </Typography>
          <ShippingMethods shippingMethods={shippingmethods} defaultActive="1" />
        </Col>
        <Col className={styles.checkoutPayment} lg={8}>
          <Payment
            paymentOptions={paymentOptions}
            activePaymentId={activePaymentId}
            callBackOnSelect={callBackOnSelect}
          />
        </Col>
        <Col lg={4} className={styles.checkoutOrderSummary}>
          <Row rowGap={10}>
            <OrderSummary
              orderSummary={orderSummary}
              pageName="checkout"
              isLoading={isLoading}
              isLoggedIn={login?.success}
              isVip={isVip}
            >
              {isMobile && (
                <Button
                  className={styles.checkoutOrderSummaryBtnCheckout}
                  theme="rr-green"
                  size="large"
                >
                  Checkout
                </Button>
              )}
            </OrderSummary>
            {login.success && showVipPlus && <RedeemCash isLoading={isLoading} />}
            <SourceCode isLoading={isLoading} handleClaim={addSourceCode} />
            <Accordion className={styles.checkoutOrderSummaryCart}>
              <Accordion.head className={styles.checkoutOrderSummaryCartHead}>
                <Typography variant="h4">CART(3)</Typography>
              </Accordion.head>
              <Accordion.body className={styles.checkoutOrderSummaryCartBody}>
                <Row>
                  <Typography className={styles.checkoutOrderSummaryCartBodyTitle} variant="h5">
                    Shipping
                  </Typography>
                  {cartItems.map((item) => (
                    <CartLineItem cartItem={item} readOnly={true} key={item?.product?.id} />
                  ))}
                </Row>
              </Accordion.body>
            </Accordion>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

Checkout.propTypes = {
  pageName: string,
};

Checkout.defaultProps = {
  pageName: 'checkout',
};

export default Checkout;
