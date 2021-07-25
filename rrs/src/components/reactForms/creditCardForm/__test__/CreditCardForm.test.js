import { mount } from 'enzyme';
import CreditCardForm from '../CreditCardForm';

describe('<CreditCardForm/>', () => {
  const mockCallBack = jest.fn();

  test('should trigger callback on form submit', () => {
    const wrapper = mount(<CreditCardForm handleOnSubmit={mockCallBack} />);
    wrapper.find('form').simulate('submit');

    expect(mockCallBack).toHaveBeenCalled();
  });
});
