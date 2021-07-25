/*
 * File: MenuCategories.jsx
 * Project: webapp-rrs
 * Created Date: Wednesday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { func, object } from 'prop-types';
import { Row } from '../../layout';
import Typography from '../../typography/Typography';
import styles from './MenuCategories.module.scss';

/**
 * MenuCategories Component
 * @param {object} menuCategory - Object to render each category & its sub-categories
 * @param {func} LinkTag - Custom function to handle Menu item click
 */
const MenuCategories = ({ menuCategory, LinkTag }) => {
  const subCategories = menuCategory?.fields?.subCategories;
  const categoryLinks = menuCategory?.fields?.categoryLinks;

  return (
    <>
      <Typography variant="h4" className={styles.header}>
        <LinkTag href={menuCategory?.fields?.link}>{menuCategory?.fields?.title}</LinkTag>
      </Typography>
      <Row flexDirection="column" className={styles.items}>
        {categoryLinks && (
          <ul className={styles.itemsCategory}>
            {categoryLinks?.map((item, index) => (
              <li key={`${item?.sys?.id}_${index}`} className={styles.itemsCategoryLink}>
                <LinkTag href={item?.fields?.link}>{item?.fields?.title}</LinkTag>
              </li>
            ))}
          </ul>
        )}
        {subCategories?.map((item, index) => (
          <ul
            key={`${item?.sys?.id}_${index}`}
            className={`${item?.fields?.subCategoryLinks ? styles.itemsCategory : ''}`}
          >
            <li>
              <LinkTag href={item?.fields?.link}>
                <Typography variant="h5">{item?.fields?.title}</Typography>
              </LinkTag>
            </li>
            {item?.fields?.subCategoryLinks?.map((menuItem, index) => (
              <li key={`${menuItem?.sys?.id}_${index}`} className={styles.itemsCategoryLink}>
                <LinkTag href={menuItem?.fields?.link}>{menuItem?.fields?.title}</LinkTag>
              </li>
            ))}
          </ul>
        ))}
      </Row>
    </>
  );
};

//Props validation
MenuCategories.propTypes = {
  menuCategory: object.isRequired,
  LinkTag: func.isRequired,
};

export default MenuCategories;
