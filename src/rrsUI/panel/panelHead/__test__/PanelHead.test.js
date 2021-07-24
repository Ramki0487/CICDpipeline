/*
 * File: PanelHead.test.js
 * Project: webapp-rrs
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PanelHead from '@RRS-UI/panel/panelHead/PanelHead';
import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';

describe('<Panel.Head />', () => {
  test('should render panelHead with caret_down icon when isCollapsible and withIcon both set to true ', () => {
    const wrapper = mount(<PanelHead>Test</PanelHead>);
    waitForComponentToPaint(wrapper);

    expect(wrapper.find('Icon').length).toBe(0);

    wrapper.setProps({ isCollapsible: true, withIcon: true });

    expect(wrapper.find('Icon').length).toBe(1);
    expect(wrapper.find('Icon').prop('iconName')).toBe('caret_down');
  });

  test('should able to override class in panelHead', () => {
    const wrapper = mount(<PanelHead>Test</PanelHead>);
    waitForComponentToPaint(wrapper);

    expect(wrapper.find('Row.panelHead').length).toBe(0);

    wrapper.setProps({ className: 'panelHead' });

    expect(wrapper.find('Row.panelHead').length).toBe(1);
  });
});
