import { shallow } from 'enzyme';
import ImageZoom from '../ImageZoom';
const image = 'test_image.png';

describe('<ImageZoom />', () => {
  it('Should move to next slider image', () => {
    const wrapper = shallow(<ImageZoom src={image} zoomSrc={image} zoomPreload={true} />);

    expect(wrapper.find('InnerImageZoom').props().src).toEqual(image);
  });
});
