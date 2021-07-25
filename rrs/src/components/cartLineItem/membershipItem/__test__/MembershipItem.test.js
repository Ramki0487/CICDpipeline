import MembershipItem from '@Components/cartLineItem/membershipItem/MembershipItem';
import { shallow } from 'enzyme';

describe('<MembershipItem/>', () => {
  test('should render Content loader when isLoading props is true', () => {
    const wrapper = shallow(<MembershipItem isLoading={true} />);

    expect(wrapper.find('PlaceHolder').length).toBe(1);
  });

  test('Should not render Placeholder', () => {
    const wrapper = shallow(<MembershipItem isMobile={true} isLoading={false} />);

    expect(wrapper.find('PlaceHolder').length).toBe(0);
  });

  test('should trigger callback when item remove button is clicked', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<MembershipItem handleRemove={mockFunc} />);
    wrapper.find('.membershipItemInfoAction').simulate('click');

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
