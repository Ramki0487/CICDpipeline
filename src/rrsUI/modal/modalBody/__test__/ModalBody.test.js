import { shallow } from 'enzyme';
import ModalBody from '../ModalBody';

describe('<ModalBody>', () => {
  test('should render modalBody Component', () => {
    const wrapper = shallow(
      <ModalBody>
        <p>Content</p>
      </ModalBody>
    );

    expect(wrapper.find('p').text()).toBe('Content');
  });
});
