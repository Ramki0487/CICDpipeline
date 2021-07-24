/*
 * File: _app.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 8:58:22 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 3:33:13 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Layout from '@App/layout';
import TagManager from '@App/tags/TagManager';
import '@Assets/styles/Global.scss';
import Footer from '@Components/footer/Footer';
import Header from '@Components/header/Header';
import { getPageModel } from '@Redux/actions/Contentful';
import { updateDeviceType } from '@Redux/actions/DeviceInfo';
import { getSessionInfo } from '@Redux/actions/SessionInfo';
import Wrapper from '@Redux/Wrapper';
import { getDeviceType } from '@Utils/DeviceInfo';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import Head from 'next/head';
import { func, object, oneOfType } from 'prop-types';
const StickyFooter = dynamic(() => import('@Components/stickyFooter/StickyFooter'), { ssr: false });

const App = ({ Component, pageProps }) => {
  const { pageTitle, errorCode } = pageProps;
  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{pageTitle ?? 'Road Runner Sports'}</title>
        </Head>

        {/* Google TagManager */}
        <TagManager />

        <Header />
        <main id="rrs-main" role="main" aria-live="polite">
          {errorCode ? <Error statusCode={errorCode} /> : <Component {...pageProps} />}
        </main>
        <Footer />
        <StickyFooter />
      </Layout>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const { store, asPath, req } = ctx;

  // Note:- Temp changes for POC
  if (!asPath.includes('/cms/')) {
    // Fetch Page Model from CMS
    await store.dispatch(getPageModel(asPath));
  }

  // Update device type to store
  const userAgent = req?.headers['user-agent'];
  if (userAgent) {
    store.dispatch(updateDeviceType(getDeviceType(userAgent)));
  }

  const {
    cms: { pageModel },
  } = store.getState();

  let pageProps = {
    pageTitle: pageModel?.title, // CMS pageTitle, Can we overridden from component
  };

  // Validate CMS page
  // Note:- Temp changes for POC
  if (!asPath.includes('/cms/') && pageModel && !Object.keys(pageModel).length) {
    pageProps.errorCode = 404;
    pageProps.pageTitle = '404 Page Not Found';
  } else {
    // Valid Page rendering starts here
    pageProps = {
      ...pageProps,
      ...((Component.getInitialProps ? await Component.getInitialProps(ctx) : null) ?? {}),
    };

    // Fetch user session details
    await store.dispatch(getSessionInfo());
  }

  return { pageProps };
};

App.propTypes = {
  Component: oneOfType([func, object]).isRequired,
  pageProps: object.isRequired,
};

export default Wrapper.withRedux(App);
