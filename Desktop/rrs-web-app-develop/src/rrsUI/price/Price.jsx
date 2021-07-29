/*
 * File: Price.jsx
 * Project: webapp-rrs
 */

// Import Dependencies, scss and helper function
import { number, shape, string, bool } from 'prop-types';
import { Row } from '../layout';
import styles from './Price.module.scss';

/**
 * Price Component
 * @param {string} priceInput -  price object
 * @param {string} className - to control the Price Component
 * @returns {*}
 */

const Price = ({ className, priceInput, type }) => {
  const { original, sale, vip, saleMessage, vipMessage, isUmap } = priceInput;

  if (!original) return null;

  const classes = [styles.price, className].join(' ').trim();

  // create price element based on conditions
  const renderPriceElement = (price, color, type) => {
    const priceStyle = styles.priceRegular;
    const priceClasses = [styles[color], priceStyle].join(' ').trim();
    return (
      <div>
        <span className={priceClasses}>{type === 'inSale' ? sale : price}</span>
        {type == 'inSale' && <span className={styles.priceOffer}>Was {original}</span>}
        {type == 'vip' && vip && vipMessage && (
          <span className={styles.messageVip}>{vipMessage}</span>
        )}
      </div>
    );
  };

  const renderPLPPrices = () => {
    const originalPrice = renderPriceElement(original, 'price-original', sale ? 'inSale' : null);
    const vipPrice = vip ? renderPriceElement(vip, 'price-vip', 'vip') : null;
    return (
      <>
        {originalPrice}
        {vipPrice}
      </>
    );
  };

  const renderSaleMessage = () => {
    if (type === 'plp' && isUmap && saleMessage) {
      return <div className={styles.messageVipBenefits}>{saleMessage}</div>;
    }
    return null;
  };

  const renderPrice = () => {
    if (type === 'plp') {
      return renderPLPPrices();
    }
  };

  return (
    <>
      <Row className={classes} flexDirection="column">
        {renderPrice()}
      </Row>
      {renderSaleMessage()}
    </>
  );
};

Price.propTypes = {
  className: string,
  priceInput: shape({
    original: number.isRequired,
    sale: number,
    vip: number,
    vipMessage: string,
    saleMessage: string,
    isUmap: bool,
  }).isRequired,
  type: string,
};

Price.defaultProps = {
  className: '',
  type: 'plp',
};

export default Price;
