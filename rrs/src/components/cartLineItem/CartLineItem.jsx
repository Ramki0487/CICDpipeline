import { constructProductImageUrl } from '@Components/helpers/Product.helper';
import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Price from '@RRS-UI/price/Price';
import Quantity from '@RRS-UI/quantity/Quantity';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func, object } from 'prop-types';
import { formatPriceObject } from '@Components/helpers/Price.helper';
import styles from './CartLineItem.module.scss';
import PlaceHolder from './PlaceHolder';

/**
 * CartLineItem Component
 * @param {object} cartItem  - Product details to be displayed
 * @param {function} isLoading - Flag to display busy loader
 * @param {boolean} isMobile - Flag to display device specific content
 * @param {function} handleRemove - Callback function on delete cart item
 * @param {function} handleQuantity - Callback function on quantity update
 * @param {function} addMembershipToCart - Callback function on membership item added to cart
 * @param {boolean} readOnly - Flag to display readonly content
 * @returns
 */
const CartLineItem = ({
  cartItem: { product },
  isLoading,
  isMobile,
  handleRemove,
  handleQuantity,
  addMembershipToCart,
  readOnly,
}) => {
  if (isLoading) return <PlaceHolder />;

  // will remove later
  //Based on API response it will changed
  const price = [{ label: 'MSRP', amount: '119.95', type: 'MSRP', symbol: '$' }];
  const priceInput = formatPriceObject(price, '', false, false, false);

  const onMembershipItemAdd = () => {
    addMembershipToCart && addMembershipToCart();
  };

  const removeButton = () => {
    return (
      <Typography onClick={handleRemove} className={styles.cartItemInfoAction} variant="h5">
        Remove
      </Typography>
    );
  };

  const pickupStore = (storeName) => {
    return (
      <Typography variant="h5" className={styles.cartItemInfoStore}>
        {storeName}
      </Typography>
    );
  };

  const inventoryMessage = (inventoryStatus) => {
    return <Typography variant="h5">{inventoryStatus}</Typography>;
  };

  return (
    <Row className={styles.cartItem} rowGap={5} columnGutter={5}>
      <Col xs={4} className={styles.cartItemCard}>
        <Card
          image={
            <Image
              src={constructProductImageUrl(product?.id, product?.sku?.colorCode)}
              alt={product?.displayName}
            />
          }
        />
      </Col>

      <Col>
        <Row justifyContent="space-between" flexDirection="column" className={styles.cartItemInfo}>
          <Row rowGap={10} columnGutter={5} justifyContent="space-between">
            <Col md={readOnly ? 12 : 5}>
              <LinkTag href={product?.url}>
                <Typography variant="h4" className={styles.cartItemInfoName}>
                  {product?.displayName}
                </Typography>
              </LinkTag>
              <Row className flexDirection={readOnly ? 'row' : 'coulmn'}>
                <Row
                  className={readOnly ? styles.cartItemInfoLine : null}
                  flexDirection="column"
                  rowGap={readOnly ? null : 5}
                >
                  {product?.sku?.dimension?.map((item) => (
                    <Typography
                      key={item?.label}
                      variant={readOnly ? 'small' : 'p'}
                      className={styles.cartItemInfoDetails}
                    >
                      {item?.label?.toLowerCase() === 'flavor' ||
                      item?.label?.toLowerCase() === 'color'
                        ? item?.value
                        : `${item?.label} ${item?.value}`}
                    </Typography>
                  ))}
                  {readOnly ? (
                    <Typography variant="small">Quantity {product?.sku?.quantity}</Typography>
                  ) : (
                    <Typography variant="small">SKU {product?.sku?.skuId}</Typography>
                  )}
                </Row>
                {readOnly && (
                  <Price className={styles.cartItemInfoPriceReadOnly} priceInput={priceInput} />
                )}
              </Row>

              {!isMobile && !readOnly && (
                <Row flexDirection="column" rowGap={10}>
                  {pickupStore(product?.sku?.storeName)}
                  {inventoryMessage(product?.sku?.availabilityStatus)}
                </Row>
              )}
            </Col>
            {!readOnly && (
              <Col>
                <Row flexDirection="row">
                  <Col xs={4} md={5}>
                    <Quantity
                      handleOnQtyChange={handleQuantity}
                      className={styles.cartItemInfoQuantity}
                      initialQty={product?.quantity}
                      minQty={1}
                      maxQty={10}
                    />
                  </Col>
                  <Col className={styles.cartItemInfoPriceBox}>
                    <Row flexDirection="column" rowGap={5}>
                      <Price className={styles.cartItemInfoPrice} priceInput={priceInput} />
                      <Typography
                        variant="p"
                        className={styles.cartItemInfoAddVip}
                        onClick={onMembershipItemAdd}
                      >
                        Join VIP & Get this Price
                      </Typography>
                    </Row>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
          {!isMobile && !readOnly && (
            <Row justifyContent="flex-end" alignItems="flex-end">
              {removeButton()}
            </Row>
          )}
        </Row>
      </Col>
      {isMobile && !readOnly && (
        <>
          <Col xs={12}>{inventoryMessage(product?.sku?.availabilityStatus)}</Col>
          <Row justifyContent="space-between">
            {pickupStore(product?.sku?.storeName)}
            {removeButton()}
          </Row>
        </>
      )}
    </Row>
  );
};

//PropType Validation
CartLineItem.propTypes = {
  cartItem: object,
  isLoading: bool,
  isMobile: bool,
  handleRemove: func,
  handleQuantity: func,
  addMembershipToCart: func,
  readOnly: bool,
};

//Default props
CartLineItem.defaultProps = {
  isLoading: false,
  isMobile: false,
  handleRemove: null,
  handleQuantity: null,
  addMembershipToCart: null,
  readOnly: false,
};

export default CartLineItem;
