/*
 * File: ShippingAddress.jsx
 * Project: webapp-rrs
 * Created Date: Monday, 19th July 2021 10:42:33 pm
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Monday, 19th July 2021 11:27:51 pm
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { array } from 'prop-types';
import AddressForm from '@Components/reactForms/addressForm/AddressForm';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import Button from '@RRS-UI/button/Button';
import CardPicker from '@RRS-UI/cardPicker/CardPicker';
import styles from './ShippingAddress.module.scss';

/**
 * ShippingAddress Component
 * @param {array} addresses - Array of address objects
 * @param {string} defaultActive - unique value to identify default active item
 * @returns {*}
 * @constructor
 */

const ShippingAddress = ({ addresses }) => {
  return (
    <>
      <Typography className={styles.addressTitle} variant="h2">
        SHIPPING
      </Typography>
      {!addresses?.length && <AddressForm pageName="checkout" />}
      {addresses?.length && (
        <Row className={styles.address}>
          {addresses.map((item) => {
            return (
              <CardPicker className={styles.addressCard} key={item.id}>
                <Typography variant="h5">{`${item.firstName} ${item.lastName}`}</Typography>
                <Typography variant="p">{`${item.address1}.`}</Typography>
                <Typography variant="p">{`${item.city}, ${item.region} ${item.zipCode}`}</Typography>
                <span className={styles.addressCardEdit}>Edit</span>
              </CardPicker>
            );
          })}
        </Row>
      )}
      <Button className={styles.addressBtnAdd}>Add New Address</Button>
    </>
  );
};

ShippingAddress.propTypes = {
  addresses: array,
};

export default ShippingAddress;
