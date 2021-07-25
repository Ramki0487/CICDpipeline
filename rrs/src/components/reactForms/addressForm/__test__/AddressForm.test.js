import { mount } from 'enzyme';
import AddressForm from '../AddressForm';

describe('<AddressForm/>', () => {
  test('should render with save button when page is non checkout', () => {
    const wrapper = mount(<AddressForm pageName="myorder" />);

    expect(wrapper.find('Button')).toHaveLength(1);
    expect(wrapper.find('Button').text()).toBe('Save Address');
  });

  test('should not render save button when page is checkout', () => {
    const wrapper = mount(<AddressForm pageName="checkout" />);

    expect(wrapper.find('Button')).toHaveLength(0);
  });

  test('should trigger callback on form submit', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(<AddressForm pageName="checkout" handleOnSubmit={mockCallBack} />);
    wrapper.find('form').simulate('submit');

    expect(mockCallBack).toHaveBeenCalled();
  });
});
