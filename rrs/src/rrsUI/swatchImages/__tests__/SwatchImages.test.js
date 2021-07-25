import { shallow } from 'enzyme';
import SwatchImages from '../SwatchImages';

const ImgProps = {
  src: 'Img',
};

const ImgProps2 = {
  src: '',
};

describe('<SwatchImages />', () => {
  it('should acknowledge the custom className', () => {
    const wrapper = shallow(<SwatchImages className="bob" ImgProps={ImgProps} />);
    expect(wrapper.find('.bob').length).toBe(1);
  });

  // it('should render swatchImages in circel shape', () => {
  //   const wrapper = shallow(<SwatchImages shape="circle" ImgProps={ImgProps} />);
  //   expect(wrapper.find('Image').hasClass('circle')).toEqual(true);
  // });
  // it('should render swatchImages in square shape', () => {
  //   const wrapper = shallow(<SwatchImages shape="square" ImgProps={ImgProps} />);
  //   expect(wrapper.find('Image').hasClass('square')).toEqual(true);
  // });
  // it('should mark the swatchImages as selected when prop selected=true', () => {
  //   const wrapper = shallow(<SwatchImages selected ImgProps={ImgProps} />);
  //   expect(wrapper.find('.selected').length).toBe(1);
  // });
  it('should trigger callback when swatch image is clicked', () => {
    const mockMouseOver = jest.fn();
    const mockMouseClick = jest.fn();
    const wrapper = shallow(
      <SwatchImages
        handleOnClick={mockMouseClick}
        handleOnMouseOver={mockMouseOver}
        ImgProps={ImgProps}
        value="testMouseClick"
      />
    );
    wrapper.find('span').simulate('click');

    expect(mockMouseClick).toHaveBeenCalledTimes(1);
    expect(mockMouseClick).toHaveBeenCalledWith('testMouseClick');
    expect(mockMouseOver).toHaveBeenCalledTimes(0);
  });

  it('should trigger callback when mouseover on swatch image', () => {
    const mockMouseOver = jest.fn();
    const mockMouseClick = jest.fn();
    const wrapper = shallow(
      <SwatchImages
        handleOnClick={mockMouseClick}
        handleOnMouseOver={mockMouseOver}
        ImgProps={ImgProps}
        value="testMouseOver"
      />
    );
    wrapper.find('span').simulate('mouseover');

    expect(mockMouseOver).toHaveBeenCalledTimes(1);
    expect(mockMouseOver).toHaveBeenCalledWith('testMouseOver');
    expect(mockMouseClick).toHaveBeenCalledTimes(0);
  });

  it('should return null when there is no image passed', () => {
    const wrapper = shallow(<SwatchImages selected ImgProps={ImgProps2} />);

    expect(wrapper).toEqual({});
  });
});
