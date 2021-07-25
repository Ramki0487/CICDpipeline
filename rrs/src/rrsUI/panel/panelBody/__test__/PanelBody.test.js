/*
 * File: PanelBody.test.js
 * Project: webapp-rrs
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import PanelBody from '@RRS-UI/panel/panelBody/PanelBody';
import { shallow } from 'enzyme';

describe('<Panel.Body />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<PanelBody>Test</PanelBody>);
  });

  test('should able to override class', () => {
    expect(wrapper.find('.panelBody').length).toBe(0);

    wrapper.setProps({ className: 'panelBody' });

    expect(wrapper.find('.panelBody').length).toBe(1);
  });
});
