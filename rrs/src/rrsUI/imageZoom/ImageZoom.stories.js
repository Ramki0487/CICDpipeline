import ImageZoom from './ImageZoom';
const image = 'test_image.png';

export default {
  title: 'ImageZoom',
  component: ImageZoom,
};

export const ZoomImage = (args) => <ImageZoom {...args} />;

ZoomImage.args = {
  className: '',
  src: image,
  zoomSrc: image,
  zoomPreload: true,
};
