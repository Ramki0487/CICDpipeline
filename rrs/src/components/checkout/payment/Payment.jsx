/*
 * File: Payment.jsx
 * Project: webapp-rrs
 * Created Date: Monday, 19th July 2021 10:04:50 pm
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Monday, 19th July 2021 11:14:02 pm
 * Modified By: Mouni <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, array, string } from 'prop-types';
import Typography from '@RRS-UI/typography/Typography';
import PaymentAccordion from '@Components/paymentAccordion/PaymentAccordion';
//import CreditCardForm from '@Components/reactForms/creditCardForm/CreditCardForm';
import { Row } from '@RRS-UI/layout';
import Checkbox from '@RRS-UI/checkbox/Checkbox';
import Button from '@RRS-UI/button/Button';
import CardPicker from '@RRS-UI/cardPicker/CardPicker';
import RadioButton from '@RRS-UI/radioButton/RadioButton';
import styles from './Payment.module.scss';

/**
 * Payment Component
 * @param {array} paymentOptions - Array of payment options object
 * @param {string} activePaymentId - unique value to identify default active item
 * @param {bool} callBackOnSelect - Callback function on payment method selected
 * @returns {*}
 * @constructor
 */

const Payment = ({ paymentOptions, activePaymentId, callBackOnSelect }) => {
  return (
    <>
      <Typography className={styles.paymentTitle} variant="h2">
        PAYMENT
      </Typography>
      <Row className={styles.paymentRedeem} rowGap={20}>
        <Checkbox label="I have a source code or gift card" />
        <Checkbox label="Redeem my VIP Rewards Cash ($23.54)" />
      </Row>
      <PaymentAccordion selectedAccordion={activePaymentId} callBackOnSelect={callBackOnSelect}>
        {paymentOptions.map((option) => (
          <PaymentAccordion.item id={option.paymentId} key={option.paymentId}>
            <PaymentAccordion.item.head id={option.paymentId}>
              <Row>
                <RadioButton
                  value={option.paymentId}
                  isSelected={activePaymentId === option.paymentId}
                />
                <span>{option.name}</span>
              </Row>
            </PaymentAccordion.item.head>
            <PaymentAccordion.item.body className={styles.paymentBody}>
              {option?.savedPayment?.length ? (
                <>
                  <Row>
                    {option?.savedPayment?.map((savedCard) => (
                      <CardPicker className={styles.paymentCard} key={savedCard.paymentId}>
                        <Typography variant="h5">{savedCard.cardType}</Typography>
                        <Typography variant="p">{`Ending in ${savedCard.cardNumber}`}</Typography>
                        <span className={styles.paymentCardEdit}>Edit</span>
                      </CardPicker>
                    ))}
                  </Row>
                  <Button className={styles.paymentBtnAdd}>Add New Card</Button>
                </>
              ) : (
                <Button className={styles.paymentBtnAdd}>Link Account</Button>
              )}
            </PaymentAccordion.item.body>
          </PaymentAccordion.item>
        ))}
      </PaymentAccordion>
    </>
  );
};

Payment.propTypes = {
  paymentOptions: array,
  activePaymentId: string.isRequired,
  callBackOnSelect: func,
};

Payment.defaultProps = {
  paymentOptions: [],
  callBackOnSelect: null,
};

export default Payment;
