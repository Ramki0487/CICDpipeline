/***
 * File: MegaMenu.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, February 24th 2021, 11:05:05 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 */

import { menuItems } from '@Mocks/menu/Menu.json';
import { shallow } from 'enzyme';
import MegaMenu from '../MegaMenu';
import styles from '../MegaMenu.module.scss';

describe('<MegaMenu />', () => {
  it('Check menu has categories', () => {
    const wrapper = shallow(<MegaMenu menuItems={menuItems} LinkTag={() => {}} />);
    const menuItem = wrapper.find(`.${styles.menuItemExpandable}`).at(0);
    expect(menuItem.length).toBe(1);
  });

  it('Check menu has promotion', () => {
    const wrapper = shallow(<MegaMenu menuItems={menuItems} LinkTag={() => {}} />);
    const menuItem = wrapper.find(`.${styles.menuItemExpandable}`).at(0);
    const promotion = menuItem.find('MenuPromotions');
    expect(promotion.length).toBe(1);
  });
});
