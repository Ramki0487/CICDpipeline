/*
 * File: Tiles.stories.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 2:46:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * -------
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Tiles from './Tiles';

const onClick = () => {
  window.alert('Clicked');
};

const iconProps = {
  iconName: 'close',
  onClick: onClick,
};

export const Primary = () => {
  return (
    <>
      <Tiles {...(iconProps && { iconProps: iconProps })}>Neutral</Tiles>
      <Tiles theme="theme2">
        <strong>Tiles without Icon</strong>
      </Tiles>
      <Tiles theme="theme1">
        Gender <strong>Women</strong>
      </Tiles>
      <Tiles theme="theme2" {...(iconProps && { iconProps: iconProps })}>
        Category <strong>Running</strong>
      </Tiles>
    </>
  );
};

export default {
  title: 'Tiles Component',
  component: Tiles,
};
