/*
 * File: Contentful.js
 * Project: webapp-rrs
 * Created Date: Wednesday, March 3rd 2021, 5:59:20 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

export const getAllContents = (pageModel = {}) => {
  return pageModel?.components ?? [];
};

export const getContentByTypeId = (pageModel = {}, contentType) => {
  return (
    pageModel?.components?.filter(({ sys }) => sys?.contentType?.sys?.id === contentType)?.[0]
      ?.fields ?? {}
  );
};
