/*
 * File: MenuItems.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { array, func } from 'prop-types';
import { useState } from 'react';
import { Col } from '../../layout';
import MainMenu from '../mainMenu/MainMenu';
import SubMenu from '../subMenu/SubMenu';
import styles from './MenuItems.module.scss';

/**
 * MenuItems Component
 * @param {array} menuItems - Array to render Menu Items
 * @param {array} topNavItems - Array to render static menu items
 * @param {func} LinkTag - callback function to handle clicks on links
 */
const MenuItems = ({ menuItems, topNavItems, LinkTag }) => {
  const [subMenu, setSubMenu] = useState({ isOpen: false, subMenuItems: {} });

  const loadSubMenu = (menus) => setSubMenu({ isOpen: true, subMenuItems: menus });
  const closeSubMenu = () => setSubMenu((prevState) => ({ ...prevState, isOpen: false }));

  return (
    <>
      <Col className={`${styles.mainMenu} ${!subMenu.isOpen ? styles.mainMenuActive : ''}`}>
        <MainMenu
          menuItems={menuItems}
          topNavItems={topNavItems}
          loadSubMenu={loadSubMenu}
          LinkTag={LinkTag}
        />
      </Col>
      <Col className={`${styles.subMenu} ${subMenu.isOpen ? styles.subMenuActive : ''}`}>
        <SubMenu subMenuItem={subMenu.subMenuItems} onBack={closeSubMenu} LinkTag={LinkTag} />
      </Col>
    </>
  );
};

//Props validation
MenuItems.propTypes = {
  menuItems: array,
  topNavItems: array,
  LinkTag: func.isRequired,
};

MenuItems.defaultProps = {
  menuItems: [],
  topNavItems: [],
};

export default MenuItems;
