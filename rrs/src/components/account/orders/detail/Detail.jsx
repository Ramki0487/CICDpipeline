/*
 * File: Detail.jsx
 * Project: webapp-rrs
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import AccountMenu from '@Components/account/accountMenu/AccountMenu';
import LineItem from '@Components/account/orders/lineItem/LineItem';
import LinkTag from '@Components/linkTag/LinkTag';
import OrderSummary from '@Components/orderSummary/OrderSummary';
import Menu from '@Mocks/account/Menu.json';
import cartDetails from '@Mocks/cart/Cart.json';
import productdetail from '@Mocks/order/Order.json';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Row } from '@RRS-UI/layout';
import Panel from '@RRS-UI/panel/Panel';
import Typography from '@RRS-UI/typography/Typography';
import { useSelector } from 'react-redux';
import styles from './Detail.module.scss';

const Detail = () => {
  const { isDesktop } = useSelector((state) => state.device);

  return (
    <Row className={styles.detail}>
      <Col lg={2}>
        <AccountMenu isDesktop={isDesktop} menu={Menu} activeMenu="Orders" />
      </Col>
      <Col lg={10} className={styles.detailContainer}>
        <Row flexDirection="column" rowGap={5} className={styles.detailHead}>
          <LinkTag href="/account/orders">
            <Row alignItems="center" columnGap={5}>
              <Icon iconName="caret_up" className={styles.detailIcon} />
              <Typography variant="h4"> My Orders</Typography>
            </Row>
          </LinkTag>
          <Typography variant="h2">ORDER DETAILS</Typography>
        </Row>
        <Row rowGap={30}>
          <Row columnGutter={15} rowGap={15}>
            <Col lg={7}>
              <Panel>
                <Panel.Head
                  className={styles.detailPanel}
                  isCollapsible={!isDesktop}
                  withIcon={!isDesktop}
                >
                  <Row justifyContent="space-between" className={styles.orderAccordionTitle}>
                    <Typography variant="h3">ORDER # 1234567890</Typography>
                    <Typography variant="p">Order placed on April 18, 2021</Typography>
                  </Row>
                </Panel.Head>
                <Panel.Body className={styles.detailOrder}>
                  <Row rowGap={20} className={styles.detailAddress}>
                    <Col>
                      <Typography variant="h5" className={styles.detailAddressTitle}>
                        Shipping
                      </Typography>
                      <Row flexDirection="column" rowGap={5}>
                        <Typography variant="p">Bob Ross</Typography>
                        <Typography variant="p">12345 Main Street</Typography>
                        <Typography variant="p"> Apt 102</Typography>
                        <Typography variant="p">San Diego, CA 99104</Typography>
                        <Typography variant="p">(999) 999-9999</Typography>
                      </Row>
                    </Col>
                    <Col>
                      <Typography variant="h5" className={styles.detailAddressTitle}>
                        Order Status
                      </Typography>
                      <Typography variant="p">Processing</Typography>
                    </Col>
                    <Col>
                      <Typography variant="h5" className={styles.detailAddressTitle}>
                        Payment
                      </Typography>
                      <Row flexDirection="column" rowGap={5}>
                        <Typography variant="p">VISA ending in 1234</Typography>
                        <Typography variant="p">Rewards Cash ending in 5803</Typography>
                        <Typography variant="p">Rewards Cash ending in 2242</Typography>
                      </Row>
                    </Col>
                  </Row>
                </Panel.Body>
              </Panel>
            </Col>
            <Col lg={5}>
              <Panel>
                <Panel.Head
                  className={styles.detailPanel}
                  isCollapsible={!isDesktop}
                  withIcon={!isDesktop}
                >
                  <Typography variant="h3">ORDER SUMMARY</Typography>
                </Panel.Head>
                <Panel.Body className={styles.detailSummary}>
                  <OrderSummary
                    orderSummary={cartDetails?.state?.orderSummary}
                    pageName="orders"
                    isLoading={false}
                    className={styles.detailOrdersummary}
                    isLoggedIn={true}
                    isVip={true}
                  />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Panel>
            <Panel.Head
              isCollapsible={!isDesktop}
              withIcon={!isDesktop}
              className={styles.detailShipmentHead}
            >
              <Typography variant="h3"> 2 Shipments</Typography>
            </Panel.Head>
            <Panel.Body className={styles.detailShipment}>
              {productdetail?.OrderHistory?.map((orderItem) => {
                return <LineItem key={orderItem?.id} products={orderItem?.pendingOrders} />;
              })}
            </Panel.Body>
          </Panel>
        </Row>
      </Col>
    </Row>
  );
};

export default Detail;
