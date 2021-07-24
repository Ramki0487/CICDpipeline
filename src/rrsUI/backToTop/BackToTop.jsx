/*
 * File: BackToTop.jsx
 * Project: webapp-rrs
 * Created Date: Friday, June 17th 2021, 1:31:47 am
 * Author: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 3:32:10 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { scrollTo } from '@Utils/App';
import { number } from 'prop-types';
import styles from './BackToTop.module.scss';

/**
 * BackToTop Component
 * @param {number} scrollTop - scroll offset
 * @returns
 */
const BackToTop = ({ scrollTop }) => {
  if (scrollTop <= 250) return null;

  const handleScrollTop = () => scrollTo({ top: 0 });

  return <button onClick={handleScrollTop} className={styles.backToTop}></button>;
};

BackToTop.propTypes = {
  scrollTop: number,
};

BackToTop.defaultProps = {
  scrollTop: 0,
};

export default BackToTop;
