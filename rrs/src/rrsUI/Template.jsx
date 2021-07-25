/* istanbul ignore file */
/*
 * File: Template.jsx
 * Project: webapp-rrs
 * Created Date: Friday, February 19th 2021, 9:30:34 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Sunday June 20th 2021 2:27:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * This is a template file for components,
 * Feel free to extend this template for all new components to be created.
 */

// Import Dependencies, scss and helper functions
/**
 * Make sure to import dependencies in below order
 * 1) External dependencies like, prop-types, react etc..
 * 2) Internal dependencies like other components, helper files
 * 3) Images/svg icons if applicable
 * 4) CSS files
 */
import { string } from 'prop-types';
import { Fragment } from 'react';

// Declare constants required for the component

// Write the component here
/**
 * Make sure to write proper comments for the component
 * Use js.doc comment formats
 * All param must be declared as @param {tye} prop - Description
 * Refer the example comment below
 */
/**
 * Row Component with Flexbox container
 * @param {string} label - Button label
 * @param {string} className - Custom class name to override default styles
 * @returns {*}
 */
const Button = ({ label, className }) => {
  return (
    <Fragment>
      <button className={className}>{label}</button>
    </Fragment>
  );
};

// Perform Prop Validation
/**
 * Make sure the prop is marked as required if there is no default prop assigned
 */
Button.propTypes = {
  label: string.isRequired,
  className: string,
};

// Decalre default props
/**
 * Make sure to pass the default props only if it is not marked as required in propTypes validation
 */
Button.defaultProps = {
  className: '',
};

// export the component
export default Button;
