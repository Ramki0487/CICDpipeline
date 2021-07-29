/*
 * File: EmptyCart.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Icon from '@RRS-UI/icon/Icon';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import styles from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <Row
      flexDirection="column"
      alignItems="center"
      className={styles.section}
      rowGap={25}
      textAlign="center"
    >
      <Icon iconName="cart" />
      <Typography variant="h1" className={styles.cartContent}>
        Your shopping cart is empty
      </Typography>
      <Typography variant="h4">
        Let&apos;s fix that, shall we? Now&apos;s the perfect opportunity to shop for gear
        you&apos;ve been wanting.
      </Typography>
      <LinkTag href="/">
        <Button theme="rr-iceblue" tabIndex="-1" className={styles.sectionButton}>
          CONTINUE SHOPPING
        </Button>
      </LinkTag>
    </Row>
  );
};

export default EmptyCart;
