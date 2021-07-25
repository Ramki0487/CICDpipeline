import { mount, shallow } from 'enzyme';
import AccordionBody from '../AccordionBody';
import AccordionContext from '../../AccordionContext';

describe('<AccordionBody />', () => {
  it('should render component with children prop', () => {
    const accrdBodyWrapper = shallow(<AccordionBody>Body</AccordionBody>);

    expect(accrdBodyWrapper.children().text()).toBe('Body');
  });

  it('should render component with className prop', () => {
    const accrdBodyWrapper = shallow(<AccordionBody className="accordionBody">Body</AccordionBody>);

    expect(accrdBodyWrapper.find('.accordionBody').length).toBe(1);
  });

  it('show display component with collapse was true', () => {
    const accrdBodyWrapper = mount(
      <AccordionContext.Provider value={{ collapse: true }}>
        <AccordionBody>Body</AccordionBody>
      </AccordionContext.Provider>
    );

    expect(accrdBodyWrapper.find('.bodyShow').length).toBeGreaterThan(1);
  });
});
