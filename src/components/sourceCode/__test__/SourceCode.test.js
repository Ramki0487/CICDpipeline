import SourceCode from '@Components/sourceCode/SourceCode';
import { shallow, mount } from 'enzyme';

describe('<SourceCode />', () => {
  test('should render PlaceHolder when isLoading props is true ', () => {
    const wrapper = shallow(<SourceCode isLoading={true} />);

    expect(wrapper.find('PlaceHolder').length).toBe(1);
  });

  test('should render source code content when isLoading props is false', () => {
    const wrapper = shallow(<SourceCode isLoading={false} />);

    expect(wrapper.find('PlaceHolder').length).toBe(0);
    expect(wrapper.find('Typography')).toBeDefined();
  });

  test('should drop down an input after simulate onClick', () => {
    const wrapper = shallow(<SourceCode isLoading={false} />);

    expect(wrapper.find('InputGroup').length).toBe(0);

    wrapper.find({ variant: 'h5' }).first().simulate('click');

    expect(wrapper.find('InputGroup').length).toBe(1);
  });

  test('should able to change in input and trigger Callback func', () => {
    const mockFunc = jest.fn();
    const wrapper = mount(<SourceCode isLoading={false} handleClaim={mockFunc} />);
    wrapper.find({ variant: 'h5' }).first().simulate('click');
    wrapper.find('input').simulate('change', { target: { value: 'CZPP4567', name: '' } });

    expect(wrapper.find('input').prop('value')).toBe('CZPP4567');

    wrapper.find('button').simulate('click');

    expect(mockFunc).toBeCalled();
  });
});
