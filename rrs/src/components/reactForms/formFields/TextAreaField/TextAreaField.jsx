import TextArea from '@RRS-UI/textArea/TextArea';
import { string, func } from 'prop-types';
import { Field } from 'react-final-form';

/**
 * TextAreaField Component
 * @param {object} textAreaProps - Props for the fields
 * @param {object} meta - Meta data
 * @returns {*}
 * @constructor
 */

const TextAreaField = ({ name, validate, ...restProps }) => {
  return (
    <Field name={name} validate={validate}>
      {({ input }) => <TextArea {...input} {...restProps} />}
    </Field>
  );
};

TextAreaField.propTypes = {
  name: string.isRequired,
  validate: func,
};

export default TextAreaField;
