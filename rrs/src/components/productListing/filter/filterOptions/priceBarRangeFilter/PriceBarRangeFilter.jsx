/* istanbul ignore file */
/*
 * File: PriceBarRangeFilter.jsx
 * Project: webapp-rrs
 * Created Date: Wednesday, June 23rd 2021, 04:17:00 pm
 * Author: Selvam <selvam.murugan@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
/**
 * This function will render the price range filter
 * depending of the type of data.
 * @param {object} event - On change event validator
 * @returns {*}
 */

import { object, func } from 'prop-types';
import PriceBarRange from '@RRS-UI/pricebarrange/PriceBarRange';
import { convertQueryStringToObject, constructQueryString } from '@Utils/Url';

let priceBarDrageAndTypeCallTracking = null;

/**
 * PriceRangeFilter Module
 * Used to receive the price range values from price range component
 * @param {min} min - Minimum Price
 * @param {max} max - Maximum Price
 * @param {max} handleOnClick - Callback when range changed
 * @returns {function} - Price Range filter with input and range bar
 */

const PriceBarRangeFilter = ({ price, handleOnClick }) => {
  const { min, max, url } = price;
  const queryObj = convertQueryStringToObject(url);
  const handlePriceBarChange = ({ min, max }) => {
    // Handles fast typing and dragging!
    clearInterval(priceBarDrageAndTypeCallTracking);
    priceBarDrageAndTypeCallTracking = setTimeout(() => {
      const priceFormat = `reg_price:$${min}-$${max}`;
      queryObj.r = queryObj.r ? `${queryObj.r},${priceFormat}` : priceFormat;
      const queryString = constructQueryString(queryObj);
      handleOnClick(queryString);
    }, 400);
  };

  return <PriceBarRange min={min} max={max} handleOnClick={handlePriceBarChange} />;
};

PriceBarRangeFilter.propTypes = {
  price: object.isRequired,
  handleOnClick: func.isRequired,
};

export default PriceBarRangeFilter;
