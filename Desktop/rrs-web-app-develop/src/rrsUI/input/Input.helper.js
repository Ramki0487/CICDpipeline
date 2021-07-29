/* istanbul ignore file */
/*
 * File: Input.helper.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 11th 2021, 09:14:25 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
/**
 * This function will validate user inputs and adds masking
 * depending of the type of data.
 * @param {object} event - On change event validator
 * @returns {*}
 */
export const validateField = ({ name, value }) => {
  const fieldName = name?.toLowerCase();
  const NO_ERROR = '';
  const FORM_ERRORS = {
    'city|state': !/[A-Za-z\s\u00C0-\u017F]+$/u.test(value) && value && 'Invalid character',
    email:
      !/^([A-Za-z0-9._-])*(@[\w-]*\.\w*[A-Za-z])$/.test(value.trim()) &&
      value &&
      'Invalid email address',
    name: !/[A-Za-z\s\u00C0-\u017F]+$/u.test(value) && value && 'Invalid character',
    phone:
      !/^(\+1|(( \(| |-|)(\d{0,3})(\) | |-))(\dn{0,3})( |-)(\d{0,4}))$/.test(value) &&
      value &&
      'Invalid phone number',
  };

  const key = Object.keys(FORM_ERRORS).find((KeyName) => RegExp(KeyName).test(fieldName));
  return FORM_ERRORS[key] || NO_ERROR;
};

export const maskField = (target) => {
  const fieldName = target.name?.toLowerCase();

  if (/phone/.test(fieldName)) {
    const phone = target.value.match(/^((\d{3})(\d{3})(\d{4}))$/);

    phone && (target.value = `+1 (${phone[2]}) ${phone[3]} ${phone[4]}`);
  }
  return target.value;
};

export const verifyPassword = (password, confirmPassword) => {
  return password !== confirmPassword ? 'Password doesnt match' : '';
};
