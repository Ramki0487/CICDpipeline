import LineItem from './LineItem';

export default {
  title: 'LineItem Component',
  component: LineItem,
};

export const Product = (args) => <LineItem {...args} />;

Product.args = {
  title: 'Order Total',
  price: 129.05,
  variant: 'p',
};
