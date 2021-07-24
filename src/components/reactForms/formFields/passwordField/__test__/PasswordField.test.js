import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import PasswordField from '../PasswordField';

describe('<PasswordField/>', () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = mount(<Form onSubmit={() => {}} render={() => <PasswordField name="Password" />} />);
    waitForComponentToPaint(wrapper);
  });

  test('should render password with props name', () => {
    expect(wrapper.find('Password').props().inputProps.name).toBe('Password');
  });
});
