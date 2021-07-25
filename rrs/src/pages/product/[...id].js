/*
 * File: [...id].js
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 10:50:47 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Tuesday June 22nd 2021 12:13:21 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Product from '@Components/product/Product';
import { getProductDetails } from '@Redux/actions/Product';
import { useSelector } from 'react-redux';

/**
 * Product Detail Page
 * @returns
 */
const ProductPage = () => {
  const productResult = useSelector((state) => state.product);

  return <Product product={productResult} />;
};

//initialProps method
ProductPage.getInitialProps = async (ctx) => {
  const { store, asPath, query } = ctx;

  const path = asPath.split('?')?.[0];
  const productId = path?.split('/')?.[2];

  const productRequest = {
    productId,
    colorCode: query.cc ?? undefined,
  };

  await store.dispatch(getProductDetails(productRequest));
};

export default ProductPage;
