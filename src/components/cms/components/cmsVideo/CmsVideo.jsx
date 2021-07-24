/*
 * File: CmsVideo.jsx
 * Project: webapp-rrs
 * Created Date: Monday, July 5th 2021, 5:29:13 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday July 5th 2021 5:29:13 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Icon from '@RRS-UI/icon/Icon';
import { object } from 'prop-types';
import ReactPlayer from 'react-player';
import styles from './CmsVideo.module.scss';

/**
 * Component - CMS Video
 * @param {object} video - Video details
 * @param {object} previewImage - Preview Image details
 * @returns
 */
const CmsVideo = ({ video, previewImage }) => {
  if (!video) return null;

  return (
    <ReactPlayer
      url={video?.fields?.file?.url}
      controls
      pip
      playsinline
      playing
      light={previewImage?.fields?.file?.url ?? true}
      width="100%"
      className={styles.videoFrame}
      playIcon={<Icon iconName="play" />}
    />
  );
};

CmsVideo.propTypes = {
  video: object.isRequired,
  previewImage: object,
};

CmsVideo.defaultProps = {
  previewImage: null,
};

export default CmsVideo;
