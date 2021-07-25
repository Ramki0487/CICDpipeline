/*
 * File: layout.stories.js
 * Project: webapp-rrs
 * Created Date: Friday, February 19th 2021, 7:56:45 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 28th 2021 4:30:34 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { storiesOf } from '@storybook/react';
import { Col, Container, Row } from '.';
import styles from './layout.stories.module.scss';

const layoutStories = storiesOf('Layout', module);

layoutStories.add('Default Layout', () => (
  <>
    <Row>
      <Col md={3} className={styles.storybookCol}>
        md-3
      </Col>
      <Col md={4} className={styles.storybookCol}>
        md-4
      </Col>
      <Col md={1} className={styles.storybookCol}>
        md-1
      </Col>
      <Col md={4} className={styles.storybookCol}>
        md-4
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col sm={2} className={styles.storybookCol}>
        sm-2
      </Col>
      <Col sm={6} className={styles.storybookCol}>
        sm-6
      </Col>
      <Col sm={2} className={styles.storybookCol}>
        sm-2
      </Col>
      <Col sm={2} className={styles.storybookCol}>
        sm-2
      </Col>
    </Row>
    <Row>
      <Col sm={6} md={4} className={styles.storybookCol}>
        sm-6
      </Col>
      <Col sm={6} md={8} className={styles.storybookCol}>
        sm-6
      </Col>
    </Row>
    <h2>Container</h2>
    <Container>
      <Row>
        <Col className={styles.storybookCol}>Col 1</Col>
        <Col className={styles.storybookCol}>Col 2</Col>
        <Col className={styles.storybookCol}>Col 3</Col>
        <Col className={styles.storybookCol}>Col 4</Col>
      </Row>
    </Container>
    <h2>Flex Direction : row</h2>
    <Row flexDirection="row">
      <Col className={styles.storybookCol} alignSelf="flex-end">
        Col 1
      </Col>
      <Col className={styles.storybookCol} alignSelf="center">
        Col 2
      </Col>
      <Col className={styles.storybookCol} alignSelf="center">
        Col 3
      </Col>
      <Col className={styles.storybookCol} alignSelf="center">
        Col 4
      </Col>
    </Row>
    <h2>Flex Direction : row-reverse and Col : auto</h2>
    <Row flexDirection="row-reverse">
      <Col className={styles.storybookCol} auto>
        Col 1
      </Col>
      <Col className={styles.storybookCol} auto>
        Col 2
      </Col>
      <Col className={styles.storybookCol} auto>
        Col 3
      </Col>
      <Col className={styles.storybookCol} auto>
        Col 4
      </Col>
    </Row>
    <h2>Flex Direction : column</h2>
    <Row flexDirection="column">
      <Col className={styles.storybookCol}>Col 1</Col>
      <Col className={styles.storybookCol}>Col 2</Col>
      <Col className={styles.storybookCol}>Col 3</Col>
      <Col className={styles.storybookCol}>Col 4</Col>
    </Row>
    <h2>Flex Direction : column-reverse</h2>
    <Row flexDirection="column-reverse">
      <Col className={styles.storybookCol}>Col 1</Col>
      <Col className={styles.storybookCol}>Col 2</Col>
      <Col className={styles.storybookCol}>Col 3</Col>
      <Col className={styles.storybookCol}>Col 4</Col>
    </Row>
    <h2>Justify content : flex-start</h2>
    <Row justifyContent="flex-start">
      <Col md={4} className={styles.storybookCol}>
        col 1 &gt; md-4
      </Col>
      <Col md={6} className={styles.storybookCol}>
        col 2 &gt; md-6
      </Col>
    </Row>
    <h2>Justify content : flex-end</h2>
    <Row justifyContent="flex-end">
      <Col md={4} className={styles.storybookCol}>
        col 1 &gt; md-4
      </Col>
      <Col md={6} className={styles.storybookCol}>
        col 2 &gt; md-6
      </Col>
    </Row>
    <h2>Justify content : center</h2>
    <Row justifyContent="center">
      <Col md={4} className={styles.storybookCol}>
        col 1 &gt; md-4
      </Col>
      <Col md={6} className={styles.storybookCol}>
        col 2 &gt; md-6
      </Col>
    </Row>
    <h2>Justify content : space-around</h2>
    <Row justifyContent="space-around">
      <Col md={6} className={styles.storybookCol}>
        col 1 &gt; md-6
      </Col>
      <Col md={4} className={styles.storybookCol}>
        col 2 &gt; md-4
      </Col>
    </Row>
    <h2>Justify content : space-between</h2>
    <Row justifyContent="space-between">
      <Col md={6} className={styles.storybookCol}>
        col 1 &gt; md-6
      </Col>
      <Col md={4} className={styles.storybookCol}>
        col 2 &gt; md-4
      </Col>
    </Row>
    <h2>Justify content : space-evenly</h2>
    <Row justifyContent="space-evenly">
      <Col md={6} className={styles.storybookCol}>
        col 1 &gt; md-6
      </Col>
      <Col md={4} className={styles.storybookCol}>
        col 2 &gt; md-4
      </Col>
    </Row>
    <h2>Align Self : flex-start and flex-end</h2>
    <Row className={styles.storybookRow} justifyContent="space-evenly">
      <Col md={6} className={styles.storybookCol} alignSelf="flex-start">
        col 1 &gt; md-6
      </Col>
      <Col md={4} className={styles.storybookCol} alignSelf="flex-end">
        col 2 &gt; md-4
      </Col>
    </Row>
    <h2>Align Self : center</h2>
    <Row className={styles.storybookRow} justifyContent="space-evenly">
      <Col md={6} className={styles.storybookCol} alignSelf="center">
        col 1 &gt; md-6
      </Col>
      <Col md={4} className={styles.storybookCol} alignSelf="center">
        col 2 &gt; md-4
      </Col>
    </Row>
    <h2>Align Self : baseline and stretch</h2>
    <Row className={styles.storybookRow} justifyContent="space-evenly">
      <Col md={6} className={styles.storybookCol} alignSelf="baseline">
        col 1 &gt; md-6
      </Col>
      <Col md={4} className={styles.storybookCol} alignSelf="stretch">
        col 2 &gt; md-4
      </Col>
    </Row>
  </>
));
