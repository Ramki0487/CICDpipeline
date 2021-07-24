import { shallow } from 'enzyme';
import DropDownItem from '../DropDownItem';

describe('<DropDownItem />', () => {
  it('should render DropDownItem component with default props and children ', () => {
    const DropDownItemWrapper = shallow(<DropDownItem>High to Low</DropDownItem>);

    expect(DropDownItemWrapper.find('dropdownItemActive').length).toBe(0);
    expect(DropDownItemWrapper.find('.dropdownItem').children().text()).toBe('High to Low');
  });

  it('should render DropDownItem component with className props', () => {
    const DropDownItemWrapper = shallow(
      <DropDownItem className="dropdownItemWrapper">High to Low</DropDownItem>
    );

    expect(DropDownItemWrapper.find('.dropdownItemWrapper').length).toBe(1);
  });

  it('should trigger the callback function on DropDownItem select', () => {
    const mockCallBack = jest.fn();
    const DropDownItemWrapper = shallow(
      <DropDownItem handleOnSelect={mockCallBack}>High to Low</DropDownItem>
    );
    DropDownItemWrapper.find('.dropdownItem').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should render DropDownItem component with isActive props', () => {
    const DropDownItemWrapper = shallow(<DropDownItem isActive={true}>High to Low</DropDownItem>);

    expect(DropDownItemWrapper.find('.dropdownItemActive').length > 0).toBeTruthy();
  });
});
