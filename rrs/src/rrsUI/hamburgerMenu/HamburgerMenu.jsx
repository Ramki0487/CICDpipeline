/*
 * File: HamburgerMenu.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import { array, func } from 'prop-types';
import { useState } from 'react';
import Icon from '../icon/Icon';
import SlideOutModal from '../slideOutModal/SlideOutModal';
import MenuItems from './menuItems/MenuItems';

/**
 * HamburgerMenu Component
 * @param {array} menuItems - Array to render Main Menu Items
 * @param {array} topNavItems - Array to render Top Nav Items
 */
const HamburgerMenu = ({ menuItems, topNavItems, LinkTag }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerStatus = () => setDrawerOpen(!drawerOpen);

  useBodyScrollLock(drawerOpen);

  return (
    <>
      <Icon iconName="hamburger" onClick={toggleDrawerStatus} />
      <SlideOutModal isOpen={drawerOpen} onClose={toggleDrawerStatus}>
        <MenuItems
          menuItems={menuItems}
          topNavItems={topNavItems}
          key={drawerOpen}
          LinkTag={LinkTag}
        />
      </SlideOutModal>
    </>
  );
};

//Default Props for mobile menu
HamburgerMenu.defaultProps = {
  menuItems: [],
  topNavItems: [],
};

//Proptypes validation
HamburgerMenu.propTypes = {
  menuItems: array,
  topNavItems: array,
  LinkTag: func.isRequired,
};

export default HamburgerMenu;
