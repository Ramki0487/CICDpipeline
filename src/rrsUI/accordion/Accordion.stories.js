/*
 * File: Accordion.stories.js
 * Project: webapp-rrs
 * Created Date: Saturday, March 13th 2021, 1:21:30 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday March 13th 2021 1:21:30 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Accordion from './Accordion';
import { Col } from '../layout';

export default {
  title: 'Accordion Component',
  component: Accordion,
};

const Template = (args) => {
  return (
    <Col md={2}>
      <Accordion {...args}>
        <Accordion.head>Title</Accordion.head>
        <Accordion.body>Body</Accordion.body>
      </Accordion>
    </Col>
  );
};

export const Panel = Template.bind({});
Panel.args = {
  collapsed: false,
};
