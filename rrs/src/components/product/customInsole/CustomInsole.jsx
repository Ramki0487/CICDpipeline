/*
 * File: CustomInsole.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, July 6th 2021, 5:04:29 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Card from '@RRS-UI/card/Card';
import Input from '@RRS-UI/input/Input';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import styles from './CustomInsole.module.scss';

const CustomInsole = () => {
  return (
    <Card theme="iceblue" className={styles.insole}>
      <Typography variant="h5">Lookup custom insoles from in-store lorem ipsum dolor!</Typography>
      <Typography variant="small">
        Just enter your email address below that you used in-store for your first pair of Custom
        Insoles. Then choose style and quantity. It&apos;s that easy!
      </Typography>
      <Row flexWrap="nowrap" flexDirection="column" className={styles.insoleForm}>
        <Input placeholder="Email Address" className={styles.insoleTextbox} />
        <Button className={styles.insoleButton}>Look Me Up</Button>
      </Row>
      <Typography variant="small">
        Never been fitted for custom insoles? <LinkTag>Find a Store</LinkTag>
      </Typography>
    </Card>
  );
};
export default CustomInsole;
