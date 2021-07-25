import Quantity from './Quantity';

export default {
  title: 'Quantity Component',
  component: Quantity,
};

export const Product = (args) => <Quantity {...args} />;

Product.args = {
  initialQty: 1,
  className: '',
};
