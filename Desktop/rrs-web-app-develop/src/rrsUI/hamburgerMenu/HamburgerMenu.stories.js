/*
 * File: HamburgerMenu.stories.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 7:12:43 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 14th 2021 7:41:57 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { headerLinks, menuItems } from '@Mocks/menu/Menu.json';
import HamburgerMenu from './HamburgerMenu';

export const Primary = () => {
  return <HamburgerMenu menuItems={menuItems} topNavItems={headerLinks} />;
};

export default {
  title: 'HamburgerMenu',
  component: HamburgerMenu,
};
