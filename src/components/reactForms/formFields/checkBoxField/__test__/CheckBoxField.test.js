import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import CheckBoxField from '../CheckBoxField';

describe('<CheckBoxField/>', () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = mount(
      <Form onSubmit={() => {}} render={() => <CheckBoxField name="customCheckbox" />} />
    );
    waitForComponentToPaint(wrapper);
  });

  test('should render checkbox with props name', () => {
    expect(wrapper.find('Checkbox').props().name).toBe('customCheckbox');
  });
});
