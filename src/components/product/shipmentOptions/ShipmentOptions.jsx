/*
 * File: ShipmentOptions.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, July 17th 2021, 9:50:15 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 8:02:27 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import StoreLocatorModal from '@Components/storeLocatorModal/StoreLocatorModal';
import Button from '@RRS-UI/button/Button';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func, number, string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './ShipmentOptions.module.scss';

const ShipmentOptions = ({
  quantity,
  skuId,
  isAllVariantsSelected,
  validateVariantSelection,
  handleLocationIdChange,
  handleShipmentSelection,
}) => {
  const [selectedOption, setSelectedOption] = useState('ship');
  const [showStoreLocatorModal, setShowStoreLocatorModal] = useState(false);
  const [storeDetails, setStoreDetails] = useState({});

  const toggleStoreLocatorModal = (e) => {
    e?.stopPropagation();
    setShowStoreLocatorModal(!showStoreLocatorModal);
  };

  const handleOptionChange = () => {
    const newOption = selectedOption === 'ship' ? 'pickup' : 'ship';
    setSelectedOption(newOption);
    handleShipmentSelection(newOption);

    if (newOption === 'pickup' && !storeDetails?.storeName) {
      toggleStoreLocatorModal();
    }
  };

  const handleChangeStore = (storeDetails) => {
    handleLocationIdChange(storeDetails?.locationId);
    setStoreDetails(storeDetails);
  };

  useEffect(() => {
    if (storeDetails?.storeName) {
      setSelectedOption('pickup');
    }
  }, [storeDetails]);

  return (
    <>
      {isAllVariantsSelected && (
        <Row className={styles.shipment}>
          <Typography variant="h4">Availability</Typography>

          <Row alignItems="center" flexWrap="nowrap">
            <label
              className={`${styles.shipmentTab} ${
                selectedOption === 'pickup' ? styles.shipmentTabActive : ''
              } `}
              onClick={handleOptionChange}
            >
              <Icon iconName="pickup_truck" />
              <div className={styles.shipmentTabText}>
                <Typography variant="h5">Free In-store Pickup</Typography>
                {storeDetails?.storeName ? (
                  <>
                    <Typography variant="p">{`${storeDetails?.storeName} (${storeDetails?.distance} miles)`}</Typography>
                    <LinkTag onClick={toggleStoreLocatorModal}>Change Store</LinkTag>
                  </>
                ) : (
                  <Typography variant="p">
                    <LinkTag onClick={toggleStoreLocatorModal}>Choose Store</LinkTag>
                  </Typography>
                )}
              </div>
            </label>

            <label
              className={`${styles.shipmentTab} ${
                selectedOption === 'ship' ? styles.shipmentTabActive : ''
              }`}
              onClick={handleOptionChange}
            >
              <Icon iconName="ship_truck" />
              <div className={styles.shipmentTabText}>
                <Typography variant="h5">Ship to Me</Typography>
                <Typography variant="p">Delivered at your door step</Typography>
              </div>
            </label>
          </Row>
        </Row>
      )}

      {!isAllVariantsSelected && (
        <Row className={styles.shipmentBopis}>
          <Col xs={8} xl={9}>
            <Typography variant="h4">Curbside & In-store Pickup - Free</Typography>
            <Typography variant="p">
              {storeDetails?.storeName &&
                `${storeDetails?.storeName} (${storeDetails?.distance} miles)  `}
            </Typography>
          </Col>
          <Col xs={4} xl={3} alignSelf="flex-end">
            <Button
              theme="white"
              className={styles.shipmentBopisBtn}
              onClick={validateVariantSelection}
            >
              Choose Store
            </Button>
          </Col>
        </Row>
      )}

      {showStoreLocatorModal && (
        <StoreLocatorModal
          handleAfterClose={toggleStoreLocatorModal}
          onClick={handleChangeStore}
          showModal={true}
          skuId={skuId}
          quantity={quantity}
          locationId={storeDetails?.locationId}
        />
      )}
    </>
  );
};

ShipmentOptions.propTypes = {
  isAllVariantsSelected: bool,
  validateVariantSelection: func,
  skuId: string.isRequired,
  quantity: number.isRequired,
  handleLocationIdChange: func,
  handleShipmentSelection: func,
};

ShipmentOptions.defaultProps = {
  isAllVariantsSelected: false,
  validateVariantSelection: null,
  handleLocationIdChange: null,
  handleShipmentSelection: null,
};

export default ShipmentOptions;
