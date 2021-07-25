import { string, node, shape, oneOfType } from 'prop-types';
import { Row } from '../../layout';
import { useAppContext } from '../ModalContext';
import Icon from '../../icon/Icon';

/**
 * Modal Head Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @returns {*}
 * @constructor
 */

const ModalHead = ({ children, iconProps, className }) => {
  const { handleClick } = useAppContext();

  const iconCallBack = () => {
    iconProps.onClick && iconProps.onClick();
    handleClick();
  };

  return (
    <Row justifyContent="space-between" className={className} flexWrap="nowrap">
      {children}
      <Icon {...iconProps} onClick={iconCallBack} />
    </Row>
  );
};

ModalHead.propTypes = {
  children: oneOfType([string, node]),
  iconProps: shape({}),
  className: string,
};

ModalHead.defaultProps = {
  iconProps: {
    iconName: 'close',
  },
  className: '',
  children: '',
};

export default ModalHead;
