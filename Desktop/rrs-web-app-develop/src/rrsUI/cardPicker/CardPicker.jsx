import { bool, func, node, oneOfType, string } from 'prop-types';
import { Row } from '../layout';
import styles from './CardPicker.module.scss';

/**
 * CardPicker Component
 * @param {string} className - Classname to overrode styles
 * @param {children} children -  string or node to be dipalyed inside the card
 * @param {string} isSelected - To change card to be selected
 * @param {function} handleOnSelect - on slecting card callback function
 */
const CardPicker = ({ children, className, isSelected, handleOnSelect }) => {
  const classes = [styles.cardPicker, isSelected ? styles.cardPickerSelected : '', className]
    .join(' ')
    .trim();

  return (
    <Row
      className={classes}
      flexDirection="column"
      {...(handleOnSelect && { onClick: handleOnSelect })}
    >
      {children}
    </Row>
  );
};

CardPicker.propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
  isSelected: bool,
  handleOnSelect: func,
};

CardPicker.defaultProps = {
  className: '',
  isSelected: false,
  handleOnSelect: null,
};

export default CardPicker;
