/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Wednesday, July 21st 2021, 8:38:50 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 8:38:50 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import ShippingAddress from '@Components/account/shippingAddress/ShippingAddress';
import { Container } from '@RRS-UI/layout';

const AddressPage = () => {
  return (
    <Container>
      <ShippingAddress />
    </Container>
  );
};

export default AddressPage;
