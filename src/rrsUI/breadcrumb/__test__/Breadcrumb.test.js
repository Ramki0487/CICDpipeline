import { shallow } from 'enzyme';
import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb />', () => {
  const customProps = {
    className: 'brandTag',
    theme: 'white',
    current: 'Brands',
  };

  it('Should render breadcrumb with default props', () => {
    const wrapper = shallow(<Breadcrumb LinkTag={() => {}} />);

    expect(wrapper.find('.breadcrumb-theme-dark').length).toBe(1);
  });

  it('Should render breadcrumb with custom props', () => {
    const wrapper = shallow(<Breadcrumb LinkTag={() => {}} {...customProps} />);

    expect(wrapper.find('.brandTag').length).toBe(1);
    expect(wrapper.find('.breadcrumb-theme-white').length).toBe(1);
    expect(wrapper.find('span').last().children().text()).toEqual('Brands');
  });
});
