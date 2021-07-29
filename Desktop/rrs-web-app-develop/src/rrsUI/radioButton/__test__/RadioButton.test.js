import { shallow } from 'enzyme';
import RadioButton from '../RadioButton';

describe('<RadioButton/>', () => {
  test('should render radio button with selected', () => {
    const wrapper = shallow(<RadioButton isSelected={true} />);
    expect(wrapper.find('input').get(0).props.checked).toEqual(true);
  });

  test('should trigger callback when radio button is clicked', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<RadioButton handleOnChange={mockCallBack} />);
    wrapper.find('input').simulate('change');
    expect(mockCallBack).toHaveBeenCalled();
  });

  test('should render with label and value', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <RadioButton isSelected={true} handleOnChange={mockCallBack} label="Mobile" value="Mobile" />
    );
    expect(wrapper.find('label').text()).toEqual('Mobile');
    expect(wrapper.find('input').get(0).props.value).toEqual('Mobile');
  });
});
