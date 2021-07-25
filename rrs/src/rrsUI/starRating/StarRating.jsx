import { number, string } from 'prop-types';
import { Col, Row } from '../layout';
import styles from './StarRating.module.scss';

/**
 * StarRating Component
 * @param {string} className - Classname to overrode styles
 * @param {number} rating - Star ratings
 * @param {number} reviewCount - Number of people have been reviewd this product
 * @param {string} reviewMessage - Message to be given for reviewCount
 */

const StarRating = ({ className, rating, reviewCount, reviewMessage }) => {
  const classes = [styles.rating, className].join(' ').trim();

  return (
    <Row className={classes} columnGap={5}>
      <div className={styles.ratingStar}>
        <div className={styles.ratingStarImg} style={{ width: `${(rating / 5) * 100}%` }}></div>
      </div>
      {reviewMessage ? (
        <Col>
          <Row className={styles.ratingReviewsBig} columnGap={5} alignItems="center">
            <span>{rating}</span>
            <span className={styles.ratingReviewsBigGap}></span>
            <span className={styles.ratingReviewsBigMsg}>{`${reviewCount} ${reviewMessage}`}</span>
          </Row>
        </Col>
      ) : (
        <span className={styles.ratingReviewsSmall}>{reviewCount > 0 ? reviewCount : ''}</span>
      )}
    </Row>
  );
};

StarRating.propTypes = {
  rating: number.isRequired,
  reviewCount: number.isRequired,
  reviewMessage: string,
  className: string,
};

StarRating.defaultProps = {
  className: '',
  reviewMessage: '',
};

export default StarRating;
