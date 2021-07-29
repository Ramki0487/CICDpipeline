import VipSavingsBanner from '@Components/vipSavingsBanner/VipSavingsBanner';
import { state } from '@Mocks/cart/Cart.json';
import { shallow } from 'enzyme';

describe('<VIPSavings />', () => {
  it('should render Placeholder when isLoading receive true', () => {
    const wrapper = shallow(<VipSavingsBanner isLoading={true} />);

    expect(wrapper.find('PlaceHolder').length).toBe(1);
  });

  it('should render the VIPSavings component when isLoading receive false', () => {
    const wrapper = shallow(
      <VipSavingsBanner vipPrice={state.membershipSummary} isLoading={false} />
    );

    expect(wrapper.find('Button').prop('children')).toEqual('Join for $1.99');
    expect(wrapper.find('PlaceHolder').length).toBe(0);
  });

  it('should render vipSavings Component with plus member content', () => {
    const wrapper = shallow(
      <VipSavingsBanner vipPrice={state.membershipSummary} showVipPlus={true} isLoading={false} />
    );

    expect(wrapper.find('Button').prop('children')).toEqual('Upgrade for $1.99');
  });

  it('should validate callback function in vipSavings Component', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <VipSavingsBanner
        vipPrice={state.membershipSummary}
        showVipPlus={true}
        onClick={mockCallBack}
        isLoading={false}
      />
    );
    wrapper.find('.vipSavingLink').simulate('click');

    expect(mockCallBack).toBeCalled();
  });
});
