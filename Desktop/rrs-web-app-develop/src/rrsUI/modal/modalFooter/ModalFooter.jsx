import { string, node, oneOfType } from 'prop-types';

/**
 * Modal Footer Component
 * @param {children} children - Child Component
 * @returns {*}
 * @constructor
 */

const ModalFooter = ({ children }) => {
  return children;
};

ModalFooter.propTypes = {
  children: oneOfType([string, node]).isRequired,
};

export default ModalFooter;
