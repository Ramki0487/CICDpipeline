/*
 * File: Orders.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import AccountMenu from '@Components/account/accountMenu/AccountMenu';
import Filter from '@Components/account/orders/filter/Filter';
import ItemPanel from '@Components/account/orders/itemPanel/ItemPanel';
import LineItem from '@Components/account/orders/lineItem/LineItem';
import LinkTag from '@Components/linkTag/LinkTag';
import Menu from '@Mocks/account/Menu.json';
//mock values
import filterOptions from '@Mocks/order/Filter.json';
import orderDetails from '@Mocks/order/Order.json';
import Button from '@RRS-UI/button/Button';
import Input from '@RRS-UI/inputGroup/InputGroup';
import { Col, Row } from '@RRS-UI/layout';
import Panel from '@RRS-UI/panel/Panel';
import SelectBox from '@RRS-UI/selectbox/Selectbox';
import Typography from '@RRS-UI/typography/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Orders.module.scss';

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const handleChange = (item) => {
    setActiveFilter(item);
  };

  const { isDesktop } = useSelector((state) => state.device);

  return (
    <Row className={styles.order} rowGap={10}>
      <Col lg={2}>
        <AccountMenu isDesktop={isDesktop} menu={Menu} activeMenu="Orders" />
      </Col>
      <Col lg={10} className={styles.orderContainer}>
        <Row rowGap={25}>
          <Row className={styles.orderTitleSearch} rowGap={isDesktop ? 10 : 30}>
            <Col className={styles.orderTitle}>
              <Typography variant="h2">MY ORDERS</Typography>
            </Col>
            <Col>
              <Input
                inputProps={{ placeholder: 'Search Orders' }}
                iconProps={{ iconName: 'search' }}
                className={styles.orderSearch}
              />
            </Col>
          </Row>
          {isDesktop ? (
            <Row className={styles.orderSelectContainer} rowGap={20}>
              <Col>
                <Row alignItems="center" columnGap={10}>
                  <Typography variant="p" className={styles.orderSelectText}>
                    2 orders placed in
                  </Typography>
                  <SelectBox defaultLabel="past 3 months" className={styles.orderSelectBox} />
                </Row>
              </Col>
              <Col noflex>
                <Row alignItems="center" columnGap={10}>
                  <Typography variant="p" className={styles.orderSelectType}>
                    Order Type
                  </Typography>
                  <SelectBox defaultLabel="All" className={styles.orderSelectBox} />
                  <Typography variant="p" className={styles.orderSelectText}>
                    Order Status
                  </Typography>
                  <SelectBox defaultLabel="All" className={styles.orderSelectBox} />
                </Row>
              </Col>
              {orderDetails?.OrderHistory?.map((orderItem) => (
                <Panel key={orderItem?.id} className={styles.orderItem}>
                  <Panel.Head className={styles.orderItemHead}>
                    <Row>
                      {orderItem?.filter?.map((data, index) => (
                        <Col key={`${orderItem?.id}_${index}`}>
                          <Typography variant="h5">{data?.label}</Typography>
                          <Typography variant="p">{data?.value}</Typography>
                        </Col>
                      ))}
                      <Col noflex>
                        <LinkTag href="/account/orders/detail">
                          <Button size="large" className={styles.orderButton} tabIndex="-1">
                            View Order Details
                          </Button>
                        </LinkTag>
                      </Col>
                    </Row>
                  </Panel.Head>
                  <Panel.Body className={styles.orderItemBody}>
                    <LineItem products={orderItem?.pendingOrders} />
                  </Panel.Body>
                </Panel>
              ))}
            </Row>
          ) : (
            <Row rowGap={25}>
              <Filter
                activeFilter={activeFilter}
                handleChange={handleChange}
                orderFilter={filterOptions}
              />
              {orderDetails.Orders?.orderHistory?.map((history) => (
                <ItemPanel items={history} key={history?.orderId} />
              ))}
            </Row>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default Orders;
