import { shallow } from 'enzyme';
import Price from '../Price';

const priceInput = {
  original: '$12.99',
  sale: '$11.99',
  vip: '$10.99',
  saleMessage: 'VIP! all your benefits apply.',
  vipMessage: 'VIP Price',
};
const priceInput2 = {
  original: '$12.99',
  sale: '$11.99',
};
const priceInput3 = {
  original: '$12.99',
};
const priceInput4 = {
  original: '$12.99',
  saleMessage: 'VIP! all your benefits apply.',
  isUmap: true,
};

describe('<Price/>', () => {
  test('should render Price component', () => {
    const wrapper = shallow(<Price priceInput={priceInput} />);
    expect(wrapper).toBeDefined();
  });
  test('should render only original price', () => {
    const wrapper = shallow(<Price priceInput={priceInput3} />);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('.price-original').text()).toEqual('$12.99');
  });
  test('should render price with originalPrice and salePrice props', () => {
    const wrapper = shallow(<Price priceInput={priceInput2} />);
    expect(wrapper.find('span').length).toBe(2);
    expect(wrapper.find('.price-original').text()).toEqual('$11.99');
    expect(wrapper.find('.priceOffer').text()).toEqual('Was $12.99');
  });
  test('should render price all three originalPrice, salePrice and vipPrice props', () => {
    const wrapper = shallow(<Price priceInput={priceInput} />);
    expect(wrapper.find('span').length).toBe(4);
    expect(wrapper.find('.price-vip').text()).toEqual('$10.99');
    expect(wrapper.find('.priceOffer').text()).toEqual('Was $12.99');
    expect(wrapper.find('.price-original').text()).toEqual('$11.99');
  });
  test('should render VIP all benefits apply message', () => {
    const wrapper = shallow(<Price priceInput={priceInput4} />);
    expect(wrapper.find('.messageVipBenefits').text()).toEqual('VIP! all your benefits apply.');
  });
});
