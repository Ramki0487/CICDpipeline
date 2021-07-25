/* eslint-disable react/display-name */
/*
 * File: CmsHtmlContent.jsx
 * Project: webapp-rrs
 * Created Date: Sunday, June 13th 2021, 10:03:03 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 8:02:27 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Typography from '@RRS-UI/typography/Typography';
import { typographyTypes } from '@RRS-UI/typography/TypographyTypes';
// import ReactHtmlParser from 'react-html-parser';
import htmlParser, { attributesToProps, domToReact } from 'html-react-parser';
// import DOMPurify from 'isomorphic-dompurify';
import { bool, number, object, string } from 'prop-types';
import React from 'react';
import styles from './CmsHtmlContent.module.scss';

const htmlParserOptions = (customTypography) => {
  return {
    replace: (domNode) => {
      // Replace HTML string with typography
      if (domNode.type === 'tag') {
        if (!customTypography && typographyTypes.indexOf(domNode.name) !== -1) {
          const props = attributesToProps(domNode.attribs);
          return (
            <Typography variant={domNode.name} {...props}>
              {domToReact(domNode.children)}
            </Typography>
          );
        }
      }
    },
  };
};

/**
 * Component - CmsHtmlContent
 * Uses custom WYSIWYG Editor (https://summernote.org/)
 * @param {string} content - Content to render
 * @param {string} className - Custom Class name for container
 * @param {number} spacingStripe - Applies margin top and bottom
 * @param {boolean} customTypography - Flag to decide between default typography vs custom html
 * @returns
 */
const CmsHtmlContent = ({ content, className, spacingStripe, customTypography }) => {
  if (!content) return null;

  const jsxObj = htmlParser(content, htmlParserOptions(customTypography));

  return (
    <div
      className={`${styles.htmlContent} ${className}`}
      style={{ marginTop: `${spacingStripe}px`, marginBottom: `${spacingStripe}px` }}
    >
      {jsxObj}
    </div>
  );
};

CmsHtmlContent.propTypes = {
  content: object.isRequired,
  className: string,
  spacingStripe: number,
  customTypography: bool,
};

CmsHtmlContent.defaultProps = {
  className: '',
  spacingStripe: 0,
  customTypography: false,
};

export default CmsHtmlContent;
