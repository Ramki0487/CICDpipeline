import { node, string } from 'prop-types';
import { createPortal } from 'react-dom';

/**
 * Modal Component
 * @param {string} rootId - specifies a unique id for an HTML element to render the Modal Component.
 * @param {boolean} show - State of the Modal
 * @param {string} className - to apply the modal styles
 * @param {children} children - Child Component
 * @returns {*}
 * @constructor
 */
const Portal = ({ children, rootId }) => {
  let root = document.getElementById(rootId);
  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', rootId);
    document.body.append(root);
  }

  return createPortal(children, root);
};

Portal.propTypes = {
  children: node.isRequired,
  rootId: string.isRequired,
};

export default Portal;
