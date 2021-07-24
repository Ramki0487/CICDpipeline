/*
 * File: Button.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <Nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import HelpSection from './HelpSection';

export default {
  title: 'Help Section',
  component: HelpSection,
};

// We create a “template” of how args map to rendering
const Template = (args) => {
  return <HelpSection {...args} />;
};

// Each story then reuses that template
export const HelperSection = Template.bind({});
HelpSection.args = {};
