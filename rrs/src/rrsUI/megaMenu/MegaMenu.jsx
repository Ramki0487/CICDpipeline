/*
 * File: MegaMenu.jsx
 * Project: webapp-rrs
 * Created Date: Wednesday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { array, func } from 'prop-types';
import Image from '../image/Image';
import { Col, Container, Row } from '../layout';
import styles from './MegaMenu.module.scss';
import MenuCategories from './menuCategories/MenuCategories';
import MenuPromotions from './menuPromotions/MenuPromotions';

const hasChildren = ({ menuItemLinks, menuItemCategories, featuredPromotions }) =>
  menuItemLinks?.length || menuItemCategories?.length || featuredPromotions?.length;

const hasMenuIcon = ({ icon }) => icon && Object.keys(icon)?.length > 0;

/**
 * MegaMenu component
 * @param {array} menuItems - Array to render menu & submenu items
 * @param {func} LinkTag - Custom function to handle Menu item click
 * @returns {*} MegaMenu HTML
 */
const MegaMenu = ({ menuItems, LinkTag }) => {
  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems?.map((menuItem, index) => (
          <li
            key={`${menuItem?.sys?.id}_${index}`}
            className={`${styles.menuItem} ${
              hasChildren(menuItem.fields) ? styles.menuItemExpandable : ''
            } ${hasMenuIcon(menuItem.fields) ? styles.menuItemIcon : ''} `}
            data-expand={hasChildren(menuItem.fields)}
          >
            <LinkTag href={menuItem?.fields?.link}>
              {menuItem?.fields?.icon && (
                <Image
                  src={menuItem?.fields?.icon?.fields?.desktop?.fields?.file?.url}
                  alt={menuItem?.fields?.icon?.fields?.desktop?.fields?.title}
                />
              )}
              {menuItem?.fields?.title}
            </LinkTag>
            {hasChildren(menuItem.fields) && (
              <Row className={styles.expandableBlock}>
                <Container>
                  <Row flexDirection="column" className={styles.menuBlocks}>
                    {menuItem.fields.menuItemCategories?.map((menuCategory, index) => (
                      <Col
                        key={`${menuCategory?.sys?.id}_${index}`}
                        className={styles.category}
                        auto
                      >
                        <MenuCategories menuCategory={menuCategory} LinkTag={LinkTag} />
                      </Col>
                    ))}
                    {menuItem.fields.menuItemLinks?.length > 0 && (
                      <Col className={`${styles.category} ${styles.noCategory}`}>
                        <ul>
                          {menuItem.fields.menuItemLinks.map((menuLink, index) => {
                            return (
                              <li
                                key={`${menuLink?.sys?.id}_${index}`}
                                className={styles.menuLinks}
                              >
                                <LinkTag href={menuLink?.fields?.link}>
                                  {menuLink?.fields?.title}
                                </LinkTag>
                              </li>
                            );
                          })}
                        </ul>
                      </Col>
                    )}
                    {menuItem.fields.featuredPromotions?.length > 0 && (
                      <Col className={styles.menuAside}>
                        <MenuPromotions
                          featuredPromotions={menuItem?.fields?.featuredPromotions}
                          LinkTag={LinkTag}
                        />
                      </Col>
                    )}
                  </Row>
                </Container>
              </Row>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

//Props validation
MegaMenu.propTypes = {
  menuItems: array,
  LinkTag: func.isRequired,
};

MegaMenu.defaultProps = {
  menuItems: [],
};

export default MegaMenu;
