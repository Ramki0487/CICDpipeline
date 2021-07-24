import { shallow } from 'enzyme';
import ModalFooter from '../ModalFooter';

describe('<ModalFooter>', () => {
  test('should able to render component modalFooter', () => {
    const wrapper = shallow(
      <ModalFooter>
        <span>Footer</span>
      </ModalFooter>
    );

    expect(wrapper.find('span').text()).toBe('Footer');
  });
});
