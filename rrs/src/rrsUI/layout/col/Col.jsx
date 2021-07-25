/*
 * File: Col.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 19th 2021, 11:03:13 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Sunday June 27th 2021 9:30:50 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { range } from '@Utils/CustomPropTypes';
import { bool, func, node, object, oneOf, oneOfType, string } from 'prop-types';
import { generateColClasses } from './Col.helper';
import styles from './Col.module.scss';

const EXPECTED_ALIGN_SELF = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

/**
 * Col Component with Flexbox support
 * Multi Usage:-
 * 1. Flexbox Layout,
 *    Activated by default. Applies equal width between Col from the smallest to largest device
 * 2. Auto Layout,
 *    Get's activated when prop `auto=true` is passed
 *    Takes up as much space as possible else pushes the block down
 * 3. No Flex,
 *    Get's activated when prop `noflex=true` is passed
 *    Applies the natural width of the content, Act as a plain div
 * @param children {any} - Child node within the Col component
 * @param className {string} - Classname to pass on the Column
 * @param alignSelf {string} - based on flexbox's align self prop
 * @param {number} xs - Col width at extra small breakpoint (1-12)
 * @param {number} sm - Col width at small breakpoint (1-12)
 * @param {number} md - Col width at medium breakpoint (1-12)
 * @param {number} lg - Col width at large breakpoint (1-12)
 * @param {number} xl - Col width at extra large breakpoint (1-12)
 * @param {number} xxl - Col width at extra extra large breakpoint (1-12)
 * @param {number} id - id to place on Col component
 * @param {number} offsetXs - Col offset at extra small breakpoint (1-12)
 * @param {number} offsetSm - Col offset at small breakpoint (1-12)
 * @param {number} offsetMd - Col offset at medium breakpoint (1-12)
 * @param {number} offsetLg - Col offset at large breakpoint (1-12)
 * @param {number} offsetXL - Col offset at extra large breakpoint (1-12)
 * @param {number} offsetXXL - Col offset at extra extra large breakpoint (1-12)
 * @param {func} onClick - on click callback for Col item tag
 * @param {bool} auto - Col behaviour, Take up as much space as possible else push down
 * @param {bool} noflex - Col behaviour, Applies the natural width of the content
 * @param {object} style - Inline styles for column
 * @param {object} forwardRef - React ref prop
 * @returns {*}
 * @constructor
 */
const Col = (props) => {
  const {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    xxl: xxl,
    children: children,
    className: className,
    id: id,
    alignSelf: alignSelf,
    auto: auto,
    noflex: noflex,
    forwardRef: forwardRef,
    ...rest
  } = props;
  const breakpointClasses = generateColClasses([xs, sm, md, lg, xl, xxl]);

  const classes = [
    styles.col,
    auto ? styles.colAuto : '',
    noflex ? styles.colNoflex : '',
    breakpointClasses ? styles.colBreakpoints : '',
    breakpointClasses,
    alignSelf ? styles[`align-self-${alignSelf}`] : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <div id={id} className={classes} {...(forwardRef && { ref: forwardRef })} {...rest}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: oneOfType([string, node]),
  xs: range(1, 12),
  sm: range(1, 12),
  md: range(1, 12),
  lg: range(1, 12),
  xl: range(1, 12),
  xxl: range(1, 12),
  alignSelf: oneOf(EXPECTED_ALIGN_SELF),
  id: string,
  className: string,
  auto: bool,
  noflex: bool,
  forwardRef: oneOfType([func, object]),
};

Col.defaultProps = {
  className: '',
  children: null,
  id: null,
  auto: null,
  noflex: null,
  forwardRef: null,
};

export default Col;
