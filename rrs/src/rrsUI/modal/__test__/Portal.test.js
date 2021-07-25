import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import Portal from '../Portal';

describe('<Portal/>', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Portal rootId="rrs-modal" className="rrs-modal">
        <span>title</span>
      </Portal>
    );
    waitForComponentToPaint(wrapper);
  });

  test('should create a new div to render component', () => {
    expect(wrapper.find('.rrs-modal').length).toBe(1);
    expect(wrapper.find('span').text()).toEqual('title');
  });

  test('Component should render on existing div', () => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.append(modalRoot);

    // div is already created with id 'modal-root'
    wrapper.setProps({ rootId: 'modal-root', className: 'modalRoot' });

    expect(wrapper.prop('rootId')).toEqual('modal-root');
  });
});
