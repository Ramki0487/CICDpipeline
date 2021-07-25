/*
 * File: Contentful.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 3rd 2021, 12:53:06 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { getCmsPageBySlug } from '@Libs/contentful/Contentful';
import { SET_PAGE_MODEL } from '@Redux/actionTypes/Contentful';
import logger from '@Utils/Logger';

/**
 * Updates page model object in store
 * @param {object} payload - Payload object to update in store
 * @returns {object}
 */
const setPageModel = (payload) => ({
  type: SET_PAGE_MODEL,
  payload,
});

/**
 * Action Creator - Fetches page model object from contentful CMS
 * @param {string} asPath - request url
 * @returns {function}
 */
export const getPageModel = (asPath) => {
  return async (dispatch) => {
    try {
      logger.info(`fetching pageModel from contentful for path - ${asPath}`);
      const data = await getCmsPageBySlug(asPath);
      dispatch(setPageModel(data?.items?.[0]?.fields));
    } catch (error) {
      logger.error('Error getting pageModel from contentful', error);
    }
  };
};
