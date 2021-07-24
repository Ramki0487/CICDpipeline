/*
 * File: MenuPromotions.jsx
 * Project: webapp-rrs
 * Created Date: Wednesday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { array, func } from 'prop-types';
import Image from '../../image/Image';
import { Col, Row } from '../../layout';
import Typography from '../../typography/Typography';
import styles from './MenuPromotions.module.scss';

/**
 * MenuPromotions Component
 * @param {object} menuPromotion - Object to display Image and Title
 * @param {func} LinkTag - Custom function to handle Menu item click
 */
const MenuPromotions = ({ featuredPromotions, LinkTag }) => {
  return (
    <Row className={styles.banner} flexDirection="column" alignContent="flex-start">
      {featuredPromotions?.map((menuPromotion, index) => (
        <Col key={`${menuPromotion?.sys?.id}_${index}`} auto>
          <figure className={styles.promotionContainer}>
            <LinkTag href={menuPromotion?.fields?.link}>
              <Image
                src={menuPromotion?.fields?.image?.fields?.desktop?.fields?.file?.url}
                alt={menuPromotion?.fields?.caption}
              />
            </LinkTag>
            {menuPromotion?.fields?.title && (
              <figcaption>
                <LinkTag href={menuPromotion?.fields?.link}>
                  <Typography variant="h5">{menuPromotion?.fields?.title}</Typography>
                </LinkTag>
              </figcaption>
            )}
          </figure>
        </Col>
      ))}
    </Row>
  );
};

//prop validation
MenuPromotions.propTypes = {
  featuredPromotions: array,
  LinkTag: func.isRequired,
};

MenuPromotions.defaultProps = {
  featuredPromotions: [],
};

export default MenuPromotions;
