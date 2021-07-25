/*
 * File: RecommendationCard.jsx
 * Project: webapp-rrs
 * Created Date: Monday, July 5th 2021, 4:31:07 pm
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
import Image from '@RRS-UI/image/Image';
import { Row } from '@RRS-UI/layout';
import Price from '@RRS-UI/price/Price';
import StarRating from '@RRS-UI/starRating/StarRating';
import SwatchImages from '@RRS-UI/swatchImages/SwatchImages';
import Typography from '@RRS-UI/typography/Typography';
import { useRouter } from 'next/router';
import { bool, func, object, oneOfType } from 'prop-types';
import { useEffect, useState } from 'react';
import { formatPriceObject } from '../../helpers/Price.helper';
import styles from './RecommendationCard.module.scss';

/**
 * ProductCard Component
 * @param {object} item  - Product details to be displayed
 * @param {boolean} isDesktop - Flag to display device specific content
 * @returns
 */
const ProductCard = ({ item, isDesktop }) => {
  if (item && Object.keys(item)?.length === 0) return null;

  const { push } = useRouter();
  const [selectedSwatch, setSelectedSwatch] = useState();

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
    <Row flexDirection="column" className={styles.productCard} justifyContent="space-evenly">
      <LinkTag href={productLink}>
        <Card
          className={styles.productCardImg}
          image={
            <Image src={constructProductImageUrl(item.sku, selectedSwatch)} alt={productTitle} />
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
      <Price className={styles.productCardPrice} priceInput={priceInput} />
      <Row className={styles.productCardSwatch} alignItems="center" columnGap={5}>
        {sortedColors?.map((color) => {
          return (
            <SwatchImages
              ImgProps={{
                src: constructProductImageUrl(item.sku, `${color.colorCode}_SW`),
                alt: color.colorDescription,
              }}
              selected={color.colorCode === item.colorCode}
              shape={'circle'}
              key={color.colorCode}
              value={color.colorCode}
              handleOnClick={handleSwatchSelection}
              handleOnMouseOver={handleSwatchMouseOver}
            />
          );
        })}
        {item.colorsSkus?.length > 4 && (
          <span className={styles.productCardSwatchCount}>+{item.colorsSkus.length - 4}</span>
        )}
      </Row>
    </Row>
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
