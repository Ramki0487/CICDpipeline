import Card from '@RRS-UI/card/Card';
import Icon from '@RRS-UI/icon/Icon';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Price from '@RRS-UI/price/Price';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func, object } from 'prop-types';
import { constructProductImageUrl } from '@Components/helpers/Product.helper';
import PlaceHolder from '../PlaceHolder';
import styles from './MembershipItem.module.scss';

/**
 * MembershipItem Component
 * @param {object} membershipItem  - VIP Membership details to be displayed
 * @param {function} isLoading - Flag to display busy loader
 * @param {boolean} isMobile - Flag to display device specific content
 * @param {function} handleRemove - Callback function on Mouse Over of swatch image
 * @returns
 */
const MembershipItem = ({ isLoading, isMobile, handleRemove, membershipItem }) => {
  if (isLoading) return <PlaceHolder />;

  // will remove later
  const vipInput = {
    originalPrice: 1.99,
  };

  const membershipInfoDesc = () => {
    return (
      <Typography variant="small" className={styles.membershipItemInfoDesc}>
        Only $1.99 for your first six months, then each year your membership will automatically
        renew for $39.99 and be charged to your credit/debit card on file. Cancel your vip
        membership any time to receive a prorated refund by calling (800) 543-7309 and requesting
        cancellation. Use of the membership constitutes acceptance of the full terms and conditions
        of membership available here.
      </Typography>
    );
  };
  return (
    <Row className={styles.membershipItem} rowGap={10} columnGutter={10}>
      <Col xs={4} className={styles.membershipItemCard}>
        <Card
          className={styles.membershipItemCardImg}
          image={
            <Image
              src={constructProductImageUrl(
                membershipItem?.product.id,
                membershipItem?.product.sku?.colorCode
              )}
              alt={membershipItem?.displayName}
            />
          }
        />
      </Col>
      <Col>
        <Row className={styles.membershipItemInfo} justifyContent="space-between" rowGap={10}>
          <Col xs={9}>
            <Row flexDirection="column" rowGap={10}>
              <Typography variant="h5" className={styles.membershipItemInfoName}>
                VIP Membership
              </Typography>
              <Typography variant="p" className={styles.membershipItemInfoMessage}>
                <Icon iconName={'welcome'} className={styles.membershipItemInfoIcon} /> New Member
                Welcome Message!
              </Typography>
            </Row>
          </Col>
          <Col xs={3}>
            <Price priceInput={vipInput} className={styles.membershipItemInfoPrice} />
          </Col>
          {!isMobile && membershipInfoDesc()}
          <Row justifyContent="flex-end">
            <Typography
              onClick={handleRemove}
              className={styles.membershipItemInfoAction}
              variant="h5"
            >
              Remove
            </Typography>
          </Row>
        </Row>
      </Col>
      {isMobile && membershipInfoDesc()}
    </Row>
  );
};

//PropType Validation
MembershipItem.propTypes = {
  isMobile: bool,
  membershipItem: object,
  isLoading: bool,
  handleRemove: func,
};

//Default Props
MembershipItem.defaultProps = {
  isLoading: false,
  isMobile: false,
  handleRemove: null,
};

export default MembershipItem;
