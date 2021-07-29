import Button from '@RRS-UI/button/Button';
import { Col, Row } from '@RRS-UI/layout';
import Panel from '@RRS-UI/panel/Panel';
import Typography from '@RRS-UI/typography/Typography';
import { object } from 'prop-types';
import styles from './AccountDetails.module.scss';

/**
 * AccountDetails Component
 * @param {object} details - object for accountDetails
 * @returns
 */

const AccountDetails = ({ details }) => {
  return (
    <Row className={styles.detailContainer} rowGap={20}>
      <Typography variant="h2" className={styles.detailTitle}>
        {details?.title}
      </Typography>
      <Row rowGap={20} columnGutter={15}>
        {details?.detailsInfo?.map((detail) => (
          <Col lg={6} key={detail?.id} className={styles.detailInfo}>
            <Panel>
              <Panel.Head className={styles.detailHeader}>
                <Row justifyContent="space-between" alignItems="center">
                  <Typography variant="h3" className={styles.detailTitle}>
                    {detail?.title}
                  </Typography>
                  <Button size="medium" className={styles.detailButton}>
                    {detail?.buttonText}
                  </Button>
                </Row>
              </Panel.Head>
              <Panel.Body className={styles.detailContent}>
                <Typography variant="h5">{detail?.name}</Typography>
                <Typography variant="p">{detail?.text}</Typography>
                <Typography variant="p">{detail?.subText}</Typography>
              </Panel.Body>
            </Panel>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

/** Peform prop validation */
AccountDetails.propTypes = {
  details: object.isRequired,
};

export default AccountDetails;
