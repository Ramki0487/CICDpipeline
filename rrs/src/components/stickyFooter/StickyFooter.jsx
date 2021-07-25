/*
 * File: StickyFooter.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, July 13th 2021, 8:21:31 pm
 * Author: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 3:32:10 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import CookiePolicy from '@Components/cookiePolicy/CookiePolicy';
import BackToTop from '@RRS-UI/backToTop/BackToTop';
import { Row } from '@RRS-UI/layout';
import { useSelector } from 'react-redux';
import styles from './StickyFooter.module.scss';

const StickyFooter = () => {
  const { scrollTop } = useSelector((state) => state.device);

  return (
    <Row flexDirection="column" className={styles.stickyFooter}>
      <Row justifyContent="flex-end">
        <BackToTop scrollTop={scrollTop} />
      </Row>
      <CookiePolicy />
    </Row>
  );
};

export default StickyFooter;
