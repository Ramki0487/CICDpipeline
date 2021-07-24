import { string, array, func } from 'prop-types';
import { useEffect, useState } from 'react';
import { Row } from '@RRS-UI/layout';
import RadioButton from '@RRS-UI/radioButton/RadioButton';
import Typography from '@RRS-UI/typography/Typography';
import styles from './ShippingMethods.module.scss';

/**
 * ShippingMethods Component
 * @param {array} shippingMethods - Array of shipping methods objects
 * @param {function} handleOnChange - callback function on change
 * @param {string} defaultActive - unique value to identify default active item
 * @returns {*}
 * @constructor
 */

const ShippingMethods = ({ shippingMethods, defaultActive, handleOnChange }) => {
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    setActiveItem(defaultActive);
  }, [defaultActive]);

  const handleChange = (val) => {
    setActiveItem(val);
    handleOnChange && handleOnChange();
  };

  return (
    <Row className={styles.shippingMethodBlock}>
      {shippingMethods &&
        shippingMethods.map((item) => (
          <Row
            key={item.id}
            alignItems="center"
            className={styles.shippingMethodItem}
            onClick={() => handleChange(item.id)}
          >
            <RadioButton isSelected={item.id === activeItem} value={item.name} id={item.name} />
            <Typography className={styles.shippingMethodItemName} variant="h5">
              {item.name}
            </Typography>
            <Typography className={styles.shippingMethodItemCost} variant="h5">
              {item?.price?.currency}
              {item?.price?.amount}
            </Typography>
            <Typography className={styles.shippingMethodItemDesc} variant="p">
              {`Est. arrival ${item?.minDays} ${item?.maxDays}`}
            </Typography>
          </Row>
        ))}
    </Row>
  );
};

ShippingMethods.propTypes = {
  handleOnChange: func,
  shippingMethods: array,
  defaultActive: string,
};

ShippingMethods.defaultProps = {
  handleOnChange: null,
  defaultActive: '1',
  shippingMethods: null,
};

export default ShippingMethods;
