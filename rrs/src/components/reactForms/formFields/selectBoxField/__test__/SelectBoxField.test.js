import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import { Form } from 'react-final-form';
import SelectField from '../SelectBoxField';

describe('<SelectField/>', () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = mount(
      <Form
        onSubmit={() => {}}
        render={() => (
          <SelectField className="selector" name="State" defaultLabel="State" label="" />
        )}
      />
    );
    waitForComponentToPaint(wrapper);
  });

  test('should render selectbox with props name', () => {
    expect(wrapper.find('Selectbox').props().name).toBe('State');
  });
});
