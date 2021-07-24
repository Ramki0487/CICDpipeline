/*
 * File: SessionInfo.js
 * Project: webapp-rrs
 * Created Date: Saturday, June 19th 2021, 2:40:49 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { UPDATE_SESSION_INFO } from '@Redux/actionTypes/SessionInfo';
import SessionInfoService from '@Services/sessionInfoService/SessionInfoService';
import logger from '@Utils/Logger';

/**
 * Updates session details in store
 * @param {object} payload - Session details
 * @returns {object}
 */
export const updateSessionInfo = (payload) => ({
  type: UPDATE_SESSION_INFO,
  payload,
});

/**
 * Action Creator - Fetches Session Info from API
 * @returns {function}
 */
export const getSessionInfo = () => {
  return async (dispatch) => {
    try {
      logger.info('fetching user session info');

      const response = await SessionInfoService.invoke();
      dispatch(updateSessionInfo(response?.payload?.state));
    } catch (error) {
      logger.error('Error getting session info from API', error);
    }
  };
};
