import { waitForComponentToPaint } from '@Utils/Testing';
import { shallow } from 'enzyme';
import * as ModalContent from '../../ModalContext';
import ModalHead from '../ModalHead';

describe('<ModalHead>', () => {
  let wrapper;

  beforeAll(() => {
    const contextValues = { handleClick: jest.fn() };
    jest.spyOn(ModalContent, 'useAppContext').mockImplementation(() => contextValues);

    wrapper = shallow(
      <ModalHead className="headContent">
        <span>title</span>
      </ModalHead>
    );
    waitForComponentToPaint(wrapper);
  });

  test('should render the component with default props', () => {
    expect(wrapper.find('.headContent').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(1);
  });

  test('should able to override the Iconprops', () => {
    wrapper.setProps({
      iconProps: {
        iconName: 'exit',
        onClick: jest.fn(),
      },
    });

    expect(wrapper.find('Icon').length).toBe(1);

    wrapper.find('Icon').simulate('click');

    expect(wrapper.find('Icon').prop('iconName')).toBe('exit');
  });
});
