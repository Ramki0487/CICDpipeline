/*
 * File: MainMenu.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { array, func } from 'prop-types';
import Icon from '../../icon/Icon';
import Image from '../../image/Image';
import { Col, Row } from '../../layout';
import Typography from '../../typography/Typography';
import styles from './MainMenu.module.scss';

const hasMenuIcon = ({ icon }) => icon && Object.keys(icon)?.length > 0;

/**
 * MainMenu Component
 * @param {array} menuItems - Array to render Menu Items
 * @param {array} topNavItems - Array to render static menu items
 * @param {func} loadSubMenu - Callback function to load corresponding submenus
 * @param {func} LinkTag - callback function to handle clicks on links
 */
const MainMenu = ({ menuItems, topNavItems, loadSubMenu, LinkTag }) => {
  const hasSubMenu = ({ menuItemCategories, menuItemLinks }) =>
    menuItemCategories || menuItemLinks?.length > 0;

  const renderTitle = ({ title, link, ...rest }) => {
    const titleTag = <Typography variant="h3">{title}</Typography>;
    return link && !hasSubMenu(rest) ? <LinkTag href={link}>{titleTag}</LinkTag> : titleTag;
  };

  return (
    <Row className={styles.menu} flexDirection="column" flexWrap="nowrap">
      {menuItems.length > 0 && (
        <Col>
          <ul>
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.sys?.id}
                onClick={() => hasSubMenu(menuItem.fields) && loadSubMenu(menuItem.fields)}
                className={hasMenuIcon(menuItem.fields) ? styles.menuIcon : ''}
              >
                {menuItem.fields?.icon && (
                  <Image
                    src={menuItem.fields?.icon?.fields?.desktop?.fields?.file?.url}
                    alt={menuItem?.fields?.icon?.fields?.desktop?.fields?.title}
                  />
                )}
                {renderTitle(menuItem.fields)}
                {hasSubMenu(menuItem.fields) && (
                  <Icon iconName="caret_right" className={styles.menuChevron} />
                )}
              </li>
            ))}
          </ul>
        </Col>
      )}
      {topNavItems.length > 0 && (
        <Col className={styles.menuNavs}>
          <ul>
            {topNavItems.map((topNavItem) => {
              return (
                <li key={topNavItem?.sys?.id}>
                  <LinkTag href={topNavItem?.fields?.link}>{topNavItem?.fields?.title}</LinkTag>
                  {topNavItem?.fields?.subLinks && <Icon iconName="plus" />}
                </li>
              );
            })}
          </ul>
        </Col>
      )}
    </Row>
  );
};

//Props validation
MainMenu.propTypes = {
  menuItems: array.isRequired,
  topNavItems: array.isRequired,
  loadSubMenu: func.isRequired,
  LinkTag: func.isRequired,
};

export default MainMenu;
