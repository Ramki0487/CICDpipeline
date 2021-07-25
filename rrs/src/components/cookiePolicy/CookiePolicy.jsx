/*
 * File: CookiePolicy.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, June 24th 2021, 5:53:13 pm
 * Author: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 3:33:13 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { COOKIE_ACCEPT_KEY } from '@App/constants/StorageKeys';
import LinkTag from '@Components/linkTag/LinkTag';
import storage from '@Utils/Storage';
import { useState } from 'react';
import styles from './CookiePolicy.module.scss';

/**
 * Component CookiePolicy
 * @returns
 */
const CookiePolicy = () => {
  const [isAccepted, setIsAccepted] = useState(storage.getItem(COOKIE_ACCEPT_KEY));

  if (isAccepted) return null;

  const handleAccept = () => {
    storage.setItem(COOKIE_ACCEPT_KEY, true);
    setIsAccepted(true);
  };

  return (
    <div className={styles.cookiePolicy}>
      At Road Runner Sports, we&apos;re committed to protecting your privacy rights. By accessing
      this site, you&apos;re agreeing to our updated{' '}
      <LinkTag className={styles.cookiePolicyLink} href="/content/privacy-policy">
        privacy policy.
      </LinkTag>
      <LinkTag className={styles.cookiePolicyCta} onClick={handleAccept}>
        Accept &amp; Close
      </LinkTag>
    </div>
  );
};

export default CookiePolicy;
