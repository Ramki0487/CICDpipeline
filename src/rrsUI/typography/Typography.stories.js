/*
 * File: Typography.stories.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 11th 2021, 6:30:57 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Thursday March 11th 2021 6:30:57 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Typography from './Typography';

export const Primary = () => {
  return (
    <>
      <Typography>H1 Tag</Typography>
      <Typography variant="h2">H2 Tag</Typography>
      <Typography variant="h3">H3 Tag</Typography>
      <Typography variant="h4">H4 Tag</Typography>
      <Typography variant="h5">H5 Tag</Typography>
      <Typography variant="p">Paragraph Tag</Typography>
      <Typography variant="small">Small Text</Typography>
    </>
  );
};

export default {
  title: 'Typography',
  component: Typography,
};
