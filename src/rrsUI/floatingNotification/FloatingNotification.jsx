/*
 * File: FloatingNotification.jsx
 * Project: webapp-rrs
 * Created Date: Monday, April 05th 2021, 08:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { bool, string } from 'prop-types';
import { useState } from 'react';
import Icon from '../icon/Icon';
import { Row } from '../layout';
import Typography from '../typography/Typography';
import styles from './FloatingNotification.module.scss';

/**
 * Floating Notification Component
 * @param {string} className - Class to override styles
 * @param {boolean} isMobile - Mobile screen indicator
 * @param {string} badge - Text badge
 * @param {boolean} isActive - Hide/Show Floating Notification
 * @param {string} title - Notification title
 * @param {string} message - Notification message
 * @returns {*}
 * @constructor
 */
const FloatingNotification = ({ className, isMobile, badge, isActive, title, message }) => {
  const [active, setActive] = useState(isActive);
  const justifyContent = isMobile ? 'center' : 'flex-end';

  const classGroup = [
    styles.notification,
    styles[`notification-${active ? 'show' : 'hide'}`],
    styles[`notification-${isMobile ? 'mobile' : 'desktop'}`],
    className,
  ]
    .join(' ')
    .trim();

  return (
    <Row justifyContent={justifyContent} className={styles.notificationContainer}>
      <div className={classGroup}>
        <Row>
          <div className={styles.circle}>
            <div className={styles.innerCircle}>
              <Typography className={styles.circleText} variant="h5">
                {badge}
              </Typography>
            </div>
          </div>
          <div className={styles.content}>
            <Row justifyContent="space-between">
              <Typography className={styles.title} variant="h4">
                {title}
              </Typography>
              <Icon iconName="close" onClick={() => setActive(!active)} />
            </Row>
            <span className={styles.message}>{message}</span>
          </div>
        </Row>
      </div>
    </Row>
  );
};

// Perform Prop Validation
FloatingNotification.propTypes = {
  className: string,
  isMobile: bool,
  badge: string,
  isActive: bool,
  title: string,
  message: string,
};

// Declare default props
FloatingNotification.defaultProps = {
  className: '',
  isMobile: false,
  badge: '',
  isActive: true,
  title: '',
  message: '',
};

// export the component
export default FloatingNotification;
