/*
 * File: CreateAccountForm.jsx
 * Project: webapp-rrs
 * Created Date: Monday, July 12th 2021, 2:42:03 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 12th 2021 2:42:03 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import InputField from '@Components/reactForms/formFields/inputField/InputField';
import PasswordField from '@Components/reactForms/formFields/passwordField/PasswordField';
import { accountRegister } from '@Redux/actions/Profile';
import Button from '@RRS-UI/button/Button';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import FieldValidator, { confirmPassword, email, required } from '../helpers/FieldValidator';
import styles from './CreateAccountForm.module.scss';

/**
 * CreateAccountForm Component
 * @returns {*}
 * @constructor
 */

const CreateAccountForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async ({ emailAddress, password, confirmPassword }) =>
    dispatch(accountRegister({ login: emailAddress, password, confirmPassword }));

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Row flexDirection="column" rowGap={10}>
            <InputField
              name="emailAddress"
              label="Email address*"
              validate={FieldValidator([required(), email()], 'email address')}
            />
            <PasswordField
              name="password"
              label="Password*"
              validate={FieldValidator([required()], 'password')}
            />
            <PasswordField
              name="confirmPassword"
              label="Confirm Password*"
              validate={FieldValidator([confirmPassword(values.password)], 'confirm password')}
            />
            <Button
              size="small"
              onClick={handleSubmit}
              isProcessing={submitting}
              action="submit"
              className={styles.createBtn}
            >
              Create Account
            </Button>
            <Typography variant="p">
              In-store VIP message we&apos;ll look up your email address and tie it to your account
            </Typography>
          </Row>
        </form>
      )}
    />
  );
};

export default CreateAccountForm;
