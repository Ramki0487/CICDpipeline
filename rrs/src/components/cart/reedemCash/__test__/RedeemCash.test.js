/* istanbul ignore file */
import RedeemCash from '@Components/cart/reedemCash/RedeemCash';
import { shallow } from 'enzyme';

describe('<RedeemCash />', () => {
  test('should render Placeholder when isLoading set to true', () => {
    const wrapper = shallow(<RedeemCash isLoading={true} />);

    expect(wrapper.find('PlaceHolder').length).toBe(1);
  });

  test('should render redeem options when isLoading set to false', () => {
    const wrapper = shallow(<RedeemCash isLoading={false} />);

    expect(wrapper.find('.redeemReward').length).toBe(1);
    expect(wrapper.find('PlaceHolder').length).toBe(0);
  });

  test('should validate callback func in redeemCash', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<RedeemCash isLoading={false} handleRedeem={mockCallBack} />);
    wrapper.find('.redeemButton').simulate('click');

    expect(mockCallBack).toBeCalled();
  });
});
