import { shallow } from 'enzyme';
import CardPicker from '../CardPicker';

const children = (
  <div>
    <h5>Bob Ross</h5>
    <span>12345 main street Apt. 05 San Diego, CA 99104</span>
  </div>
);

describe('<CardPicker />', () => {
  const mockCallBack = jest.fn();

  test('should trigger the callback function on card selected', () => {
    const wrapper = shallow(<CardPicker handleOnSelect={mockCallBack}>{children}</CardPicker>);
    wrapper.find('.cardPicker').simulate('click');

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  // test('should mark the card as selected when isSelected is true', () => {
  //   const wrapper = shallow(<CardPicker isSelected={true}>{children}</CardPicker>);

  //   expect(wrapper.find('.cardPicker').hasClass('selected')).toEqual(true);
  // });
});
