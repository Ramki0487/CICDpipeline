/*
 * File: EmailSignupForm.jsx
 * Project: webapp-rrs
 * Created Date: Monday, July 12th 2021, 3:12:27 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 20th 2021 10:05:35 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import InputField from '@Components/reactForms/formFields/inputField/InputField';
import EmailSignUpService from '@Services/emailSignUpService/EmailSignUpService';
import logger from '@Utils/Logger';
import { func } from 'prop-types';
import { Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import FieldValidator, { email, required } from '../helpers/FieldValidator';

/**
 * EmailSignupForm Component
 * @param {function} handleSubmitSuccess - Callback on submit success
 * @returns {*}
 * @constructor
 */
const EmailSignupForm = ({ handleSubmitSuccess }) => {
  const { sessionConfirmationNumber } = useSelector((state) => state.sessionInfo);
  const onSubmit = async (value) => {
    try {
      await EmailSignUpService.invoke({ email: value, sessionConfirmationNumber });
      handleSubmitSuccess?.();
    } catch (error) {
      logger.error('API exception in Email Sign-up:', error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <InputField
            isInputGroup
            name="emailSignup"
            placeholder="Email Address"
            validate={FieldValidator([required(), email()], 'email address')}
            btnProps={{
              theme: 'rr-skyblue',
              btnlabel: 'Sign Up',
              onClick: handleSubmit,
              isProcessing: submitting,
              action: 'submit',
            }}
          />
        </form>
      )}
    />
  );
};

EmailSignupForm.propTypes = {
  handleSubmitSuccess: func.isRequired,
};

export default EmailSignupForm;
