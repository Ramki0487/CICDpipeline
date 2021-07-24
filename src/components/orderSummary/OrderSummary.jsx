import AppConfig from '@App/appConfig/AppConfig';
import { Row } from '@RRS-UI/layout';
import LineItem from '@RRS-UI/lineItem/LineItem';
import Typography from '@RRS-UI/typography/Typography';
import { bool, node, object, oneOfType, string } from 'prop-types';
import styles from './OrderSummary.module.scss';
import PlaceHolder from './PlaceHolder';

/**
 * OrderSummary Component
 * @param {string} pageName - Page name to render customized contents
 * @param {boolean} isLoggedIn - User login details
 * @param {boolean} isVip - Users VIP details
 * @param {boolean} isLoading - To check whether page is loading
 * @param {string} title - Component Header Title
 * @param {node} children - Checkout Button content
 * @param {object} orderSummary - OrderSummary lineItem Details
 * @returns {*}
 * @constructor
 */
const OrderSummary = ({ pageName, isVip, title, isLoading, children, orderSummary, className }) => {
  const {
    itemsTotal,
    membershipSavings,
    promotionSavings,
    tax,
    shipping,
    estimatedTotals,
    vipRewardCash,
  } = orderSummary;
  if (isLoading) return <PlaceHolder />;

  return (
    <Row className={`${styles.orderSummary} ${className}`} rowGap={15} flexDirection="column">
      {title && <Typography variant="h3">{title}</Typography>}
      {itemsTotal && (
        <LineItem
          variant="p"
          {...itemsTotal}
          label={AppConfig.getCMSMessage('cart.order_summary.items_total')}
        />
      )}

      {isVip && membershipSavings && (
        <LineItem
          variant="p"
          {...membershipSavings}
          className={styles.orderSummaryVip}
          label={AppConfig.getCMSMessage('cart.order_summary.membership_savings')}
        />
      )}

      {pageName === 'orders' && isVip && vipRewardCash && (
        <LineItem
          variant="p"
          {...vipRewardCash}
          className={styles.orderSummaryVip}
          label={AppConfig.getCMSMessage('cart.order_summary.vip_reward_cash')}
        />
      )}

      {pageName !== 'orders' && isVip && promotionSavings && (
        <LineItem
          variant="p"
          {...promotionSavings}
          label={AppConfig.getCMSMessage('cart.order_summary.promotion_savings')}
        />
      )}

      {shipping && (
        <LineItem
          variant="p"
          {...shipping}
          label={AppConfig.getCMSMessage('cart.order_summary.shipping')}
        />
      )}

      {!(pageName === 'cart') && tax && (
        <LineItem variant="p" {...tax} label={AppConfig.getCMSMessage('cart.order_summary.tax')} />
      )}

      {estimatedTotals && (
        <LineItem
          variant="h4"
          {...estimatedTotals}
          label={AppConfig.getCMSMessage('cart.order_summary.estimated_totals')}
        />
      )}
      {children}
    </Row>
  );
};

OrderSummary.propTypes = {
  pageName: string.isRequired,
  isLoggedIn: bool,
  isVip: bool,
  title: string,
  isLoading: bool,
  className: string,
  children: oneOfType([string, node]),
  orderSummary: object,
};

OrderSummary.defaultProps = {
  orderSummary: {},
  pageName: '',
  isLoggedIn: false,
  isVip: false,
  title: '',
  isLoading: false,
  children: null,
  className: '',
};

export default OrderSummary;
