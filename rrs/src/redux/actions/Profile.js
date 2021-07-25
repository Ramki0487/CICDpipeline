/*
 * File: Profile.js
 * Project: webapp-rrs
 * Created Date: Monday, May 16rd 2021, 5:56:25 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import LoginService from '@Services/loginService/LoginService';
import LogoutService from '@Services/logoutService/LogoutService';
import RegisterService from '@Services/registerService/RegisterService';
import logger from '@Utils/Logger';
import { getSessionInfo } from './SessionInfo';
/**
 * Action Creator - User Registration
 * @returns {function}
 */
export const accountRegister = (data) => {
  return async (dispatch, getState) => {
    try {
      logger.info('Initializing user registration');

      data.sessionConfirmationNumber = getState()?.sessionInfo?.sessionConfirmationNumber;
      const response = await RegisterService.invoke(data);

      if (response?.payload?.success) {
        dispatch(getSessionInfo());
      }
      // TODO:- Handle errors once API changes are completed
    } catch (error) {
      logger.error('Error in user register service', error);
    }
  };
};

/**
 * Action Creator - User login
 * @returns {function}
 */
export const accountLogin = (data) => {
  return async (dispatch, getState) => {
    try {
      logger.info('Initializing user login');

      data.sessionConfirmationNumber = getState()?.sessionInfo?.sessionConfirmationNumber;
      const response = await LoginService.invoke(data);
      if (response?.payload?.success) {
        dispatch(getSessionInfo());
      }
      // TODO:- Handle errors once API changes are completed
    } catch (error) {
      logger.error('Error in login service', error);
    }
  };
};

/**
 * Action Creator - User logout
 * @returns {function}
 */
export const accountLogout = () => {
  return async (dispatch, getState) => {
    try {
      logger.info('Initializing user logout');

      const sessionConfirmationNumber = getState()?.sessionInfo?.sessionConfirmationNumber;
      const response = await LogoutService.invoke({ sessionConfirmationNumber });
      if (response?.payload?.success) {
        dispatch(getSessionInfo());
      }
    } catch (error) {
      logger.error('Error in logout service', error);
    }
  };
};
