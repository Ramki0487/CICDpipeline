/*
 * File: MegaMenu.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, Febrary 16th 2021, 10:08:43 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Last Modified: Monday June 14th 2021 7:41:57 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { menuItems } from '@Mocks/menu/Menu.json';
import MegaMenu from './MegaMenu';

export default {
  title: 'MegaMenu',
  component: MegaMenu,
};

export const Primary = (args) => <MegaMenu {...args} />;
Primary.args = {
  menuItems: menuItems,
};
