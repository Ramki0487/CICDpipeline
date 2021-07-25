import { mount, shallow } from 'enzyme';
import ShippingMethods from '@Components/checkout/shippingMethods/ShippingMethods';
import { state } from '@Mocks/checkout/CheckoutMock.json';
import { expect } from '@jest/globals';

describe('<ShippingMethods/>', () => {
  test('should render the shipping method items', () => {
    const wrapper = shallow(<ShippingMethods shippingMethods={state?.shippingmethods} />);

    expect(wrapper.find('.shippingMethodItem')).toHaveLength(3);
  });
  test('should render the shipping method items with values', () => {
    const wrapper = mount(<ShippingMethods shippingMethods={state?.shippingmethods} />);

    expect(wrapper.find('.shippingMethodItemName').first().children().text()).toBe(
      'VIP Standard Shipping'
    );
    expect(wrapper.find('.shippingMethodItemCost').first().children().text()).toBe('$FREE');
    expect(wrapper.find('.shippingMethodItemDesc').first().children().text()).toBe(
      'Est. arrival Wednesday, Junly 21 Monday, July 26'
    );
  });

  test('should trigger callback when shipping method item is clicked', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <ShippingMethods shippingMethods={state?.shippingmethods} handleOnChange={mockCallBack} />
    );
    wrapper.find('.shippingMethodItem').first().simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });
});
