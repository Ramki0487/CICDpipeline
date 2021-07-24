/*
 * File: ShippingAddress.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Button from '@RRS-UI/button/Button';
import { Row, Col } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import CardPicker from '@RRS-UI/cardPicker/CardPicker';
import AccountMenu from '@Components/account/accountMenu/AccountMenu';
import LinkTag from '@Components/linkTag/LinkTag';
import Menu from '@Mocks/account/Menu.json';
import Addresses from '@Mocks/address/Address.json';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ShippingAddress.module.scss';

const ShippingAddress = () => {
  const [selected, setSelected] = useState(0);

  const { isDesktop } = useSelector((state) => state.device);

  const makePrimary = (item) => setSelected(item);

  return (
    <Row className={styles.address} rowGap={30} columnGutter={30}>
      <Col className={styles.addressMenu}>
        <AccountMenu isDesktop={isDesktop} menu={Menu} activeMenu="Addresses" />
      </Col>
      <Col lg={9}>
        <Row flexDirection="column">
          <Typography variant="h2" className={styles.addressTitle}>
            MY ADDRESSES
          </Typography>
          <Button size="small" className={styles.addressButton}>
            Add New Address
          </Button>
        </Row>
        <Row rowGap={15} columnGap={15}>
          {Addresses.map((item) => (
            <CardPicker key={item?.id} className={styles.addressBox}>
              {item?.id === selected && (
                <Row className={styles.addressHeader} alignItems="center">
                  <Typography variant="h4" className={styles.addressHeaderTitle}>
                    Primary
                  </Typography>
                </Row>
              )}
              <Row className={styles.addressDetail} flexDirection="column">
                <Typography variant="h5" className={styles.addressDetailTitle}>
                  {item?.name}
                </Typography>
                <Typography variant="p">{item?.address1}</Typography>
                <Typography variant="p">{item?.postalCode}</Typography>
                <Typography variant="p">{item?.city}</Typography>
                <Typography variant="p">{item?.phoneNumber}</Typography>
              </Row>
              <Row className={styles.addressAction}>
                <LinkTag className={styles.addressBar}>Edit</LinkTag>
                <LinkTag className={styles.addressBar}>Remove</LinkTag>
                {item.id !== selected && (
                  <LinkTag className={styles.addressBar} onClick={() => makePrimary(item?.id)}>
                    Make Primary
                  </LinkTag>
                )}
              </Row>
            </CardPicker>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ShippingAddress;
