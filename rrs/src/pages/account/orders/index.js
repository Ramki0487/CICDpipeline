/*
 * File: index.js
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { Container } from '@RRS-UI/layout';
import Orders from '@Components/account/orders/Orders';

const Order = () => {
  return (
    <Container>
      <Orders />
    </Container>
  );
};

export default Order;
