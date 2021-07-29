/*
 * File: UseBodyScrollLock.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 5:45:48 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday June 7th 2021 7:24:12 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBrowserLayoutEffect from './UseBrowserLayoutEffect';

const useBodyScrollLock = (lock = true) => {
  useBrowserLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = document.body.style['overflow-y'];

    // Prevent scrolling on mount
    if (lock) {
      document.body.style['overflow-y'] = 'hidden';
    }

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style['overflow-y'] = originalStyle;
    };
  }, [lock]);

  return null;
};

export default useBodyScrollLock;
