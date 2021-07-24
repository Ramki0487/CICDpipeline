import { shallow } from 'enzyme';
import OrderSummary from '../OrderSummary';
import { state } from '@Mocks/cart/Cart.json';

describe('<OrderSummary/>', () => {
  test('should render Contentloader when isLoading props is true', () => {
    const wrapper = shallow(
      <OrderSummary orderSummary={state.orderSummary} isLoading={true} pageName="checkout" />
    );

    expect(wrapper.find('PlaceHolder').length).toBe(1);
  });

  test('should not render PlaceHolder if isLoading props is false', () => {
    const wrapper = shallow(<OrderSummary pageName="checkout" orderSummary={state.orderSummary} />);

    expect(wrapper.find('PlaceHolder').length).toBe(0);
  });

  test('should render OrderSummary with title props', () => {
    const wrapper = shallow(
      <OrderSummary pageName="checkout" title="ORDER SUMMARY" orderSummary={state.orderSummary} />
    );
    expect(wrapper.find({ variant: 'h3' }).children().text()).toBe('ORDER SUMMARY');
  });

  //Array variable names in the order from left to right
  //isLoggedIn, isVip, pageName, label, amount, key
  const cases = [
    [true, true, 'cart', 'Order Subtotal', '129.99', 'itemsTotal'],
    [true, true, 'orders', 'VIP Rewards Cash', '5.15', 'vipRewardCash'],
    [true, true, 'cart', 'VIP Savings', '-91.50', 'membershipSavings'],
    [true, true, 'cart', 'Promotion Applied', '-91.46', 'promotionSavings'],
    [true, false, 'cart', 'Est. Total', '758.78', 'estimatedTotals'],
    [false, false, 'cart', 'Shipping', '0.0', 'shipping'],
    [false, false, 'checkout', 'Tax', '-91.46', 'tax'],
  ];

  test.each(cases)(
    'Given isLoggedIn: %p, IsVip: %p and pagename: %p as arguments, Should render label and amount as %p and %p',
    async (isLoggedIn, isVip, pageName, label, amount, key) => {
      const wrapper = shallow(
        <OrderSummary
          pageName={pageName}
          isLoggedIn={isLoggedIn}
          isVip={isVip}
          orderSummary={{ [key]: state.orderSummary[key] }}
        />
      );

      expect(await wrapper.find('LineItem').prop('label')).toEqual(label);
      expect(await wrapper.find('LineItem').prop('amount')).toEqual(amount);
    }
  );
});
