/*
 * File: PanelBody.jsx
 * Project: webapp-rrs
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Accordion from '@RRS-UI/accordion/Accordion';
import { oneOfType, string, node, object } from 'prop-types';

/**
 * PanelBody Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @returns {*}
 * @constructor
 */
const PanelBody = ({ children, className }) => {
  return <Accordion.body className={className}>{children}</Accordion.body>;
};

PanelBody.propTypes = {
  children: oneOfType([object, node]).isRequired,
  className: string,
};

PanelBody.defaultProps = {
  className: '',
};

export default PanelBody;
