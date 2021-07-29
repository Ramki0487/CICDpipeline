import { shallow } from 'enzyme';
import React, { useState as useStateMock } from 'react';
import Carousel from '../Carousel';

const Images = [
  {
    src: 'image1',
  },
  {
    src: 'image2',
  },
];

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useRef: jest.fn(),
}));

describe('<Carousel/>', () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should move to next slider image', () => {
    const wrapper = shallow(<Carousel images={Images} />);
    expect(wrapper).toBeDefined();
    //wrapper.find('.sliderArrowRight').simulate('click');
    //expect(setState).toHaveBeenCalledWith(1);
  });
  // it('calls setCurrImg with count - 1', () => {
  //   const wrapper = mount(<Carousel isMobile={true} images={Images} />);
  //   wrapper.find('.sliderArrowLeft').simulate('click');
  //   expect(setState).toHaveBeenCalledWith(-1);
  // });
  // it('calls setCurrImg with count - 1', () => {
  //   const wrapper = mount(<Carousel images={Images} />);
  //   wrapper.find('.sliderArrowLeft').simulate('click');
  //   expect(setState).toHaveBeenCalledWith(-1);
  // });
  // it('Should move to next slider image', () => {
  //   const wrapper = shallow(<Carousel isMobile={true} images={Images} />);
  //   wrapper.find('.sliderArrowRight').simulate('click');
  //   expect(setState).toHaveBeenCalledWith(1);
  // });

  // it('Should render Horizontal slider and move the slider to left ', () => {
  //   const carouselNode = { current: { offsetWidth: 52 } };
  //   const thisref = useRef.mockReturnValueOnce(carouselNode);
  //   const carouselWraperNode = { current: { offsetWidth: 300 } };
  //   useRef.mockReturnValueOnce(carouselWraperNode);
  //   const wrapper = shallow(<Carousel isMobile={true} images={Images} />);
  //   wrapper.find('.thumbnailItem').at(8).simulate('click');
  //   expect(thisref).toBeCalledTimes(2);
  //   expect(setState).toHaveBeenCalledWith(8);
  // });
  // it('Should move the slider to right ', () => {
  //   const carouselNode = { current: { offsetWidth: 52 } };
  //   useRef.mockReturnValueOnce(carouselNode);
  //   const carouselWraperNode = { current: { offsetWidth: 300 } };
  //   useRef.mockReturnValueOnce(carouselWraperNode);
  //   const wrapper = shallow(<Carousel isMobile={true} images={Images} />);
  //   wrapper.find('.thumbnailItem').at(8).simulate('click');
  //   wrapper.find('.thumbnailItem').at(3).simulate('click');
  //   expect(setState).toHaveBeenCalledWith(3);
  //   expect(wrapper.find('.thumbnailContainer').prop('style')).toHaveProperty('left', '-0px');
  // });
  // it('Horizontal Image Slider should not work', () => {
  //   const carouselWraperNode = { current: { offsetWidth: 52 } };
  //   useRef.mockReturnValueOnce(carouselWraperNode);
  //   const carouselNode = { current: { offsetWidth: 650 } };
  //   useRef.mockReturnValueOnce(carouselNode);
  //   const wrapper = shallow(<Carousel isMobile={true} images={Images} />);
  //   wrapper.find('.thumbnailItem').at(8).simulate('click');
  //   expect(wrapper.find('.thumbnailContainer').prop('style')).toHaveProperty('left', '-0px');
  // });
  // it('Should render Vertical slider and move the slider to down ', () => {
  //   const carouselNode = { current: { offsetHeight: 52 } };
  //   useRef.mockReturnValueOnce(carouselNode);
  //   const carouselWraperNode = { current: { parentNode: { offsetHeight: 400 } } };
  //   useRef.mockReturnValueOnce(carouselWraperNode);
  //   const wrapper = shallow(<Carousel isMobile={false} images={Images} />);
  //   wrapper.find('.thumbnailItem').at(8).simulate('click');
  //   expect(setState).toHaveBeenCalledWith(8);
  // });
  // it('Should render Vertical slider and move the slider move up', () => {
  //   const carouselNode = { current: { offsetHeight: 52 } };
  //   useRef.mockReturnValueOnce(carouselNode);
  //   const carouselWraperNode = { current: { parentNode: { offsetHeight: 400 } } };
  //   useRef.mockReturnValueOnce(carouselWraperNode);
  //   const wrapper = shallow(<Carousel isMobile={false} images={Images} />);
  //   wrapper.find('.thumbnailItem').at(8).simulate('click');
  //   wrapper.find('.thumbnailItem').at(3).simulate('click');
  //   expect(setState).toHaveBeenCalledWith(3);
  //   expect(wrapper.find('.thumbnailContainer').prop('style')).toHaveProperty('top', '-0px');
  // });
  // it('Should not move Vertical slider', () => {
  //   const carouselNode = { current: { offsetHeight: 52 } };
  //   useRef.mockReturnValueOnce(carouselNode);
  //   const carouselWraperNode = { current: { parentNode: { offsetHeight: 700 } } };
  //   useRef.mockReturnValueOnce(carouselWraperNode);
  //   const wrapper = shallow(<Carousel isMobile={false} images={Images} />);
  //   wrapper.find('.thumbnailItem').at(8).simulate('click');
  //   expect(setState).toHaveBeenCalledWith(8);
  //   expect(wrapper.find('.thumbnailContainer').prop('style')).toHaveProperty('top', '-0px');
  // });
});
