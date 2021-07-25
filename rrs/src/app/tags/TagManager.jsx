/*
 * File: TagManager.jsx
 * Project: webapp-rrs
 * Created Date: Sunday, June 27th 2021, 6:56:20 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday June 27th 2021 9:30:50 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Script from 'next/script';

//Scripts will be automatically injected by Next.js
//Refer:- https://nextjs.org/docs/basic-features/script

/**
 * @function TagManager
 */
const TagManager = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MNQWP44');
          `,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MNQWP44"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};

export default TagManager;
