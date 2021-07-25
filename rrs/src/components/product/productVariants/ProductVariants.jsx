/* istanbul ignore file */
/*
 * File: ProductVariants.jsx
 * Project: webapp-rrs
 * Created Date: Monday, June 21st 2021, 11:52:19 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 5:47:37 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { constructProductImageUrl } from '@Components/helpers/Product.helper';
import LinkTag from '@Components/linkTag/LinkTag';
import { getProductVariants } from '@Redux/actions/Product';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { isObject } from '@Utils/Types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { bool, func, object, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ProductVariants.module.scss';

const Checkbox = dynamic(() => import('@RRS-UI/checkbox/Checkbox'));
const SwatchImages = dynamic(() => import('@RRS-UI/swatchImages/SwatchImages'));
const SizeChart = dynamic(() => import('../sizeChart/SizeChart'));

/**
 * Key - Represents variantGroups key from API
 * Value - Represents title to display on the frontend
 */
const variantsMap = { colors: 'Color', flavors: 'Flavor', sizes: 'Size', widths: 'Width' };

/**
 * ProductVariants Component
 * @param {object} sizes - Object to render Product Sizes
 * @param {string} className - Class to override default styles
 * @param {function} onClick - onClick callback function
 * @returns
 */
const ProductVariants = ({
  productId,
  variantGroups,
  handleOnVariantSelection,
  hasInvalidVariants,
  isCustomInsoleProduct,
  isGiftCardProduct,
}) => {
  if (!variantGroups || !isObject(variantGroups)) return null;

  const dispatch = useDispatch();
  const { query } = useRouter();

  const [isLoading, setIsLoading] = useState('');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [showSizeChartModal, setShowSizeChartModal] = useState();

  const getColorGroup = (selectedVariant, variantMap) => {
    const key = selectedVariant === 'flavor' ? selectedVariant : 'colors';

    return variantGroups?.[key]?.[variantMap[key]]?.name;
  };

  const handleVariantSelection = async (selectedVariant, value) => {
    const updatedVariants = { ...selectedVariants, [selectedVariant]: value };

    setIsLoading(selectedVariant);
    setSelectedVariants(updatedVariants);

    handleOnVariantSelection({
      variants: updatedVariants,
      skuId: variantGroups?.[selectedVariant]?.[value]?.skuId,
    });

    await dispatch(
      getProductVariants({
        ...updatedVariants,
        colorGroup: getColorGroup(selectedVariant, updatedVariants),
        selectedVariant,
        productId,
      })
    );
    setIsLoading('');
  };

  useEffect(() => {
    // Preselect the color on page load if it's passed in the request url
    if (variantGroups?.colors?.[query?.cc] || variantGroups?.flavors?.[query?.cc]) {
      const key = variantGroups?.colors?.[query?.cc] ? 'colors' : 'flavors';
      handleVariantSelection(key, query?.cc);
    }
  }, [query?.cc]);

  const renderButtons = (variantKey, variants) => {
    return (
      <>
        <Row
          columnGap={3}
          rowGap={3}
          className={`${isLoading && isLoading !== variantKey ? styles.isLoading : ''}`}
        >
          {variants &&
            Object.entries(variants)?.map(([key, item]) => (
              <Checkbox
                key={key}
                className={`${styles.variantButton} ${
                  !item.isAvailable ? styles.variantButtonDisabled : ''
                }`}
                type="tile"
                label={item?.name}
                value={key}
                isChecked={item.isAvailable && selectedVariants?.[variantKey] === key}
                {...(item.isAvailable && {
                  handleOnChange: (val) => handleVariantSelection(variantKey, val),
                })}
                chooseOneTime
              />
            ))}
        </Row>
        {variantKey === 'sizes' && !isGiftCardProduct && (
          <Typography className={styles.sizeChart} variant="small">
            <LinkTag onClick={() => setShowSizeChartModal(true)}>Size Chart</LinkTag> Fit tip: buy
            1/2 size up from your true foot size
            {showSizeChartModal && (
              <SizeChart
                showSizeChart={true}
                handleAfterClose={() => setShowSizeChartModal(false)}
              />
            )}
          </Typography>
        )}
      </>
    );
  };

  const renderColors = (variantKey, variants) => {
    return (
      <>
        <Row
          columnGap={5}
          rowGap={5}
          className={`${isLoading && isLoading !== variantKey ? styles.isLoading : ''}`}
        >
          {variants &&
            Object.entries(variants)?.map(([key, item]) => (
              <SwatchImages
                key={key}
                className={`${styles.variantColor} ${
                  !item?.isAvailable ? styles.variantColorDisabled : ''
                }`}
                ImgProps={{
                  src: `${constructProductImageUrl(productId, item?.code)}?wid=65`,
                  loading: 'eager',
                  alt: item?.name,
                }}
                selected={item?.isAvailable && key === selectedVariants?.[variantKey]}
                shape="square"
                value={item?.code}
                {...(item?.isAvailable && {
                  handleOnClick: (val) => handleVariantSelection(variantKey, val),
                })}
              />
            ))}
        </Row>
      </>
    );
  };

  const rendervariantBlock = (variantKey, title) => {
    const variant = variantGroups[variantKey];
    const selectedTitle = variant[selectedVariants?.[variantKey]]?.name;

    return (
      <Row rowGap={5}>
        <Typography className={styles.variantTitle} variant="p">
          {title} <strong>{selectedTitle}</strong>
        </Typography>
        {(variantKey === 'sizes' || variantKey === 'widths') &&
          renderButtons(variantKey, variant, title)}
        {(variantKey === 'colors' || variantKey === 'flavors') &&
          renderColors(variantKey, variant, title)}
        {hasInvalidVariants && !selectedVariants?.[variantKey] && (
          <Typography variant="label" className={styles.variantError}>
            <strong>*Please select a {title}!</strong>
          </Typography>
        )}
      </Row>
    );
  };

  const mapVariantTitle = (variantKey, defaultTitle) => {
    if (variantKey === 'colors' && isCustomInsoleProduct) {
      return 'Insole Type';
    } else if (variantKey === 'sizes' && isGiftCardProduct) {
      return 'Gift Amount';
    }

    return defaultTitle;
  };

  return (
    <Row rowGap={20}>
      {Object.entries(variantsMap).map(([variantKey, title]) =>
        variantGroups?.[variantKey]
          ? rendervariantBlock(variantKey, mapVariantTitle(variantKey, title))
          : null
      )}
    </Row>
  );
};

ProductVariants.propTypes = {
  productId: string,
  variantGroups: object,
  handleOnVariantSelection: func,
  hasInvalidVariants: bool,
  isCustomInsoleProduct: bool,
  isGiftCardProduct: bool,
};

export default ProductVariants;
