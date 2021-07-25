/*
 * File: Accordion.test.js
 * Project: webapp-rrs
 * Created Date: Saturday, March 13th 2021, 1:22:03 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { waitForComponentToPaint } from '@Utils/Testing';
import { mount, shallow } from 'enzyme';
import Accordion from '../Accordion';
import AccordionContext from '../AccordionContext';

describe('<Accordion />', () => {
  it('should render childern prop values', () => {
    const accordWrapper = shallow(
      <Accordion>
        <Accordion.head>Title</Accordion.head>
        <Accordion.body>Body</Accordion.body>
      </Accordion>
    );

    expect(accordWrapper.find('AccordionHead').children().text()).toBe('Title');
    expect(accordWrapper.find('AccordionBody').children().text()).toBe('Body');
  });

  it('should render the component with className props', () => {
    const accordWrapper = shallow(
      <Accordion>
        <Accordion.head>Title</Accordion.head>
        <Accordion.body>Body</Accordion.body>
      </Accordion>
    );
    accordWrapper.setProps({ className: 'accordion-box' });

    expect(accordWrapper.find('.accordion-box').length).toBe(1);
  });

  it('should render Accordion component when collapse was true', () => {
    const mockCallBack = jest.fn();
    let accrdWrapper = mount(
      <AccordionContext.Provider value={{ collapse: true, handleClick: mockCallBack }}>
        <Accordion collapsed={true}>
          <Accordion.head>Title</Accordion.head>
          <Accordion.body>Body</Accordion.body>
        </Accordion>
      </AccordionContext.Provider>
    );
    accrdWrapper.find('Row.head').simulate('click');
    waitForComponentToPaint(accrdWrapper);

    expect(accrdWrapper.find('Accordion').props().collapsed).toBe(true);
  });
});
