import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import { bool, func, node, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Col, Row } from '../layout';
import styles from './Modal.module.scss';
import ModalBody from './modalBody/ModalBody';
import ModalContext from './ModalContext';
import ModalFooter from './modalFooter/ModalFooter';
import ModalHead from './modalHead/ModalHead';
import Portal from './Portal';

const { Provider } = ModalContext;

/**
 * Modal Component
 * @param {string} overlayClass - Class to override Overlay styles
 * @param {string} contentClass - Class to override Content styles
 * @param {string} wrapperClass - Class to override wrapper styles
 * @param {boolean} showModal - State of the Modal
 * @param {children} children - Child Component
 * @param {func} handleAfterClose - Callback function for after modal close
 * @param {func} handleBeforeClose - Callback function for before modal close
 * @param {func} handleAfterOpen - Callback function for after modal open
 * @returns {*}
 * @constructor
 */
const Modal = (props) => {
  const {
    children,
    showModal,
    contentClass,
    overlayClass,
    wrapperClass,
    handleAfterOpen,
    handleAfterClose,
    handleBeforeClose,
  } = props;

  const [show, setShow] = useState(showModal);

  const handleClick = async () => {
    handleBeforeClose && (await handleBeforeClose());
    setShow(!show);
    handleAfterClose && handleAfterClose();
  };

  useEffect(() => {
    handleAfterOpen && handleAfterOpen();
  }, []);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  useBodyScrollLock(show);

  if (!show) return null;

  return (
    <Provider value={{ show, handleClick }}>
      <Portal rootId="rrs-modal">
        <div className={` ${styles.rrsModal} ${show ? styles.active : ''} ${overlayClass} `}>
          <Row
            className={`${styles.rrsModalOverlay} ${contentClass}`}
            aria-modal="true"
            tabIndex="-1"
          >
            <Col noflex className={`${styles.rrsModalOverlayContent} ${wrapperClass}`}>
              {children}
            </Col>
          </Row>
        </div>
      </Portal>
    </Provider>
  );
};

Modal.propTypes = {
  children: oneOfType([string, node]).isRequired,
  contentClass: string,
  overlayClass: string,
  wrapperClass: string,
  showModal: bool,
  handleAfterClose: func,
  handleAfterOpen: func,
  handleBeforeClose: func,
};

Modal.defaultProps = {
  overlayClass: '',
  contentClass: '',
  wrapperClass: '',
  showModal: false,
  handleAfterClose: null,
  handleAfterOpen: null,
  handleBeforeClose: null,
};

Modal.head = ModalHead;
Modal.body = ModalBody;
Modal.footer = ModalFooter;

export default Modal;
