/*
 * File: ContactUsForm.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, July 09th 2021, 8:44:33 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import InputField from '@Components/reactForms/formFields/inputField/InputField';
import SelectField from '@Components/reactForms/formFields/selectBoxField/SelectBoxField';
import TextAreaField from '@Components/reactForms/formFields/TextAreaField/TextAreaField';
import Button from '@RRS-UI/button/Button';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import ContactUsServices from '@Services/contactUsService/ContactUsService';
import logger from '@Utils/Logger';
import { func } from 'prop-types';
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import FieldValidator, { email, phoneNumber, required } from '../helpers/FieldValidator';
import styles from './ContactUsForm.module.scss';

const selectFieldOptions = [
  { label: 'Please Choose', isSelected: true },
  { label: 'Orders', value: 'Orders' },
  { label: 'Deals / Promotions', value: 'Deals' },
  { label: 'International Orders', value: 'International' },
  { label: 'Shoe Recommendations / Product Inquiry', value: 'Recomendations' },
  { label: 'Club Membership / Club Discounts', value: 'Club' },
  { label: 'Technical Problems', value: 'Problems' },
  { label: 'General', value: 'General' },
  { label: 'California Consumer Protection Policy', value: 'ccpp' },
];

/**
 * ContactUsForm Component
 * @param {function} handleOnSuccess - Callback function
 * @returns {*}
 * @constructor
 */

const ContactUsForm = ({ handleOnSuccess }) => {
  const { sessionConfirmationNumber } = useSelector((state) => state.sessionInfo);

  const onSubmit = async (form) => {
    try {
      await ContactUsServices.invoke({ ...form, sessionConfirmationNumber });
      handleOnSuccess?.();
    } catch (error) {
      logger.error('API exception in contact us service:', error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ form, handleSubmit, submitting }) => (
        <Row className={styles.contactForm} justifyContent="center">
          <Col md={7} lg={6} xl={3}>
            <form onSubmit={handleSubmit}>
              <Row flexDirection="column" rowGap={10}>
                <SelectField
                  id="type"
                  name="inquiryType"
                  options={selectFieldOptions}
                  validate={FieldValidator([required()], 'Inquiry Type')}
                />
                <Typography variant="small">All items marked * are required.</Typography>
                <InputField
                  name="firstName"
                  label="First Name*"
                  validate={FieldValidator([required()], 'First Name')}
                />
                <InputField
                  name="lastName"
                  label="Last Name*"
                  validate={FieldValidator([required()], 'Last Name')}
                />
                <InputField
                  name="emailAddress"
                  label="Email*"
                  validate={FieldValidator([required(), email()], 'email address')}
                />
                <InputField name="postalCode" label="Postal Code" type="text" />
                <InputField
                  name="phoneNumber"
                  label="Phone Number*"
                  maxLength={10}
                  validate={FieldValidator([required(), phoneNumber()], 'phone number')}
                />
                <TextAreaField name="comments" label="Comments" rows={6} />
                <Row rowGap={20} columnGap={20} justifyContent="center">
                  <Button action="reset" size="small" theme="rr-iceblue" onClick={form.reset}>
                    Cancel
                  </Button>
                  <Button
                    action="submit"
                    isProcessing={submitting}
                    onClick={handleSubmit}
                    size="small"
                    theme="rr-navy"
                  >
                    Submit
                  </Button>
                </Row>
              </Row>
            </form>
          </Col>
        </Row>
      )}
    />
  );
};

ContactUsForm.propTypes = {
  handleOnSuccess: func,
};

ContactUsForm.defaultProps = {
  handleOnSuccess: null,
};

export default ContactUsForm;
