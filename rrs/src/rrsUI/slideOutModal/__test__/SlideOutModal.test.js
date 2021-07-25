/*
 * File: SlideOutModal.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 7:12:14 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Thursday March 18th 2021 7:12:14 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import SlideOutModal from '../SlideOutModal';

describe('<SlideOutModal />', () => {
  it('should render component with default props', () => {
    const wrapper = shallow(<SlideOutModal />);

    expect(wrapper.find('.drawerOpen').length).toBe(0);
  });

  it('should display slideOutModal when isOpen prop was true', () => {
    const wrapper = shallow(<SlideOutModal isOpen={true} />);

    expect(wrapper.find('.drawerOpen').length).toBe(1);
    expect(wrapper.find('Icon')).toBeTruthy();
  });

  it('should close slideOutModal when closeIcon was clicked', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<SlideOutModal isOpen={true} onClose={mockCallBack} />);

    expect(wrapper.find('.drawerOverlayOpen').length).toBe(1);
    expect(wrapper.find('.drawerOpen').length).toBe(1);

    wrapper.find('Icon').simulate('click');
    wrapper.setProps({ isOpen: false });

    expect(mockCallBack).toHaveBeenCalled();
    expect(wrapper.find('.drawerOpen').length).toBe(0);
    expect(wrapper.find('.drawerOverlayOpen').length).toBe(0);
  });

  it('should remder component with children', () => {
    const wrapper = shallow(
      <SlideOutModal isOpen={true}>
        <div>Test</div>
      </SlideOutModal>
    );

    expect(wrapper.find('.drawerContent').children().text()).toBe('Test');
  });
});
