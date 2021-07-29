import StarRating from './StarRating';

export const Primary = (args) => <StarRating {...args} />;

Primary.args = {
  className: '',
  rating: 4.5,
  reviewCount: 43,
  reviewMessage: 'review',
};

export default {
  title: 'StarRating',
  component: StarRating,
};
