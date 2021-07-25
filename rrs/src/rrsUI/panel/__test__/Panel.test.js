/*
 * File: Panel.test.js
 * Project: webapp-rrs
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Panel from '@RRS-UI/panel/Panel';
import { mount } from 'enzyme';

describe('<Panel />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Panel>
        <Panel.Head>Test</Panel.Head>
        <Panel.Body>Panel</Panel.Body>
      </Panel>
    );
  });

  test('should render Panel Component with default props', () => {
    expect(wrapper.find('Row.bodyShow').length).toBe(1);
  });

  test('should able to override class', () => {
    expect(wrapper.find('Row.panelContainer').length).toBe(0);

    wrapper.setProps({ className: 'panelContainer' });

    expect(wrapper.find('Row.panelContainer').length).toBe(1);
  });
});
