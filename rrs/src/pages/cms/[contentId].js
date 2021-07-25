/*
 * File: [contentId].js
 * Project: webapp-rrs
 * Created Date: Monday, July 12th 2021, 6:27:11 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 12th 2021 6:27:11 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import htmlParser from 'html-react-parser';
import { string } from 'prop-types';

const CmsPage = ({ rawHTML }) => {
  return htmlParser(rawHTML);
};

// This gets called on every request
CmsPage.getInitialProps = async ({ query }) => {
  const rawHTML = await fetch(
    `https://www.roadrunnersports.com/rrs/content/content1.jsp?contentId=${query?.contentId}`,
    {
      method: 'GET',
    }
  ).then((response) => response.text());

  // Pass data to the page via props
  return { rawHTML };
};

CmsPage.propTypes = {
  rawHTML: string.isRequired,
};

export default CmsPage;
