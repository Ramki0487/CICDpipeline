/*
 * File: CmsPage.jsx
 * Project: webapp-rrs
 * Created Date: Monday, June 28th 2021, 1:34:09 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 6th 2021 1:26:51 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { Container } from '@RRS-UI/layout';
import { getAllContents } from '@Utils/Contentful';
import { useSelector } from 'react-redux';
import componentMapping from './CmsComponentMapping';

/**
 * Component - CMS Page
 * @returns
 */
const CmsPage = () => {
  let Comp;
  const pageModel = useSelector((state) => state.cms?.pageModel);

  const contents = getAllContents(pageModel);
  if (contents.length > 0) {
    return contents.map((content, index) => {
      Comp = componentMapping[content?.sys?.contentType?.sys?.id];
      if (Comp) {
        const Module = <Comp key={`${content?.sys?.id}_${index}`} {...content?.fields} />;
        return content?.fields?.fluidContainer ? (
          Module
        ) : (
          <Container key={`${content?.sys?.id}_${index}`}>{Module}</Container>
        );
      }
    });
  }

  return null;
};

export default CmsPage;
