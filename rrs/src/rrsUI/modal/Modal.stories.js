import Modal from './Modal';
import styles from './Modal.stories.scss';

export default {
  title: 'Modal Component',
  component: Modal,
};

const Template = (args) => {
  return (
    <Modal {...args} contentClass={styles.modalContainer}>
      <Modal.head>
        <h3>Title</h3>
      </Modal.head>
      <Modal.body>
        <p className={styles.modalContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </Modal.body>
    </Modal>
  );
};

export const Panel = Template.bind({});
Panel.args = {
  showModal: true,
};
