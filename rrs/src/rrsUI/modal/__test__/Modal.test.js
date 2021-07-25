import { waitForComponentToPaint } from '@Utils/Testing';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Modal from '../Modal';

describe('<Modal>', () => {
  const handleafterClose = jest.fn();
  const handlebeforeClose = jest.fn();
  const handleafterOpen = jest.fn();
  // const handleClick = jest.fn();
  let modalWrapper = {};
  modalWrapper = mount(
    <Modal
      handleAfterOpen={handleafterOpen}
      handleAfterClose={handleafterClose}
      handleBeforeClose={handlebeforeClose}
      showModal={true}
    >
      <Modal.head>Title</Modal.head>
      <Modal.body>Body</Modal.body>
    </Modal>
  );
  waitForComponentToPaint(modalWrapper);

  beforeAll(async () => {
    modalWrapper = shallow(
      <Modal
        handleAfterOpen={handleafterOpen}
        handleAfterClose={handleafterClose}
        handleBeforeClose={handlebeforeClose}
        showModal={true}
      >
        <Modal.head>Title</Modal.head>
        <Modal.body>Body</Modal.body>
      </Modal>
    );
    waitForComponentToPaint(modalWrapper);
  });

  test('should be defined', () => {
    expect(modalWrapper).toBeDefined();
  });

  // it('should able to override existing class of content and overlay', () => {
  //   expect(modalWrapper.find('ForwardRef(LoadableComponent)').hasClass(' rrsModal')).toBe(true);
  //   expect(modalWrapper.find('Row').hasClass('overlay')).toBe(true);
  //   modalWrapper.setProps({ overlayClass: 'overlayContent', contentClass: 'contentOver' });
  //   expect(modalWrapper.find('ForwardRef(LoadableComponent)').hasClass('overlayContent')).toBe(
  //     true
  //   );
  //   expect(modalWrapper.find('Row').hasClass('contentOver')).toBe(true);
  // });

  // it('should trigger callback functions on Modal close', async () => {
  //   modalWrapper.find('ModalHead').dive().find('Icon').simulate('click');

  //   expect(handlebeforeClose).toBeCalled();
  //   expect(handleafterClose).toBeCalled();
  // });
});
