/*
 * File: BrandNames.stories.js
 * Project: webapp-rrs
 * Created Date: Friday, April 23th 2021, 12:08:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { brands } from '@Mocks/brandPLP/Brand.json';
import BrandNames from './BrandNames';

export default {
  title: 'BrandNames Component',
  component: BrandNames,
};

export const primary = (args) => <BrandNames {...args} />;

primary.args = {
  brands: brands,
};
