/*
 * File: Button.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <Nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Input from './Input';
import { Col } from '../layout';

export default {
  title: 'Input Component',
  component: Input,
};

// We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <Col md={2}>
      <Input {...args} />
    </Col>
  );
};

// Each story then reuses that template
export const InputField = Template.bind({});
InputField.args = {
  label: 'City',
  name: '',
  id: 'id',
  type: 'text',
  disabled: false,
  onChange: () => {},
  maxLength: 10,
  minLength: 5,
  required: false,
};
