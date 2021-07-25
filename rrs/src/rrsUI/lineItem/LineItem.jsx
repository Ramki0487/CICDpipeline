import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { number, oneOfType, string } from 'prop-types';
import styles from './LineItem.module.scss';

/**
 * LineItem Component
 * @param {string} className - Classname to override button styles
 * @param {string} label - label of the item
 * @param {string} amount - amount of the item
 * @param {string} variant - Types of Typography - ("p", "h1", "h2", "h3", "h4", "h5")
 * @param {string} currency - currancy format
 * @returns {*}
 * @constructor
 */

const LineItem = ({ label, amount, variant, currency, className }) => {
  const classes = [styles.lineItem, className].join(' ').trim();

  const constructLineItemAmount = () => {
    if (amount?.toLowerCase() === 'free') return 'FREE';

    return `${currency}${amount}`.replace('$-', '-$');
  };

  return (
    <Row className={classes} justifyContent="space-between">
      <Typography variant={variant} className={`${styles.lineItem}${variant}`}>
        {label}
      </Typography>
      <Typography variant={variant} className={`${styles.lineItem}${variant}`}>
        {constructLineItemAmount()}
      </Typography>
    </Row>
  );
};

LineItem.propTypes = {
  label: string.isRequired,
  amount: oneOfType([number, string]).isRequired,
  variant: string.isRequired,
  className: string,
  currency: string,
};

LineItem.defaultProps = {
  className: '',
  currency: '$',
};

export default LineItem;
