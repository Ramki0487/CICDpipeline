/*
 * File: SubMenuItems.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, object } from 'prop-types';
import Accordion from '../../accordion/Accordion';
import Icon from '../../icon/Icon';
import { Col, Row } from '../../layout';
import Typography from '../../typography/Typography';
import styles from './SubMenu.module.scss';

/**
 * SubMenuItems Component
 * @param {array} subMenuItem - Object to render menucategories
 * @param {func} handlePageClick - page click function
 * @param {func} LinkTag - callback function to handle clicks on links
 * @returns
 */
const SubMenuItems = ({ subMenuItem, onBack, LinkTag }) => {
  return (
    <Row>
      <Col>
        <Row className={styles.header}>
          <Icon iconName="caret_left" onClick={onBack} />
          <span>{subMenuItem?.title}</span>
        </Row>
        <Row>
          <Col className={styles.section}>
            {subMenuItem?.menuItemCategories?.length > 0 &&
              subMenuItem?.menuItemCategories?.map((menuItemCategory) => (
                <Col className={styles.sectionItem} key={menuItemCategory?.sys?.id}>
                  <Typography variant="h3">{menuItemCategory?.fields?.title}</Typography>
                  {menuItemCategory?.fields?.categoryLinks && (
                    <ul>
                      {menuItemCategory?.fields?.categoryLinks?.map((item) => (
                        <li key={item?.sys?.id} className={styles.sectionItemCategoryLinks}>
                          <LinkTag href={item?.fields?.link}>{item?.fields?.title}</LinkTag>
                        </li>
                      ))}
                    </ul>
                  )}
                  {menuItemCategory?.fields?.subCategories?.map((subCategory) =>
                    subCategory?.fields?.subCategoryLinks?.length > 0 ? (
                      <Accordion key={subCategory?.sys?.id} className={styles.sectionItemAccordion}>
                        <Accordion.head
                          className={styles.sectionItemAccordionHead}
                          defaultIcon="plus"
                          collapseIcon="minus"
                        >
                          {subCategory?.fields?.title}
                        </Accordion.head>
                        <Accordion.body className={styles.sectionItemAccordionBody}>
                          <ul>
                            <li>
                              <LinkTag href={subCategory?.fields?.link}>
                                <Typography variant="h5">Shop All</Typography>
                              </LinkTag>
                            </li>
                            {subCategory?.fields?.subCategoryLinks?.map((subCategoryLink) => (
                              <li key={subCategoryLink?.sys?.id}>
                                <LinkTag href={subCategoryLink?.fields?.link}>
                                  {subCategoryLink?.fields?.title}
                                </LinkTag>
                              </li>
                            ))}
                          </ul>
                        </Accordion.body>
                      </Accordion>
                    ) : (
                      <LinkTag
                        className={styles.sectionItemLink}
                        key={subCategory?.sys?.id}
                        href={subCategory?.fields?.link}
                      >
                        {subCategory?.fields?.title}
                      </LinkTag>
                    )
                  )}
                </Col>
              ))}
            {subMenuItem?.menuItemLinks?.length > 0 && (
              <Col className={styles.sectionItem}>
                {subMenuItem?.menuItemLinks?.map((menuItemLink) => (
                  <ul key={menuItemLink?.sys?.id}>
                    <li key={menuItemLink?.sys?.id} className={styles.sectionItemCategoryLinks}>
                      <LinkTag href={menuItemLink?.fields?.link}>
                        {menuItemLink?.fields?.title}
                      </LinkTag>
                    </li>
                  </ul>
                ))}
              </Col>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

//default Props
SubMenuItems.defaultProps = {
  subMenuItem: null,
  onBack: null,
};

//Prop validation
SubMenuItems.propTypes = {
  subMenuItem: object,
  onBack: func,
  LinkTag: func.isRequired,
};

export default SubMenuItems;
