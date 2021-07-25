/* istanbul ignore file */
/*
 * File: login.js
 * Project: webapp-rrs
 * Created Date: Tuesday, May 31st 2021, 7:28:01 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Button from '@RRS-UI/button/Button';
import Input from '@RRS-UI/input/Input';
import { Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import SessionInfoService from '@Services/sessionInfoService/SessionInfoService';
import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector } from 'react-redux';
// import LoginService from '../../../services/profileService/LoginService';
// import { accountLogin } from '../../../reduxStore/actions/Profile';
// import { getCookie } from '../../../utils/cookies/Cookies';
import styles from './CheckoutLogin.module.scss';

const Login = () => {
  const { device } = useSelector((state) => state);
  // const dispatch = useDispatch();

  const [attachedMembership, setAttachedMembership] = useState(false);
  const attachedMembershipText = attachedMembership
    ? 'Ready to create a new account? Lets get started!'
    : 'ATTACH MY VIP MEMBERSHIP';
  const onSubmitLogin = async () => {
    // const sessionInfo = getCookie('sessionInfo');
    // const { sessionConfirmationNumber } = sessionInfo;
    try {
      // const request = {
      //   sessionConfirmationNumber,
      //   login: form?.emailAddress,
      //   password: form?.password,
      // };
      // let response = await LoginService.invoke(request);
      // dispatch(accountLogin({ ...response.payload, request }));
    } catch (error) {
      Promise.reject(error);
    }
  };

  const onSubmitAttachedMembership = () => {
    setAttachedMembership(true);
  };

  useEffect(() => {
    getSessionInfo();
  }, []);

  const getSessionInfo = async () => {
    const {
      payload: { state },
    } = await SessionInfoService.invoke();
    document.cookie = `sessionInfo=${JSON.stringify(state)}`;
  };

  const rowProps = {
    flexDirection: !device?.isDesktop ? 'column' : 'row',
    rowGap: !device?.isDesktop ? 30 : null,
  };

  return (
    <Container className={styles.wrapper}>
      <Row className={styles.topText} flexDirection="column" justifyContent="center" rowGap={20}>
        <Typography variant="h1">START CHECKOUT</Typography>
        <Button theme="rr-green" size="nosize">
          Continue as Guest
        </Button>
      </Row>
      <Row className={styles.or} justifyContent="center">
        <Typography className={styles.orText} variant="h5">
          OR
        </Typography>
      </Row>
      <Row {...rowProps} className={styles.formContent} justifyContent="space-between">
        <Form
          onSubmit={onSubmitLogin}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Row className={styles.form} flexDirection="column" rowGap={10}>
                <Typography className={styles.sectionHeader} variant="h5">
                  LOGIN WITH ONLINE ACCOUNT
                </Typography>
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
                <Field name="password">
                  {({ input }) => (
                    <Input
                      {...input}
                      id="password"
                      contClass={styles.input}
                      label="Password"
                      type="password"
                    />
                  )}
                </Field>
                <Row className={styles.buttons} flexDirection="column">
                  <Row justifyContent="space-between">
                    <Button
                      size="medium"
                      onClick={handleSubmit}
                      disabled={pristine || submitting}
                      action="submit"
                      theme="rr-iceblue"
                    >
                      <Typography variant="small">Log In</Typography>
                    </Button>
                    <a>Forgot my password</a>
                  </Row>
                </Row>
              </Row>
            </form>
          )}
        />
        <span className={styles.divider} />
        <Form
          onSubmit={onSubmitAttachedMembership}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Row className={styles.form} flexDirection="column" rowGap={10}>
                <Typography className={styles.sectionHeader} variant="h5">
                  {attachedMembershipText}
                </Typography>
                {!attachedMembership ? (
                  <>
                    <div>
                      <span className={styles.vipText}>
                        <strong>VIP Family Members without an online account&nbsp;</strong>
                        attach your VIP membership to apply your VIP benefits
                      </span>
                    </div>
                    <Field
                      name="emailAddressVip"
                      render={({ input }) => (
                        <Input
                          {...input}
                          id="emailAddressVip"
                          contClass={styles.input}
                          label="Email address"
                        />
                      )}
                    />
                    <Row className={styles.buttons} flexDirection="column">
                      <Row justifyContent="space-between">
                        <Button
                          size="medium"
                          onClick={handleSubmit}
                          disabled={pristine || submitting}
                          action="submit"
                          theme="rr-iceblue"
                        >
                          <Typography variant="small">Attach my VIP Membership</Typography>
                        </Button>
                      </Row>
                    </Row>
                  </>
                ) : (
                  <>
                    <Field
                      name="password"
                      render={({ input }) => (
                        <Input
                          {...input}
                          id="password"
                          contClass={styles.input}
                          label="Password"
                          type="password"
                        />
                      )}
                    />
                    <Field
                      name="confirmPassword"
                      render={({ input }) => (
                        <Input
                          {...input}
                          id="confirmPassword"
                          // error={passwordConfirmError}
                          contClass={styles.input}
                          label="Confirm Password"
                          type="password"
                        />
                      )}
                    />
                    <Row className={styles.buttons} flexDirection="column" rowGap={20}>
                      <Row justifyContent="space-between">
                        <Button
                          size="medium"
                          onClick={handleSubmit}
                          disabled={pristine || submitting}
                          action="submit"
                          theme="rr-iceblue"
                        >
                          Create Account
                        </Button>
                      </Row>
                    </Row>
                  </>
                )}
              </Row>
            </form>
          )}
        />
      </Row>
    </Container>
  );
};

export default Login;
