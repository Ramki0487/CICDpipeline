/* istanbul ignore file */
/*
 * File: vip.js
 * Project: webapp-rrs
 * Created Date: Tuesday, May 31st 2021, 7:28:01 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Button from '@RRS-UI/button/Button';
import Card from '@RRS-UI/card/Card';
import { Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import styles from './Vip.module.scss';

const Vip = () => {
  const PlusSign = () => {
    return (
      <Row className={styles.plus} justifyContent="center" alignItems="center">
        <span className={styles.horizontalLine} />
        <span className={styles.verticalLine} />
      </Row>
    );
  };

  return (
    <Container className={styles.wrapper}>
      <Row
        className={styles.topText}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        rowGap={25}
      >
        <Typography className={styles.title} variant="h1">
          WANT TO JOIN THE VIP FAMILY?
        </Typography>
        <Typography variant="h3">
          JOIN FOR $1.99 & GET <span className={styles.vipRed}>$64.24</span> IN BENEFITS ON THIS
          ORDER!
        </Typography>
        <Row flexDirection="row" justifyContent="center" flexWrap="nowrap" columnGap={5}>
          <Card className={styles.priceCard}>
            <Row
              className={styles.vipRed}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              rowGap={5}
            >
              <Typography variant="h3">$45.79</Typography>
              <Typography className={styles.priceCardText} variant="small">
                20% VIP Savings
              </Typography>
            </Row>
          </Card>
          <PlusSign />
          <Card className={styles.priceCard}>
            <Row
              className={styles.vipRed}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              rowGap={5}
            >
              <Typography variant="h3">$11.45</Typography>
              <Typography className={styles.priceCardText} variant="small">
                Rewards Cash earned
              </Typography>
            </Row>
          </Card>
          <PlusSign />
          <Card className={styles.priceCard}>
            <Row
              className={styles.vipRed}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              rowGap={5}
            >
              <Typography variant="h3">$7.00</Typography>
              <Typography className={styles.priceCardText} variant="small">
                VIP Shipping value
              </Typography>
            </Row>
          </Card>
        </Row>
        <Row
          flexDirection="column"
          justifyContent="center"
          rowGap={20}
          alignItems="center"
          textAlign="center"
        >
          <Typography className={styles.defaultText} variant="p">
            Plus, 90-day test run, lorem ipsum dolor sit amet adipiscing elit nullam est.
          </Typography>
          <Button size="nosize" theme="rr-iceblue">
            Join VIP & Continue
          </Button>
        </Row>
        <span className={styles.divider} />
        <Row flexDirection="column" justifyContent="center" rowGap={10} alignItems="center">
          <Typography className={styles.defaultText} variant="small">
            Not interested? Thats OK!
          </Typography>
          <Button size="nosize" theme="rr-green">
            Continue without VIP
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default Vip;
