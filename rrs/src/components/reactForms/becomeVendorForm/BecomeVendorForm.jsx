/*
 * File: BecomeVendorForm.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, July 09th 2021, 8:44:33 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import InputField from '@Components/reactForms/formFields/inputField/InputField';
import TextAreaField from '@Components/reactForms/formFields/TextAreaField/TextAreaField';
import Button from '@RRS-UI/button/Button';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import BecomeVendorService from '@Services/becomeVendorService/BecomeVendorService';
import logger from '@Utils/Logger';
import { func } from 'prop-types';
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import FieldValidator, { email, phoneNumber, required } from '../helpers/FieldValidator';
import styles from './BecomeVendorForm.module.scss';

/**
 * BecomeVendorForm Component
 * @param {function} handleOnSuccess - Callback function
 * @returns {*}
 * @constructor
 */

const BecomeVendorForm = ({ handleOnSuccess }) => {
  const { sessionConfirmationNumber } = useSelector((state) => state.sessionInfo);

  const onSubmit = async (form) => {
    try {
      await BecomeVendorService.invoke({ ...form, sessionConfirmationNumber });
      handleOnSuccess?.();
    } catch (error) {
      logger.error('API exception in become a vendor service:', error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Row className={styles.form} flexDirection="column" rowGap={15}>
            <Row flexDirection="row" rowGap={15} columnGap={15}>
              <InputField
                className={styles.field}
                name="firstName"
                label="First Name*"
                validate={FieldValidator([required()], 'First Name')}
              />
              <InputField
                className={styles.field}
                name="lastName"
                label="Last Name*"
                validate={FieldValidator([required()], 'Last Name')}
              />
            </Row>
            <Row flexDirection="row" rowGap={15} columnGap={15}>
              <InputField
                className={styles.field}
                name="emailAddress"
                label="Email*"
                validate={FieldValidator([required(), email()], 'email address')}
              />
              <InputField
                className={styles.field}
                name="phoneNumber"
                label="Phone Number*"
                maxLength={10}
                validate={FieldValidator([required(), phoneNumber()], 'phone number')}
              />
            </Row>
            <Row rowGap={5}>
              <Typography variant="small">
                Comments (please tell us abour your company and products)
              </Typography>
              <TextAreaField name="comments" label="Comments" rows={6} />
            </Row>
            <Typography variant="small">Fields marked with * are required</Typography>
            <div>
              <Button
                action="submit"
                isProcessing={submitting}
                onClick={handleSubmit}
                size="small"
                theme="rr-navy"
              >
                Submit
              </Button>
            </div>
          </Row>
        </form>
      )}
    />
  );
};

BecomeVendorForm.propTypes = {
  handleOnSuccess: func,
};

BecomeVendorForm.defaultProps = {
  handleOnSuccess: null,
};
export default BecomeVendorForm;
