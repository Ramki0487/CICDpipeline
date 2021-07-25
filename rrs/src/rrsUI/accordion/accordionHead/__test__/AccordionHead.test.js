import { waitForComponentToPaint } from '@Utils/Testing';
import { mount, shallow } from 'enzyme';
import AccordionContext from '../../AccordionContext';
import AccordionHead from '../AccordionHead';

describe('<AccordionHead />', () => {
  it('should render component with default prop values', () => {
    const accrdHeadWrapper = shallow(<AccordionHead>Head</AccordionHead>);

    expect(accrdHeadWrapper.find('Icon').props().iconName).toBe('caret_down');
    expect(accrdHeadWrapper.find('Col').children().text()).toBe('Head');
  });

  it('should render component with custom className prop value', () => {
    const accrdHeadWrapper = shallow(
      <AccordionHead className="accordionHead-container">Head</AccordionHead>
    );

    expect(accrdHeadWrapper.find('.accordionHead-container').length).toBe(1);
  });

  it('should trigger mockCallBack function  when accordion was clicked', async () => {
    const mockCallBack = jest.fn();
    let accrdHeadWrapper = mount(
      <AccordionContext.Provider value={{ handleClick: mockCallBack }}>
        <AccordionHead>Head</AccordionHead>
      </AccordionContext.Provider>
    );

    accrdHeadWrapper.find('Row').simulate('click');
    waitForComponentToPaint(accrdHeadWrapper);

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should render icon caret_up when collapse value was true', async () => {
    let accrdHeadWrapper = mount(
      <AccordionContext.Provider value={{ collapse: true }}>
        <AccordionHead>Head</AccordionHead>
      </AccordionContext.Provider>
    );
    waitForComponentToPaint(accrdHeadWrapper);

    expect(accrdHeadWrapper.find('Icon').props().iconName).toBe('caret_up');
  });
});
