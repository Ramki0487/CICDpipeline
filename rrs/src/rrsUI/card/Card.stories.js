import Feature from '@Assets/images/feature.png';
import Card from './Card';

export default {
  title: 'Card Component',
  component: Card,
  argTypes: {
    theme: {
      control: {
        type: 'inline-radio',
        options: ['white', 'natural', 'skyBlue'],
      },
    },
  },
};

export const Product = (args) => <Card {...args} />;

Product.args = {
  image: <img src={Feature} />,
  theme: 'natural',
  title: 'Product',
};
