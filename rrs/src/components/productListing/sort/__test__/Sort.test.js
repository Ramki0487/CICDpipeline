/*
 * File: Sort.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Sort from '../Sort';

describe('<Sort />', () => {
  let sortWrapper;
  const mockCallBack = jest.fn();

  beforeAll(() => {
    sortWrapper = shallow(<Sort isMobile={true} onClose={mockCallBack} />);
  });
  it('should be defined', () => {
    expect(sortWrapper).toBeDefined();
  });
  // it('Check sort component has sortItems', () => {
  //   expect(sortWrapper.find('Row').length).toBe(0);
  //   sortWrapper.setProps({ sortItems: sort });
  //   expect(sortWrapper.find('.sortBodyRowItem').length > 0).toBeTruthy();
  // });

  // it('Test onClick event', () => {
  //   const closeBtn = sortWrapper.find('Icon');
  //   closeBtn.simulate('click');
  //   expect(mockCallBack).toHaveBeenCalled();
  // });

  // it('Check sort component rendered is mobile specific or not', () => {
  //   expect(sortWrapper.find('Row').at(0).hasClass(/sort/)).toBe(true);
  //   sortWrapper.setProps({ isMobile: false });
  //   expect(sortWrapper.find('Selectbox').length).toBe(1);
  // });
});
