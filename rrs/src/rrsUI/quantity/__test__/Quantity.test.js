import { mount } from 'enzyme';
import Quantity from '../Quantity';

const initialQty = 1;
// const initialQty10 = 999;
const handleOnQtyChange = jest.fn();

describe('<Quantity />', () => {
  test('should be defined', () => {
    const wrapper = mount(
      <Quantity initialQty={initialQty} handleOnQtyChange={handleOnQtyChange} />
    );
    expect(wrapper).toBeDefined();
  });
  // test('should increment the qty value by 1', () => {
  //   const wrapper = mount(
  //     <Quantity initialQty={initialQty} handleOnQtyChange={handleOnQtyChange} />
  //   );
  //   wrapper.find('button.quantityIncreaseBtn').simulate('click');
  //   expect(wrapper.find('.qty').text()).toContain(initialQty + 1);
  // });
  // test('should decrement the qty value by 1', () => {
  //   const wrapper = mount(
  //     <Quantity initialQty={initialQty10} handleOnQtyChange={handleOnQtyChange} />
  //   );
  //   wrapper.find('button.quantityDecreaseBtn').simulate('click');
  //   expect(wrapper.find('.qty').text()).toContain(initialQty10 - 1);
  // });
  // test('should add disabled if qty reached MinQty', () => {
  //   const wrapper = mount(
  //     <Quantity initialQty={initialQty} handleOnQtyChange={handleOnQtyChange} />
  //   );
  //   wrapper.find('button.quantityDecreaseBtn').simulate('click');
  //   expect(wrapper.find('.qty').text()).toContain(1);
  //   const button = wrapper.find('button.quantityDecreaseBtn').first();
  //   expect(button.props().disabled).toBe(true);
  // });
  // test('should add disabled if Qty reached MaxQty', () => {
  //   const wrapper = mount(
  //     <Quantity initialQty={initialQty10} handleOnQtyChange={handleOnQtyChange} />
  //   );
  //   wrapper.find('button.quantityIncreaseBtn').simulate('click');
  //   expect(wrapper.find('.qty').text()).toContain(999);
  //   const button = wrapper.find('button.quantityIncreaseBtn').first();
  //   expect(button.props().disabled).toBe(true);
  // });
});
