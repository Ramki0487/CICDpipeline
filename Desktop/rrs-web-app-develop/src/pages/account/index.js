/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Monday, June 21st 2021, 1:00:47 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday June 21st 2021 1:00:47 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { Container } from '@RRS-UI/layout';
import Account from '@Components/account/Account';

const AccountPage = () => {
  return (
    <Container>
      <Account />
    </Container>
  );
};

export default AccountPage;
