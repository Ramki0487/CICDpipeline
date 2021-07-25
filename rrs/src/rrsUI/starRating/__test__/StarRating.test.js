import { shallow } from 'enzyme';
import StarRating from '../StarRating';

const props = {
  rating: 4.5,
  reviewCount: 43,
  reviewMessage: 'review',
};

describe('<StarRating />', () => {
  it('should render the rating component with review messaage', () => {
    const wrapper = shallow(<StarRating {...props} />);
    expect(wrapper.find('.ratingReviewsBig').length).toBe(1);
  });

  it('should render the rating component without review messaage', () => {
    const wrapper = shallow(<StarRating rating={4.5} reviewCount={43} />);
    expect(wrapper.find('.ratingReviewsSmall').length).toBe(1);
  });

  it('width of the start image should be as expected', () => {
    const rating = 4.6;
    const wrapper = shallow(<StarRating rating={rating} reviewCount={43} />);
    expect(wrapper.find('.ratingStarImg').get(0).props.style).toHaveProperty(
      'width',
      `${(rating / 5) * 100}%`
    );
  });
});
