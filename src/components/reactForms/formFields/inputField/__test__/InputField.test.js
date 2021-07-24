import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import InputField from '../InputField';

describe('<InputField/>', () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = mount(<Form onSubmit={() => {}} render={() => <InputField name="customInput" />} />);
    waitForComponentToPaint(wrapper);
  });

  test('should render input with props name', () => {
    expect(wrapper.find('Input').props().name).toBe('customInput');
  });
});
