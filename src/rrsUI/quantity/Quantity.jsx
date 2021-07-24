import { func, number, string } from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import { Row } from '../layout';
import styles from './Quantity.module.scss';

/**
 * Quantity Component
 * @param {number} initialQty -  initail Quantity received as a props
 * @param {number} minQty -  Minimum Quantity per product
 * @param {number} maxQty -  Maximum Quantity can be added per product
 * @param {number} handleOnQtyChange -  callback function after every quantity changes
 * @param {string} className - to control the Quantity Component
 * @returns {*}
 */
const Quantity = ({ className, initialQty, maxQty, minQty, handleOnQtyChange }) => {
  const [quantity, setQuantity] = useState();

  // set inital quantity and when props is changed
  useEffect(() => {
    setQuantity(initialQty);
  }, [initialQty]);

  //handle quantity increase and change
  const increaseQuantity = () => {
    setQuantity((preState) => preState + 1);
    handleOnQtyChange && handleOnQtyChange(quantity + 1);
  };

  //handle quantity decrease and change
  const decreaseQuantity = () => {
    setQuantity((preState) => preState - 1);
    handleOnQtyChange && handleOnQtyChange(quantity - 1);
  };

  const classes = [styles.quantity, className].join(' ').trim();

  return (
    <Row justifyContent="space-between" alignItems="center" className={classes}>
      <Button
        className={styles.quantityDecreaseBtn}
        disabled={quantity <= minQty}
        onClick={quantity > minQty ? decreaseQuantity : null}
        theme="white"
      >
        <Icon iconName="minus" />
      </Button>

      <span className={styles.quantityVal}>{quantity}</span>

      <Button
        className={styles.quantityIncreaseBtn}
        onClick={quantity < maxQty ? increaseQuantity : null}
        disabled={quantity >= maxQty}
        theme="white"
      >
        <Icon iconName="plus" />
      </Button>
    </Row>
  );
};

Quantity.propTypes = {
  className: string,
  initialQty: number,
  minQty: number,
  maxQty: number,
  handleOnQtyChange: func,
};

Quantity.defaultProps = {
  className: '',
  initialQty: 1,
  minQty: 1,
  maxQty: 999,
  handleOnQtyChange: null,
};
export default Quantity;
