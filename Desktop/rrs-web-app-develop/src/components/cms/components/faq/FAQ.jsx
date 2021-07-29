/*
 * File: FAQ.jsx
 * Project: webapp-rrs
 * Author: Prakash <prakashraj.asaikannan@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Accordion from '@RRS-UI/accordion/Accordion';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array } from 'prop-types';
import styles from './FAQ.module.scss';

/**
 * FAQ Component
 * @param {array} frequent - array to render component
 */

const FAQ = ({ frequent }) => {
  return (
    <Col xs={12} lg={7} className={styles.faqContainer}>
      <Row rowGap={15}>
        <Typography variant="h1"> FAQS</Typography>
        <Row justifyContent="center">
          {frequent?.map((data) => (
            <Accordion key={data.id}>
              <Accordion.head className={styles.faqHead}>
                <Typography variant="h4">{data?.question}</Typography>
              </Accordion.head>
              <Accordion.body>
                <Typography variant="h5">{data?.answer}</Typography>
              </Accordion.body>
            </Accordion>
          ))}
        </Row>
      </Row>
    </Col>
  );
};

export default FAQ;

FAQ.propTypes = {
  frequent: array,
};
