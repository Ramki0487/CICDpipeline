/*
 * File: Contentful.helper.js
 * Project: webapp-rrs
 * Created Date: Saturday, May 22nd 2021, 9:12:27 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { convertStringToSlug } from '@Utils/Url';

const PATTERN_CATEGORY = /\/category\/*/g;
const PATTERN_SEARCH = /\/search\/*/g;
const PATTERN_PRODUCT = /\/product\/*/g;
const PATTERN_CHECKOUT = /\/checkout\/*/g;
const PATTERN_ACCOUNT = /\/account\/*/g;

/**
 * Constructs Slug for Cms Request
 * @param {string} asPath - url string to construct slug
 */
export const constructCmsSlugUrl = (asPath) => {
  let slug = asPath?.split('?')?.[0];

  if (asPath.match(PATTERN_CATEGORY)) {
    slug = '/category';
  } else if (asPath.match(PATTERN_SEARCH)) {
    slug = '/search';
  } else if (asPath.match(PATTERN_PRODUCT)) {
    slug = '/product';
  } else if (asPath.match(PATTERN_CHECKOUT)) {
    slug = '/checkout';
  } else if (asPath.match(PATTERN_ACCOUNT)) {
    slug = '/account';
  }

  return convertStringToSlug(slug);
};
