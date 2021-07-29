import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card/>', () => {
  test('should render Card', () => {
    const wrapper = shallow(<Card image={<img src="test.png" />} theme="white" />);
    expect(wrapper).toBeDefined();
  });
  test('should check all the props value', () => {
    const wrapper = shallow(<Card image={<img src="test.png" alt="test" />} theme="white" />);
    expect(wrapper.find('img').prop('alt')).toEqual('test');
  });
  test('should return {} when props is not passed', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toEqual({});
  });
});
