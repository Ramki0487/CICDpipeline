import CheckBoxField from '@Components/reactForms/formFields/checkBoxField/CheckBoxField';
import InputField from '@Components/reactForms/formFields/inputField/InputField';
import SelectField from '@Components/reactForms/formFields/selectBoxField/SelectBoxField';
import Button from '@RRS-UI/button/Button';
import { Col, Row } from '@RRS-UI/layout';
import { func, string } from 'prop-types';
import { Form } from 'react-final-form';
import styles from './AddressForm.module.scss';

/**
 * AddressForm Component
 * @param {number} pageName - Page name to render customized contents
 * @param {function} handleOnSubmit - Callback function
 * @returns {*}
 * @constructor
 */

const AddressForm = ({ pageName, handleOnSubmit }) => {
  const isCheckout = pageName == 'checkout';
  const btnText = 'Save Address';
  const labelText =
    pageName == 'checkout'
      ? 'Email signup lorem ipsum dolor sit amet adipiscing elit nullam'
      : 'Set as Primary Address';

  const onSubmit = () => {
    handleOnSubmit && handleOnSubmit();
  };

  return (
    <Form
      onSubmit={onSubmit}
      // validate={errorHandling}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Row className={styles.addressForm} flexDirection="column" rowGap={10}>
            <InputField
              inputProps={{
                name: 'nickname',
                label: 'Address Nickname, ex: Work (optional)',
                type: 'text',
              }}
            />
            <Row rowGap={10} columnGutter={10}>
              <Col xs={6}>
                <InputField inputProps={{ name: 'firstName', label: 'First Name', type: 'text' }} />
              </Col>
              <Col xs={6}>
                <InputField inputProps={{ name: 'lastName', label: 'Last Name', type: 'text' }} />
              </Col>
            </Row>
            <InputField inputProps={{ name: 'address', label: 'Address', type: 'text' }} />
            <InputField
              inputProps={{ name: 'AddressExt', label: 'Address Line 2(opti)', type: 'text' }}
            />
            <Row rowGap={10} columnGutter={10}>
              <Col md={6}>
                <InputField inputProps={{ name: 'city', label: 'City', type: 'text' }} />
              </Col>
              <Col xs={6} md={3}>
                <SelectField
                  inputProps={{
                    className: `${styles.addressFormSelect}`,
                    name: 'State',
                    defaultLabel: 'State',
                    label: '',
                    options: [{ label: 'OX' }, { label: 'DER' }, { label: 'DAL' }],
                  }}
                />
              </Col>
              <Col xs={6} md={3}>
                <InputField inputProps={{ name: 'Zip Code', label: 'Zip Code', type: 'text' }} />
              </Col>
            </Row>
            {!isCheckout && (
              <InputField inputProps={{ name: 'email', label: 'Email Address', type: 'email' }} />
            )}
            <InputField inputProps={{ name: 'phone', label: 'Phone', type: 'text' }} />
            <CheckBoxField inputProps={{ name: 'emailSub', label: labelText, type: 'checkbox' }} />
            {!isCheckout && (
              <Button size="small" onClick={handleSubmit} action="submit">
                {btnText}
              </Button>
            )}
          </Row>
        </form>
      )}
    />
  );
};

AddressForm.propTypes = {
  pageName: string,
  handleOnSubmit: func,
};

AddressForm.defaultProps = {
  pageName: 'Checkout',
  handleOnSubmit: null,
};
export default AddressForm;
