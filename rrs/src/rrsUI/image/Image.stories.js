import Facebook from '@Assets/svg/icons/facebook.svg';
import Instagram from '@Assets/svg/icons/instagram.svg';
import Image from './Image';

const srcSet = [
  { src: Instagram, sizes: '650' },
  { src: Instagram, sizes: '465' },
  {
    src: Instagram,
    sizes: '768',
  },
  {
    src: Instagram,
    sizes: '834',
  },
];

export default {
  title: 'Image Component',
  component: Image,
};

export const Primary = (args) => <Image {...args} />;

Primary.args = {
  alt: 'unsplash',
  srcSet: srcSet,
  src: Facebook,
  loading: 'eager',
};
