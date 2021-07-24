/*
 * File: LineItem.jsx
 * Project: webapp-rrs
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Image from '@RRS-UI/image/Image';
import Button from '@RRS-UI/button/Button';
import { Row, Col } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { object } from 'prop-types';
import styles from './LineItem.module.scss';

/**
 * LineItem Component
 * @param {object} products - object containes line item Details
 * @returns {*}
 * @constructor
 */
const LineItem = ({ products }) => {
  return (
    <Row className={styles.itemShipmentContainer} columnGap={10}>
      <Row className={styles.itemShipmentStatus} rowGap={10} columnGap={10}>
        <Typography variant="h4" className={styles.itemShipmentTitle}>
          Status: {products?.status}
        </Typography>
        <Col>
          <Row className={styles.itemShipmentTrack} columnGap={10}>
            <Typography variant="h5">Tracking Number</Typography>
            <Typography variant="p" className={styles.itemShipmentNumber}>
              {products?.trackingNumber}
            </Typography>
          </Row>
        </Col>
      </Row>
      {products?.productDetails?.map((items) => (
        <Row key={items?.title} className={styles.itemHistory}>
          <Col md={12} lg={8}>
            <Row>
              <Col xs={5} md={4} lg={3}>
                <Image src={items?.imageUrl} alt="shoe" />
              </Col>
              <Col xs={7} md={8} lg={9} className={styles.itemProductDetail}>
                <Typography variant="h4" className={styles.itemProductTitle}>
                  {items?.title}
                </Typography>
                <Row flexDirection="column" rowGap={5}>
                  <Typography variant="p">{items?.color}</Typography>
                  <Typography variant="p">Size {items?.size}</Typography>
                  <Typography variant="p">Quantity {items?.quantity}</Typography>
                  <Typography variant="p">Item {items?.item}</Typography>
                  <Typography variant="h4" className={styles.itemProductPrice}>
                    {items?.price}
                  </Typography>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={4}>
            <Row rowGap={10} justifyContent="flex-end">
              <Button className={styles.itemProductBuy} size="large">
                {items?.buy}
              </Button>
              <Button size="large" className={styles.itemProductReview}>
                {items?.review}
              </Button>
              <Button size="large" className={styles.itemProductReview}>
                {items?.return}
              </Button>
            </Row>
          </Col>
        </Row>
      ))}
    </Row>
  );
};

LineItem.propTypes = {
  products: object.isRequired,
};

export default LineItem;
