/* istanbul ignore file */
/*
 * File: HelpSection.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, January 17th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { string, node } from 'prop-types';
import { useSelector } from 'react-redux';
import { Row } from '../layout';
import Typography from '../../components/typography/Typography';
import styles from './HelpSection.module.scss';

/**
 * HelpSection Component
 * @param {string} className - Class name to override styles of input
 * @param {node} children - Text content
 * @returns {*}
 * @constructor
 */
const HelpSection = () => {
  const { device } = useSelector((state) => state);

  const flexDirection = !device?.isDesktop && !device.isTablet ? 'column' : 'row';
  const flexWrap = !device?.isDesktop && !device.isTablet ? 'nowrap' : 'wrap';

  const Section = ({ children }) => {
    return (
      <Row
        className={styles.section}
        justifyContent="center"
        flexWrap={flexWrap}
        textAlign="center"
      >
        <div className={styles.icon}>ICON</div>
        {children}
      </Row>
    );
  };

  return (
    <Row
      className={styles.helpSection}
      flexDirection={flexDirection}
      justifyContent="space-around"
      flexWrap={flexWrap}
    >
      <Section>
        <Row className={styles.sectionContent} flexDirection="column" rowGap={10}>
          <Typography variant="h3">1-800-743-3206</Typography>
          <Typography className={styles.textContent} variant="small">
            6 a.m. - 7 p.m. PST Mon. - Fri.
            <br />8 a.m. - 5 p.m. PST Sat. - Sun.
          </Typography>
        </Row>
      </Section>
      <Section>
        <Row className={styles.sectionContent} flexDirection="column" rowGap={10}>
          <Typography variant="h3">FREE SHIPPING ALWAYS</Typography>
          <Typography className={styles.textContent} variant="small">
            No minimums lorem ipsum dolor sit amet adipiscing elit nullam est.
          </Typography>
        </Row>
      </Section>
      <Section>
        <Row className={styles.sectionContent} flexDirection="column" rowGap={10}>
          <Typography variant="h3">ANOTHER REASSURING THING</Typography>
          <Typography className={styles.textContent} variant="small">
            Lorem ipsum dolor sit amet adipiscing elit nullam est lorem ipsm dolor.
          </Typography>
        </Row>
      </Section>
    </Row>
  );
};

// Perform Prop Validation
HelpSection.propTypes = {
  className: string,
  children: node,
};

// Declare default props
HelpSection.defaultProps = {
  className: '',
  children: null,
};

// Export the component
export default HelpSection;
