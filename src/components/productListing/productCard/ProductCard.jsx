/*
 * File: ProductCard.js
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 3:06:28 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 5:47:52 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { constructProductImageUrl } from '@Components/helpers/Product.helper';
import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import Icon from '@RRS-UI/icon/Icon';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Price from '@RRS-UI/price/Price';
import StarRating from '@RRS-UI/starRating/StarRating';
import SwatchImages from '@RRS-UI/swatchImages/SwatchImages';
import Typography from '@RRS-UI/typography/Typography';
import { useRouter } from 'next/router';
import { bool, func, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import { formatPriceObject } from '../../helpers/Price.helper';
import styles from './ProductCard.module.scss';

/**
 * ProductCard Component
 * @param {object} item  - Product details to be displayed
 * @param {function} forwardRef - Ref to select a product card
 * @param {boolean} isDesktop - Flag to display device specific content
 * @returns
 */
const ProductCard = ({ item, forwardRef, isDesktop }) => {
  if (item && Object.keys(item)?.length === 0) return null;

  const { push } = useRouter();
  const [selectedSwatch, setSelectedSwatch] = useState();
  const [hover, setHover] = useState();

  const priceInput = formatPriceObject(
    item?.price,
    item?.saleMessage,
    item?.outlet,
    item?.exclusive,
    item?.umapProduct
  );

  const productTitle = `${item.gender ?? ''} ${item.brand ?? ''} ${item.name ?? ''}`;
  const productLink = `${item.url}${selectedSwatch ? `?cc=${selectedSwatch}` : ''}`;
  const sortedColors = item.colorsSkus
    ?.sort((a) => (a.colorCode === item.colorCode ? -1 : 1))
    ?.slice(0, 4);

  const handleSwatchSelection = (swatchId) => {
    setSelectedSwatch(swatchId);

    if (isDesktop) push(productLink);
  };

  const handleSwatchMouseOver = (swatchId) => setSelectedSwatch(swatchId);

  useEffect(() => {
    setSelectedSwatch(item.colorCode);
  }, [item.colorCode]);

  return (
    <Col
      xs={6}
      xxl={4}
      forwardRef={forwardRef}
      {...(isDesktop && { onMouseEnter: () => setHover(true) })}
      {...(isDesktop && {
        onMouseLeave: () => {
          setSelectedSwatch(item.colorCode);
          setHover(false);
        },
      })}
    >
      <Row flexDirection="column" className={styles.productCard} justifyContent="space-evenly">
        <LinkTag href={productLink}>
          <Card
            className={styles.productCardImg}
            image={
              <>
                <Image
                  src={constructProductImageUrl(item.sku, selectedSwatch)}
                  alt={productTitle}
                />
                {item.outlet && <Icon iconName="outlet" className={styles.productCardImgIco} />}
                {item.exclusive && (
                  <Icon iconName="vip_only" className={styles.productCardImgIco} />
                )}
              </>
            }
          />
        </LinkTag>

        <LinkTag href={productLink}>
          <Typography variant="h5" className={styles.productCardName}>
            {productTitle}
          </Typography>
        </LinkTag>
        <StarRating
          className={styles.productCardRating}
          rating={item.rating}
          reviewCount={item.reviews}
        />
        <Price className={styles.productCardPrice} priceInput={priceInput} type="plp" />
        <Row className={styles.productCardSwatch} alignItems="center" columnGap={5}>
          {sortedColors?.map((color) => {
            return (
              <SwatchImages
                ImgProps={{
                  src: hover
                    ? constructProductImageUrl(item.sku, color.colorCode)
                    : constructProductImageUrl(item.sku, `${color.colorCode}_SW`),
                  alt: color.colorDescription,
                }}
                selected={
                  hover ? color.colorCode === selectedSwatch : color.colorCode === item.colorCode
                }
                shape={hover ? 'square' : 'circle'}
                key={color.colorCode}
                value={color.colorCode}
                handleOnClick={handleSwatchSelection}
                handleOnMouseOver={handleSwatchMouseOver}
              />
            );
          })}
          {!hover && item.colorsSkus?.length > 4 && (
            <span className={styles.productCardSwatchCount}>+{item.colorsSkus.length - 4}</span>
          )}
        </Row>
      </Row>
    </Col>
  );
};

ProductCard.propTypes = {
  item: object.isRequired,
  forwardRef: oneOfType([func, object]),
  isDesktop: bool,
};

ProductCard.defaultProps = {
  forwardRef: null,
  isDesktop: false,
};

export default ProductCard;
