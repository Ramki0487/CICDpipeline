/*
 * File: Selectbox.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, March 12th 2021, 11:20:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { Col } from '../layout';
import Selectbox from './Selectbox';

export default {
  title: 'Selectbox Component',
  component: Selectbox,
};

// We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <Col md={2}>
      <Selectbox {...args} />
    </Col>
  );
};

// Each story then reuses that template
export const selectboxDefault = Template.bind({});
selectboxDefault.args = {
  options: [{ label: 'Price' }, { label: 'Brand' }],
  defaultLabel: 'Sort by',
};

export const selectboxLabel = Template.bind({});
selectboxLabel.args = {
  ...selectboxDefault.args,
  label: 'State',
};
