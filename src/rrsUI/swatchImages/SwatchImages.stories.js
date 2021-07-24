import Img from '@Assets/svg/icons/twitter.svg';
import SwatchImages from './SwatchImages';

export const Primary = (args) => <SwatchImages {...args} />;

Primary.args = {
  ImgProps: {
    src: Img,
  },
  shape: 'circle',
  selected: true,
};

export default {
  title: 'SwatchImages',
  component: SwatchImages,
};
