/*
 * File: LoginForm.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, July 10th 2021, 4:23:33 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 12th 2021 12:07:23 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import InputField from '@Components/reactForms/formFields/inputField/InputField';
import PasswordField from '@Components/reactForms/formFields/passwordField/PasswordField';
import { accountLogin } from '@Redux/actions/Profile';
import Button from '@RRS-UI/button/Button';
import { Row } from '@RRS-UI/layout';
import FieldValidator, { email, required } from '../helpers/FieldValidator';

/**
 * LoginForm Component
 * @returns {*}
 * @constructor
 */

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async ({ emailAddress, password }) =>
    dispatch(accountLogin({ login: emailAddress, password }));

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
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
            <Row justifyContent="space-between">
              <Button size="small" onClick={handleSubmit} isProcessing={submitting} action="submit">
                Log In
              </Button>

              <span
              // className={styles.clickableText}
              // onClick={() => setForgetPassword({ ...forgetPassword, show: true })}
              >
                Forgot my password
              </span>
            </Row>
          </Row>
        </form>
      )}
    />
  );
};

export default LoginForm;
