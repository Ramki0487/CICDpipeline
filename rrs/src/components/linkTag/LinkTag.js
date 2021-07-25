/*
 * File: LinkTag.js
 * Project: webapp-rrs
 * Created Date: Thursday, May 27th 2021, 7:22:50 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Link from 'next/link';
import { node, oneOfType, string } from 'prop-types';

const LinkTag = ({ href, className, children, ...restProps }) => {
  const AnchorTag = (
    <a href={href} className={className} {...restProps} {...(!href && { role: 'button' })}>
      {children}
    </a>
  );
  return href ? <Link href={href}>{AnchorTag}</Link> : AnchorTag;
};

LinkTag.propTypes = {
  children: oneOfType([string, node]).isRequired,
  href: string,
  className: string,
};

LinkTag.defaultProps = {
  href: null,
  className: '',
};

export default LinkTag;
