/*
 * File: TextArea.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <Nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { Col } from '@RRS-UI/layout';
import TextArea from './TextArea';

export default {
  title: 'TextArea Component',
  component: TextArea,
};

// We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <Col sm={4}>
      <TextArea {...args} />
    </Col>
  );
};

// Each story then reuses that template
export const TextAreaField = Template.bind({});
TextAreaField.args = {
  cols: 5,
  label: 'Text area',
  rows: 6,
};
