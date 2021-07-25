import Price from './Price';

export default {
  title: 'Price Component',
  component: Price,
};

export const Product = (args) => <Price {...args} />;

Product.args = {
  className: '',
  priceInput: {
    originalPrice: '12.99',
    salePrice: '11.99',
    vipPrice: '',
    promoMessage: 'Your VIP Price',
  },
};
