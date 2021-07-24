import Selectbox from '@RRS-UI/selectbox/Selectbox';
import Typography from '@RRS-UI/typography/Typography';
import { func, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './SelectBoxField.module.scss';

/**
 * SelectField Component
 * @param {string} name - Name for selectbox
 * @param {function}validate - Validation functions
 * @returns {*}
 * @constructor
 */
const SelectField = ({ name, validate, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div>
          <Selectbox
            {...input}
            {...restProps}
            className={meta.touched && meta.error ? styles.error : ''}
            handleOnChange={input.onChange}
          />
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

SelectField.propTypes = {
  name: string.isRequired,
  validate: func,
};

export default SelectField;
