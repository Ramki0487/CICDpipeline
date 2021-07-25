/*
 * File: CmsButton.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 26th 2021, 10:08:41 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import { array, string } from 'prop-types';

/**
 * Component - CMS Button
 * @param {object} button - Button fields
 * @returns
 */
const CmsButton = ({ text, link, theme, ...restProps }) => {
  if (!text) return null;

  return (
    <LinkTag href={link}>
      <Button tabIndex="-1" {...restProps} theme={theme[0]}>
        {text}
      </Button>
    </LinkTag>
  );
};

CmsButton.propTypes = {
  text: string,
  link: string,
  theme: array,
};

CmsButton.defaultProps = {
  text: '',
  link: '',
  theme: ['rr-navy'],
};

export default CmsButton;
