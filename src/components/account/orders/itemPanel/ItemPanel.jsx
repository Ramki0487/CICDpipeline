/*
 * File: ItemPanel.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { Row, Col } from '@RRS-UI/layout';
import Panel from '@RRS-UI/panel/Panel';
import Image from '@RRS-UI/image/Image';
import Typography from '@RRS-UI/typography/Typography';
import Button from '@RRS-UI/button/Button';
import { object } from 'prop-types';
import styles from './ItemPanel.module.scss';

/**
 * ItemPanel Component
 * @param {object} items - object containes ItemPanel Details
 * @returns {*}
 * @constructor
 */
const ItemPanel = ({ items }) => {
  return (
    <Panel>
      <Panel.Head className={styles.content}>
        <Row justifyContent="space-between" alignItems="center">
          <Col>
            <Typography variant="h3">{items?.orderId}</Typography>
            <Typography variant="p">{items?.orderDate}</Typography>
          </Col>
          <Col noflex>
            <Button size="small">{items?.orderLink}</Button>
          </Col>
        </Row>
      </Panel.Head>
      <Panel.Body className={styles.content}>
        <Row>
          {items?.ImageUrls?.map((img, index) => (
            <Col xs={3} lg={2} key={index}>
              <Image src={img?.url} alt="shoe" />
            </Col>
          ))}
        </Row>
      </Panel.Body>
    </Panel>
  );
};

ItemPanel.propTypes = {
  items: object.isRequired,
};

export default ItemPanel;
