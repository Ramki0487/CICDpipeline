/*
 * File: CmsImage.jsx
 * Project: webapp-rrs
 * Created Date: Friday, June 25th 2021, 6:04:04 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 22nd 2021 12:46:05 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { fit, format, quality } from '@Configs/CmsImageConfig';
import Image from '@RRS-UI/image/Image';
import { constructQueryString } from '@Utils/Url';
import { object, string } from 'prop-types';

// Supported Device and breakpoints
const devices = { mobile: 576, desktop: 992 };

const parseSizeFromString = (str) => {
  const sizeObj = str?.split('x');
  return { width: sizeObj?.[0], height: sizeObj?.[1] };
};

/**
 * Component - CMS Image
 * @param {object} desktop - Image for desktop
 * @param {object} mobile - Image for mobile
 * @param {object} settings - Image Settings
 * @returns
 */
const CmsImage = ({ desktop, desktopSize, mobile, mobileSize, settings, ...restProps }) => {
  if (!desktop && !mobile) return null;

  const srcSets = [];
  const imgMapping = {
    mobile: { img: mobile, ...parseSizeFromString(mobileSize) },
    desktop: { img: desktop, ...parseSizeFromString(desktopSize) },
  };

  const getImageProps = ({ img, width, height }) => {
    const queryStr = constructQueryString({
      fm: format,
      q: quality,
      fit: fit,
      w: width,
      h: height,
      ...settings,
    });

    return {
      src: `${img?.fields?.file?.url}?${queryStr}`,
      alt: img?.fields?.title,
      width: width,
      // height: height,
    };
  };

  // create source set for image based on default breakpoints
  Object.entries(devices).forEach(([device, bp]) => {
    const imgMap = imgMapping[device];
    if (imgMap?.img) {
      srcSets.push({
        breakPoint: bp,
        ...getImageProps(imgMap),
      });
    }
  });

  // If more than one source found render a picture tag else fallback as image
  if (srcSets.length > 1) {
    return <Image srcSet={srcSets} {...restProps} />;
  }

  // render image by default
  delete srcSets[0]?.breakPoint;
  return <Image {...srcSets[0]} {...restProps} />;
};

CmsImage.propTypes = {
  desktop: object,
  mobile: object,
  settings: object,
  desktopSize: string,
  mobileSize: string,
};

CmsImage.defaultProps = {
  mobile: null,
  settings: null,
  desktopSize: '',
  mobileSize: '',
};

export default CmsImage;
