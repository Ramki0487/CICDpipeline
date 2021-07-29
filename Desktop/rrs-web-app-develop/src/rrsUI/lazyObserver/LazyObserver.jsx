/*
 * File: LazyObserver.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 5th 2021, 7:04:48 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday June 20th 2021 2:27:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBrowserLayoutEffect from '@Hooks/UseBrowserLayoutEffect';
import { isTypeOf } from '@Utils/Types';
import { bool, func, node, object, oneOfType, string } from 'prop-types';
import { useRef } from 'react';
require('intersection-observer');

const isIntersectObserverSupported =
  typeof window !== 'undefined' && !!window?.IntersectionObserver;

/**
 * LazyObserver Component
 * @param {node} children - Child component to render
 * @param {boolean} oberve - Flag to Observe the element in viewport 
 * @param {string} options.rootMargin - A string which specifies a set of offsets to 
                                                    add to the root's bounding box
 * @param {string} options.threshold - Either a single number or an array of numbers between 0.0 and 1.0, 
                                                   specifying a ratio of intersection area to total bounding box area 
                                                   for the observed target
 * @param {function} handleOnIntersection - Callback function to trigger when Intersected
 * @param {function} handleOnIntersectionFallback - Callback function to trigger incase of failures
 * @returns {*}
 */

const LazyObserver = ({
  children,
  options,
  observe,
  handleOnIntersection,
  handleOnIntersectionFallback,
}) => {
  if (!children) return null;

  if (!observe) return children;

  const lazyRef = children.ref ?? useRef();
  const refs = {
    ...(isTypeOf(children.type, 'function') ? { forwardRef: lazyRef } : { ref: lazyRef }),
  };

  const initObserver = () => {
    if (isIntersectObserverSupported && handleOnIntersection && lazyRef?.current) {
      let lazyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const lazyElem = entry.target;

            handleOnIntersection(lazyElem);
            lazyObserver.unobserve(lazyElem);
          }
        });
      }, options);

      lazyObserver.observe(lazyRef?.current);
    } else {
      handleOnIntersectionFallback && handleOnIntersectionFallback(lazyRef?.current);
    }
  };

  useBrowserLayoutEffect(() => {
    initObserver();
  }, []);

  return <children.type {...children.props} {...refs} />;
};

LazyObserver.propTypes = {
  observe: bool,
  handleOnIntersection: func,
  handleOnIntersectionFallback: func,
  options: object,
  children: oneOfType([string, node]).isRequired,
};

LazyObserver.defaultProps = {
  options: {
    rootMargin: '200px',
    threshold: 0.01,
  },
  handleOnIntersection: null,
  handleOnIntersectionFallback: null,
  observe: true,
};

export default LazyObserver;
