import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import TextAreaField from '../TextAreaField';

describe('<TextAreaField/>', () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = mount(
      <Form onSubmit={() => {}} render={() => <TextAreaField name="customInput" />} />
    );
    waitForComponentToPaint(wrapper);
  });

  test('should render textarea with props name', () => {
    expect(wrapper.find('TextArea').props().name).toBe('customInput');
  });
});
