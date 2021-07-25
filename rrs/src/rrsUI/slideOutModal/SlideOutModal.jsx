/*
 * File: SlideOutModal.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 12:24:40 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { bool, func, node, oneOfType, string } from 'prop-types';
import Icon from '../icon/Icon';
import { Col } from '../layout';
import styles from './SlideOutModal.module.scss';

/**
 * SlideOut Modal Component
 * @param {boolean} isOpen - Flag to show/hide drawer
 * @param {boolean} withCloseIcon - Flag to show/hide close button
 * @param {string} className - Class to override default styles
 * @param {node} childern - Modal content
 * @param {function} onClose - Callback function to update modal state
 */
const SlideOutModal = ({
  isOpen,
  withCloseIcon,
  className,
  contentClassName,
  children,
  onClose,
}) => {
  return (
    <Col className={`${styles.drawer} ${className} ${isOpen ? styles.drawerOpen : ''}`}>
      {withCloseIcon && (
        <Icon iconName="close" className={styles.drawerClosebtn} onClick={onClose} />
      )}
      <Col className={`${styles.drawerContent} ${contentClassName}`}>{children}</Col>
      <Col className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOverlayOpen : ''}`}></Col>
    </Col>
  );
};

// Perform Prop Validation
SlideOutModal.propTypes = {
  isOpen: bool,
  withCloseIcon: bool,
  className: string,
  children: oneOfType([string, node]),
  onClose: func,
  contentClassName: string,
};

SlideOutModal.defaultProps = {
  isOpen: false,
  withCloseIcon: true,
  className: '',
  children: '',
  onClose: null,
  contentClassName: '',
};

export default SlideOutModal;
