/*
 * File: Panel.jsx
 * Project: webapp-rrs
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Accordion from '@RRS-UI/accordion/Accordion';
import PanelHead from '@RRS-UI/panel/panelHead/PanelHead';
import PanelBody from '@RRS-UI/panel/panelBody/PanelBody';
import { node, string } from 'prop-types';
import styles from './Panel.module.scss';

/**
 * Panel Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @returns {*}
 * @constructor
 */

const Panel = ({ children, className }) => {
  const classes = [styles.panel, className].join(' ').trim();

  return (
    <Accordion collapsed={true} className={classes}>
      {children}
    </Accordion>
  );
};

Panel.Head = PanelHead;
Panel.Body = PanelBody;

export default Panel;

Panel.propTypes = {
  children: node.isRequired,
  className: string,
};

Panel.defaultProps = {
  className: '',
};
