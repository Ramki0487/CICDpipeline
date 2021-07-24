/*
 * File: ImageZoom.jsx
 * Project: webapp-rrs
 * Created Date: Friday, June 18th 2021, 01:07:05 pm
 * Author: Selvam <selvam.murugan@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday June 22nd 2021 12:13:10 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * ImageZoom Component
 * @param {string} src - src of image
 * @param {string} zoomSrc - zoomSrc src of zoom image
 * @param {boolean} zoomPreload - Flag to enable preload zoom
 * @returns {function}
 */
import PropTypes from 'prop-types';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const ImageZoom = ({ src, zoomSrc, zoomPreload }) => {
  return (
    <InnerImageZoom
      src={src}
      zoomSrc={zoomSrc}
      zoomType="hover"
      zoomPreload={zoomPreload}
      hideHint={true}
    />
  );
};
ImageZoom.propTypes = {
  src: PropTypes.string.isRequired,
  zoomSrc: PropTypes.string.isRequired,
  zoomPreload: PropTypes.bool,
};
ImageZoom.defaultProps = {
  zoomPreload: false,
};
export default ImageZoom;
