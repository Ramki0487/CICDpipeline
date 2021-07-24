import Input from '@RRS-UI/input/Input';
import InputGroup from '@RRS-UI/inputGroup/InputGroup';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './InputField.module.scss';

/**
 * InputField Component
 * @param {string} name - Name for input field
 * @param {string} className - Class name to override styles
 * @param {function}validate - Validation functions
 * @returns {*}
 * @constructor
 */
const InputField = ({ name, validate, className, isInputGroup, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className={`${className} ${meta.touched && meta.error ? styles.error : ''}`}>
          {isInputGroup ? (
            <InputGroup inputProps={{ ...input }} {...restProps} />
          ) : (
            <Input {...input} {...restProps} />
          )}
          {meta.touched && meta.error && (
            <Typography variant="label" theme="error">
              *{meta.error}
            </Typography>
          )}
        </div>
      )}
    </Field>
  );
};

InputField.propTypes = {
  className: string,
  name: string.isRequired,
  validate: func,
  isInputGroup: bool,
};

InputField.defaultProps = {
  className: '',
  validate: null,
  isInputGroup: false,
};

export default InputField;
