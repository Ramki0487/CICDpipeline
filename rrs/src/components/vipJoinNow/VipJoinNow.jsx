/*
 * File: VipJoinNow.jsx
 * Project: webapp-rrs
 * Created Date: Sunday, July 11th 2021, 12:06:55 pm
 * Author: Selvam <selvam.murugan@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { addMembershipToCart } from '@Components/helpers/VipMembership.helper';
import dynamic from 'next/dynamic';
import { func, node, oneOfType, string } from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AddToCartModal = dynamic(() => import('@Components/addToCartModal/AddToCartModal'), {
  ssr: false,
});

/**
 * Component VipJoinNow
 * @param {*} param0
 * @returns
 */
const VipJoinNow = ({ children, onMemberShipAdded }) => {
  if (!children) return null;

  const { membershipLevel } = useSelector((state) => state.sessionInfo);

  const [isProcessing, setIsProcessing] = useState(false);
  const [cartResponse, setCartResponse] = useState();

  const onAddToCartModalClose = () => {
    onMemberShipAdded?.();
    setCartResponse();
  };

  /** Add Membership item into basket */
  const addMemberShip = async () => {
    // set button loader
    setIsProcessing(true);

    const response = await addMembershipToCart(membershipLevel);
    response?.success && setCartResponse(response?.state);

    // Remove button loader
    setIsProcessing(false);
  };

  const handleOnClick = () => {
    // Add Membership item to cart on click
    addMemberShip();

    // trigger the original callback if any
    children.props.onClick?.();
  };

  return (
    <>
      <children.type {...children.props} onClick={handleOnClick} isProcessing={isProcessing} />

      {cartResponse && (
        <AddToCartModal handleAfterClose={onAddToCartModalClose} cartData={cartResponse} />
      )}
    </>
  );
};

VipJoinNow.propTypes = {
  children: oneOfType([string, node]).isRequired,
  onMemberShipAdded: func,
};

VipJoinNow.defaultProps = {
  onMemberShipAdded: null,
};

export default VipJoinNow;
