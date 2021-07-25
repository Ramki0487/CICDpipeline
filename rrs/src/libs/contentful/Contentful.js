/*
 * File: Contentful.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 3rd 2021, 12:41:01 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Friday June 25th 2021 2:48:12 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { createClient } from 'contentful';
import { constructCmsSlugUrl } from './Contentful.helper';

//TODO- Move to .env, add timeout
const contentfulClient = createClient({
  accessToken: 'iOm7wSAgyIE95xOE2QmD0EmI0LSwve5rEOWXCbDxraw',
  space: 'xanbi6q061ft',
  environment: 'stg',
  retryLimit: 2,
  timeout: 15000, //15sec
});

/**
 * Get CMS Page by Slug
 * @param {string} asPath - URL string to construct slug
 * @returns {object} - CMS response
 */
export const getCmsPageBySlug = async (asPath) => {
  const slug = constructCmsSlugUrl(asPath);
  if (!slug) return {};

  return await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug[in]': slug,
    select: 'fields',
    include: 10,
  });
};
