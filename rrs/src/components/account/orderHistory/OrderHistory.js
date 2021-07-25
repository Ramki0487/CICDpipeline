import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import Image from '@RRS-UI/image/Image';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { bool, object } from 'prop-types';
import styles from './OrderHistory.module.scss';

const OrderHistory = ({ historyDetails, isDesktop }) => {
  return (
    <Row rowGap={20}>
      <Row className={styles.history} alignItems="center" columnGap={30}>
        <Typography variant="h2" className={styles.historyTitle}>
          MY RECENT ORDERS
        </Typography>
        <LinkTag href="/account/orders">
          <Button size="large" className={styles.historyButton} tabIndex="-1">
            <Typography variant="p">See All Orders</Typography>
          </Button>
        </LinkTag>
      </Row>
      {historyDetails?.recentOrders?.orderHistory?.map((order) => (
        <Row key={order?.orderId} className={styles.historyContainer} flexDirection="column">
          <Col lg={4}>
            <Row
              justifyContent="space-between"
              flexDirection={isDesktop ? 'column' : 'row'}
              className={styles.historyContainerHeader}
              rowGap={10}
            >
              <Col>
                <Typography variant="h3">{order?.orderId}</Typography>
                <Typography variant="p">{order?.orderDate}</Typography>
              </Col>
              <Col noflex>
                <LinkTag href="/account/orders/detail">
                  <Button size="small" className={styles.historyItemLink} tabIndex="-1">
                    <Typography variant="p">
                      {isDesktop ? order?.orderLink : order?.mobileLink}
                    </Typography>
                  </Button>
                </LinkTag>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <Row className={styles.historyProduct} columnGap={15}>
              <Image
                src="https://roadrunnersports.scene7.com/is/image/roadrunnersports/36607-550?wid=122&hei=122"
                alt="Shoe"
              />
            </Row>
          </Col>
        </Row>
      ))}
    </Row>
  );
};

OrderHistory.propTypes = {
  isDesktop: bool,
  historyDetails: object.isRequired,
};

OrderHistory.defaultProps = {
  isDesktop: false,
};
export default OrderHistory;
