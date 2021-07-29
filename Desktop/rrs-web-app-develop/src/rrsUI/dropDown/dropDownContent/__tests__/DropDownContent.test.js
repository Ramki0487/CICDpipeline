import { shallow, mount } from 'enzyme';
import DropDownContent from '../DropDownContent';
import DropDownContext from '../../DropDownContext';

describe('<DropDownContent />', () => {
  it('should render DropDownContent component with children', () => {
    const DropDownContentWrapper = shallow(<DropDownContent>Low to High</DropDownContent>);

    expect(DropDownContentWrapper.find('.dropdownContent').children().text()).toBe('Low to High');
  });

  it('should render DropDownContent component with className props', () => {
    const DropDownContentWrapper = shallow(
      <DropDownContent className="dropdownContentWrapper">Low to High</DropDownContent>
    );

    expect(DropDownContentWrapper.find('.dropdownContentWrapper').length).toBe(1);
  });

  it('should display DropDown content when collapse value was true', () => {
    const DropDownContentWrapper = mount(
      <DropDownContext.Provider value={{ collapse: true }}>
        <DropDownContent>Low to High</DropDownContent>
      </DropDownContext.Provider>
    );

    expect(DropDownContentWrapper.find('.dropdownContentShow').length).toBe(1);
  });
});
