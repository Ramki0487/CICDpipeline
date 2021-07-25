/*
 * File: _document.js
 * Project: webapp-rrs
 * Created Date: Monday, February 8th 2021, 4:28:01 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday July 17th 2021 3:14:07 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { dnsPrefetchDomainsList } from '@App/constants/DNSPrefetchConfig';
import { preloadFontsList } from '@App/constants/PreloadAssetsConfig';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="robots" content="NOODP, NOYDIR, index, follow" />
          {dnsPrefetchDomainsList?.map((domain) => (
            <link rel="dns-prefetch" href={domain} key={domain} />
          ))}
          {preloadFontsList?.map((path) => (
            <link key={path} rel="preload" href={path} as="font" crossOrigin="" type="font/woff2" />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
