import { shallow } from 'enzyme';
import LineItem from '../LineItem';

describe('<LineItem/>', () => {
  test('should render lineItem component with props value', () => {
    const wrapper = shallow(<LineItem variant="p" title="Order" label="tax" amount="23.00" />);

    expect(wrapper.find('.lineItemp').last().children().text()).toBe('$23.00');
  });

  test('should interchange `$` and `-` if amount props receives negative value', () => {
    const wrapper = shallow(<LineItem variant="p" title="Order" label="tax" amount="-23.00" />);

    expect(wrapper.find('.lineItemp').last().children().text()).toBe('-$23.00');
  });
});
