/*
 * File: Slider.stories.js
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 4:19:23 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Friday March 19th 2021 11:49:43 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Slider from './Slider';
import { Col } from '../layout';
import styles from './Slider.stories.module.scss';

export const Primary = () => {
  return (
    <Slider>
      <Col className={styles.storybookCol}>
        <p>Item 1</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 2</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 3</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 4</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 5</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 6</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 7</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 8</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 9</p>
      </Col>
      <Col className={styles.storybookCol}>
        <p>Item 10</p>
      </Col>
    </Slider>
  );
};

export default {
  title: 'Slider',
  component: Slider,
};
