/*
 * File: InputGroup.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 28th 2021, 12:08:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import InputGroup from './InputGroup';

export default {
  title: 'InputGroup Component',
  component: InputGroup,
  argTypes: {
    flexDirection: {
      control: {
        type: 'select',
        options: ['row', 'row-reverse'],
      },
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <InputGroup {...args} />;

// Each story then reuses that template
export const Icon = Template.bind({});
Icon.args = {
  ...InputGroup.args,
  flexDirection: 'row',
  inputProps: {
    placeholder: 'Placeholder text...',
    maxLength: 10,
    minLength: 5,
    onChange: () => {},
    onClick: () => {
      window.alert('Submit search');
    },
  },
  iconProps: {
    iconName: 'search',
  },
  btnProps: {},
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  ...Icon.args,
  iconProps: null,
  btnProps: {
    btnlabel: 'Submit',
  },
};
