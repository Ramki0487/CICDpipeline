import CartLineItem from '@Components/cartLineItem/CartLineItem';
import { state } from '@Mocks/cart/Cart.json';
import { waitForComponentToPaint } from '@Utils/Testing';
import { mount, shallow } from 'enzyme';

describe('<CartLineItem/>', () => {
  test('should render Content loader when isLoading props is true', () => {
    const wrapper = shallow(<CartLineItem isLoading={true} cartItem={state.cartItems?.[0]} />);

    expect(wrapper.find('PlaceHolder').length).toBe(1);
  });

  test('Should not render placholder when isLoading is false', () => {
    const wrapper = shallow(<CartLineItem isMobile={true} cartItem={state.cartItems?.[0]} />);

    expect(wrapper.find('PlaceHolder').length).toBe(0);
  });

  test('should trigger callback when item remove button is clicked', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <CartLineItem handleRemove={mockFunc} cartItem={state.cartItems?.[0]} />
    );
    wrapper.find('.cartItemInfoAction').simulate('click');

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('should trigger callback when item quantity is changed', () => {
    const mockFunc = jest.fn();
    const wrapper = mount(
      <CartLineItem handleQuantity={mockFunc} cartItem={state.cartItems?.[0]} />
    );
    waitForComponentToPaint(wrapper);

    wrapper.find('button.quantityIncreaseBtn').simulate('click');

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('should trigger callback when membership adding to cart  ', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <CartLineItem addMembershipToCart={mockFunc} cartItem={state.cartItems?.[0]} />
    );
    wrapper.find('.cartItemInfoAddVip').simulate('click');

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('should not render quantity increase and decrease buttons if readonly mode true', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <CartLineItem
        addMembershipToCart={mockFunc}
        cartItem={state.cartItems?.[0]}
        readOnly={true}
      />
    );

    expect(wrapper.find('Quantity')).toHaveLength(0);
  });
});
