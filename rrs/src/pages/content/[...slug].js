/*
 * File: [...slug].js
 * Project: webapp-rrs
 * Created Date: Sunday, June 13th 2021, 9:28:37 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import styles from '@Assets/styles/pages/content/content.module.scss';
import CmsPage from '@Components/cms/CmsPage';

const ContentPage = () => {
  return (
    <div className={styles.content}>
      <CmsPage />
    </div>
  );
};

export default ContentPage;
