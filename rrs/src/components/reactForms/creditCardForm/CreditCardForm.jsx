import InputField from '@Components/reactForms/formFields/inputField/InputField';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { func } from 'prop-types';
import { Form } from 'react-final-form';
import styles from './CreditCardForm.module.scss';

/**
 * CreditCardForm Component
 * @param {function} handleOnSubmit - Callback function
 * @returns {*}
 * @constructor
 */

const CreditCardForm = ({ handleOnSubmit }) => {
  const onSubmit = () => {
    handleOnSubmit && handleOnSubmit();
  };

  return (
    <Form
      onSubmit={onSubmit}
      // validate={errorHandling}
      render={({ handleSubmit }) => (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
          <Row flexDirection="column" rowGap={10}>
            <InputField
              inputProps={{
                name: 'name',
                label: 'Name on Card',
                id: 'name',
                type: 'text',
              }}
            />
            <InputField inputProps={{ name: 'cardNumber', label: 'Card Number', type: 'text' }} />
            <Row rowGap={10} columnGutter={10}>
              <Col xs={9} md={4}>
                <Typography variant="small">Expiration Date</Typography>
                <InputField
                  inputProps={{
                    name: 'expiryDaate',
                    label: '',
                    type: 'date',
                    className: `${styles.cardFormFieldsExpiryMonth}`,
                  }}
                />
              </Col>
              <Col xs={3} md={2}>
                <Typography variant="small">Year</Typography>
                <InputField inputProps={{ name: 'year', label: '', type: '' }} />
              </Col>
              <Col xs={6} md={2}>
                <Typography variant="small">CVN</Typography>
                <InputField inputProps={{ name: 'Zip Code', type: 'number' }} />
              </Col>
              <Col xs={6} md={4}>
                <Typography variant="small">Card Zip Code</Typography>
                <InputField inputProps={{ name: 'CardZipCode', type: 'text' }} />
              </Col>
            </Row>
          </Row>
        </form>
      )}
    />
  );
};

CreditCardForm.propTypes = {
  handleOnSubmit: func,
};

CreditCardForm.defaultProps = {
  handleOnSubmit: null,
};

export default CreditCardForm;
