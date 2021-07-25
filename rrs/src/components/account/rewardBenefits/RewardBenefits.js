import { Row, Col } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import Icon from '@RRS-UI/icon/Icon';
import { object } from 'prop-types';
import styles from './RewardBenefits.module.scss';

const RewardBenefits = ({ rewardsBenefit }) => {
  return (
    <Row rowGap={5}>
      {rewardsBenefit?.rewardCash?.map((rewardHistroy) => {
        return (
          <Col lg={3} key={rewardHistroy?.id} className={styles.reward}>
            <Row className={styles.rewardBox}>
              <Typography variant="h2" className={styles.rewardTitle}>
                {rewardHistroy?.rewards}
              </Typography>
              <Icon iconName={rewardHistroy?.iconName} className={styles.rewardIcon} />
              <Typography variant="h4" className={styles.rewardDescription}>
                {rewardHistroy?.description}
              </Typography>
              <Typography variant="p" className={styles.rewardSubtext}>
                {rewardHistroy?.subDescription}
              </Typography>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

RewardBenefits.propTypes = {
  rewardsBenefit: object.isRequired,
};

export default RewardBenefits;
