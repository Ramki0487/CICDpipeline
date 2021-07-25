/*
 * File: FieldValidator.js
 * Project: webapp-rrs
 * Created Date: Monday, July 12th 2021, 1:26:20 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 12th 2021 1:26:20 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PATTERNS from '@Utils/Patterns';

/**
 * Function to check value is present
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const required = (customError) => (value, field) =>
  value ? undefined : customError ?? `Please enter a valid ${field ?? 'input'}`;

/**
 * Function to validate email address
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const email = (customError) => (value, field) =>
  PATTERNS.EMAIL.test(value)
    ? undefined
    : customError ?? `Please enter ${field ?? 'Input'} in valid format`;

/**
 * Function to validate phone number
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const phoneNumber = (customError) => (value, field) =>
  PATTERNS.PHONE_NUMBER.test(value)
    ? undefined
    : customError ?? `Please enter a valid 10-digit ${field ?? 'Input'}`;

/**
 * Function to validate alpha numberic characters
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const alphaNumeric = (customError) => (value, field) =>
  PATTERNS.ALPHA_NUMERIC_ACCENT.test(value)
    ? undefined
    : customError ?? `Only Alpha Numeric values are allowed for ${field ?? 'Input'}`;

/**
 * Function to validate number
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const number = (customError) => (value, field) =>
  isNaN(value) ? customError ?? `${field ?? 'Input'} must be a number` : undefined;

/**
 * Function to validate min length
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const minLength = (min, customError) => (value, field) =>
  value?.toString()?.length >= min
    ? undefined
    : customError ?? `${field ?? 'Input'} should be greater than ${min - 1}`;

/**
 * Function to validate max length
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const maxLength = (max, customError) => (value, field) =>
  value?.toString()?.length <= max
    ? undefined
    : customError ?? `${field ?? 'Input'} should be less than ${max + 1}`;

/**
 * Function to verify password and confirm password
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const confirmPassword = (password, customError) => (value, field) =>
  !value || value !== password
    ? customError ?? `Password and ${field ?? 'Confirm Password'} should match`
    : undefined;

/**
 * Function to Compose multiple validation functions
 * @param  {function} validators - validation functions
 * @returns
 */
const FieldValidator = ([...validators], field) => (value) =>
  validators.reduce((error, validator) => error || validator(value, field), undefined);

export default FieldValidator;
