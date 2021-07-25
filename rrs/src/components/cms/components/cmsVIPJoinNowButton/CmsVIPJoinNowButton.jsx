/*
 * File: CmsVIPJoinNowButton.jsx
 * Project: webapp-rrs
 * Created Date: Wednesday, July 21st 2021, 11:37:59 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 11:37:59 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { VIP_MEMBERSHIP_IN_CART } from '@App/constants/StorageKeys';
import VipJoinNow from '@Components/vipJoinNow/VipJoinNow';
import storage from '@Utils/Storage';
import { object } from 'prop-types';
import { useState } from 'react';
import CmsButton from '../cmsButton/CmsButton';

/**
 * Component CmsVIPJoinNowButton
 * @param {object} props - Props to render CTA
 * @returns
 */
const CmsVIPJoinNowButton = ({ button }) => {
  if (!button) return null;

  const [isVipMemberShipInCart, setIsVipMemberShipInCart] = useState(
    storage.getItem(VIP_MEMBERSHIP_IN_CART)
  );

  const onMemberShipAdded = () => setIsVipMemberShipInCart(true);

  if (isVipMemberShipInCart) return null;
  return (
    <VipJoinNow onMemberShipAdded={onMemberShipAdded}>
      <CmsButton {...button?.fields} />
    </VipJoinNow>
  );
};

CmsVIPJoinNowButton.propTypes = {
  button: object,
};

export default CmsVIPJoinNowButton;
