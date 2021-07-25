/*
 * File: PaymentAccordionContext.js
 * Project: webapp-rrs
 * Created Date: Thursday, 8th July 2021 5:25:07 pm
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday, 8th July 2021 8:59:57 pm
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { createContext } from 'react';

const paymentAccordionContext = createContext({
  collapse: false,
  activeAccId: 1,
});

export default paymentAccordionContext;
