import { shallow } from 'enzyme';
import Image from '../Image';

describe('<Image>', () => {
  describe('Image render based on different props', () => {
    it('should render an <img />', () => {
      const image = shallow(<Image src="test.jpg" alt="test" loading="eager" />);
      const img = image.find('img');
      expect(image.prop('srcSet')).toBeUndefined();
      expect(img.length).toBe(1);
      expect(img.prop('src')).toBe('test.jpg');
      expect(img.prop('alt')).toBe('test');
    });
  });
  describe('<picture> and srcSet', () => {
    let srcImage = [];
    let image = '';
    beforeEach(() => {
      srcImage = [
        { breakPoint: 480, src: './480.jpg' },
        { breakPoint: 768, src: './768.jpg' },
      ];
      image = shallow(<Image srcSet={srcImage} alt="I am" id="defaultImage" loading="eager" />);
    });
    test('should render 1 picture element', () => {
      expect(image.find('picture').length).toBe(1);
    });
    test('should render 2 source elements inside a picture element', () => {
      expect(image.find('picture source').length).toBe(2);
    });
    test('should render img element with correct src', () => {
      expect(image.find('img').props().src).toBe('./768.jpg');
    });
    test('direct image is not rendered only if srcset is passed', () => {
      expect(image.find('#defaultImage')).toEqual({});
    });
  });
  test('Image element should not render when src props is not passed', () => {
    const wrapper = shallow(<Image alt="test" />);
    expect(wrapper).toEqual({});
  });
});
