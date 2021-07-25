/*
 * File: LazyObserver.stories.js
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 3:02:42 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday June 14th 2021 7:41:57 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Mock from '@Mocks/Lazyload/mock.json';
import { Col, Row } from '../layout';
import LazyObserver from './LazyObserver';
import styles from './LazyObserver.stories.module.scss';

export default {
  title: 'LazyObserver',
  component: LazyObserver,
};

export const Template = (args) => (
  <Row>
    {Mock.map((item, ItemKey) => (
      <Col md={4} key={ItemKey} className={styles.imageContainer}>
        <LazyObserver {...args}>
          <img src={item.url} alt="Images" />
        </LazyObserver>
      </Col>
    ))}
  </Row>
);

Template.args = {
  noscript: false,
  options: {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
  },
};
