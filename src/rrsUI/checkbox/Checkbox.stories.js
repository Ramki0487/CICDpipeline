/*
 * File: Button.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Checkbox from './Checkbox.jsx';

export default {
  title: 'Checkbox Component',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
    type: {
      control: {
        type: 'select',
        options: ['one', 'two'],
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const TypeOne = Template.bind({});
TypeOne.args = {
  type: 'one',
};

export const TypeOneColor = Template.bind({});
TypeOneColor.args = {
  ...TypeOne.args,
  backgroundColor: 'darkblue',
};

export const TypeTwo = Template.bind({});
TypeTwo.args = {
  ...TypeOne.args,
  type: 'two',
  label: '14',
};
