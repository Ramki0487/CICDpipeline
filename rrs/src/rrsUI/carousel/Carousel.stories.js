// import { default as Image1 } from '@Assets/images/1.jpeg';
// import { default as Images2 } from '@Assets/images/2.jpeg';
// import { default as Images3 } from '@Assets/images/3.jpeg';
import Carousel from './Carousel';

// product images
// export const Images = [
//   {
//     src: Image1,
//   },
//   {
//     src: Images2,
//   },
//   {
//     src: Images3,
//   },
// ];

export default {
  title: 'Carousel',
  component: Carousel,
};

export const template = (args) => <Carousel {...args} />;

template.args = {
  className: '',
  images: [],
  isMobile: true,
};
