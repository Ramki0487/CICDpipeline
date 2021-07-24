/*
 * File: CmsContent.jsx
 * Project: webapp-rrs
 * Created Date: Friday, March 5th 2021, 7:21:10 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Tuesday July 6th 2021 1:26:51 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { getContentByTypeId } from '@Utils/Contentful';
import { object, string } from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import componentMapping from './CmsComponentMapping';

/**
 * Component CMS Content
 * @param {string} contentTypeId - contentType
 * @param {object} fields - Content
 * @returns
 */
const CmsContent = ({ contentTypeId, fields }) => {
  let Comp;
  const pageModel = useSelector((state) => state.cms?.pageModel);

  // If the request is for specific content then process it
  // Else process all the contents for current page
  if (contentTypeId) {
    Comp = useMemo(() => componentMapping[contentTypeId], [contentTypeId]);
    if (Comp) {
      const content = fields ?? getContentByTypeId(pageModel, contentTypeId);
      return content ? <Comp {...content} /> : null;
    }
    return null;
  }

  return null;
};

CmsContent.propTypes = {
  contentTypeId: string,
  fields: object,
};

CmsContent.defaultProps = {
  contentTypeId: null,
  fields: null,
};
export default CmsContent;
