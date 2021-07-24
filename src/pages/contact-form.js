/*
 * File: contact-form.js
 * Project: webapp-rrs
 * Created Date: Sunday, July 4th 2021, 8:11:41 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 12:11:41 pm
 * Modified By: Relson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { useState } from 'react';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import ContactUsForm from '@Components/reactForms/contactUsForm/ContactUsForm';
import styles from '@Assets/styles/pages/contact-form.module.scss';

const ContactUs = () => {
  const [requestSuccess, setRequestSuccess] = useState(false);

  const handleOnSuccess = () => {
    setRequestSuccess(true);
  };

  return requestSuccess ? (
    <Row className={styles.wrapper} justifyContent="center">
      <Typography variant="h2">Your request has been submitted</Typography>
    </Row>
  ) : (
    <Row className={styles.wrapper} justifyContent="center">
      <Typography variant="h2">How Can We Help You?</Typography>
      <ContactUsForm handleOnSuccess={handleOnSuccess} />
    </Row>
  );
};

export default ContactUs;
