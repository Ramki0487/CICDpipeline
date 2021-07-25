/*
 * File: Login.jsx
 * Project: webapp-rrs
 * Created Date: Monday, April 22nd 2021, 10:36:56 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com
 * -----
 * Last Modified: Monday July 12th 2021 12:07:23 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CreateAccountForm from '@Components/reactForms/createAccountForm/CreateAccountForm';
import LoginForm from '@Components/reactForms/loginForm/LoginForm';
import Button from '@RRS-UI/button/Button';
import Input from '@RRS-UI/input/Input';
import { Row } from '@RRS-UI/layout';
import Modal from '@RRS-UI/modal/Modal';
import Tabs from '@RRS-UI/tabs/Tabs';
import Typography from '@RRS-UI/typography/Typography';
import { array, bool, func } from 'prop-types';
import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import styles from './LoginModal.module.scss';

/**
 * Login Component
 * @param {boolean} showModal - State of the Modal
 * @param {array} tabList - List of tabs for Login
 * @returns {*}
 * @constructor
 */

const Login = ({ handleAfterClose, showModal }) => {
  const tabList = ['LOG IN', 'NEW ACCOUNT'];
  const [newAccount, setNewAccount] = useState(false);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const [forgetPassword, setForgetPassword] = useState({
    show: false,
    sent: false,
    text: 'Enter your email address below. Well send you a link to reset your password.',
  });
  const formText = newAccount
    ? 'Ready to create a new account? Lets get started!'
    : 'Login to your Road Runner Sports account.';
  const headerText = forgetPassword.show ? 'FORGOT YOUR PASSWORD?' : 'MY ACCOUNT';

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const handleTabClick = (tab) => {
    if (tab === tabList[0]) {
      setNewAccount(false);
      setActiveTab(tabList[0]);
    } else {
      setNewAccount(true);
      setActiveTab(tabList[1]);
    }
  };

  const handleForgetPasswordClick = () => {
    setForgetPassword({ ...forgetPassword, show: false });
  };

  const onSubmit = async () => {};

  const handleSubmitForgotPassword = async (form) => {
    setForgetPassword({
      show: forgetPassword.sent ? false : true,
      sent: true,
      text: `If an account exists with the email address ${form.emailAddress}, a reset password link has been sent. Please click the link in the email to create a new password`,
    });
  };

  const ForgetPasswordForm = () => {
    return (
      <Form
        onSubmit={handleSubmitForgotPassword}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Row className={styles.forgetPasswordForm} flexDirection="column" rowGap={20}>
                <Typography variant="p">{forgetPassword.text}</Typography>
                {!forgetPassword.sent && (
                  <Field
                    name="emailAddress"
                    render={({ input }) => (
                      <Input
                        {...input}
                        id="emailAddress"
                        contClass={styles.input}
                        label="Email address"
                      />
                    )}
                  />
                )}
                <div>
                  <Button size="medium" onClick={onSubmit} action="submit">
                    {forgetPassword.sent ? 'Close' : 'Send Email'}
                  </Button>
                </div>
                {!forgetPassword.sent && (
                  <span className={styles.clickableText} onClick={handleForgetPasswordClick}>
                    Back
                  </span>
                )}
              </Row>
            </form>
          );
        }}
      />
    );
  };

  return (
    <Modal
      handleAfterClose={handleAfterClose}
      showModal={show}
      overlayClass={styles.overlayContent}
      contentClass={styles.modalOverlay}
      wrapperClass={styles.wrapper}
    >
      <Modal.head className={styles.header}>
        <div className={styles.headerText}>
          <Typography variant="h2">{headerText}</Typography>
        </div>
      </Modal.head>
      <Modal.body>
        {!forgetPassword.show ? (
          <Tabs tabList={tabList} activeTab={activeTab} typography="h3" onClick={handleTabClick}>
            <Row flexDirection="column" className={styles.loginContent} rowGap={10}>
              <Typography className={styles.infoText} variant="h5">
                {formText}
              </Typography>
              {!newAccount && <LoginForm />}
              {newAccount && <CreateAccountForm />}
            </Row>
          </Tabs>
        ) : (
          <ForgetPasswordForm />
        )}
      </Modal.body>
    </Modal>
  );
};

// Perform Prop Validation
Login.propTypes = {
  handleAfterClose: func.isRequired,
  showModal: bool,
  tabList: array,
};

// Export the component
export default Login;
