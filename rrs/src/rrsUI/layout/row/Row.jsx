/*
 * File: Row.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 19th 2021, 10:55:32 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, node, object, oneOf, oneOfType, string } from 'prop-types';
import styles from './Row.module.scss';

const EXPECTED_JUSTIFY = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];
const EXPECTED_ALIGN_ITEMS = ['initial', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const EXPECTED_ALIGN_SELF = ['initial', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const EXPECTED_ALIGN_CONTENT = [
  'initial',
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'stretch',
];
const EXPECTED_FLEX_WRAP = ['nowrap', 'wrap', 'wrap-reverse'];
const EXPECTED_DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'];
const TEXT_ALIGN_OPTIONS = ['left', 'center', 'right'];
const GAP_OPTIONS = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

/**
 * Row Component with Flexbox container
 * @param {any} children - Child node within the Row component
 * @param {string} justifyContent - Containers are based on flex-box, can use any valid justify-content value
 * @param {string} alignContent - Containers are based on flex-box, can use any valid align-content value
 * @param {string} flexWrap - Containers are based on flex-box, can use any valid flex-wrap value
 * @param {string} flexDirection - Containers are based on flex-box, can use any valid flex-direction value
 * @param {string} alignItems - Containers are based on flex-box, can use any valid align-items value
 * @param {string} alignSelf - Containers are based on flex-box, can use any valid align-self value
 * @param {string} textAlign - Containers are based on flex-box, can use any valid text-align value
 * @param {string} className - Custom Class to override styles
 * @param {string} textAlign - Containers are based on flex-box, can use any valid text-align value
 * @param {number} columnGap - Custom Class to set column gap
 * @param {number} rowGap - Custom Class to set row gap
 * @param {string} id - id to place on row
 * @param {object} forwardRef - React ref prop
 * @returns {*}
 */
const Row = (props) => {
  const {
    children: children,
    className: className,
    id: id,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,
    alignSelf: alignSelf,
    flexWrap: flexWrap,
    flexDirection: flexDirection,
    textAlign: textAlign,
    columnGap: columnGap,
    rowGap: rowGap,
    forwardRef: forwardRef,
    columnGutter: columnGutter,
    ...rest
  } = props;

  const classes = [
    justifyContent ? styles[`justify-${justifyContent}`] : '',
    alignItems ? styles[`align-items-${alignItems}`] : '',
    alignContent ? styles[`align-content-${alignContent}`] : '',
    alignSelf ? styles[`align-self-${alignSelf}`] : '',
    flexWrap ? styles[`flex-wrap-${flexWrap}`] : '',
    flexDirection ? styles[`direction-${flexDirection}`] : '',
    textAlign ? styles[`text-align-${textAlign}`] : '',
    columnGap ? styles[`column-gap-${columnGap}`] : '',
    rowGap ? styles[`row-gap-${rowGap}`] : '',
    textAlign ? styles[`text-align-${textAlign}`] : '',
    columnGutter ? styles[`column-gutter-${columnGutter}`] : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <div
      className={`${styles.flexRow} ${classes}`}
      id={id}
      {...(forwardRef && { ref: forwardRef })}
      {...rest}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: oneOfType([string, node]),
  className: string,
  justifyContent: oneOf(EXPECTED_JUSTIFY),
  alignItems: oneOf(EXPECTED_ALIGN_ITEMS),
  flexDirection: oneOf(EXPECTED_DIRECTION),
  textAlign: oneOf(TEXT_ALIGN_OPTIONS),
  alignContent: oneOf(EXPECTED_ALIGN_CONTENT),
  alignSelf: oneOf(EXPECTED_ALIGN_SELF),
  flexWrap: oneOf(EXPECTED_FLEX_WRAP),
  columnGap: oneOf(GAP_OPTIONS),
  rowGap: oneOf(GAP_OPTIONS),
  columnGutter: oneOf(GAP_OPTIONS),
  id: string,
  forwardRef: oneOfType([func, object]),
};

Row.defaultProps = {
  className: '',
  children: null,
  id: null,
  forwardRef: null,
  justifyContent: null,
  alignItems: null,
  flexDirection: null,
  textAlign: 'left',
  alignContent: null,
  alignSelf: null,
  flexWrap: null,
  columnGap: null,
  rowGap: null,
  columnGutter: null,
};

export default Row;
