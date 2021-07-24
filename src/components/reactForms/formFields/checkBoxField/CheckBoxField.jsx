import Checkbox from '@RRS-UI/checkbox/Checkbox';
import Typography from '@RRS-UI/typography/Typography';
import { func, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './CheckBoxField.module.scss';

/**
 * CheckBoxField Component
 * @param {string} name - Name for checkbox
 * @param {function}validate - Validation functions
 * @returns {*}
 * @constructor
 */
const CheckBoxField = ({ name, validate, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className={meta.touched && meta.error ? styles.error : ''}>
          <Checkbox {...input} {...restProps} handleOnChange={input.onChange} />
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

CheckBoxField.propTypes = {
  name: string.isRequired,
  validate: func,
};

export default CheckBoxField;
